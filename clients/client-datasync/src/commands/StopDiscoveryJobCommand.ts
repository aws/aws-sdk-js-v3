// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopDiscoveryJobRequest, StopDiscoveryJobResponse } from "../models/models_0";
import { de_StopDiscoveryJobCommand, se_StopDiscoveryJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDiscoveryJobCommand}.
 */
export interface StopDiscoveryJobCommandInput extends StopDiscoveryJobRequest {}
/**
 * @public
 *
 * The output of {@link StopDiscoveryJobCommand}.
 */
export interface StopDiscoveryJobCommandOutput extends StopDiscoveryJobResponse, __MetadataBearer {}

/**
 * <p>Stops a running DataSync discovery job.</p>
 *          <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end
 *       likely will provide you some information about your on-premises storage system resources. To
 *       get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StopDiscoveryJobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StopDiscoveryJobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // StopDiscoveryJobRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 * };
 * const command = new StopDiscoveryJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopDiscoveryJobCommandInput - {@link StopDiscoveryJobCommandInput}
 * @returns {@link StopDiscoveryJobCommandOutput}
 * @see {@link StopDiscoveryJobCommandInput} for command's `input` shape.
 * @see {@link StopDiscoveryJobCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class StopDiscoveryJobCommand extends $Command
  .classBuilder<
    StopDiscoveryJobCommandInput,
    StopDiscoveryJobCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "StopDiscoveryJob", {})
  .n("DataSyncClient", "StopDiscoveryJobCommand")
  .f(void 0, void 0)
  .ser(se_StopDiscoveryJobCommand)
  .de(de_StopDiscoveryJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDiscoveryJobRequest;
      output: {};
    };
    sdk: {
      input: StopDiscoveryJobCommandInput;
      output: StopDiscoveryJobCommandOutput;
    };
  };
}
