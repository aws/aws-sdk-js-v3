import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { ListRxNormInferenceJobsRequest, ListRxNormInferenceJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListRxNormInferenceJobsCommand,
  serializeAws_json1_1ListRxNormInferenceJobsCommand,
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

export type ListRxNormInferenceJobsCommandInput = ListRxNormInferenceJobsRequest;
export type ListRxNormInferenceJobsCommandOutput = ListRxNormInferenceJobsResponse & __MetadataBearer;

/**
 * <p>Gets a list of InferRxNorm jobs that you have
 *       submitted.</p>
 */
export class ListRxNormInferenceJobsCommand extends $Command<
  ListRxNormInferenceJobsCommandInput,
  ListRxNormInferenceJobsCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRxNormInferenceJobsCommandInput) {
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
  ): Handler<ListRxNormInferenceJobsCommandInput, ListRxNormInferenceJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "ListRxNormInferenceJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRxNormInferenceJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRxNormInferenceJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRxNormInferenceJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRxNormInferenceJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRxNormInferenceJobsCommandOutput> {
    return deserializeAws_json1_1ListRxNormInferenceJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
