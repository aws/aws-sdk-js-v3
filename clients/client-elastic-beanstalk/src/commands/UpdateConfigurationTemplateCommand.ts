// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  ConfigurationSettingsDescription,
  ConfigurationSettingsDescriptionFilterSensitiveLog,
  UpdateConfigurationTemplateMessage,
  UpdateConfigurationTemplateMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateConfigurationTemplateCommand,
  serializeAws_queryUpdateConfigurationTemplateCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link UpdateConfigurationTemplateCommand}.
 */
export interface UpdateConfigurationTemplateCommandInput extends UpdateConfigurationTemplateMessage {}
/**
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
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
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
      inputFilterSensitiveLog: UpdateConfigurationTemplateMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationSettingsDescriptionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConfigurationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateConfigurationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationTemplateCommandOutput> {
    return deserializeAws_queryUpdateConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
