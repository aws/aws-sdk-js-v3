// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAlarmRecommendationsRequest, ListAlarmRecommendationsResponse } from "../models/models_0";
import { de_ListAlarmRecommendationsCommand, se_ListAlarmRecommendationsCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlarmRecommendationsCommand}.
 */
export interface ListAlarmRecommendationsCommandInput extends ListAlarmRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAlarmRecommendationsCommand}.
 */
export interface ListAlarmRecommendationsCommandOutput extends ListAlarmRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Lists the alarm recommendations for an Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAlarmRecommendationsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAlarmRecommendationsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAlarmRecommendationsRequest
 *   assessmentArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAlarmRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlarmRecommendationsResponse
 * //   alarmRecommendations: [ // AlarmRecommendationList // required
 * //     { // AlarmRecommendation
 * //       recommendationId: "STRING_VALUE", // required
 * //       referenceId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "Metric" || "Composite" || "Canary" || "Logs" || "Event", // required
 * //       appComponentName: "STRING_VALUE",
 * //       items: [ // RecommendationItemList
 * //         { // RecommendationItem
 * //           resourceId: "STRING_VALUE",
 * //           targetAccountId: "STRING_VALUE",
 * //           targetRegion: "STRING_VALUE",
 * //           alreadyImplemented: true || false,
 * //           excluded: true || false,
 * //           excludeReason: "AlreadyImplemented" || "NotRelevant" || "ComplexityOfImplementation",
 * //           latestDiscoveredExperiment: { // Experiment
 * //             experimentArn: "STRING_VALUE",
 * //             experimentTemplateId: "STRING_VALUE",
 * //           },
 * //           discoveredAlarm: { // Alarm
 * //             alarmArn: "STRING_VALUE",
 * //             source: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       prerequisite: "STRING_VALUE",
 * //       appComponentNames: [ // AppComponentNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       recommendationStatus: "Implemented" || "Inactive" || "NotImplemented" || "Excluded",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlarmRecommendationsCommandInput - {@link ListAlarmRecommendationsCommandInput}
 * @returns {@link ListAlarmRecommendationsCommandOutput}
 * @see {@link ListAlarmRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class ListAlarmRecommendationsCommand extends $Command
  .classBuilder<
    ListAlarmRecommendationsCommandInput,
    ListAlarmRecommendationsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListAlarmRecommendations", {})
  .n("ResiliencehubClient", "ListAlarmRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAlarmRecommendationsCommand)
  .de(de_ListAlarmRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlarmRecommendationsRequest;
      output: ListAlarmRecommendationsResponse;
    };
    sdk: {
      input: ListAlarmRecommendationsCommandInput;
      output: ListAlarmRecommendationsCommandOutput;
    };
  };
}
