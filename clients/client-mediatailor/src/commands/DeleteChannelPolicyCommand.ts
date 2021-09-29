import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeleteChannelPolicyRequest, DeleteChannelPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteChannelPolicyCommand,
  serializeAws_restJson1DeleteChannelPolicyCommand,
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

export interface DeleteChannelPolicyCommandInput extends DeleteChannelPolicyRequest {}
export interface DeleteChannelPolicyCommandOutput extends DeleteChannelPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes a channel's IAM policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteChannelPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteChannelPolicyCommand extends $Command<
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteChannelPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteChannelPolicyCommandInput, DeleteChannelPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "DeleteChannelPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteChannelPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteChannelPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteChannelPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteChannelPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteChannelPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteChannelPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
