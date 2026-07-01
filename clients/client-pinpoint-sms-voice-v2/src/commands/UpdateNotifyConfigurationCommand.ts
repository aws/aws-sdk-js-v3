// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNotifyConfigurationRequest, UpdateNotifyConfigurationResult } from "../models/models_0";
import { UpdateNotifyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateNotifyConfigurationCommand}.
 */
export interface UpdateNotifyConfigurationCommandInput extends UpdateNotifyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotifyConfigurationCommand}.
 */
export interface UpdateNotifyConfigurationCommandOutput extends UpdateNotifyConfigurationResult, __MetadataBearer {}

/**
 * <p>Updates an existing notify configuration. You can update the default template, pool association, enabled channels, enabled countries, and deletion protection settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdateNotifyConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdateNotifyConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdateNotifyConfigurationRequest
 *   NotifyConfigurationId: "STRING_VALUE", // required
 *   DefaultTemplateId: "STRING_VALUE",
 *   PoolId: "STRING_VALUE",
 *   EnabledCountries: [ // IsoCountryCodeList
 *     "STRING_VALUE",
 *   ],
 *   EnabledChannels: [ // NotifyEnabledChannelsList
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtectionEnabled: true || false,
 * };
 * const command = new UpdateNotifyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNotifyConfigurationResult
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
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateNotifyConfigurationCommandInput - {@link UpdateNotifyConfigurationCommandInput}
 * @returns {@link UpdateNotifyConfigurationCommandOutput}
 * @see {@link UpdateNotifyConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateNotifyConfigurationCommandOutput} for command's `response` shape.
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
 * @example UpdateNotifyConfiguration
 * ```javascript
 * // Update a notify configuration to add voice channel and additional countries.
 * const input = {
 *   DeletionProtectionEnabled: true,
 *   EnabledChannels: [
 *     "SMS",
 *     "VOICE"
 *   ],
 *   EnabledCountries: [
 *     "US",
 *     "CA",
 *     "GB"
 *   ],
 *   NotifyConfigurationId: "nc-1234567890abcdef0"
 * };
 * const command = new UpdateNotifyConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreatedTimestamp: 1704067200,
 *   DeletionProtectionEnabled: true,
 *   DisplayName: "MyOTPConfig",
 *   EnabledChannels: [
 *     "SMS",
 *     "VOICE"
 *   ],
 *   EnabledCountries: [
 *     "US",
 *     "CA",
 *     "GB"
 *   ],
 *   NotifyConfigurationArn: "arn:aws:sms-voice:us-east-1:111122223333:notify-configuration/nc-1234567890abcdef0",
 *   NotifyConfigurationId: "nc-1234567890abcdef0",
 *   Status: "ACTIVE",
 *   Tier: "BASIC",
 *   TierUpgradeStatus: "BASIC",
 *   UseCase: "CODE_VERIFICATION"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateNotifyConfigurationCommand extends command<UpdateNotifyConfigurationCommandInput, UpdateNotifyConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNotifyConfiguration",
  UpdateNotifyConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotifyConfigurationRequest;
      output: UpdateNotifyConfigurationResult;
    };
    sdk: {
      input: UpdateNotifyConfigurationCommandInput;
      output: UpdateNotifyConfigurationCommandOutput;
    };
  };
}
