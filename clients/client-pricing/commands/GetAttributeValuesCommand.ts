import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetAttributeValuesRequest, GetAttributeValuesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetAttributeValuesCommand,
  serializeAws_json1_1GetAttributeValuesCommand,
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

export type GetAttributeValuesCommandInput = GetAttributeValuesRequest;
export type GetAttributeValuesCommandOutput = GetAttributeValuesResponse & __MetadataBearer;

/**
 * <p>Returns a list of attribute values. Attibutes are similar to the details
 *           in a Price List API offer file. For a list of available attributes, see
 *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a>
 *          in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">AWS Billing and Cost Management User Guide</a>.</p>
 */
export class GetAttributeValuesCommand extends $Command<
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
  PricingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAttributeValuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PricingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "GetAttributeValuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAttributeValuesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAttributeValuesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAttributeValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAttributeValuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAttributeValuesCommandOutput> {
    return deserializeAws_json1_1GetAttributeValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
