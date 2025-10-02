// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSopRecommendationsRequest, ListSopRecommendationsResponse } from "../models/models_0";
import { de_ListSopRecommendationsCommand, se_ListSopRecommendationsCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSopRecommendationsCommand}.
 */
export interface ListSopRecommendationsCommandInput extends ListSopRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSopRecommendationsCommand}.
 */
export interface ListSopRecommendationsCommandOutput extends ListSopRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListSopRecommendationsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListSopRecommendationsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListSopRecommendationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assessmentArn: "STRING_VALUE", // required
 * };
 * const command = new ListSopRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSopRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   sopRecommendations: [ // SopRecommendationList // required
 * //     { // SopRecommendation
 * //       serviceType: "SSM", // required
 * //       appComponentName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendationId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
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
 * //       referenceId: "STRING_VALUE", // required
 * //       prerequisite: "STRING_VALUE",
 * //       recommendationStatus: "Implemented" || "Inactive" || "NotImplemented" || "Excluded",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSopRecommendationsCommandInput - {@link ListSopRecommendationsCommandInput}
 * @returns {@link ListSopRecommendationsCommandOutput}
 * @see {@link ListSopRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListSopRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
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
 *
 * @public
 */
export class ListSopRecommendationsCommand extends $Command
  .classBuilder<
    ListSopRecommendationsCommandInput,
    ListSopRecommendationsCommandOutput,
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
  .s("AwsResilienceHub", "ListSopRecommendations", {})
  .n("ResiliencehubClient", "ListSopRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSopRecommendationsCommand)
  .de(de_ListSopRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSopRecommendationsRequest;
      output: ListSopRecommendationsResponse;
    };
    sdk: {
      input: ListSopRecommendationsCommandInput;
      output: ListSopRecommendationsCommandOutput;
    };
  };
}
