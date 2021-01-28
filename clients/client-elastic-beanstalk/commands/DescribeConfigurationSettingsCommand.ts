import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescriptions, DescribeConfigurationSettingsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeConfigurationSettingsCommand,
  serializeAws_queryDescribeConfigurationSettingsCommand,
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

export type DescribeConfigurationSettingsCommandInput = DescribeConfigurationSettingsMessage;
export type DescribeConfigurationSettingsCommandOutput = ConfigurationSettingsDescriptions & __MetadataBearer;

/**
 * <p>Returns a description of the settings for the specified configuration set, that is,
 *       either a configuration template or the configuration set associated with a running
 *       environment.</p>
 *          <p>When describing the settings for the configuration set associated with a running
 *       environment, it is possible to receive two sets of setting descriptions. One is the deployed
 *       configuration set, and the other is a draft configuration of an environment that is either in
 *       the process of deployment or that failed to deploy.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteEnvironmentConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DescribeConfigurationSettingsCommand extends $Command<
  DescribeConfigurationSettingsCommandInput,
  DescribeConfigurationSettingsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationSettingsCommandInput) {
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
  ): Handler<DescribeConfigurationSettingsCommandInput, DescribeConfigurationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeConfigurationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationSettingsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationSettingsDescriptions.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConfigurationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeConfigurationSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationSettingsCommandOutput> {
    return deserializeAws_queryDescribeConfigurationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
