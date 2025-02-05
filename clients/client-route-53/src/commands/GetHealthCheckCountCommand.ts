// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetHealthCheckCountRequest, GetHealthCheckCountResponse } from "../models/models_0";
import { de_GetHealthCheckCountCommand, se_GetHealthCheckCountCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHealthCheckCountCommand}.
 */
export interface GetHealthCheckCountCommandInput extends GetHealthCheckCountRequest {}
/**
 * @public
 *
 * The output of {@link GetHealthCheckCountCommand}.
 */
export interface GetHealthCheckCountCommandOutput extends GetHealthCheckCountResponse, __MetadataBearer {}

/**
 * <p>Retrieves the number of health checks that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetHealthCheckCountCommand(input);
 * const response = await client.send(command);
 * // { // GetHealthCheckCountResponse
 * //   HealthCheckCount: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetHealthCheckCountCommandInput - {@link GetHealthCheckCountCommandInput}
 * @returns {@link GetHealthCheckCountCommandOutput}
 * @see {@link GetHealthCheckCountCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class GetHealthCheckCountCommand extends $Command
  .classBuilder<
    GetHealthCheckCountCommandInput,
    GetHealthCheckCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDnsV20130401", "GetHealthCheckCount", {})
  .n("Route53Client", "GetHealthCheckCountCommand")
  .f(void 0, void 0)
  .ser(se_GetHealthCheckCountCommand)
  .de(de_GetHealthCheckCountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetHealthCheckCountResponse;
    };
    sdk: {
      input: GetHealthCheckCountCommandInput;
      output: GetHealthCheckCountCommandOutput;
    };
  };
}
