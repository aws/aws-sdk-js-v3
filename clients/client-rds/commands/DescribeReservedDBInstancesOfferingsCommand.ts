import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeReservedDBInstancesOfferingsMessage, ReservedDBInstancesOfferingMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand,
  serializeAws_queryDescribeReservedDBInstancesOfferingsCommand,
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

export type DescribeReservedDBInstancesOfferingsCommandInput = DescribeReservedDBInstancesOfferingsMessage;
export type DescribeReservedDBInstancesOfferingsCommandOutput = ReservedDBInstancesOfferingMessage & __MetadataBearer;

/**
 * <p>Lists available reserved DB instance offerings.</p>
 */
export class DescribeReservedDBInstancesOfferingsCommand extends $Command<
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedDBInstancesOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedDBInstancesOfferingsCommandInput, DescribeReservedDBInstancesOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeReservedDBInstancesOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedDBInstancesOfferingsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ReservedDBInstancesOfferingMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedDBInstancesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedDBInstancesOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> {
    return deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
