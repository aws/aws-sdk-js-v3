// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigurationSettingsValidationMessages, ValidateConfigurationSettingsMessage } from "../models/models_0";
import {
  de_ValidateConfigurationSettingsCommand,
  se_ValidateConfigurationSettingsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidateConfigurationSettingsCommand}.
 */
export interface ValidateConfigurationSettingsCommandInput extends ValidateConfigurationSettingsMessage {}
/**
 * @public
 *
 * The output of {@link ValidateConfigurationSettingsCommand}.
 */
export interface ValidateConfigurationSettingsCommandOutput
  extends ConfigurationSettingsValidationMessages,
    __MetadataBearer {}

/**
 * <p>Takes a set of configuration settings and either a configuration template or
 *       environment, and determines whether those values are valid.</p>
 *          <p>This action returns a list of messages indicating any errors or warnings associated
 *       with the selection of option values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // ValidateConfigurationSettingsMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   OptionSettings: [ // ConfigurationOptionSettingsList // required
 *     { // ConfigurationOptionSetting
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ValidateConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationSettingsValidationMessages
 * //   Messages: [ // ValidationMessagesList
 * //     { // ValidationMessage
 * //       Message: "STRING_VALUE",
 * //       Severity: "error" || "warning",
 * //       Namespace: "STRING_VALUE",
 * //       OptionName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateConfigurationSettingsCommandInput - {@link ValidateConfigurationSettingsCommandInput}
 * @returns {@link ValidateConfigurationSettingsCommandOutput}
 * @see {@link ValidateConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ValidateConfigurationSettingsCommand extends $Command
  .classBuilder<
    ValidateConfigurationSettingsCommandInput,
    ValidateConfigurationSettingsCommandOutput,
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
  .s("AWSElasticBeanstalkService", "ValidateConfigurationSettings", {})
  .n("ElasticBeanstalkClient", "ValidateConfigurationSettingsCommand")
  .f(void 0, void 0)
  .ser(se_ValidateConfigurationSettingsCommand)
  .de(de_ValidateConfigurationSettingsCommand)
  .build() {}
