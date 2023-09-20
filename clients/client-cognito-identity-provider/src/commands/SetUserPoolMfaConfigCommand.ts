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
import { SetUserPoolMfaConfigRequest, SetUserPoolMfaConfigResponse } from "../models/models_1";
import { de_SetUserPoolMfaConfigCommand, se_SetUserPoolMfaConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetUserPoolMfaConfigCommand}.
 */
export interface SetUserPoolMfaConfigCommandInput extends SetUserPoolMfaConfigRequest {}
/**
 * @public
 *
 * The output of {@link SetUserPoolMfaConfigCommand}.
 */
export interface SetUserPoolMfaConfigCommandOutput extends SetUserPoolMfaConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets the user pool multi-factor authentication (MFA) configuration.</p>
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
 * import { CognitoIdentityProviderClient, SetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUserPoolMfaConfigRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   SmsMfaConfiguration: { // SmsMfaConfigType
 *     SmsAuthenticationMessage: "STRING_VALUE",
 *     SmsConfiguration: { // SmsConfigurationType
 *       SnsCallerArn: "STRING_VALUE", // required
 *       ExternalId: "STRING_VALUE",
 *       SnsRegion: "STRING_VALUE",
 *     },
 *   },
 *   SoftwareTokenMfaConfiguration: { // SoftwareTokenMfaConfigType
 *     Enabled: true || false,
 *   },
 *   MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 * };
 * const command = new SetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * // { // SetUserPoolMfaConfigResponse
 * //   SmsMfaConfiguration: { // SmsMfaConfigType
 * //     SmsAuthenticationMessage: "STRING_VALUE",
 * //     SmsConfiguration: { // SmsConfigurationType
 * //       SnsCallerArn: "STRING_VALUE", // required
 * //       ExternalId: "STRING_VALUE",
 * //       SnsRegion: "STRING_VALUE",
 * //     },
 * //   },
 * //   SoftwareTokenMfaConfiguration: { // SoftwareTokenMfaConfigType
 * //     Enabled: true || false,
 * //   },
 * //   MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 * // };
 *
 * ```
 *
 * @param SetUserPoolMfaConfigCommandInput - {@link SetUserPoolMfaConfigCommandInput}
 * @returns {@link SetUserPoolMfaConfigCommandOutput}
 * @see {@link SetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link SetUserPoolMfaConfigCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class SetUserPoolMfaConfigCommand extends $Command<
  SetUserPoolMfaConfigCommandInput,
  SetUserPoolMfaConfigCommandOutput,
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
  constructor(readonly input: SetUserPoolMfaConfigCommandInput) {
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
  ): Handler<SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetUserPoolMfaConfigCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetUserPoolMfaConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "SetUserPoolMfaConfig",
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
  private serialize(input: SetUserPoolMfaConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetUserPoolMfaConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetUserPoolMfaConfigCommandOutput> {
    return de_SetUserPoolMfaConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
