import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { NotifyWhenUploadedInput, NotifyWhenUploadedOutput } from "../models/models_0";
import {
  deserializeAws_json1_1NotifyWhenUploadedCommand,
  serializeAws_json1_1NotifyWhenUploadedCommand,
} from "../protocols/Aws_json1_1";
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

export type NotifyWhenUploadedCommandInput = NotifyWhenUploadedInput;
export type NotifyWhenUploadedCommandOutput = NotifyWhenUploadedOutput & __MetadataBearer;

/**
 * <p>Sends you notification through CloudWatch Events when all files written to your file
 *          share have been uploaded to Amazon S3.</p>
 *
 *          <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all
 *          files written to your file share up to that point in time have been uploaded to Amazon S3.
 *          These files include files written to the file share up to the time that you make a request
 *          for notification. When the upload is done, Storage Gateway sends you notification through
 *          an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification
 *          through event targets such as Amazon SNS or AWS Lambda function. This operation is only
 *          supported for file gateways.</p>
 *
 *
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>AWS Storage Gateway User
 *             Guide</i>.</p>
 */
export class NotifyWhenUploadedCommand extends $Command<
  NotifyWhenUploadedCommandInput,
  NotifyWhenUploadedCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NotifyWhenUploadedCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "NotifyWhenUploadedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyWhenUploadedInput.filterSensitiveLog,
      outputFilterSensitiveLog: NotifyWhenUploadedOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyWhenUploadedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyWhenUploadedCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyWhenUploadedCommandOutput> {
    return deserializeAws_json1_1NotifyWhenUploadedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
