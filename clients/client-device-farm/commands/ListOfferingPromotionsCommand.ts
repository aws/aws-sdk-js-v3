import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListOfferingPromotionsRequest, ListOfferingPromotionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListOfferingPromotionsCommand,
  serializeAws_json1_1ListOfferingPromotionsCommand,
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

export type ListOfferingPromotionsCommandInput = ListOfferingPromotionsRequest;
export type ListOfferingPromotionsCommandOutput = ListOfferingPromotionsResult & __MetadataBearer;

/**
 * <p>Returns a list of offering promotions. Each offering promotion record contains the ID and description
 *             of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke
 *             the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.</p>
 */
export class ListOfferingPromotionsCommand extends $Command<
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOfferingPromotionsCommandInput) {
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
  ): Handler<ListOfferingPromotionsCommandInput, ListOfferingPromotionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListOfferingPromotionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOfferingPromotionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOfferingPromotionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOfferingPromotionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOfferingPromotionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingPromotionsCommandOutput> {
    return deserializeAws_json1_1ListOfferingPromotionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
