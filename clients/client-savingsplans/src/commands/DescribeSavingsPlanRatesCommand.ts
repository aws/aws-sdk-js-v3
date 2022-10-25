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
  DescribeSavingsPlanRatesRequest,
  DescribeSavingsPlanRatesRequestFilterSensitiveLog,
  DescribeSavingsPlanRatesResponse,
  DescribeSavingsPlanRatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSavingsPlanRatesCommand,
  serializeAws_restJson1DescribeSavingsPlanRatesCommand,
} from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

export interface DescribeSavingsPlanRatesCommandInput extends DescribeSavingsPlanRatesRequest {}
export interface DescribeSavingsPlanRatesCommandOutput extends DescribeSavingsPlanRatesResponse, __MetadataBearer {}

/**
 * <p>Describes the specified Savings Plans rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlanRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlanRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlanRatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlanRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlanRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 */
export class DescribeSavingsPlanRatesCommand extends $Command<
  DescribeSavingsPlanRatesCommandInput,
  DescribeSavingsPlanRatesCommandOutput,
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

  constructor(readonly input: DescribeSavingsPlanRatesCommandInput) {
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
  ): Handler<DescribeSavingsPlanRatesCommandInput, DescribeSavingsPlanRatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSavingsPlanRatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DescribeSavingsPlanRatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSavingsPlanRatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSavingsPlanRatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSavingsPlanRatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSavingsPlanRatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSavingsPlanRatesCommandOutput> {
    return deserializeAws_restJson1DescribeSavingsPlanRatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
