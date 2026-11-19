// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCampaignRequest } from "../models/models_0";
import { DeleteCampaign$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCampaignCommand}.
 */
export interface DeleteCampaignCommandInput extends DeleteCampaignRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCampaignCommand}.
 */
export interface DeleteCampaignCommandOutput extends __MetadataBearer {}

/**
 * Permanently deletes a campaign, its assets and their stored files.
 *
 * A hard delete with no undo: the campaign leaves ListCampaigns and every read of it returns
 * ResourceNotFoundException. Its tags are removed with it.
 *
 * Refused with ConflictException while the campaign has a live asset (`CAMPAIGN_HAS_ACTIVE_ASSETS`),
 * because deleting the record would orphan what the delivery platform still serves or sends:
 * deactivate those assets first. Also refused while an activation task is running
 * (`CAMPAIGN_ACTIVATION_IN_PROGRESS`). A completed campaign can be deleted.
 *
 * Idempotent in effect: deleting a campaign that is already gone returns ResourceNotFoundException,
 * and nothing is left behind by a retry.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, DeleteCampaignCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, DeleteCampaignCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // DeleteCampaignRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCampaignCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCampaignCommandInput - {@link DeleteCampaignCommandInput}
 * @returns {@link DeleteCampaignCommandOutput}
 * @see {@link DeleteCampaignCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralMarketingClientResolvedConfig | config} for PartnerCentralMarketingClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
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
 * @example Delete a campaign
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new DeleteCampaignCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCampaignCommand extends command<DeleteCampaignCommandInput, DeleteCampaignCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCampaign",
  DeleteCampaign$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCampaignRequest;
      output: {};
    };
    sdk: {
      input: DeleteCampaignCommandInput;
      output: DeleteCampaignCommandOutput;
    };
  };
}
