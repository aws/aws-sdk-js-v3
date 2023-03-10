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
  DeleteCacheClusterMessage,
  DeleteCacheClusterMessageFilterSensitiveLog,
  DeleteCacheClusterResult,
  DeleteCacheClusterResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteCacheClusterCommand,
  serializeAws_queryDeleteCacheClusterCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link DeleteCacheClusterCommand}.
 */
export interface DeleteCacheClusterCommandInput extends DeleteCacheClusterMessage {}
/**
 * The output of {@link DeleteCacheClusterCommand}.
 */
export interface DeleteCacheClusterCommandOutput extends DeleteCacheClusterResult, __MetadataBearer {}

/**
 * <p>Deletes a previously provisioned cluster.
 *                 <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the
 *             cluster itself. When you receive a successful response from this operation,
 *             Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert
 *             this operation.</p>
 *          <p>This operation is not valid for:</p>
 *          <ul>
 *             <li>
 *                <p>Redis (cluster mode enabled) clusters</p>
 *             </li>
 *             <li>
 *                <p>Redis (cluster mode disabled) clusters</p>
 *             </li>
 *             <li>
 *                <p>A cluster that is the last read replica of a replication group</p>
 *             </li>
 *             <li>
 *                <p>A cluster that is the primary node of a replication group</p>
 *             </li>
 *             <li>
 *                <p>A node group (shard) that has Multi-AZ mode enabled</p>
 *             </li>
 *             <li>
 *                <p>A cluster from a Redis (cluster mode enabled) replication group</p>
 *             </li>
 *             <li>
 *                <p>A cluster that is not in the <code>available</code> state</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheClusterCommandOutput} for command's `response` shape.
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
 *
 * @example DeleteCacheCluster
 * ```javascript
 * // Deletes an Amazon ElastiCache cluster.
 * const input = {
 *   "CacheClusterId": "my-memcached"
 * };
 * const command = new DeleteCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheCluster": {
 *     "AutoMinorVersionUpgrade": true,
 *     "CacheClusterCreateTime": "2016-12-22T16:05:17.314Z",
 *     "CacheClusterId": "my-memcached",
 *     "CacheClusterStatus": "deleting",
 *     "CacheNodeType": "cache.r3.large",
 *     "CacheParameterGroup": {
 *       "CacheNodeIdsToReboot": [],
 *       "CacheParameterGroupName": "default.memcached1.4",
 *       "ParameterApplyStatus": "in-sync"
 *     },
 *     "CacheSecurityGroups": [],
 *     "CacheSubnetGroupName": "default",
 *     "ClientDownloadLandingPage": "https://console.aws.amazon.com/elasticache/home#client-download:",
 *     "ConfigurationEndpoint": {
 *       "Address": "my-memcached2.ameaqx.cfg.use1.cache.amazonaws.com",
 *       "Port": 11211
 *     },
 *     "Engine": "memcached",
 *     "EngineVersion": "1.4.24",
 *     "NumCacheNodes": 2,
 *     "PendingModifiedValues": {},
 *     "PreferredAvailabilityZone": "Multiple",
 *     "PreferredMaintenanceWindow": "tue:07:30-tue:08:30"
 *   }
 * }
 * *\/
 * // example id: deletecachecluster-1475010605291
 * ```
 *
 */
export class DeleteCacheClusterCommand extends $Command<
  DeleteCacheClusterCommandInput,
  DeleteCacheClusterCommandOutput,
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

  constructor(readonly input: DeleteCacheClusterCommandInput) {
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
  ): Handler<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCacheClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCacheClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteCacheClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCacheClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCacheClusterCommandOutput> {
    return deserializeAws_queryDeleteCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
