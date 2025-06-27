// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAddressRequest, DescribeAddressResult } from "../models/models_0";
import { de_DescribeAddressCommand, se_DescribeAddressCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddressCommand}.
 */
export interface DescribeAddressCommandInput extends DescribeAddressRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddressCommand}.
 */
export interface DescribeAddressCommandOutput extends DescribeAddressResult, __MetadataBearer {}

/**
 * <p>Takes an <code>AddressId</code> and returns specific details about that address in the
 *       form of an <code>Address</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeAddressCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeAddressCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // DescribeAddressRequest
 *   AddressId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAddressCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddressResult
 * //   Address: { // Address
 * //     AddressId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Company: "STRING_VALUE",
 * //     Street1: "STRING_VALUE",
 * //     Street2: "STRING_VALUE",
 * //     Street3: "STRING_VALUE",
 * //     City: "STRING_VALUE",
 * //     StateOrProvince: "STRING_VALUE",
 * //     PrefectureOrDistrict: "STRING_VALUE",
 * //     Landmark: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     PostalCode: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     IsRestricted: true || false,
 * //     Type: "CUST_PICKUP" || "AWS_SHIP",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAddressCommandInput - {@link DescribeAddressCommandInput}
 * @returns {@link DescribeAddressCommandOutput}
 * @see {@link DescribeAddressCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @example To describe an address for a job
 * ```javascript
 * // This operation describes an address for a job.
 * const input = {
 *   AddressId: "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b"
 * };
 * const command = new DescribeAddressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Address: {
 *     AddressId: "ADID5643ec50-3eec-4eb3-9be6-9374c10eb51b",
 *     City: "Seattle",
 *     Company: "My Company",
 *     Country: "US",
 *     Name: "My Name",
 *     PhoneNumber: "425-555-5555",
 *     PostalCode: "98101",
 *     StateOrProvince: "WA",
 *     Street1: "123 Main Street"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAddressCommand extends $Command
  .classBuilder<
    DescribeAddressCommandInput,
    DescribeAddressCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "DescribeAddress", {})
  .n("SnowballClient", "DescribeAddressCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAddressCommand)
  .de(de_DescribeAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAddressRequest;
      output: DescribeAddressResult;
    };
    sdk: {
      input: DescribeAddressCommandInput;
      output: DescribeAddressCommandOutput;
    };
  };
}
