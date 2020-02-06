import {
  AccessanalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AccessanalyzerClient";
import {
  ListArchiveRulesRequest,
  ListArchiveRulesResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListArchiveRulesCommand,
  serializeAws_restJson1_1ListArchiveRulesCommand
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

export type ListArchiveRulesCommandInput = ListArchiveRulesRequest;
export type ListArchiveRulesCommandOutput = ListArchiveRulesResponse;

export class ListArchiveRulesCommand extends $Command<
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput,
  AccessanalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListArchiveRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessanalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput> {
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
    input: ListArchiveRulesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListArchiveRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListArchiveRulesCommandOutput> {
    return deserializeAws_restJson1_1ListArchiveRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
