// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePhoneNumbersRequest, DescribePhoneNumbersResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribePhoneNumbersCommand, se_DescribePhoneNumbersCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePhoneNumbersCommand}.
 */
export interface DescribePhoneNumbersCommandInput extends DescribePhoneNumbersRequest {}
/**
 * @public
 *
 * The output of {@link DescribePhoneNumbersCommand}.
 */
export interface DescribePhoneNumbersCommandOutput extends DescribePhoneNumbersResult, __MetadataBearer {}

/**
 * <p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribePhoneNumbersCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribePhoneNumbersCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribePhoneNumbersRequest
 *   PhoneNumberIds: [ // PhoneNumberIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // PhoneNumberFilterList
 *     { // PhoneNumberFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Owner: "STRING_VALUE",
 * };
 * const command = new DescribePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // DescribePhoneNumbersResult
 * //   PhoneNumbers: [ // PhoneNumberInformationList
 * //     { // PhoneNumberInformation
 * //       PhoneNumberArn: "STRING_VALUE", // required
 * //       PhoneNumberId: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       IsoCountryCode: "STRING_VALUE", // required
 * //       MessageType: "STRING_VALUE", // required
 * //       NumberCapabilities: [ // NumberCapabilityList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       NumberType: "STRING_VALUE", // required
 * //       MonthlyLeasingPrice: "STRING_VALUE", // required
 * //       TwoWayEnabled: true || false, // required
 * //       TwoWayChannelArn: "STRING_VALUE",
 * //       TwoWayChannelRole: "STRING_VALUE",
 * //       SelfManagedOptOutsEnabled: true || false, // required
 * //       OptOutListName: "STRING_VALUE", // required
 * //       InternationalSendingEnabled: true || false,
 * //       DeletionProtectionEnabled: true || false, // required
 * //       PoolId: "STRING_VALUE",
 * //       RegistrationId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePhoneNumbersCommandInput - {@link DescribePhoneNumbersCommandInput}
 * @returns {@link DescribePhoneNumbersCommandOutput}
 * @see {@link DescribePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link DescribePhoneNumbersCommandOutput} for command's `response` shape.
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
export class DescribePhoneNumbersCommand extends $Command
  .classBuilder<
    DescribePhoneNumbersCommandInput,
    DescribePhoneNumbersCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "DescribePhoneNumbers", {})
  .n("PinpointSMSVoiceV2Client", "DescribePhoneNumbersCommand")
  .f(void 0, void 0)
  .ser(se_DescribePhoneNumbersCommand)
  .de(de_DescribePhoneNumbersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePhoneNumbersRequest;
      output: DescribePhoneNumbersResult;
    };
    sdk: {
      input: DescribePhoneNumbersCommandInput;
      output: DescribePhoneNumbersCommandOutput;
    };
  };
}
