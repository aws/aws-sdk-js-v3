// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAddressRequest, CreateAddressResult } from "../models/models_0";
import { CreateAddress } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAddressCommand}.
 */
export interface CreateAddressCommandInput extends CreateAddressRequest {}
/**
 * @public
 *
 * The output of {@link CreateAddressCommand}.
 */
export interface CreateAddressCommandOutput extends CreateAddressResult, __MetadataBearer {}

/**
 * <p>Creates an address for a Snow device to be shipped to. In most regions,
 *       addresses are validated at the time of creation. The address you provide must be located
 *       within the serviceable area of your region. If the address is invalid or unsupported, then an
 *       exception is thrown. If providing an address as a JSON file through the <code>cli-input-json</code> option, include the full file path. For example, <code>--cli-input-json file://create-address.json</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateAddressCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateAddressCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // CreateAddressRequest
 *   Address: { // Address
 *     AddressId: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *     Company: "STRING_VALUE",
 *     Street1: "STRING_VALUE",
 *     Street2: "STRING_VALUE",
 *     Street3: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     StateOrProvince: "STRING_VALUE",
 *     PrefectureOrDistrict: "STRING_VALUE",
 *     Landmark: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     IsRestricted: true || false,
 *     Type: "CUST_PICKUP" || "AWS_SHIP",
 *   },
 * };
 * const command = new CreateAddressCommand(input);
 * const response = await client.send(command);
 * // { // CreateAddressResult
 * //   AddressId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAddressCommandInput - {@link CreateAddressCommandInput}
 * @returns {@link CreateAddressCommandOutput}
 * @see {@link CreateAddressCommandInput} for command's `input` shape.
 * @see {@link CreateAddressCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidAddressException} (client fault)
 *  <p>The address provided was invalid. Check the address with your region's carrier, and try
 *       again.</p>
 *
 * @throws {@link UnsupportedAddressException} (client fault)
 *  <p>The address is either outside the serviceable area for your region, or an error
 *       occurred. Check the address with your region's carrier and try again. If the issue persists,
 *       contact Amazon Web Services Support.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @example To create an address for a job
 * ```javascript
 * // This operation creates an address for a job. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
 * const input = {
 *   Address: {
 *     City: "Seattle",
 *     Company: "My Company's Name",
 *     Country: "USA",
 *     Name: "My Name",
 *     PhoneNumber: "425-555-5555",
 *     PostalCode: "98101",
 *     StateOrProvince: "WA",
 *     Street1: "123 Main Street"
 *   }
 * };
 * const command = new CreateAddressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AddressId: "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAddressCommand extends $Command
  .classBuilder<
    CreateAddressCommandInput,
    CreateAddressCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "CreateAddress", {})
  .n("SnowballClient", "CreateAddressCommand")
  .sc(CreateAddress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAddressRequest;
      output: CreateAddressResult;
    };
    sdk: {
      input: CreateAddressCommandInput;
      output: CreateAddressCommandOutput;
    };
  };
}
