// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateCampaignAssetRequest, BatchCreateCampaignAssetResponse } from "../models/models_0";
import { BatchCreateCampaignAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreateCampaignAssetCommand}.
 */
export interface BatchCreateCampaignAssetCommandInput extends BatchCreateCampaignAssetRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateCampaignAssetCommand}.
 */
export interface BatchCreateCampaignAssetCommandOutput extends BatchCreateCampaignAssetResponse, __MetadataBearer {}

/**
 * Instantiates one or more of the campaign template's blueprints as assets of
 * this campaign.
 *
 * The only asset-create operation: DG-038 deleted the singular
 * CreateCampaignAsset, and AWS Batch Operations makes exposing a singular
 * alongside a batch optional ("which MAY actually be exposed in addition"). It
 * also replaced kit instantiation -- CreateCampaign creates zero assets, so this
 * is the only path by which an asset comes into existence.
 *
 * Errors here are whole-request only, and nothing is written when one is thrown.
 * Per-entry failures ride in the response's `Errors` list with a 200.
 * ServiceQuotaExceededException is deliberately absent: a campaign holds at most
 * one asset per blueprint (I-15), so the ceiling is the size of the bound kit and
 * a request of unique valid entries cannot exceed it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, BatchCreateCampaignAssetCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, BatchCreateCampaignAssetCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // BatchCreateCampaignAssetRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   Entries: [ // BatchCreateCampaignAssetEntries // required
 *     { // BatchCreateCampaignAssetEntry
 *       SourceAssetTemplateIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchCreateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateCampaignAssetResponse
 * //   Errors: [ // BatchCreateCampaignAssetErrors // required
 * //     { // BatchCreateCampaignAssetError
 * //       SourceAssetTemplateId: "STRING_VALUE", // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Successful: [ // BatchCreateCampaignAssetResults
 * //     { // BatchCreateCampaignAssetResult
 * //       SourceAssetTemplateId: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Layout: { // CampaignAssetLayout
 * //         Selected: "STRING_VALUE",
 * //         Options: [ // CampaignAssetLayoutOptionList // required
 * //           { // CampaignAssetLayoutOption
 * //             Value: "STRING_VALUE", // required
 * //             Label: "STRING_VALUE",
 * //             FieldIds: [ // TemplateFieldIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             LayoutPreviews: [ // LayoutPreviewList
 * //               { // LayoutPreview
 * //                 Format: "HTML" || "PDF" || "IMAGE", // required
 * //                 Url: "STRING_VALUE", // required
 * //                 PageType: "FORM" || "CONFIRMATION",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateCampaignAssetCommandInput - {@link BatchCreateCampaignAssetCommandInput}
 * @returns {@link BatchCreateCampaignAssetCommandOutput}
 * @see {@link BatchCreateCampaignAssetCommandInput} for command's `input` shape.
 * @see {@link BatchCreateCampaignAssetCommandOutput} for command's `response` shape.
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
 * @example Instantiate two of the kit's blueprints
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   Entries: [
 *     {
 *       SourceAssetTemplateIdentifier: "ta000000email"
 *     },
 *     {
 *       SourceAssetTemplateIdentifier: "ta0000000lp01"
 *     }
 *   ]
 * };
 * const command = new BatchCreateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Errors:   [],
 *   Successful: [
 *     {
 *       Id: "ast-4b81e0c9f2a7b",
 *       SourceAssetTemplateId: "ta000000email"
 *     },
 *     {
 *       Id: "ast-9f3c1a2b7d40e",
 *       SourceAssetTemplateId: "ta0000000lp01"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example A partial batch: one entry names a blueprint the campaign's template does not carry
 * ```javascript
 * //
 * const input = {
 *   CampaignIdentifier: "camp-5Hq2m8x4k1p9w",
 *   Catalog: "AWS",
 *   Entries: [
 *     {
 *       SourceAssetTemplateIdentifier: "ta000000email"
 *     },
 *     {
 *       SourceAssetTemplateIdentifier: "ta00000absent"
 *     }
 *   ]
 * };
 * const command = new BatchCreateCampaignAssetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Errors: [
 *     {
 *       Code: "ResourceNotFoundException",
 *       Message: "No asset template ta00000absent on this campaign's template.",
 *       SourceAssetTemplateId: "ta00000absent"
 *     }
 *   ],
 *   Successful: [
 *     {
 *       Id: "ast-4b81e0c9f2a7b",
 *       SourceAssetTemplateId: "ta000000email"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchCreateCampaignAssetCommand extends command<BatchCreateCampaignAssetCommandInput, BatchCreateCampaignAssetCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateCampaignAsset",
  BatchCreateCampaignAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateCampaignAssetRequest;
      output: BatchCreateCampaignAssetResponse;
    };
    sdk: {
      input: BatchCreateCampaignAssetCommandInput;
      output: BatchCreateCampaignAssetCommandOutput;
    };
  };
}
