// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchOrganizationInsightsRequest, SearchOrganizationInsightsResponse } from "../models/models_0";
import { SearchOrganizationInsights } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchOrganizationInsightsCommand}.
 */
export interface SearchOrganizationInsightsCommandInput extends SearchOrganizationInsightsRequest {}
/**
 * @public
 *
 * The output of {@link SearchOrganizationInsightsCommand}.
 */
export interface SearchOrganizationInsightsCommandOutput extends SearchOrganizationInsightsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of insights in your organization. You can specify which insights are
 * 			returned by their start time, one or more statuses (<code>ONGOING</code>,
 * 				<code>CLOSED</code>, and <code>CLOSED</code>), one or more severities
 * 				(<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type
 * 				(<code>REACTIVE</code> or <code>PROACTIVE</code>). </p>
 *          <p> Use the <code>Filters</code> parameter to specify status and severity search
 * 			parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or
 * 				<code>PROACTIVE</code> in your search. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, SearchOrganizationInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, SearchOrganizationInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // SearchOrganizationInsightsRequest
 *   AccountIds: [ // SearchInsightsAccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   StartTimeRange: { // StartTimeRange
 *     FromTime: new Date("TIMESTAMP"),
 *     ToTime: new Date("TIMESTAMP"),
 *   },
 *   Filters: { // SearchOrganizationInsightsFilters
 *     Severities: [ // InsightSeverities
 *       "LOW" || "MEDIUM" || "HIGH",
 *     ],
 *     Statuses: [ // InsightStatuses
 *       "ONGOING" || "CLOSED",
 *     ],
 *     ResourceCollection: { // ResourceCollection
 *       CloudFormation: { // CloudFormationCollection
 *         StackNames: [ // StackNames
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Tags: [ // TagCollections
 *         { // TagCollection
 *           AppBoundaryKey: "STRING_VALUE", // required
 *           TagValues: [ // TagValues // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *     ServiceCollection: { // ServiceCollection
 *       ServiceNames: [ // ServiceNames
 *         "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 *       ],
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Type: "REACTIVE" || "PROACTIVE", // required
 * };
 * const command = new SearchOrganizationInsightsCommand(input);
 * const response = await client.send(command);
 * // { // SearchOrganizationInsightsResponse
 * //   ProactiveInsights: [ // ProactiveInsights
 * //     { // ProactiveInsightSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Severity: "LOW" || "MEDIUM" || "HIGH",
 * //       Status: "ONGOING" || "CLOSED",
 * //       InsightTimeRange: { // InsightTimeRange
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       PredictionTimeRange: { // PredictionTimeRange
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       ResourceCollection: { // ResourceCollection
 * //         CloudFormation: { // CloudFormationCollection
 * //           StackNames: [ // StackNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [ // TagCollections
 * //           { // TagCollection
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // TagValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ServiceCollection: { // ServiceCollection
 * //         ServiceNames: [ // ServiceNames
 * //           "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 * //         ],
 * //       },
 * //       AssociatedResourceArns: [ // AssociatedResourceArns
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ReactiveInsights: [ // ReactiveInsights
 * //     { // ReactiveInsightSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Severity: "LOW" || "MEDIUM" || "HIGH",
 * //       Status: "ONGOING" || "CLOSED",
 * //       InsightTimeRange: {
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       ResourceCollection: {
 * //         CloudFormation: {
 * //           StackNames: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [
 * //           {
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ServiceCollection: {
 * //         ServiceNames: [
 * //           "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 * //         ],
 * //       },
 * //       AssociatedResourceArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchOrganizationInsightsCommandInput - {@link SearchOrganizationInsightsCommandInput}
 * @returns {@link SearchOrganizationInsightsCommandOutput}
 * @see {@link SearchOrganizationInsightsCommandInput} for command's `input` shape.
 * @see {@link SearchOrganizationInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class SearchOrganizationInsightsCommand extends $Command
  .classBuilder<
    SearchOrganizationInsightsCommandInput,
    SearchOrganizationInsightsCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "SearchOrganizationInsights", {})
  .n("DevOpsGuruClient", "SearchOrganizationInsightsCommand")
  .sc(SearchOrganizationInsights)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchOrganizationInsightsRequest;
      output: SearchOrganizationInsightsResponse;
    };
    sdk: {
      input: SearchOrganizationInsightsCommandInput;
      output: SearchOrganizationInsightsCommandOutput;
    };
  };
}
