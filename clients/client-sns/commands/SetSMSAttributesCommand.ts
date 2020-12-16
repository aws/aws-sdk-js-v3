import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetSMSAttributesInput, SetSMSAttributesResponse } from "../models/models_0";
import {
  deserializeAws_querySetSMSAttributesCommand,
  serializeAws_querySetSMSAttributesCommand,
} from "../protocols/Aws_query";
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

export type SetSMSAttributesCommandInput = SetSMSAttributesInput;
export type SetSMSAttributesCommandOutput = SetSMSAttributesResponse & __MetadataBearer;

/**
 * <p>Use this request to set the default settings for sending SMS messages and receiving
 *             daily SMS usage reports.</p>
 *         <p>You can override some of these settings for a single message when you use the
 *                 <code>Publish</code> action with the <code>MessageAttributes.entry.N</code>
 *             parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the
 *                 <i>Amazon SNS Developer Guide</i>.</p>
 */
export class SetSMSAttributesCommand extends $Command<
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetSMSAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SetSMSAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSMSAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetSMSAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSMSAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSMSAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSMSAttributesCommandOutput> {
    return deserializeAws_querySetSMSAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
