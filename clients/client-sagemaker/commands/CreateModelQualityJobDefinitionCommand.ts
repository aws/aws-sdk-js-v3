import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelQualityJobDefinitionRequest, CreateModelQualityJobDefinitionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateModelQualityJobDefinitionCommand,
  serializeAws_json1_1CreateModelQualityJobDefinitionCommand,
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

export type CreateModelQualityJobDefinitionCommandInput = CreateModelQualityJobDefinitionRequest;
export type CreateModelQualityJobDefinitionCommandOutput = CreateModelQualityJobDefinitionResponse & __MetadataBearer;

/**
 * <p>Creates a definition for a job that monitors model quality and drift. For information
 *          about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
 */
export class CreateModelQualityJobDefinitionCommand extends $Command<
  CreateModelQualityJobDefinitionCommandInput,
  CreateModelQualityJobDefinitionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateModelQualityJobDefinitionCommandInput) {
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
  ): Handler<CreateModelQualityJobDefinitionCommandInput, CreateModelQualityJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelQualityJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelQualityJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateModelQualityJobDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateModelQualityJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateModelQualityJobDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateModelQualityJobDefinitionCommandOutput> {
    return deserializeAws_json1_1CreateModelQualityJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
