import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import {
  DescribeSavingsPlansOfferingRatesRequest,
  DescribeSavingsPlansOfferingRatesResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand,
  serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeSavingsPlansOfferingRatesCommandInput extends DescribeSavingsPlansOfferingRatesRequest {}
export interface DescribeSavingsPlansOfferingRatesCommandOutput
  extends DescribeSavingsPlansOfferingRatesResponse,
    __MetadataBearer {}

/**
 * <p>Describes the specified Savings Plans offering rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlansOfferingRatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlansOfferingRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSavingsPlansOfferingRatesCommand extends $Command<
  DescribeSavingsPlansOfferingRatesCommandInput,
  DescribeSavingsPlansOfferingRatesCommandOutput,
  SavingsplansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSavingsPlansOfferingRatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SavingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSavingsPlansOfferingRatesCommandInput, DescribeSavingsPlansOfferingRatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DescribeSavingsPlansOfferingRatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSavingsPlansOfferingRatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSavingsPlansOfferingRatesResponse.filterSensitiveLog,
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
