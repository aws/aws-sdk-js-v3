// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateCampaignEntryLimitsRequest } from "../models/models_0";
import { UpdateCampaignEntryLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignEntryLimitsCommand}.
 */
export interface UpdateCampaignEntryLimitsCommandInput extends UpdateCampaignEntryLimitsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignEntryLimitsCommand}.
 */
export interface UpdateCampaignEntryLimitsCommandOutput extends __MetadataBearer {}

/**
 * Updates the entry limits config for a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, UpdateCampaignEntryLimitsCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, UpdateCampaignEntryLimitsCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // UpdateCampaignEntryLimitsRequest
 *   id: "STRING_VALUE", // required
 *   entryLimitsConfig: { // EntryLimitsConfig
 *     maxEntryCount: Number("int"), // required
 *     minEntryInterval: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateCampaignEntryLimitsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignEntryLimitsCommandInput - {@link UpdateCampaignEntryLimitsCommandInput}
 * @returns {@link UpdateCampaignEntryLimitsCommandOutput}
 * @see {@link UpdateCampaignEntryLimitsCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignEntryLimitsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidCampaignStateException} (client fault)
 *  The request could not be processed because of conflict in the current state of the campaign.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 *
 * @public
 */
export class UpdateCampaignEntryLimitsCommand extends $Command
  .classBuilder<
    UpdateCampaignEntryLimitsCommandInput,
    UpdateCampaignEntryLimitsCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "UpdateCampaignEntryLimits", {})
  .n("ConnectCampaignsV2Client", "UpdateCampaignEntryLimitsCommand")
  .sc(UpdateCampaignEntryLimits$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignEntryLimitsRequest;
      output: {};
    };
    sdk: {
      input: UpdateCampaignEntryLimitsCommandInput;
      output: UpdateCampaignEntryLimitsCommandOutput;
    };
  };
}
