// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ValidateE911AddressRequest,
  ValidateE911AddressRequestFilterSensitiveLog,
  ValidateE911AddressResponse,
  ValidateE911AddressResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ValidateE911AddressCommand, se_ValidateE911AddressCommand } from "../protocols/Aws_restJson1";

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
 * <p>Validates an address to be used for 911 calls made with Amazon
 *             Chime Voice Connectors. You can use validated addresses
 *             in a Presence Information Data Format Location Object file that you include in SIP requests.
 *             That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ValidateE911Address.html">ValidateE911Address</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by ValidateE911Address in the Amazon Chime SDK Voice Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ValidateE911AddressCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ValidateE911AddressCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class ValidateE911AddressCommand extends $Command
  .classBuilder<
    ValidateE911AddressCommandInput,
    ValidateE911AddressCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "ValidateE911Address", {})
  .n("ChimeClient", "ValidateE911AddressCommand")
  .f(ValidateE911AddressRequestFilterSensitiveLog, ValidateE911AddressResponseFilterSensitiveLog)
  .ser(se_ValidateE911AddressCommand)
  .de(de_ValidateE911AddressCommand)
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
