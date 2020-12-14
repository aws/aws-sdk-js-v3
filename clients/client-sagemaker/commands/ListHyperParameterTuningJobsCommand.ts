import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHyperParameterTuningJobsRequest, ListHyperParameterTuningJobsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListHyperParameterTuningJobsCommand,
  serializeAws_json1_1ListHyperParameterTuningJobsCommand,
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

export type ListHyperParameterTuningJobsCommandInput = ListHyperParameterTuningJobsRequest;
export type ListHyperParameterTuningJobsCommandOutput = ListHyperParameterTuningJobsResponse & __MetadataBearer;

/**
 * <p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that
 *             describe
 *             the hyperparameter tuning jobs launched in your account.</p>
 */
export class ListHyperParameterTuningJobsCommand extends $Command<
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHyperParameterTuningJobsCommandInput) {
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
  ): Handler<ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListHyperParameterTuningJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHyperParameterTuningJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListHyperParameterTuningJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHyperParameterTuningJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHyperParameterTuningJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHyperParameterTuningJobsCommandOutput> {
    return deserializeAws_json1_1ListHyperParameterTuningJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
