import {
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
} from "../XRayClient";
import { GetTraceGraphRequest, GetTraceGraphResult } from "../models/index";
import {
  deserializeAws_restJson1_1GetTraceGraphCommand,
  serializeAws_restJson1_1GetTraceGraphCommand
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

export type GetTraceGraphCommandInput = GetTraceGraphRequest;
export type GetTraceGraphCommandOutput = GetTraceGraphResult;

export class GetTraceGraphCommand extends $Command<
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTraceGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTraceGraphCommandInput, GetTraceGraphCommandOutput> {
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
    input: GetTraceGraphCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetTraceGraphCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetTraceGraphCommandOutput> {
    return deserializeAws_restJson1_1GetTraceGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
