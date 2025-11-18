// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetComplianceSummaryInput, GetComplianceSummaryOutput } from "../models/models_0";
import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { GetComplianceSummary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComplianceSummaryCommand}.
 */
export interface GetComplianceSummaryCommandInput extends GetComplianceSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetComplianceSummaryCommand}.
 */
export interface GetComplianceSummaryCommandOutput extends GetComplianceSummaryOutput, __MetadataBearer {}

/**
 * <p>Returns a table that shows counts of resources that are noncompliant with their tag
 *             policies.</p>
 *          <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
 *             the <i>Organizations User Guide.</i>
 *          </p>
 *          <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetComplianceSummaryCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetComplianceSummaryCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // GetComplianceSummaryInput
 *   TargetIdFilters: [ // TargetIdFilterList
 *     "STRING_VALUE",
 *   ],
 *   RegionFilters: [ // RegionFilterList
 *     "STRING_VALUE",
 *   ],
 *   ResourceTypeFilters: [ // ResourceTypeFilterList
 *     "STRING_VALUE",
 *   ],
 *   TagKeyFilters: [ // TagKeyFilterList
 *     "STRING_VALUE",
 *   ],
 *   GroupBy: [ // GroupBy
 *     "TARGET_ID" || "REGION" || "RESOURCE_TYPE",
 *   ],
 *   MaxResults: Number("int"),
 *   PaginationToken: "STRING_VALUE",
 * };
 * const command = new GetComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceSummaryOutput
 * //   SummaryList: [ // SummaryList
 * //     { // Summary
 * //       LastUpdated: "STRING_VALUE",
 * //       TargetId: "STRING_VALUE",
 * //       TargetIdType: "ACCOUNT" || "OU" || "ROOT",
 * //       Region: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       NonCompliantResources: Number("long"),
 * //     },
 * //   ],
 * //   PaginationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetComplianceSummaryCommandInput - {@link GetComplianceSummaryCommandInput}
 * @returns {@link GetComplianceSummaryCommandOutput}
 * @see {@link GetComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>The request failed because performing the operation would violate a constraint.</p>
 *          <p>Some of the reasons in the following list might not apply to this specific
 *             operation.</p>
 *          <ul>
 *             <li>
 *                <p>You must meet the prerequisites for using tag policies. For information, see
 *                         <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#tag-policies-prereqs">Prerequisites and permissions</a> in the <i>Tagging Amazon Web Services resources and Tag Editor</i> user guide. </p>
 *             </li>
 *             <li>
 *                <p>You must enable the tag policies service principal
 *                         (<code>tagpolicies.tag.amazonaws.com</code>) to integrate with Organizations For
 *                     information, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html">EnableAWSServiceAccess</a>.</p>
 *             </li>
 *             <li>
 *                <p>You must have a tag policy attached to the organization root, an OU, or an
 *                     account.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request failed because of one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>A required parameter is missing.</p>
 *             </li>
 *             <li>
 *                <p>A provided string parameter is malformed.</p>
 *             </li>
 *             <li>
 *                <p>An provided parameter value is out of range.</p>
 *             </li>
 *             <li>
 *                <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy">Amazon S3 bucket policy for report storage</a> in the <i>Tagging Amazon Web Services resources and Tag Editor</i> user guide. </p>
 *             </li>
 *             <li>
 *                <p>The partition specified in an ARN parameter in the request doesn't match the
 *                     partition where you invoked the operation. The partition is specified by the
 *                     second field of the ARN.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request failed because it exceeded the allowed frequency of submitted
 *             requests.</p>
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.</p>
 *
 *
 * @public
 */
export class GetComplianceSummaryCommand extends $Command
  .classBuilder<
    GetComplianceSummaryCommandInput,
    GetComplianceSummaryCommandOutput,
    ResourceGroupsTaggingAPIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsTaggingAPIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "GetComplianceSummary", {})
  .n("ResourceGroupsTaggingAPIClient", "GetComplianceSummaryCommand")
  .sc(GetComplianceSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComplianceSummaryInput;
      output: GetComplianceSummaryOutput;
    };
    sdk: {
      input: GetComplianceSummaryCommandInput;
      output: GetComplianceSummaryCommandOutput;
    };
  };
}
