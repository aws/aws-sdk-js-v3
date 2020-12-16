import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterMessage, DeleteClusterResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteClusterCommand,
  serializeAws_queryDeleteClusterCommand,
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

export type DeleteClusterCommandInput = DeleteClusterMessage;
export type DeleteClusterCommandOutput = DeleteClusterResult & __MetadataBearer;

/**
 * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web
 *             service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete
 *             operation cannot be canceled or reverted once submitted.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you want to shut down the cluster and retain it for future use, set
 *                 <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a
 *             name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this
 *             snapshot to resume using the cluster. If a final cluster snapshot is requested, the
 *             status of the cluster will be "final-snapshot" while the snapshot is being taken, then
 *             it's "deleting" once Amazon Redshift begins deleting the cluster. </p>
 *         <p>
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class DeleteClusterCommand extends $Command<
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteClusterCommandInput) {
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
  ): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterCommandOutput> {
    return deserializeAws_queryDeleteClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
