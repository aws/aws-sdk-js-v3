// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartEngagementFromOpportunityTaskRequest,
  StartEngagementFromOpportunityTaskResponse,
} from "../models/models_0";
import { StartEngagementFromOpportunityTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartEngagementFromOpportunityTaskCommand}.
 */
export interface StartEngagementFromOpportunityTaskCommandInput extends StartEngagementFromOpportunityTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartEngagementFromOpportunityTaskCommand}.
 */
export interface StartEngagementFromOpportunityTaskCommandOutput extends StartEngagementFromOpportunityTaskResponse, __MetadataBearer {}

/**
 * Similar to `StartEngagementByAcceptingInvitationTask`, this action is asynchronous and performs multiple steps before completion. This action orchestrates a comprehensive workflow that combines multiple API operations into a single task to create and initiate an engagement from an existing opportunity. It automatically executes a sequence of operations including `GetOpportunity`, `CreateEngagement` (if it doesn't exist), `CreateResourceSnapshot`, `CreateResourceSnapshotJob`, `CreateEngagementInvitation` (if not already invited/accepted), and `SubmitOpportunity`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, StartEngagementFromOpportunityTaskCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, StartEngagementFromOpportunityTaskCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // StartEngagementFromOpportunityTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   AwsSubmission: { // AwsSubmission
 *     InvolvementType: "For Visibility Only" || "Co-Sell", // required
 *     Visibility: "Full" || "Limited",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartEngagementFromOpportunityTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartEngagementFromOpportunityTaskResponse
 * //   TaskId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   TaskStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //   Message: "STRING_VALUE",
 * //   ReasonCode: "InvitationAccessDenied" || "InvitationValidationFailed" || "EngagementAccessDenied" || "OpportunityAccessDenied" || "ResourceSnapshotJobAccessDenied" || "ResourceSnapshotJobValidationFailed" || "ResourceSnapshotJobConflict" || "EngagementValidationFailed" || "EngagementConflict" || "OpportunitySubmissionFailed" || "EngagementInvitationConflict" || "InternalError" || "OpportunityValidationFailed" || "OpportunityConflict" || "ResourceSnapshotAccessDenied" || "ResourceSnapshotValidationFailed" || "ResourceSnapshotConflict" || "ServiceQuotaExceeded" || "RequestThrottled" || "ContextNotFound" || "CustomerProjectContextNotPermitted" || "DisqualifiedLeadNotPermitted",
 * //   OpportunityId: "STRING_VALUE",
 * //   ResourceSnapshotJobId: "STRING_VALUE",
 * //   EngagementId: "STRING_VALUE",
 * //   EngagementInvitationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartEngagementFromOpportunityTaskCommandInput - {@link StartEngagementFromOpportunityTaskCommandInput}
 * @returns {@link StartEngagementFromOpportunityTaskCommandOutput}
 * @see {@link StartEngagementFromOpportunityTaskCommandInput} for command's `input` shape.
 * @see {@link StartEngagementFromOpportunityTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * This error occurs when you don't have permission to perform the requested action.
 *
 * You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This error occurs when the request can’t be processed due to a conflict with the target resource's current state, which could result from updating or deleting the resource.
 *
 * Suggested action: Fetch the latest state of the resource, verify the state, and retry the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.
 *
 * Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.
 *
 * Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This error occurs when the request would cause a service quota to be exceeded. Service quotas represent the maximum allowed use of a specific resource, and this error indicates that the request would surpass that limit.
 *
 * Suggested action: Review the [Quotas](https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html) for the resource, and either reduce usage or request a quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.
 *
 * This error occurs when there are too many requests sent. Review the provided [Quotas](https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html) and retry after the provided delay.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service or business validation rules.
 *
 * Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.
 *
 * @throws {@link PartnerCentralSellingServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralSelling service.
 *
 * @public
 */
export class StartEngagementFromOpportunityTaskCommand extends command<StartEngagementFromOpportunityTaskCommandInput, StartEngagementFromOpportunityTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartEngagementFromOpportunityTask",
  StartEngagementFromOpportunityTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEngagementFromOpportunityTaskRequest;
      output: StartEngagementFromOpportunityTaskResponse;
    };
    sdk: {
      input: StartEngagementFromOpportunityTaskCommandInput;
      output: StartEngagementFromOpportunityTaskCommandOutput;
    };
  };
}
