// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescription, UpdateConfigurationTemplateMessage } from "../models/models_0";
import { de_UpdateConfigurationTemplateCommand, se_UpdateConfigurationTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * @example To update a configuration template
 * ```javascript
 * // The following operation removes the configured CloudWatch custom health metrics configuration ConfigDocument from a saved configuration template named my-template:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "OptionsToRemove": [
 *     {
 *       "Namespace": "aws:elasticbeanstalk:healthreporting:system",
 *       "OptionName": "ConfigDocument"
 *     }
 *   ],
 *   "TemplateName": "my-template"
 * };
 * const command = new UpdateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationName": "my-app",
 *   "DateCreated": "2015-08-20T22:39:31Z",
 *   "DateUpdated": "2015-08-20T22:43:11Z",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "TemplateName": "my-template"
 * }
 * *\/
 * // example id: to-update-a-configuration-template-1456278075300
 * ```
 *
 */
export class UpdateConfigurationTemplateCommand extends $Command<
  UpdateConfigurationTemplateCommandInput,
  UpdateConfigurationTemplateCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConfigurationTemplateCommandInput, UpdateConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "UpdateConfigurationTemplate",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateConfigurationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConfigurationTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationTemplateCommandOutput> {
    return de_UpdateConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
