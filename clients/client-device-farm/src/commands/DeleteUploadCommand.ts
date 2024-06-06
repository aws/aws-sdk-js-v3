// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUploadRequest, DeleteUploadResult } from "../models/models_0";
import { de_DeleteUploadCommand, se_DeleteUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUploadCommand}.
 */
export interface DeleteUploadCommandInput extends DeleteUploadRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUploadCommand}.
 */
export interface DeleteUploadCommandOutput extends DeleteUploadResult, __MetadataBearer {}

/**
 * <p>Deletes an upload given the upload ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteUploadRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteUploadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUploadCommandInput - {@link DeleteUploadCommandInput}
 * @returns {@link DeleteUploadCommandOutput}
 * @see {@link DeleteUploadCommandInput} for command's `input` shape.
 * @see {@link DeleteUploadCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @public
 * @example To delete a specific upload
 * ```javascript
 * // The following example deletes a specific upload.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:upload:EXAMPLE-GUID-123-456"
 * };
 * const command = new DeleteUploadCommand(input);
 * await client.send(command);
 * // example id: deleteupload-example-1470868363942
 * ```
 *
 */
export class DeleteUploadCommand extends $Command
  .classBuilder<
    DeleteUploadCommandInput,
    DeleteUploadCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "DeleteUpload", {})
  .n("DeviceFarmClient", "DeleteUploadCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUploadCommand)
  .de(de_DeleteUploadCommand)
  .build() {}
