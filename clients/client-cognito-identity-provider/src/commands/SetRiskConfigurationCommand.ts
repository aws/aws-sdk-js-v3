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
  SetRiskConfigurationRequest,
  SetRiskConfigurationRequestFilterSensitiveLog,
  SetRiskConfigurationResponse,
  SetRiskConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SetRiskConfigurationCommand,
  serializeAws_json1_1SetRiskConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link SetRiskConfigurationCommand}.
 */
export interface SetRiskConfigurationCommandInput extends SetRiskConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetRiskConfigurationCommand}.
 */
export interface SetRiskConfigurationCommandOutput extends SetRiskConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Configures actions on detected risks. To delete the risk configuration for
 *                 <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four
 *             configuration types.</p>
 *         <p>To activate Amazon Cognito advanced security features, update the user pool to include the
 *                 <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetRiskConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetRiskConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = {
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 *   CompromisedCredentialsRiskConfiguration: {
 *     EventFilter: [
 *       "SIGN_IN" || "PASSWORD_CHANGE" || "SIGN_UP",
 *     ],
 *     Actions: {
 *       EventAction: "BLOCK" || "NO_ACTION", // required
 *     },
 *   },
 *   AccountTakeoverRiskConfiguration: {
 *     NotifyConfiguration: {
 *       From: "STRING_VALUE",
 *       ReplyTo: "STRING_VALUE",
 *       SourceArn: "STRING_VALUE", // required
 *       BlockEmail: {
 *         Subject: "STRING_VALUE", // required
 *         HtmlBody: "STRING_VALUE",
 *         TextBody: "STRING_VALUE",
 *       },
 *       NoActionEmail: {
 *         Subject: "STRING_VALUE", // required
 *         HtmlBody: "STRING_VALUE",
 *         TextBody: "STRING_VALUE",
 *       },
 *       MfaEmail: {
 *         Subject: "STRING_VALUE", // required
 *         HtmlBody: "STRING_VALUE",
 *         TextBody: "STRING_VALUE",
 *       },
 *     },
 *     Actions: {
 *       LowAction: {
 *         Notify: true || false, // required
 *         EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 *       },
 *       MediumAction: {
 *         Notify: true || false, // required
 *         EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 *       },
 *       HighAction: {
 *         Notify: true || false, // required
 *         EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 *       },
 *     },
 *   },
 *   RiskExceptionConfiguration: {
 *     BlockedIPRangeList: [
 *       "STRING_VALUE",
 *     ],
 *     SkippedIPRangeList: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SetRiskConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SetRiskConfigurationCommandInput - {@link SetRiskConfigurationCommandInput}
 * @returns {@link SetRiskConfigurationCommandOutput}
 * @see {@link SetRiskConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetRiskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link CodeDeliveryFailureException} (client fault)
 *  <p>This exception is thrown when a verification code fails to deliver
 *             successfully.</p>
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
 * @throws {@link UserPoolAddOnNotEnabledException} (client fault)
 *  <p>This exception is thrown when user pool add-ons aren't enabled.</p>
 *
 *
 */
export class SetRiskConfigurationCommand extends $Command<
  SetRiskConfigurationCommandInput,
  SetRiskConfigurationCommandOutput,
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
  constructor(readonly input: SetRiskConfigurationCommandInput) {
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
  ): Handler<SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetRiskConfigurationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetRiskConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetRiskConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SetRiskConfigurationResponseFilterSensitiveLog,
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
  private serialize(input: SetRiskConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetRiskConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetRiskConfigurationCommandOutput> {
    return deserializeAws_json1_1SetRiskConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
