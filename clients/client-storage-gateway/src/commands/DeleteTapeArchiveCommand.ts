// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTapeArchiveInput, DeleteTapeArchiveOutput } from "../models/models_0";
import { de_DeleteTapeArchiveCommand, se_DeleteTapeArchiveCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTapeArchiveCommand}.
 */
export interface DeleteTapeArchiveCommandInput extends DeleteTapeArchiveInput {}
/**
 * @public
 *
 * The output of {@link DeleteTapeArchiveCommand}.
 */
export interface DeleteTapeArchiveCommandOutput extends DeleteTapeArchiveOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteTapeArchiveInput
 *   TapeARN: "STRING_VALUE", // required
 *   BypassGovernanceRetention: true || false,
 * };
 * const command = new DeleteTapeArchiveCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTapeArchiveOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTapeArchiveCommandInput - {@link DeleteTapeArchiveCommandInput}
 * @returns {@link DeleteTapeArchiveCommandOutput}
 * @see {@link DeleteTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link DeleteTapeArchiveCommandOutput} for command's `response` shape.
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
 * @public
 * @example To delete a virtual tape from the shelf (VTS)
 * ```javascript
 * // Deletes the specified virtual tape from the virtual tape shelf (VTS).
 * const input = {
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
 * };
 * const command = new DeleteTapeArchiveCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
 * }
 * *\/
 * // example id: to-delete-a-virtual-tape-from-the-shelf-vts-1471383964329
 * ```
 *
 */
export class DeleteTapeArchiveCommand extends $Command
  .classBuilder<
    DeleteTapeArchiveCommandInput,
    DeleteTapeArchiveCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DeleteTapeArchive", {})
  .n("StorageGatewayClient", "DeleteTapeArchiveCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTapeArchiveCommand)
  .de(de_DeleteTapeArchiveCommand)
  .build() {}
