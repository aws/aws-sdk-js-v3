// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNotifyCodeConfigurationInput, CreateNotifyCodeConfigurationOutput } from "../models/models_0";
import { CreateNotifyCodeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotifyCodeConfigurationCommand}.
 */
export interface CreateNotifyCodeConfigurationCommandInput extends CreateNotifyCodeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link CreateNotifyCodeConfigurationCommand}.
 */
export interface CreateNotifyCodeConfigurationCommandOutput extends CreateNotifyCodeConfigurationOutput, __MetadataBearer {}

/**
 * <p>Creates a notify code configuration. A notify code configuration is a reusable policy that defines how one-time passcodes are generated and rendered, including the code type, length, validity period, maximum number of attempts, and channel templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, CreateNotifyCodeConfigurationCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, CreateNotifyCodeConfigurationCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // CreateNotifyCodeConfigurationInput
 *   notifyCodeConfigurationName: "STRING_VALUE", // required
 *   codeConfigurationParameters: { // CodeConfigurationParameters
 *     codeType: "NUMERIC" || "ALPHA" || "ALPHANUMERIC",
 *     codeLength: Number("int"),
 *     validityPeriodMinutes: Number("int"),
 *     maxAttempts: Number("int"),
 *   },
 *   channelParameters: { // ChannelParameters
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
 *   deletionProtectionEnabled: true || false,
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateNotifyCodeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotifyCodeConfigurationOutput
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
 * @param CreateNotifyCodeConfigurationCommandInput - {@link CreateNotifyCodeConfigurationCommandInput}
 * @returns {@link CreateNotifyCodeConfigurationCommandOutput}
 * @see {@link CreateNotifyCodeConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateNotifyCodeConfigurationCommandOutput} for command's `response` shape.
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
 * @example Create a notify code configuration
 * ```javascript
 * //
 * const input = {
 *   channelParameters: {
 *     text: {
 *       inlineTemplateBody: "Your verification code is {{code}}."
 *     }
 *   },
 *   codeConfigurationParameters: {
 *     codeLength: 6,
 *     codeType: "NUMERIC",
 *     maxAttempts: 3,
 *     validityPeriodMinutes: 10
 *   },
 *   notifyCodeConfigurationName: "SignupOtp"
 * };
 * const command = new CreateNotifyCodeConfigurationCommand(input);
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
 *       codeLength: 6,
 *       codeType: "NUMERIC",
 *       maxAttempts: 3,
 *       validityPeriodMinutes: 10
 *     },
 *     createdAt: 1727130000,
 *     deletionProtectionEnabled: false,
 *     notifyCodeConfigurationArn: "arn:aws:end-user-messaging:us-east-1:123456789012:notify-code-configuration/ncc-abc12345678901234",
 *     notifyCodeConfigurationId: "ncc-abc12345678901234",
 *     notifyCodeConfigurationName: "SignupOtp",
 *     updatedAt: 1727130000
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateNotifyCodeConfigurationCommand extends command<CreateNotifyCodeConfigurationCommandInput, CreateNotifyCodeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotifyCodeConfiguration",
  CreateNotifyCodeConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotifyCodeConfigurationInput;
      output: CreateNotifyCodeConfigurationOutput;
    };
    sdk: {
      input: CreateNotifyCodeConfigurationCommandInput;
      output: CreateNotifyCodeConfigurationCommandOutput;
    };
  };
}
