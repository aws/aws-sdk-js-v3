import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateFargateProfileRequest, CreateFargateProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateFargateProfileCommand,
  serializeAws_restJson1CreateFargateProfileCommand,
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

export type CreateFargateProfileCommandInput = CreateFargateProfileRequest;
export type CreateFargateProfileCommandOutput = CreateFargateProfileResponse & __MetadataBearer;

/**
 * <p>Creates an AWS Fargate profile for your Amazon EKS cluster. You must have at least one Fargate
 *             profile in a cluster to be able to run pods on Fargate.</p>
 *         <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify
 *             which pods run on which Fargate profile. This declaration is done through the profile’s
 *             selectors. Each profile can have up to five selectors that contain a namespace and
 *             labels. A namespace is required for every selector. The label field consists of multiple
 *             optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a
 *             to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is
 *             run on Fargate.</p>
 *         <p>When you create a Fargate profile, you must specify a pod execution role to use with the
 *             pods that are scheduled with the profile. This role is added to the cluster's Kubernetes
 *                 <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access
 *                 Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is
 *             running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can
 *             appear in your cluster as a node. The pod execution role also provides IAM permissions
 *             to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more
 *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
 *         <p>Fargate profiles are immutable. However, you can create a new updated profile to replace
 *             an existing profile and then delete the original after the updated profile has finished
 *             creating.</p>
 *         <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must
 *             wait for that Fargate profile to finish deleting before you can create any other profiles
 *             in that cluster.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">AWS Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>
 */
export class CreateFargateProfileCommand extends $Command<
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFargateProfileCommandInput) {
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
  ): Handler<CreateFargateProfileCommandInput, CreateFargateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateFargateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFargateProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFargateProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFargateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFargateProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFargateProfileCommandOutput> {
    return deserializeAws_restJson1CreateFargateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
