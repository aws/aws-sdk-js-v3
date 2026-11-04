// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartEngagementByAcceptingInvitationTaskRequest,
  StartEngagementByAcceptingInvitationTaskResponse,
} from "../models/models_0";
import { StartEngagementByAcceptingInvitationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartEngagementByAcceptingInvitationTaskCommand}.
 */
export interface StartEngagementByAcceptingInvitationTaskCommandInput extends StartEngagementByAcceptingInvitationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartEngagementByAcceptingInvitationTaskCommand}.
 */
export interface StartEngagementByAcceptingInvitationTaskCommandOutput extends StartEngagementByAcceptingInvitationTaskResponse, __MetadataBearer {}

/**
 * This action starts the engagement by accepting an `EngagementInvitation`. The task is asynchronous and involves the following steps: accepting the invitation, creating an opportunity in the partner’s account from the AWS opportunity, and copying details for tracking. When completed, an `Opportunity Created` event is generated, indicating that the opportunity has been successfully created in the partner's account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, StartEngagementByAcceptingInvitationTaskCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, StartEngagementByAcceptingInvitationTaskCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // StartEngagementByAcceptingInvitationTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartEngagementByAcceptingInvitationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartEngagementByAcceptingInvitationTaskResponse
 * //   TaskId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   TaskStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //   Message: "STRING_VALUE",
 * //   ReasonCode: "InvitationAccessDenied" || "InvitationValidationFailed" || "EngagementAccessDenied" || "OpportunityAccessDenied" || "ResourceSnapshotJobAccessDenied" || "ResourceSnapshotJobValidationFailed" || "ResourceSnapshotJobConflict" || "EngagementValidationFailed" || "EngagementConflict" || "OpportunitySubmissionFailed" || "EngagementInvitationConflict" || "InternalError" || "OpportunityValidationFailed" || "OpportunityConflict" || "ResourceSnapshotAccessDenied" || "ResourceSnapshotValidationFailed" || "ResourceSnapshotConflict" || "ServiceQuotaExceeded" || "RequestThrottled" || "ContextNotFound" || "CustomerProjectContextNotPermitted" || "DisqualifiedLeadNotPermitted",
 * //   OpportunityId: "STRING_VALUE",
 * //   ResourceSnapshotJobId: "STRING_VALUE",
 * //   EngagementInvitationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartEngagementByAcceptingInvitationTaskCommandInput - {@link StartEngagementByAcceptingInvitationTaskCommandInput}
 * @returns {@link StartEngagementByAcceptingInvitationTaskCommandOutput}
 * @see {@link StartEngagementByAcceptingInvitationTaskCommandInput} for command's `input` shape.
 * @see {@link StartEngagementByAcceptingInvitationTaskCommandOutput} for command's `response` shape.
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
export class StartEngagementByAcceptingInvitationTaskCommand extends command<StartEngagementByAcceptingInvitationTaskCommandInput, StartEngagementByAcceptingInvitationTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartEngagementByAcceptingInvitationTask",
  StartEngagementByAcceptingInvitationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEngagementByAcceptingInvitationTaskRequest;
      output: StartEngagementByAcceptingInvitationTaskResponse;
    };
    sdk: {
      input: StartEngagementByAcceptingInvitationTaskCommandInput;
      output: StartEngagementByAcceptingInvitationTaskCommandOutput;
    };
  };
}
