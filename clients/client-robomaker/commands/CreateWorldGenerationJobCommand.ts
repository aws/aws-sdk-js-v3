import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CreateWorldGenerationJobRequest, CreateWorldGenerationJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorldGenerationJobCommand,
  serializeAws_restJson1CreateWorldGenerationJobCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateWorldGenerationJobCommandInput = CreateWorldGenerationJobRequest;
export type CreateWorldGenerationJobCommandOutput = CreateWorldGenerationJobResponse & __MetadataBearer;

/**
 * <p>Creates worlds using the specified template.</p>
 */
export class CreateWorldGenerationJobCommand extends $Command<
  CreateWorldGenerationJobCommandInput,
  CreateWorldGenerationJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorldGenerationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorldGenerationJobCommandInput, CreateWorldGenerationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateWorldGenerationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorldGenerationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorldGenerationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorldGenerationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorldGenerationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorldGenerationJobCommandOutput> {
    return deserializeAws_restJson1CreateWorldGenerationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
