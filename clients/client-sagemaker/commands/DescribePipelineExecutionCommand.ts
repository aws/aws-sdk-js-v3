import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribePipelineExecutionRequest, DescribePipelineExecutionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribePipelineExecutionCommand,
  serializeAws_json1_1DescribePipelineExecutionCommand,
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

export type DescribePipelineExecutionCommandInput = DescribePipelineExecutionRequest;
export type DescribePipelineExecutionCommandOutput = DescribePipelineExecutionResponse & __MetadataBearer;

/**
 * <p>Describes the details of a pipeline execution.</p>
 */
export class DescribePipelineExecutionCommand extends $Command<
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePipelineExecutionCommandInput) {
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
  ): Handler<DescribePipelineExecutionCommandInput, DescribePipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribePipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePipelineExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePipelineExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePipelineExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePipelineExecutionCommandOutput> {
    return deserializeAws_json1_1DescribePipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
