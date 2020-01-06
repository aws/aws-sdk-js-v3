import {
  DescribeSavingsPlanRatesRequest,
  DescribeSavingsPlanRatesResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeSavingsPlanRatesCommand,
  serializeAws_restJson1_1DescribeSavingsPlanRatesCommand
} from "../protocols/Aws_restJson1_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  savingsplansClientResolvedConfig
} from "../savingsplansClient";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeSavingsPlanRatesCommandInput = DescribeSavingsPlanRatesRequest;
export type DescribeSavingsPlanRatesCommandOutput = DescribeSavingsPlanRatesResponse;

export class DescribeSavingsPlanRatesCommand extends $Command<
  DescribeSavingsPlanRatesCommandInput,
  DescribeSavingsPlanRatesCommandOutput,
  savingsplansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSavingsPlanRatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: savingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeSavingsPlanRatesCommandInput,
    DescribeSavingsPlanRatesCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeSavingsPlanRatesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeSavingsPlanRatesCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeSavingsPlanRatesCommandOutput> {
    return deserializeAws_restJson1_1DescribeSavingsPlanRatesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
