import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { ListJobsByStatusRequest, ListJobsByStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListJobsByStatusCommand,
  serializeAws_restJson1ListJobsByStatusCommand,
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

export type ListJobsByStatusCommandInput = ListJobsByStatusRequest;
export type ListJobsByStatusCommandOutput = ListJobsByStatusResponse & __MetadataBearer;

/**
 * <p>The ListJobsByStatus operation gets a list of jobs that have a specified status. The response
 *             body contains one element for each job that satisfies the search criteria.</p>
 */
export class ListJobsByStatusCommand extends $Command<
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJobsByStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ListJobsByStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJobsByStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListJobsByStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJobsByStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobsByStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsByStatusCommandOutput> {
    return deserializeAws_restJson1ListJobsByStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
