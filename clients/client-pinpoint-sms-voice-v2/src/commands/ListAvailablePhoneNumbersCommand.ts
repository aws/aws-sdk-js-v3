// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAvailablePhoneNumbersRequest, ListAvailablePhoneNumbersResult } from "../models/models_0";
import { ListAvailablePhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAvailablePhoneNumbersCommand}.
 */
export interface ListAvailablePhoneNumbersCommandInput extends ListAvailablePhoneNumbersRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailablePhoneNumbersCommand}.
 */
export interface ListAvailablePhoneNumbersCommandOutput extends ListAvailablePhoneNumbersResult, __MetadataBearer {}

/**
 * Search available phone numbers from aggregator inventory, optionally filtered by pattern.
 * If NumberPreference is omitted, returns unfiltered available numbers.
 * Returns empty list (not an exception) when no numbers match.
 * ResourceNotFoundException is thrown only for invalid RegistrationId (campaign not found).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListAvailablePhoneNumbersCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListAvailablePhoneNumbersCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // ListAvailablePhoneNumbersRequest
 *   IsoCountryCode: "STRING_VALUE", // required
 *   NumberCapabilities: [ // NumberCapabilityList // required
 *     "STRING_VALUE",
 *   ],
 *   NumberType: "STRING_VALUE", // required
 *   RegistrationId: "STRING_VALUE",
 *   NumberPreference: [ // NumberPreferenceList
 *     { // NumberPreferenceItem
 *       PreferenceType: [ // PreferenceTypeList // required
 *         "STRING_VALUE",
 *       ],
 *       Filter: [ // NumberFilterList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailablePhoneNumbersResult
 * //   AvailablePhoneNumbers: [ // AvailablePhoneNumberList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailablePhoneNumbersCommandInput - {@link ListAvailablePhoneNumbersCommandInput}
 * @returns {@link ListAvailablePhoneNumbersCommandOutput}
 * @see {@link ListAvailablePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link ListAvailablePhoneNumbersCommandOutput} for command's `response` shape.
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
 * @example ListAvailablePhoneNumbers
 * ```javascript
 * // Search for available TEN_DLC phone numbers in the US that start with a specific area code.
 * const input = {
 *   IsoCountryCode: "US",
 *   MaxResults: 10,
 *   NumberCapabilities: [
 *     "SMS"
 *   ],
 *   NumberPreference: [
 *     {
 *       Filter: [
 *         "+1206"
 *       ],
 *       PreferenceType: [
 *         "StartsWith"
 *       ]
 *     }
 *   ],
 *   NumberType: "TEN_DLC",
 *   RegistrationId: "reg-1234567890abcdef0"
 * };
 * const command = new ListAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AvailablePhoneNumbers: [
 *     "+12065550100",
 *     "+12065550142",
 *     "+12065550187"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAvailablePhoneNumbersCommand extends command<ListAvailablePhoneNumbersCommandInput, ListAvailablePhoneNumbersCommandOutput>(
  _ep0,
  _mw0,
  "ListAvailablePhoneNumbers",
  ListAvailablePhoneNumbers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailablePhoneNumbersRequest;
      output: ListAvailablePhoneNumbersResult;
    };
    sdk: {
      input: ListAvailablePhoneNumbersCommandInput;
      output: ListAvailablePhoneNumbersCommandOutput;
    };
  };
}
