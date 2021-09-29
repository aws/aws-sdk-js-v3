import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ScheduleKeyDeletionRequest, ScheduleKeyDeletionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ScheduleKeyDeletionCommand,
  serializeAws_json1_1ScheduleKeyDeletionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ScheduleKeyDeletionCommandInput extends ScheduleKeyDeletionRequest {}
export interface ScheduleKeyDeletionCommandOutput extends ScheduleKeyDeletionResponse, __MetadataBearer {}

/**
 * <p>Schedules the deletion of a KMS key. By default, KMS applies a waiting
 *       period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is
 *       successful, the key state of the KMS key changes to <code>PendingDeletion</code> and the key can't
 *       be used in any cryptographic operations. It remains in this state for the duration of the
 *       waiting period. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key,
 *       its key material, and all KMS data associated with it, including all aliases that refer to
 *       it.</p>
 *          <important>
 *             <p>Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key is
 *         deleted, all data that was encrypted under the KMS key is unrecoverable. (The only exception is
 *         a multi-Region replica key.) To prevent the use of a KMS key without deleting it, use <a>DisableKey</a>. </p>
 *          </important>
 *          <p>If you schedule deletion of a KMS key from a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, when the waiting period
 *       expires, <code>ScheduleKeyDeletion</code> deletes the KMS key from KMS. Then KMS makes a best
 *       effort to delete the key material from the associated CloudHSM cluster. However, you might need
 *       to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key
 *         material</a> from the cluster and its backups.</p>
 *          <p>You can schedule the deletion of a multi-Region primary key and its replica keys at any
 *       time. However, KMS will not delete a multi-Region primary key with existing replica keys. If
 *       you schedule the deletion of a primary key with replicas, its key state changes to
 *         <code>PendingReplicaDeletion</code> and it cannot be replicated or used in cryptographic
 *       operations. This status can continue indefinitely. When the last of its replicas keys is
 *       deleted (not just scheduled), the key state of the primary key changes to
 *         <code>PendingDeletion</code> and its waiting period (<code>PendingWindowInDays</code>)
 *       begins. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html">Deleting multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>. </p>
 *          <p>For more information about scheduling a KMS key for deletion, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *
 *
 *          <p>
 *             <b>Required permissions</b>: kms:ScheduleKeyDeletion (key policy)</p>
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
 * const command = new ScheduleKeyDeletionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScheduleKeyDeletionCommandInput} for command's `input` shape.
 * @see {@link ScheduleKeyDeletionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ScheduleKeyDeletionCommand extends $Command<
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ScheduleKeyDeletionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScheduleKeyDeletionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ScheduleKeyDeletionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ScheduleKeyDeletionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ScheduleKeyDeletionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScheduleKeyDeletionCommandOutput> {
    return deserializeAws_json1_1ScheduleKeyDeletionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
