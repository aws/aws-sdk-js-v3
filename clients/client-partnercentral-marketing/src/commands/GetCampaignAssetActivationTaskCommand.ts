// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCampaignAssetActivationTaskRequest, GetCampaignAssetActivationTaskResponse } from "../models/models_0";
import { GetCampaignAssetActivationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCampaignAssetActivationTaskCommand}.
 */
export interface GetCampaignAssetActivationTaskCommandInput extends GetCampaignAssetActivationTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignAssetActivationTaskCommand}.
 */
export interface GetCampaignAssetActivationTaskCommandOutput extends GetCampaignAssetActivationTaskResponse, __MetadataBearer {}

/**
 * Reads a campaign's current activation task.
 *
 * Keyed on the **campaign**, with no task identifier, because a campaign has at
 * most one activation task: runs are serialised, so there is no collection to
 * address into. The caller always holds the task id anyway, because Start
 * returned it — the id is a correlation value, not an address.
 *
 * Returns the campaign's most recent task. A new task overwrites the previous
 * one, so this is not a history: the durable per-asset record is on the assets
 * themselves. Returns ResourceNotFoundException when the campaign has never had
 * a task, or when its last one has expired.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, GetCampaignAssetActivationTaskCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, GetCampaignAssetActivationTaskCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // GetCampaignAssetActivationTaskRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignAssetActivationTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignAssetActivationTaskResponse
 * //   CampaignId: "STRING_VALUE", // required
 * //   TaskId: "STRING_VALUE", // required
 * //   TaskStatus: "IN_PROGRESS" || "SUCCEEDED" || "PARTIAL_FAILURE" || "FAILED", // required
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   Assets: [ // CampaignAssetActivationOutcomes // required
 * //     { // CampaignAssetActivationOutcome
 * //       CampaignAssetId: "STRING_VALUE", // required
 * //       Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //       Reason: "ASSET_NOT_FOUND" || "ASSET_NOT_STARTABLE" || "ASSET_START_IN_PROGRESS" || "ASSET_ALREADY_ACTIVE" || "SEND_WINDOW_TOO_SOON" || "REQUIRED_FIELD_MISSING" || "RECIPIENT_LIST_MISSING" || "ENGAGEMENT_GROUPS_UNAVAILABLE" || "SENDER_EMAIL_MISSING" || "END_ON_MISSING" || "ASSET_CONTENT_MISSING" || "ASSET_NOT_ACTIVATABLE" || "TEMPLATE_CHANGED" || "PARTNER_IMAGE_REJECTED" || "PREREQUISITE_ASSET_NOT_ACTIVE" || "PARTNER_NOT_PROVISIONED" || "RECIPIENT_LIST_EMPTY" || "RECIPIENT_LIMIT_EXCEEDED" || "CONTACT_OPT_IN_REQUIRED" || "MAILING_CREDITS_EXHAUSTED" || "SENDER_EMAIL_INVALID" || "SOCIAL_CONNECTION_MISSING" || "SOCIAL_CONNECTION_EXPIRED" || "SOCIAL_CONNECTION_PAGE_REQUIRED" || "DELIVERY_FAILED" || "INTERNAL_ERROR" || "MAILING_CREDITS_INSUFFICIENT" || "PARTNER_PROFILE_FIELD_MISSING" || "PARTNER_PROFILE_FIELD_DOES_NOT_FIT" || "SOCIAL_CONNECTION_NOT_CHOSEN" || "PRIVACY_POLICY_URL_MISSING" || "PARTNER_ADDRESS_MISSING" || "SEND_MODE_MISSING" || "CONTENT_REJECTED" || "URL_NOT_ALLOWED" || "SENDER_NOT_APPROVED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCampaignAssetActivationTaskCommandInput - {@link GetCampaignAssetActivationTaskCommandInput}
 * @returns {@link GetCampaignAssetActivationTaskCommandOutput}
 * @see {@link GetCampaignAssetActivationTaskCommandInput} for command's `input` shape.
 * @see {@link GetCampaignAssetActivationTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * An IAM denial carries no `Reason`. A refusal for the caller's Partner Central state carries one, so a client tells
 * the two apart by its presence.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by the service.
 *
 * A caller branches on `Reason`, and where the rejection is attributable to particular fields it reads
 * `FieldList` rather than parsing `Message`, which is prose and may change.
 *
 * @throws {@link PartnerCentralMarketingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralMarketing service.</p>
 *
 *
 * @example Read a finished task where one asset failed
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new GetCampaignAssetActivationTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Assets: [
 *     {
 *       CampaignAssetId: "ast-4b81e0c9f2a7b",
 *       Status: "SUCCEEDED"
 *     },
 *     {
 *       CampaignAssetId: "ast-9f3c1a2b7d40e",
 *       Status: "SUCCEEDED"
 *     },
 *     {
 *       CampaignAssetId: "ast-2k7m4p9x1c6qd",
 *       Status: "SUCCEEDED"
 *     },
 *     {
 *       CampaignAssetId: "ast-7w3n8r5t2h1ya",
 *       Message: "The connected social account is no longer authorized.",
 *       Reason: "SOCIAL_CONNECTION_EXPIRED",
 *       Status: "FAILED"
 *     }
 *   ],
 *   CampaignId: "camp-5Hq2m8x4k1p9w",
 *   EndedAt: 1764547431,
 *   StartedAt: 1764547200,
 *   TaskId: "atsk-7k2M9x4qp1w8n",
 *   TaskStatus: "PARTIAL_FAILURE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCampaignAssetActivationTaskCommand extends command<GetCampaignAssetActivationTaskCommandInput, GetCampaignAssetActivationTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetCampaignAssetActivationTask",
  GetCampaignAssetActivationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignAssetActivationTaskRequest;
      output: GetCampaignAssetActivationTaskResponse;
    };
    sdk: {
      input: GetCampaignAssetActivationTaskCommandInput;
      output: GetCampaignAssetActivationTaskCommandOutput;
    };
  };
}
