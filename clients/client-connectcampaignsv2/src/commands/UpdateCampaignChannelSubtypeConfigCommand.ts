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
import {
  UpdateCampaignChannelSubtypeConfigRequest,
  UpdateCampaignChannelSubtypeConfigRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateCampaignChannelSubtypeConfigCommand,
  se_UpdateCampaignChannelSubtypeConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignChannelSubtypeConfigCommand}.
 */
export interface UpdateCampaignChannelSubtypeConfigCommandInput extends UpdateCampaignChannelSubtypeConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignChannelSubtypeConfigCommand}.
 */
export interface UpdateCampaignChannelSubtypeConfigCommandOutput extends __MetadataBearer {}

/**
 * Updates the channel subtype config of a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, UpdateCampaignChannelSubtypeConfigCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, UpdateCampaignChannelSubtypeConfigCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // UpdateCampaignChannelSubtypeConfigRequest
 *   id: "STRING_VALUE", // required
 *   channelSubtypeConfig: { // ChannelSubtypeConfig
 *     telephony: { // TelephonyChannelSubtypeConfig
 *       capacity: Number("double"),
 *       connectQueueId: "STRING_VALUE",
 *       outboundMode: { // TelephonyOutboundMode Union: only one key present
 *         progressive: { // ProgressiveConfig
 *           bandwidthAllocation: Number("double"), // required
 *         },
 *         predictive: { // PredictiveConfig
 *           bandwidthAllocation: Number("double"), // required
 *         },
 *         agentless: {},
 *       },
 *       defaultOutboundConfig: { // TelephonyOutboundConfig
 *         connectContactFlowId: "STRING_VALUE", // required
 *         connectSourcePhoneNumber: "STRING_VALUE",
 *         answerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 *           enableAnswerMachineDetection: true || false, // required
 *           awaitAnswerMachinePrompt: true || false,
 *         },
 *       },
 *     },
 *     sms: { // SmsChannelSubtypeConfig
 *       capacity: Number("double"),
 *       outboundMode: { // SmsOutboundMode Union: only one key present
 *         agentless: {},
 *       },
 *       defaultOutboundConfig: { // SmsOutboundConfig
 *         connectSourcePhoneNumberArn: "STRING_VALUE", // required
 *         wisdomTemplateArn: "STRING_VALUE", // required
 *       },
 *     },
 *     email: { // EmailChannelSubtypeConfig
 *       capacity: Number("double"),
 *       outboundMode: { // EmailOutboundMode Union: only one key present
 *         agentless: {},
 *       },
 *       defaultOutboundConfig: { // EmailOutboundConfig
 *         connectSourceEmailAddress: "STRING_VALUE", // required
 *         sourceEmailAddressDisplayName: "STRING_VALUE",
 *         wisdomTemplateArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateCampaignChannelSubtypeConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignChannelSubtypeConfigCommandInput - {@link UpdateCampaignChannelSubtypeConfigCommandInput}
 * @returns {@link UpdateCampaignChannelSubtypeConfigCommandOutput}
 * @see {@link UpdateCampaignChannelSubtypeConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignChannelSubtypeConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 * @public
 */
export class UpdateCampaignChannelSubtypeConfigCommand extends $Command
  .classBuilder<
    UpdateCampaignChannelSubtypeConfigCommandInput,
    UpdateCampaignChannelSubtypeConfigCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "UpdateCampaignChannelSubtypeConfig", {})
  .n("ConnectCampaignsV2Client", "UpdateCampaignChannelSubtypeConfigCommand")
  .f(UpdateCampaignChannelSubtypeConfigRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateCampaignChannelSubtypeConfigCommand)
  .de(de_UpdateCampaignChannelSubtypeConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignChannelSubtypeConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateCampaignChannelSubtypeConfigCommandInput;
      output: UpdateCampaignChannelSubtypeConfigCommandOutput;
    };
  };
}
