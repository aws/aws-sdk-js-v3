import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { RegisterClusterRequest, RegisterClusterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterClusterCommand,
  serializeAws_restJson1RegisterClusterCommand,
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

export interface RegisterClusterCommandInput extends RegisterClusterRequest {}
export interface RegisterClusterCommandOutput extends RegisterClusterResponse, __MetadataBearer {}

/**
 * <p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p>
 *         <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes.
 *          </p>
 *         <p>Cluster connection requires two steps. First, send a <code>
 *                <a>RegisterClusterRequest</a>
 *             </code> to add it to the Amazon EKS control plane.</p>
 *         <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p>
 *
 *         <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within a set amount of time,
 *             then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, RegisterClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, RegisterClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new RegisterClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterClusterCommandInput} for command's `input` shape.
 * @see {@link RegisterClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterClusterCommand extends $Command<
  RegisterClusterCommandInput,
  RegisterClusterCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterClusterCommandInput) {
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
  ): Handler<RegisterClusterCommandInput, RegisterClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "RegisterClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterClusterCommandOutput> {
    return deserializeAws_restJson1RegisterClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
