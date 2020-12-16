import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RestoreFromClusterSnapshotMessage, RestoreFromClusterSnapshotResult } from "../models/models_1";
import {
  deserializeAws_queryRestoreFromClusterSnapshotCommand,
  serializeAws_queryRestoreFromClusterSnapshotCommand,
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

export type RestoreFromClusterSnapshotCommandInput = RestoreFromClusterSnapshotMessage;
export type RestoreFromClusterSnapshotCommandOutput = RestoreFromClusterSnapshotResult & __MetadataBearer;

/**
 * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
 *             cluster with the same configuration as the original cluster from which the snapshot was
 *             created, except that the new cluster is created with the default cluster security and
 *             parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different
 *             parameter group with the restored cluster. If you are using a DS node type, you can also
 *             choose to change to another DS node type of the same size during restore.</p>
 *         <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where
 *             you want the cluster restored.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class RestoreFromClusterSnapshotCommand extends $Command<
  RestoreFromClusterSnapshotCommandInput,
  RestoreFromClusterSnapshotCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreFromClusterSnapshotCommandInput) {
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
  ): Handler<RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RestoreFromClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreFromClusterSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreFromClusterSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreFromClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreFromClusterSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreFromClusterSnapshotCommandOutput> {
    return deserializeAws_queryRestoreFromClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
