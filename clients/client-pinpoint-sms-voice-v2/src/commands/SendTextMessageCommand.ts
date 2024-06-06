// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendTextMessageRequest, SendTextMessageResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_SendTextMessageCommand, se_SendTextMessageCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendTextMessageCommand}.
 */
export interface SendTextMessageCommandInput extends SendTextMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendTextMessageCommand}.
 */
export interface SendTextMessageCommandOutput extends SendTextMessageResult, __MetadataBearer {}

/**
 * <p>Creates a new text message and sends it to a recipient's phone number.</p>
 *          <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit
 *             depends on the destination country of your messages, as well as the type of phone number
 *             (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per
 *                 Second (MPS) limits</a> in the <i>Amazon Pinpoint User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendTextMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendTextMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SendTextMessageRequest
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE",
 *   MessageBody: "STRING_VALUE",
 *   MessageType: "STRING_VALUE",
 *   Keyword: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   MaxPrice: "STRING_VALUE",
 *   TimeToLive: Number("int"),
 *   Context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DestinationCountryParameters: { // DestinationCountryParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 *   ProtectConfigurationId: "STRING_VALUE",
 * };
 * const command = new SendTextMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendTextMessageResult
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendTextMessageCommandInput - {@link SendTextMessageCommandInput}
 * @returns {@link SendTextMessageCommandOutput}
 * @see {@link SendTextMessageCommandInput} for command's `input` shape.
 * @see {@link SendTextMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 * @public
 */
export class SendTextMessageCommand extends $Command
  .classBuilder<
    SendTextMessageCommandInput,
    SendTextMessageCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "SendTextMessage", {})
  .n("PinpointSMSVoiceV2Client", "SendTextMessageCommand")
  .f(void 0, void 0)
  .ser(se_SendTextMessageCommand)
  .de(de_SendTextMessageCommand)
  .build() {}
