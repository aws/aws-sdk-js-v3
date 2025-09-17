// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEnvironmentResourcesMessage, EnvironmentResourceDescriptionsMessage } from "../models/models_0";
import { de_DescribeEnvironmentResourcesCommand, se_DescribeEnvironmentResourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentResourcesCommand}.
 */
export interface DescribeEnvironmentResourcesCommandInput extends DescribeEnvironmentResourcesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentResourcesCommand}.
 */
export interface DescribeEnvironmentResourcesCommandOutput
  extends EnvironmentResourceDescriptionsMessage,
    __MetadataBearer {}

/**
 * <p>Returns AWS resources for this environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentResourcesCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentResourcesCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentResourcesMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 * };
 * const command = new DescribeEnvironmentResourcesCommand(input);
 * const response = await client.send(command);
 * // { // EnvironmentResourceDescriptionsMessage
 * //   EnvironmentResources: { // EnvironmentResourceDescription
 * //     EnvironmentName: "STRING_VALUE",
 * //     AutoScalingGroups: [ // AutoScalingGroupList
 * //       { // AutoScalingGroup
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Instances: [ // InstanceList
 * //       { // Instance
 * //         Id: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchConfigurations: [ // LaunchConfigurationList
 * //       { // LaunchConfiguration
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchTemplates: [ // LaunchTemplateList
 * //       { // LaunchTemplate
 * //         Id: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LoadBalancers: [ // LoadBalancerList
 * //       { // LoadBalancer
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Triggers: [ // TriggerList
 * //       { // Trigger
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Queues: [ // QueueList
 * //       { // Queue
 * //         Name: "STRING_VALUE",
 * //         URL: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentResourcesCommandInput - {@link DescribeEnvironmentResourcesCommandInput}
 * @returns {@link DescribeEnvironmentResourcesCommandOutput}
 * @see {@link DescribeEnvironmentResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentResourcesCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To view information about the AWS resources in your environment
 * ```javascript
 * // The following operation retrieves information about resources in an environment named my-env:
 * const input = {
 *   EnvironmentName: "my-env"
 * };
 * const command = new DescribeEnvironmentResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EnvironmentResources: {
 *     AutoScalingGroups: [
 *       {
 *         Name: "awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingGroup-QSB2ZO88SXZT"
 *       }
 *     ],
 *     EnvironmentName: "my-env",
 *     Instances: [
 *       {
 *         Id: "i-0c91c786"
 *       }
 *     ],
 *     LaunchConfigurations: [
 *       {
 *         Name: "awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingLaunchConfiguration-1UUVQIBC96TQ2"
 *       }
 *     ],
 *     LoadBalancers: [
 *       {
 *         Name: "awseb-e-q-AWSEBLoa-1EEPZ0K98BIF0"
 *       }
 *     ],
 *     Queues:     [],
 *     Triggers:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEnvironmentResourcesCommand extends $Command
  .classBuilder<
    DescribeEnvironmentResourcesCommandInput,
    DescribeEnvironmentResourcesCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DescribeEnvironmentResources", {})
  .n("ElasticBeanstalkClient", "DescribeEnvironmentResourcesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEnvironmentResourcesCommand)
  .de(de_DescribeEnvironmentResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentResourcesMessage;
      output: EnvironmentResourceDescriptionsMessage;
    };
    sdk: {
      input: DescribeEnvironmentResourcesCommandInput;
      output: DescribeEnvironmentResourcesCommandOutput;
    };
  };
}
