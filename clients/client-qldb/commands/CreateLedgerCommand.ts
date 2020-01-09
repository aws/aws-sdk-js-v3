import {
  QLDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../QLDBClient";
import { CreateLedgerRequest, CreateLedgerResponse } from "../models/index";
import {
  deserializeAws_restJson1_1CreateLedgerCommand,
  serializeAws_restJson1_1CreateLedgerCommand
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

export type CreateLedgerCommandInput = CreateLedgerRequest;
export type CreateLedgerCommandOutput = CreateLedgerResponse;

export class CreateLedgerCommand extends $Command<
  CreateLedgerCommandInput,
  CreateLedgerCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLedgerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLedgerCommandInput, CreateLedgerCommandOutput> {
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
    input: CreateLedgerCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateLedgerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateLedgerCommandOutput> {
    return deserializeAws_restJson1_1CreateLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
