import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CopyClusterSnapshotMessage, CopyClusterSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryCopyClusterSnapshotCommand,
  serializeAws_queryCopyClusterSnapshotCommand,
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

export type CopyClusterSnapshotCommandInput = CopyClusterSnapshotMessage;
export type CopyClusterSnapshotCommandOutput = CopyClusterSnapshotResult & __MetadataBearer;

/**
 * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot.
 *             The source must be an automated snapshot and it must be in the available
 *             state.</p>
 *         <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
 *             cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
 *             automatically deletes it. If you want to keep an automated snapshot for a longer period,
 *             you can make a manual copy of the snapshot. Manual snapshots are retained until you
 *             delete them.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class CopyClusterSnapshotCommand extends $Command<
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyClusterSnapshotCommandInput) {
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
  ): Handler<CopyClusterSnapshotCommandInput, CopyClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CopyClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyClusterSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CopyClusterSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyClusterSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyClusterSnapshotCommandOutput> {
    return deserializeAws_queryCopyClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
