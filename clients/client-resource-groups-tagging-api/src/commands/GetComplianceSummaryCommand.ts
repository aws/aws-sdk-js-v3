// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetComplianceSummaryInput, GetComplianceSummaryOutput } from "../models/models_0";
import { GetComplianceSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a table that shows counts of resources that are noncompliant with their tag policies.
 *
 * For more information on tag policies, see [Tag Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html) in the *Organizations User Guide.*
 *
 * You can call this operation only from the organization's management account and from the us-east-1 Region.
 *
 * This operation supports pagination, where the response can be sent in multiple pages. You should check the `PaginationToken` response parameter to determine if there are additional results available to return. Repeat the query, passing the `PaginationToken` response parameter value as an input to the next request until you recieve a `null` value. A null value for `PaginationToken` indicates that there are no more results waiting to be returned.
 *
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
 *
 * The request failed because performing the operation would violate a constraint.
 *
 * Some of the reasons in the following list might not apply to this specific operation.
 *
 * - You must meet the prerequisites for using tag policies. For information, see [Prerequisites and permissions](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#tag-policies-prereqs) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - You must enable the tag policies service principal (`tagpolicies.tag.amazonaws.com`) to integrate with Organizations For information, see [EnableAWSServiceAccess](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html).
 * - You must have a tag policy attached to the organization root, an OU, or an account.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing failed because of an unknown error, exception, or failure. You can retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request failed because of one of the following reasons:
 *
 * - A required parameter is missing.
 * - A provided string parameter is malformed.
 * - An provided parameter value is out of range.
 * - The target ID is invalid, unsupported, or doesn't exist.
 * - You can't access the Amazon S3 bucket for report storage. For more information, see [Amazon S3 bucket policy for report storage](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - The partition specified in an ARN parameter in the request doesn't match the partition where you invoked the operation. The partition is specified by the second field of the ARN.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request failed because it exceeded the allowed frequency of submitted requests.
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.
 *
 * @public
 */
export class GetComplianceSummaryCommand extends command<GetComplianceSummaryCommandInput, GetComplianceSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetComplianceSummary",
  GetComplianceSummary$
) {
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
