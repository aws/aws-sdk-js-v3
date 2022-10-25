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

import {
  ScalarTrustAnchorRequest,
  ScalarTrustAnchorRequestFilterSensitiveLog,
  TrustAnchorDetailResponse,
  TrustAnchorDetailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1EnableTrustAnchorCommand,
  serializeAws_restJson1EnableTrustAnchorCommand,
} from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

export interface EnableTrustAnchorCommandInput extends ScalarTrustAnchorRequest {}
export interface EnableTrustAnchorCommandOutput extends TrustAnchorDetailResponse, __MetadataBearer {}

/**
 * <p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:EnableTrustAnchor</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, EnableTrustAnchorCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, EnableTrustAnchorCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const command = new EnableTrustAnchorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableTrustAnchorCommandInput} for command's `input` shape.
 * @see {@link EnableTrustAnchorCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 */
export class EnableTrustAnchorCommand extends $Command<
  EnableTrustAnchorCommandInput,
  EnableTrustAnchorCommandOutput,
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

  constructor(readonly input: EnableTrustAnchorCommandInput) {
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
  ): Handler<EnableTrustAnchorCommandInput, EnableTrustAnchorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableTrustAnchorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "EnableTrustAnchorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScalarTrustAnchorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TrustAnchorDetailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableTrustAnchorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableTrustAnchorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableTrustAnchorCommandOutput> {
    return deserializeAws_restJson1EnableTrustAnchorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
