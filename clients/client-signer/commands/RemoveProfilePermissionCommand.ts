import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { RemoveProfilePermissionRequest, RemoveProfilePermissionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveProfilePermissionCommand,
  serializeAws_restJson1RemoveProfilePermissionCommand,
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

export type RemoveProfilePermissionCommandInput = RemoveProfilePermissionRequest;
export type RemoveProfilePermissionCommandOutput = RemoveProfilePermissionResponse & __MetadataBearer;

/**
 * <p>Removes cross-account permissions from a signing profile.</p>
 */
export class RemoveProfilePermissionCommand extends $Command<
  RemoveProfilePermissionCommandInput,
  RemoveProfilePermissionCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveProfilePermissionCommandInput) {
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
  ): Handler<RemoveProfilePermissionCommandInput, RemoveProfilePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "RemoveProfilePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveProfilePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveProfilePermissionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveProfilePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveProfilePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveProfilePermissionCommandOutput> {
    return deserializeAws_restJson1RemoveProfilePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
