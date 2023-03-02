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
  CreateCacheClusterMessage,
  CreateCacheClusterMessageFilterSensitiveLog,
  CreateCacheClusterResult,
  CreateCacheClusterResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateCacheClusterCommand,
  serializeAws_queryCreateCacheClusterCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link CreateCacheClusterCommand}.
 */
export interface CreateCacheClusterCommandInput extends CreateCacheClusterMessage {}
/**
 * The output of {@link CreateCacheClusterCommand}.
 */
export interface CreateCacheClusterCommandOutput extends CreateCacheClusterResult, __MetadataBearer {}

/**
 * <p>Creates a cluster. All nodes in the
 *             cluster run the same protocol-compliant cache engine software, either Memcached
 *             or Redis.</p>
 *          <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheClusterCommandInput} for command's `input` shape.
 * @see {@link CreateCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
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
 * ```
 *
 * @example CreateCacheCluster
 * ```javascript
 * // Creates a Redis cluster with 1 node.
 * const input = {
 *   "AutoMinorVersionUpgrade": true,
 *   "CacheClusterId": "my-redis",
 *   "CacheNodeType": "cache.r3.larage",
 *   "CacheSubnetGroupName": "default",
 *   "Engine": "redis",
 *   "EngineVersion": "3.2.4",
 *   "NumCacheNodes": 1,
 *   "Port": 6379,
 *   "PreferredAvailabilityZone": "us-east-1c",
 *   "SnapshotRetentionLimit": 7
 * };
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheCluster": {
 *     "AutoMinorVersionUpgrade": true,
 *     "CacheClusterId": "my-redis",
 *     "CacheClusterStatus": "creating",
 *     "CacheNodeType": "cache.m3.large",
 *     "CacheParameterGroup": {
 *       "CacheNodeIdsToReboot": [],
 *       "CacheParameterGroupName": "default.redis3.2",
 *       "ParameterApplyStatus": "in-sync"
 *     },
 *     "CacheSecurityGroups": [],
 *     "CacheSubnetGroupName": "default",
 *     "ClientDownloadLandingPage": "https: //console.aws.amazon.com/elasticache/home#client-download: ",
 *     "Engine": "redis",
 *     "EngineVersion": "3.2.4",
 *     "NumCacheNodes": 1,
 *     "PendingModifiedValues": {},
 *     "PreferredAvailabilityZone": "us-east-1c",
 *     "PreferredMaintenanceWindow": "fri: 05: 30-fri: 06: 30",
 *     "SnapshotRetentionLimit": 7,
 *     "SnapshotWindow": "10: 00-11: 00"
 *   }
 * }
 * *\/
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
      inputFilterSensitiveLog: CreateCacheClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCacheClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCacheClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCacheClusterCommandOutput> {
    return deserializeAws_queryCreateCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
