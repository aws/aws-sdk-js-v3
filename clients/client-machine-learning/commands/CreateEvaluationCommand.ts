import {
  MachineLearningClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MachineLearningClient";
import { CreateEvaluationInput, CreateEvaluationOutput } from "../models/index";
import {
  deserializeAws_json1_1CreateEvaluationCommand,
  serializeAws_json1_1CreateEvaluationCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type CreateEvaluationCommandInput = CreateEvaluationInput;
export type CreateEvaluationCommandOutput = CreateEvaluationOutput &
  __MetadataBearer;

export class CreateEvaluationCommand extends $Command<
  CreateEvaluationCommandInput,
  CreateEvaluationCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEvaluationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEvaluationCommandInput, CreateEvaluationCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateEvaluationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEvaluationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEvaluationCommandOutput> {
    return deserializeAws_json1_1CreateEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
