import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AssociateSoftwareTokenRequest, AssociateSoftwareTokenResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateSoftwareTokenCommand,
  serializeAws_json1_1AssociateSoftwareTokenCommand,
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

export type AssociateSoftwareTokenCommandInput = AssociateSoftwareTokenRequest;
export type AssociateSoftwareTokenCommandOutput = AssociateSoftwareTokenResponse & __MetadataBearer;

/**
 * <p>Returns a unique generated shared secret key code for the user account. The request
 *             takes an access token or a session string, but not both.</p>
 */
export class AssociateSoftwareTokenCommand extends $Command<
  AssociateSoftwareTokenCommandInput,
  AssociateSoftwareTokenCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSoftwareTokenCommandInput) {
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
  ): Handler<AssociateSoftwareTokenCommandInput, AssociateSoftwareTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AssociateSoftwareTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSoftwareTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSoftwareTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSoftwareTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateSoftwareTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSoftwareTokenCommandOutput> {
    return deserializeAws_json1_1AssociateSoftwareTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
