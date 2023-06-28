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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  GetReservationPurchaseRecommendationRequest,
  GetReservationPurchaseRecommendationResponse,
} from "../models/models_0";
import {
  de_GetReservationPurchaseRecommendationCommand,
  se_GetReservationPurchaseRecommendationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReservationPurchaseRecommendationCommand}.
 */
export interface GetReservationPurchaseRecommendationCommandInput extends GetReservationPurchaseRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetReservationPurchaseRecommendationCommand}.
 */
export interface GetReservationPurchaseRecommendationCommandOutput
  extends GetReservationPurchaseRecommendationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets recommendations for reservation purchases. These recommendations might help you to
 *       reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to
 *       On-Demand pricing.</p>
 *          <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage
 *       during a specific time period and collecting your usage into categories that are eligible for
 *       a reservation. After Amazon Web Services has these categories, it simulates every combination
 *       of reservations in each category of usage to identify the best number of each type of Reserved
 *       Instance (RI) to purchase to maximize your estimated savings. </p>
 *          <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared
 *       tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy
 *       size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services
 *       recommends the smallest size instance in an instance family. This makes it easier to purchase
 *       a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of
 *       normalized units. This way, you can purchase any instance size that you want. For this
 *       example, your RI recommendation is for <code>c4.large</code> because that is the smallest size
 *       instance in the c4 instance family.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationPurchaseRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationPurchaseRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // GetReservationPurchaseRecommendationRequest
 *   AccountId: "STRING_VALUE",
 *   Service: "STRING_VALUE", // required
 *   Filter: { // Expression
 *     Or: [ // Expressions
 *       {
 *         Or: [
 *           "<Expression>",
 *         ],
 *         And: [
 *           "<Expression>",
 *         ],
 *         Not: "<Expression>",
 *         Dimensions: { // DimensionValues
 *           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *           Values: [ // Values
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [ // MatchOptions
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         Tags: { // TagValues
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         CostCategories: { // CostCategoryValues
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *       },
 *     ],
 *     And: [
 *       "<Expression>",
 *     ],
 *     Not: "<Expression>",
 *     Dimensions: {
 *       Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: [
 *         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *       ],
 *     },
 *     Tags: {
 *       Key: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: [
 *         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *       ],
 *     },
 *     CostCategories: {
 *       Key: "STRING_VALUE",
 *       Values: "<Values>",
 *       MatchOptions: "<MatchOptions>",
 *     },
 *   },
 *   AccountScope: "PAYER" || "LINKED",
 *   LookbackPeriodInDays: "SEVEN_DAYS" || "THIRTY_DAYS" || "SIXTY_DAYS",
 *   TermInYears: "ONE_YEAR" || "THREE_YEARS",
 *   PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 *   ServiceSpecification: { // ServiceSpecification
 *     EC2Specification: { // EC2Specification
 *       OfferingClass: "STANDARD" || "CONVERTIBLE",
 *     },
 *   },
 *   PageSize: Number("int"),
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new GetReservationPurchaseRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetReservationPurchaseRecommendationResponse
 * //   Metadata: { // ReservationPurchaseRecommendationMetadata
 * //     RecommendationId: "STRING_VALUE",
 * //     GenerationTimestamp: "STRING_VALUE",
 * //   },
 * //   Recommendations: [ // ReservationPurchaseRecommendations
 * //     { // ReservationPurchaseRecommendation
 * //       AccountScope: "PAYER" || "LINKED",
 * //       LookbackPeriodInDays: "SEVEN_DAYS" || "THIRTY_DAYS" || "SIXTY_DAYS",
 * //       TermInYears: "ONE_YEAR" || "THREE_YEARS",
 * //       PaymentOption: "NO_UPFRONT" || "PARTIAL_UPFRONT" || "ALL_UPFRONT" || "LIGHT_UTILIZATION" || "MEDIUM_UTILIZATION" || "HEAVY_UTILIZATION",
 * //       ServiceSpecification: { // ServiceSpecification
 * //         EC2Specification: { // EC2Specification
 * //           OfferingClass: "STANDARD" || "CONVERTIBLE",
 * //         },
 * //       },
 * //       RecommendationDetails: [ // ReservationPurchaseRecommendationDetails
 * //         { // ReservationPurchaseRecommendationDetail
 * //           AccountId: "STRING_VALUE",
 * //           InstanceDetails: { // InstanceDetails
 * //             EC2InstanceDetails: { // EC2InstanceDetails
 * //               Family: "STRING_VALUE",
 * //               InstanceType: "STRING_VALUE",
 * //               Region: "STRING_VALUE",
 * //               AvailabilityZone: "STRING_VALUE",
 * //               Platform: "STRING_VALUE",
 * //               Tenancy: "STRING_VALUE",
 * //               CurrentGeneration: true || false,
 * //               SizeFlexEligible: true || false,
 * //             },
 * //             RDSInstanceDetails: { // RDSInstanceDetails
 * //               Family: "STRING_VALUE",
 * //               InstanceType: "STRING_VALUE",
 * //               Region: "STRING_VALUE",
 * //               DatabaseEngine: "STRING_VALUE",
 * //               DatabaseEdition: "STRING_VALUE",
 * //               DeploymentOption: "STRING_VALUE",
 * //               LicenseModel: "STRING_VALUE",
 * //               CurrentGeneration: true || false,
 * //               SizeFlexEligible: true || false,
 * //             },
 * //             RedshiftInstanceDetails: { // RedshiftInstanceDetails
 * //               Family: "STRING_VALUE",
 * //               NodeType: "STRING_VALUE",
 * //               Region: "STRING_VALUE",
 * //               CurrentGeneration: true || false,
 * //               SizeFlexEligible: true || false,
 * //             },
 * //             ElastiCacheInstanceDetails: { // ElastiCacheInstanceDetails
 * //               Family: "STRING_VALUE",
 * //               NodeType: "STRING_VALUE",
 * //               Region: "STRING_VALUE",
 * //               ProductDescription: "STRING_VALUE",
 * //               CurrentGeneration: true || false,
 * //               SizeFlexEligible: true || false,
 * //             },
 * //             ESInstanceDetails: { // ESInstanceDetails
 * //               InstanceClass: "STRING_VALUE",
 * //               InstanceSize: "STRING_VALUE",
 * //               Region: "STRING_VALUE",
 * //               CurrentGeneration: true || false,
 * //               SizeFlexEligible: true || false,
 * //             },
 * //           },
 * //           RecommendedNumberOfInstancesToPurchase: "STRING_VALUE",
 * //           RecommendedNormalizedUnitsToPurchase: "STRING_VALUE",
 * //           MinimumNumberOfInstancesUsedPerHour: "STRING_VALUE",
 * //           MinimumNormalizedUnitsUsedPerHour: "STRING_VALUE",
 * //           MaximumNumberOfInstancesUsedPerHour: "STRING_VALUE",
 * //           MaximumNormalizedUnitsUsedPerHour: "STRING_VALUE",
 * //           AverageNumberOfInstancesUsedPerHour: "STRING_VALUE",
 * //           AverageNormalizedUnitsUsedPerHour: "STRING_VALUE",
 * //           AverageUtilization: "STRING_VALUE",
 * //           EstimatedBreakEvenInMonths: "STRING_VALUE",
 * //           CurrencyCode: "STRING_VALUE",
 * //           EstimatedMonthlySavingsAmount: "STRING_VALUE",
 * //           EstimatedMonthlySavingsPercentage: "STRING_VALUE",
 * //           EstimatedMonthlyOnDemandCost: "STRING_VALUE",
 * //           EstimatedReservationCostForLookbackPeriod: "STRING_VALUE",
 * //           UpfrontCost: "STRING_VALUE",
 * //           RecurringStandardMonthlyCost: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RecommendationSummary: { // ReservationPurchaseRecommendationSummary
 * //         TotalEstimatedMonthlySavingsAmount: "STRING_VALUE",
 * //         TotalEstimatedMonthlySavingsPercentage: "STRING_VALUE",
 * //         CurrencyCode: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReservationPurchaseRecommendationCommandInput - {@link GetReservationPurchaseRecommendationCommandInput}
 * @returns {@link GetReservationPurchaseRecommendationCommandOutput}
 * @see {@link GetReservationPurchaseRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetReservationPurchaseRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class GetReservationPurchaseRecommendationCommand extends $Command<
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
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
  constructor(readonly input: GetReservationPurchaseRecommendationCommandInput) {
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
  ): Handler<GetReservationPurchaseRecommendationCommandInput, GetReservationPurchaseRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReservationPurchaseRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetReservationPurchaseRecommendationCommand";
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
    input: GetReservationPurchaseRecommendationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetReservationPurchaseRecommendationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReservationPurchaseRecommendationCommandOutput> {
    return de_GetReservationPurchaseRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
