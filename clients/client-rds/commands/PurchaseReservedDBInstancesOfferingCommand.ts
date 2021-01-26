import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import {
  PurchaseReservedDBInstancesOfferingMessage,
  PurchaseReservedDBInstancesOfferingResult,
} from "../models/models_1";
import {
  deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand,
  serializeAws_queryPurchaseReservedDBInstancesOfferingCommand,
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

export type PurchaseReservedDBInstancesOfferingCommandInput = PurchaseReservedDBInstancesOfferingMessage;
export type PurchaseReservedDBInstancesOfferingCommandOutput = PurchaseReservedDBInstancesOfferingResult &
  __MetadataBearer;

/**
 * <p>Purchases a reserved DB instance offering.</p>
 */
export class PurchaseReservedDBInstancesOfferingCommand extends $Command<
  PurchaseReservedDBInstancesOfferingCommandInput,
  PurchaseReservedDBInstancesOfferingCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseReservedDBInstancesOfferingCommandInput) {
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
  ): Handler<PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "PurchaseReservedDBInstancesOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedDBInstancesOfferingMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedDBInstancesOfferingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PurchaseReservedDBInstancesOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryPurchaseReservedDBInstancesOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> {
    return deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
