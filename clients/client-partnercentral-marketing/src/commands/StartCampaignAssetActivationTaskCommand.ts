// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartCampaignAssetActivationTaskRequest,
  StartCampaignAssetActivationTaskResponse,
} from "../models/models_0";
import { StartCampaignAssetActivationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCampaignAssetActivationTaskCommand}.
 */
export interface StartCampaignAssetActivationTaskCommandInput extends StartCampaignAssetActivationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartCampaignAssetActivationTaskCommand}.
 */
export interface StartCampaignAssetActivationTaskCommandOutput extends StartCampaignAssetActivationTaskResponse, __MetadataBearer {}

/**
 * Activates 1–25 of a campaign's assets as one ordered unit, and returns a task
 * to poll.
 *
 * Takes a **list** because the service owns the ordering. Assets link to one
 * another by URL — an email's call-to-action carries the landing page's URL, the
 * landing page's download field carries the document's — and a URL does not
 * exist until the asset it points at is activated. Those edges are derived by
 * the service from the campaign's pinned template, so reconstructing and
 * topologically sorting them is work the service has already done, and getting
 * it wrong arms an email with a dead link. Name every asset you want live and
 * the service sequences them; "activate everything" is the list with every id
 * in it, which ListCampaignAssets already gave you.
 *
 * Asynchronous, because activating an asset installs or arms behaviour that runs
 * later and an email activation bulk-loads its audience into the delivery
 * platform. Everything decidable **without** a write to the delivery platform is
 * evaluated before this returns; everything else lands on the task.
 *
 * A refusal that applies to one asset does not fail the request: that asset is
 * on the task already FAILED, with its reason, and the rest run. A refusal that
 * applies to the whole request — a malformed list, an unknown campaign, another
 * task already running on this campaign, this service's service-linked role
 * being deleted (ConflictException `SERVICE_LINKED_ROLE_DELETION_IN_PROGRESS`),
 * a campaign setting an asset in the request needs (ValidationException
 * `CAMPAIGN_INCOMPLETE`), a campaign sender that no longer passes `CreateCampaign`'s
 * sender rules while the request names an email (ValidationException with no
 * `FieldList`, whose message ends with one `Reason: <code>` token per failed rule:
 * `PATTERN_MISMATCH`, `SENDER_DOMAIN_NOT_ALLIANCE_LEAD`, or `SENDER_DOMAIN_DKIM_MISSING`
 * and/or `SENDER_DOMAIN_DMARC_MISSING`) — is thrown, and nothing starts.
 *
 * One task runs on a campaign at a time. A second concurrent call is refused
 * with ConflictException / CAMPAIGN_ACTIVATION_IN_PROGRESS, whose `ResourceId`
 * names the task already holding the campaign. Two tasks over *disjoint* asset
 * sets are refused too: the guard is deliberately campaign-wide, because
 * overlapping runs made the per-asset status misleading rather than merely
 * contended.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, StartCampaignAssetActivationTaskCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, StartCampaignAssetActivationTaskCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // StartCampaignAssetActivationTaskRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   CampaignAssetIdentifiers: [ // CampaignAssetIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartCampaignAssetActivationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartCampaignAssetActivationTaskResponse
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
 * @param StartCampaignAssetActivationTaskCommandInput - {@link StartCampaignAssetActivationTaskCommandInput}
 * @returns {@link StartCampaignAssetActivationTaskCommandOutput}
 * @see {@link StartCampaignAssetActivationTaskCommandInput} for command's `input` shape.
 * @see {@link StartCampaignAssetActivationTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by the service.
 *
 * A caller branches on `Reason`, and where the rejection is attributable to particular fields it reads
 * `FieldList` rather than parsing `Message`, which is prose and may change.
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
 * @throws {@link PartnerCentralMarketingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralMarketing service.</p>
 *
 *
 * @example Activate a whole campaign kit
 * ```javascript
 * //
 * const input = {
 *   CampaignAssetIdentifiers: [
 *     "ast-4b81e0c9f2a7b",
 *     "ast-9f3c1a2b7d40e",
 *     "ast-2k7m4p9x1c6qd",
 *     "ast-7w3n8r5t2h1ya"
 *   ],
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new StartCampaignAssetActivationTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Assets: [
 *     {
 *       CampaignAssetId: "ast-4b81e0c9f2a7b",
 *       Status: "IN_PROGRESS"
 *     },
 *     {
 *       CampaignAssetId: "ast-9f3c1a2b7d40e",
 *       Status: "IN_PROGRESS"
 *     },
 *     {
 *       CampaignAssetId: "ast-2k7m4p9x1c6qd",
 *       Status: "IN_PROGRESS"
 *     },
 *     {
 *       CampaignAssetId: "ast-7w3n8r5t2h1ya",
 *       Status: "IN_PROGRESS"
 *     }
 *   ],
 *   CampaignId: "camp-5Hq2m8x4k1p9w",
 *   StartedAt: 1764547200,
 *   TaskId: "atsk-7k2M9x4qp1w8n",
 *   TaskStatus: "IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @example Some assets refused, the rest started anyway
 * ```javascript
 * //
 * const input = {
 *   CampaignAssetIdentifiers: [
 *     "ast-4b81e0c9f2a7b",
 *     "ast-9f3c1a2b7d40e",
 *     "ast-2k7m4p9x1c6qd",
 *     "ast-7w3n8r5t2h1ya"
 *   ],
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new StartCampaignAssetActivationTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Assets: [
 *     {
 *       CampaignAssetId: "ast-4b81e0c9f2a7b",
 *       Message: "An asset this one embeds is not live.",
 *       Reason: "PREREQUISITE_ASSET_NOT_ACTIVE",
 *       Status: "FAILED"
 *     },
 *     {
 *       CampaignAssetId: "ast-9f3c1a2b7d40e",
 *       Message: "An asset this one embeds is not live.",
 *       Reason: "PREREQUISITE_ASSET_NOT_ACTIVE",
 *       Status: "FAILED"
 *     },
 *     {
 *       CampaignAssetId: "ast-2k7m4p9x1c6qd",
 *       Message: "Required fields are empty.",
 *       Reason: "REQUIRED_FIELD_MISSING",
 *       Status: "FAILED"
 *     },
 *     {
 *       CampaignAssetId: "ast-7w3n8r5t2h1ya",
 *       Status: "IN_PROGRESS"
 *     }
 *   ],
 *   CampaignId: "camp-5Hq2m8x4k1p9w",
 *   StartedAt: 1764547200,
 *   TaskId: "atsk-3n7V2h5r9t4kc",
 *   TaskStatus: "IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @example Every asset refused, so the task is FAILED at once
 * ```javascript
 * //
 * const input = {
 *   CampaignAssetIdentifiers: [
 *     "ast-2k7m4p9x1c6qd"
 *   ],
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new StartCampaignAssetActivationTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Assets: [
 *     {
 *       CampaignAssetId: "ast-2k7m4p9x1c6qd",
 *       Message: "This kind of asset is downloaded rather than published.",
 *       Reason: "ASSET_NOT_STARTABLE",
 *       Status: "FAILED"
 *     }
 *   ],
 *   CampaignId: "camp-5Hq2m8x4k1p9w",
 *   EndedAt: 1764547200,
 *   StartedAt: 1764547200,
 *   TaskId: "atsk-9p4W2k7m3x8qa",
 *   TaskStatus: "FAILED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartCampaignAssetActivationTaskCommand extends command<StartCampaignAssetActivationTaskCommandInput, StartCampaignAssetActivationTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartCampaignAssetActivationTask",
  StartCampaignAssetActivationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCampaignAssetActivationTaskRequest;
      output: StartCampaignAssetActivationTaskResponse;
    };
    sdk: {
      input: StartCampaignAssetActivationTaskCommandInput;
      output: StartCampaignAssetActivationTaskCommandOutput;
    };
  };
}
