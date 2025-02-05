// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApproximateUsageRecordsRequest, GetApproximateUsageRecordsResponse } from "../models/models_0";
import { de_GetApproximateUsageRecordsCommand, se_GetApproximateUsageRecordsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApproximateUsageRecordsCommand}.
 */
export interface GetApproximateUsageRecordsCommandInput extends GetApproximateUsageRecordsRequest {}
/**
 * @public
 *
 * The output of {@link GetApproximateUsageRecordsCommand}.
 */
export interface GetApproximateUsageRecordsCommandOutput extends GetApproximateUsageRecordsResponse, __MetadataBearer {}

/**
 * <p>Retrieves estimated usage records for hourly granularity or resource-level data at daily
 *       granularity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetApproximateUsageRecordsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetApproximateUsageRecordsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CostExplorerClient(config);
 * const input = { // GetApproximateUsageRecordsRequest
 *   Granularity: "DAILY" || "MONTHLY" || "HOURLY", // required
 *   Services: [ // UsageServices
 *     "STRING_VALUE",
 *   ],
 *   ApproximationDimension: "SERVICE" || "RESOURCE", // required
 * };
 * const command = new GetApproximateUsageRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetApproximateUsageRecordsResponse
 * //   Services: { // ApproximateUsageRecordsPerService
 * //     "<keys>": Number("long"),
 * //   },
 * //   TotalRecords: Number("long"),
 * //   LookbackPeriod: { // DateInterval
 * //     Start: "STRING_VALUE", // required
 * //     End: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApproximateUsageRecordsCommandInput - {@link GetApproximateUsageRecordsCommandInput}
 * @returns {@link GetApproximateUsageRecordsCommandOutput}
 * @see {@link GetApproximateUsageRecordsCommandInput} for command's `input` shape.
 * @see {@link GetApproximateUsageRecordsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 * @public
 */
export class GetApproximateUsageRecordsCommand extends $Command
  .classBuilder<
    GetApproximateUsageRecordsCommandInput,
    GetApproximateUsageRecordsCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "GetApproximateUsageRecords", {})
  .n("CostExplorerClient", "GetApproximateUsageRecordsCommand")
  .f(void 0, void 0)
  .ser(se_GetApproximateUsageRecordsCommand)
  .de(de_GetApproximateUsageRecordsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApproximateUsageRecordsRequest;
      output: GetApproximateUsageRecordsResponse;
    };
    sdk: {
      input: GetApproximateUsageRecordsCommandInput;
      output: GetApproximateUsageRecordsCommandOutput;
    };
  };
}
