// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeSavingsPlanRatesRequest, DescribeSavingsPlanRatesResponse } from "../models/models_0";
import { de_DescribeSavingsPlanRatesCommand, se_DescribeSavingsPlanRatesCommand } from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // DescribeSavingsPlanRatesRequest
 *   savingsPlanId: "STRING_VALUE", // required
 *   filters: [ // SavingsPlanRateFilterList
 *     { // SavingsPlanRateFilter
 *       name: "region" || "instanceType" || "productDescription" || "tenancy" || "productType" || "serviceCode" || "usageType" || "operation",
 *       values: [ // ListOfStrings
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeSavingsPlanRatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlanRatesResponse
 * //   savingsPlanId: "STRING_VALUE",
 * //   searchResults: [ // SavingsPlanRateList
 * //     { // SavingsPlanRate
 * //       rate: "STRING_VALUE",
 * //       currency: "CNY" || "USD",
 * //       unit: "Hrs" || "Lambda-GB-Second" || "Request",
 * //       productType: "EC2" || "Fargate" || "Lambda" || "SageMaker",
 * //       serviceCode: "AmazonEC2" || "AmazonECS" || "AmazonEKS" || "AWSLambda" || "AmazonSageMaker",
 * //       usageType: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       properties: [ // SavingsPlanRatePropertyList
 * //         { // SavingsPlanRateProperty
 * //           name: "region" || "instanceType" || "instanceFamily" || "productDescription" || "tenancy",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
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
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSavingsPlan",
        operation: "DescribeSavingsPlanRates",
      },
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
    return se_DescribeSavingsPlanRatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSavingsPlanRatesCommandOutput> {
    return de_DescribeSavingsPlanRatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
