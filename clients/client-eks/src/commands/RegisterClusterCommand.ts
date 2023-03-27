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
import { RegisterClusterRequest, RegisterClusterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterClusterCommand,
  serializeAws_restJson1RegisterClusterCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RegisterClusterCommand}.
 */
export interface RegisterClusterCommandInput extends RegisterClusterRequest {}
/**
 * @public
 *
 * The output of {@link RegisterClusterCommand}.
 */
export interface RegisterClusterCommandOutput extends RegisterClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p>
 *          <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to
 *             view current information about the cluster and its nodes. </p>
 *          <p>Cluster connection requires two steps. First, send a <code>
 *                <a>RegisterClusterRequest</a>
 *             </code> to add it to the Amazon EKS
 *             control plane.</p>
 *          <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and
 *                 <code>activationCode</code> must be applied to the Kubernetes cluster through it's
 *             native provider to provide visibility.</p>
 *          <p>After the Manifest is updated and applied, then the connected cluster is visible to
 *             the Amazon EKS control plane. If the Manifest is not applied within three days,
 *             then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, RegisterClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, RegisterClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // RegisterClusterRequest
 *   name: "STRING_VALUE", // required
 *   connectorConfig: { // ConnectorConfigRequest
 *     roleArn: "STRING_VALUE", // required
 *     provider: "EKS_ANYWHERE" || "ANTHOS" || "GKE" || "AKS" || "OPENSHIFT" || "TANZU" || "RANCHER" || "EC2" || "OTHER", // required
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RegisterClusterCommandInput - {@link RegisterClusterCommandInput}
 * @returns {@link RegisterClusterCommandOutput}
 * @see {@link RegisterClusterCommandInput} for command's `input` shape.
 * @see {@link RegisterClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy
 *             attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 Management</a> in the <i>IAM User Guide</i>. </p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
 *
 * @throws {@link ResourcePropagationDelayException} (client fault)
 *  <p>Required resources (such as service-linked roles) were created and are still
 *             propagating. Retry later.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 *
 */
export class RegisterClusterCommand extends $Command<
  RegisterClusterCommandInput,
  RegisterClusterCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "RegisterClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RegisterClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterClusterCommandOutput> {
    return deserializeAws_restJson1RegisterClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
