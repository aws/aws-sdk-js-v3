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

import { DescribeSavingsPlanRatesRequest, DescribeSavingsPlanRatesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSavingsPlanRatesCommand,
  serializeAws_restJson1DescribeSavingsPlanRatesCommand,
} from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 *
 * The input for {@link DescribeSavingsPlanRatesCommand}.
 */
export interface DescribeSavingsPlanRatesCommandInput extends DescribeSavingsPlanRatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlanRatesCommand}.
 */
export interface DescribeSavingsPlanRatesCommandOutput extends DescribeSavingsPlanRatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Savings Plans rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlanRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlanRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const input = {
 *   savingsPlanId: "STRING_VALUE", // required
 *   filters: [
 *     {
 *       name: "STRING_VALUE",
 *       values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeSavingsPlanRatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeSavingsPlanRatesCommandInput - {@link DescribeSavingsPlanRatesCommandInput}
 * @returns {@link DescribeSavingsPlanRatesCommandOutput}
 * @see {@link DescribeSavingsPlanRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlanRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeSavingsPlanRatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSavingsPlanRatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSavingsPlanRatesCommandOutput> {
    return deserializeAws_restJson1DescribeSavingsPlanRatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
