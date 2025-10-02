// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEnvironmentHealthRequest, DescribeEnvironmentHealthResult } from "../models/models_0";
import { de_DescribeEnvironmentHealthCommand, se_DescribeEnvironmentHealthCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentHealthCommand}.
 */
export interface DescribeEnvironmentHealthCommandInput extends DescribeEnvironmentHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentHealthCommand}.
 */
export interface DescribeEnvironmentHealthCommandOutput extends DescribeEnvironmentHealthResult, __MetadataBearer {}

/**
 * <p>Returns information about the overall health of the specified environment. The
 *         <b>DescribeEnvironmentHealth</b> operation is only available with
 *       AWS Elastic Beanstalk Enhanced Health.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentHealthRequest
 *   EnvironmentName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   AttributeNames: [ // EnvironmentHealthAttributes
 *     "Status" || "Color" || "Causes" || "ApplicationMetrics" || "InstancesHealth" || "All" || "HealthStatus" || "RefreshedAt",
 *   ],
 * };
 * const command = new DescribeEnvironmentHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentHealthResult
 * //   EnvironmentName: "STRING_VALUE",
 * //   HealthStatus: "STRING_VALUE",
 * //   Status: "Green" || "Yellow" || "Red" || "Grey",
 * //   Color: "STRING_VALUE",
 * //   Causes: [ // Causes
 * //     "STRING_VALUE",
 * //   ],
 * //   ApplicationMetrics: { // ApplicationMetrics
 * //     Duration: Number("int"),
 * //     RequestCount: Number("int"),
 * //     StatusCodes: { // StatusCodes
 * //       Status2xx: Number("int"),
 * //       Status3xx: Number("int"),
 * //       Status4xx: Number("int"),
 * //       Status5xx: Number("int"),
 * //     },
 * //     Latency: { // Latency
 * //       P999: Number("double"),
 * //       P99: Number("double"),
 * //       P95: Number("double"),
 * //       P90: Number("double"),
 * //       P85: Number("double"),
 * //       P75: Number("double"),
 * //       P50: Number("double"),
 * //       P10: Number("double"),
 * //     },
 * //   },
 * //   InstancesHealth: { // InstanceHealthSummary
 * //     NoData: Number("int"),
 * //     Unknown: Number("int"),
 * //     Pending: Number("int"),
 * //     Ok: Number("int"),
 * //     Info: Number("int"),
 * //     Warning: Number("int"),
 * //     Degraded: Number("int"),
 * //     Severe: Number("int"),
 * //   },
 * //   RefreshedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentHealthCommandInput - {@link DescribeEnvironmentHealthCommandInput}
 * @returns {@link DescribeEnvironmentHealthCommandOutput}
 * @see {@link DescribeEnvironmentHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters is not valid. Please correct the input parameters and try
 *       the operation again.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To view environment health
 * ```javascript
 * // The following operation retrieves overall health information for an environment named my-env:
 * const input = {
 *   AttributeNames: [
 *     "All"
 *   ],
 *   EnvironmentName: "my-env"
 * };
 * const command = new DescribeEnvironmentHealthCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationMetrics: {
 *     Duration: 10,
 *     Latency: {
 *       P10: 0.001,
 *       P50: 0.001,
 *       P75: 0.002,
 *       P85: 0.003,
 *       P90: 0.003,
 *       P95: 0.004,
 *       P99: 0.004,
 *       P999: 0.004
 *     },
 *     RequestCount: 45,
 *     StatusCodes: {
 *       Status2xx: 45,
 *       Status3xx: 0,
 *       Status4xx: 0,
 *       Status5xx: 0
 *     }
 *   },
 *   Causes:   [],
 *   Color: "Green",
 *   EnvironmentName: "my-env",
 *   HealthStatus: "Ok",
 *   InstancesHealth: {
 *     Degraded: 0,
 *     Info: 0,
 *     NoData: 0,
 *     Ok: 1,
 *     Pending: 0,
 *     Severe: 0,
 *     Unknown: 0,
 *     Warning: 0
 *   },
 *   RefreshedAt: "2015-08-20T21:09:18Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEnvironmentHealthCommand extends $Command
  .classBuilder<
    DescribeEnvironmentHealthCommandInput,
    DescribeEnvironmentHealthCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "DescribeEnvironmentHealth", {})
  .n("ElasticBeanstalkClient", "DescribeEnvironmentHealthCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEnvironmentHealthCommand)
  .de(de_DescribeEnvironmentHealthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentHealthRequest;
      output: DescribeEnvironmentHealthResult;
    };
    sdk: {
      input: DescribeEnvironmentHealthCommandInput;
      output: DescribeEnvironmentHealthCommandOutput;
    };
  };
}
