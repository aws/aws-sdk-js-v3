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
  InitiateAuthRequest,
  InitiateAuthRequestFilterSensitiveLog,
  InitiateAuthResponse,
  InitiateAuthResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_InitiateAuthCommand, se_InitiateAuthCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InitiateAuthCommand}.
 */
export interface InitiateAuthCommandInput extends InitiateAuthRequest {}
/**
 * @public
 *
 * The output of {@link InitiateAuthCommand}.
 */
export interface InitiateAuthCommandOutput extends InitiateAuthResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user
 *             with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *             this operation, you can't use IAM credentials to authorize requests, and you can't
 *             grant IAM permissions in policies. For more information about authorization models in
 *             Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p>
 *          </note>
 *          <note>
 *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 *                 require you to register an origination phone number before you can send SMS messages
 *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
 *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
 *                 in.</p>
 *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
 *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
 *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
 *                         mode</a>
 *                </i>, you can send messages only to verified phone
 *                 numbers. After you test your app while in the sandbox environment, you can move out
 *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
 *                     Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, InitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // InitiateAuthRequest
 *   AuthFlow: "USER_SRP_AUTH" || "REFRESH_TOKEN_AUTH" || "REFRESH_TOKEN" || "CUSTOM_AUTH" || "ADMIN_NO_SRP_AUTH" || "USER_PASSWORD_AUTH" || "ADMIN_USER_PASSWORD_AUTH", // required
 *   AuthParameters: { // AuthParametersType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientId: "STRING_VALUE", // required
 *   AnalyticsMetadata: { // AnalyticsMetadataType
 *     AnalyticsEndpointId: "STRING_VALUE",
 *   },
 *   UserContextData: { // UserContextDataType
 *     IpAddress: "STRING_VALUE",
 *     EncodedData: "STRING_VALUE",
 *   },
 * };
 * const command = new InitiateAuthCommand(input);
 * const response = await client.send(command);
 * // { // InitiateAuthResponse
 * //   ChallengeName: "SMS_MFA" || "SOFTWARE_TOKEN_MFA" || "SELECT_MFA_TYPE" || "MFA_SETUP" || "PASSWORD_VERIFIER" || "CUSTOM_CHALLENGE" || "DEVICE_SRP_AUTH" || "DEVICE_PASSWORD_VERIFIER" || "ADMIN_NO_SRP_AUTH" || "NEW_PASSWORD_REQUIRED",
 * //   Session: "STRING_VALUE",
 * //   ChallengeParameters: { // ChallengeParametersType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   AuthenticationResult: { // AuthenticationResultType
 * //     AccessToken: "STRING_VALUE",
 * //     ExpiresIn: Number("int"),
 * //     TokenType: "STRING_VALUE",
 * //     RefreshToken: "STRING_VALUE",
 * //     IdToken: "STRING_VALUE",
 * //     NewDeviceMetadata: { // NewDeviceMetadataType
 * //       DeviceKey: "STRING_VALUE",
 * //       DeviceGroupKey: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InitiateAuthCommandInput - {@link InitiateAuthCommandInput}
 * @returns {@link InitiateAuthCommandOutput}
 * @see {@link InitiateAuthCommandInput} for command's `input` shape.
 * @see {@link InitiateAuthCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidLambdaResponseException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidSmsRoleAccessPolicyException} (client fault)
 *  <p>This exception is returned when the role provided for SMS configuration doesn't have
 *             permission to publish using Amazon SNS.</p>
 *
 * @throws {@link InvalidSmsRoleTrustRelationshipException} (client fault)
 *  <p>This exception is thrown when the trust relationship is not valid for the role
 *             provided for SMS configuration. This can happen if you don't trust
 *                 <code>cognito-idp.amazonaws.com</code> or the external ID provided in the role does
 *             not match what is provided in the SMS configuration for the user pool.</p>
 *
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *  <p>This exception is thrown when the user pool configuration is not valid.</p>
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UnexpectedLambdaException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an unexpected exception with
 *             Lambda.</p>
 *
 * @throws {@link UserLambdaValidationException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception
 *             with the Lambda service.</p>
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
 * @example Example username and password sign-in for a user who has TOTP MFA
 * ```javascript
 * // The following example signs in the user mytestuser with analytics data, client metadata, and user context data for advanced security.
 * const input = {
 *   "AnalyticsMetadata": {
 *     "AnalyticsEndpointId": "d70b2ba36a8c4dc5a04a0451a31a1e12"
 *   },
 *   "AuthFlow": "USER_PASSWORD_AUTH",
 *   "AuthParameters": {
 *     "PASSWORD": "This-is-my-test-99!",
 *     "SECRET_HASH": "oT5ZkS8ctnrhYeeGsGTvOzPhoc/Jd1cO5fueBWFVmp8=",
 *     "USERNAME": "mytestuser"
 *   },
 *   "ClientId": "1example23456789",
 *   "ClientMetadata": {
 *     "MyTestKey": "MyTestValue"
 *   },
 *   "UserContextData": {
 *     "EncodedData": "AmazonCognitoAdvancedSecurityData_object",
 *     "IpAddress": "192.0.2.1"
 *   }
 * };
 * const command = new InitiateAuthCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChallengeName": "SOFTWARE_TOKEN_MFA",
 *   "ChallengeParameters": {
 *     "FRIENDLY_DEVICE_NAME": "mytestauthenticator",
 *     "USER_ID_FOR_SRP": "mytestuser"
 *   },
 *   "Session": "AYABeC1-y8qooiuysEv0uM4wAqQAHQABAAdTZXJ2aWNlABBDb2duaXRvVXNlclBvb2xzAAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLXdlc3QtMjowMTU3MzY3MjcxOTg6a2V5LzI5OTFhNGE5LTM5YTAtNDQ0Mi04MWU4LWRkYjY4NTllMTg2MQC4AQIBAHhjxv5lVLhE2_WNrC1zuomqn08qDUUp3z9v4EGAjazZ-wGP3HuBF5Izvxf-9WkCT5uyAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMeQoT5e6Dpfh52caqAgEQgDvuL8uLMhPt0WmQpZnkNED1gob6xbqt5LaQo_H4L5CuT4Kj499dGCoZ1q1trmlZSRgRm0wwGGG8lFU37QIAAAAADAAAEAAAAAAAAAAAAAAAAADuLe9_UJ4oZAMsQYr0ntiT_____wAAAAEAAAAAAAAAAAAAAAEAAADnLDGmKBQtsCafNokRmPLgl2itBKuKR2dfZBQb5ucCYkzThM5HOfQUSEL-A3dZzfYDC0IODsrcMkrbeeVyMJk-FCzsxS9Og8BEBVnvi9WjZkPJ4mF0YS6FUXnoPSBV5oUqGzRaT-tJ169SUFZAUfFM1fGeJ8T57-QdCxjyISRCWV1VG5_7TiCioyRGfWwzNVWh7exJortF3ccfOyiEyxeqJ2VJvJq3m_w8NP24_PMDpktpRMKftObIMlD5ewRTNCdrUXQ1BW5KIxhJLGjYfRzJDZuKzmEgS-VHsKz0z76w-AlAgdfvdAjflLnsgduU5kUX4YP6jqnetg"
 * }
 * *\/
 * // example id: example-username-and-password-sign-in-for-a-user-who-has-totp-mfa-1689887395219
 * ```
 *
 */
export class InitiateAuthCommand extends $Command<
  InitiateAuthCommandInput,
  InitiateAuthCommandOutput,
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
  constructor(readonly input: InitiateAuthCommandInput) {
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
  ): Handler<InitiateAuthCommandInput, InitiateAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InitiateAuthCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "InitiateAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateAuthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InitiateAuthResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "InitiateAuth",
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
  private serialize(input: InitiateAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InitiateAuthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateAuthCommandOutput> {
    return de_InitiateAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
