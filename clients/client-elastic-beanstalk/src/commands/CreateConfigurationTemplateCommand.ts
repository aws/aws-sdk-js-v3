// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfigurationSettingsDescription, CreateConfigurationTemplateMessage } from "../models/models_0";
import { CreateConfigurationTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.
 *
 * Templates aren't associated with any environment. The `EnvironmentName` response element is always `null`.
 *
 * Related Topics
 *
 * - DescribeConfigurationOptions
 * - DescribeConfigurationSettings
 * - ListAvailableSolutionStacks
 *
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
 *
 * The specified account does not have sufficient privileges for one or more Amazon Web Services services.
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *
 * The specified account has reached its limit of Amazon S3 buckets.
 *
 * @throws {@link TooManyConfigurationTemplatesException} (client fault)
 *
 * The specified account has reached its limit of configuration templates.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 *
 * Base exception class for all service exceptions from ElasticBeanstalk service.
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
export class CreateConfigurationTemplateCommand extends command<CreateConfigurationTemplateCommandInput, CreateConfigurationTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateConfigurationTemplate",
  CreateConfigurationTemplate$
) {
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
