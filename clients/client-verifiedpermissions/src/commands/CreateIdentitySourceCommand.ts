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
  CreateIdentitySourceInput,
  CreateIdentitySourceInputFilterSensitiveLog,
  CreateIdentitySourceOutput,
} from "../models/models_0";
import { de_CreateIdentitySourceCommand, se_CreateIdentitySourceCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  VerifiedPermissionsClientResolvedConfig,
} from "../VerifiedPermissionsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandInput extends CreateIdentitySourceInput {}
/**
 * @public
 *
 * The output of {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandOutput extends CreateIdentitySourceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a reference to an Amazon Cognito user pool as an external identity provider (IdP).
 *             </p>
 *          <p>After you create an identity source, you can use the identities provided by the IdP as proxies
 *             for the principal in authorization queries that use the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a>
 *             operation. These identities take the form of tokens that contain claims about the user,
 *             such as IDs, attributes and group memberships. Amazon Cognito provides both identity tokens and
 *             access tokens, and Verified Permissions can use either or both. Any combination of identity and access
 *             tokens results in the same Cedar principal. Verified Permissions automatically translates the
 *             information about the identities into the standard Cedar attributes that can be
 *             evaluated by your policies. Because the Amazon Cognito identity and access tokens can contain
 *             different information, the tokens you choose to use determine which principal attributes
 *             are available to access when evaluating Cedar policies.</p>
 *          <important>
 *             <p>If you delete a Amazon Cognito user pool or user, tokens from that deleted pool or that deleted user continue to be usable until they expire.</p>
 *          </important>
 *          <note>
 *             <p>To reference a user from this identity source in your Cedar policies, use the following
 *                 syntax.</p>
 *             <p>
 *                <i>IdentityType::"&lt;CognitoUserPoolIdentifier&gt;|&lt;CognitoClientId&gt;</i>
 *             </p>
 *             <p>Where <code>IdentityType</code> is the string that you provide to the
 *                     <code>PrincipalEntityType</code> parameter for this operation. The
 *                     <code>CognitoUserPoolId</code> and <code>CognitoClientId</code> are defined by
 *                 the Amazon Cognito user pool.</p>
 *          </note>
 *          <note>
 *             <p>Verified Permissions is <i>
 *                   <a href="https://wikipedia.org/wiki/Eventual_consistency">eventually consistent</a>
 *                </i>. It can take a few seconds for a new or changed element to be propagate through
 *     the service and be visible in the results of other Verified Permissions operations.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, CreateIdentitySourceCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, CreateIdentitySourceCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // CreateIdentitySourceInput
 *   clientToken: "STRING_VALUE",
 *   policyStoreId: "STRING_VALUE", // required
 *   configuration: { // Configuration Union: only one key present
 *     cognitoUserPoolConfiguration: { // CognitoUserPoolConfiguration
 *       userPoolArn: "STRING_VALUE", // required
 *       clientIds: [ // ClientIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   principalEntityType: "STRING_VALUE",
 * };
 * const command = new CreateIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdentitySourceOutput
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   identitySourceId: "STRING_VALUE", // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //   policyStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIdentitySourceCommandInput - {@link CreateIdentitySourceCommandInput}
 * @returns {@link CreateIdentitySourceCommandOutput}
 * @see {@link CreateIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link CreateIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because it would cause a service quota to be exceeded.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error. Try your request again later</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because it exceeded a throttling quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because one or more input parameters don't satisfy their constraint
 *             requirements. The output is provided as a list of fields and a reason for each field that
 *             isn't valid.</p>
 *          <p>The possible reasons include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedEntityType</b>
 *                </p>
 *                <p>The policy includes an entity type that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedActionId</b>
 *                </p>
 *                <p>The policy includes an action id that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>InvalidActionApplication</b>
 *                </p>
 *                <p>The policy includes an action that, according to the schema, doesn't support
 *                     the specified principal and resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnexpectedType</b>
 *                </p>
 *                <p>The policy included an operand that isn't a valid type for the specified
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IncompatibleTypes</b>
 *                </p>
 *                <p>The types of elements included in a <code>set</code>, or the types of
 *                     expressions used in an <code>if...then...else</code> clause aren't compatible in
 *                     this context.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>MissingAttribute</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that isn't
 *                     specified in the schema. Test for the existence of the attribute first before
 *                     attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnsafeOptionalAttributeAccess</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that is optional
 *                     and isn't guaranteed to be present. Test for the existence of the attribute
 *                     first before attempting to access its value. For more information, see the
 *                         <a href="https://docs.cedarpolicy.com/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ImpossiblePolicy</b>
 *                </p>
 *                <p>Cedar has determined that a policy condition always evaluates to false. If
 *                     the policy is always false, it can never apply to any query, and so it can never
 *                     affect an authorization decision.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>WrongNumberArguments</b>
 *                </p>
 *                <p>The policy references an extension type with the wrong number of
 *                     arguments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FunctionArgumentValidationError</b>
 *                </p>
 *                <p>Cedar couldn't parse the argument passed to an extension type. For example,
 *                     a string that is to be parsed as an IPv4 address can contain only digits and the
 *                     period character.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 */
export class CreateIdentitySourceCommand extends $Command<
  CreateIdentitySourceCommandInput,
  CreateIdentitySourceCommandOutput,
  VerifiedPermissionsClientResolvedConfig
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
  constructor(readonly input: CreateIdentitySourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VerifiedPermissionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIdentitySourceCommandInput, CreateIdentitySourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateIdentitySourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VerifiedPermissionsClient";
    const commandName = "CreateIdentitySourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIdentitySourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "VerifiedPermissions",
        operation: "CreateIdentitySource",
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
  private serialize(input: CreateIdentitySourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateIdentitySourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIdentitySourceCommandOutput> {
    return de_CreateIdentitySourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
