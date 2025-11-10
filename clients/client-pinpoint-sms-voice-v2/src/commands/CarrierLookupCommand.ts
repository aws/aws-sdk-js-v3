// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CarrierLookupRequest, CarrierLookupResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { CarrierLookup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CarrierLookupCommand}.
 */
export interface CarrierLookupCommandInput extends CarrierLookupRequest {}
/**
 * @public
 *
 * The output of {@link CarrierLookupCommand}.
 */
export interface CarrierLookupCommandOutput extends CarrierLookupResult, __MetadataBearer {}

/**
 * <p>Returns information about a destination phone number, including whether the number type and whether it is valid, the carrier, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CarrierLookupCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CarrierLookupCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CarrierLookupRequest
 *   PhoneNumber: "STRING_VALUE", // required
 * };
 * const command = new CarrierLookupCommand(input);
 * const response = await client.send(command);
 * // { // CarrierLookupResult
 * //   E164PhoneNumber: "STRING_VALUE", // required
 * //   DialingCountryCode: "STRING_VALUE",
 * //   IsoCountryCode: "STRING_VALUE",
 * //   Country: "STRING_VALUE",
 * //   MCC: "STRING_VALUE",
 * //   MNC: "STRING_VALUE",
 * //   Carrier: "STRING_VALUE",
 * //   PhoneNumberType: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CarrierLookupCommandInput - {@link CarrierLookupCommandInput}
 * @returns {@link CarrierLookupCommandOutput}
 * @see {@link CarrierLookupCommandInput} for command's `input` shape.
 * @see {@link CarrierLookupCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
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
 * @example Use CarrierLookup
 * ```javascript
 * // Call the CarrierLookup operation to get information about a customer provided phone number, including if the number is valid. The service accepts phone numbers with various formatting characters and returns the number in E164 format.
 * const input = {
 *   PhoneNumber: "+1 (555) 555-5333"
 * };
 * const command = new CarrierLookupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Carrier: "ExampleCorp Mobile",
 *   Country: "United States",
 *   DialingCountryCode: "1",
 *   E164PhoneNumber: "+15555555333",
 *   IsoCountryCode: "US",
 *   MCC: "310",
 *   MNC: "260",
 *   PhoneNumberType: "MOBILE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CarrierLookupCommand extends $Command
  .classBuilder<
    CarrierLookupCommandInput,
    CarrierLookupCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "CarrierLookup", {})
  .n("PinpointSMSVoiceV2Client", "CarrierLookupCommand")
  .sc(CarrierLookup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CarrierLookupRequest;
      output: CarrierLookupResult;
    };
    sdk: {
      input: CarrierLookupCommandInput;
      output: CarrierLookupCommandOutput;
    };
  };
}
