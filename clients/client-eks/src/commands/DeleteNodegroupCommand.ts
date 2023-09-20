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
import { DeleteNodegroupRequest, DeleteNodegroupResponse } from "../models/models_0";
import { de_DeleteNodegroupCommand, se_DeleteNodegroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNodegroupCommand}.
 */
export interface DeleteNodegroupCommandInput extends DeleteNodegroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNodegroupCommand}.
 */
export interface DeleteNodegroupCommandOutput extends DeleteNodegroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an Amazon EKS node group for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeleteNodegroupRequest
 *   clusterName: "STRING_VALUE", // required
 *   nodegroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteNodegroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNodegroupResponse
 * //   nodegroup: { // Nodegroup
 * //     nodegroupName: "STRING_VALUE",
 * //     nodegroupArn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     releaseVersion: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "DEGRADED",
 * //     capacityType: "ON_DEMAND" || "SPOT",
 * //     scalingConfig: { // NodegroupScalingConfig
 * //       minSize: Number("int"),
 * //       maxSize: Number("int"),
 * //       desiredSize: Number("int"),
 * //     },
 * //     instanceTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     subnets: [
 * //       "STRING_VALUE",
 * //     ],
 * //     remoteAccess: { // RemoteAccessConfig
 * //       ec2SshKey: "STRING_VALUE",
 * //       sourceSecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     amiType: "AL2_x86_64" || "AL2_x86_64_GPU" || "AL2_ARM_64" || "CUSTOM" || "BOTTLEROCKET_ARM_64" || "BOTTLEROCKET_x86_64" || "BOTTLEROCKET_ARM_64_NVIDIA" || "BOTTLEROCKET_x86_64_NVIDIA" || "WINDOWS_CORE_2019_x86_64" || "WINDOWS_FULL_2019_x86_64" || "WINDOWS_CORE_2022_x86_64" || "WINDOWS_FULL_2022_x86_64",
 * //     nodeRole: "STRING_VALUE",
 * //     labels: { // labelsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     taints: [ // taintsList
 * //       { // Taint
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //         effect: "NO_SCHEDULE" || "NO_EXECUTE" || "PREFER_NO_SCHEDULE",
 * //       },
 * //     ],
 * //     resources: { // NodegroupResources
 * //       autoScalingGroups: [ // AutoScalingGroupList
 * //         { // AutoScalingGroup
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       remoteAccessSecurityGroup: "STRING_VALUE",
 * //     },
 * //     diskSize: Number("int"),
 * //     health: { // NodegroupHealth
 * //       issues: [ // IssueList
 * //         { // Issue
 * //           code: "AutoScalingGroupNotFound" || "AutoScalingGroupInvalidConfiguration" || "Ec2SecurityGroupNotFound" || "Ec2SecurityGroupDeletionFailure" || "Ec2LaunchTemplateNotFound" || "Ec2LaunchTemplateVersionMismatch" || "Ec2SubnetNotFound" || "Ec2SubnetInvalidConfiguration" || "IamInstanceProfileNotFound" || "Ec2SubnetMissingIpv6Assignment" || "IamLimitExceeded" || "IamNodeRoleNotFound" || "NodeCreationFailure" || "AsgInstanceLaunchFailures" || "InstanceLimitExceeded" || "InsufficientFreeAddresses" || "AccessDenied" || "InternalFailure" || "ClusterUnreachable" || "AmiIdNotFound" || "AutoScalingGroupOptInRequired" || "AutoScalingGroupRateLimitExceeded" || "Ec2LaunchTemplateDeletionFailure" || "Ec2LaunchTemplateInvalidConfiguration" || "Ec2LaunchTemplateMaxLimitExceeded" || "Ec2SubnetListTooLong" || "IamThrottling" || "NodeTerminationFailure" || "PodEvictionFailure" || "SourceEc2LaunchTemplateNotFound" || "LimitExceeded" || "Unknown" || "AutoScalingGroupInstanceRefreshActive",
 * //           message: "STRING_VALUE",
 * //           resourceIds: "<StringList>",
 * //         },
 * //       ],
 * //     },
 * //     updateConfig: { // NodegroupUpdateConfig
 * //       maxUnavailable: Number("int"),
 * //       maxUnavailablePercentage: Number("int"),
 * //     },
 * //     launchTemplate: { // LaunchTemplateSpecification
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteNodegroupCommandInput - {@link DeleteNodegroupCommandInput}
 * @returns {@link DeleteNodegroupCommandOutput}
 * @see {@link DeleteNodegroupCommandInput} for command's `input` shape.
 * @see {@link DeleteNodegroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DeleteNodegroupCommand extends $Command<
  DeleteNodegroupCommandInput,
  DeleteNodegroupCommandOutput,
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
  constructor(readonly input: DeleteNodegroupCommandInput) {
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
  ): Handler<DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNodegroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteNodegroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "DeleteNodegroup",
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
  private serialize(input: DeleteNodegroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteNodegroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNodegroupCommandOutput> {
    return de_DeleteNodegroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
