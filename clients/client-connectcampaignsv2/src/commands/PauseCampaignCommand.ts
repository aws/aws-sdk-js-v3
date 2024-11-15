// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PauseCampaignRequest } from "../models/models_0";
import { de_PauseCampaignCommand, se_PauseCampaignCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PauseCampaignCommand}.
 */
export interface PauseCampaignCommandInput extends PauseCampaignRequest {}
/**
 * @public
 *
 * The output of {@link PauseCampaignCommand}.
 */
export interface PauseCampaignCommandOutput extends __MetadataBearer {}

/**
 * Pauses a campaign for the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, PauseCampaignCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, PauseCampaignCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // PauseCampaignRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new PauseCampaignCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PauseCampaignCommandInput - {@link PauseCampaignCommandInput}
 * @returns {@link PauseCampaignCommandOutput}
 * @see {@link PauseCampaignCommandInput} for command's `input` shape.
 * @see {@link PauseCampaignCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 * @public
 */
export class PauseCampaignCommand extends $Command
  .classBuilder<
    PauseCampaignCommandInput,
    PauseCampaignCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCampaignServiceV2", "PauseCampaign", {})
  .n("ConnectCampaignsV2Client", "PauseCampaignCommand")
  .f(void 0, void 0)
  .ser(se_PauseCampaignCommand)
  .de(de_PauseCampaignCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PauseCampaignRequest;
      output: {};
    };
    sdk: {
      input: PauseCampaignCommandInput;
      output: PauseCampaignCommandOutput;
    };
  };
}
