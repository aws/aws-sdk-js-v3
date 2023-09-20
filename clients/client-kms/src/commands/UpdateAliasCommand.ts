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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateAliasRequest } from "../models/models_0";
import { de_UpdateAliasCommand, se_UpdateAliasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAliasCommand}.
 */
export interface UpdateAliasCommandInput extends UpdateAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAliasCommand}.
 */
export interface UpdateAliasCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associates an existing KMS alias with a different KMS key. Each alias is associated with
 *       only one KMS key at a time, although a KMS key can have multiple aliases. The alias and the
 *       KMS key must be in the same Amazon Web Services account and Region.</p>
 *          <note>
 *             <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          </note>
 *          <p>The current and new KMS key must be the same type (both symmetric or both asymmetric or
 *       both HMAC), and they must have the same key usage. This restriction prevents errors in code
 *       that uses aliases. If you must assign an alias to a different type of KMS key, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create
 *       a new alias.</p>
 *          <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name,
 *       use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to
 *       create a new alias.</p>
 *          <p>Because an alias is not a property of a KMS key, you can create, update, and delete the
 *       aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the
 *       response from the <a>DescribeKey</a> operation. To get the aliases of all KMS keys
 *       in the account, use the <a>ListAliases</a> operation. </p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p>
 *          <p>
 *             <b>Required permissions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on
 *           the alias (IAM policy).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on
 *           the current KMS key (key policy).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on
 *           the new KMS key (key policy).</p>
 *             </li>
 *          </ul>
 *          <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateAliasCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateAliasCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // UpdateAliasRequest
 *   AliasName: "STRING_VALUE", // required
 *   TargetKeyId: "STRING_VALUE", // required
 * };
 * const command = new UpdateAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAliasCommandInput - {@link UpdateAliasCommandInput}
 * @returns {@link UpdateAliasCommandOutput}
 * @see {@link UpdateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAliasCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To update an alias
 * ```javascript
 * // The following example updates the specified alias to refer to the specified KMS key.
 * const input = {
 *   "AliasName": "alias/ExampleAlias",
 *   "TargetKeyId": "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new UpdateAliasCommand(input);
 * await client.send(command);
 * // example id: to-update-an-alias-1481572726920
 * ```
 *
 */
export class UpdateAliasCommand extends $Command<
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput,
  KMSClientResolvedConfig
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
  constructor(readonly input: UpdateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAliasCommandInput, UpdateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateAliasCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "UpdateAlias",
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
  private serialize(input: UpdateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAliasCommandOutput> {
    return de_UpdateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
