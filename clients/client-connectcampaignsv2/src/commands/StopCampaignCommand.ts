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
import { StopCampaignRequest } from "../models/models_0";
import { de_StopCampaignCommand, se_StopCampaignCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCampaignCommand}.
 */
export interface StopCampaignCommandInput extends StopCampaignRequest {}
/**
 * @public
 *
 * The output of {@link StopCampaignCommand}.
 */
export interface StopCampaignCommandOutput extends __MetadataBearer {}

/**
 * Stops a campaign for the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, StopCampaignCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, StopCampaignCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // StopCampaignRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StopCampaignCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopCampaignCommandInput - {@link StopCampaignCommandInput}
 * @returns {@link StopCampaignCommandOutput}
 * @see {@link StopCampaignCommandInput} for command's `input` shape.
 * @see {@link StopCampaignCommandOutput} for command's `response` shape.
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
export class StopCampaignCommand extends $Command
  .classBuilder<
    StopCampaignCommandInput,
    StopCampaignCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "StopCampaign", {})
  .n("ConnectCampaignsV2Client", "StopCampaignCommand")
  .f(void 0, void 0)
  .ser(se_StopCampaignCommand)
  .de(de_StopCampaignCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCampaignRequest;
      output: {};
    };
    sdk: {
      input: StopCampaignCommandInput;
      output: StopCampaignCommandOutput;
    };
  };
}
