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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  CreateSnapshotMessage,
  CreateSnapshotMessageFilterSensitiveLog,
  CreateSnapshotResult,
  CreateSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateSnapshotCommand,
  serializeAws_queryCreateSnapshotCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotMessage {}
/**
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a copy of an entire cluster or replication group at a
 *             specific moment in time.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
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
 *                <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache
 *                     node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p>
 *             </li>
 *          </ul>
 *          <p>Neither of these are supported by ElastiCache.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
 *
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
      inputFilterSensitiveLog: CreateSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCommandOutput> {
    return deserializeAws_queryCreateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
