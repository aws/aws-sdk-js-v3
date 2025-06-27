// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCacheReportInput, DeleteCacheReportOutput } from "../models/models_0";
import { de_DeleteCacheReportCommand, se_DeleteCacheReportCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCacheReportCommand}.
 */
export interface DeleteCacheReportCommandInput extends DeleteCacheReportInput {}
/**
 * @public
 *
 * The output of {@link DeleteCacheReportCommand}.
 */
export interface DeleteCacheReportCommandOutput extends DeleteCacheReportOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the
 *          report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You
 *          can use <code>CancelCacheReport</code> to cancel an IN-PROGRESS report.</p>
 *          <note>
 *             <p>
 *                <code>DeleteCacheReport</code> does not delete the report object from your Amazon S3 bucket.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteCacheReportCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteCacheReportCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteCacheReportInput
 *   CacheReportARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteCacheReportCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCacheReportOutput
 * //   CacheReportARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCacheReportCommandInput - {@link DeleteCacheReportCommandInput}
 * @returns {@link DeleteCacheReportCommandOutput}
 * @see {@link DeleteCacheReportCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheReportCommandOutput} for command's `response` shape.
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
export class DeleteCacheReportCommand extends $Command
  .classBuilder<
    DeleteCacheReportCommandInput,
    DeleteCacheReportCommandOutput,
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
  .s("StorageGateway_20130630", "DeleteCacheReport", {})
  .n("StorageGatewayClient", "DeleteCacheReportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCacheReportCommand)
  .de(de_DeleteCacheReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCacheReportInput;
      output: DeleteCacheReportOutput;
    };
    sdk: {
      input: DeleteCacheReportCommandInput;
      output: DeleteCacheReportCommandOutput;
    };
  };
}
