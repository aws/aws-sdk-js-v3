import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListBulkDeploymentDetailedReportsRequest,
  ListBulkDeploymentDetailedReportsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand,
  serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand,
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

export type ListBulkDeploymentDetailedReportsCommandInput = ListBulkDeploymentDetailedReportsRequest;
export type ListBulkDeploymentDetailedReportsCommandOutput = ListBulkDeploymentDetailedReportsResponse &
  __MetadataBearer;

/**
 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
 */
export class ListBulkDeploymentDetailedReportsCommand extends $Command<
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBulkDeploymentDetailedReportsCommandInput) {
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
  ): Handler<ListBulkDeploymentDetailedReportsCommandInput, ListBulkDeploymentDetailedReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListBulkDeploymentDetailedReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBulkDeploymentDetailedReportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBulkDeploymentDetailedReportsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListBulkDeploymentDetailedReportsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBulkDeploymentDetailedReportsCommandOutput> {
    return deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
