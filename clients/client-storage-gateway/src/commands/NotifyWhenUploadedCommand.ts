// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { NotifyWhenUploadedInput, NotifyWhenUploadedOutput } from "../models/models_0";
import { de_NotifyWhenUploadedCommand, se_NotifyWhenUploadedCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NotifyWhenUploadedCommand}.
 */
export interface NotifyWhenUploadedCommandInput extends NotifyWhenUploadedInput {}
/**
 * @public
 *
 * The output of {@link NotifyWhenUploadedCommand}.
 */
export interface NotifyWhenUploadedCommandOutput extends NotifyWhenUploadedOutput, __MetadataBearer {}

/**
 * @public
 * <p>Sends you notification through CloudWatch Events when all files written to your file
 *          share have been uploaded to S3. Amazon S3.</p>
 *          <p>Storage Gateway can send a notification through Amazon CloudWatch Events when all
 *          files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you
 *          make a request for notification. When the upload is done, Storage Gateway sends you
 *          notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to
 *          send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/filegateway/latest/files3/monitoring-file-gateway.html#get-notification">Getting
 *             file upload notification</a> in the <i>Amazon S3 File Gateway User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, NotifyWhenUploadedCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, NotifyWhenUploadedCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // NotifyWhenUploadedInput
 *   FileShareARN: "STRING_VALUE", // required
 * };
 * const command = new NotifyWhenUploadedCommand(input);
 * const response = await client.send(command);
 * // { // NotifyWhenUploadedOutput
 * //   FileShareARN: "STRING_VALUE",
 * //   NotificationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param NotifyWhenUploadedCommandInput - {@link NotifyWhenUploadedCommandInput}
 * @returns {@link NotifyWhenUploadedCommandOutput}
 * @see {@link NotifyWhenUploadedCommandInput} for command's `input` shape.
 * @see {@link NotifyWhenUploadedCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "NotifyWhenUploaded",
      },
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
  private serialize(input: NotifyWhenUploadedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NotifyWhenUploadedCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyWhenUploadedCommandOutput> {
    return de_NotifyWhenUploadedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
