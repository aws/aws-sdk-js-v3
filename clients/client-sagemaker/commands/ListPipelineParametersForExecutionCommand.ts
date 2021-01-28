import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  ListPipelineParametersForExecutionRequest,
  ListPipelineParametersForExecutionResponse,
} from "../models/models_2";
import {
  deserializeAws_json1_1ListPipelineParametersForExecutionCommand,
  serializeAws_json1_1ListPipelineParametersForExecutionCommand,
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

export type ListPipelineParametersForExecutionCommandInput = ListPipelineParametersForExecutionRequest;
export type ListPipelineParametersForExecutionCommandOutput = ListPipelineParametersForExecutionResponse &
  __MetadataBearer;

/**
 * <p>Gets a list of parameters for a pipeline execution.</p>
 */
export class ListPipelineParametersForExecutionCommand extends $Command<
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPipelineParametersForExecutionCommandInput) {
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
  ): Handler<ListPipelineParametersForExecutionCommandInput, ListPipelineParametersForExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListPipelineParametersForExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPipelineParametersForExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPipelineParametersForExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPipelineParametersForExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPipelineParametersForExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPipelineParametersForExecutionCommandOutput> {
    return deserializeAws_json1_1ListPipelineParametersForExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
