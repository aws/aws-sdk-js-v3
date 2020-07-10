import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateDirectoryConfigRequest, CreateDirectoryConfigResult } from "../models/index";
import {
  deserializeAws_json1_1CreateDirectoryConfigCommand,
  serializeAws_json1_1CreateDirectoryConfigCommand,
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

export type CreateDirectoryConfigCommandInput = CreateDirectoryConfigRequest;
export type CreateDirectoryConfigCommandOutput = CreateDirectoryConfigResult & __MetadataBearer;

export class CreateDirectoryConfigCommand extends $Command<
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDirectoryConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDirectoryConfigCommandInput, CreateDirectoryConfigCommandOutput> {
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

  private serialize(input: CreateDirectoryConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectoryConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDirectoryConfigCommandOutput> {
    return deserializeAws_json1_1CreateDirectoryConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
