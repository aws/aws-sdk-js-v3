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
import { IncreaseReplicaCountMessage, IncreaseReplicaCountResult } from "../models/models_0";
import {
  deserializeAws_queryIncreaseReplicaCountCommand,
  serializeAws_queryIncreaseReplicaCountCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link IncreaseReplicaCountCommand}.
 */
export interface IncreaseReplicaCountCommandInput extends IncreaseReplicaCountMessage {}
/**
 * @public
 *
 * The output of {@link IncreaseReplicaCountCommand}.
 */
export interface IncreaseReplicaCountCommandOutput extends IncreaseReplicaCountResult, __MetadataBearer {}

/**
 * @public
 * <p>Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseReplicaCountCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseReplicaCountCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseReplicaCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param IncreaseReplicaCountCommandInput - {@link IncreaseReplicaCountCommandInput}
 * @returns {@link IncreaseReplicaCountCommandOutput}
 * @see {@link IncreaseReplicaCountCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicaCountCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
 *
 * @throws {@link InsufficientCacheClusterCapacityFault} (client fault)
 *  <p>The requested cache node type is not available in the specified Availability Zone.
 *             For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidKMSKeyFault} (client fault)
 *  <p>The KMS key supplied is not valid.</p>
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
 * @throws {@link NodeGroupsPerReplicationGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum allowed number
 *             of node groups (shards) in a single replication group. The default maximum is 90</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
 *
 * @throws {@link NoOperationFault} (client fault)
 *  <p>The operation was not performed because no changes were required.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 *
 */
export class IncreaseReplicaCountCommand extends $Command<
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput,
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
  constructor(readonly input: IncreaseReplicaCountCommandInput) {
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
  ): Handler<IncreaseReplicaCountCommandInput, IncreaseReplicaCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, IncreaseReplicaCountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "IncreaseReplicaCountCommand";
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
  private serialize(input: IncreaseReplicaCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryIncreaseReplicaCountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IncreaseReplicaCountCommandOutput> {
    return deserializeAws_queryIncreaseReplicaCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
