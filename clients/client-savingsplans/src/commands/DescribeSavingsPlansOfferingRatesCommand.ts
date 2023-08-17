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
} from "@smithy/types";

import {
  DescribeSavingsPlansOfferingRatesRequest,
  DescribeSavingsPlansOfferingRatesResponse,
} from "../models/models_0";
import {
  de_DescribeSavingsPlansOfferingRatesCommand,
  se_DescribeSavingsPlansOfferingRatesCommand,
} from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSavingsPlansOfferingRatesCommand}.
 */
export interface DescribeSavingsPlansOfferingRatesCommandInput extends DescribeSavingsPlansOfferingRatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlansOfferingRatesCommand}.
 */
export interface DescribeSavingsPlansOfferingRatesCommandOutput
  extends DescribeSavingsPlansOfferingRatesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Savings Plans offering rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const input = { // DescribeSavingsPlansOfferingRatesRequest
 *   savingsPlanOfferingIds: [ // UUIDs
 *     "STRING_VALUE",
 *   ],
 *   savingsPlanPaymentOptions: [ // SavingsPlanPaymentOptionList
 *     "All Upfront" || "Partial Upfront" || "No Upfront",
 *   ],
 *   savingsPlanTypes: [ // SavingsPlanTypeList
 *     "Compute" || "EC2Instance" || "SageMaker",
 *   ],
 *   products: [ // SavingsPlanProductTypeList
 *     "EC2" || "Fargate" || "Lambda" || "SageMaker",
 *   ],
 *   serviceCodes: [ // SavingsPlanRateServiceCodeList
 *     "AmazonEC2" || "AmazonECS" || "AmazonEKS" || "AWSLambda" || "AmazonSageMaker",
 *   ],
 *   usageTypes: [ // SavingsPlanRateUsageTypeList
 *     "STRING_VALUE",
 *   ],
 *   operations: [ // SavingsPlanRateOperationList
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // SavingsPlanOfferingRateFiltersList
 *     { // SavingsPlanOfferingRateFilterElement
 *       name: "region" || "instanceFamily" || "instanceType" || "productDescription" || "tenancy" || "productId",
 *       values: [ // FilterValuesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeSavingsPlansOfferingRatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlansOfferingRatesResponse
 * //   searchResults: [ // SavingsPlanOfferingRatesList
 * //     { // SavingsPlanOfferingRate
 * //       savingsPlanOffering: { // ParentSavingsPlanOffering
 * //         offeringId: "STRING_VALUE",
 * //         paymentOption: "All Upfront" || "Partial Upfront" || "No Upfront",
 * //         planType: "Compute" || "EC2Instance" || "SageMaker",
 * //         durationSeconds: Number("long"),
 * //         currency: "CNY" || "USD",
 * //         planDescription: "STRING_VALUE",
 * //       },
 * //       rate: "STRING_VALUE",
 * //       unit: "Hrs" || "Lambda-GB-Second" || "Request",
 * //       productType: "EC2" || "Fargate" || "Lambda" || "SageMaker",
 * //       serviceCode: "AmazonEC2" || "AmazonECS" || "AmazonEKS" || "AWSLambda" || "AmazonSageMaker",
 * //       usageType: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       properties: [ // SavingsPlanOfferingRatePropertyList
 * //         { // SavingsPlanOfferingRateProperty
 * //           name: "STRING_VALUE",
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
 * @param DescribeSavingsPlansOfferingRatesCommandInput - {@link DescribeSavingsPlansOfferingRatesCommandInput}
 * @returns {@link DescribeSavingsPlansOfferingRatesCommandOutput}
 * @see {@link DescribeSavingsPlansOfferingRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
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

  /**
   * @public
   */
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
  private serialize(
    input: DescribeSavingsPlansOfferingRatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeSavingsPlansOfferingRatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> {
    return de_DescribeSavingsPlansOfferingRatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
