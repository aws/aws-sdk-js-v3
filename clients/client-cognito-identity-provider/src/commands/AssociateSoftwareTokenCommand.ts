// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  AssociateSoftwareTokenRequest,
  AssociateSoftwareTokenRequestFilterSensitiveLog,
  AssociateSoftwareTokenResponse,
  AssociateSoftwareTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateSoftwareTokenCommand,
  serializeAws_json1_1AssociateSoftwareTokenCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateSoftwareTokenCommandInput extends AssociateSoftwareTokenRequest {}
export interface AssociateSoftwareTokenCommandOutput extends AssociateSoftwareTokenResponse, __MetadataBearer {}

/**
 * <p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA)
 *             for a user, with a unique private key that Amazon Cognito generates and returns in the API
 *             response. You can authorize an <code>AssociateSoftwareToken</code> request with either
 *             the user's access token, or a session string from a challenge response that you received
 *             from Amazon Cognito.</p>
 *         <note>
 *             <p>Amazon Cognito disassociates an existing software token when you verify the new token in a
 *                     <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software
 *                 token and your user pool doesn't require MFA, the user can then authenticate with
 *                 user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito
 *                 generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge
 *                 each time your user signs. Complete setup with <code>AssociateSoftwareToken</code>
 *                 and <code>VerifySoftwareToken</code>.</p>
 *             <p>After you set up software token MFA for your user, Amazon Cognito generates a
 *                     <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to
 *                 this challenge with your user's TOTP.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AssociateSoftwareTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link AssociateSoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class AssociateSoftwareTokenCommand extends $Command<
  AssociateSoftwareTokenCommandInput,
  AssociateSoftwareTokenCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSoftwareTokenCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AssociateSoftwareTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSoftwareTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateSoftwareTokenResponseFilterSensitiveLog,
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
