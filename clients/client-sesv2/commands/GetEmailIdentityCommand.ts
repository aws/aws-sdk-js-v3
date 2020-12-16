import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetEmailIdentityRequest, GetEmailIdentityResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEmailIdentityCommand,
  serializeAws_restJson1GetEmailIdentityCommand,
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

export type GetEmailIdentityCommandInput = GetEmailIdentityRequest;
export type GetEmailIdentityCommandOutput = GetEmailIdentityResponse & __MetadataBearer;

/**
 * <p>Provides information about a specific identity, including the identity's verification
 *             status, sending authorization policies, its DKIM authentication status, and its custom
 *             Mail-From settings.</p>
 */
export class GetEmailIdentityCommand extends $Command<
  GetEmailIdentityCommandInput,
  GetEmailIdentityCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEmailIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetEmailIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEmailIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEmailIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEmailIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEmailIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEmailIdentityCommandOutput> {
    return deserializeAws_restJson1GetEmailIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
