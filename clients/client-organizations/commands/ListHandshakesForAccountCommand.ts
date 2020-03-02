import {
  OrganizationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../OrganizationsClient";
import {
  ListHandshakesForAccountRequest,
  ListHandshakesForAccountResponse
} from "../models/index";
import {
  deserializeAws_json1_1ListHandshakesForAccountCommand,
  serializeAws_json1_1ListHandshakesForAccountCommand
} from "../protocols/Aws_json1_1";
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type ListHandshakesForAccountCommandInput = ListHandshakesForAccountRequest;
export type ListHandshakesForAccountCommandOutput = ListHandshakesForAccountResponse &
  __MetadataBearer;

export class ListHandshakesForAccountCommand extends $Command<
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHandshakesForAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListHandshakesForAccountCommandInput,
    ListHandshakesForAccountCommandOutput
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
    input: ListHandshakesForAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHandshakesForAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHandshakesForAccountCommandOutput> {
    return deserializeAws_json1_1ListHandshakesForAccountCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
