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

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import {
  UpdateBackendAuthRequest,
  UpdateBackendAuthRequestFilterSensitiveLog,
  UpdateBackendAuthResponse,
} from "../models/models_0";
import { de_UpdateBackendAuthCommand, se_UpdateBackendAuthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBackendAuthCommand}.
 */
export interface UpdateBackendAuthCommandInput extends UpdateBackendAuthRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBackendAuthCommand}.
 */
export interface UpdateBackendAuthCommandOutput extends UpdateBackendAuthResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // UpdateBackendAuthRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: { // UpdateBackendAuthResourceConfig
 *     AuthResources: "USER_POOL_ONLY" || "IDENTITY_POOL_AND_USER_POOL", // required
 *     IdentityPoolConfigs: { // UpdateBackendAuthIdentityPoolConfig
 *       UnauthenticatedLogin: true || false,
 *     },
 *     Service: "COGNITO", // required
 *     UserPoolConfigs: { // UpdateBackendAuthUserPoolConfig
 *       ForgotPassword: { // UpdateBackendAuthForgotPasswordConfig
 *         DeliveryMethod: "EMAIL" || "SMS",
 *         EmailSettings: { // EmailSettings
 *           EmailMessage: "STRING_VALUE",
 *           EmailSubject: "STRING_VALUE",
 *         },
 *         SmsSettings: { // SmsSettings
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *       Mfa: { // UpdateBackendAuthMFAConfig
 *         MFAMode: "ON" || "OFF" || "OPTIONAL",
 *         Settings: { // Settings
 *           MfaTypes: [ // ListOfMfaTypesElement
 *             "SMS" || "TOTP",
 *           ],
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *       OAuth: { // UpdateBackendAuthOAuthConfig
 *         DomainPrefix: "STRING_VALUE",
 *         OAuthGrantType: "CODE" || "IMPLICIT",
 *         OAuthScopes: [ // ListOfOAuthScopesElement
 *           "PHONE" || "EMAIL" || "OPENID" || "PROFILE" || "AWS_COGNITO_SIGNIN_USER_ADMIN",
 *         ],
 *         RedirectSignInURIs: [ // ListOf__string
 *           "STRING_VALUE",
 *         ],
 *         RedirectSignOutURIs: [
 *           "STRING_VALUE",
 *         ],
 *         SocialProviderSettings: { // SocialProviderSettings
 *           Facebook: { // BackendAuthSocialProviderConfig
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           Google: {
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           LoginWithAmazon: {
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           SignInWithApple: { // BackendAuthAppleProviderConfig
 *             ClientId: "STRING_VALUE",
 *             KeyId: "STRING_VALUE",
 *             PrivateKey: "STRING_VALUE",
 *             TeamId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       PasswordPolicy: { // UpdateBackendAuthPasswordPolicyConfig
 *         AdditionalConstraints: [ // ListOfAdditionalConstraintsElement
 *           "REQUIRE_DIGIT" || "REQUIRE_LOWERCASE" || "REQUIRE_SYMBOL" || "REQUIRE_UPPERCASE",
 *         ],
 *         MinimumLength: Number("double"),
 *       },
 *       VerificationMessage: { // UpdateBackendAuthVerificationMessageConfig
 *         DeliveryMethod: "EMAIL" || "SMS", // required
 *         EmailSettings: {
 *           EmailMessage: "STRING_VALUE",
 *           EmailSubject: "STRING_VALUE",
 *         },
 *         SmsSettings: {
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new UpdateBackendAuthCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackendAuthResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBackendAuthCommandInput - {@link UpdateBackendAuthCommandInput}
 * @returns {@link UpdateBackendAuthCommandOutput}
 * @see {@link UpdateBackendAuthCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 */
export class UpdateBackendAuthCommand extends $Command<
  UpdateBackendAuthCommandInput,
  UpdateBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
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
  constructor(readonly input: UpdateBackendAuthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBackendAuthCommandInput, UpdateBackendAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBackendAuthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "UpdateBackendAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBackendAuthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyBackend",
        operation: "UpdateBackendAuth",
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
  private serialize(input: UpdateBackendAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBackendAuthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBackendAuthCommandOutput> {
    return de_UpdateBackendAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
