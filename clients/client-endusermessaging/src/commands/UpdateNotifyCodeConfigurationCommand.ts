// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNotifyCodeConfigurationInput, UpdateNotifyCodeConfigurationOutput } from "../models/models_0";
import { UpdateNotifyCodeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateNotifyCodeConfigurationCommand}.
 */
export interface UpdateNotifyCodeConfigurationCommandInput extends UpdateNotifyCodeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateNotifyCodeConfigurationCommand}.
 */
export interface UpdateNotifyCodeConfigurationCommandOutput extends UpdateNotifyCodeConfigurationOutput, __MetadataBearer {}

/**
 * <p>Updates the mutable fields of a notify code configuration. Only the fields that you supply are changed. For the template and language fields, supplying an empty value clears the currently stored value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, UpdateNotifyCodeConfigurationCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, UpdateNotifyCodeConfigurationCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // UpdateNotifyCodeConfigurationInput
 *   notifyCodeConfigurationId: "STRING_VALUE", // required
 *   notifyCodeConfigurationName: "STRING_VALUE",
 *   codeConfigurationParameters: { // UpdateCodeConfigurationParameters
 *     codeType: "NUMERIC" || "ALPHA" || "ALPHANUMERIC",
 *     codeLength: Number("int"),
 *     validityPeriodMinutes: Number("int"),
 *     maxAttempts: Number("int"),
 *   },
 *   channelParameters: { // UpdateChannelParameters
 *     text: { // UpdateTextParameters
 *       inlineTemplateBody: "STRING_VALUE",
 *       destinationCountryParameters: { // UpdateDestinationCountryParameters
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     voice: { // UpdateVoiceParameters
 *       inlineTemplateBody: "STRING_VALUE",
 *       languageCode: "STRING_VALUE",
 *       voiceId: "STRING_VALUE",
 *       voiceMessageBodyTextType: "TEXT" || "SSML",
 *     },
 *     notify: { // UpdateNotifyParameters
 *       notifyTemplateId: "STRING_VALUE",
 *       voiceId: "STRING_VALUE",
 *     },
 *     whatsApp: { // UpdateWhatsAppParameters
 *       whatsAppTemplateName: "STRING_VALUE",
 *       languageCode: "STRING_VALUE",
 *     },
 *   },
 *   deletionProtectionEnabled: true || false,
 * };
 * const command = new UpdateNotifyCodeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNotifyCodeConfigurationOutput
 * //   notifyCodeConfiguration: { // NotifyCodeConfiguration
 * //     notifyCodeConfigurationId: "STRING_VALUE", // required
 * //     notifyCodeConfigurationArn: "STRING_VALUE", // required
 * //     notifyCodeConfigurationName: "STRING_VALUE", // required
 * //     codeConfigurationParameters: { // CodeConfigurationParameters
 * //       codeType: "NUMERIC" || "ALPHA" || "ALPHANUMERIC",
 * //       codeLength: Number("int"),
 * //       validityPeriodMinutes: Number("int"),
 * //       maxAttempts: Number("int"),
 * //     },
 * //     channelParameters: { // ChannelParameters
 * //       text: { // TextParameters
 * //         inlineTemplateBody: "STRING_VALUE",
 * //         destinationCountryParameters: { // DestinationCountryParameters
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       voice: { // VoiceParameters
 * //         inlineTemplateBody: "STRING_VALUE",
 * //         languageCode: "STRING_VALUE",
 * //         voiceId: "STRING_VALUE",
 * //         voiceMessageBodyTextType: "TEXT" || "SSML",
 * //       },
 * //       notify: { // NotifyParameters
 * //         notifyTemplateId: "STRING_VALUE",
 * //         voiceId: "STRING_VALUE",
 * //       },
 * //       whatsApp: { // WhatsAppParameters
 * //         whatsAppTemplateName: "STRING_VALUE",
 * //         languageCode: "STRING_VALUE",
 * //       },
 * //     },
 * //     deletionProtectionEnabled: true || false, // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNotifyCodeConfigurationCommandInput - {@link UpdateNotifyCodeConfigurationCommandInput}
 * @returns {@link UpdateNotifyCodeConfigurationCommandOutput}
 * @see {@link UpdateNotifyCodeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateNotifyCodeConfigurationCommandOutput} for command's `response` shape.
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
 * @example Update a notify code configuration
 * ```javascript
 * //
 * const input = {
 *   codeConfigurationParameters: {
 *     codeLength: 8,
 *     validityPeriodMinutes: 15
 *   },
 *   notifyCodeConfigurationId: "ncc-abc12345678901234"
 * };
 * const command = new UpdateNotifyCodeConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   notifyCodeConfiguration: {
 *     channelParameters: {
 *       text: {
 *         inlineTemplateBody: "Your verification code is {{code}}."
 *       }
 *     },
 *     codeConfigurationParameters: {
 *       codeLength: 8,
 *       codeType: "NUMERIC",
 *       maxAttempts: 3,
 *       validityPeriodMinutes: 15
 *     },
 *     createdAt: 1727130000,
 *     deletionProtectionEnabled: false,
 *     notifyCodeConfigurationArn: "arn:aws:end-user-messaging:us-east-1:123456789012:notify-code-configuration/ncc-abc12345678901234",
 *     notifyCodeConfigurationId: "ncc-abc12345678901234",
 *     notifyCodeConfigurationName: "SignupOtp",
 *     updatedAt: 1727216400
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateNotifyCodeConfigurationCommand extends command<UpdateNotifyCodeConfigurationCommandInput, UpdateNotifyCodeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNotifyCodeConfiguration",
  UpdateNotifyCodeConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotifyCodeConfigurationInput;
      output: UpdateNotifyCodeConfigurationOutput;
    };
    sdk: {
      input: UpdateNotifyCodeConfigurationCommandInput;
      output: UpdateNotifyCodeConfigurationCommandOutput;
    };
  };
}
