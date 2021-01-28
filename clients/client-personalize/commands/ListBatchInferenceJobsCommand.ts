import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListBatchInferenceJobsRequest, ListBatchInferenceJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListBatchInferenceJobsCommand,
  serializeAws_json1_1ListBatchInferenceJobsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListBatchInferenceJobsCommandInput = ListBatchInferenceJobsRequest;
export type ListBatchInferenceJobsCommandOutput = ListBatchInferenceJobsResponse & __MetadataBearer;

/**
 * <p>Gets a list of the batch inference jobs that have been performed off of a solution
 *       version.</p>
 */
export class ListBatchInferenceJobsCommand extends $Command<
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBatchInferenceJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBatchInferenceJobsCommandInput, ListBatchInferenceJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListBatchInferenceJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBatchInferenceJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBatchInferenceJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBatchInferenceJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBatchInferenceJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBatchInferenceJobsCommandOutput> {
    return deserializeAws_json1_1ListBatchInferenceJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
