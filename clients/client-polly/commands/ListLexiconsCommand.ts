import {
  PollyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PollyClient";
import { ListLexiconsInput, ListLexiconsOutput } from "../models/index";
import {
  deserializeAws_restJson1_1ListLexiconsCommand,
  serializeAws_restJson1_1ListLexiconsCommand
} from "../protocols/Aws_restJson1_1";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListLexiconsCommandInput = ListLexiconsInput;
export type ListLexiconsCommandOutput = ListLexiconsOutput;

export class ListLexiconsCommand extends $Command<
  ListLexiconsCommandInput,
  ListLexiconsCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLexiconsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLexiconsCommandInput, ListLexiconsCommandOutput> {
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
    input: ListLexiconsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListLexiconsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListLexiconsCommandOutput> {
    return deserializeAws_restJson1_1ListLexiconsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
