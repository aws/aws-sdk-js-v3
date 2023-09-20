// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  SetUserMFAPreferenceRequest,
  SetUserMFAPreferenceRequestFilterSensitiveLog,
  SetUserMFAPreferenceResponse,
} from "../models/models_1";
import { de_SetUserMFAPreferenceCommand, se_SetUserMFAPreferenceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetUserMFAPreferenceCommand}.
 */
export interface SetUserMFAPreferenceCommandInput extends SetUserMFAPreferenceRequest {}
/**
 * @public
 *
 * The output of {@link SetUserMFAPreferenceCommand}.
 */
export interface SetUserMFAPreferenceCommandOutput extends SetUserMFAPreferenceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Set the user's multi-factor authentication (MFA) method preference, including which
 *             MFA factors are activated and if any are preferred. Only one factor can be set as
 *             preferred. The preferred MFA factor will be used to authenticate a user if multiple
 *             factors are activated. If multiple options are activated and no preference is set, a
 *             challenge to choose an MFA option will be returned during sign-in. If an MFA type is
 *             activated for a user, the user will be prompted for MFA during all sign-in attempts
 *             unless device tracking is turned on and the device has been trusted. If you want MFA to
 *             be applied selectively based on the assessed risk level of sign-in attempts, deactivate
 *             MFA for users and turn on Adaptive Authentication for the user pool.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *             this operation, you can't use IAM credentials to authorize requests, and you can't
 *             grant IAM permissions in policies. For more information about authorization models in
 *             Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserMFAPreferenceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserMFAPreferenceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUserMFAPreferenceRequest
 *   SMSMfaSettings: { // SMSMfaSettingsType
 *     Enabled: true || false,
 *     PreferredMfa: true || false,
 *   },
 *   SoftwareTokenMfaSettings: { // SoftwareTokenMfaSettingsType
 *     Enabled: true || false,
 *     PreferredMfa: true || false,
 *   },
 *   AccessToken: "STRING_VALUE", // required
 * };
 * const command = new SetUserMFAPreferenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetUserMFAPreferenceCommandInput - {@link SetUserMFAPreferenceCommandInput}
 * @returns {@link SetUserMFAPreferenceCommandOutput}
 * @see {@link SetUserMFAPreferenceCommandInput} for command's `input` shape.
 * @see {@link SetUserMFAPreferenceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class SetUserMFAPreferenceCommand extends $Command<
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
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
  constructor(readonly input: SetUserMFAPreferenceCommandInput) {
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
  ): Handler<SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetUserMFAPreferenceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetUserMFAPreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetUserMFAPreferenceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "SetUserMFAPreference",
      },
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
  private serialize(input: SetUserMFAPreferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetUserMFAPreferenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetUserMFAPreferenceCommandOutput> {
    return de_SetUserMFAPreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
