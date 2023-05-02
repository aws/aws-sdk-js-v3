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

import { ScalarTrustAnchorRequest, TrustAnchorDetailResponse } from "../models/models_0";
import { de_GetTrustAnchorCommand, se_GetTrustAnchorCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 *
 * The input for {@link GetTrustAnchorCommand}.
 */
export interface GetTrustAnchorCommandInput extends ScalarTrustAnchorRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustAnchorCommand}.
 */
export interface GetTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a trust anchor.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:GetTrustAnchor</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, GetTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, GetTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ScalarTrustAnchorRequest
 *   trustAnchorId: "STRING_VALUE", // required
 * };
 * const command = new GetTrustAnchorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetTrustAnchorCommandInput - {@link GetTrustAnchorCommandInput}
 * @returns {@link GetTrustAnchorCommandOutput}
 * @see {@link GetTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link GetTrustAnchorCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 *
 */
export class GetTrustAnchorCommand extends $Command<
  GetTrustAnchorCommandInput,
  GetTrustAnchorCommandOutput,
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
  constructor(readonly input: GetTrustAnchorCommandInput) {
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
  ): Handler<GetTrustAnchorCommandInput, GetTrustAnchorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrustAnchorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "GetTrustAnchorCommand";
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
  private serialize(input: GetTrustAnchorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTrustAnchorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrustAnchorCommandOutput> {
    return de_GetTrustAnchorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
