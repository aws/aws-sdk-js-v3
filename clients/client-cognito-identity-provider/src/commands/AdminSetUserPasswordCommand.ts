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
  AdminSetUserPasswordRequest,
  AdminSetUserPasswordRequestFilterSensitiveLog,
  AdminSetUserPasswordResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AdminSetUserPasswordCommand,
  serializeAws_json1_1AdminSetUserPasswordCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AdminSetUserPasswordCommand}.
 */
export interface AdminSetUserPasswordCommandInput extends AdminSetUserPasswordRequest {}
/**
 * @public
 *
 * The output of {@link AdminSetUserPasswordCommand}.
 */
export interface AdminSetUserPasswordCommandOutput extends AdminSetUserPasswordResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets the specified user's password in a user pool as an administrator. Works on any
 *             user. </p>
 *         <p>The password can be temporary or permanent. If it is temporary, the user status enters
 *             the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the
 *             InitiateAuth/AdminInitiateAuth response will contain the
 *                 <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it
 *             expires, the user won't be able to sign in, and an administrator must reset their
 *             password. </p>
 *         <p>Once the user has set a new password, or the password is permanent, the user status is
 *             set to <code>Confirmed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminSetUserPasswordRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 *   Permanent: true || false,
 * };
 * const command = new AdminSetUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AdminSetUserPasswordCommandInput - {@link AdminSetUserPasswordCommandInput}
 * @returns {@link AdminSetUserPasswordCommandOutput}
 * @see {@link AdminSetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid password.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 *
 */
export class AdminSetUserPasswordCommand extends $Command<
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: AdminSetUserPasswordCommandInput) {
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
  ): Handler<AdminSetUserPasswordCommandInput, AdminSetUserPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminSetUserPasswordCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminSetUserPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminSetUserPasswordRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: AdminSetUserPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminSetUserPasswordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminSetUserPasswordCommandOutput> {
    return deserializeAws_json1_1AdminSetUserPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
