import {
  CodePipelineClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodePipelineClient";
import { ListWebhooksInput, ListWebhooksOutput } from "../models/index";
import {
  deserializeAws_json1_1ListWebhooksCommand,
  serializeAws_json1_1ListWebhooksCommand
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

export type ListWebhooksCommandInput = ListWebhooksInput;
export type ListWebhooksCommandOutput = ListWebhooksOutput & __MetadataBearer;

export class ListWebhooksCommand extends $Command<
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWebhooksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWebhooksCommandInput, ListWebhooksCommandOutput> {
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
    input: ListWebhooksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListWebhooksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWebhooksCommandOutput> {
    return deserializeAws_json1_1ListWebhooksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
