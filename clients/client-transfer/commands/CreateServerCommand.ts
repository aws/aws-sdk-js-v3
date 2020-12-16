import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { CreateServerRequest, CreateServerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateServerCommand,
  serializeAws_json1_1CreateServerCommand,
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

export type CreateServerCommandInput = CreateServerRequest;
export type CreateServerCommandOutput = CreateServerResponse & __MetadataBearer;

/**
 * <p>Instantiates an autoscaling virtual server based on the selected file transfer protocol in
 *       AWS. When you make updates to your file transfer protocol-enabled server or when you work with
 *       users, use the service-generated <code>ServerId</code> property that is assigned to the newly
 *       created server.</p>
 */
export class CreateServerCommand extends $Command<
  CreateServerCommandInput,
  CreateServerCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServerCommandInput, CreateServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "CreateServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateServerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServerCommandOutput> {
    return deserializeAws_json1_1CreateServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
