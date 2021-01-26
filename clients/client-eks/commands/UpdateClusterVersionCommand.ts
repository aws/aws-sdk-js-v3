import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { UpdateClusterVersionRequest, UpdateClusterVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateClusterVersionCommand,
  serializeAws_restJson1UpdateClusterVersionCommand,
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

export type UpdateClusterVersionCommandInput = UpdateClusterVersionRequest;
export type UpdateClusterVersionCommandOutput = UpdateClusterVersionResponse & __MetadataBearer;

/**
 * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues
 *             to function during the update. The response output includes an update ID that you can
 *             use to track the status of your cluster update with the <a>DescribeUpdate</a>
 *             API operation.</p>
 *         <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
 *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
 *             eventually consistent). When the update is complete (either <code>Failed</code> or
 *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
 *         <p>If your cluster has managed node groups attached to it, all of your node groups’
 *             Kubernetes versions must match the cluster’s Kubernetes version in order to update the
 *             cluster to a new Kubernetes version.</p>
 */
export class UpdateClusterVersionCommand extends $Command<
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateClusterVersionCommandInput) {
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
  ): Handler<UpdateClusterVersionCommandInput, UpdateClusterVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateClusterVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClusterVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateClusterVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateClusterVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateClusterVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClusterVersionCommandOutput> {
    return deserializeAws_restJson1UpdateClusterVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
