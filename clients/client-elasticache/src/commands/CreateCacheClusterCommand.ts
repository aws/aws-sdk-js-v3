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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheClusterMessage, CreateCacheClusterResult } from "../models/models_0";
import { de_CreateCacheClusterCommand, se_CreateCacheClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCacheClusterCommand}.
 */
export interface CreateCacheClusterCommandInput extends CreateCacheClusterMessage {}
/**
 * @public
 *
 * The output of {@link CreateCacheClusterCommand}.
 */
export interface CreateCacheClusterCommandOutput extends CreateCacheClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache
 *             engine software, either Memcached or Redis.</p>
 *          <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateCacheClusterMessage
 *   CacheClusterId: "STRING_VALUE", // required
 *   ReplicationGroupId: "STRING_VALUE",
 *   AZMode: "single-az" || "cross-az",
 *   PreferredAvailabilityZone: "STRING_VALUE",
 *   PreferredAvailabilityZones: [ // PreferredAvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 *   NumCacheNodes: Number("int"),
 *   CacheNodeType: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   CacheParameterGroupName: "STRING_VALUE",
 *   CacheSubnetGroupName: "STRING_VALUE",
 *   CacheSecurityGroupNames: [ // CacheSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SnapshotArns: [ // SnapshotArnsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotName: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   Port: Number("int"),
 *   NotificationTopicArn: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   SnapshotRetentionLimit: Number("int"),
 *   SnapshotWindow: "STRING_VALUE",
 *   AuthToken: "STRING_VALUE",
 *   OutpostMode: "single-outpost" || "cross-outpost",
 *   PreferredOutpostArn: "STRING_VALUE",
 *   PreferredOutpostArns: [ // PreferredOutpostArnList
 *     "STRING_VALUE",
 *   ],
 *   LogDeliveryConfigurations: [ // LogDeliveryConfigurationRequestList
 *     { // LogDeliveryConfigurationRequest
 *       LogType: "slow-log" || "engine-log",
 *       DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 *       DestinationDetails: { // DestinationDetails
 *         CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 *           LogGroup: "STRING_VALUE",
 *         },
 *         KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 *           DeliveryStream: "STRING_VALUE",
 *         },
 *       },
 *       LogFormat: "text" || "json",
 *       Enabled: true || false,
 *     },
 *   ],
 *   TransitEncryptionEnabled: true || false,
 *   NetworkType: "ipv4" || "ipv6" || "dual_stack",
 *   IpDiscovery: "ipv4" || "ipv6",
 * };
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateCacheClusterResult
 * //   CacheCluster: { // CacheCluster
 * //     CacheClusterId: "STRING_VALUE",
 * //     ConfigurationEndpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ClientDownloadLandingPage: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     CacheClusterStatus: "STRING_VALUE",
 * //     NumCacheNodes: Number("int"),
 * //     PreferredAvailabilityZone: "STRING_VALUE",
 * //     PreferredOutpostArn: "STRING_VALUE",
 * //     CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PendingModifiedValues: { // PendingModifiedValues
 * //       NumCacheNodes: Number("int"),
 * //       CacheNodeIdsToRemove: [ // CacheNodeIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       EngineVersion: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       AuthTokenStatus: "SETTING" || "ROTATING",
 * //       LogDeliveryConfigurations: [ // PendingLogDeliveryConfigurationList
 * //         { // PendingLogDeliveryConfiguration
 * //           LogType: "slow-log" || "engine-log",
 * //           DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //           DestinationDetails: { // DestinationDetails
 * //             CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 * //               DeliveryStream: "STRING_VALUE",
 * //             },
 * //           },
 * //           LogFormat: "text" || "json",
 * //         },
 * //       ],
 * //       TransitEncryptionEnabled: true || false,
 * //       TransitEncryptionMode: "preferred" || "required",
 * //     },
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       TopicArn: "STRING_VALUE",
 * //       TopicStatus: "STRING_VALUE",
 * //     },
 * //     CacheSecurityGroups: [ // CacheSecurityGroupMembershipList
 * //       { // CacheSecurityGroupMembership
 * //         CacheSecurityGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CacheParameterGroup: { // CacheParameterGroupStatus
 * //       CacheParameterGroupName: "STRING_VALUE",
 * //       ParameterApplyStatus: "STRING_VALUE",
 * //       CacheNodeIdsToReboot: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CacheSubnetGroupName: "STRING_VALUE",
 * //     CacheNodes: [ // CacheNodeList
 * //       { // CacheNode
 * //         CacheNodeId: "STRING_VALUE",
 * //         CacheNodeStatus: "STRING_VALUE",
 * //         CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //         Endpoint: {
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //         ParameterGroupStatus: "STRING_VALUE",
 * //         SourceCacheNodeId: "STRING_VALUE",
 * //         CustomerAvailabilityZone: "STRING_VALUE",
 * //         CustomerOutpostArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AutoMinorVersionUpgrade: true || false,
 * //     SecurityGroups: [ // SecurityGroupMembershipList
 * //       { // SecurityGroupMembership
 * //         SecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReplicationGroupId: "STRING_VALUE",
 * //     SnapshotRetentionLimit: Number("int"),
 * //     SnapshotWindow: "STRING_VALUE",
 * //     AuthTokenEnabled: true || false,
 * //     AuthTokenLastModifiedDate: new Date("TIMESTAMP"),
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     ARN: "STRING_VALUE",
 * //     ReplicationGroupLogDeliveryEnabled: true || false,
 * //     LogDeliveryConfigurations: [ // LogDeliveryConfigurationList
 * //       { // LogDeliveryConfiguration
 * //         LogType: "slow-log" || "engine-log",
 * //         DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //         DestinationDetails: {
 * //           CloudWatchLogsDetails: {
 * //             LogGroup: "STRING_VALUE",
 * //           },
 * //           KinesisFirehoseDetails: {
 * //             DeliveryStream: "STRING_VALUE",
 * //           },
 * //         },
 * //         LogFormat: "text" || "json",
 * //         Status: "active" || "enabling" || "modifying" || "disabling" || "error",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //     IpDiscovery: "ipv4" || "ipv6",
 * //     TransitEncryptionMode: "preferred" || "required",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCacheClusterCommandInput - {@link CreateCacheClusterCommandInput}
 * @returns {@link CreateCacheClusterCommandOutput}
 * @see {@link CreateCacheClusterCommandInput} for command's `input` shape.
 * @see {@link CreateCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterAlreadyExistsFault} (client fault)
 *  <p>You already have a cluster with the given identifier.</p>
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *  <p>The requested cache subnet group name does not refer to an existing cache subnet
 *             group.</p>
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of clusters
 *             per customer.</p>
 *
 * @throws {@link InsufficientCacheClusterCapacityFault} (client fault)
 *  <p>The requested cache node type is not available in the specified Availability Zone. For
 *             more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The VPC network is in an invalid state.</p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes in a single cluster.</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes per customer.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example CreateCacheCluster
 * ```javascript
 * // Creates a Memcached cluster with 2 nodes.
 * const input = {
 *   "AZMode": "cross-az",
 *   "CacheClusterId": "my-memcached-cluster",
 *   "CacheNodeType": "cache.r3.large",
 *   "CacheSubnetGroupName": "default",
 *   "Engine": "memcached",
 *   "EngineVersion": "1.4.24",
 *   "NumCacheNodes": 2,
 *   "Port": 11211
 * };
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheCluster": {
 *     "AutoMinorVersionUpgrade": true,
 *     "CacheClusterId": "my-memcached-cluster",
 *     "CacheClusterStatus": "creating",
 *     "CacheNodeType": "cache.r3.large",
 *     "CacheParameterGroup": {
 *       "CacheNodeIdsToReboot": [],
 *       "CacheParameterGroupName": "default.memcached1.4",
 *       "ParameterApplyStatus": "in-sync"
 *     },
 *     "CacheSecurityGroups": [],
 *     "CacheSubnetGroupName": "default",
 *     "ClientDownloadLandingPage": "https://console.aws.amazon.com/elasticache/home#client-download:",
 *     "Engine": "memcached",
 *     "EngineVersion": "1.4.24",
 *     "NumCacheNodes": 2,
 *     "PendingModifiedValues": {},
 *     "PreferredAvailabilityZone": "Multiple",
 *     "PreferredMaintenanceWindow": "wed:09:00-wed:10:00"
 *   }
 * }
 * *\/
 * // example id: createcachecluster-1474994727381
 * ```
 *
 */
export class CreateCacheClusterCommand extends $Command<
  CreateCacheClusterCommandInput,
  CreateCacheClusterCommandOutput,
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
  constructor(readonly input: CreateCacheClusterCommandInput) {
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
  ): Handler<CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCacheClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "CreateCacheCluster",
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
  private serialize(input: CreateCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCacheClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCacheClusterCommandOutput> {
    return de_CreateCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
