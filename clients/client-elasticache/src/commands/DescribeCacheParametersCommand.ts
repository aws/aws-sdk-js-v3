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
import { CacheParameterGroupDetails, DescribeCacheParametersMessage } from "../models/models_0";
import { de_DescribeCacheParametersCommand, se_DescribeCacheParametersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheParametersCommand}.
 */
export interface DescribeCacheParametersCommandInput extends DescribeCacheParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheParametersCommand}.
 */
export interface DescribeCacheParametersCommandOutput extends CacheParameterGroupDetails, __MetadataBearer {}

/**
 * @public
 * <p>Returns the detailed parameter list for a particular cache parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheParametersMessage
 *   CacheParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCacheParametersCommand(input);
 * const response = await client.send(command);
 * // { // CacheParameterGroupDetails
 * //   Marker: "STRING_VALUE",
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       ChangeType: "immediate" || "requires-reboot",
 * //     },
 * //   ],
 * //   CacheNodeTypeSpecificParameters: [ // CacheNodeTypeSpecificParametersList
 * //     { // CacheNodeTypeSpecificParameter
 * //       ParameterName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       CacheNodeTypeSpecificValues: [ // CacheNodeTypeSpecificValueList
 * //         { // CacheNodeTypeSpecificValue
 * //           CacheNodeType: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ChangeType: "immediate" || "requires-reboot",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheParametersCommandInput - {@link DescribeCacheParametersCommandInput}
 * @returns {@link DescribeCacheParametersCommandOutput}
 * @see {@link DescribeCacheParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
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
 * @example DescribeCacheParameters
 * ```javascript
 * // Lists up to 100 user parameter values for the parameter group custom.redis2.8.
 * const input = {
 *   "CacheParameterGroupName": "custom-redis2-8",
 *   "MaxRecords": 100,
 *   "Source": "user"
 * };
 * const command = new DescribeCacheParametersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "Parameters": [
 *     {
 *       "AllowedValues": "yes,no",
 *       "ChangeType": "requires-reboot",
 *       "DataType": "string",
 *       "Description": "Apply rehashing or not.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "activerehashing",
 *       "ParameterValue": "yes",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "always,everysec,no",
 *       "ChangeType": "immediate",
 *       "DataType": "string",
 *       "Description": "fsync policy for AOF persistence",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "appendfsync",
 *       "ParameterValue": "everysec",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "yes,no",
 *       "ChangeType": "immediate",
 *       "DataType": "string",
 *       "Description": "Enable Redis persistence.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "appendonly",
 *       "ParameterValue": "no",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Normal client output buffer hard limit in bytes.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "client-output-buffer-limit-normal-hard-limit",
 *       "ParameterValue": "0",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Normal client output buffer soft limit in bytes.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "client-output-buffer-limit-normal-soft-limit",
 *       "ParameterValue": "0",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Normal client output buffer soft limit in seconds.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "client-output-buffer-limit-normal-soft-seconds",
 *       "ParameterValue": "0",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Pubsub client output buffer hard limit in bytes.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "client-output-buffer-limit-pubsub-hard-limit",
 *       "ParameterValue": "33554432",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Pubsub client output buffer soft limit in bytes.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "client-output-buffer-limit-pubsub-soft-limit",
 *       "ParameterValue": "8388608",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Pubsub client output buffer soft limit in seconds.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "client-output-buffer-limit-pubsub-soft-seconds",
 *       "ParameterValue": "60",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Slave client output buffer soft limit in seconds.",
 *       "IsModifiable": false,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "client-output-buffer-limit-slave-soft-seconds",
 *       "ParameterValue": "60",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "yes,no",
 *       "ChangeType": "immediate",
 *       "DataType": "string",
 *       "Description": "If enabled, clients who attempt to write to a read-only slave will be disconnected. Applicable to 2.8.23 and higher.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.23",
 *       "ParameterName": "close-on-slave-write",
 *       "ParameterValue": "yes",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "1-1200000",
 *       "ChangeType": "requires-reboot",
 *       "DataType": "integer",
 *       "Description": "Set the number of databases.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "databases",
 *       "ParameterValue": "16",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The maximum number of hash entries in order for the dataset to be compressed.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "hash-max-ziplist-entries",
 *       "ParameterValue": "512",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The threshold of biggest hash entries in order for the dataset to be compressed.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "hash-max-ziplist-value",
 *       "ParameterValue": "64",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The maximum number of list entries in order for the dataset to be compressed.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "list-max-ziplist-entries",
 *       "ParameterValue": "512",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The threshold of biggest list entries in order for the dataset to be compressed.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "list-max-ziplist-value",
 *       "ParameterValue": "64",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "5000",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Max execution time of a Lua script in milliseconds. 0 for unlimited execution without warnings.",
 *       "IsModifiable": false,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "lua-time-limit",
 *       "ParameterValue": "5000",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "1-65000",
 *       "ChangeType": "requires-reboot",
 *       "DataType": "integer",
 *       "Description": "The maximum number of Redis clients.",
 *       "IsModifiable": false,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "maxclients",
 *       "ParameterValue": "65000",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "volatile-lru,allkeys-lru,volatile-random,allkeys-random,volatile-ttl,noeviction",
 *       "ChangeType": "immediate",
 *       "DataType": "string",
 *       "Description": "Max memory policy.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "maxmemory-policy",
 *       "ParameterValue": "volatile-lru",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "1-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Max memory samples.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "maxmemory-samples",
 *       "ParameterValue": "3",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Maximum number of seconds within which the master must receive a ping from a slave to take writes. Use this parameter together with min-slaves-to-write to regulate when the master stops accepting writes. Setting this value to 0 means the master always takes writes.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "min-slaves-max-lag",
 *       "ParameterValue": "10",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Number of slaves that must be connected in order for master to take writes. Use this parameter together with min-slaves-max-lag to regulate when the master stops accepting writes. Setting this to 0 means the master always takes writes.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "min-slaves-to-write",
 *       "ParameterValue": "0",
 *       "Source": "system"
 *     },
 *     {
 *       "ChangeType": "immediate",
 *       "DataType": "string",
 *       "Description": "The keyspace events for Redis to notify Pub/Sub clients about. By default all notifications are disabled",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "notify-keyspace-events",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "16384-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The replication backlog size in bytes for PSYNC. This is the size of the buffer which accumulates slave data when slave is disconnected for some time, so that when slave reconnects again, only transfer the portion of data which the slave missed. Minimum value is 16K.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "repl-backlog-size",
 *       "ParameterValue": "1048576",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The amount of time in seconds after the master no longer have any slaves connected for the master to free the replication backlog. A value of 0 means to never release the backlog.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "repl-backlog-ttl",
 *       "ParameterValue": "3600",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "11-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The timeout in seconds for bulk transfer I/O during sync and master timeout from the perspective of the slave, and slave timeout from the perspective of the master.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "repl-timeout",
 *       "ParameterValue": "60",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The amount of memory reserved for non-cache memory usage, in bytes. You may want to increase this parameter for nodes with read replicas, AOF enabled, etc, to reduce swap usage.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "reserved-memory",
 *       "ParameterValue": "0",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The limit in the size of the set in order for the dataset to be compressed.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "set-max-intset-entries",
 *       "ParameterValue": "512",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "yes,no",
 *       "ChangeType": "immediate",
 *       "DataType": "string",
 *       "Description": "Configures if chaining of slaves is allowed",
 *       "IsModifiable": false,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "slave-allow-chaining",
 *       "ParameterValue": "no",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The execution time, in microseconds, to exceed in order for the command to get logged. Note that a negative number disables the slow log, while a value of zero forces the logging of every command.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "slowlog-log-slower-than",
 *       "ParameterValue": "10000",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The length of the slow log. There is no limit to this length. Just be aware that it will consume memory. You can reclaim memory used by the slow log with SLOWLOG RESET.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "slowlog-max-len",
 *       "ParameterValue": "128",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "If non-zero, send ACKs every given number of seconds.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "tcp-keepalive",
 *       "ParameterValue": "0",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0,20-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "Close connection if client is idle for a given number of seconds, or never if 0.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "timeout",
 *       "ParameterValue": "0",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The maximum number of sorted set entries in order for the dataset to be compressed.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "zset-max-ziplist-entries",
 *       "ParameterValue": "128",
 *       "Source": "system"
 *     },
 *     {
 *       "AllowedValues": "0-",
 *       "ChangeType": "immediate",
 *       "DataType": "integer",
 *       "Description": "The threshold of biggest sorted set entries in order for the dataset to be compressed.",
 *       "IsModifiable": true,
 *       "MinimumEngineVersion": "2.8.6",
 *       "ParameterName": "zset-max-ziplist-value",
 *       "ParameterValue": "64",
 *       "Source": "system"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describecacheparameters-1475013576900
 * ```
 *
 */
export class DescribeCacheParametersCommand extends $Command<
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
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
  constructor(readonly input: DescribeCacheParametersCommandInput) {
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
  ): Handler<DescribeCacheParametersCommandInput, DescribeCacheParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCacheParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheParametersCommand";
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
  private serialize(input: DescribeCacheParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCacheParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCacheParametersCommandOutput> {
    return de_DescribeCacheParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
