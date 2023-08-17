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
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ScheduleKeyDeletionRequest, ScheduleKeyDeletionResponse } from "../models/models_0";
import { de_ScheduleKeyDeletionCommand, se_ScheduleKeyDeletionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ScheduleKeyDeletionCommand}.
 */
export interface ScheduleKeyDeletionCommandInput extends ScheduleKeyDeletionRequest {}
/**
 * @public
 *
 * The output of {@link ScheduleKeyDeletionCommand}.
 */
export interface ScheduleKeyDeletionCommandOutput extends ScheduleKeyDeletionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Schedules the deletion of a KMS key. By default, KMS applies a waiting period of 30
 *       days, but you can specify a waiting period of 7-30 days. When this operation is successful,
 *       the key state of the KMS key changes to <code>PendingDeletion</code> and the key can't be used
 *       in any cryptographic operations. It remains in this state for the duration of the waiting
 *       period. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to
 *       cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key,
 *       its key material, and all KMS data associated with it, including all aliases that refer to
 *       it.</p>
 *          <important>
 *             <p>Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key
 *         is deleted, all data that was encrypted under the KMS key is unrecoverable. (The only
 *         exception is a <a href="kms/latest/developerguide/multi-region-keys-delete.html">multi-Region replica
 *           key</a>, or an <a href="kms/latest/developerguide/importing-keys-managing.html#import-delete-key">asymmetric or HMAC KMS
 *           key with imported key material</a>.) To prevent the use of a KMS key without deleting
 *         it, use <a>DisableKey</a>. </p>
 *          </important>
 *          <p>You can schedule the deletion of a multi-Region primary key and its replica keys at any
 *       time. However, KMS will not delete a multi-Region primary key with existing replica keys. If
 *       you schedule the deletion of a primary key with replicas, its key state changes to
 *         <code>PendingReplicaDeletion</code> and it cannot be replicated or used in cryptographic
 *       operations. This status can continue indefinitely. When the last of its replicas keys is
 *       deleted (not just scheduled), the key state of the primary key changes to
 *         <code>PendingDeletion</code> and its waiting period (<code>PendingWindowInDays</code>)
 *       begins. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html">Deleting multi-Region keys</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>When KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/delete-cmk-keystore.html">deletes
 *         a KMS key from an CloudHSM key store</a>, it makes a best effort to delete the associated
 *       key material from the associated CloudHSM cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete
 *         the orphaned key material</a> from the cluster and its backups. <a href="https://docs.aws.amazon.com/kms/latest/developerguide/delete-xks-key.html">Deleting a KMS key from an
 *         external key store</a> has no effect on the associated external key. However, for both
 *       types of custom key stores, deleting a KMS key is destructive and irreversible. You cannot
 *       decrypt ciphertext encrypted under the KMS key by using only its associated external key or
 *       CloudHSM key. Also, you cannot recreate a KMS key in an external key store by creating a new KMS
 *       key with the same key material.</p>
 *          <p>For more information about scheduling a KMS key for deletion, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: kms:ScheduleKeyDeletion (key
 *       policy)</p>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CancelKeyDeletion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisableKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ScheduleKeyDeletionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ScheduleKeyDeletionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ScheduleKeyDeletionRequest
 *   KeyId: "STRING_VALUE", // required
 *   PendingWindowInDays: Number("int"),
 * };
 * const command = new ScheduleKeyDeletionCommand(input);
 * const response = await client.send(command);
 * // { // ScheduleKeyDeletionResponse
 * //   KeyId: "STRING_VALUE",
 * //   DeletionDate: new Date("TIMESTAMP"),
 * //   KeyState: "Creating" || "Enabled" || "Disabled" || "PendingDeletion" || "PendingImport" || "PendingReplicaDeletion" || "Unavailable" || "Updating",
 * //   PendingWindowInDays: Number("int"),
 * // };
 *
 * ```
 *
 * @param ScheduleKeyDeletionCommandInput - {@link ScheduleKeyDeletionCommandInput}
 * @returns {@link ScheduleKeyDeletionCommandOutput}
 * @see {@link ScheduleKeyDeletionCommandInput} for command's `input` shape.
 * @see {@link ScheduleKeyDeletionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To schedule a KMS key for deletion
 * ```javascript
 * // The following example schedules the specified KMS key for deletion.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "PendingWindowInDays": 7
 * };
 * const command = new ScheduleKeyDeletionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DeletionDate": "2016-12-17T16:00:00-08:00",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * }
 * *\/
 * // example id: to-schedule-a-cmk-for-deletion-1481331111094
 * ```
 *
 */
export class ScheduleKeyDeletionCommand extends $Command<
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput,
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
  constructor(readonly input: ScheduleKeyDeletionCommandInput) {
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
  ): Handler<ScheduleKeyDeletionCommandInput, ScheduleKeyDeletionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ScheduleKeyDeletionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ScheduleKeyDeletionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ScheduleKeyDeletionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ScheduleKeyDeletionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScheduleKeyDeletionCommandOutput> {
    return de_ScheduleKeyDeletionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
