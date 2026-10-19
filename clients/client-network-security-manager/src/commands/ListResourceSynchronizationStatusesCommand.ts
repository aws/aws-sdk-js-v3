// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListResourceSynchronizationStatusesInput,
  ListResourceSynchronizationStatusesOutput,
} from "../models/models_0";
import { ListResourceSynchronizationStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceSynchronizationStatusesCommand}.
 */
export interface ListResourceSynchronizationStatusesCommandInput extends ListResourceSynchronizationStatusesInput {}
/**
 * @public
 *
 * The output of {@link ListResourceSynchronizationStatusesCommand}.
 */
export interface ListResourceSynchronizationStatusesCommandOutput extends ListResourceSynchronizationStatusesOutput, __MetadataBearer {}

/**
 * <p>Lists the synchronization statuses of the resources covered by the specified deployment. You can filter the results by synchronization status and page through them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListResourceSynchronizationStatusesCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListResourceSynchronizationStatusesCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListResourceSynchronizationStatusesInput
 *   deploymentIdentifier: "STRING_VALUE", // required
 *   synchronizationStatus: "IN_SYNC" || "OUT_OF_SYNC" || "NOT_APPLICABLE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceSynchronizationStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceSynchronizationStatusesOutput
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
 * @param ListResourceSynchronizationStatusesCommandInput - {@link ListResourceSynchronizationStatusesCommandInput}
 * @returns {@link ListResourceSynchronizationStatusesCommandOutput}
 * @see {@link ListResourceSynchronizationStatusesCommandInput} for command's `input` shape.
 * @see {@link ListResourceSynchronizationStatusesCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example List out-of-sync resources for a deployment
 * ```javascript
 * // Lists the resources tracked by a deployment that are out of sync, including the structured reason. Here a CloudFront distribution has no web ACL where the policy requires one.
 * const input = {
 *   deploymentIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456",
 *   maxResults: 10,
 *   synchronizationStatus: "OUT_OF_SYNC"
 * };
 * const command = new ListResourceSynchronizationStatusesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   resourceSynchronizationStatuses: [
 *     {
 *       accountId: "123456789012",
 *       deploymentArn: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456",
 *       evaluatedAt: "2026-08-20T12:00:00Z",
 *       outOfSyncReasons: {
 *         reasons: {
 *           WAF: {
 *             missingFirewall: "No web ACL is associated with the resource"
 *           }
 *         }
 *       },
 *       resourceArn: "arn:aws:cloudfront::123456789012:distribution/EDFDVBD6EXAMPLE",
 *       resourceType: "AWS::CloudFront::Distribution",
 *       synchronizationStatus: "OUT_OF_SYNC",
 *       updatedAt: "2026-08-20T12:00:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListResourceSynchronizationStatusesCommand extends command<ListResourceSynchronizationStatusesCommandInput, ListResourceSynchronizationStatusesCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceSynchronizationStatuses",
  ListResourceSynchronizationStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceSynchronizationStatusesInput;
      output: ListResourceSynchronizationStatusesOutput;
    };
    sdk: {
      input: ListResourceSynchronizationStatusesCommandInput;
      output: ListResourceSynchronizationStatusesCommandOutput;
    };
  };
}
