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
  DescribeReservedCacheNodesMessage,
  DescribeReservedCacheNodesMessageFilterSensitiveLog,
  ReservedCacheNodeMessage,
  ReservedCacheNodeMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeReservedCacheNodesCommand,
  serializeAws_queryDescribeReservedCacheNodesCommand,
} from "../protocols/Aws_query";

export interface DescribeReservedCacheNodesCommandInput extends DescribeReservedCacheNodesMessage {}
export interface DescribeReservedCacheNodesCommandOutput extends ReservedCacheNodeMessage, __MetadataBearer {}

/**
 * <p>Returns information about reserved cache
 *             nodes for this account, or about a specified reserved cache node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeReservedCacheNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedCacheNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DescribeReservedCacheNodesCommand extends $Command<
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
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

  constructor(readonly input: DescribeReservedCacheNodesCommandInput) {
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
  ): Handler<DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedCacheNodesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReservedCacheNodesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedCacheNodesMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ReservedCacheNodeMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReservedCacheNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedCacheNodesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedCacheNodesCommandOutput> {
    return deserializeAws_queryDescribeReservedCacheNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
