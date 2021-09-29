import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowEntitlementRequest, UpdateFlowEntitlementResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFlowEntitlementCommand,
  serializeAws_restJson1UpdateFlowEntitlementCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateFlowEntitlementCommandInput extends UpdateFlowEntitlementRequest {}
export interface UpdateFlowEntitlementCommandOutput extends UpdateFlowEntitlementResponse, __MetadataBearer {}

/**
 * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowEntitlementCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowEntitlementCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new UpdateFlowEntitlementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowEntitlementCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowEntitlementCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFlowEntitlementCommand extends $Command<
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFlowEntitlementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFlowEntitlementCommandInput, UpdateFlowEntitlementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateFlowEntitlementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFlowEntitlementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFlowEntitlementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFlowEntitlementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFlowEntitlementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowEntitlementCommandOutput> {
    return deserializeAws_restJson1UpdateFlowEntitlementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
