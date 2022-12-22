// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  ScheduleKeyDeletionRequest,
  ScheduleKeyDeletionRequestFilterSensitiveLog,
  ScheduleKeyDeletionResponse,
  ScheduleKeyDeletionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ScheduleKeyDeletionCommand,
  serializeAws_json1_1ScheduleKeyDeletionCommand,
} from "../protocols/Aws_json1_1";

export interface ScheduleKeyDeletionCommandInput extends ScheduleKeyDeletionRequest {}
export interface ScheduleKeyDeletionCommandOutput extends ScheduleKeyDeletionResponse, __MetadataBearer {}

/**
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
 *         exception is a multi-Region replica key.) To prevent the use of a KMS key without deleting
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
 *
 *
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
 * const command = new ScheduleKeyDeletionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScheduleKeyDeletionCommandInput} for command's `input` shape.
 * @see {@link ScheduleKeyDeletionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
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
      inputFilterSensitiveLog: ScheduleKeyDeletionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ScheduleKeyDeletionResponseFilterSensitiveLog,
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
