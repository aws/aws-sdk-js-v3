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
  NotifyWhenUploadedInput,
  NotifyWhenUploadedInputFilterSensitiveLog,
  NotifyWhenUploadedOutput,
  NotifyWhenUploadedOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1NotifyWhenUploadedCommand,
  serializeAws_json1_1NotifyWhenUploadedCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface NotifyWhenUploadedCommandInput extends NotifyWhenUploadedInput {}
export interface NotifyWhenUploadedCommandOutput extends NotifyWhenUploadedOutput, __MetadataBearer {}

/**
 * <p>Sends you notification through CloudWatch Events when all files written to your file
 *          share have been uploaded to S3. Amazon S3.</p>
 *
 *          <p>Storage Gateway can send a notification through Amazon CloudWatch Events when all
 *          files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you
 *          make a request for notification. When the upload is done, Storage Gateway sends you
 *          notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to
 *          send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways.</p>
 *
 *
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>Storage Gateway User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, NotifyWhenUploadedCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, NotifyWhenUploadedCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new NotifyWhenUploadedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyWhenUploadedCommandInput} for command's `input` shape.
 * @see {@link NotifyWhenUploadedCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class NotifyWhenUploadedCommand extends $Command<
  NotifyWhenUploadedCommandInput,
  NotifyWhenUploadedCommandOutput,
  StorageGatewayClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyWhenUploadedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "NotifyWhenUploadedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyWhenUploadedInputFilterSensitiveLog,
      outputFilterSensitiveLog: NotifyWhenUploadedOutputFilterSensitiveLog,
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
