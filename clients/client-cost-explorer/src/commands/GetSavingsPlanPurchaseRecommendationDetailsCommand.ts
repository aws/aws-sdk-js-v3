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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  GetSavingsPlanPurchaseRecommendationDetailsRequest,
  GetSavingsPlanPurchaseRecommendationDetailsResponse,
} from "../models/models_0";
import {
  de_GetSavingsPlanPurchaseRecommendationDetailsCommand,
  se_GetSavingsPlanPurchaseRecommendationDetailsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSavingsPlanPurchaseRecommendationDetailsCommand}.
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsCommandInput
  extends GetSavingsPlanPurchaseRecommendationDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetSavingsPlanPurchaseRecommendationDetailsCommand}.
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsCommandOutput
  extends GetSavingsPlanPurchaseRecommendationDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details for a Savings Plan recommendation. These details include the hourly
 *       data-points that construct the cost, coverage, and utilization charts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlanPurchaseRecommendationDetailsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlanPurchaseRecommendationDetailsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // GetSavingsPlanPurchaseRecommendationDetailsRequest
 *   RecommendationDetailId: "STRING_VALUE", // required
 * };
 * const command = new GetSavingsPlanPurchaseRecommendationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetSavingsPlanPurchaseRecommendationDetailsResponse
 * //   RecommendationDetailId: "STRING_VALUE",
 * //   RecommendationDetailData: { // RecommendationDetailData
 * //     AccountScope: "PAYER" || "LINKED",
 * //     LookbackPeriodInDays: "SEVEN_DAYS" || "THIRTY_DAYS" || "SIXTY_DAYS",
 * //     SavingsPlansType: "COMPUTE_SP" || "EC2_INSTANCE_SP" || "SAGEMAKER_SP",
 * //     TermInYears: "ONE_YEAR" || "THREE_YEARS",
 * //     PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 * //     AccountId: "STRING_VALUE",
 * //     CurrencyCode: "STRING_VALUE",
 * //     InstanceFamily: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     OfferingId: "STRING_VALUE",
 * //     GenerationTimestamp: "STRING_VALUE",
 * //     LatestUsageTimestamp: "STRING_VALUE",
 * //     CurrentAverageHourlyOnDemandSpend: "STRING_VALUE",
 * //     CurrentMaximumHourlyOnDemandSpend: "STRING_VALUE",
 * //     CurrentMinimumHourlyOnDemandSpend: "STRING_VALUE",
 * //     EstimatedAverageUtilization: "STRING_VALUE",
 * //     EstimatedMonthlySavingsAmount: "STRING_VALUE",
 * //     EstimatedOnDemandCost: "STRING_VALUE",
 * //     EstimatedOnDemandCostWithCurrentCommitment: "STRING_VALUE",
 * //     EstimatedROI: "STRING_VALUE",
 * //     EstimatedSPCost: "STRING_VALUE",
 * //     EstimatedSavingsAmount: "STRING_VALUE",
 * //     EstimatedSavingsPercentage: "STRING_VALUE",
 * //     ExistingHourlyCommitment: "STRING_VALUE",
 * //     HourlyCommitmentToPurchase: "STRING_VALUE",
 * //     UpfrontCost: "STRING_VALUE",
 * //     CurrentAverageCoverage: "STRING_VALUE",
 * //     EstimatedAverageCoverage: "STRING_VALUE",
 * //     MetricsOverLookbackPeriod: [ // MetricsOverLookbackPeriod
 * //       { // RecommendationDetailHourlyMetrics
 * //         StartTime: "STRING_VALUE",
 * //         EstimatedOnDemandCost: "STRING_VALUE",
 * //         CurrentCoverage: "STRING_VALUE",
 * //         EstimatedCoverage: "STRING_VALUE",
 * //         EstimatedNewCommitmentUtilization: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSavingsPlanPurchaseRecommendationDetailsCommandInput - {@link GetSavingsPlanPurchaseRecommendationDetailsCommandInput}
 * @returns {@link GetSavingsPlanPurchaseRecommendationDetailsCommandOutput}
 * @see {@link GetSavingsPlanPurchaseRecommendationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlanPurchaseRecommendationDetailsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class GetSavingsPlanPurchaseRecommendationDetailsCommand extends $Command<
  GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
  GetSavingsPlanPurchaseRecommendationDetailsCommandOutput,
  CostExplorerClientResolvedConfig
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
  constructor(readonly input: GetSavingsPlanPurchaseRecommendationDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
    GetSavingsPlanPurchaseRecommendationDetailsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetSavingsPlanPurchaseRecommendationDetailsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetSavingsPlanPurchaseRecommendationDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "GetSavingsPlanPurchaseRecommendationDetails",
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
  private serialize(
    input: GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSavingsPlanPurchaseRecommendationDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSavingsPlanPurchaseRecommendationDetailsCommandOutput> {
    return de_GetSavingsPlanPurchaseRecommendationDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
