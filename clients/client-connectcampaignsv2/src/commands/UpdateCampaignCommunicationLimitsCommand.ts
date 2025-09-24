// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCampaignCommunicationLimitsRequest } from "../models/models_0";
import { UpdateCampaignCommunicationLimits } from "../schemas/schemas_6_Limits";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignCommunicationLimitsCommand}.
 */
export interface UpdateCampaignCommunicationLimitsCommandInput extends UpdateCampaignCommunicationLimitsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignCommunicationLimitsCommand}.
 */
export interface UpdateCampaignCommunicationLimitsCommandOutput extends __MetadataBearer {}

/**
 * Updates the communication limits config for a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, UpdateCampaignCommunicationLimitsCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, UpdateCampaignCommunicationLimitsCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // UpdateCampaignCommunicationLimitsRequest
 *   id: "STRING_VALUE", // required
 *   communicationLimitsOverride: { // CommunicationLimitsConfig
 *     allChannelSubtypes: { // CommunicationLimits Union: only one key present
 *       communicationLimitsList: [ // CommunicationLimitList
 *         { // CommunicationLimit
 *           maxCountPerRecipient: Number("int"), // required
 *           frequency: Number("int"), // required
 *           unit: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     instanceLimitsHandling: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateCampaignCommunicationLimitsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignCommunicationLimitsCommandInput - {@link UpdateCampaignCommunicationLimitsCommandInput}
 * @returns {@link UpdateCampaignCommunicationLimitsCommandOutput}
 * @see {@link UpdateCampaignCommunicationLimitsCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommunicationLimitsCommandOutput} for command's `response` shape.
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
export class UpdateCampaignCommunicationLimitsCommand extends $Command
  .classBuilder<
    UpdateCampaignCommunicationLimitsCommandInput,
    UpdateCampaignCommunicationLimitsCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "UpdateCampaignCommunicationLimits", {})
  .n("ConnectCampaignsV2Client", "UpdateCampaignCommunicationLimitsCommand")
  .sc(UpdateCampaignCommunicationLimits)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignCommunicationLimitsRequest;
      output: {};
    };
    sdk: {
      input: UpdateCampaignCommunicationLimitsCommandInput;
      output: UpdateCampaignCommunicationLimitsCommandOutput;
    };
  };
}
