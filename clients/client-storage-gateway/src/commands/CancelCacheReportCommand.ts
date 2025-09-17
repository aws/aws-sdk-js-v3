// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelCacheReportInput, CancelCacheReportOutput } from "../models/models_0";
import { de_CancelCacheReportCommand, se_CancelCacheReportCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelCacheReportCommand}.
 */
export interface CancelCacheReportCommandInput extends CancelCacheReportInput {}
/**
 * @public
 *
 * The output of {@link CancelCacheReportCommand}.
 */
export interface CancelCacheReportCommandOutput extends CancelCacheReportOutput, __MetadataBearer {}

/**
 * <p>Cancels generation of a specified cache report. You can use this operation to manually
 *          cancel an IN-PROGRESS report for any reason. This action changes the report status from
 *          IN-PROGRESS to CANCELLED. You can only cancel in-progress reports. If the the report you
 *          attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel operation returns an
 *          error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CancelCacheReportCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CancelCacheReportCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CancelCacheReportInput
 *   CacheReportARN: "STRING_VALUE", // required
 * };
 * const command = new CancelCacheReportCommand(input);
 * const response = await client.send(command);
 * // { // CancelCacheReportOutput
 * //   CacheReportARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelCacheReportCommandInput - {@link CancelCacheReportCommandInput}
 * @returns {@link CancelCacheReportCommandOutput}
 * @see {@link CancelCacheReportCommandInput} for command's `input` shape.
 * @see {@link CancelCacheReportCommandOutput} for command's `response` shape.
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
export class CancelCacheReportCommand extends $Command
  .classBuilder<
    CancelCacheReportCommandInput,
    CancelCacheReportCommandOutput,
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
  .s("StorageGateway_20130630", "CancelCacheReport", {})
  .n("StorageGatewayClient", "CancelCacheReportCommand")
  .f(void 0, void 0)
  .ser(se_CancelCacheReportCommand)
  .de(de_CancelCacheReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCacheReportInput;
      output: CancelCacheReportOutput;
    };
    sdk: {
      input: CancelCacheReportCommandInput;
      output: CancelCacheReportCommandOutput;
    };
  };
}
