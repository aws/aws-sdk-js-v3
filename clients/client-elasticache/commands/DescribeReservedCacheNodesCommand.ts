import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReservedCacheNodesMessage, ReservedCacheNodeMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeReservedCacheNodesCommand,
  serializeAws_queryDescribeReservedCacheNodesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeReservedCacheNodesCommandInput = DescribeReservedCacheNodesMessage;
export type DescribeReservedCacheNodesCommandOutput = ReservedCacheNodeMessage & __MetadataBearer;

/**
 * <p>Returns information about reserved cache
 *             nodes for this account, or about a specified reserved cache node.</p>
 */
export class DescribeReservedCacheNodesCommand extends $Command<
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReservedCacheNodesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedCacheNodesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReservedCacheNodeMessage.filterSensitiveLog,
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
