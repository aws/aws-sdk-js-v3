import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { CancelSigningProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CancelSigningProfileCommand,
  serializeAws_restJson1CancelSigningProfileCommand,
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

export type CancelSigningProfileCommandInput = CancelSigningProfileRequest;
export type CancelSigningProfileCommandOutput = __MetadataBearer;

/**
 * <p>Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>.
 * 			A canceled profile is still viewable with the <code>ListSigningProfiles</code>
 * 			operation, but it cannot perform new signing jobs, and is deleted two years after
 * 			cancelation.</p>
 */
export class CancelSigningProfileCommand extends $Command<
  CancelSigningProfileCommandInput,
  CancelSigningProfileCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelSigningProfileCommandInput) {
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
  ): Handler<CancelSigningProfileCommandInput, CancelSigningProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "CancelSigningProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelSigningProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelSigningProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelSigningProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelSigningProfileCommandOutput> {
    return deserializeAws_restJson1CancelSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
