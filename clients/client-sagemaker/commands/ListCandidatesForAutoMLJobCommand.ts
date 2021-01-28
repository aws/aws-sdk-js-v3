import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListCandidatesForAutoMLJobRequest, ListCandidatesForAutoMLJobResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListCandidatesForAutoMLJobCommand,
  serializeAws_json1_1ListCandidatesForAutoMLJobCommand,
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

export type ListCandidatesForAutoMLJobCommandInput = ListCandidatesForAutoMLJobRequest;
export type ListCandidatesForAutoMLJobCommandOutput = ListCandidatesForAutoMLJobResponse & __MetadataBearer;

/**
 * <p>List the Candidates created for the job.</p>
 */
export class ListCandidatesForAutoMLJobCommand extends $Command<
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCandidatesForAutoMLJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCandidatesForAutoMLJobCommandInput, ListCandidatesForAutoMLJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListCandidatesForAutoMLJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCandidatesForAutoMLJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCandidatesForAutoMLJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCandidatesForAutoMLJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCandidatesForAutoMLJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCandidatesForAutoMLJobCommandOutput> {
    return deserializeAws_json1_1ListCandidatesForAutoMLJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
