import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { PurchaseOfferingRequest, PurchaseOfferingResult } from "../models/models_0";
import {
  deserializeAws_json1_1PurchaseOfferingCommand,
  serializeAws_json1_1PurchaseOfferingCommand,
} from "../protocols/Aws_json1_1";
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

export type PurchaseOfferingCommandInput = PurchaseOfferingRequest;
export type PurchaseOfferingCommandOutput = PurchaseOfferingResult & __MetadataBearer;

/**
 * <p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
 *             quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code>
 *             error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
 *             contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 */
export class PurchaseOfferingCommand extends $Command<
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "PurchaseOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseOfferingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseOfferingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PurchaseOfferingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PurchaseOfferingCommandOutput> {
    return deserializeAws_json1_1PurchaseOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
