import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteEnvironmentConfigurationMessage } from "../models/models_0";
import {
  deserializeAws_queryDeleteEnvironmentConfigurationCommand,
  serializeAws_queryDeleteEnvironmentConfigurationCommand,
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

export type DeleteEnvironmentConfigurationCommandInput = DeleteEnvironmentConfigurationMessage;
export type DeleteEnvironmentConfigurationCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the draft configuration associated with the running environment.</p>
 *          <p>Updating a running environment with any configuration changes creates a draft
 *       configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update
 *       fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the
 *       deployment is in process or has failed. The draft configuration remains in existence until it
 *       is deleted with this action.</p>
 */
export class DeleteEnvironmentConfigurationCommand extends $Command<
  DeleteEnvironmentConfigurationCommandInput,
  DeleteEnvironmentConfigurationCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEnvironmentConfigurationCommandInput) {
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
  ): Handler<DeleteEnvironmentConfigurationCommandInput, DeleteEnvironmentConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DeleteEnvironmentConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEnvironmentConfigurationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteEnvironmentConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteEnvironmentConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteEnvironmentConfigurationCommandOutput> {
    return deserializeAws_queryDeleteEnvironmentConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
