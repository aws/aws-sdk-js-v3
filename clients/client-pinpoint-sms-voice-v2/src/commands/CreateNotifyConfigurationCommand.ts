// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNotifyConfigurationRequest, CreateNotifyConfigurationResult } from "../models/models_0";
import { CreateNotifyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotifyConfigurationCommand}.
 */
export interface CreateNotifyConfigurationCommandInput extends CreateNotifyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotifyConfigurationCommand}.
 */
export interface CreateNotifyConfigurationCommandOutput extends CreateNotifyConfigurationResult, __MetadataBearer {}

/**
 * <p>Creates a new notify configuration for managed messaging. A notify configuration defines the settings for sending templated messages, including the display name, use case, enabled channels, and enabled countries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateNotifyConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateNotifyConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreateNotifyConfigurationRequest
 *   DisplayName: "STRING_VALUE", // required
 *   UseCase: "STRING_VALUE", // required
 *   DefaultTemplateId: "STRING_VALUE",
 *   PoolId: "STRING_VALUE",
 *   EnabledCountries: [ // IsoCountryCodeList
 *     "STRING_VALUE",
 *   ],
 *   EnabledChannels: [ // NotifyEnabledChannelsList // required
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtectionEnabled: true || false,
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateNotifyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotifyConfigurationResult
 * //   NotifyConfigurationArn: "STRING_VALUE", // required
 * //   NotifyConfigurationId: "STRING_VALUE", // required
 * //   DisplayName: "STRING_VALUE", // required
 * //   UseCase: "STRING_VALUE", // required
 * //   DefaultTemplateId: "STRING_VALUE",
 * //   PoolId: "STRING_VALUE",
 * //   EnabledCountries: [ // IsoCountryCodeList
 * //     "STRING_VALUE",
 * //   ],
 * //   EnabledChannels: [ // NotifyEnabledChannelsList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   Tier: "STRING_VALUE", // required
 * //   TierUpgradeStatus: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * //   RejectionReason: "STRING_VALUE",
 * //   DeletionProtectionEnabled: true || false, // required
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateNotifyConfigurationCommandInput - {@link CreateNotifyConfigurationCommandInput}
 * @returns {@link CreateNotifyConfigurationCommandOutput}
 * @see {@link CreateNotifyConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateNotifyConfigurationCommandOutput} for command's `response` shape.
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
 * @example CreateNotifyConfiguration
 * ```javascript
 * // Create a notify configuration for OTP code verification over SMS.
 * const input = {
 *   DeletionProtectionEnabled: false,
 *   DisplayName: "MyOTPConfig",
 *   EnabledChannels: [
 *     "SMS"
 *   ],
 *   EnabledCountries: [
 *     "US",
 *     "CA"
 *   ],
 *   Tags: [
 *     {
 *       Key: "Environment",
 *       Value: "Production"
 *     }
 *   ],
 *   UseCase: "CODE_VERIFICATION"
 * };
 * const command = new CreateNotifyConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreatedTimestamp: 1704067200,
 *   DeletionProtectionEnabled: false,
 *   DisplayName: "MyOTPConfig",
 *   EnabledChannels: [
 *     "SMS"
 *   ],
 *   EnabledCountries: [
 *     "US",
 *     "CA"
 *   ],
 *   NotifyConfigurationArn: "arn:aws:sms-voice:us-east-1:111122223333:notify-configuration/nc-1234567890abcdef0",
 *   NotifyConfigurationId: "nc-1234567890abcdef0",
 *   Status: "ACTIVE",
 *   Tags: [
 *     {
 *       Key: "Environment",
 *       Value: "Production"
 *     }
 *   ],
 *   Tier: "BASIC",
 *   TierUpgradeStatus: "BASIC",
 *   UseCase: "CODE_VERIFICATION"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateNotifyConfigurationCommand extends command<CreateNotifyConfigurationCommandInput, CreateNotifyConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotifyConfiguration",
  CreateNotifyConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotifyConfigurationRequest;
      output: CreateNotifyConfigurationResult;
    };
    sdk: {
      input: CreateNotifyConfigurationCommandInput;
      output: CreateNotifyConfigurationCommandOutput;
    };
  };
}
