// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendNotifyCodeVerificationInput, SendNotifyCodeVerificationOutput } from "../models/models_0";
import { SendNotifyCodeVerification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendNotifyCodeVerificationCommand}.
 */
export interface SendNotifyCodeVerificationCommandInput extends SendNotifyCodeVerificationInput {}
/**
 * @public
 *
 * The output of {@link SendNotifyCodeVerificationCommand}.
 */
export interface SendNotifyCodeVerificationCommandOutput extends SendNotifyCodeVerificationOutput, __MetadataBearer {}

/**
 * <p>Generates a one-time passcode and delivers it to a recipient over the requested channel. The passcode policy is captured from the referenced notify code configuration at the time of the request, so later updates to the configuration do not affect verifications that are already in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, SendNotifyCodeVerificationCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, SendNotifyCodeVerificationCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // SendNotifyCodeVerificationInput
 *   channel: "TEXT" || "VOICE" || "WHATSAPP", // required
 *   destinationIdentity: "STRING_VALUE", // required
 *   originationIdentity: "STRING_VALUE", // required
 *   notifyCodeConfiguration: "STRING_VALUE",
 *   overrideChannelParameters: { // ChannelParameters
 *     text: { // TextParameters
 *       inlineTemplateBody: "STRING_VALUE",
 *       destinationCountryParameters: { // DestinationCountryParameters
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     voice: { // VoiceParameters
 *       inlineTemplateBody: "STRING_VALUE",
 *       languageCode: "STRING_VALUE",
 *       voiceId: "STRING_VALUE",
 *       voiceMessageBodyTextType: "TEXT" || "SSML",
 *     },
 *     notify: { // NotifyParameters
 *       notifyTemplateId: "STRING_VALUE",
 *       voiceId: "STRING_VALUE",
 *     },
 *     whatsApp: { // WhatsAppParameters
 *       whatsAppTemplateName: "STRING_VALUE",
 *       languageCode: "STRING_VALUE",
 *     },
 *   },
 *   overrideCodeConfigurationParameters: { // CodeConfigurationParameters
 *     codeType: "NUMERIC" || "ALPHA" || "ALPHANUMERIC",
 *     codeLength: Number("int"),
 *     validityPeriodMinutes: Number("int"),
 *     maxAttempts: Number("int"),
 *   },
 *   configurationSetName: "STRING_VALUE",
 *   context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   referenceId: "STRING_VALUE",
 * };
 * const command = new SendNotifyCodeVerificationCommand(input);
 * const response = await client.send(command);
 * // { // SendNotifyCodeVerificationOutput
 * //   verificationId: "STRING_VALUE", // required
 * //   messageId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendNotifyCodeVerificationCommandInput - {@link SendNotifyCodeVerificationCommandInput}
 * @returns {@link SendNotifyCodeVerificationCommandOutput}
 * @see {@link SendNotifyCodeVerificationCommandInput} for command's `input` shape.
 * @see {@link SendNotifyCodeVerificationCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. Verify that the resource identifier is correct and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota for your account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EndUserMessagingServiceException}
 * <p>Base exception class for all service exceptions from EndUserMessaging service.</p>
 *
 *
 * @example Send a one-time passcode over SMS
 * ```javascript
 * //
 * const input = {
 *   channel: "TEXT",
 *   destinationIdentity: "+14255550100",
 *   notifyCodeConfiguration: "ncc-abc12345678901234",
 *   originationIdentity: "arn:aws:sms-voice:us-east-1:123456789012:phone-number/pn-abc123",
 *   referenceId: "signup-flow-42"
 * };
 * const command = new SendNotifyCodeVerificationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   messageId: "msg-abc12345678901234",
 *   verificationId: "ver-abc12345678901234"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SendNotifyCodeVerificationCommand extends command<SendNotifyCodeVerificationCommandInput, SendNotifyCodeVerificationCommandOutput>(
  _ep0,
  _mw0,
  "SendNotifyCodeVerification",
  SendNotifyCodeVerification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendNotifyCodeVerificationInput;
      output: SendNotifyCodeVerificationOutput;
    };
    sdk: {
      input: SendNotifyCodeVerificationCommandInput;
      output: SendNotifyCodeVerificationCommandOutput;
    };
  };
}
