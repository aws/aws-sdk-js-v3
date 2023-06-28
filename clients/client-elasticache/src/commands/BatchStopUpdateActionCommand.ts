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
import { BatchStopUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import { de_BatchStopUpdateActionCommand, se_BatchStopUpdateActionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchStopUpdateActionCommand}.
 */
export interface BatchStopUpdateActionCommandInput extends BatchStopUpdateActionMessage {}
/**
 * @public
 *
 * The output of {@link BatchStopUpdateActionCommand}.
 */
export interface BatchStopUpdateActionCommandOutput extends UpdateActionResultsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchStopUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchStopUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // BatchStopUpdateActionMessage
 *   ReplicationGroupIds: [ // ReplicationGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   CacheClusterIds: [ // CacheClusterIdList
 *     "STRING_VALUE",
 *   ],
 *   ServiceUpdateName: "STRING_VALUE", // required
 * };
 * const command = new BatchStopUpdateActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActionResultsMessage
 * //   ProcessedUpdateActions: [ // ProcessedUpdateActionList
 * //     { // ProcessedUpdateAction
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       CacheClusterId: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       UpdateActionStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete" || "scheduling" || "scheduled" || "not-applicable",
 * //     },
 * //   ],
 * //   UnprocessedUpdateActions: [ // UnprocessedUpdateActionList
 * //     { // UnprocessedUpdateAction
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       CacheClusterId: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchStopUpdateActionCommandInput - {@link BatchStopUpdateActionCommandInput}
 * @returns {@link BatchStopUpdateActionCommandOutput}
 * @see {@link BatchStopUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchStopUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServiceUpdateNotFoundFault} (client fault)
 *  <p>The service update doesn't exist</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class BatchStopUpdateActionCommand extends $Command<
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
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
  constructor(readonly input: BatchStopUpdateActionCommandInput) {
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
  ): Handler<BatchStopUpdateActionCommandInput, BatchStopUpdateActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchStopUpdateActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "BatchStopUpdateActionCommand";
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
  private serialize(input: BatchStopUpdateActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchStopUpdateActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchStopUpdateActionCommandOutput> {
    return de_BatchStopUpdateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
