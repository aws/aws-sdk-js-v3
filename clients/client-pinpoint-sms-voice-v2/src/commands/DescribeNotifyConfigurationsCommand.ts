// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeNotifyConfigurationsRequest, DescribeNotifyConfigurationsResult } from "../models/models_0";
import { DescribeNotifyConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeNotifyConfigurationsCommand}.
 */
export interface DescribeNotifyConfigurationsCommandInput extends DescribeNotifyConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNotifyConfigurationsCommand}.
 */
export interface DescribeNotifyConfigurationsCommandOutput extends DescribeNotifyConfigurationsResult, __MetadataBearer {}

/**
 * <p>Describes the specified notify configurations or all notify configurations in your account.</p> <p>If you specify notify configuration IDs, the output includes information for only the specified notify configurations. If you specify filters, the output includes information for only those notify configurations that meet the filter criteria. If you don't specify notify configuration IDs or filters, the output includes information for all notify configurations.</p> <p>If you specify a notify configuration ID that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeNotifyConfigurationsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeNotifyConfigurationsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeNotifyConfigurationsRequest
 *   NotifyConfigurationIds: [ // NotifyConfigurationIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // NotifyConfigurationFilterList
 *     { // NotifyConfigurationFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeNotifyConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotifyConfigurationsResult
 * //   NotifyConfigurations: [ // NotifyConfigurationInformationList
 * //     { // NotifyConfigurationInformation
 * //       NotifyConfigurationArn: "STRING_VALUE", // required
 * //       NotifyConfigurationId: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE", // required
 * //       UseCase: "STRING_VALUE", // required
 * //       DefaultTemplateId: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       EnabledCountries: [ // IsoCountryCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //       EnabledChannels: [ // NotifyEnabledChannelsList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Tier: "STRING_VALUE", // required
 * //       TierUpgradeStatus: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       RejectionReason: "STRING_VALUE",
 * //       DeletionProtectionEnabled: true || false, // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNotifyConfigurationsCommandInput - {@link DescribeNotifyConfigurationsCommandInput}
 * @returns {@link DescribeNotifyConfigurationsCommandOutput}
 * @see {@link DescribeNotifyConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotifyConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
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
 * @example DescribeNotifyConfigurations
 * ```javascript
 * // Describe notify configurations filtered by status.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "status",
 *       Values: [
 *         "ACTIVE"
 *       ]
 *     }
 *   ],
 *   MaxResults: 10
 * };
 * const command = new DescribeNotifyConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NotifyConfigurations: [
 *     {
 *       CreatedTimestamp: 1704067200,
 *       DeletionProtectionEnabled: false,
 *       DisplayName: "MyOTPConfig",
 *       EnabledChannels: [
 *         "SMS"
 *       ],
 *       EnabledCountries: [
 *         "US",
 *         "CA"
 *       ],
 *       NotifyConfigurationArn: "arn:aws:sms-voice:us-east-1:111122223333:notify-configuration/nc-1234567890abcdef0",
 *       NotifyConfigurationId: "nc-1234567890abcdef0",
 *       Status: "ACTIVE",
 *       Tier: "BASIC",
 *       TierUpgradeStatus: "BASIC",
 *       UseCase: "CODE_VERIFICATION"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeNotifyConfigurationsCommand extends command<DescribeNotifyConfigurationsCommandInput, DescribeNotifyConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeNotifyConfigurations",
  DescribeNotifyConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotifyConfigurationsRequest;
      output: DescribeNotifyConfigurationsResult;
    };
    sdk: {
      input: DescribeNotifyConfigurationsCommandInput;
      output: DescribeNotifyConfigurationsCommandOutput;
    };
  };
}
