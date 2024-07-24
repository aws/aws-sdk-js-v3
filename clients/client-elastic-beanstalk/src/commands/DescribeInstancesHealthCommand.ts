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
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
