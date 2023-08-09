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
} from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescription, CreateConfigurationTemplateMessage } from "../models/models_0";
import { de_CreateConfigurationTemplateCommand, se_CreateConfigurationTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To create a configuration template
 * ```javascript
 * // The following operation creates a configuration template named my-app-v1 from the settings applied to an environment with the id e-rpqsewtp2j:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "EnvironmentId": "e-rpqsewtp2j",
 *   "TemplateName": "my-app-v1"
 * };
 * const command = new CreateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationName": "my-app",
 *   "DateCreated": "2015-08-12T18:40:39Z",
 *   "DateUpdated": "2015-08-12T18:40:39Z",
 *   "SolutionStackName": "64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8",
 *   "TemplateName": "my-app-v1"
 * }
 * *\/
 * // example id: to-create-a-configuration-template-1456269283586
 * ```
 *
 */
export class CreateConfigurationTemplateCommand extends $Command<
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput,
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
  constructor(readonly input: CreateConfigurationTemplateCommandInput) {
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
  ): Handler<CreateConfigurationTemplateCommandInput, CreateConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreateConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateConfigurationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConfigurationTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationTemplateCommandOutput> {
    return de_CreateConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
