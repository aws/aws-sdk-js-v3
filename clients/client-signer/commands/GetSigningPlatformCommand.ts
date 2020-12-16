import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { GetSigningPlatformRequest, GetSigningPlatformResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSigningPlatformCommand,
  serializeAws_restJson1GetSigningPlatformCommand,
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

export type GetSigningPlatformCommandInput = GetSigningPlatformRequest;
export type GetSigningPlatformCommandOutput = GetSigningPlatformResponse & __MetadataBearer;

/**
 * <p>Returns information on a specific signing platform.</p>
 */
export class GetSigningPlatformCommand extends $Command<
  GetSigningPlatformCommandInput,
  GetSigningPlatformCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSigningPlatformCommandInput) {
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
  ): Handler<GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "GetSigningPlatformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSigningPlatformRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSigningPlatformResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSigningPlatformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSigningPlatformCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSigningPlatformCommandOutput> {
    return deserializeAws_restJson1GetSigningPlatformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
