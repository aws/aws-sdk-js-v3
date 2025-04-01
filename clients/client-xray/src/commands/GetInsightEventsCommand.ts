// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightEventsRequest, GetInsightEventsResult } from "../models/models_0";
import { de_GetInsightEventsCommand, se_GetInsightEventsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightEventsCommand}.
 */
export interface GetInsightEventsCommandInput extends GetInsightEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightEventsCommand}.
 */
export interface GetInsightEventsCommandOutput extends GetInsightEventsResult, __MetadataBearer {}

/**
 * <p>X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
 *          event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray
 *          console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightEventsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightEventsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetInsightEventsRequest
 *   InsightId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInsightEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightEventsResult
 * //   InsightEvents: [ // InsightEventList
 * //     { // InsightEvent
 * //       Summary: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       ClientRequestImpactStatistics: { // RequestImpactStatistics
 * //         FaultCount: Number("long"),
 * //         OkCount: Number("long"),
 * //         TotalCount: Number("long"),
 * //       },
 * //       RootCauseServiceRequestImpactStatistics: {
 * //         FaultCount: Number("long"),
 * //         OkCount: Number("long"),
 * //         TotalCount: Number("long"),
 * //       },
 * //       TopAnomalousServices: [ // AnomalousServiceList
 * //         { // AnomalousService
 * //           ServiceId: { // ServiceId
 * //             Name: "STRING_VALUE",
 * //             Names: [ // ServiceNames
 * //               "STRING_VALUE",
 * //             ],
 * //             AccountId: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInsightEventsCommandInput - {@link GetInsightEventsCommandInput}
 * @returns {@link GetInsightEventsCommandOutput}
 * @see {@link GetInsightEventsCommandInput} for command's `input` shape.
 * @see {@link GetInsightEventsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetInsightEventsCommand extends $Command
  .classBuilder<
    GetInsightEventsCommandInput,
    GetInsightEventsCommandOutput,
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
  .s("AWSXRay", "GetInsightEvents", {})
  .n("XRayClient", "GetInsightEventsCommand")
  .f(void 0, void 0)
  .ser(se_GetInsightEventsCommand)
  .de(de_GetInsightEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightEventsRequest;
      output: GetInsightEventsResult;
    };
    sdk: {
      input: GetInsightEventsCommandInput;
      output: GetInsightEventsCommandOutput;
    };
  };
}
