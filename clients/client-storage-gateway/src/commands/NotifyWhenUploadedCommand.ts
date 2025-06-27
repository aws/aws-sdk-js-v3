// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { NotifyWhenUploadedInput, NotifyWhenUploadedOutput } from "../models/models_0";
import { de_NotifyWhenUploadedCommand, se_NotifyWhenUploadedCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Sends you notification through Amazon EventBridge when all files written to your file
 *          share have been uploaded to Amazon S3.</p>
 *          <p>Storage Gateway can send a notification through Amazon EventBridge when all
 *          files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you
 *          make a request for notification. When the upload is done, Storage Gateway sends you
 *          notification through EventBridge. You can configure EventBridge to send the
 *          notification through event targets such as Amazon SNS or Lambda
 *          function. This operation is only supported for S3 File Gateways.</p>
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
 *
 * @public
 */
export class NotifyWhenUploadedCommand extends $Command
  .classBuilder<
    NotifyWhenUploadedCommandInput,
    NotifyWhenUploadedCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "NotifyWhenUploaded", {})
  .n("StorageGatewayClient", "NotifyWhenUploadedCommand")
  .f(void 0, void 0)
  .ser(se_NotifyWhenUploadedCommand)
  .de(de_NotifyWhenUploadedCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyWhenUploadedInput;
      output: NotifyWhenUploadedOutput;
    };
    sdk: {
      input: NotifyWhenUploadedCommandInput;
      output: NotifyWhenUploadedCommandOutput;
    };
  };
}
