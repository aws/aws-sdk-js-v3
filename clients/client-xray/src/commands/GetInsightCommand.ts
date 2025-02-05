// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightRequest, GetInsightResult } from "../models/models_0";
import { de_GetInsightCommand, se_GetInsightCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightCommand}.
 */
export interface GetInsightCommandInput extends GetInsightRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightCommand}.
 */
export interface GetInsightCommandOutput extends GetInsightResult, __MetadataBearer {}

/**
 * <p>Retrieves the summary information of an insight. This includes impact to clients and
 *          root cause services, the top anomalous services, the category, the state of the insight,
 *          and the start and end time of the insight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new XRayClient(config);
 * const input = { // GetInsightRequest
 *   InsightId: "STRING_VALUE", // required
 * };
 * const command = new GetInsightCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightResult
 * //   Insight: { // Insight
 * //     InsightId: "STRING_VALUE",
 * //     GroupARN: "STRING_VALUE",
 * //     GroupName: "STRING_VALUE",
 * //     RootCauseServiceId: { // ServiceId
 * //       Name: "STRING_VALUE",
 * //       Names: [ // ServiceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //     Categories: [ // InsightCategoryList
 * //       "FAULT",
 * //     ],
 * //     State: "ACTIVE" || "CLOSED",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Summary: "STRING_VALUE",
 * //     ClientRequestImpactStatistics: { // RequestImpactStatistics
 * //       FaultCount: Number("long"),
 * //       OkCount: Number("long"),
 * //       TotalCount: Number("long"),
 * //     },
 * //     RootCauseServiceRequestImpactStatistics: {
 * //       FaultCount: Number("long"),
 * //       OkCount: Number("long"),
 * //       TotalCount: Number("long"),
 * //     },
 * //     TopAnomalousServices: [ // AnomalousServiceList
 * //       { // AnomalousService
 * //         ServiceId: {
 * //           Name: "STRING_VALUE",
 * //           Names: [
 * //             "STRING_VALUE",
 * //           ],
 * //           AccountId: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInsightCommandInput - {@link GetInsightCommandInput}
 * @returns {@link GetInsightCommandOutput}
 * @see {@link GetInsightCommandInput} for command's `input` shape.
 * @see {@link GetInsightCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 * @public
 */
export class GetInsightCommand extends $Command
  .classBuilder<
    GetInsightCommandInput,
    GetInsightCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "GetInsight", {})
  .n("XRayClient", "GetInsightCommand")
  .f(void 0, void 0)
  .ser(se_GetInsightCommand)
  .de(de_GetInsightCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightRequest;
      output: GetInsightResult;
    };
    sdk: {
      input: GetInsightCommandInput;
      output: GetInsightCommandOutput;
    };
  };
}
