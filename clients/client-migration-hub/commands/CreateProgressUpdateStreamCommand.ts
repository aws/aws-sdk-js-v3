import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { CreateProgressUpdateStreamRequest, CreateProgressUpdateStreamResult } from "../models/index";
import {
  deserializeAws_json1_1CreateProgressUpdateStreamCommand,
  serializeAws_json1_1CreateProgressUpdateStreamCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateProgressUpdateStreamCommandInput = CreateProgressUpdateStreamRequest;
export type CreateProgressUpdateStreamCommandOutput = CreateProgressUpdateStreamResult & __MetadataBearer;

export class CreateProgressUpdateStreamCommand extends $Command<
  CreateProgressUpdateStreamCommandInput,
  CreateProgressUpdateStreamCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProgressUpdateStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput> {
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

  private serialize(input: CreateProgressUpdateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProgressUpdateStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProgressUpdateStreamCommandOutput> {
    return deserializeAws_json1_1CreateProgressUpdateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
