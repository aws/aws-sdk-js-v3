import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { RecognizeCelebritiesRequest, RecognizeCelebritiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RecognizeCelebritiesCommand,
  serializeAws_json1_1RecognizeCelebritiesCommand,
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

export type RecognizeCelebritiesCommandInput = RecognizeCelebritiesRequest;
export type RecognizeCelebritiesCommandOutput = RecognizeCelebritiesResponse & __MetadataBearer;

export class RecognizeCelebritiesCommand extends $Command<
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecognizeCelebritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecognizeCelebritiesCommandInput, RecognizeCelebritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "RecognizeCelebritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecognizeCelebritiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RecognizeCelebritiesResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecognizeCelebritiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RecognizeCelebritiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecognizeCelebritiesCommandOutput> {
    return deserializeAws_json1_1RecognizeCelebritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
