// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTapeRecoveryPointsInput, DescribeTapeRecoveryPointsOutput } from "../models/models_0";
import { de_DescribeTapeRecoveryPointsCommand, se_DescribeTapeRecoveryPointsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTapeRecoveryPointsCommand}.
 */
export interface DescribeTapeRecoveryPointsCommandInput extends DescribeTapeRecoveryPointsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTapeRecoveryPointsCommand}.
 */
export interface DescribeTapeRecoveryPointsCommandOutput extends DescribeTapeRecoveryPointsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of virtual tape recovery points that are available for the specified tape
 *          gateway.</p>
 *          <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the
 *          virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
 *          points can be recovered to a new gateway. This operation is only supported in the tape
 *          gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeTapeRecoveryPointsInput
 *   GatewayARN: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTapeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTapeRecoveryPointsOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   TapeRecoveryPointInfos: [ // TapeRecoveryPointInfos
 * //     { // TapeRecoveryPointInfo
 * //       TapeARN: "STRING_VALUE",
 * //       TapeRecoveryPointTime: new Date("TIMESTAMP"),
 * //       TapeSizeInBytes: Number("long"),
 * //       TapeStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTapeRecoveryPointsCommandInput - {@link DescribeTapeRecoveryPointsCommandInput}
 * @returns {@link DescribeTapeRecoveryPointsCommandOutput}
 * @see {@link DescribeTapeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeRecoveryPointsCommandOutput} for command's `response` shape.
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
 * @example To describe virtual tape recovery points
 * ```javascript
 * // Returns a list of virtual tape recovery points that are available for the specified gateway-VTL.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "Limit": 1,
 *   "Marker": "1"
 * };
 * const command = new DescribeTapeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "Marker": "1",
 *   "TapeRecoveryPointInfos": [
 *     {
 *       "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4",
 *       "TapeRecoveryPointTime": "2016-12-16T13:50Z",
 *       "TapeSizeInBytes": 1471550497,
 *       "TapeStatus": "AVAILABLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-virtual-tape-recovery-points-1471542042026
 * ```
 *
 */
export class DescribeTapeRecoveryPointsCommand extends $Command
  .classBuilder<
    DescribeTapeRecoveryPointsCommandInput,
    DescribeTapeRecoveryPointsCommandOutput,
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
  .s("StorageGateway_20130630", "DescribeTapeRecoveryPoints", {})
  .n("StorageGatewayClient", "DescribeTapeRecoveryPointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTapeRecoveryPointsCommand)
  .de(de_DescribeTapeRecoveryPointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTapeRecoveryPointsInput;
      output: DescribeTapeRecoveryPointsOutput;
    };
    sdk: {
      input: DescribeTapeRecoveryPointsCommandInput;
      output: DescribeTapeRecoveryPointsCommandOutput;
    };
  };
}
