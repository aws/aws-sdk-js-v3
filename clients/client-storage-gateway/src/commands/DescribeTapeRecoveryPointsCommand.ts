// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTapeRecoveryPointsInput, DescribeTapeRecoveryPointsOutput } from "../models/models_0";
import { DescribeTapeRecoveryPoints } from "../schemas/schemas_0";
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
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
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
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeTapeRecoveryPoints", {})
  .n("StorageGatewayClient", "DescribeTapeRecoveryPointsCommand")
  .sc(DescribeTapeRecoveryPoints)
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
