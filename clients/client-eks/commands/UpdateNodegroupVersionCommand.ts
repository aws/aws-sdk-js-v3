import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { UpdateNodegroupVersionRequest, UpdateNodegroupVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateNodegroupVersionCommand,
  serializeAws_restJson1UpdateNodegroupVersionCommand,
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

export type UpdateNodegroupVersionCommandInput = UpdateNodegroupVersionRequest;
export type UpdateNodegroupVersionCommandOutput = UpdateNodegroupVersionResponse & __MetadataBearer;

/**
 * <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p>
 *         <p>You can update a node group using a launch template only if the node group was
 *             originally deployed with a launch template. If you need to update a custom AMI in a node
 *             group that was deployed with a launch template, then update your custom AMI, specify the
 *             new ID in a new version of the launch template, and then update the node group to the
 *             new version of the launch template.</p>
 *         <p>If you update without a launch template, then you can update to the latest available
 *             AMI version of a node group's current Kubernetes version by not specifying a Kubernetes
 *             version in the request. You can update to the latest AMI version of your cluster's
 *             current Kubernetes version by specifying your cluster's Kubernetes version in the
 *             request. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS
 *                 optimized Amazon Linux 2 AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p>
 *         <p>You cannot roll back a node group to an earlier Kubernetes version or AMI
 *             version.</p>
 *         <p>When a node in a managed node group is terminated due to a scaling action or update,
 *             the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully
 *             and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS
 *             is unable to drain the nodes as a result of a pod disruption budget issue.</p>
 */
export class UpdateNodegroupVersionCommand extends $Command<
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNodegroupVersionCommandInput) {
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
  ): Handler<UpdateNodegroupVersionCommandInput, UpdateNodegroupVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateNodegroupVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNodegroupVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNodegroupVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNodegroupVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNodegroupVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNodegroupVersionCommandOutput> {
    return deserializeAws_restJson1UpdateNodegroupVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
