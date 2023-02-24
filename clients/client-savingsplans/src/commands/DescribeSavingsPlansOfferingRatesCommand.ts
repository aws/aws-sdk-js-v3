// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DescribeSavingsPlansOfferingRatesRequest,
  DescribeSavingsPlansOfferingRatesRequestFilterSensitiveLog,
  DescribeSavingsPlansOfferingRatesResponse,
  DescribeSavingsPlansOfferingRatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand,
  serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand,
} from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

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
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 */
export class DescribeSavingsPlansOfferingRatesCommand extends $Command<
  DescribeSavingsPlansOfferingRatesCommandInput,
  DescribeSavingsPlansOfferingRatesCommandOutput,
  SavingsplansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSavingsPlansOfferingRatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DescribeSavingsPlansOfferingRatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSavingsPlansOfferingRatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSavingsPlansOfferingRatesResponseFilterSensitiveLog,
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
