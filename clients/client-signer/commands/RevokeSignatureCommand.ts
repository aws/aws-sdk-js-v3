import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { RevokeSignatureRequest } from "../models/models_0";
import {
  deserializeAws_restJson1RevokeSignatureCommand,
  serializeAws_restJson1RevokeSignatureCommand,
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

export type RevokeSignatureCommandInput = RevokeSignatureRequest;
export type RevokeSignatureCommandOutput = __MetadataBearer;

/**
 * <p>Changes the state of a signing job to REVOKED. This indicates that the signature is no
 * 			longer valid.</p>
 */
export class RevokeSignatureCommand extends $Command<
  RevokeSignatureCommandInput,
  RevokeSignatureCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeSignatureCommandInput) {
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
  ): Handler<RevokeSignatureCommandInput, RevokeSignatureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "RevokeSignatureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeSignatureRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeSignatureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokeSignatureCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeSignatureCommandOutput> {
    return deserializeAws_restJson1RevokeSignatureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
