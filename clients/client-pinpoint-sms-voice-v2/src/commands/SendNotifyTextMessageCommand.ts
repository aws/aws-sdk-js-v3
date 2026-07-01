// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendNotifyTextMessageRequest, SendNotifyTextMessageResult } from "../models/models_0";
import { SendNotifyTextMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendNotifyTextMessageCommand}.
 */
export interface SendNotifyTextMessageCommandInput extends SendNotifyTextMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendNotifyTextMessageCommand}.
 */
export interface SendNotifyTextMessageCommandOutput extends SendNotifyTextMessageResult, __MetadataBearer {}

/**
 * <p>Sends a templated text message through a notify configuration to a recipient's phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendNotifyTextMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendNotifyTextMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SendNotifyTextMessageRequest
 *   NotifyConfigurationId: "STRING_VALUE", // required
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE",
 *   TemplateVariables: { // TemplateVariableSubstitutionMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TimeToLive: Number("int"),
 *   Context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ConfigurationSetName: "STRING_VALUE",
 *   DryRun: true || false,
 *   MessageFeedbackEnabled: true || false,
 * };
 * const command = new SendNotifyTextMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendNotifyTextMessageResult
 * //   MessageId: "STRING_VALUE",
 * //   TemplateId: "STRING_VALUE",
 * //   ResolvedMessageBody: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendNotifyTextMessageCommandInput - {@link SendNotifyTextMessageCommandInput}
 * @returns {@link SendNotifyTextMessageCommandOutput}
 * @see {@link SendNotifyTextMessageCommandInput} for command's `input` shape.
 * @see {@link SendNotifyTextMessageCommandOutput} for command's `response` shape.
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
 * @example SendNotifyTextMessage
 * ```javascript
 * // Send an OTP verification code via SMS using a notify configuration.
 * const input = {
 *   DestinationPhoneNumber: "+12065550100",
 *   NotifyConfigurationId: "nc-1234567890abcdef0",
 *   TemplateVariables: {
 *     code: "123456",
 *     expiry: "10"
 *   }
 * };
 * const command = new SendNotifyTextMessageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MessageId: "msg-1234567890abcdef0",
 *   ResolvedMessageBody: "Your verification code is 123456. It expires in 10 minutes.",
 *   TemplateId: "nt-1234567890abcdef0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SendNotifyTextMessageCommand extends command<SendNotifyTextMessageCommandInput, SendNotifyTextMessageCommandOutput>(
  _ep0,
  _mw0,
  "SendNotifyTextMessage",
  SendNotifyTextMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendNotifyTextMessageRequest;
      output: SendNotifyTextMessageResult;
    };
    sdk: {
      input: SendNotifyTextMessageCommandInput;
      output: SendNotifyTextMessageCommandOutput;
    };
  };
}
