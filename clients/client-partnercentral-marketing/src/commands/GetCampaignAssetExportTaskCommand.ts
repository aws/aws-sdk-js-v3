// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCampaignAssetExportTaskRequest, GetCampaignAssetExportTaskResponse } from "../models/models_0";
import { GetCampaignAssetExportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCampaignAssetExportTaskCommand}.
 */
export interface GetCampaignAssetExportTaskCommandInput extends GetCampaignAssetExportTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignAssetExportTaskCommand}.
 */
export interface GetCampaignAssetExportTaskCommandOutput extends GetCampaignAssetExportTaskResponse, __MetadataBearer {}

/**
 * Retrieves a campaign asset export task by its identifier, reporting its
 * status and, when the task is COMPLETED, a freshly minted short-lived
 * presigned URL for downloading the ZIP archive.
 *
 * The download URL is minted on each call and is valid for at most 15 minutes;
 * clients should download promptly rather than caching it. When the task has
 * FAILED, FailureReason explains why. Poll this operation (roughly every 2-5
 * seconds) until the task reaches a terminal state.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralMarketingClient, GetCampaignAssetExportTaskCommand } from "@aws-sdk/client-partnercentral-marketing"; // ES Modules import
 * // const { PartnerCentralMarketingClient, GetCampaignAssetExportTaskCommand } = require("@aws-sdk/client-partnercentral-marketing"); // CommonJS import
 * // import type { PartnerCentralMarketingClientConfig } from "@aws-sdk/client-partnercentral-marketing";
 * const config = {}; // type is PartnerCentralMarketingClientConfig
 * const client = new PartnerCentralMarketingClient(config);
 * const input = { // GetCampaignAssetExportTaskRequest
 *   Catalog: "AWS" || "Sandbox", // required
 *   CampaignIdentifier: "STRING_VALUE", // required
 *   CampaignAssetExportTaskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignAssetExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignAssetExportTaskResponse
 * //   Id: "STRING_VALUE", // required
 * //   Status: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   DownloadUrl: "STRING_VALUE",
 * //   ExpiresAt: new Date("TIMESTAMP"),
 * //   FailureReason: { // CampaignAssetExportFailureReason
 * //     Code: "EXPORT_TIMEOUT" || "EXPORT_TOO_LARGE" || "PACKAGING_ERROR" || "SOURCE_OBJECT_MISSING" || "INTERNAL_ERROR", // required
 * //     Message: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCampaignAssetExportTaskCommandInput - {@link GetCampaignAssetExportTaskCommandInput}
 * @returns {@link GetCampaignAssetExportTaskCommandOutput}
 * @see {@link GetCampaignAssetExportTaskCommandInput} for command's `input` shape.
 * @see {@link GetCampaignAssetExportTaskCommandOutput} for command's `response` shape.
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
export class GetCampaignAssetExportTaskCommand extends command<GetCampaignAssetExportTaskCommandInput, GetCampaignAssetExportTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetCampaignAssetExportTask",
  GetCampaignAssetExportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignAssetExportTaskRequest;
      output: GetCampaignAssetExportTaskResponse;
    };
    sdk: {
      input: GetCampaignAssetExportTaskCommandInput;
      output: GetCampaignAssetExportTaskCommandOutput;
    };
  };
}
