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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { DescribeUserPoolRequest, DescribeUserPoolResponse } from "../models/models_0";
import { de_DescribeUserPoolCommand, se_DescribeUserPoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserPoolCommand}.
 */
export interface DescribeUserPoolCommandInput extends DescribeUserPoolRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserPoolCommand}.
 */
export interface DescribeUserPoolCommandOutput extends DescribeUserPoolResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the configuration information and metadata of the specified user pool.</p>
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
 * import { CognitoIdentityProviderClient, DescribeUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeUserPoolRequest
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserPoolCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserPoolResponse
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
 * @param DescribeUserPoolCommandInput - {@link DescribeUserPoolCommandInput}
 * @returns {@link DescribeUserPoolCommandOutput}
 * @see {@link DescribeUserPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
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
export class DescribeUserPoolCommand extends $Command<
  DescribeUserPoolCommandInput,
  DescribeUserPoolCommandOutput,
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
  constructor(readonly input: DescribeUserPoolCommandInput) {
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
  ): Handler<DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUserPoolCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "DescribeUserPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "DescribeUserPool",
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
  private serialize(input: DescribeUserPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUserPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUserPoolCommandOutput> {
    return de_DescribeUserPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
