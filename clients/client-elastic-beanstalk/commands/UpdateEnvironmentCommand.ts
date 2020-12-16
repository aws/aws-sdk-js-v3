import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { EnvironmentDescription, UpdateEnvironmentMessage } from "../models/models_0";
import {
  deserializeAws_queryUpdateEnvironmentCommand,
  serializeAws_queryUpdateEnvironmentCommand,
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

export type UpdateEnvironmentCommandInput = UpdateEnvironmentMessage;
export type UpdateEnvironmentCommandOutput = EnvironmentDescription & __MetadataBearer;

/**
 * <p>Updates the environment description, deploys a new application version, updates the
 *       configuration settings to an entirely new configuration template, or updates select
 *       configuration option values in the running environment.</p>
 *          <p> Attempting to update both the release and configuration is not allowed and AWS Elastic
 *       Beanstalk returns an <code>InvalidParameterCombination</code> error. </p>
 *          <p> When updating the configuration settings to a new template or individual settings, a
 *       draft configuration is created and <a>DescribeConfigurationSettings</a> for this
 *       environment returns two setting descriptions with different <code>DeploymentStatus</code>
 *       values. </p>
 */
export class UpdateEnvironmentCommand extends $Command<
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEnvironmentCommandInput) {
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
  ): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnvironmentMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EnvironmentDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEnvironmentCommandOutput> {
    return deserializeAws_queryUpdateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
