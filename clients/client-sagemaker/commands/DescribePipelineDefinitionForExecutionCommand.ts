import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  DescribePipelineDefinitionForExecutionRequest,
  DescribePipelineDefinitionForExecutionResponse,
} from "../models/models_1";
import {
  deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand,
  serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand,
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

export type DescribePipelineDefinitionForExecutionCommandInput = DescribePipelineDefinitionForExecutionRequest;
export type DescribePipelineDefinitionForExecutionCommandOutput = DescribePipelineDefinitionForExecutionResponse &
  __MetadataBearer;

/**
 * <p>Describes the details of an execution's pipeline definition.</p>
 */
export class DescribePipelineDefinitionForExecutionCommand extends $Command<
  DescribePipelineDefinitionForExecutionCommandInput,
  DescribePipelineDefinitionForExecutionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePipelineDefinitionForExecutionCommandInput) {
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
  ): Handler<DescribePipelineDefinitionForExecutionCommandInput, DescribePipelineDefinitionForExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribePipelineDefinitionForExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePipelineDefinitionForExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePipelineDefinitionForExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePipelineDefinitionForExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePipelineDefinitionForExecutionCommandOutput> {
    return deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
