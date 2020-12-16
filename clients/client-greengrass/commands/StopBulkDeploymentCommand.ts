import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { StopBulkDeploymentRequest, StopBulkDeploymentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StopBulkDeploymentCommand,
  serializeAws_restJson1StopBulkDeploymentCommand,
} from "../protocols/Aws_restJson1";
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

export type StopBulkDeploymentCommandInput = StopBulkDeploymentRequest;
export type StopBulkDeploymentCommandOutput = StopBulkDeploymentResponse & __MetadataBearer;

/**
 * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
 */
export class StopBulkDeploymentCommand extends $Command<
  StopBulkDeploymentCommandInput,
  StopBulkDeploymentCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopBulkDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "StopBulkDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopBulkDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopBulkDeploymentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopBulkDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopBulkDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopBulkDeploymentCommandOutput> {
    return deserializeAws_restJson1StopBulkDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
