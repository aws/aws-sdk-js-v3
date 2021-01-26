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

export type ScheduleKeyDeletionCommandInput = ScheduleKeyDeletionRequest;
export type ScheduleKeyDeletionCommandOutput = ScheduleKeyDeletionResponse & __MetadataBearer;

/**
 * <p>Schedules the deletion of a customer master key (CMK). You may provide a waiting period,
 *       specified in days, before deletion occurs. If you do not provide a waiting period, the default
 *       period of 30 days is used. When this operation is successful, the key state of the CMK changes
 *       to <code>PendingDeletion</code>. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to cancel the deletion of the CMK. After the waiting period
 *       ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that
 *       refer to it.</p>
 *          <important>
 *             <p>Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is
 *         deleted, all data that was encrypted under the CMK is unrecoverable. To prevent the use of a
 *         CMK without deleting it, use <a>DisableKey</a>.</p>
 *          </important>
 *          <p>If you schedule deletion of a CMK from a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, when the waiting period
 *       expires, <code>ScheduleKeyDeletion</code> deletes the CMK from AWS KMS. Then AWS KMS makes a best
 *       effort to delete the key material from the associated AWS CloudHSM cluster. However, you might need
 *       to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key
 *         material</a> from the cluster and its backups.</p>
 *          <p>You cannot perform this operation on a CMK in a different AWS account.</p>
 *          <p>For more information about scheduling a CMK for deletion, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting Customer Master Keys</a> in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
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
