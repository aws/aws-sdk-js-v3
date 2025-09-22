// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetHealthCheckStatusRequest, GetHealthCheckStatusResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckStatus } from "../schemas/schemas_3_Health";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHealthCheckStatusCommand}.
 */
export interface GetHealthCheckStatusCommandInput extends GetHealthCheckStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetHealthCheckStatusCommand}.
 */
export interface GetHealthCheckStatusCommandOutput extends GetHealthCheckStatusResponse, __MetadataBearer {}

/**
 * <p>Gets status of a specified health check. </p>
 *          <important>
 *             <p>This API is intended for use during development to diagnose behavior. It doesn’t
 * 				support production use-cases with high query rates that require immediate and
 * 				actionable responses.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckStatusCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckStatusCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetHealthCheckStatusRequest
 *   HealthCheckId: "STRING_VALUE", // required
 * };
 * const command = new GetHealthCheckStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetHealthCheckStatusResponse
 * //   HealthCheckObservations: [ // HealthCheckObservations // required
 * //     { // HealthCheckObservation
 * //       Region: "us-east-1" || "us-west-1" || "us-west-2" || "eu-west-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1",
 * //       IPAddress: "STRING_VALUE",
 * //       StatusReport: { // StatusReport
 * //         Status: "STRING_VALUE",
 * //         CheckedTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetHealthCheckStatusCommandInput - {@link GetHealthCheckStatusCommandInput}
 * @returns {@link GetHealthCheckStatusCommandOutput}
 * @see {@link GetHealthCheckStatusCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetHealthCheckStatusCommand extends $Command
  .classBuilder<
    GetHealthCheckStatusCommandInput,
    GetHealthCheckStatusCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "GetHealthCheckStatus", {})
  .n("Route53Client", "GetHealthCheckStatusCommand")
  .sc(GetHealthCheckStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHealthCheckStatusRequest;
      output: GetHealthCheckStatusResponse;
    };
    sdk: {
      input: GetHealthCheckStatusCommandInput;
      output: GetHealthCheckStatusCommandOutput;
    };
  };
}
