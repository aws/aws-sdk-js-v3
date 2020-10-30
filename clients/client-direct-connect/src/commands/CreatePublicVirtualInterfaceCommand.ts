import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePublicVirtualInterfaceCommand,
  serializeAws_json1_1CreatePublicVirtualInterfaceCommand,
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

export type CreatePublicVirtualInterfaceCommandInput = CreatePublicVirtualInterfaceRequest;
export type CreatePublicVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;

export class CreatePublicVirtualInterfaceCommand extends $Command<
  CreatePublicVirtualInterfaceCommandInput,
  CreatePublicVirtualInterfaceCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePublicVirtualInterfaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePublicVirtualInterfaceCommandInput, CreatePublicVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreatePublicVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePublicVirtualInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VirtualInterface.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePublicVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePublicVirtualInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePublicVirtualInterfaceCommandOutput> {
    return deserializeAws_json1_1CreatePublicVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
