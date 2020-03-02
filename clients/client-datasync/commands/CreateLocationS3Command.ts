import {
  DataSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataSyncClient";
import {
  CreateLocationS3Request,
  CreateLocationS3Response
} from "../models/index";
import {
  deserializeAws_json1_1CreateLocationS3Command,
  serializeAws_json1_1CreateLocationS3Command
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

export type CreateLocationS3CommandInput = CreateLocationS3Request;
export type CreateLocationS3CommandOutput = CreateLocationS3Response &
  __MetadataBearer;

export class CreateLocationS3Command extends $Command<
  CreateLocationS3CommandInput,
  CreateLocationS3CommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationS3CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationS3CommandInput, CreateLocationS3CommandOutput> {
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
    input: CreateLocationS3CommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationS3Command(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLocationS3CommandOutput> {
    return deserializeAws_json1_1CreateLocationS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
