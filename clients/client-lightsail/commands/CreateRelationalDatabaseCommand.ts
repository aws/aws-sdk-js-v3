import {
  LightsailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LightsailClient";
import {
  CreateRelationalDatabaseRequest,
  CreateRelationalDatabaseResult
} from "../models/index";
import {
  deserializeAws_json1_1CreateRelationalDatabaseCommand,
  serializeAws_json1_1CreateRelationalDatabaseCommand
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

export type CreateRelationalDatabaseCommandInput = CreateRelationalDatabaseRequest;
export type CreateRelationalDatabaseCommandOutput = CreateRelationalDatabaseResult &
  __MetadataBearer;

export class CreateRelationalDatabaseCommand extends $Command<
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRelationalDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateRelationalDatabaseCommandInput,
    CreateRelationalDatabaseCommandOutput
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
    input: CreateRelationalDatabaseCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRelationalDatabaseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRelationalDatabaseCommandOutput> {
    return deserializeAws_json1_1CreateRelationalDatabaseCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
