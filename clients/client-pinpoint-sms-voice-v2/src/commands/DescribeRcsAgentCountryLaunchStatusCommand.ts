// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeRcsAgentCountryLaunchStatusRequest,
  DescribeRcsAgentCountryLaunchStatusResult,
} from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeRcsAgentCountryLaunchStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRcsAgentCountryLaunchStatusCommand}.
 */
export interface DescribeRcsAgentCountryLaunchStatusCommandInput extends DescribeRcsAgentCountryLaunchStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRcsAgentCountryLaunchStatusCommand}.
 */
export interface DescribeRcsAgentCountryLaunchStatusCommandOutput extends DescribeRcsAgentCountryLaunchStatusResult, __MetadataBearer {}

/**
 * <p>Retrieves the per-country launch status of an RCS agent, including carrier-level details for each country.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRcsAgentCountryLaunchStatusCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRcsAgentCountryLaunchStatusCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRcsAgentCountryLaunchStatusRequest
 *   RcsAgentId: "STRING_VALUE", // required
 *   IsoCountryCodes: [ // IsoCountryCodeList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // CountryLaunchStatusFilterList
 *     { // CountryLaunchStatusFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRcsAgentCountryLaunchStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRcsAgentCountryLaunchStatusResult
 * //   RcsAgentId: "STRING_VALUE", // required
 * //   RcsAgentArn: "STRING_VALUE", // required
 * //   CountryLaunchStatus: [ // CountryLaunchStatusInformationList
 * //     { // CountryLaunchStatusInformation
 * //       IsoCountryCode: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       RcsPlatformId: "STRING_VALUE",
 * //       RegistrationId: "STRING_VALUE", // required
 * //       CarrierStatus: [ // CarrierStatusInformationList // required
 * //         { // CarrierStatusInformation
 * //           CarrierName: "STRING_VALUE", // required
 * //           Status: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRcsAgentCountryLaunchStatusCommandInput - {@link DescribeRcsAgentCountryLaunchStatusCommandInput}
 * @returns {@link DescribeRcsAgentCountryLaunchStatusCommandOutput}
 * @see {@link DescribeRcsAgentCountryLaunchStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeRcsAgentCountryLaunchStatusCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeRcsAgentCountryLaunchStatusCommand extends $Command
  .classBuilder<
    DescribeRcsAgentCountryLaunchStatusCommandInput,
    DescribeRcsAgentCountryLaunchStatusCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeRcsAgentCountryLaunchStatus", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRcsAgentCountryLaunchStatusCommand")
  .sc(DescribeRcsAgentCountryLaunchStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRcsAgentCountryLaunchStatusRequest;
      output: DescribeRcsAgentCountryLaunchStatusResult;
    };
    sdk: {
      input: DescribeRcsAgentCountryLaunchStatusCommandInput;
      output: DescribeRcsAgentCountryLaunchStatusCommandOutput;
    };
  };
}
