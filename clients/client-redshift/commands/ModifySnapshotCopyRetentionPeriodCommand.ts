import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifySnapshotCopyRetentionPeriodMessage, ModifySnapshotCopyRetentionPeriodResult } from "../models/models_1";
import {
  deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand,
  serializeAws_queryModifySnapshotCopyRetentionPeriodCommand,
} from "../protocols/Aws_query";
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

export type ModifySnapshotCopyRetentionPeriodCommandInput = ModifySnapshotCopyRetentionPeriodMessage;
export type ModifySnapshotCopyRetentionPeriodCommandOutput = ModifySnapshotCopyRetentionPeriodResult & __MetadataBearer;

/**
 * <p>Modifies the number of days to retain snapshots in the destination AWS Region after
 *             they are copied from the source AWS Region. By default, this operation only changes the
 *             retention period of copied automated snapshots. The retention periods for both new and
 *             existing copied automated snapshots are updated with the new retention period. You can
 *             set the manual option to change only the retention periods of copied manual snapshots.
 *             If you set this option, only newly copied manual snapshots have the new retention
 *             period. </p>
 */
export class ModifySnapshotCopyRetentionPeriodCommand extends $Command<
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifySnapshotCopyRetentionPeriodCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifySnapshotCopyRetentionPeriodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySnapshotCopyRetentionPeriodMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifySnapshotCopyRetentionPeriodResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifySnapshotCopyRetentionPeriodCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifySnapshotCopyRetentionPeriodCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> {
    return deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
