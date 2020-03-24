import {
  CodeGuruProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeGuruProfilerClient";
import {
  PostAgentProfileRequest,
  PostAgentProfileResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1PostAgentProfileCommand,
  serializeAws_restJson1_1PostAgentProfileCommand
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

export type PostAgentProfileCommandInput = PostAgentProfileRequest;
export type PostAgentProfileCommandOutput = PostAgentProfileResponse;

export class PostAgentProfileCommand extends $Command<
  PostAgentProfileCommandInput,
  PostAgentProfileCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostAgentProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostAgentProfileCommandInput, PostAgentProfileCommandOutput> {
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
    input: PostAgentProfileCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1PostAgentProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PostAgentProfileCommandOutput> {
    return deserializeAws_restJson1_1PostAgentProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
