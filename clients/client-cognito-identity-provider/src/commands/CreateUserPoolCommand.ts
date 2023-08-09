// smithy-typescript generated code
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
} from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { CreateUserPoolRequest, CreateUserPoolResponse } from "../models/models_0";
import { de_CreateUserPoolCommand, se_CreateUserPoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateUserPoolCommand}.
 */
export interface CreateUserPoolCommandInput extends CreateUserPoolRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserPoolCommand}.
 */
export interface CreateUserPoolCommandOutput extends CreateUserPoolResponse, __MetadataBearer {}

/**
 * @public
 * <note>
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
 *          <p>Creates a new Amazon Cognito user pool and sets the password policy for the
 *             pool.</p>
 *          <important>
 *             <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p>
 *          </important>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *             this operation, you must use IAM credentials to authorize requests, and you must
 *             grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateUserPoolRequest
 *   PoolName: "STRING_VALUE", // required
 *   Policies: { // UserPoolPolicyType
 *     PasswordPolicy: { // PasswordPolicyType
 *       MinimumLength: Number("int"),
 *       RequireUppercase: true || false,
 *       RequireLowercase: true || false,
 *       RequireNumbers: true || false,
 *       RequireSymbols: true || false,
 *       TemporaryPasswordValidityDays: Number("int"),
 *     },
 *   },
 *   DeletionProtection: "ACTIVE" || "INACTIVE",
 *   LambdaConfig: { // LambdaConfigType
 *     PreSignUp: "STRING_VALUE",
 *     CustomMessage: "STRING_VALUE",
 *     PostConfirmation: "STRING_VALUE",
 *     PreAuthentication: "STRING_VALUE",
 *     PostAuthentication: "STRING_VALUE",
 *     DefineAuthChallenge: "STRING_VALUE",
 *     CreateAuthChallenge: "STRING_VALUE",
 *     VerifyAuthChallengeResponse: "STRING_VALUE",
 *     PreTokenGeneration: "STRING_VALUE",
 *     UserMigration: "STRING_VALUE",
 *     CustomSMSSender: { // CustomSMSLambdaVersionConfigType
 *       LambdaVersion: "V1_0", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
 *     CustomEmailSender: { // CustomEmailLambdaVersionConfigType
 *       LambdaVersion: "V1_0", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
 *     KMSKeyID: "STRING_VALUE",
 *   },
 *   AutoVerifiedAttributes: [ // VerifiedAttributesListType
 *     "phone_number" || "email",
 *   ],
 *   AliasAttributes: [ // AliasAttributesListType
 *     "phone_number" || "email" || "preferred_username",
 *   ],
 *   UsernameAttributes: [ // UsernameAttributesListType
 *     "phone_number" || "email",
 *   ],
 *   SmsVerificationMessage: "STRING_VALUE",
 *   EmailVerificationMessage: "STRING_VALUE",
 *   EmailVerificationSubject: "STRING_VALUE",
 *   VerificationMessageTemplate: { // VerificationMessageTemplateType
 *     SmsMessage: "STRING_VALUE",
 *     EmailMessage: "STRING_VALUE",
 *     EmailSubject: "STRING_VALUE",
 *     EmailMessageByLink: "STRING_VALUE",
 *     EmailSubjectByLink: "STRING_VALUE",
 *     DefaultEmailOption: "CONFIRM_WITH_LINK" || "CONFIRM_WITH_CODE",
 *   },
 *   SmsAuthenticationMessage: "STRING_VALUE",
 *   MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 *   UserAttributeUpdateSettings: { // UserAttributeUpdateSettingsType
 *     AttributesRequireVerificationBeforeUpdate: [ // AttributesRequireVerificationBeforeUpdateType
 *       "phone_number" || "email",
 *     ],
 *   },
 *   DeviceConfiguration: { // DeviceConfigurationType
 *     ChallengeRequiredOnNewDevice: true || false,
 *     DeviceOnlyRememberedOnUserPrompt: true || false,
 *   },
 *   EmailConfiguration: { // EmailConfigurationType
 *     SourceArn: "STRING_VALUE",
 *     ReplyToEmailAddress: "STRING_VALUE",
 *     EmailSendingAccount: "COGNITO_DEFAULT" || "DEVELOPER",
 *     From: "STRING_VALUE",
 *     ConfigurationSet: "STRING_VALUE",
 *   },
 *   SmsConfiguration: { // SmsConfigurationType
 *     SnsCallerArn: "STRING_VALUE", // required
 *     ExternalId: "STRING_VALUE",
 *     SnsRegion: "STRING_VALUE",
 *   },
 *   UserPoolTags: { // UserPoolTagsType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AdminCreateUserConfig: { // AdminCreateUserConfigType
 *     AllowAdminCreateUserOnly: true || false,
 *     UnusedAccountValidityDays: Number("int"),
 *     InviteMessageTemplate: { // MessageTemplateType
 *       SMSMessage: "STRING_VALUE",
 *       EmailMessage: "STRING_VALUE",
 *       EmailSubject: "STRING_VALUE",
 *     },
 *   },
 *   Schema: [ // SchemaAttributesListType
 *     { // SchemaAttributeType
 *       Name: "STRING_VALUE",
 *       AttributeDataType: "String" || "Number" || "DateTime" || "Boolean",
 *       DeveloperOnlyAttribute: true || false,
 *       Mutable: true || false,
 *       Required: true || false,
 *       NumberAttributeConstraints: { // NumberAttributeConstraintsType
 *         MinValue: "STRING_VALUE",
 *         MaxValue: "STRING_VALUE",
 *       },
 *       StringAttributeConstraints: { // StringAttributeConstraintsType
 *         MinLength: "STRING_VALUE",
 *         MaxLength: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   UserPoolAddOns: { // UserPoolAddOnsType
 *     AdvancedSecurityMode: "OFF" || "AUDIT" || "ENFORCED", // required
 *   },
 *   UsernameConfiguration: { // UsernameConfigurationType
 *     CaseSensitive: true || false, // required
 *   },
 *   AccountRecoverySetting: { // AccountRecoverySettingType
 *     RecoveryMechanisms: [ // RecoveryMechanismsType
 *       { // RecoveryOptionType
 *         Priority: Number("int"), // required
 *         Name: "verified_email" || "verified_phone_number" || "admin_only", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateUserPoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserPoolResponse
 * //   UserPool: { // UserPoolType
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Policies: { // UserPoolPolicyType
 * //       PasswordPolicy: { // PasswordPolicyType
 * //         MinimumLength: Number("int"),
 * //         RequireUppercase: true || false,
 * //         RequireLowercase: true || false,
 * //         RequireNumbers: true || false,
 * //         RequireSymbols: true || false,
 * //         TemporaryPasswordValidityDays: Number("int"),
 * //       },
 * //     },
 * //     DeletionProtection: "ACTIVE" || "INACTIVE",
 * //     LambdaConfig: { // LambdaConfigType
 * //       PreSignUp: "STRING_VALUE",
 * //       CustomMessage: "STRING_VALUE",
 * //       PostConfirmation: "STRING_VALUE",
 * //       PreAuthentication: "STRING_VALUE",
 * //       PostAuthentication: "STRING_VALUE",
 * //       DefineAuthChallenge: "STRING_VALUE",
 * //       CreateAuthChallenge: "STRING_VALUE",
 * //       VerifyAuthChallengeResponse: "STRING_VALUE",
 * //       PreTokenGeneration: "STRING_VALUE",
 * //       UserMigration: "STRING_VALUE",
 * //       CustomSMSSender: { // CustomSMSLambdaVersionConfigType
 * //         LambdaVersion: "V1_0", // required
 * //         LambdaArn: "STRING_VALUE", // required
 * //       },
 * //       CustomEmailSender: { // CustomEmailLambdaVersionConfigType
 * //         LambdaVersion: "V1_0", // required
 * //         LambdaArn: "STRING_VALUE", // required
 * //       },
 * //       KMSKeyID: "STRING_VALUE",
 * //     },
 * //     Status: "Enabled" || "Disabled",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     SchemaAttributes: [ // SchemaAttributesListType
 * //       { // SchemaAttributeType
 * //         Name: "STRING_VALUE",
 * //         AttributeDataType: "String" || "Number" || "DateTime" || "Boolean",
 * //         DeveloperOnlyAttribute: true || false,
 * //         Mutable: true || false,
 * //         Required: true || false,
 * //         NumberAttributeConstraints: { // NumberAttributeConstraintsType
 * //           MinValue: "STRING_VALUE",
 * //           MaxValue: "STRING_VALUE",
 * //         },
 * //         StringAttributeConstraints: { // StringAttributeConstraintsType
 * //           MinLength: "STRING_VALUE",
 * //           MaxLength: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     AutoVerifiedAttributes: [ // VerifiedAttributesListType
 * //       "phone_number" || "email",
 * //     ],
 * //     AliasAttributes: [ // AliasAttributesListType
 * //       "phone_number" || "email" || "preferred_username",
 * //     ],
 * //     UsernameAttributes: [ // UsernameAttributesListType
 * //       "phone_number" || "email",
 * //     ],
 * //     SmsVerificationMessage: "STRING_VALUE",
 * //     EmailVerificationMessage: "STRING_VALUE",
 * //     EmailVerificationSubject: "STRING_VALUE",
 * //     VerificationMessageTemplate: { // VerificationMessageTemplateType
 * //       SmsMessage: "STRING_VALUE",
 * //       EmailMessage: "STRING_VALUE",
 * //       EmailSubject: "STRING_VALUE",
 * //       EmailMessageByLink: "STRING_VALUE",
 * //       EmailSubjectByLink: "STRING_VALUE",
 * //       DefaultEmailOption: "CONFIRM_WITH_LINK" || "CONFIRM_WITH_CODE",
 * //     },
 * //     SmsAuthenticationMessage: "STRING_VALUE",
 * //     UserAttributeUpdateSettings: { // UserAttributeUpdateSettingsType
 * //       AttributesRequireVerificationBeforeUpdate: [ // AttributesRequireVerificationBeforeUpdateType
 * //         "phone_number" || "email",
 * //       ],
 * //     },
 * //     MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 * //     DeviceConfiguration: { // DeviceConfigurationType
 * //       ChallengeRequiredOnNewDevice: true || false,
 * //       DeviceOnlyRememberedOnUserPrompt: true || false,
 * //     },
 * //     EstimatedNumberOfUsers: Number("int"),
 * //     EmailConfiguration: { // EmailConfigurationType
 * //       SourceArn: "STRING_VALUE",
 * //       ReplyToEmailAddress: "STRING_VALUE",
 * //       EmailSendingAccount: "COGNITO_DEFAULT" || "DEVELOPER",
 * //       From: "STRING_VALUE",
 * //       ConfigurationSet: "STRING_VALUE",
 * //     },
 * //     SmsConfiguration: { // SmsConfigurationType
 * //       SnsCallerArn: "STRING_VALUE", // required
 * //       ExternalId: "STRING_VALUE",
 * //       SnsRegion: "STRING_VALUE",
 * //     },
 * //     UserPoolTags: { // UserPoolTagsType
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     SmsConfigurationFailure: "STRING_VALUE",
 * //     EmailConfigurationFailure: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     CustomDomain: "STRING_VALUE",
 * //     AdminCreateUserConfig: { // AdminCreateUserConfigType
 * //       AllowAdminCreateUserOnly: true || false,
 * //       UnusedAccountValidityDays: Number("int"),
 * //       InviteMessageTemplate: { // MessageTemplateType
 * //         SMSMessage: "STRING_VALUE",
 * //         EmailMessage: "STRING_VALUE",
 * //         EmailSubject: "STRING_VALUE",
 * //       },
 * //     },
 * //     UserPoolAddOns: { // UserPoolAddOnsType
 * //       AdvancedSecurityMode: "OFF" || "AUDIT" || "ENFORCED", // required
 * //     },
 * //     UsernameConfiguration: { // UsernameConfigurationType
 * //       CaseSensitive: true || false, // required
 * //     },
 * //     Arn: "STRING_VALUE",
 * //     AccountRecoverySetting: { // AccountRecoverySettingType
 * //       RecoveryMechanisms: [ // RecoveryMechanismsType
 * //         { // RecoveryOptionType
 * //           Priority: Number("int"), // required
 * //           Name: "verified_email" || "verified_phone_number" || "admin_only", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateUserPoolCommandInput - {@link CreateUserPoolCommandInput}
 * @returns {@link CreateUserPoolCommandOutput}
 * @see {@link CreateUserPoolCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidEmailRoleAccessPolicyException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP
 *             status code: 400.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserPoolTaggingException} (client fault)
 *  <p>This exception is thrown when a user pool tag can't be set or updated.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class CreateUserPoolCommand extends $Command<
  CreateUserPoolCommandInput,
  CreateUserPoolCommandOutput,
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
  constructor(readonly input: CreateUserPoolCommandInput) {
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
  ): Handler<CreateUserPoolCommandInput, CreateUserPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateUserPoolCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "CreateUserPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateUserPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateUserPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserPoolCommandOutput> {
    return de_CreateUserPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
