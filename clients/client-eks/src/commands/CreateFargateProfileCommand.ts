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
  CreateFargateProfileRequest,
  CreateFargateProfileRequestFilterSensitiveLog,
  CreateFargateProfileResponse,
  CreateFargateProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateFargateProfileCommand,
  serializeAws_restJson1CreateFargateProfileCommand,
} from "../protocols/Aws_restJson1";

export interface CreateFargateProfileCommandInput extends CreateFargateProfileRequest {}
export interface CreateFargateProfileCommandOutput extends CreateFargateProfileResponse, __MetadataBearer {}

/**
 * <p>Creates an Fargate profile for your Amazon EKS cluster. You
 *             must have at least one Fargate profile in a cluster to be able to run
 *             pods on Fargate.</p>
 *          <p>The Fargate profile allows an administrator to declare which pods run
 *             on Fargate and specify which pods run on which Fargate
 *             profile. This declaration is done through the profile’s selectors. Each profile can have
 *             up to five selectors that contain a namespace and labels. A namespace is required for
 *             every selector. The label field consists of multiple optional key-value pairs. Pods that
 *             match the selectors are scheduled on Fargate. If a to-be-scheduled pod
 *             matches any of the selectors in the Fargate profile, then that pod is run
 *             on Fargate.</p>
 *          <p>When you create a Fargate profile, you must specify a pod execution
 *             role to use with the pods that are scheduled with the profile. This role is added to the
 *             cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the
 *                 <code>kubelet</code> that is running on the Fargate infrastructure
 *             can register with your Amazon EKS cluster so that it can appear in your cluster
 *             as a node. The pod execution role also provides IAM permissions to the
 *                 Fargate infrastructure to allow read access to Amazon ECR
 *             image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod
 *                 Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
 *          <p>Fargate profiles are immutable. However, you can create a new updated
 *             profile to replace an existing profile and then delete the original after the updated
 *             profile has finished creating.</p>
 *          <p>If any Fargate profiles in a cluster are in the <code>DELETING</code>
 *             status, you must wait for that Fargate profile to finish deleting before
 *             you can create any other profiles in that cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the
 *             <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateFargateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFargateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class CreateFargateProfileCommand extends $Command<
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFargateProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateFargateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFargateProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFargateProfileResponseFilterSensitiveLog,
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
