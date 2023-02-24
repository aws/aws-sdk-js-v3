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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  UpdateClusterConfigRequest,
  UpdateClusterConfigRequestFilterSensitiveLog,
  UpdateClusterConfigResponse,
  UpdateClusterConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateClusterConfigCommand,
  serializeAws_restJson1UpdateClusterConfigCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateClusterConfigCommandInput extends UpdateClusterConfigRequest {}
export interface UpdateClusterConfigCommandOutput extends UpdateClusterConfigResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to
 *             function during the update. The response output includes an update ID that you can use
 *             to track the status of your cluster update with the <a>DescribeUpdate</a> API
 *             operation.</p>
 *          <p>You can use this API operation to enable or disable exporting the Kubernetes control
 *             plane logs for your cluster to CloudWatch Logs. By default, cluster control plane
 *             logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the
 *                 <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>.</p>
 *          <note>
 *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
 *                 exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch
 *                 Pricing</a>.</p>
 *          </note>
 *          <p>You can also use this API operation to enable or disable public and private access to
 *             your cluster's Kubernetes API server endpoint. By default, public access is enabled, and
 *             private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
 *                 <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>. </p>
 *          <important>
 *             <p>You can't update the subnets or security group IDs for an existing cluster.</p>
 *          </important>
 *          <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
 *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
 *             eventually consistent). When the update is complete (either <code>Failed</code> or
 *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateClusterConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateClusterConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateClusterConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class UpdateClusterConfigCommand extends $Command<
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
  EKSClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateClusterConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateClusterConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClusterConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateClusterConfigResponseFilterSensitiveLog,
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
