// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0";
import { DescribeServices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
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
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request wasn't signed correctly.</p>
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
 *  <p>You've made too many requests exceeding service quotas. </p>
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
export class DescribeServicesCommand extends command<DescribeServicesCommandInput, DescribeServicesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeServices",
  DescribeServices$
) {
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
