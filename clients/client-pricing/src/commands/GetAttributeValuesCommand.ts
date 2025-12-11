// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAttributeValuesRequest, GetAttributeValuesResponse } from "../models/models_0";
import type { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetAttributeValues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAttributeValuesCommand}.
 */
export interface GetAttributeValuesCommandInput extends GetAttributeValuesRequest {}
/**
 * @public
 *
 * The output of {@link GetAttributeValuesCommand}.
 */
export interface GetAttributeValuesCommandOutput extends GetAttributeValuesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of attribute values. Attributes are similar to the details
 *           in a Price List API offer file. For a list of available attributes, see
 *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a>
 *          in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetAttributeValuesCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetAttributeValuesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * // import type { PricingClientConfig } from "@aws-sdk/client-pricing";
 * const config = {}; // type is PricingClientConfig
 * const client = new PricingClient(config);
 * const input = { // GetAttributeValuesRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetAttributeValuesCommand(input);
 * const response = await client.send(command);
 * // { // GetAttributeValuesResponse
 * //   AttributeValues: [ // AttributeValueList
 * //     { // AttributeValue
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAttributeValuesCommandInput - {@link GetAttributeValuesCommandInput}
 * @returns {@link GetAttributeValuesCommandOutput}
 * @see {@link GetAttributeValuesCommandInput} for command's `input` shape.
 * @see {@link GetAttributeValuesCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token expired. Try again without a pagination token.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters had an invalid value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You've made too many requests exceeding service quotas.
 *       </p>
 *
 * @throws {@link PricingServiceException}
 * <p>Base exception class for all service exceptions from Pricing service.</p>
 *
 *
 * @example To retrieve a list of attribute values
 * ```javascript
 * // This operation returns a list of values available for the given attribute.
 * const input = {
 *   AttributeName: "volumeType",
 *   MaxResults: 2,
 *   ServiceCode: "AmazonEC2"
 * };
 * const command = new GetAttributeValuesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AttributeValues: [
 *     {
 *       Value: "Throughput Optimized HDD"
 *     },
 *     {
 *       Value: "Provisioned IOPS"
 *     }
 *   ],
 *   NextToken: "GpgauEXAMPLEezucl5LV0w==:7GzYJ0nw0DBTJ2J66EoTIIynE6O1uXwQtTRqioJzQadBnDVgHPzI1en4BUQnPCLpzeBk9RQQAWaFieA4+DapFAGLgk+Z/9/cTw9GldnPOHN98+FdmJP7wKU3QQpQ8MQr5KOeBkIsAqvAQYdL0DkL7tHwPtE5iCEByAmg9gcC/yBU1vAOsf7R3VaNN4M5jMDv3woSWqASSIlBVB6tgW78YL22KhssoItM/jWW+aP6Jqtq4mldxp/ct6DWAl+xLFwHU/CbketimPPXyqHF3/UXDw=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAttributeValuesCommand extends $Command
  .classBuilder<
    GetAttributeValuesCommandInput,
    GetAttributeValuesCommandOutput,
    PricingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PricingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPriceListService", "GetAttributeValues", {})
  .n("PricingClient", "GetAttributeValuesCommand")
  .sc(GetAttributeValues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttributeValuesRequest;
      output: GetAttributeValuesResponse;
    };
    sdk: {
      input: GetAttributeValuesCommandInput;
      output: GetAttributeValuesCommandOutput;
    };
  };
}
