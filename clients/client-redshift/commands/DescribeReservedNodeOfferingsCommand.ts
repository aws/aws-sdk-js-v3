import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeReservedNodeOfferingsMessage, ReservedNodeOfferingsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeReservedNodeOfferingsCommand,
  serializeAws_queryDescribeReservedNodeOfferingsCommand,
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

export type DescribeReservedNodeOfferingsCommandInput = DescribeReservedNodeOfferingsMessage;
export type DescribeReservedNodeOfferingsCommandOutput = ReservedNodeOfferingsMessage & __MetadataBearer;

/**
 * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their
 *             descriptions including the node type, the fixed and recurring costs of reserving the
 *             node and duration the node will be reserved for you. These descriptions help you
 *             determine which reserve node offering you want to purchase. You then use the unique
 *             offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one
 *             or more nodes for your Amazon Redshift cluster. </p>
 *         <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class DescribeReservedNodeOfferingsCommand extends $Command<
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedNodeOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeReservedNodeOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedNodeOfferingsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReservedNodeOfferingsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReservedNodeOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedNodeOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedNodeOfferingsCommandOutput> {
    return deserializeAws_queryDescribeReservedNodeOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
