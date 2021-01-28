import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { ListICD10CMInferenceJobsRequest, ListICD10CMInferenceJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListICD10CMInferenceJobsCommand,
  serializeAws_json1_1ListICD10CMInferenceJobsCommand,
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

export type ListICD10CMInferenceJobsCommandInput = ListICD10CMInferenceJobsRequest;
export type ListICD10CMInferenceJobsCommandOutput = ListICD10CMInferenceJobsResponse & __MetadataBearer;

/**
 * <p>Gets a list of InferICD10CM jobs that you have
 *       submitted.</p>
 */
export class ListICD10CMInferenceJobsCommand extends $Command<
  ListICD10CMInferenceJobsCommandInput,
  ListICD10CMInferenceJobsCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListICD10CMInferenceJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListICD10CMInferenceJobsCommandInput, ListICD10CMInferenceJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "ListICD10CMInferenceJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListICD10CMInferenceJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListICD10CMInferenceJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListICD10CMInferenceJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListICD10CMInferenceJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListICD10CMInferenceJobsCommandOutput> {
    return deserializeAws_json1_1ListICD10CMInferenceJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
