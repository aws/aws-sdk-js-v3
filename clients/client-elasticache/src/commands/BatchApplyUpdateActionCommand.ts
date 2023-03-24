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
import { BatchApplyUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import {
  deserializeAws_queryBatchApplyUpdateActionCommand,
  serializeAws_queryBatchApplyUpdateActionCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link BatchApplyUpdateActionCommand}.
 */
export interface BatchApplyUpdateActionCommandInput extends BatchApplyUpdateActionMessage {}
/**
 * @public
 *
 * The output of {@link BatchApplyUpdateActionCommand}.
 */
export interface BatchApplyUpdateActionCommandOutput extends UpdateActionResultsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchApplyUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchApplyUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = {
 *   ReplicationGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   CacheClusterIds: [
 *     "STRING_VALUE",
 *   ],
 *   ServiceUpdateName: "STRING_VALUE", // required
 * };
 * const command = new BatchApplyUpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchApplyUpdateActionCommandInput - {@link BatchApplyUpdateActionCommandInput}
 * @returns {@link BatchApplyUpdateActionCommandOutput}
 * @see {@link BatchApplyUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchApplyUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServiceUpdateNotFoundFault} (client fault)
 *  <p>The service update doesn't exist</p>
 *
 *
 */
export class BatchApplyUpdateActionCommand extends $Command<
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput,
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
  constructor(readonly input: BatchApplyUpdateActionCommandInput) {
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
  ): Handler<BatchApplyUpdateActionCommandInput, BatchApplyUpdateActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchApplyUpdateActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "BatchApplyUpdateActionCommand";
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
  private serialize(input: BatchApplyUpdateActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchApplyUpdateActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchApplyUpdateActionCommandOutput> {
    return deserializeAws_queryBatchApplyUpdateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
