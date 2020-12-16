import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { UpdateClusterConfigRequest, UpdateClusterConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateClusterConfigCommand,
  serializeAws_restJson1UpdateClusterConfigCommand,
} from "../protocols/Aws_restJson1";
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

export type UpdateClusterConfigCommandInput = UpdateClusterConfigRequest;
export type UpdateClusterConfigCommandOutput = UpdateClusterConfigResponse & __MetadataBearer;

/**
 * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the
 *             update. The response output includes an update ID that you can use to track the status
 *             of your cluster update with the <a>DescribeUpdate</a> API operation.</p>
 *         <p>You can use this API operation to enable or disable exporting the Kubernetes control
 *             plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't
 *             exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS
 *                 Cluster Control Plane Logs</a> in the
 *             <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>.</p>
 *         <note>
 *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported
 *                 control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
 *         </note>
 *         <p>You can also use this API operation to enable or disable public and private access to
 *             your cluster's Kubernetes API server endpoint. By default, public access is enabled, and
 *             private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
 *                 Endpoint Access Control</a> in the <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>. </p>
 *         <important>
 *             <p>At this time, you can not update the subnets or security group IDs for an existing
 *                 cluster.</p>
 *         </important>
 *         <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
 *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
 *             eventually consistent). When the update is complete (either <code>Failed</code> or
 *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
 */
export class UpdateClusterConfigCommand extends $Command<
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateClusterConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateClusterConfigCommandInput, UpdateClusterConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateClusterConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClusterConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateClusterConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateClusterConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateClusterConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClusterConfigCommandOutput> {
    return deserializeAws_restJson1UpdateClusterConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
