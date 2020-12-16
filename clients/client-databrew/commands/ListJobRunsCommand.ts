import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListJobRunsRequest, ListJobRunsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListJobRunsCommand,
  serializeAws_restJson1ListJobRunsCommand,
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

export type ListJobRunsCommandInput = ListJobRunsRequest;
export type ListJobRunsCommandOutput = ListJobRunsResponse & __MetadataBearer;

/**
 * <p>Lists all of the previous runs of a particular AWS Glue DataBrew job in the current
 *             AWS account.</p>
 */
export class ListJobRunsCommand extends $Command<
  ListJobRunsCommandInput,
  ListJobRunsCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJobRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobRunsCommandInput, ListJobRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListJobRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJobRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListJobRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJobRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobRunsCommandOutput> {
    return deserializeAws_restJson1ListJobRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
