// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_0";
import { de_DescribeEndpointsCommand, se_DescribeEndpointsCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandInput extends DescribeEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandOutput extends DescribeEndpointsResponse, __MetadataBearer {}

/**
 * <p>DescribeEndpoints returns a list of available endpoints to make Timestream
 *             API calls against. This API is available through both Write and Query.</p>
 *          <p>Because the Timestream SDKs are designed to transparently work with the
 *             service’s architecture, including the management and mapping of the service endpoints,
 *                 <i>it is not recommended that you use this API unless</i>:</p>
 *          <ul>
 *             <li>
 *                <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream
 *                     </a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Your application uses a programming language that does not yet have SDK
 *                     support</p>
 *             </li>
 *             <li>
 *                <p>You require better control over the client-side implementation</p>
 *             </li>
 *          </ul>
 *          <p>For detailed information on how and when to use and implement DescribeEndpoints, see
 *                 <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, DescribeEndpointsCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DescribeEndpointsCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = {};
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointsResponse
 * //   Endpoints: [ // Endpoints // required
 * //     { // Endpoint
 * //       Address: "STRING_VALUE", // required
 * //       CachePeriodInMinutes: Number("long"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointsCommandInput - {@link DescribeEndpointsCommandInput}
 * @returns {@link DescribeEndpointsCommandOutput}
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to excessive requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 * @public
 */
export class DescribeEndpointsCommand extends $Command
  .classBuilder<
    DescribeEndpointsCommandInput,
    DescribeEndpointsCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Timestream_20181101", "DescribeEndpoints", {})
  .n("TimestreamQueryClient", "DescribeEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEndpointsCommand)
  .de(de_DescribeEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeEndpointsResponse;
    };
    sdk: {
      input: DescribeEndpointsCommandInput;
      output: DescribeEndpointsCommandOutput;
    };
  };
}
