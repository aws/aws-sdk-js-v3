import {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig
} from "../StorageGatewayClient";
import {
  CreateNFSFileShareInput,
  CreateNFSFileShareOutput
} from "../models/index";
import {
  deserializeAws_json1_1CreateNFSFileShareCommand,
  serializeAws_json1_1CreateNFSFileShareCommand
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

export type CreateNFSFileShareCommandInput = CreateNFSFileShareInput;
export type CreateNFSFileShareCommandOutput = CreateNFSFileShareOutput &
  __MetadataBearer;

export class CreateNFSFileShareCommand extends $Command<
  CreateNFSFileShareCommandInput,
  CreateNFSFileShareCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNFSFileShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput> {
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
    input: CreateNFSFileShareCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateNFSFileShareCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNFSFileShareCommandOutput> {
    return deserializeAws_json1_1CreateNFSFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
