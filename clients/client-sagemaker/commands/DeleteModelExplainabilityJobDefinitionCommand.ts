import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelExplainabilityJobDefinitionRequest } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand,
  serializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand,
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

export type DeleteModelExplainabilityJobDefinitionCommandInput = DeleteModelExplainabilityJobDefinitionRequest;
export type DeleteModelExplainabilityJobDefinitionCommandOutput = __MetadataBearer;

/**
 * <p>Deletes an Amazon SageMaker model explainability job definition.</p>
 */
export class DeleteModelExplainabilityJobDefinitionCommand extends $Command<
  DeleteModelExplainabilityJobDefinitionCommandInput,
  DeleteModelExplainabilityJobDefinitionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteModelExplainabilityJobDefinitionCommandInput) {
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
  ): Handler<DeleteModelExplainabilityJobDefinitionCommandInput, DeleteModelExplainabilityJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteModelExplainabilityJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteModelExplainabilityJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteModelExplainabilityJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteModelExplainabilityJobDefinitionCommandOutput> {
    return deserializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
