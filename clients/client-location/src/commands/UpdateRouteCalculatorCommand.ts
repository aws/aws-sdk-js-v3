// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdateRouteCalculatorRequest, UpdateRouteCalculatorResponse } from "../models/models_0";
import { UpdateRouteCalculator } from "../schemas/schemas_8_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRouteCalculatorCommand}.
 */
export interface UpdateRouteCalculatorCommandInput extends UpdateRouteCalculatorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRouteCalculatorCommand}.
 */
export interface UpdateRouteCalculatorCommandOutput extends UpdateRouteCalculatorResponse, __MetadataBearer {}

/**
 * <p>Updates the specified properties for a given route calculator resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // UpdateRouteCalculatorRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRouteCalculatorResponse
 * //   CalculatorName: "STRING_VALUE", // required
 * //   CalculatorArn: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRouteCalculatorCommandInput - {@link UpdateRouteCalculatorCommandInput}
 * @returns {@link UpdateRouteCalculatorCommandOutput}
 * @see {@link UpdateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteCalculatorCommandOutput} for command's `response` shape.
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
export class UpdateRouteCalculatorCommand extends $Command
  .classBuilder<
    UpdateRouteCalculatorCommandInput,
    UpdateRouteCalculatorCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "UpdateRouteCalculator", {})
  .n("LocationClient", "UpdateRouteCalculatorCommand")
  .sc(UpdateRouteCalculator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRouteCalculatorRequest;
      output: UpdateRouteCalculatorResponse;
    };
    sdk: {
      input: UpdateRouteCalculatorCommandInput;
      output: UpdateRouteCalculatorCommandOutput;
    };
  };
}
