// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SendDestinationNumberVerificationCodeRequest,
  SendDestinationNumberVerificationCodeResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_SendDestinationNumberVerificationCodeCommand,
  se_SendDestinationNumberVerificationCodeCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDestinationNumberVerificationCodeCommand}.
 */
export interface SendDestinationNumberVerificationCodeCommandInput
  extends SendDestinationNumberVerificationCodeRequest {}
/**
 * @public
 *
 * The output of {@link SendDestinationNumberVerificationCodeCommand}.
 */
export interface SendDestinationNumberVerificationCodeCommandOutput
  extends SendDestinationNumberVerificationCodeResult,
    __MetadataBearer {}

/**
 * <p>Before you can send test messages to a verified destination phone number you need to
 *             opt-in the verified destination phone number. Creates a new text message with a
 *             verification code and send it to a verified destination phone number. Once you have the verification code use <a>VerifyDestinationNumber</a> to opt-in the verified destination phone number to receive messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendDestinationNumberVerificationCodeCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendDestinationNumberVerificationCodeCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SendDestinationNumberVerificationCodeRequest
 *   VerifiedDestinationNumberId: "STRING_VALUE", // required
 *   VerificationChannel: "STRING_VALUE", // required
 *   LanguageCode: "STRING_VALUE",
 *   OriginationIdentity: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   Context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DestinationCountryParameters: { // DestinationCountryParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SendDestinationNumberVerificationCodeCommand(input);
 * const response = await client.send(command);
 * // { // SendDestinationNumberVerificationCodeResult
 * //   MessageId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendDestinationNumberVerificationCodeCommandInput - {@link SendDestinationNumberVerificationCodeCommandInput}
 * @returns {@link SendDestinationNumberVerificationCodeCommandOutput}
 * @see {@link SendDestinationNumberVerificationCodeCommandInput} for command's `input` shape.
 * @see {@link SendDestinationNumberVerificationCodeCommandOutput} for command's `response` shape.
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
export class SendDestinationNumberVerificationCodeCommand extends $Command
  .classBuilder<
    SendDestinationNumberVerificationCodeCommandInput,
    SendDestinationNumberVerificationCodeCommandOutput,
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
  .s("PinpointSMSVoiceV2", "SendDestinationNumberVerificationCode", {})
  .n("PinpointSMSVoiceV2Client", "SendDestinationNumberVerificationCodeCommand")
  .f(void 0, void 0)
  .ser(se_SendDestinationNumberVerificationCodeCommand)
  .de(de_SendDestinationNumberVerificationCodeCommand)
  .build() {}
