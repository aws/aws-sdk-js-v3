import {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import { PostTextRequest, PostTextResponse } from "../models/index";
import {
  deserializeAws_restJson1PostTextCommand,
  serializeAws_restJson1PostTextCommand,
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

export type PostTextCommandInput = PostTextRequest;
export type PostTextCommandOutput = PostTextResponse & __MetadataBearer;

export class PostTextCommand extends $Command<
  PostTextCommandInput,
  PostTextCommandOutput,
  LexRuntimeServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostTextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostTextCommandInput, PostTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PostTextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostTextCommandOutput> {
    return deserializeAws_restJson1PostTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
