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
import { AllowedNodeTypeModificationsMessage, ListAllowedNodeTypeModificationsMessage } from "../models/models_0";
import {
  de_ListAllowedNodeTypeModificationsCommand,
  se_ListAllowedNodeTypeModificationsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAllowedNodeTypeModificationsCommand}.
 */
export interface ListAllowedNodeTypeModificationsCommandInput extends ListAllowedNodeTypeModificationsMessage {}
/**
 * @public
 *
 * The output of {@link ListAllowedNodeTypeModificationsCommand}.
 */
export interface ListAllowedNodeTypeModificationsCommandOutput
  extends AllowedNodeTypeModificationsMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all available node types that you
 *             can scale your Redis cluster's or replication group's current node type.</p>
 *          <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to
 *             scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter
 *             must be one of the node types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ListAllowedNodeTypeModificationsMessage
 *   CacheClusterId: "STRING_VALUE",
 *   ReplicationGroupId: "STRING_VALUE",
 * };
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * // { // AllowedNodeTypeModificationsMessage
 * //   ScaleUpModifications: [ // NodeTypeList
 * //     "STRING_VALUE",
 * //   ],
 * //   ScaleDownModifications: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAllowedNodeTypeModificationsCommandInput - {@link ListAllowedNodeTypeModificationsCommandInput}
 * @returns {@link ListAllowedNodeTypeModificationsCommandOutput}
 * @see {@link ListAllowedNodeTypeModificationsCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeModificationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example ListAllowedNodeTypeModifications
 * ```javascript
 * // Lists all available node types that you can scale your Redis cluster's or replication group's current node type up to.
 * const input = {
 *   "ReplicationGroupId": "myreplgroup"
 * };
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScaleUpModifications": [
 *     "cache.m4.10xlarge",
 *     "cache.m4.2xlarge",
 *     "cache.m4.4xlarge",
 *     "cache.m4.xlarge",
 *     "cache.r3.2xlarge",
 *     "cache.r3.4xlarge",
 *     "cache.r3.8xlarge",
 *     "cache.r3.xlarge"
 *   ]
 * }
 * *\/
 * // example id: listallowednodetypemodifications-1481748494872
 * ```
 *
 */
export class ListAllowedNodeTypeModificationsCommand extends $Command<
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput,
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
  constructor(readonly input: ListAllowedNodeTypeModificationsCommandInput) {
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
  ): Handler<ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAllowedNodeTypeModificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ListAllowedNodeTypeModificationsCommand";
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
  private serialize(
    input: ListAllowedNodeTypeModificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAllowedNodeTypeModificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAllowedNodeTypeModificationsCommandOutput> {
    return de_ListAllowedNodeTypeModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
