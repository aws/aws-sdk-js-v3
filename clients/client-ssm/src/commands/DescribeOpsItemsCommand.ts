// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOpsItemsRequest, DescribeOpsItemsResponse } from "../models/models_1";
import { DescribeOpsItems } from "../schemas/schemas_46_Ops";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOpsItemsCommand}.
 */
export interface DescribeOpsItemsCommandInput extends DescribeOpsItemsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOpsItemsCommand}.
 */
export interface DescribeOpsItemsCommandOutput extends DescribeOpsItemsResponse, __MetadataBearer {}

/**
 * <p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeOpsItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeOpsItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeOpsItemsRequest
 *   OpsItemFilters: [ // OpsItemFilters
 *     { // OpsItemFilter
 *       Key: "Status" || "CreatedBy" || "Source" || "Priority" || "Title" || "OpsItemId" || "CreatedTime" || "LastModifiedTime" || "ActualStartTime" || "ActualEndTime" || "PlannedStartTime" || "PlannedEndTime" || "OperationalData" || "OperationalDataKey" || "OperationalDataValue" || "ResourceId" || "AutomationId" || "Category" || "Severity" || "OpsItemType" || "AccessRequestByRequesterArn" || "AccessRequestByRequesterId" || "AccessRequestByApproverArn" || "AccessRequestByApproverId" || "AccessRequestBySourceAccountId" || "AccessRequestBySourceOpsItemId" || "AccessRequestBySourceRegion" || "AccessRequestByIsReplica" || "AccessRequestByTargetResourceId" || "ChangeRequestByRequesterArn" || "ChangeRequestByRequesterName" || "ChangeRequestByApproverArn" || "ChangeRequestByApproverName" || "ChangeRequestByTemplate" || "ChangeRequestByTargetsResourceGroup" || "InsightByType" || "AccountId", // required
 *       Values: [ // OpsItemFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal" || "Contains" || "GreaterThan" || "LessThan", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOpsItemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOpsItemsResponse
 * //   NextToken: "STRING_VALUE",
 * //   OpsItemSummaries: [ // OpsItemSummaries
 * //     { // OpsItemSummary
 * //       CreatedBy: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       Priority: Number("int"),
 * //       Source: "STRING_VALUE",
 * //       Status: "Open" || "InProgress" || "Resolved" || "Pending" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "CompletedWithSuccess" || "CompletedWithFailure" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "PendingApproval" || "Approved" || "Revoked" || "Rejected" || "Closed",
 * //       OpsItemId: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       OperationalData: { // OpsItemOperationalData
 * //         "<keys>": { // OpsItemDataValue
 * //           Value: "STRING_VALUE",
 * //           Type: "SearchableString" || "String",
 * //         },
 * //       },
 * //       Category: "STRING_VALUE",
 * //       Severity: "STRING_VALUE",
 * //       OpsItemType: "STRING_VALUE",
 * //       ActualStartTime: new Date("TIMESTAMP"),
 * //       ActualEndTime: new Date("TIMESTAMP"),
 * //       PlannedStartTime: new Date("TIMESTAMP"),
 * //       PlannedEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOpsItemsCommandInput - {@link DescribeOpsItemsCommandInput}
 * @returns {@link DescribeOpsItemsCommandOutput}
 * @see {@link DescribeOpsItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOpsItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeOpsItemsCommand extends $Command
  .classBuilder<
    DescribeOpsItemsCommandInput,
    DescribeOpsItemsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeOpsItems", {})
  .n("SSMClient", "DescribeOpsItemsCommand")
  .sc(DescribeOpsItems)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOpsItemsRequest;
      output: DescribeOpsItemsResponse;
    };
    sdk: {
      input: DescribeOpsItemsCommandInput;
      output: DescribeOpsItemsCommandOutput;
    };
  };
}
