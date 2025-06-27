// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RetrieveTapeArchiveInput, RetrieveTapeArchiveOutput } from "../models/models_0";
import { de_RetrieveTapeArchiveCommand, se_RetrieveTapeArchiveCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RetrieveTapeArchiveCommand}.
 */
export interface RetrieveTapeArchiveCommandInput extends RetrieveTapeArchiveInput {}
/**
 * @public
 *
 * The output of {@link RetrieveTapeArchiveCommand}.
 */
export interface RetrieveTapeArchiveCommandOutput extends RetrieveTapeArchiveOutput, __MetadataBearer {}

/**
 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
 *          Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
 *          is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
 *          that is, archive. This operation is only supported in the tape gateway type.</p>
 *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
 *          another gateway. You must archive the tape again before you can retrieve it to another
 *          gateway. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // RetrieveTapeArchiveInput
 *   TapeARN: "STRING_VALUE", // required
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new RetrieveTapeArchiveCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveTapeArchiveOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetrieveTapeArchiveCommandInput - {@link RetrieveTapeArchiveCommandInput}
 * @returns {@link RetrieveTapeArchiveCommandOutput}
 * @see {@link RetrieveTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeArchiveCommandOutput} for command's `response` shape.
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
 * @example To retrieve an archived tape from the VTS
 * ```javascript
 * // Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a gateway-VTL. Virtual tapes archived in the VTS are not associated with any gateway.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
 * };
 * const command = new RetrieveTapeArchiveCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RetrieveTapeArchiveCommand extends $Command
  .classBuilder<
    RetrieveTapeArchiveCommandInput,
    RetrieveTapeArchiveCommandOutput,
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
  .s("StorageGateway_20130630", "RetrieveTapeArchive", {})
  .n("StorageGatewayClient", "RetrieveTapeArchiveCommand")
  .f(void 0, void 0)
  .ser(se_RetrieveTapeArchiveCommand)
  .de(de_RetrieveTapeArchiveCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetrieveTapeArchiveInput;
      output: RetrieveTapeArchiveOutput;
    };
    sdk: {
      input: RetrieveTapeArchiveCommandInput;
      output: RetrieveTapeArchiveCommandOutput;
    };
  };
}
