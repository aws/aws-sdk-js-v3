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

import { ClustersMessage, DescribeClustersMessage } from "../models/models_0";
import { de_DescribeClustersCommand, se_DescribeClustersCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandInput extends DescribeClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandOutput extends ClustersMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns properties of provisioned clusters including general cluster properties,
 *             cluster database properties, maintenance and backup properties, and security and access
 *             properties. This operation supports pagination.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all clusters that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all clusters that have any
 *             combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, clusters are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClustersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClustersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClustersMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * // { // ClustersMessage
 * //   Marker: "STRING_VALUE",
 * //   Clusters: [ // ClusterList
 * //     { // Cluster
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       ClusterStatus: "STRING_VALUE",
 * //       ClusterAvailabilityStatus: "STRING_VALUE",
 * //       ModifyStatus: "STRING_VALUE",
 * //       MasterUsername: "STRING_VALUE",
 * //       DBName: "STRING_VALUE",
 * //       Endpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         VpcEndpoints: [ // VpcEndpointsList
 * //           { // VpcEndpoint
 * //             VpcEndpointId: "STRING_VALUE",
 * //             VpcId: "STRING_VALUE",
 * //             NetworkInterfaces: [ // NetworkInterfaceList
 * //               { // NetworkInterface
 * //                 NetworkInterfaceId: "STRING_VALUE",
 * //                 SubnetId: "STRING_VALUE",
 * //                 PrivateIpAddress: "STRING_VALUE",
 * //                 AvailabilityZone: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       AutomatedSnapshotRetentionPeriod: Number("int"),
 * //       ManualSnapshotRetentionPeriod: Number("int"),
 * //       ClusterSecurityGroups: [ // ClusterSecurityGroupMembershipList
 * //         { // ClusterSecurityGroupMembership
 * //           ClusterSecurityGroupName: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ClusterParameterGroups: [ // ClusterParameterGroupStatusList
 * //         { // ClusterParameterGroupStatus
 * //           ParameterGroupName: "STRING_VALUE",
 * //           ParameterApplyStatus: "STRING_VALUE",
 * //           ClusterParameterStatusList: [ // ClusterParameterStatusList
 * //             { // ClusterParameterStatus
 * //               ParameterName: "STRING_VALUE",
 * //               ParameterApplyStatus: "STRING_VALUE",
 * //               ParameterApplyErrorDescription: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       ClusterSubnetGroupName: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PendingModifiedValues: { // PendingModifiedValues
 * //         MasterUserPassword: "STRING_VALUE",
 * //         NodeType: "STRING_VALUE",
 * //         NumberOfNodes: Number("int"),
 * //         ClusterType: "STRING_VALUE",
 * //         ClusterVersion: "STRING_VALUE",
 * //         AutomatedSnapshotRetentionPeriod: Number("int"),
 * //         ClusterIdentifier: "STRING_VALUE",
 * //         PubliclyAccessible: true || false,
 * //         EnhancedVpcRouting: true || false,
 * //         MaintenanceTrackName: "STRING_VALUE",
 * //         EncryptionType: "STRING_VALUE",
 * //       },
 * //       ClusterVersion: "STRING_VALUE",
 * //       AllowVersionUpgrade: true || false,
 * //       NumberOfNodes: Number("int"),
 * //       PubliclyAccessible: true || false,
 * //       Encrypted: true || false,
 * //       RestoreStatus: { // RestoreStatus
 * //         Status: "STRING_VALUE",
 * //         CurrentRestoreRateInMegaBytesPerSecond: Number("double"),
 * //         SnapshotSizeInMegaBytes: Number("long"),
 * //         ProgressInMegaBytes: Number("long"),
 * //         ElapsedTimeInSeconds: Number("long"),
 * //         EstimatedTimeToCompletionInSeconds: Number("long"),
 * //       },
 * //       DataTransferProgress: { // DataTransferProgress
 * //         Status: "STRING_VALUE",
 * //         CurrentRateInMegaBytesPerSecond: Number("double"),
 * //         TotalDataInMegaBytes: Number("long"),
 * //         DataTransferredInMegaBytes: Number("long"),
 * //         EstimatedTimeToCompletionInSeconds: Number("long"),
 * //         ElapsedTimeInSeconds: Number("long"),
 * //       },
 * //       HsmStatus: { // HsmStatus
 * //         HsmClientCertificateIdentifier: "STRING_VALUE",
 * //         HsmConfigurationIdentifier: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //       ClusterSnapshotCopyStatus: { // ClusterSnapshotCopyStatus
 * //         DestinationRegion: "STRING_VALUE",
 * //         RetentionPeriod: Number("long"),
 * //         ManualSnapshotRetentionPeriod: Number("int"),
 * //         SnapshotCopyGrantName: "STRING_VALUE",
 * //       },
 * //       ClusterPublicKey: "STRING_VALUE",
 * //       ClusterNodes: [ // ClusterNodesList
 * //         { // ClusterNode
 * //           NodeRole: "STRING_VALUE",
 * //           PrivateIPAddress: "STRING_VALUE",
 * //           PublicIPAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ElasticIpStatus: { // ElasticIpStatus
 * //         ElasticIp: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //       ClusterRevisionNumber: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       KmsKeyId: "STRING_VALUE",
 * //       EnhancedVpcRouting: true || false,
 * //       IamRoles: [ // ClusterIamRoleList
 * //         { // ClusterIamRole
 * //           IamRoleArn: "STRING_VALUE",
 * //           ApplyStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PendingActions: [ // PendingActionsList
 * //         "STRING_VALUE",
 * //       ],
 * //       MaintenanceTrackName: "STRING_VALUE",
 * //       ElasticResizeNumberOfNodeOptions: "STRING_VALUE",
 * //       DeferredMaintenanceWindows: [ // DeferredMaintenanceWindowsList
 * //         { // DeferredMaintenanceWindow
 * //           DeferMaintenanceIdentifier: "STRING_VALUE",
 * //           DeferMaintenanceStartTime: new Date("TIMESTAMP"),
 * //           DeferMaintenanceEndTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       SnapshotScheduleIdentifier: "STRING_VALUE",
 * //       SnapshotScheduleState: "MODIFYING" || "ACTIVE" || "FAILED",
 * //       ExpectedNextSnapshotScheduleTime: new Date("TIMESTAMP"),
 * //       ExpectedNextSnapshotScheduleTimeStatus: "STRING_VALUE",
 * //       NextMaintenanceWindowStartTime: new Date("TIMESTAMP"),
 * //       ResizeInfo: { // ResizeInfo
 * //         ResizeType: "STRING_VALUE",
 * //         AllowCancelResize: true || false,
 * //       },
 * //       AvailabilityZoneRelocationStatus: "STRING_VALUE",
 * //       ClusterNamespaceArn: "STRING_VALUE",
 * //       TotalStorageCapacityInMegaBytes: Number("long"),
 * //       AquaConfiguration: { // AquaConfiguration
 * //         AquaStatus: "enabled" || "disabled" || "applying",
 * //         AquaConfigurationStatus: "enabled" || "disabled" || "auto",
 * //       },
 * //       DefaultIamRoleArn: "STRING_VALUE",
 * //       ReservedNodeExchangeStatus: { // ReservedNodeExchangeStatus
 * //         ReservedNodeExchangeRequestId: "STRING_VALUE",
 * //         Status: "REQUESTED" || "PENDING" || "IN_PROGRESS" || "RETRYING" || "SUCCEEDED" || "FAILED",
 * //         RequestTime: new Date("TIMESTAMP"),
 * //         SourceReservedNodeId: "STRING_VALUE",
 * //         SourceReservedNodeType: "STRING_VALUE",
 * //         SourceReservedNodeCount: Number("int"),
 * //         TargetReservedNodeOfferingId: "STRING_VALUE",
 * //         TargetReservedNodeType: "STRING_VALUE",
 * //         TargetReservedNodeCount: Number("int"),
 * //       },
 * //       CustomDomainName: "STRING_VALUE",
 * //       CustomDomainCertificateArn: "STRING_VALUE",
 * //       CustomDomainCertificateExpiryDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClustersCommandInput - {@link DescribeClustersCommandInput}
 * @returns {@link DescribeClustersCommandOutput}
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeClustersCommand extends $Command<
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClustersCommand";
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
  private serialize(input: DescribeClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClustersCommandOutput> {
    return de_DescribeClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
