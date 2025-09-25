// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigurationSettingsDescription, UpdateConfigurationTemplateMessage } from "../models/models_0";
import { UpdateConfigurationTemplate } from "../schemas/schemas_7_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationTemplateCommand}.
 */
export interface UpdateConfigurationTemplateCommandInput extends UpdateConfigurationTemplateMessage {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationTemplateCommand}.
 */
export interface UpdateConfigurationTemplateCommandOutput extends ConfigurationSettingsDescription, __MetadataBearer {}

/**
 * <p>Updates the specified configuration template to have the specified properties or
 *       configuration option values.</p>
 *          <note>
 *             <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value
 *         remains unchanged. To clear such properties, specify an empty string.</p>
 *          </note>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeConfigurationOptions</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateConfigurationTemplateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateConfigurationTemplateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateConfigurationTemplateMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   OptionSettings: [ // ConfigurationOptionSettingsList
 *     { // ConfigurationOptionSetting
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   OptionsToRemove: [ // OptionsSpecifierList
 *     { // OptionSpecification
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateConfigurationTemplateCommand(input);
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
 * @param UpdateConfigurationTemplateCommandInput - {@link UpdateConfigurationTemplateCommandInput}
 * @returns {@link UpdateConfigurationTemplateCommandOutput}
 * @see {@link UpdateConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To update a configuration template
 * ```javascript
 * // The following operation removes the configured CloudWatch custom health metrics configuration ConfigDocument from a saved configuration template named my-template:
 * const input = {
 *   ApplicationName: "my-app",
 *   OptionsToRemove: [
 *     {
 *       Namespace: "aws:elasticbeanstalk:healthreporting:system",
 *       OptionName: "ConfigDocument"
 *     }
 *   ],
 *   TemplateName: "my-template"
 * };
 * const command = new UpdateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationName: "my-app",
 *   DateCreated: "2015-08-20T22:39:31Z",
 *   DateUpdated: "2015-08-20T22:43:11Z",
 *   SolutionStackName: "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   TemplateName: "my-template"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConfigurationTemplateCommand extends $Command
  .classBuilder<
    UpdateConfigurationTemplateCommandInput,
    UpdateConfigurationTemplateCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "UpdateConfigurationTemplate", {})
  .n("ElasticBeanstalkClient", "UpdateConfigurationTemplateCommand")
  .sc(UpdateConfigurationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationTemplateMessage;
      output: ConfigurationSettingsDescription;
    };
    sdk: {
      input: UpdateConfigurationTemplateCommandInput;
      output: UpdateConfigurationTemplateCommandOutput;
    };
  };
}
