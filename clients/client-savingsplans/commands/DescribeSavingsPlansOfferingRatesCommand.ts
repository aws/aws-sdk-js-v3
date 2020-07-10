import { DescribeSavingsPlansOfferingRatesRequest, DescribeSavingsPlansOfferingRatesResponse } from "../models/index";
import {
  deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand,
  serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, savingsplansClientResolvedConfig } from "../savingsplansClient";
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

export type DescribeSavingsPlansOfferingRatesCommandInput = DescribeSavingsPlansOfferingRatesRequest;
export type DescribeSavingsPlansOfferingRatesCommandOutput = DescribeSavingsPlansOfferingRatesResponse &
  __MetadataBearer;

export class DescribeSavingsPlansOfferingRatesCommand extends $Command<
  DescribeSavingsPlansOfferingRatesCommandInput,
  DescribeSavingsPlansOfferingRatesCommandOutput,
  savingsplansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSavingsPlansOfferingRatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: savingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSavingsPlansOfferingRatesCommandInput, DescribeSavingsPlansOfferingRatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeSavingsPlansOfferingRatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> {
    return deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
