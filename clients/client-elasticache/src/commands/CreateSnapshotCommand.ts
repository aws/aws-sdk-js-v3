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
import { CreateSnapshotMessage, CreateSnapshotResult } from "../models/models_0";
import { de_CreateSnapshotCommand, se_CreateSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a copy of an entire cluster or replication group at a specific moment in
 *             time.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateSnapshotMessage
 *   ReplicationGroupId: "STRING_VALUE",
 *   CacheClusterId: "STRING_VALUE",
 *   SnapshotName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotResult
 * //   Snapshot: { // Snapshot
 * //     SnapshotName: "STRING_VALUE",
 * //     ReplicationGroupId: "STRING_VALUE",
 * //     ReplicationGroupDescription: "STRING_VALUE",
 * //     CacheClusterId: "STRING_VALUE",
 * //     SnapshotStatus: "STRING_VALUE",
 * //     SnapshotSource: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     NumCacheNodes: Number("int"),
 * //     PreferredAvailabilityZone: "STRING_VALUE",
 * //     PreferredOutpostArn: "STRING_VALUE",
 * //     CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     TopicArn: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     CacheParameterGroupName: "STRING_VALUE",
 * //     CacheSubnetGroupName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     SnapshotRetentionLimit: Number("int"),
 * //     SnapshotWindow: "STRING_VALUE",
 * //     NumNodeGroups: Number("int"),
 * //     AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //     NodeSnapshots: [ // NodeSnapshotList
 * //       { // NodeSnapshot
 * //         CacheClusterId: "STRING_VALUE",
 * //         NodeGroupId: "STRING_VALUE",
 * //         CacheNodeId: "STRING_VALUE",
 * //         NodeGroupConfiguration: { // NodeGroupConfiguration
 * //           NodeGroupId: "STRING_VALUE",
 * //           Slots: "STRING_VALUE",
 * //           ReplicaCount: Number("int"),
 * //           PrimaryAvailabilityZone: "STRING_VALUE",
 * //           ReplicaAvailabilityZones: [ // AvailabilityZonesList
 * //             "STRING_VALUE",
 * //           ],
 * //           PrimaryOutpostArn: "STRING_VALUE",
 * //           ReplicaOutpostArns: [ // OutpostArnsList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         CacheSize: "STRING_VALUE",
 * //         CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //         SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     DataTiering: "enabled" || "disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
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
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *  <p>You already have a snapshot with the given name.</p>
 *
 * @throws {@link SnapshotFeatureNotSupportedFault} (client fault)
 *  <p>You attempted one of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a snapshot of a Redis cluster running on a
 *                         <code>cache.t1.micro</code> cache node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than
 *                     Redis.</p>
 *             </li>
 *          </ul>
 *          <p>Neither of these are supported by ElastiCache.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of
 *             snapshots.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example CreateSnapshot - NonClustered Redis, no read-replicas
 * ```javascript
 * // Creates a snapshot of a non-clustered Redis cluster that has only one node.
 * const input = {
 *   "CacheClusterId": "onenoderedis",
 *   "SnapshotName": "snapshot-1"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Snapshot": {
 *     "AutoMinorVersionUpgrade": true,
 *     "CacheClusterCreateTime": "2017-02-03T15:43:36.278Z",
 *     "CacheClusterId": "onenoderedis",
 *     "CacheNodeType": "cache.m3.medium",
 *     "CacheParameterGroupName": "default.redis3.2",
 *     "CacheSubnetGroupName": "default",
 *     "Engine": "redis",
 *     "EngineVersion": "3.2.4",
 *     "NodeSnapshots": [
 *       {
 *         "CacheNodeCreateTime": "2017-02-03T15:43:36.278Z",
 *         "CacheNodeId": "0001",
 *         "CacheSize": ""
 *       }
 *     ],
 *     "NumCacheNodes": 1,
 *     "Port": 6379,
 *     "PreferredAvailabilityZone": "us-west-2c",
 *     "PreferredMaintenanceWindow": "sat:08:00-sat:09:00",
 *     "SnapshotName": "snapshot-1",
 *     "SnapshotRetentionLimit": 1,
 *     "SnapshotSource": "manual",
 *     "SnapshotStatus": "creating",
 *     "SnapshotWindow": "00:00-01:00",
 *     "VpcId": "vpc-73c3cd17"
 *   }
 * }
 * *\/
 * // example id: createsnapshot-1474999681024
 * ```
 *
 * @example CreateSnapshot-clustered Redis
 * ```javascript
 * // Creates a snapshot of a clustered Redis cluster that has 2 shards, each with a primary and 4 read-replicas.
 * const input = {
 *   "ReplicationGroupId": "clusteredredis",
 *   "SnapshotName": "snapshot-2x5"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Snapshot": {
 *     "AutoMinorVersionUpgrade": true,
 *     "AutomaticFailover": "enabled",
 *     "CacheNodeType": "cache.m3.medium",
 *     "CacheParameterGroupName": "default.redis3.2.cluster.on",
 *     "CacheSubnetGroupName": "default",
 *     "Engine": "redis",
 *     "EngineVersion": "3.2.4",
 *     "NodeSnapshots": [
 *       {
 *         "CacheSize": "",
 *         "NodeGroupId": "0001"
 *       },
 *       {
 *         "CacheSize": "",
 *         "NodeGroupId": "0002"
 *       }
 *     ],
 *     "NumNodeGroups": 2,
 *     "Port": 6379,
 *     "PreferredMaintenanceWindow": "mon:09:30-mon:10:30",
 *     "ReplicationGroupDescription": "Redis cluster with 2 shards.",
 *     "ReplicationGroupId": "clusteredredis",
 *     "SnapshotName": "snapshot-2x5",
 *     "SnapshotRetentionLimit": 1,
 *     "SnapshotSource": "manual",
 *     "SnapshotStatus": "creating",
 *     "SnapshotWindow": "12:00-13:00",
 *     "VpcId": "vpc-73c3cd17"
 *   }
 * }
 * *\/
 * // example id: createsnapshot-clustered-redis-1486144841758
 * ```
 *
 */
export class CreateSnapshotCommand extends $Command<
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
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
  constructor(readonly input: CreateSnapshotCommandInput) {
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
  ): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "CreateSnapshot",
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
  private serialize(input: CreateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCommandOutput> {
    return de_CreateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
