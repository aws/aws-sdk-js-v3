import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  CreateModelExplainabilityJobDefinitionRequest,
  CreateModelExplainabilityJobDefinitionResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand,
  serializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand,
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

export type CreateModelExplainabilityJobDefinitionCommandInput = CreateModelExplainabilityJobDefinitionRequest;
export type CreateModelExplainabilityJobDefinitionCommandOutput = CreateModelExplainabilityJobDefinitionResponse &
  __MetadataBearer;

/**
 * <p>Creates the definition for a model explainability job.</p>
 */
export class CreateModelExplainabilityJobDefinitionCommand extends $Command<
  CreateModelExplainabilityJobDefinitionCommandInput,
  CreateModelExplainabilityJobDefinitionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateModelExplainabilityJobDefinitionCommandInput) {
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
  ): Handler<CreateModelExplainabilityJobDefinitionCommandInput, CreateModelExplainabilityJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelExplainabilityJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelExplainabilityJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateModelExplainabilityJobDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateModelExplainabilityJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateModelExplainabilityJobDefinitionCommandOutput> {
    return deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
