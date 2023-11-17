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
  BatchIsAuthorizedInput,
  BatchIsAuthorizedInputFilterSensitiveLog,
  BatchIsAuthorizedOutput,
  BatchIsAuthorizedOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchIsAuthorizedCommand, se_BatchIsAuthorizedCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link BatchIsAuthorizedCommand}.
 */
export interface BatchIsAuthorizedCommandInput extends BatchIsAuthorizedInput {}
/**
 * @public
 *
 * The output of {@link BatchIsAuthorizedCommand}.
 */
export interface BatchIsAuthorizedCommandOutput extends BatchIsAuthorizedOutput, __MetadataBearer {}

/**
 * @public
 * <p>Makes a series of decisions about multiple authorization requests for one principal or
 *             resource. Each request contains the equivalent content of an <code>IsAuthorized</code>
 *             request: principal, action, resource, and context. Either the <code>principal</code> or
 *             the <code>resource</code> parameter must be identical across all requests. For example,
 *             Verified Permissions won't evaluate a pair of requests where <code>bob</code> views
 *                 <code>photo1</code> and <code>alice</code> views <code>photo2</code>. Authorization
 *             of <code>bob</code> to view <code>photo1</code> and <code>photo2</code>, or
 *                 <code>bob</code> and <code>alice</code> to view <code>photo1</code>, are valid
 *             batches. </p>
 *          <p>The request is evaluated against all policies in the specified policy store that match the
 *             entities that you declare. The result of the decisions is a series of <code>Allow</code>
 *             or <code>Deny</code> responses, along with the IDs of the policies that produced each
 *             decision.</p>
 *          <p>The <code>entities</code> of a <code>BatchIsAuthorized</code> API request can contain up to 100 principals and up
 *             to 100 resources. The <code>requests</code> of a <code>BatchIsAuthorized</code> API request can contain up to 30
 *             requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, BatchIsAuthorizedCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, BatchIsAuthorizedCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // BatchIsAuthorizedInput
 *   policyStoreId: "STRING_VALUE", // required
 *   entities: { // EntitiesDefinition Union: only one key present
 *     entityList: [ // EntityList
 *       { // EntityItem
 *         identifier: { // EntityIdentifier
 *           entityType: "STRING_VALUE", // required
 *           entityId: "STRING_VALUE", // required
 *         },
 *         attributes: { // EntityAttributes
 *           "<keys>": { // AttributeValue Union: only one key present
 *             boolean: true || false,
 *             entityIdentifier: {
 *               entityType: "STRING_VALUE", // required
 *               entityId: "STRING_VALUE", // required
 *             },
 *             long: Number("long"),
 *             string: "STRING_VALUE",
 *             set: [ // SetAttribute
 *               {//  Union: only one key present
 *                 boolean: true || false,
 *                 entityIdentifier: "<EntityIdentifier>",
 *                 long: Number("long"),
 *                 string: "STRING_VALUE",
 *                 set: [
 *                   "<AttributeValue>",
 *                 ],
 *                 record: { // RecordAttribute
 *                   "<keys>": "<AttributeValue>",
 *                 },
 *               },
 *             ],
 *             record: {
 *               "<keys>": "<AttributeValue>",
 *             },
 *           },
 *         },
 *         parents: [ // ParentList
 *           "<EntityIdentifier>",
 *         ],
 *       },
 *     ],
 *   },
 *   requests: [ // BatchIsAuthorizedInputList // required
 *     { // BatchIsAuthorizedInputItem
 *       principal: "<EntityIdentifier>",
 *       action: { // ActionIdentifier
 *         actionType: "STRING_VALUE", // required
 *         actionId: "STRING_VALUE", // required
 *       },
 *       resource: "<EntityIdentifier>",
 *       context: { // ContextDefinition Union: only one key present
 *         contextMap: { // ContextMap
 *           "<keys>": "<AttributeValue>",
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchIsAuthorizedCommand(input);
 * const response = await client.send(command);
 * // { // BatchIsAuthorizedOutput
 * //   results: [ // BatchIsAuthorizedOutputList // required
 * //     { // BatchIsAuthorizedOutputItem
 * //       request: { // BatchIsAuthorizedInputItem
 * //         principal: { // EntityIdentifier
 * //           entityType: "STRING_VALUE", // required
 * //           entityId: "STRING_VALUE", // required
 * //         },
 * //         action: { // ActionIdentifier
 * //           actionType: "STRING_VALUE", // required
 * //           actionId: "STRING_VALUE", // required
 * //         },
 * //         resource: {
 * //           entityType: "STRING_VALUE", // required
 * //           entityId: "STRING_VALUE", // required
 * //         },
 * //         context: { // ContextDefinition Union: only one key present
 * //           contextMap: { // ContextMap
 * //             "<keys>": { // AttributeValue Union: only one key present
 * //               boolean: true || false,
 * //               entityIdentifier: {
 * //                 entityType: "STRING_VALUE", // required
 * //                 entityId: "STRING_VALUE", // required
 * //               },
 * //               long: Number("long"),
 * //               string: "STRING_VALUE",
 * //               set: [ // SetAttribute
 * //                 {//  Union: only one key present
 * //                   boolean: true || false,
 * //                   entityIdentifier: "<EntityIdentifier>",
 * //                   long: Number("long"),
 * //                   string: "STRING_VALUE",
 * //                   set: [
 * //                     "<AttributeValue>",
 * //                   ],
 * //                   record: { // RecordAttribute
 * //                     "<keys>": "<AttributeValue>",
 * //                   },
 * //                 },
 * //               ],
 * //               record: {
 * //                 "<keys>": "<AttributeValue>",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       decision: "ALLOW" || "DENY", // required
 * //       determiningPolicies: [ // DeterminingPolicyList // required
 * //         { // DeterminingPolicyItem
 * //           policyId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       errors: [ // EvaluationErrorList // required
 * //         { // EvaluationErrorItem
 * //           errorDescription: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchIsAuthorizedCommandInput - {@link BatchIsAuthorizedCommandInput}
 * @returns {@link BatchIsAuthorizedCommandOutput}
 * @see {@link BatchIsAuthorizedCommandInput} for command's `input` shape.
 * @see {@link BatchIsAuthorizedCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
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
 *                     attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnsafeOptionalAttributeAccess</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that is optional
 *                     and isn't guaranteed to be present. Test for the existence of the attribute
 *                     first before attempting to access its value. For more information, see the
 *                         <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
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
export class BatchIsAuthorizedCommand extends $Command<
  BatchIsAuthorizedCommandInput,
  BatchIsAuthorizedCommandOutput,
  VerifiedPermissionsClientResolvedConfig
> {
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
  constructor(readonly input: BatchIsAuthorizedCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VerifiedPermissionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchIsAuthorizedCommandInput, BatchIsAuthorizedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchIsAuthorizedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VerifiedPermissionsClient";
    const commandName = "BatchIsAuthorizedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchIsAuthorizedInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchIsAuthorizedOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "VerifiedPermissions",
        operation: "BatchIsAuthorized",
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
  private serialize(input: BatchIsAuthorizedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchIsAuthorizedCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchIsAuthorizedCommandOutput> {
    return de_BatchIsAuthorizedCommand(output, context);
  }
}
