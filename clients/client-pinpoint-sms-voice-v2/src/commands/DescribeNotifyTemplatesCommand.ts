// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeNotifyTemplatesRequest, DescribeNotifyTemplatesResult } from "../models/models_0";
import { DescribeNotifyTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeNotifyTemplatesCommand}.
 */
export interface DescribeNotifyTemplatesCommandInput extends DescribeNotifyTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNotifyTemplatesCommand}.
 */
export interface DescribeNotifyTemplatesCommandOutput extends DescribeNotifyTemplatesResult, __MetadataBearer {}

/**
 * <p>Describes the specified notify templates or all notify templates in your account.</p> <p>If you specify template IDs, the output includes information for only the specified notify templates. If you specify filters, the output includes information for only those notify templates that meet the filter criteria. If you don't specify template IDs or filters, the output includes information for all notify templates.</p> <p>If you specify a template ID that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeNotifyTemplatesCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeNotifyTemplatesCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeNotifyTemplatesRequest
 *   TemplateIds: [ // NotifyTemplateIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // NotifyTemplateFilterList
 *     { // NotifyTemplateFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeNotifyTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotifyTemplatesResult
 * //   NotifyTemplates: [ // NotifyTemplateInformationList
 * //     { // NotifyTemplateInformation
 * //       TemplateId: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       TemplateType: "STRING_VALUE", // required
 * //       Channels: [ // NumberCapabilityList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       TierAccess: [ // NotifyConfigurationTierList
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       SupportedCountries: [ // IsoCountryCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //       LanguageCode: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       Variables: { // TemplateVariablesMap
 * //         "<keys>": { // TemplateVariableMetadata
 * //           Type: "STRING_VALUE", // required
 * //           Required: true || false, // required
 * //           Description: "STRING_VALUE",
 * //           MaxLength: Number("int"),
 * //           MinValue: Number("int"),
 * //           MaxValue: Number("int"),
 * //           DefaultValue: "STRING_VALUE",
 * //           Pattern: "STRING_VALUE",
 * //           Sample: "STRING_VALUE",
 * //           Source: "STRING_VALUE",
 * //         },
 * //       },
 * //       SupportedVoiceIds: [ // VoiceIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNotifyTemplatesCommandInput - {@link DescribeNotifyTemplatesCommandInput}
 * @returns {@link DescribeNotifyTemplatesCommandOutput}
 * @see {@link DescribeNotifyTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeNotifyTemplatesCommandOutput} for command's `response` shape.
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
 * @example DescribeNotifyTemplates
 * ```javascript
 * // Describe available notify templates for OTP verification over SMS.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "template-type",
 *       Values: [
 *         "OTP_VERIFICATION"
 *       ]
 *     },
 *     {
 *       Name: "channels",
 *       Values: [
 *         "SMS"
 *       ]
 *     }
 *   ],
 *   MaxResults: 10
 * };
 * const command = new DescribeNotifyTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NotifyTemplates: [
 *     {
 *       Channels: [
 *         "SMS"
 *       ],
 *       Content: "Your verification code is {{code}}. It expires in {{expiry}} minutes.",
 *       CreatedTimestamp: 1704067200,
 *       LanguageCode: "en",
 *       Status: "ACTIVE",
 *       SupportedCountries: [
 *         "US",
 *         "CA",
 *         "GB"
 *       ],
 *       TemplateId: "nt-1234567890abcdef0",
 *       TemplateType: "OTP_VERIFICATION",
 *       TierAccess: [
 *         "BASIC",
 *         "ADVANCED"
 *       ],
 *       Variables: {
 *         code: {
 *           Description: "The verification code",
 *           MaxLength: 10,
 *           Required: true,
 *           Sample: "123456",
 *           Source: "CUSTOMER",
 *           Type: "STRING"
 *         },
 *         expiry: {
 *           DefaultValue: "10",
 *           Description: "Expiry time in minutes",
 *           MaxValue: 60,
 *           MinValue: 1,
 *           Required: false,
 *           Sample: "10",
 *           Source: "CUSTOMER",
 *           Type: "INTEGER"
 *         }
 *       },
 *       Version: 1
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeNotifyTemplatesCommand extends command<DescribeNotifyTemplatesCommandInput, DescribeNotifyTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeNotifyTemplates",
  DescribeNotifyTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotifyTemplatesRequest;
      output: DescribeNotifyTemplatesResult;
    };
    sdk: {
      input: DescribeNotifyTemplatesCommandInput;
      output: DescribeNotifyTemplatesCommandOutput;
    };
  };
}
