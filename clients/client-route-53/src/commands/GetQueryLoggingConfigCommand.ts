// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueryLoggingConfigRequest, GetQueryLoggingConfigResponse } from "../models/models_0";
import { de_GetQueryLoggingConfigCommand, se_GetQueryLoggingConfigCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryLoggingConfigCommand}.
 */
export interface GetQueryLoggingConfigCommandInput extends GetQueryLoggingConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetQueryLoggingConfigCommand}.
 */
export interface GetQueryLoggingConfigCommandOutput extends GetQueryLoggingConfigResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified configuration for DNS query logging.</p>
 *          <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a> and <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS
 * 			Queries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetQueryLoggingConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryLoggingConfigResponse
 * //   QueryLoggingConfig: { // QueryLoggingConfig
 * //     Id: "STRING_VALUE", // required
 * //     HostedZoneId: "STRING_VALUE", // required
 * //     CloudWatchLogsLogGroupArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQueryLoggingConfigCommandInput - {@link GetQueryLoggingConfigCommandInput}
 * @returns {@link GetQueryLoggingConfigCommandOutput}
 * @see {@link GetQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link GetQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchQueryLoggingConfig} (client fault)
 *  <p>There is no DNS query logging configuration with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetQueryLoggingConfigCommand extends $Command
  .classBuilder<
    GetQueryLoggingConfigCommandInput,
    GetQueryLoggingConfigCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "GetQueryLoggingConfig", {})
  .n("Route53Client", "GetQueryLoggingConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetQueryLoggingConfigCommand)
  .de(de_GetQueryLoggingConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryLoggingConfigRequest;
      output: GetQueryLoggingConfigResponse;
    };
    sdk: {
      input: GetQueryLoggingConfigCommandInput;
      output: GetQueryLoggingConfigCommandOutput;
    };
  };
}
