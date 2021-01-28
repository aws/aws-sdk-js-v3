import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateLanguageModelRequest, CreateLanguageModelResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLanguageModelCommand,
  serializeAws_json1_1CreateLanguageModelCommand,
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

export type CreateLanguageModelCommandInput = CreateLanguageModelRequest;
export type CreateLanguageModelCommandOutput = CreateLanguageModelResponse & __MetadataBearer;

/**
 * <p>Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your
 *             input files. The time it takes to create your model depends on the size of your training
 *             data.</p>
 */
export class CreateLanguageModelCommand extends $Command<
  CreateLanguageModelCommandInput,
  CreateLanguageModelCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLanguageModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLanguageModelCommandInput, CreateLanguageModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateLanguageModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLanguageModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLanguageModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLanguageModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLanguageModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLanguageModelCommandOutput> {
    return deserializeAws_json1_1CreateLanguageModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
