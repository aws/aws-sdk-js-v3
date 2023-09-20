// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { de_CreateClusterCommand, se_CreateClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon EKS control plane. </p>
 *          <p>The Amazon EKS control plane consists of control plane instances that run the
 *             Kubernetes software, such as <code>etcd</code> and the API server. The control plane
 *             runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by
 *             the Amazon EKS API server endpoint. Each Amazon EKS cluster control
 *             plane is single tenant and unique. It runs on its own set of Amazon EC2
 *             instances.</p>
 *          <p>The cluster control plane is provisioned across multiple Availability Zones and
 *             fronted by an Elastic Load Balancing
 *             Network Load Balancer. Amazon EKS also provisions elastic network interfaces in
 *             your VPC subnets to provide connectivity from the control plane instances to the nodes
 *             (for example, to support <code>kubectl exec</code>, <code>logs</code>, and
 *                 <code>proxy</code> data flows).</p>
 *          <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your
 *             cluster's control plane over the Kubernetes API server endpoint and a certificate file
 *             that is created for your cluster.</p>
 *          <p>In most cases, it takes several minutes to create a cluster. After you create an
 *                 Amazon EKS cluster, you must configure your Kubernetes tooling to
 *             communicate with the API server and launch nodes into your cluster. For more
 *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching
 *                     Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // CreateClusterRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   resourcesVpcConfig: { // VpcConfigRequest
 *     subnetIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     endpointPublicAccess: true || false,
 *     endpointPrivateAccess: true || false,
 *     publicAccessCidrs: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   kubernetesNetworkConfig: { // KubernetesNetworkConfigRequest
 *     serviceIpv4Cidr: "STRING_VALUE",
 *     ipFamily: "ipv4" || "ipv6",
 *   },
 *   logging: { // Logging
 *     clusterLogging: [ // LogSetups
 *       { // LogSetup
 *         types: [ // LogTypes
 *           "api" || "audit" || "authenticator" || "controllerManager" || "scheduler",
 *         ],
 *         enabled: true || false,
 *       },
 *     ],
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   encryptionConfig: [ // EncryptionConfigList
 *     { // EncryptionConfig
 *       resources: [
 *         "STRING_VALUE",
 *       ],
 *       provider: { // Provider
 *         keyArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   outpostConfig: { // OutpostConfigRequest
 *     outpostArns: [ // required
 *       "STRING_VALUE",
 *     ],
 *     controlPlaneInstanceType: "STRING_VALUE", // required
 *     controlPlanePlacement: { // ControlPlanePlacementRequest
 *       groupName: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
 * //   cluster: { // Cluster
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     version: "STRING_VALUE",
 * //     endpoint: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     resourcesVpcConfig: { // VpcConfigResponse
 * //       subnetIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       clusterSecurityGroupId: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       endpointPublicAccess: true || false,
 * //       endpointPrivateAccess: true || false,
 * //       publicAccessCidrs: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     kubernetesNetworkConfig: { // KubernetesNetworkConfigResponse
 * //       serviceIpv4Cidr: "STRING_VALUE",
 * //       serviceIpv6Cidr: "STRING_VALUE",
 * //       ipFamily: "ipv4" || "ipv6",
 * //     },
 * //     logging: { // Logging
 * //       clusterLogging: [ // LogSetups
 * //         { // LogSetup
 * //           types: [ // LogTypes
 * //             "api" || "audit" || "authenticator" || "controllerManager" || "scheduler",
 * //           ],
 * //           enabled: true || false,
 * //         },
 * //       ],
 * //     },
 * //     identity: { // Identity
 * //       oidc: { // OIDC
 * //         issuer: "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING" || "PENDING",
 * //     certificateAuthority: { // Certificate
 * //       data: "STRING_VALUE",
 * //     },
 * //     clientRequestToken: "STRING_VALUE",
 * //     platformVersion: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     encryptionConfig: [ // EncryptionConfigList
 * //       { // EncryptionConfig
 * //         resources: [
 * //           "STRING_VALUE",
 * //         ],
 * //         provider: { // Provider
 * //           keyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     connectorConfig: { // ConnectorConfigResponse
 * //       activationId: "STRING_VALUE",
 * //       activationCode: "STRING_VALUE",
 * //       activationExpiry: new Date("TIMESTAMP"),
 * //       provider: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //     id: "STRING_VALUE",
 * //     health: { // ClusterHealth
 * //       issues: [ // ClusterIssueList
 * //         { // ClusterIssue
 * //           code: "AccessDenied" || "ClusterUnreachable" || "ConfigurationConflict" || "InternalFailure" || "ResourceLimitExceeded" || "ResourceNotFound",
 * //           message: "STRING_VALUE",
 * //           resourceIds: "<StringList>",
 * //         },
 * //       ],
 * //     },
 * //     outpostConfig: { // OutpostConfigResponse
 * //       outpostArns: "<StringList>", // required
 * //       controlPlaneInstanceType: "STRING_VALUE", // required
 * //       controlPlanePlacement: { // ControlPlanePlacementResponse
 * //         groupName: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link UnsupportedAvailabilityZoneException} (client fault)
 *  <p>At least one of your specified cluster subnets is in an Availability Zone that does
 *             not support Amazon EKS. The exception output specifies the supported
 *             Availability Zones for your account, from which you can choose subnets for your
 *             cluster.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @example To create a new cluster
 * ```javascript
 * // The following example creates an Amazon EKS cluster called prod.
 * const input = {
 *   "version": "1.10",
 *   "name": "prod",
 *   "clientRequestToken": "1d2129a1-3d38-460a-9756-e5b91fddb951",
 *   "resourcesVpcConfig": {
 *     "securityGroupIds": [
 *       "sg-6979fe18"
 *     ],
 *     "subnetIds": [
 *       "subnet-6782e71e",
 *       "subnet-e7e761ac"
 *     ]
 *   },
 *   "roleArn": "arn:aws:iam::012345678910:role/eks-service-role-AWSServiceRoleForAmazonEKS-J7ONKE3BQ4PI"
 * };
 * const command = new CreateClusterCommand(input);
 * await client.send(command);
 * // example id: to-create-a-new-cluster-1527868185648
 * ```
 *
 */
export class CreateClusterCommand extends $Command<
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
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
  constructor(readonly input: CreateClusterCommandInput) {
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
  ): Handler<CreateClusterCommandInput, CreateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "CreateCluster",
      },
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
  private serialize(input: CreateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterCommandOutput> {
    return de_CreateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
