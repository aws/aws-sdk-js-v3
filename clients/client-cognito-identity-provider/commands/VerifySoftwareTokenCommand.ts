import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { VerifySoftwareTokenRequest, VerifySoftwareTokenResponse } from "../models/models_1";
import {
  deserializeAws_json1_1VerifySoftwareTokenCommand,
  serializeAws_json1_1VerifySoftwareTokenCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type VerifySoftwareTokenCommandInput = VerifySoftwareTokenRequest;
export type VerifySoftwareTokenCommandOutput = VerifySoftwareTokenResponse & __MetadataBearer;

/**
 * <p>Use this API to register a user's entered TOTP code and mark the user's software token
 *             MFA status as "verified" if successful. The request takes an access token or a session
 *             string, but not both.</p>
 */
export class VerifySoftwareTokenCommand extends $Command<
  VerifySoftwareTokenCommandInput,
  VerifySoftwareTokenCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifySoftwareTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "VerifySoftwareTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifySoftwareTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VerifySoftwareTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifySoftwareTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1VerifySoftwareTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifySoftwareTokenCommandOutput> {
    return deserializeAws_json1_1VerifySoftwareTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
