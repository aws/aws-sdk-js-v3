import {
  SESv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESv2Client";
import {
  GetBlacklistReportsRequest,
  GetBlacklistReportsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetBlacklistReportsCommand,
  serializeAws_restJson1_1GetBlacklistReportsCommand
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

export type GetBlacklistReportsCommandInput = GetBlacklistReportsRequest;
export type GetBlacklistReportsCommandOutput = GetBlacklistReportsResponse;

export class GetBlacklistReportsCommand extends $Command<
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBlacklistReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetBlacklistReportsCommandInput,
    GetBlacklistReportsCommandOutput
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
    input: GetBlacklistReportsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetBlacklistReportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetBlacklistReportsCommandOutput> {
    return deserializeAws_restJson1_1GetBlacklistReportsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
