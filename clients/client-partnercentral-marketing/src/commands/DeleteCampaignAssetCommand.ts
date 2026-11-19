// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCampaignAssetRequest } from "../models/models_0";
import { DeleteCampaignAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCampaignAssetCommand}.
 */
export interface DeleteCampaignAssetCommandInput extends DeleteCampaignAssetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCampaignAssetCommand}.
 */
export interface DeleteCampaignAssetCommandOutput extends __MetadataBearer {}

/**
 * Permanently deletes a campaign asset.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, DeleteCampaignAssetCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, DeleteCampaignAssetCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // DeleteCampaignAssetRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   CampaignAssetIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCampaignAssetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCampaignAssetCommandInput - {@link DeleteCampaignAssetCommandInput}
 * @returns {@link DeleteCampaignAssetCommandOutput}
 * @see {@link DeleteCampaignAssetCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignAssetCommandOutput} for command's `response` shape.
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
 * @example Delete an asset
 * ```javascript
 * //
 * const input = {
 *   CampaignAssetIdentifier: "ast-4b81e0c9f2a7b",
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS"
 * };
 * const command = new DeleteCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCampaignAssetCommand extends command<DeleteCampaignAssetCommandInput, DeleteCampaignAssetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCampaignAsset",
  DeleteCampaignAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCampaignAssetRequest;
      output: {};
    };
    sdk: {
      input: DeleteCampaignAssetCommandInput;
      output: DeleteCampaignAssetCommandOutput;
    };
  };
}
