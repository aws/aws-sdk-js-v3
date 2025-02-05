// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigurationOptionsDescription, DescribeConfigurationOptionsMessage } from "../models/models_0";
import { de_DescribeConfigurationOptionsCommand, se_DescribeConfigurationOptionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationOptionsCommand}.
 */
export interface DescribeConfigurationOptionsCommandInput extends DescribeConfigurationOptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationOptionsCommand}.
 */
export interface DescribeConfigurationOptionsCommandOutput extends ConfigurationOptionsDescription, __MetadataBearer {}

/**
 * <p>Describes the configuration options that are used in a particular configuration
 *       template or environment, or that a specified solution stack defines. The description includes
 *       the values the options, their default values, and an indication of the required action on a
 *       running environment if an option value is changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeConfigurationOptionsMessage
 *   ApplicationName: "STRING_VALUE",
 *   TemplateName: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   SolutionStackName: "STRING_VALUE",
 *   PlatformArn: "STRING_VALUE",
 *   Options: [ // OptionsSpecifierList
 *     { // OptionSpecification
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DescribeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationOptionsDescription
 * //   SolutionStackName: "STRING_VALUE",
 * //   PlatformArn: "STRING_VALUE",
 * //   Options: [ // ConfigurationOptionDescriptionsList
 * //     { // ConfigurationOptionDescription
 * //       Namespace: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       ChangeSeverity: "STRING_VALUE",
 * //       UserDefined: true || false,
 * //       ValueType: "Scalar" || "List",
 * //       ValueOptions: [ // ConfigurationOptionPossibleValues
 * //         "STRING_VALUE",
 * //       ],
 * //       MinValue: Number("int"),
 * //       MaxValue: Number("int"),
 * //       MaxLength: Number("int"),
 * //       Regex: { // OptionRestrictionRegex
 * //         Pattern: "STRING_VALUE",
 * //         Label: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationOptionsCommandInput - {@link DescribeConfigurationOptionsCommandInput}
 * @returns {@link DescribeConfigurationOptionsCommandOutput}
 * @see {@link DescribeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To view configuration options for an environment
 * ```javascript
 * // The following operation retrieves descriptions of all available configuration options for an environment named my-env:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "EnvironmentName": "my-env"
 * };
 * const command = new DescribeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Options": [
 *     {
 *       "ChangeSeverity": "NoInterruption",
 *       "DefaultValue": "30",
 *       "MaxValue": 300,
 *       "MinValue": 5,
 *       "Name": "Interval",
 *       "Namespace": "aws:elb:healthcheck",
 *       "UserDefined": false,
 *       "ValueType": "Scalar"
 *     },
 *     {
 *       "ChangeSeverity": "NoInterruption",
 *       "DefaultValue": "2000000",
 *       "MinValue": 0,
 *       "Name": "LowerThreshold",
 *       "Namespace": "aws:autoscaling:trigger",
 *       "UserDefined": false,
 *       "ValueType": "Scalar"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-configuration-options-for-an-environment-1456276763917
 * ```
 *
 */
export class DescribeConfigurationOptionsCommand extends $Command
  .classBuilder<
    DescribeConfigurationOptionsCommandInput,
    DescribeConfigurationOptionsCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DescribeConfigurationOptions", {})
  .n("ElasticBeanstalkClient", "DescribeConfigurationOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationOptionsCommand)
  .de(de_DescribeConfigurationOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationOptionsMessage;
      output: ConfigurationOptionsDescription;
    };
    sdk: {
      input: DescribeConfigurationOptionsCommandInput;
      output: DescribeConfigurationOptionsCommandOutput;
    };
  };
}
