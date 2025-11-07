// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigurationSettingsDescription, CreateConfigurationTemplateMessage } from "../models/models_0";
import { de_CreateConfigurationTemplateCommand, se_CreateConfigurationTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationTemplateCommand}.
 */
export interface CreateConfigurationTemplateCommandInput extends CreateConfigurationTemplateMessage {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationTemplateCommand}.
 */
export interface CreateConfigurationTemplateCommandOutput extends ConfigurationSettingsDescription, __MetadataBearer {}

/**
 * <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk
 *       application. You define application configuration settings in a configuration template. You
 *       can then use the configuration template to deploy different versions of the application with
 *       the same configuration settings.</p>
 *          <p>Templates aren't associated with any environment. The <code>EnvironmentName</code>
 *       response element is always <code>null</code>.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeConfigurationOptions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeConfigurationSettings</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAvailableSolutionStacks</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateConfigurationTemplateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateConfigurationTemplateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // CreateConfigurationTemplateMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE", // required
 *   SolutionStackName: "STRING_VALUE",
 *   PlatformArn: "STRING_VALUE",
 *   SourceConfiguration: { // SourceConfiguration
 *     ApplicationName: "STRING_VALUE",
 *     TemplateName: "STRING_VALUE",
 *   },
 *   EnvironmentId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   OptionSettings: [ // ConfigurationOptionSettingsList
 *     { // ConfigurationOptionSetting
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationSettingsDescription
 * //   SolutionStackName: "STRING_VALUE",
 * //   PlatformArn: "STRING_VALUE",
 * //   ApplicationName: "STRING_VALUE",
 * //   TemplateName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EnvironmentName: "STRING_VALUE",
 * //   DeploymentStatus: "deployed" || "pending" || "failed",
 * //   DateCreated: new Date("TIMESTAMP"),
 * //   DateUpdated: new Date("TIMESTAMP"),
 * //   OptionSettings: [ // ConfigurationOptionSettingsList
 * //     { // ConfigurationOptionSetting
 * //       ResourceName: "STRING_VALUE",
 * //       Namespace: "STRING_VALUE",
 * //       OptionName: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateConfigurationTemplateCommandInput - {@link CreateConfigurationTemplateCommandInput}
 * @returns {@link CreateConfigurationTemplateCommandOutput}
 * @see {@link CreateConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link TooManyConfigurationTemplatesException} (client fault)
 *  <p>The specified account has reached its limit of configuration templates.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To create a configuration template
 * ```javascript
 * // The following operation creates a configuration template named my-app-v1 from the settings applied to an environment with the id e-rpqsewtp2j:
 * const input = {
 *   ApplicationName: "my-app",
 *   EnvironmentId: "e-rpqsewtp2j",
 *   TemplateName: "my-app-v1"
 * };
 * const command = new CreateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationName: "my-app",
 *   DateCreated: "2015-08-12T18:40:39Z",
 *   DateUpdated: "2015-08-12T18:40:39Z",
 *   SolutionStackName: "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   TemplateName: "my-app-v1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateConfigurationTemplateCommand extends $Command
  .classBuilder<
    CreateConfigurationTemplateCommandInput,
    CreateConfigurationTemplateCommandOutput,
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
  .s("AWSElasticBeanstalkService", "CreateConfigurationTemplate", {})
  .n("ElasticBeanstalkClient", "CreateConfigurationTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfigurationTemplateCommand)
  .de(de_CreateConfigurationTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationTemplateMessage;
      output: ConfigurationSettingsDescription;
    };
    sdk: {
      input: CreateConfigurationTemplateCommandInput;
      output: CreateConfigurationTemplateCommandOutput;
    };
  };
}
