// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendVoiceMessageRequest, SendVoiceMessageResponse } from "../models/models_0";
import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import { de_SendVoiceMessageCommand, se_SendVoiceMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendVoiceMessageCommand}.
 */
export interface SendVoiceMessageCommandInput extends SendVoiceMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendVoiceMessageCommand}.
 */
export interface SendVoiceMessageCommandOutput extends SendVoiceMessageResponse, __MetadataBearer {}

/**
 * Create a new voice message and send it to a recipient's phone number.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, SendVoiceMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const input = { // SendVoiceMessageRequest
 *   CallerId: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   Content: { // VoiceMessageContent
 *     CallInstructionsMessage: { // CallInstructionsMessageType
 *       Text: "STRING_VALUE",
 *     },
 *     PlainTextMessage: { // PlainTextMessageType
 *       LanguageCode: "STRING_VALUE",
 *       Text: "STRING_VALUE",
 *       VoiceId: "STRING_VALUE",
 *     },
 *     SSMLMessage: { // SSMLMessageType
 *       LanguageCode: "STRING_VALUE",
 *       Text: "STRING_VALUE",
 *       VoiceId: "STRING_VALUE",
 *     },
 *   },
 *   DestinationPhoneNumber: "STRING_VALUE",
 *   OriginationPhoneNumber: "STRING_VALUE",
 * };
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendVoiceMessageResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendVoiceMessageCommandInput - {@link SendVoiceMessageCommandInput}
 * @returns {@link SendVoiceMessageCommandOutput}
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The input you provided is invalid.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  You've issued too many requests to the resource. Wait a few minutes, and then try again.
 *
 * @throws {@link PinpointSMSVoiceServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoice service.</p>
 *
 * @public
 */
export class SendVoiceMessageCommand extends $Command
  .classBuilder<
    SendVoiceMessageCommandInput,
    SendVoiceMessageCommandOutput,
    PinpointSMSVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoice", "SendVoiceMessage", {})
  .n("PinpointSMSVoiceClient", "SendVoiceMessageCommand")
  .f(void 0, void 0)
  .ser(se_SendVoiceMessageCommand)
  .de(de_SendVoiceMessageCommand)
  .build() {}
