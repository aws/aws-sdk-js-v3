// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ValidateE911AddressRequest, ValidateE911AddressResponse } from "../models/models_0";
import { ValidateE911Address$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidateE911AddressCommand}.
 */
export interface ValidateE911AddressCommandInput extends ValidateE911AddressRequest {}
/**
 * @public
 *
 * The output of {@link ValidateE911AddressCommand}.
 */
export interface ValidateE911AddressCommandOutput extends ValidateE911AddressResponse, __MetadataBearer {}

/**
 * <p>Validates an address to be used for 911 calls made with Amazon Chime SDK Voice
 *          Connectors. You can use validated addresses in a Presence Information Data Format
 *          Location Object file that you include in SIP requests. That helps ensure that addresses
 *          are routed to the appropriate Public Safety Answering Point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ValidateE911AddressCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ValidateE911AddressCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ValidateE911AddressRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   StreetNumber: "STRING_VALUE", // required
 *   StreetInfo: "STRING_VALUE", // required
 *   City: "STRING_VALUE", // required
 *   State: "STRING_VALUE", // required
 *   Country: "STRING_VALUE", // required
 *   PostalCode: "STRING_VALUE", // required
 * };
 * const command = new ValidateE911AddressCommand(input);
 * const response = await client.send(command);
 * // { // ValidateE911AddressResponse
 * //   ValidationResult: Number("int"),
 * //   AddressExternalId: "STRING_VALUE",
 * //   Address: { // Address
 * //     streetName: "STRING_VALUE",
 * //     streetSuffix: "STRING_VALUE",
 * //     postDirectional: "STRING_VALUE",
 * //     preDirectional: "STRING_VALUE",
 * //     streetNumber: "STRING_VALUE",
 * //     city: "STRING_VALUE",
 * //     state: "STRING_VALUE",
 * //     postalCode: "STRING_VALUE",
 * //     postalCodePlus4: "STRING_VALUE",
 * //     country: "STRING_VALUE",
 * //   },
 * //   CandidateAddressList: [ // CandidateAddressList
 * //     { // CandidateAddress
 * //       streetInfo: "STRING_VALUE",
 * //       streetNumber: "STRING_VALUE",
 * //       city: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       postalCode: "STRING_VALUE",
 * //       postalCodePlus4: "STRING_VALUE",
 * //       country: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateE911AddressCommandInput - {@link ValidateE911AddressCommandInput}
 * @returns {@link ValidateE911AddressCommandOutput}
 * @see {@link ValidateE911AddressCommandInput} for command's `input` shape.
 * @see {@link ValidateE911AddressCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class ValidateE911AddressCommand extends $Command
  .classBuilder<
    ValidateE911AddressCommandInput,
    ValidateE911AddressCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "ValidateE911Address", {})
  .n("ChimeSDKVoiceClient", "ValidateE911AddressCommand")
  .sc(ValidateE911Address$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateE911AddressRequest;
      output: ValidateE911AddressResponse;
    };
    sdk: {
      input: ValidateE911AddressCommandInput;
      output: ValidateE911AddressCommandOutput;
    };
  };
}
