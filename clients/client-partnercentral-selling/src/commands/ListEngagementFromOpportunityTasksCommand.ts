// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListEngagementFromOpportunityTasksRequest,
  ListEngagementFromOpportunityTasksResponse,
} from "../models/models_0";
import type {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { ListEngagementFromOpportunityTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEngagementFromOpportunityTasksCommand}.
 */
export interface ListEngagementFromOpportunityTasksCommandInput extends ListEngagementFromOpportunityTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListEngagementFromOpportunityTasksCommand}.
 */
export interface ListEngagementFromOpportunityTasksCommandOutput extends ListEngagementFromOpportunityTasksResponse, __MetadataBearer {}

/**
 * <p> Lists all in-progress, completed, or failed <code>EngagementFromOpportunity</code> tasks that were initiated by the caller's account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListEngagementFromOpportunityTasksCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListEngagementFromOpportunityTasksCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListEngagementFromOpportunityTasksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Sort: { // ListTasksSortBase
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *     SortBy: "StartTime", // required
 *   },
 *   Catalog: "STRING_VALUE", // required
 *   TaskStatus: [ // TaskStatuses
 *     "IN_PROGRESS" || "COMPLETE" || "FAILED",
 *   ],
 *   TaskIdentifier: [ // TaskIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   OpportunityIdentifier: [ // OpportunityIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   EngagementIdentifier: [ // EngagementIdentifiers
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListEngagementFromOpportunityTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListEngagementFromOpportunityTasksResponse
 * //   TaskSummaries: [ // ListEngagementFromOpportunityTaskSummaries
 * //     { // ListEngagementFromOpportunityTaskSummary
 * //       TaskId: "STRING_VALUE",
 * //       TaskArn: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       TaskStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //       Message: "STRING_VALUE",
 * //       ReasonCode: "InvitationAccessDenied" || "InvitationValidationFailed" || "EngagementAccessDenied" || "OpportunityAccessDenied" || "ResourceSnapshotJobAccessDenied" || "ResourceSnapshotJobValidationFailed" || "ResourceSnapshotJobConflict" || "EngagementValidationFailed" || "EngagementConflict" || "OpportunitySubmissionFailed" || "EngagementInvitationConflict" || "InternalError" || "OpportunityValidationFailed" || "OpportunityConflict" || "ResourceSnapshotAccessDenied" || "ResourceSnapshotValidationFailed" || "ResourceSnapshotConflict" || "ServiceQuotaExceeded" || "RequestThrottled" || "ContextNotFound" || "CustomerProjectContextNotPermitted" || "DisqualifiedLeadNotPermitted",
 * //       OpportunityId: "STRING_VALUE",
 * //       ResourceSnapshotJobId: "STRING_VALUE",
 * //       EngagementId: "STRING_VALUE",
 * //       EngagementInvitationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngagementFromOpportunityTasksCommandInput - {@link ListEngagementFromOpportunityTasksCommandInput}
 * @returns {@link ListEngagementFromOpportunityTasksCommandOutput}
 * @see {@link ListEngagementFromOpportunityTasksCommandInput} for command's `input` shape.
 * @see {@link ListEngagementFromOpportunityTasksCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class ListEngagementFromOpportunityTasksCommand extends $Command
  .classBuilder<
    ListEngagementFromOpportunityTasksCommandInput,
    ListEngagementFromOpportunityTasksCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "ListEngagementFromOpportunityTasks", {})
  .n("PartnerCentralSellingClient", "ListEngagementFromOpportunityTasksCommand")
  .sc(ListEngagementFromOpportunityTasks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngagementFromOpportunityTasksRequest;
      output: ListEngagementFromOpportunityTasksResponse;
    };
    sdk: {
      input: ListEngagementFromOpportunityTasksCommandInput;
      output: ListEngagementFromOpportunityTasksCommandOutput;
    };
  };
}
