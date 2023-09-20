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
  GetBackendAuthRequest,
  GetBackendAuthResponse,
  GetBackendAuthResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBackendAuthCommand, se_GetBackendAuthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBackendAuthCommand}.
 */
export interface GetBackendAuthCommandInput extends GetBackendAuthRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendAuthCommand}.
 */
export interface GetBackendAuthCommandOutput extends GetBackendAuthResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a backend auth details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetBackendAuthRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new GetBackendAuthCommand(input);
 * const response = await client.send(command);
 * // { // GetBackendAuthResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   ResourceConfig: { // CreateBackendAuthResourceConfig
 * //     AuthResources: "USER_POOL_ONLY" || "IDENTITY_POOL_AND_USER_POOL", // required
 * //     IdentityPoolConfigs: { // CreateBackendAuthIdentityPoolConfig
 * //       IdentityPoolName: "STRING_VALUE", // required
 * //       UnauthenticatedLogin: true || false, // required
 * //     },
 * //     Service: "COGNITO", // required
 * //     UserPoolConfigs: { // CreateBackendAuthUserPoolConfig
 * //       ForgotPassword: { // CreateBackendAuthForgotPasswordConfig
 * //         DeliveryMethod: "EMAIL" || "SMS", // required
 * //         EmailSettings: { // EmailSettings
 * //           EmailMessage: "STRING_VALUE",
 * //           EmailSubject: "STRING_VALUE",
 * //         },
 * //         SmsSettings: { // SmsSettings
 * //           SmsMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       Mfa: { // CreateBackendAuthMFAConfig
 * //         MFAMode: "ON" || "OFF" || "OPTIONAL", // required
 * //         Settings: { // Settings
 * //           MfaTypes: [ // ListOfMfaTypesElement
 * //             "SMS" || "TOTP",
 * //           ],
 * //           SmsMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       OAuth: { // CreateBackendAuthOAuthConfig
 * //         DomainPrefix: "STRING_VALUE",
 * //         OAuthGrantType: "CODE" || "IMPLICIT", // required
 * //         OAuthScopes: [ // ListOfOAuthScopesElement // required
 * //           "PHONE" || "EMAIL" || "OPENID" || "PROFILE" || "AWS_COGNITO_SIGNIN_USER_ADMIN",
 * //         ],
 * //         RedirectSignInURIs: [ // ListOf__string // required
 * //           "STRING_VALUE",
 * //         ],
 * //         RedirectSignOutURIs: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SocialProviderSettings: { // SocialProviderSettings
 * //           Facebook: { // BackendAuthSocialProviderConfig
 * //             ClientId: "STRING_VALUE",
 * //             ClientSecret: "STRING_VALUE",
 * //           },
 * //           Google: {
 * //             ClientId: "STRING_VALUE",
 * //             ClientSecret: "STRING_VALUE",
 * //           },
 * //           LoginWithAmazon: {
 * //             ClientId: "STRING_VALUE",
 * //             ClientSecret: "STRING_VALUE",
 * //           },
 * //           SignInWithApple: { // BackendAuthAppleProviderConfig
 * //             ClientId: "STRING_VALUE",
 * //             KeyId: "STRING_VALUE",
 * //             PrivateKey: "STRING_VALUE",
 * //             TeamId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       PasswordPolicy: { // CreateBackendAuthPasswordPolicyConfig
 * //         AdditionalConstraints: [ // ListOfAdditionalConstraintsElement
 * //           "REQUIRE_DIGIT" || "REQUIRE_LOWERCASE" || "REQUIRE_SYMBOL" || "REQUIRE_UPPERCASE",
 * //         ],
 * //         MinimumLength: Number("double"), // required
 * //       },
 * //       RequiredSignUpAttributes: [ // ListOfRequiredSignUpAttributesElement // required
 * //         "ADDRESS" || "BIRTHDATE" || "EMAIL" || "FAMILY_NAME" || "GENDER" || "GIVEN_NAME" || "LOCALE" || "MIDDLE_NAME" || "NAME" || "NICKNAME" || "PHONE_NUMBER" || "PICTURE" || "PREFERRED_USERNAME" || "PROFILE" || "UPDATED_AT" || "WEBSITE" || "ZONE_INFO",
 * //       ],
 * //       SignInMethod: "EMAIL" || "EMAIL_AND_PHONE_NUMBER" || "PHONE_NUMBER" || "USERNAME", // required
 * //       UserPoolName: "STRING_VALUE", // required
 * //       VerificationMessage: { // CreateBackendAuthVerificationMessageConfig
 * //         DeliveryMethod: "EMAIL" || "SMS", // required
 * //         EmailSettings: {
 * //           EmailMessage: "STRING_VALUE",
 * //           EmailSubject: "STRING_VALUE",
 * //         },
 * //         SmsSettings: {
 * //           SmsMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   ResourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackendAuthCommandInput - {@link GetBackendAuthCommandInput}
 * @returns {@link GetBackendAuthCommandOutput}
 * @see {@link GetBackendAuthCommandInput} for command's `input` shape.
 * @see {@link GetBackendAuthCommandOutput} for command's `response` shape.
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
export class GetBackendAuthCommand extends $Command<
  GetBackendAuthCommandInput,
  GetBackendAuthCommandOutput,
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
  constructor(readonly input: GetBackendAuthCommandInput) {
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
  ): Handler<GetBackendAuthCommandInput, GetBackendAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackendAuthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "GetBackendAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetBackendAuthResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyBackend",
        operation: "GetBackendAuth",
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
  private serialize(input: GetBackendAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBackendAuthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackendAuthCommandOutput> {
    return de_GetBackendAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
