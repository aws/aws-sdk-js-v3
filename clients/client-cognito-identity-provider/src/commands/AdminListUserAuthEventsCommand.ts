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
import {
  AdminListUserAuthEventsRequest,
  AdminListUserAuthEventsRequestFilterSensitiveLog,
  AdminListUserAuthEventsResponse,
} from "../models/models_0";
import { de_AdminListUserAuthEventsCommand, se_AdminListUserAuthEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AdminListUserAuthEventsCommand}.
 */
export interface AdminListUserAuthEventsCommandInput extends AdminListUserAuthEventsRequest {}
/**
 * @public
 *
 * The output of {@link AdminListUserAuthEventsCommand}.
 */
export interface AdminListUserAuthEventsCommandOutput extends AdminListUserAuthEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>A history of user activity and any risks detected as part of Amazon Cognito advanced
 *             security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminListUserAuthEventsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new AdminListUserAuthEventsCommand(input);
 * const response = await client.send(command);
 * // { // AdminListUserAuthEventsResponse
 * //   AuthEvents: [ // AuthEventsType
 * //     { // AuthEventType
 * //       EventId: "STRING_VALUE",
 * //       EventType: "SignIn" || "SignUp" || "ForgotPassword" || "PasswordChange" || "ResendCode",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       EventResponse: "Pass" || "Fail" || "InProgress",
 * //       EventRisk: { // EventRiskType
 * //         RiskDecision: "NoRisk" || "AccountTakeover" || "Block",
 * //         RiskLevel: "Low" || "Medium" || "High",
 * //         CompromisedCredentialsDetected: true || false,
 * //       },
 * //       ChallengeResponses: [ // ChallengeResponseListType
 * //         { // ChallengeResponseType
 * //           ChallengeName: "Password" || "Mfa",
 * //           ChallengeResponse: "Success" || "Failure",
 * //         },
 * //       ],
 * //       EventContextData: { // EventContextDataType
 * //         IpAddress: "STRING_VALUE",
 * //         DeviceName: "STRING_VALUE",
 * //         Timezone: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //       },
 * //       EventFeedback: { // EventFeedbackType
 * //         FeedbackValue: "Valid" || "Invalid", // required
 * //         Provider: "STRING_VALUE", // required
 * //         FeedbackDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AdminListUserAuthEventsCommandInput - {@link AdminListUserAuthEventsCommandInput}
 * @returns {@link AdminListUserAuthEventsCommandOutput}
 * @see {@link AdminListUserAuthEventsCommandInput} for command's `input` shape.
 * @see {@link AdminListUserAuthEventsCommandOutput} for command's `response` shape.
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
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link UserPoolAddOnNotEnabledException} (client fault)
 *  <p>This exception is thrown when user pool add-ons aren't enabled.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class AdminListUserAuthEventsCommand extends $Command<
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
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
  constructor(readonly input: AdminListUserAuthEventsCommandInput) {
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
  ): Handler<AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminListUserAuthEventsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminListUserAuthEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminListUserAuthEventsRequestFilterSensitiveLog,
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
  private serialize(input: AdminListUserAuthEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdminListUserAuthEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminListUserAuthEventsCommandOutput> {
    return de_AdminListUserAuthEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
