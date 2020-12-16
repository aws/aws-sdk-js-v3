import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateNodegroupRequest, CreateNodegroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateNodegroupCommand,
  serializeAws_restJson1CreateNodegroupCommand,
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

export type CreateNodegroupCommandInput = CreateNodegroupRequest;
export type CreateNodegroupCommandOutput = CreateNodegroupResponse & __MetadataBearer;

/**
 * <p>Creates a managed worker node group for an Amazon EKS cluster. You can only create a node
 *             group for your cluster that is equal to the current Kubernetes version for the cluster.
 *             All node groups are created with the latest AMI release version for the respective minor
 *             Kubernetes version of the cluster, unless you deploy a custom AMI using a launch
 *             template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch
 *                 template support</a>.</p>
 *         <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that
 *             are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS
 *             optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed
 *                 Node Groups</a> in the <i>Amazon EKS User Guide</i>. </p>
 */
export class CreateNodegroupCommand extends $Command<
  CreateNodegroupCommandInput,
  CreateNodegroupCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNodegroupCommandInput) {
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
  ): Handler<CreateNodegroupCommandInput, CreateNodegroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateNodegroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNodegroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNodegroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNodegroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNodegroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNodegroupCommandOutput> {
    return deserializeAws_restJson1CreateNodegroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
