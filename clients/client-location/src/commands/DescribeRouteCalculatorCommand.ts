// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeRouteCalculatorRequest, DescribeRouteCalculatorResponse } from "../models/models_0";
import { DescribeRouteCalculator } from "../schemas/schemas_8_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouteCalculatorCommand}.
 */
export interface DescribeRouteCalculatorCommandInput extends DescribeRouteCalculatorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouteCalculatorCommand}.
 */
export interface DescribeRouteCalculatorCommandOutput extends DescribeRouteCalculatorResponse, __MetadataBearer {}

/**
 * <p>Retrieves the route calculator resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DescribeRouteCalculatorRequest
 *   CalculatorName: "STRING_VALUE", // required
 * };
 * const command = new DescribeRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteCalculatorResponse
 * //   CalculatorName: "STRING_VALUE", // required
 * //   CalculatorArn: "STRING_VALUE", // required
 * //   PricingPlan: "STRING_VALUE",
 * //   Description: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   DataSource: "STRING_VALUE", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRouteCalculatorCommandInput - {@link DescribeRouteCalculatorCommandInput}
 * @returns {@link DescribeRouteCalculatorCommandOutput}
 * @see {@link DescribeRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class DescribeRouteCalculatorCommand extends $Command
  .classBuilder<
    DescribeRouteCalculatorCommandInput,
    DescribeRouteCalculatorCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "DescribeRouteCalculator", {})
  .n("LocationClient", "DescribeRouteCalculatorCommand")
  .sc(DescribeRouteCalculator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRouteCalculatorRequest;
      output: DescribeRouteCalculatorResponse;
    };
    sdk: {
      input: DescribeRouteCalculatorCommandInput;
      output: DescribeRouteCalculatorCommandOutput;
    };
  };
}
