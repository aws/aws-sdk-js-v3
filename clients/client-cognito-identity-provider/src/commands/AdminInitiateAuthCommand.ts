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
  AdminInitiateAuthRequest,
  AdminInitiateAuthRequestFilterSensitiveLog,
  AdminInitiateAuthResponse,
  AdminInitiateAuthResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AdminInitiateAuthCommand, se_AdminInitiateAuthCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AdminInitiateAuthCommand}.
 */
export interface AdminInitiateAuthCommandInput extends AdminInitiateAuthRequest {}
/**
 * @public
 *
 * The output of {@link AdminInitiateAuthCommand}.
 */
export interface AdminInitiateAuthCommandOutput extends AdminInitiateAuthResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initiates the authentication flow, as an administrator.</p>
 *
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
 *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
 *                     Developer Guide</i>.</p>
 *          </note>
 *
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminInitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminInitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminInitiateAuthRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   AuthFlow: "USER_SRP_AUTH" || "REFRESH_TOKEN_AUTH" || "REFRESH_TOKEN" || "CUSTOM_AUTH" || "ADMIN_NO_SRP_AUTH" || "USER_PASSWORD_AUTH" || "ADMIN_USER_PASSWORD_AUTH", // required
 *   AuthParameters: { // AuthParametersType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AnalyticsMetadata: { // AnalyticsMetadataType
 *     AnalyticsEndpointId: "STRING_VALUE",
 *   },
 *   ContextData: { // ContextDataType
 *     IpAddress: "STRING_VALUE", // required
 *     ServerName: "STRING_VALUE", // required
 *     ServerPath: "STRING_VALUE", // required
 *     HttpHeaders: [ // HttpHeaderList // required
 *       { // HttpHeader
 *         headerName: "STRING_VALUE",
 *         headerValue: "STRING_VALUE",
 *       },
 *     ],
 *     EncodedData: "STRING_VALUE",
 *   },
 * };
 * const command = new AdminInitiateAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AdminInitiateAuthCommandInput - {@link AdminInitiateAuthCommandInput}
 * @returns {@link AdminInitiateAuthCommandOutput}
 * @see {@link AdminInitiateAuthCommandInput} for command's `input` shape.
 * @see {@link AdminInitiateAuthCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 *             <code>cognito-idp.amazonaws.com</code> or the external ID provided in the role does
 *             not match what is provided in the SMS configuration for the user pool.</p>
 *
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *  <p>This exception is thrown when the user pool configuration is not valid.</p>
 *
 * @throws {@link MFAMethodNotFoundException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito can't find a multi-factor authentication
 *             (MFA) method.</p>
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
 *
 */
export class AdminInitiateAuthCommand extends $Command<
  AdminInitiateAuthCommandInput,
  AdminInitiateAuthCommandOutput,
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
  constructor(readonly input: AdminInitiateAuthCommandInput) {
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
  ): Handler<AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminInitiateAuthCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminInitiateAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminInitiateAuthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdminInitiateAuthResponseFilterSensitiveLog,
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
  private serialize(input: AdminInitiateAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdminInitiateAuthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminInitiateAuthCommandOutput> {
    return de_AdminInitiateAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
