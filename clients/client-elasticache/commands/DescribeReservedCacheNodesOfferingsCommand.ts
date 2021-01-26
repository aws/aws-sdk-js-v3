import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReservedCacheNodesOfferingsMessage, ReservedCacheNodesOfferingMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand,
  serializeAws_queryDescribeReservedCacheNodesOfferingsCommand,
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

export type DescribeReservedCacheNodesOfferingsCommandInput = DescribeReservedCacheNodesOfferingsMessage;
export type DescribeReservedCacheNodesOfferingsCommandOutput = ReservedCacheNodesOfferingMessage & __MetadataBearer;

/**
 * <p>Lists available reserved cache
 *             node offerings.</p>
 */
export class DescribeReservedCacheNodesOfferingsCommand extends $Command<
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedCacheNodesOfferingsCommandInput) {
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
  ): Handler<DescribeReservedCacheNodesOfferingsCommandInput, DescribeReservedCacheNodesOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReservedCacheNodesOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedCacheNodesOfferingsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReservedCacheNodesOfferingMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedCacheNodesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedCacheNodesOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> {
    return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
