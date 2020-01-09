import {
  DLMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DLMClient";
import {
  CreateLifecyclePolicyRequest,
  CreateLifecyclePolicyResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateLifecyclePolicyCommand,
  serializeAws_restJson1_1CreateLifecyclePolicyCommand
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

export type CreateLifecyclePolicyCommandInput = CreateLifecyclePolicyRequest;
export type CreateLifecyclePolicyCommandOutput = CreateLifecyclePolicyResponse;

export class CreateLifecyclePolicyCommand extends $Command<
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
  DLMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLifecyclePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateLifecyclePolicyCommandInput,
    CreateLifecyclePolicyCommandOutput
  > {
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
    input: CreateLifecyclePolicyCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateLifecyclePolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateLifecyclePolicyCommandOutput> {
    return deserializeAws_restJson1_1CreateLifecyclePolicyCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
