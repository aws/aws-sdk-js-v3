// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CrlDetailResponse, ScalarCrlRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DisableCrlCommand,
  serializeAws_restJson1DisableCrlCommand,
} from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 *
 * The input for {@link DisableCrlCommand}.
 */
export interface DisableCrlCommandInput extends ScalarCrlRequest {}
/**
 * @public
 *
 * The output of {@link DisableCrlCommand}.
 */
export interface DisableCrlCommandOutput extends CrlDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disables a certificate revocation list (CRL).</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:DisableCrl</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, DisableCrlCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, DisableCrlCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const command = new DisableCrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisableCrlCommandInput - {@link DisableCrlCommandInput}
 * @returns {@link DisableCrlCommandOutput}
 * @see {@link DisableCrlCommandInput} for command's `input` shape.
 * @see {@link DisableCrlCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 *
 */
export class DisableCrlCommand extends $Command<
  DisableCrlCommandInput,
  DisableCrlCommandOutput,
  RolesAnywhereClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DisableCrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableCrlCommandInput, DisableCrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DisableCrlCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "DisableCrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DisableCrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableCrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableCrlCommandOutput> {
    return deserializeAws_restJson1DisableCrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
