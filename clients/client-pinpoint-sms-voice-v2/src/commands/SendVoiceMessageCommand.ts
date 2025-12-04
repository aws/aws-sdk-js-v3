// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SendVoiceMessageRequest, SendVoiceMessageResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { SendVoiceMessage } from "../schemas/schemas_0";

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
export interface SendVoiceMessageCommandOutput extends SendVoiceMessageResult, __MetadataBearer {}

/**
 * <p>Allows you to send a request that sends a voice message. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendVoiceMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SendVoiceMessageRequest
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE", // required
 *   MessageBody: "STRING_VALUE",
 *   MessageBodyTextType: "STRING_VALUE",
 *   VoiceId: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   MaxPricePerMinute: "STRING_VALUE",
 *   TimeToLive: Number("int"),
 *   Context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 *   ProtectConfigurationId: "STRING_VALUE",
 *   MessageFeedbackEnabled: true || false,
 * };
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendVoiceMessageResult
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendVoiceMessageCommandInput - {@link SendVoiceMessageCommandInput}
 * @returns {@link SendVoiceMessageCommandOutput}
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class SendVoiceMessageCommand extends $Command
  .classBuilder<
    SendVoiceMessageCommandInput,
    SendVoiceMessageCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "SendVoiceMessage", {})
  .n("PinpointSMSVoiceV2Client", "SendVoiceMessageCommand")
  .sc(SendVoiceMessage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendVoiceMessageRequest;
      output: SendVoiceMessageResult;
    };
    sdk: {
      input: SendVoiceMessageCommandInput;
      output: SendVoiceMessageCommandOutput;
    };
  };
}
