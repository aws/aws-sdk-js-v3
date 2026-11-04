// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePhoneNumbersRequest, DescribePhoneNumbersResult } from "../models/models_0";
import { DescribePhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the specified origination phone number, or all the phone numbers in your account.
 *
 * If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.
 *
 * If you specify a phone number ID that isn't valid, an error is returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribePhoneNumbersCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribePhoneNumbersCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
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
 * //       MessagingLimits: { // MessagingLimits
 * //         RateLimits: { // LongMap
 * //           "<keys>": Number("long"),
 * //         },
 * //         DailyMessageCaps: {
 * //           "<keys>": Number("long"),
 * //         },
 * //       },
 * //       PricingTier: "STRING_VALUE",
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
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation exception for a field.
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 *
 * Base exception class for all service exceptions from PinpointSMSVoiceV2 service.
 *
 * @public
 */
export class DescribePhoneNumbersCommand extends command<DescribePhoneNumbersCommandInput, DescribePhoneNumbersCommandOutput>(
  _ep0,
  _mw0,
  "DescribePhoneNumbers",
  DescribePhoneNumbers$
) {
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
