// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigurationSettingsDescriptions, DescribeConfigurationSettingsMessage } from "../models/models_0";
import {
  de_DescribeConfigurationSettingsCommand,
  se_DescribeConfigurationSettingsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationSettingsCommand}.
 */
export interface DescribeConfigurationSettingsCommandInput extends DescribeConfigurationSettingsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationSettingsCommand}.
 */
export interface DescribeConfigurationSettingsCommandOutput
  extends ConfigurationSettingsDescriptions,
    __MetadataBearer {}

/**
 * <p>Returns a description of the settings for the specified configuration set, that is,
 *       either a configuration template or the configuration set associated with a running
 *       environment.</p>
 *          <p>When describing the settings for the configuration set associated with a running
 *       environment, it is possible to receive two sets of setting descriptions. One is the deployed
 *       configuration set, and the other is a draft configuration of an environment that is either in
 *       the process of deployment or that failed to deploy.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteEnvironmentConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeConfigurationSettingsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeConfigurationSettingsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeConfigurationSettingsMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 * };
 * const command = new DescribeConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationSettingsDescriptions
 * //   ConfigurationSettings: [ // ConfigurationSettingsDescriptionList
 * //     { // ConfigurationSettingsDescription
 * //       SolutionStackName: "STRING_VALUE",
 * //       PlatformArn: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //       TemplateName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EnvironmentName: "STRING_VALUE",
 * //       DeploymentStatus: "deployed" || "pending" || "failed",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateUpdated: new Date("TIMESTAMP"),
 * //       OptionSettings: [ // ConfigurationOptionSettingsList
 * //         { // ConfigurationOptionSetting
 * //           ResourceName: "STRING_VALUE",
 * //           Namespace: "STRING_VALUE",
 * //           OptionName: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationSettingsCommandInput - {@link DescribeConfigurationSettingsCommandInput}
 * @returns {@link DescribeConfigurationSettingsCommandOutput}
 * @see {@link DescribeConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To view configurations settings for an environment
 * ```javascript
 * // The following operation retrieves configuration settings for an environment named my-env:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "EnvironmentName": "my-env"
 * };
 * const command = new DescribeConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ConfigurationSettings": [
 *     {
 *       "ApplicationName": "my-app",
 *       "DateCreated": "2015-08-13T19:16:25Z",
 *       "DateUpdated": "2015-08-13T23:30:07Z",
 *       "DeploymentStatus": "deployed",
 *       "Description": "Environment created from the EB CLI using \"eb create\"",
 *       "EnvironmentName": "my-env",
 *       "OptionSettings": [
 *         {
 *           "Namespace": "aws:autoscaling:asg",
 *           "OptionName": "Availability Zones",
 *           "ResourceName": "AWSEBAutoScalingGroup",
 *           "Value": "Any"
 *         },
 *         {
 *           "Namespace": "aws:autoscaling:asg",
 *           "OptionName": "Cooldown",
 *           "ResourceName": "AWSEBAutoScalingGroup",
 *           "Value": "360"
 *         },
 *         {
 *           "Namespace": "aws:elb:policies",
 *           "OptionName": "ConnectionDrainingTimeout",
 *           "ResourceName": "AWSEBLoadBalancer",
 *           "Value": "20"
 *         },
 *         {
 *           "Namespace": "aws:elb:policies",
 *           "OptionName": "ConnectionSettingIdleTimeout",
 *           "ResourceName": "AWSEBLoadBalancer",
 *           "Value": "60"
 *         }
 *       ],
 *       "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-configurations-settings-for-an-environment-1456276924537
 * ```
 *
 */
export class DescribeConfigurationSettingsCommand extends $Command
  .classBuilder<
    DescribeConfigurationSettingsCommandInput,
    DescribeConfigurationSettingsCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DescribeConfigurationSettings", {})
  .n("ElasticBeanstalkClient", "DescribeConfigurationSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationSettingsCommand)
  .de(de_DescribeConfigurationSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationSettingsMessage;
      output: ConfigurationSettingsDescriptions;
    };
    sdk: {
      input: DescribeConfigurationSettingsCommandInput;
      output: DescribeConfigurationSettingsCommandOutput;
    };
  };
}
