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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheClusterMessage, DescribeCacheClustersMessage } from "../models/models_0";
import { de_DescribeCacheClustersCommand, se_DescribeCacheClustersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheClustersCommand}.
 */
export interface DescribeCacheClustersCommandInput extends DescribeCacheClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheClustersCommand}.
 */
export interface DescribeCacheClustersCommandOutput extends CacheClusterMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all provisioned clusters if no cluster identifier is
 *             specified, or about a specific cache cluster if a cluster identifier is supplied.</p>
 *          <p>By default, abbreviated information about the clusters is returned. You can use the
 *             optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information
 *             about the cache nodes associated with the clusters. These details include the DNS
 *             address and port for the cache node endpoint.</p>
 *          <p>If the cluster is in the <i>creating</i> state, only cluster-level
 *             information is displayed until all of the nodes are successfully provisioned.</p>
 *          <p>If the cluster is in the <i>deleting</i> state, only cluster-level
 *             information is displayed.</p>
 *          <p>If cache nodes are currently being added to the cluster, node endpoint information and
 *             creation time for the additional nodes are not displayed until they are completely
 *             provisioned. When the cluster state is <i>available</i>, the cluster is
 *             ready for use.</p>
 *          <p>If cache nodes are currently being removed from the cluster, no endpoint information
 *             for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheClustersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheClustersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheClustersMessage
 *   CacheClusterId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   ShowCacheNodeInfo: true || false,
 *   ShowCacheClustersNotInReplicationGroups: true || false,
 * };
 * const command = new DescribeCacheClustersCommand(input);
 * const response = await client.send(command);
 * // { // CacheClusterMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheClusters: [ // CacheClusterList
 * //     { // CacheCluster
 * //       CacheClusterId: "STRING_VALUE",
 * //       ConfigurationEndpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       ClientDownloadLandingPage: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       CacheClusterStatus: "STRING_VALUE",
 * //       NumCacheNodes: Number("int"),
 * //       PreferredAvailabilityZone: "STRING_VALUE",
 * //       PreferredOutpostArn: "STRING_VALUE",
 * //       CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PendingModifiedValues: { // PendingModifiedValues
 * //         NumCacheNodes: Number("int"),
 * //         CacheNodeIdsToRemove: [ // CacheNodeIdsList
 * //           "STRING_VALUE",
 * //         ],
 * //         EngineVersion: "STRING_VALUE",
 * //         CacheNodeType: "STRING_VALUE",
 * //         AuthTokenStatus: "SETTING" || "ROTATING",
 * //         LogDeliveryConfigurations: [ // PendingLogDeliveryConfigurationList
 * //           { // PendingLogDeliveryConfiguration
 * //             LogType: "slow-log" || "engine-log",
 * //             DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //             DestinationDetails: { // DestinationDetails
 * //               CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 * //                 LogGroup: "STRING_VALUE",
 * //               },
 * //               KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 * //                 DeliveryStream: "STRING_VALUE",
 * //               },
 * //             },
 * //             LogFormat: "text" || "json",
 * //           },
 * //         ],
 * //         TransitEncryptionEnabled: true || false,
 * //         TransitEncryptionMode: "preferred" || "required",
 * //       },
 * //       NotificationConfiguration: { // NotificationConfiguration
 * //         TopicArn: "STRING_VALUE",
 * //         TopicStatus: "STRING_VALUE",
 * //       },
 * //       CacheSecurityGroups: [ // CacheSecurityGroupMembershipList
 * //         { // CacheSecurityGroupMembership
 * //           CacheSecurityGroupName: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CacheParameterGroup: { // CacheParameterGroupStatus
 * //         CacheParameterGroupName: "STRING_VALUE",
 * //         ParameterApplyStatus: "STRING_VALUE",
 * //         CacheNodeIdsToReboot: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CacheSubnetGroupName: "STRING_VALUE",
 * //       CacheNodes: [ // CacheNodeList
 * //         { // CacheNode
 * //           CacheNodeId: "STRING_VALUE",
 * //           CacheNodeStatus: "STRING_VALUE",
 * //           CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //           Endpoint: {
 * //             Address: "STRING_VALUE",
 * //             Port: Number("int"),
 * //           },
 * //           ParameterGroupStatus: "STRING_VALUE",
 * //           SourceCacheNodeId: "STRING_VALUE",
 * //           CustomerAvailabilityZone: "STRING_VALUE",
 * //           CustomerOutpostArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AutoMinorVersionUpgrade: true || false,
 * //       SecurityGroups: [ // SecurityGroupMembershipList
 * //         { // SecurityGroupMembership
 * //           SecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       SnapshotRetentionLimit: Number("int"),
 * //       SnapshotWindow: "STRING_VALUE",
 * //       AuthTokenEnabled: true || false,
 * //       AuthTokenLastModifiedDate: new Date("TIMESTAMP"),
 * //       TransitEncryptionEnabled: true || false,
 * //       AtRestEncryptionEnabled: true || false,
 * //       ARN: "STRING_VALUE",
 * //       ReplicationGroupLogDeliveryEnabled: true || false,
 * //       LogDeliveryConfigurations: [ // LogDeliveryConfigurationList
 * //         { // LogDeliveryConfiguration
 * //           LogType: "slow-log" || "engine-log",
 * //           DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //           DestinationDetails: {
 * //             CloudWatchLogsDetails: {
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseDetails: {
 * //               DeliveryStream: "STRING_VALUE",
 * //             },
 * //           },
 * //           LogFormat: "text" || "json",
 * //           Status: "active" || "enabling" || "modifying" || "disabling" || "error",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //       IpDiscovery: "ipv4" || "ipv6",
 * //       TransitEncryptionMode: "preferred" || "required",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheClustersCommandInput - {@link DescribeCacheClustersCommandInput}
 * @returns {@link DescribeCacheClustersCommandOutput}
 * @see {@link DescribeCacheClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheClustersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example DescribeCacheClusters
 * ```javascript
 * // Lists the details for up to 50 cache clusters.
 * const input = {
 *   "CacheClusterId": "my-mem-cluster"
 * };
 * const command = new DescribeCacheClustersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheClusters": [
 *     {
 *       "AutoMinorVersionUpgrade": true,
 *       "CacheClusterCreateTime": "2016-12-21T21:59:43.794Z",
 *       "CacheClusterId": "my-mem-cluster",
 *       "CacheClusterStatus": "available",
 *       "CacheNodeType": "cache.t2.medium",
 *       "CacheParameterGroup": {
 *         "CacheNodeIdsToReboot": [],
 *         "CacheParameterGroupName": "default.memcached1.4",
 *         "ParameterApplyStatus": "in-sync"
 *       },
 *       "CacheSecurityGroups": [],
 *       "CacheSubnetGroupName": "default",
 *       "ClientDownloadLandingPage": "https://console.aws.amazon.com/elasticache/home#client-download:",
 *       "ConfigurationEndpoint": {
 *         "Address": "my-mem-cluster.abcdef.cfg.use1.cache.amazonaws.com",
 *         "Port": 11211
 *       },
 *       "Engine": "memcached",
 *       "EngineVersion": "1.4.24",
 *       "NumCacheNodes": 2,
 *       "PendingModifiedValues": {},
 *       "PreferredAvailabilityZone": "Multiple",
 *       "PreferredMaintenanceWindow": "wed:06:00-wed:07:00"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describecacheclusters-1475012269754
 * ```
 *
 */
export class DescribeCacheClustersCommand extends $Command<
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: DescribeCacheClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCacheClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheClustersCommand";
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
  private serialize(input: DescribeCacheClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCacheClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCacheClustersCommandOutput> {
    return de_DescribeCacheClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
