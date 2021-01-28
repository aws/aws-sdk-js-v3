import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetReservedInstancesExchangeQuoteRequest, GetReservedInstancesExchangeQuoteResult } from "../models/models_4";
import {
  deserializeAws_ec2GetReservedInstancesExchangeQuoteCommand,
  serializeAws_ec2GetReservedInstancesExchangeQuoteCommand,
} from "../protocols/Aws_ec2";
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

export type GetReservedInstancesExchangeQuoteCommandInput = GetReservedInstancesExchangeQuoteRequest;
export type GetReservedInstancesExchangeQuoteCommandOutput = GetReservedInstancesExchangeQuoteResult & __MetadataBearer;

/**
 * <p>Returns a quote and exchange information for exchanging one or more specified
 *             Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange
 *             cannot be performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.</p>
 */
export class GetReservedInstancesExchangeQuoteCommand extends $Command<
  GetReservedInstancesExchangeQuoteCommandInput,
  GetReservedInstancesExchangeQuoteCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetReservedInstancesExchangeQuoteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReservedInstancesExchangeQuoteCommandInput, GetReservedInstancesExchangeQuoteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetReservedInstancesExchangeQuoteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReservedInstancesExchangeQuoteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetReservedInstancesExchangeQuoteResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetReservedInstancesExchangeQuoteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetReservedInstancesExchangeQuoteCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservedInstancesExchangeQuoteCommandOutput> {
    return deserializeAws_ec2GetReservedInstancesExchangeQuoteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
