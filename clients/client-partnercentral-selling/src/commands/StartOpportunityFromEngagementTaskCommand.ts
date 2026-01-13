// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StartOpportunityFromEngagementTaskRequest,
  StartOpportunityFromEngagementTaskResponse,
} from "../models/models_0";
import type {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { StartOpportunityFromEngagementTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOpportunityFromEngagementTaskCommand}.
 */
export interface StartOpportunityFromEngagementTaskCommandInput extends StartOpportunityFromEngagementTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartOpportunityFromEngagementTaskCommand}.
 */
export interface StartOpportunityFromEngagementTaskCommandOutput extends StartOpportunityFromEngagementTaskResponse, __MetadataBearer {}

/**
 * <p>This action creates an opportunity from an existing engagement context. The task is asynchronous and orchestrates the process of converting engagement contextual information into a structured opportunity record within the partner's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, StartOpportunityFromEngagementTaskCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, StartOpportunityFromEngagementTaskCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // StartOpportunityFromEngagementTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   ContextIdentifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartOpportunityFromEngagementTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartOpportunityFromEngagementTaskResponse
 * //   TaskId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   TaskStatus: "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //   Message: "STRING_VALUE",
 * //   ReasonCode: "InvitationAccessDenied" || "InvitationValidationFailed" || "EngagementAccessDenied" || "OpportunityAccessDenied" || "ResourceSnapshotJobAccessDenied" || "ResourceSnapshotJobValidationFailed" || "ResourceSnapshotJobConflict" || "EngagementValidationFailed" || "EngagementConflict" || "OpportunitySubmissionFailed" || "EngagementInvitationConflict" || "InternalError" || "OpportunityValidationFailed" || "OpportunityConflict" || "ResourceSnapshotAccessDenied" || "ResourceSnapshotValidationFailed" || "ResourceSnapshotConflict" || "ServiceQuotaExceeded" || "RequestThrottled" || "ContextNotFound" || "CustomerProjectContextNotPermitted" || "DisqualifiedLeadNotPermitted",
 * //   OpportunityId: "STRING_VALUE",
 * //   ResourceSnapshotJobId: "STRING_VALUE",
 * //   EngagementId: "STRING_VALUE",
 * //   ContextId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartOpportunityFromEngagementTaskCommandInput - {@link StartOpportunityFromEngagementTaskCommandInput}
 * @returns {@link StartOpportunityFromEngagementTaskCommandOutput}
 * @see {@link StartOpportunityFromEngagementTaskCommandInput} for command's `input` shape.
 * @see {@link StartOpportunityFromEngagementTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error occurs when the request can’t be processed due to a conflict with the target resource's current state, which could result from updating or deleting the resource.</p> <p>Suggested action: Fetch the latest state of the resource, verify the state, and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This error occurs when the request would cause a service quota to be exceeded. Service quotas represent the maximum allowed use of a specific resource, and this error indicates that the request would surpass that limit.</p> <p>Suggested action: Review the <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> for the resource, and either reduce usage or request a quota increase.</p>
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
export class StartOpportunityFromEngagementTaskCommand extends $Command
  .classBuilder<
    StartOpportunityFromEngagementTaskCommandInput,
    StartOpportunityFromEngagementTaskCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "StartOpportunityFromEngagementTask", {})
  .n("PartnerCentralSellingClient", "StartOpportunityFromEngagementTaskCommand")
  .sc(StartOpportunityFromEngagementTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOpportunityFromEngagementTaskRequest;
      output: StartOpportunityFromEngagementTaskResponse;
    };
    sdk: {
      input: StartOpportunityFromEngagementTaskCommandInput;
      output: StartOpportunityFromEngagementTaskCommandOutput;
    };
  };
}
