// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { de_DescribeServicesCommand, se_DescribeServicesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandInput extends DescribeServicesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandOutput extends DescribeServicesResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata for one service or a list of the metadata for all services. Use
 *          this without a service code to get the service codes for all services.
 *          Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to
 *          that service, such as the attribute
 *          names available for that service. For example, some of the attribute names available for EC2 are
 *          <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>,
 *          <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, DescribeServicesCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, DescribeServicesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * // import type { PricingClientConfig } from "@aws-sdk/client-pricing";
 * const config = {}; // type is PricingClientConfig
 * const client = new PricingClient(config);
 * const input = { // DescribeServicesRequest
 *   ServiceCode: "STRING_VALUE",
 *   FormatVersion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServicesResponse
 * //   Services: [ // ServiceList
 * //     { // Service
 * //       ServiceCode: "STRING_VALUE", // required
 * //       AttributeNames: [ // AttributeNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   FormatVersion: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeServicesCommandInput - {@link DescribeServicesCommandInput}
 * @returns {@link DescribeServicesCommandOutput}
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
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
 * @example To retrieve a list of services and service codes
 * ```javascript
 * // Retrieves the service for the given Service Code.
 * const input = {
 *   FormatVersion: "aws_v1",
 *   MaxResults: 1,
 *   ServiceCode: "AmazonEC2"
 * };
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FormatVersion: "aws_v1",
 *   NextToken: "abcdefg123",
 *   Services: [
 *     {
 *       AttributeNames: [
 *         "volumeType",
 *         "maxIopsvolume",
 *         "instanceCapacity10xlarge",
 *         "locationType",
 *         "operation"
 *       ],
 *       ServiceCode: "AmazonEC2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeServicesCommand extends $Command
  .classBuilder<
    DescribeServicesCommandInput,
    DescribeServicesCommandOutput,
    PricingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PricingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPriceListService", "DescribeServices", {})
  .n("PricingClient", "DescribeServicesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServicesCommand)
  .de(de_DescribeServicesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServicesRequest;
      output: DescribeServicesResponse;
    };
    sdk: {
      input: DescribeServicesCommandInput;
      output: DescribeServicesCommandOutput;
    };
  };
}
