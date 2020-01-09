import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TextractClientResolvedConfig,
} from "../TextractClient";
import {
  StartDocumentTextDetectionRequest,
  StartDocumentTextDetectionResponse,
} from "../models/index";
import {
  deserializeAws_json1_1StartDocumentTextDetectionCommand,
  serializeAws_json1_1StartDocumentTextDetectionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type StartDocumentTextDetectionCommandInput = StartDocumentTextDetectionRequest;
export type StartDocumentTextDetectionCommandOutput = StartDocumentTextDetectionResponse;

export class StartDocumentTextDetectionCommand extends $Command<StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput, TextractClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDocumentTextDetectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartDocumentTextDetectionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDocumentTextDetectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<StartDocumentTextDetectionCommandOutput> {
    return deserializeAws_json1_1StartDocumentTextDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
