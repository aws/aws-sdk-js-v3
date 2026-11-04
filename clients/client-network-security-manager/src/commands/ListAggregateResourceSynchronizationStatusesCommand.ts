// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAggregateResourceSynchronizationStatusesInput,
  ListAggregateResourceSynchronizationStatusesOutput,
} from "../models/models_0";
import { ListAggregateResourceSynchronizationStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAggregateResourceSynchronizationStatusesCommand}.
 */
export interface ListAggregateResourceSynchronizationStatusesCommandInput extends ListAggregateResourceSynchronizationStatusesInput {}
/**
 * @public
 *
 * The output of {@link ListAggregateResourceSynchronizationStatusesCommand}.
 */
export interface ListAggregateResourceSynchronizationStatusesCommandOutput extends ListAggregateResourceSynchronizationStatusesOutput, __MetadataBearer {}

/**
 * Lists the aggregated synchronization statuses of resources across the deployments in your administrator account. You can filter the results by synchronization status and page through them.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListAggregateResourceSynchronizationStatusesCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListAggregateResourceSynchronizationStatusesCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListAggregateResourceSynchronizationStatusesInput
 *   synchronizationStatus: "IN_SYNC" || "OUT_OF_SYNC" || "NOT_APPLICABLE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAggregateResourceSynchronizationStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListAggregateResourceSynchronizationStatusesOutput
 * //   nextToken: "STRING_VALUE",
 * //   resourceSynchronizationStatuses: [ // ResourceSynchronizationStatusSummaryList // required
 * //     { // ResourceSynchronizationStatusSummary
 * //       synchronizationStatus: "IN_SYNC" || "OUT_OF_SYNC" || "NOT_APPLICABLE", // required
 * //       accountId: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //       deploymentArn: "STRING_VALUE",
 * //       resourceType: "AWS::ApiGateway::Stage" || "AWS::CloudFront::Distribution" || "AWS::EC2::EIP" || "AWS::ElasticLoadBalancingV2::LoadBalancer::application" || "AWS::ElasticLoadBalancing::LoadBalancer" || "AWS::WAFv2::WebACL" || "AWS::Shield::Protection" || "AWS::ShieldRegional::Protection",
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       outOfSyncReasons: { // OutOfSyncReasonsView Union: only one key present
 * //         reasons: { // OutOfSyncReasons
 * //           "<keys>": { // FirewallSyncReason Union: only one key present
 * //             missingFirewall: "STRING_VALUE",
 * //             invalidFirewall: { // InvalidFirewallReasons
 * //               incorrectSingleValueConfigurations: [ // ConfigurationIssueList
 * //                 { // ConfigurationIssue
 * //                   configurationName: "STRING_VALUE",
 * //                   expectedValue: "STRING_VALUE",
 * //                   actualValue: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               missingAppendableConfigurationValues: [
 * //                 {
 * //                   configurationName: "STRING_VALUE",
 * //                   expectedValue: "STRING_VALUE",
 * //                   actualValue: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               unexpectedAppendableConfigurationValues: [
 * //                 {
 * //                   configurationName: "STRING_VALUE",
 * //                   expectedValue: "STRING_VALUE",
 * //                   actualValue: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               incorrectAppendableConfigurationOrder: [
 * //                 {
 * //                   configurationName: "STRING_VALUE",
 * //                   expectedValue: "STRING_VALUE",
 * //                   actualValue: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               missingMergeableConfigurationValues: [
 * //                 {
 * //                   configurationName: "STRING_VALUE",
 * //                   expectedValue: "STRING_VALUE",
 * //                   actualValue: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               unexpectedMergeableConfigurationValues: "<ConfigurationIssueList>",
 * //             },
 * //           },
 * //         },
 * //         notVisible: { // NotVisibleMarker
 * //           reason: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       remediationIssues: { // RemediationIssuesView Union: only one key present
 * //         issues: { // RemediationIssues
 * //           "<keys>": { // RemediationIssueDetails
 * //             issueType: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //             correctiveAction: "STRING_VALUE",
 * //           },
 * //         },
 * //         notVisible: {
 * //           reason: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       evaluatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAggregateResourceSynchronizationStatusesCommandInput - {@link ListAggregateResourceSynchronizationStatusesCommandInput}
 * @returns {@link ListAggregateResourceSynchronizationStatusesCommandOutput}
 * @see {@link ListAggregateResourceSynchronizationStatusesCommandInput} for command's `input` shape.
 * @see {@link ListAggregateResourceSynchronizationStatusesCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing failed because of an internal error in the service. This is a retryable error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Reduce your request rate and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation. For details, see the `reason` and `fieldList` members of the response.
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkSecurityManager service.
 *
 * @example List synchronization statuses across all deployments
 * ```javascript
 * // Lists the aggregate synchronization status of resources across all deployments in the account.
 * const input = {
 *   maxResults: 10,
 *   synchronizationStatus: "IN_SYNC"
 * };
 * const command = new ListAggregateResourceSynchronizationStatusesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   resourceSynchronizationStatuses: [
 *     {
 *       accountId: "234567890123",
 *       evaluatedAt: "2026-08-20T12:00:00Z",
 *       resourceArn: "arn:aws:elasticloadbalancing:us-east-1:234567890123:loadbalancer/app/my-alb/50dc6c495c0c9188",
 *       resourceType: "AWS::ElasticLoadBalancingV2::LoadBalancer::application",
 *       synchronizationStatus: "IN_SYNC",
 *       updatedAt: "2026-08-20T12:00:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAggregateResourceSynchronizationStatusesCommand extends command<ListAggregateResourceSynchronizationStatusesCommandInput, ListAggregateResourceSynchronizationStatusesCommandOutput>(
  _ep0,
  _mw0,
  "ListAggregateResourceSynchronizationStatuses",
  ListAggregateResourceSynchronizationStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAggregateResourceSynchronizationStatusesInput;
      output: ListAggregateResourceSynchronizationStatusesOutput;
    };
    sdk: {
      input: ListAggregateResourceSynchronizationStatusesCommandInput;
      output: ListAggregateResourceSynchronizationStatusesCommandOutput;
    };
  };
}
