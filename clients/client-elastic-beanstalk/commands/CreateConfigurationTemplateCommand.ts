import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescription, CreateConfigurationTemplateMessage } from "../models/models_0";
import {
  deserializeAws_queryCreateConfigurationTemplateCommand,
  serializeAws_queryCreateConfigurationTemplateCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateConfigurationTemplateCommandInput = CreateConfigurationTemplateMessage;
export type CreateConfigurationTemplateCommandOutput = ConfigurationSettingsDescription & __MetadataBearer;

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
 */
export class CreateConfigurationTemplateCommand extends $Command<
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreateConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigurationTemplateMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationSettingsDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConfigurationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateConfigurationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationTemplateCommandOutput> {
    return deserializeAws_queryCreateConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
