// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCampaignAssetExportTaskRequest, StartCampaignAssetExportTaskResponse } from "../models/models_0";
import { StartCampaignAssetExportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCampaignAssetExportTaskCommand}.
 */
export interface StartCampaignAssetExportTaskCommandInput extends StartCampaignAssetExportTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartCampaignAssetExportTaskCommand}.
 */
export interface StartCampaignAssetExportTaskCommandOutput extends StartCampaignAssetExportTaskResponse, __MetadataBearer {}

/**
 * Starts an asynchronous task that packages a campaign's assets
 * into a single downloadable ZIP archive.
 *
 * Fire-and-return: the campaign is validated (it must exist and not be
 * cancelled), a task record is persisted, an asynchronous execution is
 * started, and the task id is returned with status IN_PROGRESS. This operation
 * does not inspect assets — all resolution, exclusion, and failure are
 * determined by the execution and surfaced only by GetCampaignAssetExportTask.
 *
 * Every campaign is exportable, including one never activated, because
 * renderable assets are composed on demand at export time rather than
 * requiring finished, launched deliverables.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, StartCampaignAssetExportTaskCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, StartCampaignAssetExportTaskCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // StartCampaignAssetExportTaskRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartCampaignAssetExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartCampaignAssetExportTaskResponse
 * //   Id: "STRING_VALUE", // required
 * //   Status: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param StartCampaignAssetExportTaskCommandInput - {@link StartCampaignAssetExportTaskCommandInput}
 * @returns {@link StartCampaignAssetExportTaskCommandOutput}
 * @see {@link StartCampaignAssetExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartCampaignAssetExportTaskCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartCampaignAssetExportTaskCommand extends command<StartCampaignAssetExportTaskCommandInput, StartCampaignAssetExportTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartCampaignAssetExportTask",
  StartCampaignAssetExportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCampaignAssetExportTaskRequest;
      output: StartCampaignAssetExportTaskResponse;
    };
    sdk: {
      input: StartCampaignAssetExportTaskCommandInput;
      output: StartCampaignAssetExportTaskCommandOutput;
    };
  };
}
