// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotifyCodeConfigurationsInput, ListNotifyCodeConfigurationsOutput } from "../models/models_0";
import { ListNotifyCodeConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNotifyCodeConfigurationsCommand}.
 */
export interface ListNotifyCodeConfigurationsCommandInput extends ListNotifyCodeConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListNotifyCodeConfigurationsCommand}.
 */
export interface ListNotifyCodeConfigurationsCommandOutput extends ListNotifyCodeConfigurationsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of the notify code configurations in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, ListNotifyCodeConfigurationsCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, ListNotifyCodeConfigurationsCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // ListNotifyCodeConfigurationsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotifyCodeConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotifyCodeConfigurationsOutput
 * //   notifyCodeConfigurations: [ // NotifyCodeConfigurationList // required
 * //     { // NotifyCodeConfiguration
 * //       notifyCodeConfigurationId: "STRING_VALUE", // required
 * //       notifyCodeConfigurationArn: "STRING_VALUE", // required
 * //       notifyCodeConfigurationName: "STRING_VALUE", // required
 * //       codeConfigurationParameters: { // CodeConfigurationParameters
 * //         codeType: "NUMERIC" || "ALPHA" || "ALPHANUMERIC",
 * //         codeLength: Number("int"),
 * //         validityPeriodMinutes: Number("int"),
 * //         maxAttempts: Number("int"),
 * //       },
 * //       channelParameters: { // ChannelParameters
 * //         text: { // TextParameters
 * //           inlineTemplateBody: "STRING_VALUE",
 * //           destinationCountryParameters: { // DestinationCountryParameters
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         voice: { // VoiceParameters
 * //           inlineTemplateBody: "STRING_VALUE",
 * //           languageCode: "STRING_VALUE",
 * //           voiceId: "STRING_VALUE",
 * //           voiceMessageBodyTextType: "TEXT" || "SSML",
 * //         },
 * //         notify: { // NotifyParameters
 * //           notifyTemplateId: "STRING_VALUE",
 * //           voiceId: "STRING_VALUE",
 * //         },
 * //         whatsApp: { // WhatsAppParameters
 * //           whatsAppTemplateName: "STRING_VALUE",
 * //           languageCode: "STRING_VALUE",
 * //         },
 * //       },
 * //       deletionProtectionEnabled: true || false, // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotifyCodeConfigurationsCommandInput - {@link ListNotifyCodeConfigurationsCommandInput}
 * @returns {@link ListNotifyCodeConfigurationsCommandOutput}
 * @see {@link ListNotifyCodeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListNotifyCodeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
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
 * @example List notify code configurations
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListNotifyCodeConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   notifyCodeConfigurations: [
 *     {
 *       channelParameters: {
 *         text: {
 *           inlineTemplateBody: "Your verification code is {{code}}."
 *         }
 *       },
 *       codeConfigurationParameters: {
 *         codeLength: 6,
 *         codeType: "NUMERIC",
 *         maxAttempts: 3,
 *         validityPeriodMinutes: 10
 *       },
 *       createdAt: 1727130000,
 *       deletionProtectionEnabled: false,
 *       notifyCodeConfigurationArn: "arn:aws:end-user-messaging:us-east-1:123456789012:notify-code-configuration/ncc-abc12345678901234",
 *       notifyCodeConfigurationId: "ncc-abc12345678901234",
 *       notifyCodeConfigurationName: "SignupOtp",
 *       updatedAt: 1727130000
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNotifyCodeConfigurationsCommand extends command<ListNotifyCodeConfigurationsCommandInput, ListNotifyCodeConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListNotifyCodeConfigurations",
  ListNotifyCodeConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotifyCodeConfigurationsInput;
      output: ListNotifyCodeConfigurationsOutput;
    };
    sdk: {
      input: ListNotifyCodeConfigurationsCommandInput;
      output: ListNotifyCodeConfigurationsCommandOutput;
    };
  };
}
