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
  UpdatePolicyInput,
  UpdatePolicyInputFilterSensitiveLog,
  UpdatePolicyOutput,
  UpdatePolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdatePolicyCommand, se_UpdatePolicyCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandInput extends UpdatePolicyInput {}
/**
 * @public
 *
 * The output of {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandOutput extends UpdatePolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Modifies a Cedar static policy in the specified policy store. You can change only certain elements of
 *             the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyInput.html#amazonverifiedpermissions-UpdatePolicy-request-UpdatePolicyDefinition">UpdatePolicyDefinition</a> parameter. You can directly update only static policies. To
 *             change a template-linked policy, you must update the template instead, using <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyTemplate.html">UpdatePolicyTemplate</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If policy validation is enabled in the policy store, then updating a static policy causes
 *                         Verified Permissions to validate the policy against the schema in the policy store. If the updated
 *                         static policy doesn't pass validation, the operation fails and the update isn't
 *                         stored.</p>
 *                </li>
 *                <li>
 *                   <p>When you edit a static policy, You can change only certain elements of a static
 *                         policy:</p>
 *                   <ul>
 *                      <li>
 *                         <p>The action referenced by the policy. </p>
 *                      </li>
 *                      <li>
 *                         <p>A condition clause, such as when and unless. </p>
 *                      </li>
 *                   </ul>
 *                   <p>You can't change these elements of a static policy: </p>
 *                   <ul>
 *                      <li>
 *                         <p>Changing a policy from a static policy to a template-linked
 *                                 policy. </p>
 *                      </li>
 *                      <li>
 *                         <p>Changing the effect of a static policy from permit or forbid.
 *                             </p>
 *                      </li>
 *                      <li>
 *                         <p>The principal referenced by a static policy. </p>
 *                      </li>
 *                      <li>
 *                         <p>The resource referenced by a static policy. </p>
 *                      </li>
 *                   </ul>
 *                </li>
 *                <li>
 *                   <p>To update a template-linked policy, you must update the template instead. </p>
 *                </li>
 *             </ul>
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
 * import { VerifiedPermissionsClient, UpdatePolicyCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, UpdatePolicyCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // UpdatePolicyInput
 *   policyStoreId: "STRING_VALUE", // required
 *   policyId: "STRING_VALUE", // required
 *   definition: { // UpdatePolicyDefinition Union: only one key present
 *     static: { // UpdateStaticPolicyDefinition
 *       description: "STRING_VALUE",
 *       statement: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   policyId: "STRING_VALUE", // required
 * //   policyType: "STATIC" || "TEMPLATE_LINKED", // required
 * //   principal: { // EntityIdentifier
 * //     entityType: "STRING_VALUE", // required
 * //     entityId: "STRING_VALUE", // required
 * //   },
 * //   resource: {
 * //     entityType: "STRING_VALUE", // required
 * //     entityId: "STRING_VALUE", // required
 * //   },
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdatePolicyCommandInput - {@link UpdatePolicyCommandInput}
 * @returns {@link UpdatePolicyCommandOutput}
 * @see {@link UpdatePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because another request to modify a resource occurred at the
 *             same.</p>
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
export class UpdatePolicyCommand extends $Command<
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput,
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
  constructor(readonly input: UpdatePolicyCommandInput) {
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
  ): Handler<UpdatePolicyCommandInput, UpdatePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdatePolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VerifiedPermissionsClient";
    const commandName = "UpdatePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePolicyOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "VerifiedPermissions",
        operation: "UpdatePolicy",
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
  private serialize(input: UpdatePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePolicyCommandOutput> {
    return de_UpdatePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
