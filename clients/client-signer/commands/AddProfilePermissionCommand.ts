import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { AddProfilePermissionRequest, AddProfilePermissionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AddProfilePermissionCommand,
  serializeAws_restJson1AddProfilePermissionCommand,
} from "../protocols/Aws_restJson1";
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

export type AddProfilePermissionCommandInput = AddProfilePermissionRequest;
export type AddProfilePermissionCommandOutput = AddProfilePermissionResponse & __MetadataBearer;

/**
 * <p>Adds cross-account permissions to a signing profile.</p>
 */
export class AddProfilePermissionCommand extends $Command<
  AddProfilePermissionCommandInput,
  AddProfilePermissionCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddProfilePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddProfilePermissionCommandInput, AddProfilePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "AddProfilePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddProfilePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddProfilePermissionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddProfilePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddProfilePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddProfilePermissionCommandOutput> {
    return deserializeAws_restJson1AddProfilePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
