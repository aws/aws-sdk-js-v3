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
} from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { UpdateClusterConfigRequest, UpdateClusterConfigResponse } from "../models/models_0";
import { de_UpdateClusterConfigCommand, se_UpdateClusterConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterConfigCommand}.
 */
export interface UpdateClusterConfigCommandInput extends UpdateClusterConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterConfigCommand}.
 */
export interface UpdateClusterConfigCommandOutput extends UpdateClusterConfigResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // UpdateClusterConfigRequest
 *   name: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateClusterConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterConfigResponse
 * //   update: { // Update
 * //     id: "STRING_VALUE",
 * //     status: "InProgress" || "Failed" || "Cancelled" || "Successful",
 * //     type: "VersionUpdate" || "EndpointAccessUpdate" || "LoggingUpdate" || "ConfigUpdate" || "AssociateIdentityProviderConfig" || "DisassociateIdentityProviderConfig" || "AssociateEncryptionConfig" || "AddonUpdate",
 * //     params: [ // UpdateParams
 * //       { // UpdateParam
 * //         type: "Version" || "PlatformVersion" || "EndpointPrivateAccess" || "EndpointPublicAccess" || "ClusterLogging" || "DesiredSize" || "LabelsToAdd" || "LabelsToRemove" || "TaintsToAdd" || "TaintsToRemove" || "MaxSize" || "MinSize" || "ReleaseVersion" || "PublicAccessCidrs" || "LaunchTemplateName" || "LaunchTemplateVersion" || "IdentityProviderConfig" || "EncryptionConfig" || "AddonVersion" || "ServiceAccountRoleArn" || "ResolveConflicts" || "MaxUnavailable" || "MaxUnavailablePercentage",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     errors: [ // ErrorDetails
 * //       { // ErrorDetail
 * //         errorCode: "SubnetNotFound" || "SecurityGroupNotFound" || "EniLimitReached" || "IpNotAvailable" || "AccessDenied" || "OperationNotPermitted" || "VpcIdNotFound" || "Unknown" || "NodeCreationFailure" || "PodEvictionFailure" || "InsufficientFreeAddresses" || "ClusterUnreachable" || "InsufficientNumberOfReplicas" || "ConfigurationConflict" || "AdmissionRequestDenied" || "UnsupportedAddonModification" || "K8sResourceNotFound",
 * //         errorMessage: "STRING_VALUE",
 * //         resourceIds: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateClusterConfigCommandInput - {@link UpdateClusterConfigCommandInput}
 * @returns {@link UpdateClusterConfigCommandOutput}
 * @see {@link UpdateClusterConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: UpdateClusterConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateClusterConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClusterConfigCommandOutput> {
    return de_UpdateClusterConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
