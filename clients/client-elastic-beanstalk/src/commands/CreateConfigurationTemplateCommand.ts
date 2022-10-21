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
  CreateConfigurationTemplateMessage,
  CreateConfigurationTemplateMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateConfigurationTemplateCommand,
  serializeAws_queryCreateConfigurationTemplateCommand,
} from "../protocols/Aws_query";

export interface CreateConfigurationTemplateCommandInput extends CreateConfigurationTemplateMessage {}
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
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
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
      inputFilterSensitiveLog: CreateConfigurationTemplateMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationSettingsDescriptionFilterSensitiveLog,
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
