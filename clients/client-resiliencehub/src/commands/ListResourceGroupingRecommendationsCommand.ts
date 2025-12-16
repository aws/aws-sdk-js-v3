// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListResourceGroupingRecommendationsRequest,
  ListResourceGroupingRecommendationsResponse,
} from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListResourceGroupingRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceGroupingRecommendationsCommand}.
 */
export interface ListResourceGroupingRecommendationsCommandInput extends ListResourceGroupingRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceGroupingRecommendationsCommand}.
 */
export interface ListResourceGroupingRecommendationsCommandOutput
  extends ListResourceGroupingRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resource grouping recommendations suggested by Resilience Hub for your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListResourceGroupingRecommendationsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListResourceGroupingRecommendationsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListResourceGroupingRecommendationsRequest
 *   appArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListResourceGroupingRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceGroupingRecommendationsResponse
 * //   groupingRecommendations: [ // GroupingRecommendationList // required
 * //     { // GroupingRecommendation
 * //       groupingRecommendationId: "STRING_VALUE", // required
 * //       groupingAppComponent: { // GroupingAppComponent
 * //         appComponentId: "STRING_VALUE", // required
 * //         appComponentType: "STRING_VALUE", // required
 * //         appComponentName: "STRING_VALUE", // required
 * //       },
 * //       resources: [ // GroupingResourceList // required
 * //         { // GroupingResource
 * //           resourceName: "STRING_VALUE", // required
 * //           resourceType: "STRING_VALUE", // required
 * //           physicalResourceId: { // PhysicalResourceId
 * //             identifier: "STRING_VALUE", // required
 * //             type: "Arn" || "Native", // required
 * //             awsRegion: "STRING_VALUE",
 * //             awsAccountId: "STRING_VALUE",
 * //           },
 * //           logicalResourceId: { // LogicalResourceId
 * //             identifier: "STRING_VALUE", // required
 * //             logicalStackName: "STRING_VALUE",
 * //             resourceGroupName: "STRING_VALUE",
 * //             terraformSourceName: "STRING_VALUE",
 * //             eksSourceName: "STRING_VALUE",
 * //           },
 * //           sourceAppComponentIds: [ // String255List // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       score: Number("double"), // required
 * //       recommendationReasons: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "Accepted" || "Rejected" || "PendingDecision", // required
 * //       confidenceLevel: "High" || "Medium", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       rejectionReason: "DistinctBusinessPurpose" || "SeparateDataConcern" || "DistinctUserGroupHandling" || "Other",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceGroupingRecommendationsCommandInput - {@link ListResourceGroupingRecommendationsCommandInput}
 * @returns {@link ListResourceGroupingRecommendationsCommandOutput}
 * @see {@link ListResourceGroupingRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListResourceGroupingRecommendationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListResourceGroupingRecommendationsCommand extends $Command
  .classBuilder<
    ListResourceGroupingRecommendationsCommandInput,
    ListResourceGroupingRecommendationsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListResourceGroupingRecommendations", {})
  .n("ResiliencehubClient", "ListResourceGroupingRecommendationsCommand")
  .sc(ListResourceGroupingRecommendations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceGroupingRecommendationsRequest;
      output: ListResourceGroupingRecommendationsResponse;
    };
    sdk: {
      input: ListResourceGroupingRecommendationsCommandInput;
      output: ListResourceGroupingRecommendationsCommandOutput;
    };
  };
}
