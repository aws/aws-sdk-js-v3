import {
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DynamoDBClient";
import {
  UpdateGlobalTableInput,
  UpdateGlobalTableOutput
} from "../models/index";
import {
  deserializeAws_json1_0UpdateGlobalTableCommand,
  serializeAws_json1_0UpdateGlobalTableCommand
} from "../protocols/Aws_json1_0";
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

export type UpdateGlobalTableCommandInput = UpdateGlobalTableInput;
export type UpdateGlobalTableCommandOutput = UpdateGlobalTableOutput &
  __MetadataBearer;

export class UpdateGlobalTableCommand extends $Command<
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGlobalTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput> {
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
    input: UpdateGlobalTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateGlobalTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateGlobalTableCommandOutput> {
    return deserializeAws_json1_0UpdateGlobalTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
