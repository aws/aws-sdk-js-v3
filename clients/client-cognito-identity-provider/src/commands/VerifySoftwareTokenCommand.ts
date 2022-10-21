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
  VerifySoftwareTokenRequest,
  VerifySoftwareTokenRequestFilterSensitiveLog,
  VerifySoftwareTokenResponse,
  VerifySoftwareTokenResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1VerifySoftwareTokenCommand,
  serializeAws_json1_1VerifySoftwareTokenCommand,
} from "../protocols/Aws_json1_1";

export interface VerifySoftwareTokenCommandInput extends VerifySoftwareTokenRequest {}
export interface VerifySoftwareTokenCommandOutput extends VerifySoftwareTokenResponse, __MetadataBearer {}

/**
 * <p>Use this API to register a user's entered time-based one-time password (TOTP) code and
 *             mark the user's software token MFA status as "verified" if successful. The request takes
 *             an access token or a session string, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new VerifySoftwareTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifySoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link VerifySoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class VerifySoftwareTokenCommand extends $Command<
  VerifySoftwareTokenCommandInput,
  VerifySoftwareTokenCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifySoftwareTokenCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "VerifySoftwareTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifySoftwareTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VerifySoftwareTokenResponseFilterSensitiveLog,
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
