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
import type { StartCampaignRequest } from "../models/models_0";
import { StartCampaign } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCampaignCommand}.
 */
export interface StartCampaignCommandInput extends StartCampaignRequest {}
/**
 * @public
 *
 * The output of {@link StartCampaignCommand}.
 */
export interface StartCampaignCommandOutput extends __MetadataBearer {}

/**
 * Starts a campaign for the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, StartCampaignCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, StartCampaignCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // StartCampaignRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new StartCampaignCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartCampaignCommandInput - {@link StartCampaignCommandInput}
 * @returns {@link StartCampaignCommandOutput}
 * @see {@link StartCampaignCommandInput} for command's `input` shape.
 * @see {@link StartCampaignCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartCampaignCommand extends $Command
  .classBuilder<
    StartCampaignCommandInput,
    StartCampaignCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "StartCampaign", {})
  .n("ConnectCampaignsV2Client", "StartCampaignCommand")
  .sc(StartCampaign)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCampaignRequest;
      output: {};
    };
    sdk: {
      input: StartCampaignCommandInput;
      output: StartCampaignCommandOutput;
    };
  };
}
