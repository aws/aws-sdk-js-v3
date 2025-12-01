// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PhoneNumberValidateRequest, PhoneNumberValidateResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { PhoneNumberValidate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PhoneNumberValidateCommand}.
 */
export interface PhoneNumberValidateCommandInput extends PhoneNumberValidateRequest {}
/**
 * @public
 *
 * The output of {@link PhoneNumberValidateCommand}.
 */
export interface PhoneNumberValidateCommandOutput extends PhoneNumberValidateResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PhoneNumberValidateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PhoneNumberValidateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // PhoneNumberValidateRequest
 *   NumberValidateRequest: { // NumberValidateRequest
 *     IsoCountryCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *   },
 * };
 * const command = new PhoneNumberValidateCommand(input);
 * const response = await client.send(command);
 * // { // PhoneNumberValidateResponse
 * //   NumberValidateResponse: { // NumberValidateResponse
 * //     Carrier: "STRING_VALUE",
 * //     City: "STRING_VALUE",
 * //     CleansedPhoneNumberE164: "STRING_VALUE",
 * //     CleansedPhoneNumberNational: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     CountryCodeIso2: "STRING_VALUE",
 * //     CountryCodeNumeric: "STRING_VALUE",
 * //     County: "STRING_VALUE",
 * //     OriginalCountryCodeIso2: "STRING_VALUE",
 * //     OriginalPhoneNumber: "STRING_VALUE",
 * //     PhoneType: "STRING_VALUE",
 * //     PhoneTypeCode: Number("int"),
 * //     Timezone: "STRING_VALUE",
 * //     ZipCode: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PhoneNumberValidateCommandInput - {@link PhoneNumberValidateCommandInput}
 * @returns {@link PhoneNumberValidateCommandOutput}
 * @see {@link PhoneNumberValidateCommandInput} for command's `input` shape.
 * @see {@link PhoneNumberValidateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class PhoneNumberValidateCommand extends $Command
  .classBuilder<
    PhoneNumberValidateCommandInput,
    PhoneNumberValidateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "PhoneNumberValidate", {})
  .n("PinpointClient", "PhoneNumberValidateCommand")
  .sc(PhoneNumberValidate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PhoneNumberValidateRequest;
      output: PhoneNumberValidateResponse;
    };
    sdk: {
      input: PhoneNumberValidateCommandInput;
      output: PhoneNumberValidateCommandOutput;
    };
  };
}
