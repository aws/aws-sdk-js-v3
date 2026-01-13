// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateCampaignSourceRequest } from "../models/models_0";
import { UpdateCampaignSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignSourceCommand}.
 */
export interface UpdateCampaignSourceCommandInput extends UpdateCampaignSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignSourceCommand}.
 */
export interface UpdateCampaignSourceCommandOutput extends __MetadataBearer {}

/**
 * Updates the campaign source with a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, UpdateCampaignSourceCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, UpdateCampaignSourceCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // UpdateCampaignSourceRequest
 *   id: "STRING_VALUE", // required
 *   source: { // Source Union: only one key present
 *     customerProfilesSegmentArn: "STRING_VALUE",
 *     eventTrigger: { // EventTrigger
 *       customerProfilesDomainArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateCampaignSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignSourceCommandInput - {@link UpdateCampaignSourceCommandInput}
 * @returns {@link UpdateCampaignSourceCommandOutput}
 * @see {@link UpdateCampaignSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignSourceCommandOutput} for command's `response` shape.
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
export class UpdateCampaignSourceCommand extends $Command
  .classBuilder<
    UpdateCampaignSourceCommandInput,
    UpdateCampaignSourceCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "UpdateCampaignSource", {})
  .n("ConnectCampaignsV2Client", "UpdateCampaignSourceCommand")
  .sc(UpdateCampaignSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignSourceRequest;
      output: {};
    };
    sdk: {
      input: UpdateCampaignSourceCommandInput;
      output: UpdateCampaignSourceCommandOutput;
    };
  };
}
