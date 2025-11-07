// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstancesHealthRequest, DescribeInstancesHealthResult } from "../models/models_0";
import { de_DescribeInstancesHealthCommand, se_DescribeInstancesHealthCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancesHealthCommand}.
 */
export interface DescribeInstancesHealthCommandInput extends DescribeInstancesHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancesHealthCommand}.
 */
export interface DescribeInstancesHealthCommandOutput extends DescribeInstancesHealthResult, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about the health of instances in your AWS Elastic
 *       Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health
 *       reporting</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeInstancesHealthCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeInstancesHealthCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeInstancesHealthRequest
 *   EnvironmentName: "STRING_VALUE",
 *   EnvironmentId: "STRING_VALUE",
 *   AttributeNames: [ // InstancesHealthAttributes
 *     "HealthStatus" || "Color" || "Causes" || "ApplicationMetrics" || "RefreshedAt" || "LaunchedAt" || "System" || "Deployment" || "AvailabilityZone" || "InstanceType" || "All",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstancesHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancesHealthResult
 * //   InstanceHealthList: [ // InstanceHealthList
 * //     { // SingleInstanceHealth
 * //       InstanceId: "STRING_VALUE",
 * //       HealthStatus: "STRING_VALUE",
 * //       Color: "STRING_VALUE",
 * //       Causes: [ // Causes
 * //         "STRING_VALUE",
 * //       ],
 * //       LaunchedAt: new Date("TIMESTAMP"),
 * //       ApplicationMetrics: { // ApplicationMetrics
 * //         Duration: Number("int"),
 * //         RequestCount: Number("int"),
 * //         StatusCodes: { // StatusCodes
 * //           Status2xx: Number("int"),
 * //           Status3xx: Number("int"),
 * //           Status4xx: Number("int"),
 * //           Status5xx: Number("int"),
 * //         },
 * //         Latency: { // Latency
 * //           P999: Number("double"),
 * //           P99: Number("double"),
 * //           P95: Number("double"),
 * //           P90: Number("double"),
 * //           P85: Number("double"),
 * //           P75: Number("double"),
 * //           P50: Number("double"),
 * //           P10: Number("double"),
 * //         },
 * //       },
 * //       System: { // SystemStatus
 * //         CPUUtilization: { // CPUUtilization
 * //           User: Number("double"),
 * //           Nice: Number("double"),
 * //           System: Number("double"),
 * //           Idle: Number("double"),
 * //           IOWait: Number("double"),
 * //           IRQ: Number("double"),
 * //           SoftIRQ: Number("double"),
 * //           Privileged: Number("double"),
 * //         },
 * //         LoadAverage: [ // LoadAverage
 * //           Number("double"),
 * //         ],
 * //       },
 * //       Deployment: { // Deployment
 * //         VersionLabel: "STRING_VALUE",
 * //         DeploymentId: Number("long"),
 * //         Status: "STRING_VALUE",
 * //         DeploymentTime: new Date("TIMESTAMP"),
 * //       },
 * //       AvailabilityZone: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RefreshedAt: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstancesHealthCommandInput - {@link DescribeInstancesHealthCommandInput}
 * @returns {@link DescribeInstancesHealthCommandOutput}
 * @see {@link DescribeInstancesHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters is not valid. Please correct the input parameters and try
 *       the operation again.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To view environment health
 * ```javascript
 * // The following operation retrieves health information for instances in an environment named my-env:
 * const input = {
 *   AttributeNames: [
 *     "All"
 *   ],
 *   EnvironmentName: "my-env"
 * };
 * const command = new DescribeInstancesHealthCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceHealthList: [
 *     {
 *       ApplicationMetrics: {
 *         Duration: 10,
 *         Latency: {
 *           P10: 0,
 *           P50: 0.001,
 *           P75: 0.002,
 *           P85: 0.003,
 *           P90: 0.004,
 *           P95: 0.005,
 *           P99: 0.006,
 *           P999: 0.006
 *         },
 *         RequestCount: 48,
 *         StatusCodes: {
 *           Status2xx: 47,
 *           Status3xx: 0,
 *           Status4xx: 1,
 *           Status5xx: 0
 *         }
 *       },
 *       Causes:       [],
 *       Color: "Green",
 *       HealthStatus: "Ok",
 *       InstanceId: "i-08691cc7",
 *       LaunchedAt: "2015-08-13T19:17:09Z",
 *       System: {
 *         CPUUtilization: {
 *           IOWait: 0.2,
 *           IRQ: 0,
 *           Idle: 97.8,
 *           Nice: 0.1,
 *           SoftIRQ: 0.1,
 *           System: 0.3,
 *           User: 1.5
 *         },
 *         LoadAverage: [
 *           0,
 *           0.02,
 *           0.05
 *         ]
 *       }
 *     }
 *   ],
 *   RefreshedAt: "2015-08-20T21:09:08Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeInstancesHealthCommand extends $Command
  .classBuilder<
    DescribeInstancesHealthCommandInput,
    DescribeInstancesHealthCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DescribeInstancesHealth", {})
  .n("ElasticBeanstalkClient", "DescribeInstancesHealthCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstancesHealthCommand)
  .de(de_DescribeInstancesHealthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstancesHealthRequest;
      output: DescribeInstancesHealthResult;
    };
    sdk: {
      input: DescribeInstancesHealthCommandInput;
      output: DescribeInstancesHealthCommandOutput;
    };
  };
}
