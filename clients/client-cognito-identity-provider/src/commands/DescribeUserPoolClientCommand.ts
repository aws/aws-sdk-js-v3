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
import {
  DescribeUserPoolClientRequest,
  DescribeUserPoolClientRequestFilterSensitiveLog,
  DescribeUserPoolClientResponse,
  DescribeUserPoolClientResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeUserPoolClientCommand, se_DescribeUserPoolClientCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserPoolClientCommand}.
 */
export interface DescribeUserPoolClientCommandInput extends DescribeUserPoolClientRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserPoolClientCommand}.
 */
export interface DescribeUserPoolClientCommandOutput extends DescribeUserPoolClientResponse, __MetadataBearer {}

/**
 * @public
 * <p>Client method for returning the configuration information and metadata of the
 *             specified user pool app client.</p>
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
 * import { CognitoIdentityProviderClient, DescribeUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeUserPoolClientRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserPoolClientCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserPoolClientResponse
 * //   UserPoolClient: { // UserPoolClientType
 * //     UserPoolId: "STRING_VALUE",
 * //     ClientName: "STRING_VALUE",
 * //     ClientId: "STRING_VALUE",
 * //     ClientSecret: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     RefreshTokenValidity: Number("int"),
 * //     AccessTokenValidity: Number("int"),
 * //     IdTokenValidity: Number("int"),
 * //     TokenValidityUnits: { // TokenValidityUnitsType
 * //       AccessToken: "seconds" || "minutes" || "hours" || "days",
 * //       IdToken: "seconds" || "minutes" || "hours" || "days",
 * //       RefreshToken: "seconds" || "minutes" || "hours" || "days",
 * //     },
 * //     ReadAttributes: [ // ClientPermissionListType
 * //       "STRING_VALUE",
 * //     ],
 * //     WriteAttributes: [
 * //       "STRING_VALUE",
 * //     ],
 * //     ExplicitAuthFlows: [ // ExplicitAuthFlowsListType
 * //       "ADMIN_NO_SRP_AUTH" || "CUSTOM_AUTH_FLOW_ONLY" || "USER_PASSWORD_AUTH" || "ALLOW_ADMIN_USER_PASSWORD_AUTH" || "ALLOW_CUSTOM_AUTH" || "ALLOW_USER_PASSWORD_AUTH" || "ALLOW_USER_SRP_AUTH" || "ALLOW_REFRESH_TOKEN_AUTH",
 * //     ],
 * //     SupportedIdentityProviders: [ // SupportedIdentityProvidersListType
 * //       "STRING_VALUE",
 * //     ],
 * //     CallbackURLs: [ // CallbackURLsListType
 * //       "STRING_VALUE",
 * //     ],
 * //     LogoutURLs: [ // LogoutURLsListType
 * //       "STRING_VALUE",
 * //     ],
 * //     DefaultRedirectURI: "STRING_VALUE",
 * //     AllowedOAuthFlows: [ // OAuthFlowsType
 * //       "code" || "implicit" || "client_credentials",
 * //     ],
 * //     AllowedOAuthScopes: [ // ScopeListType
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowedOAuthFlowsUserPoolClient: true || false,
 * //     AnalyticsConfiguration: { // AnalyticsConfigurationType
 * //       ApplicationId: "STRING_VALUE",
 * //       ApplicationArn: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ExternalId: "STRING_VALUE",
 * //       UserDataShared: true || false,
 * //     },
 * //     PreventUserExistenceErrors: "LEGACY" || "ENABLED",
 * //     EnableTokenRevocation: true || false,
 * //     EnablePropagateAdditionalUserContextData: true || false,
 * //     AuthSessionValidity: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeUserPoolClientCommandInput - {@link DescribeUserPoolClientCommandInput}
 * @returns {@link DescribeUserPoolClientCommandOutput}
 * @see {@link DescribeUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolClientCommandOutput} for command's `response` shape.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class DescribeUserPoolClientCommand extends $Command<
  DescribeUserPoolClientCommandInput,
  DescribeUserPoolClientCommandOutput,
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
  constructor(readonly input: DescribeUserPoolClientCommandInput) {
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
  ): Handler<DescribeUserPoolClientCommandInput, DescribeUserPoolClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUserPoolClientCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "DescribeUserPoolClientCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUserPoolClientRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserPoolClientResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "DescribeUserPoolClient",
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
  private serialize(input: DescribeUserPoolClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUserPoolClientCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUserPoolClientCommandOutput> {
    return de_DescribeUserPoolClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
