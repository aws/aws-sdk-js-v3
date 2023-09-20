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
import { ListUsersRequest, ListUsersResponse, ListUsersResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListUsersCommand, se_ListUsersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListUsersCommand}.
 */
export interface ListUsersCommandInput extends ListUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists users and their basic details in a user pool.</p>
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
 * import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUsersCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUsersRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   AttributesToGet: [ // SearchedAttributeNamesListType
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   PaginationToken: "STRING_VALUE",
 *   Filter: "STRING_VALUE",
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersResponse
 * //   Users: [ // UsersListType
 * //     { // UserType
 * //       Username: "STRING_VALUE",
 * //       Attributes: [ // AttributeListType
 * //         { // AttributeType
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       UserCreateDate: new Date("TIMESTAMP"),
 * //       UserLastModifiedDate: new Date("TIMESTAMP"),
 * //       Enabled: true || false,
 * //       UserStatus: "UNCONFIRMED" || "CONFIRMED" || "ARCHIVED" || "COMPROMISED" || "UNKNOWN" || "RESET_REQUIRED" || "FORCE_CHANGE_PASSWORD",
 * //       MFAOptions: [ // MFAOptionListType
 * //         { // MFAOptionType
 * //           DeliveryMedium: "SMS" || "EMAIL",
 * //           AttributeName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   PaginationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersCommandInput - {@link ListUsersCommandInput}
 * @returns {@link ListUsersCommandOutput}
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
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
 * @example A ListUsers request for the next 3 users whose email address starts with "testuser."
 * ```javascript
 * // This request submits a value for all possible parameters for ListUsers. By iterating the PaginationToken, you can page through and collect all users in a user pool.
 * const input = {
 *   "AttributesToGet": [
 *     "email",
 *     "sub"
 *   ],
 *   "Filter": "\"email\"^=\"testuser\"",
 *   "Limit": 3,
 *   "PaginationToken": "abcd1234EXAMPLE",
 *   "UserPoolId": "us-east-1_EXAMPLE"
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PaginationToken": "efgh5678EXAMPLE",
 *   "Users": [
 *     {
 *       "Attributes": [
 *         {
 *           "Name": "sub",
 *           "Value": "eaad0219-2117-439f-8d46-4db20e59268f"
 *         },
 *         {
 *           "Name": "email",
 *           "Value": "testuser@example.com"
 *         }
 *       ],
 *       "Enabled": true,
 *       "UserCreateDate": 1682955829.578,
 *       "UserLastModifiedDate": 1689030181.63,
 *       "UserStatus": "CONFIRMED",
 *       "Username": "testuser"
 *     },
 *     {
 *       "Attributes": [
 *         {
 *           "Name": "sub",
 *           "Value": "3b994cfd-0b07-4581-be46-3c82f9a70c90"
 *         },
 *         {
 *           "Name": "email",
 *           "Value": "testuser2@example.com"
 *         }
 *       ],
 *       "Enabled": true,
 *       "UserCreateDate": 1684427979.201,
 *       "UserLastModifiedDate": 1684427979.201,
 *       "UserStatus": "UNCONFIRMED",
 *       "Username": "testuser2"
 *     },
 *     {
 *       "Attributes": [
 *         {
 *           "Name": "sub",
 *           "Value": "5929e0d1-4c34-42d1-9b79-a5ecacfe66f7"
 *         },
 *         {
 *           "Name": "email",
 *           "Value": "testuser3@example.com"
 *         }
 *       ],
 *       "Enabled": true,
 *       "UserCreateDate": 1684427823.641,
 *       "UserLastModifiedDate": 1684427823.641,
 *       "UserStatus": "UNCONFIRMED",
 *       "Username": "testuser3@example.com"
 *     }
 *   ]
 * }
 * *\/
 * // example id: a-listusers-request-for-the-next-3-users-whose-email-address-starts-with-testuser-1689977648246
 * ```
 *
 */
export class ListUsersCommand extends $Command<
  ListUsersCommandInput,
  ListUsersCommandOutput,
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
  constructor(readonly input: ListUsersCommandInput) {
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
  ): Handler<ListUsersCommandInput, ListUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListUsersCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "ListUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListUsersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "ListUsers",
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
  private serialize(input: ListUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUsersCommandOutput> {
    return de_ListUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
