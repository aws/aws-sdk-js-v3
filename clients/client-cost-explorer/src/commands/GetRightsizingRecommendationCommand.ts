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
import { GetRightsizingRecommendationRequest, GetRightsizingRecommendationResponse } from "../models/models_0";
import {
  de_GetRightsizingRecommendationCommand,
  se_GetRightsizingRecommendationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRightsizingRecommendationCommand}.
 */
export interface GetRightsizingRecommendationCommandInput extends GetRightsizingRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetRightsizingRecommendationCommand}.
 */
export interface GetRightsizingRecommendationCommandOutput
  extends GetRightsizingRecommendationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates recommendations that help you save cost by identifying idle and underutilized
 *       Amazon EC2 instances.</p>
 *          <p>Recommendations are generated to either downsize or terminate instances, along with
 *       providing savings detail and metrics. For more information about calculation and function, see
 *         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetRightsizingRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetRightsizingRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // GetRightsizingRecommendationRequest
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
 *   Configuration: { // RightsizingRecommendationConfiguration
 *     RecommendationTarget: "SAME_INSTANCE_FAMILY" || "CROSS_INSTANCE_FAMILY", // required
 *     BenefitsConsidered: true || false, // required
 *   },
 *   Service: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new GetRightsizingRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetRightsizingRecommendationResponse
 * //   Metadata: { // RightsizingRecommendationMetadata
 * //     RecommendationId: "STRING_VALUE",
 * //     GenerationTimestamp: "STRING_VALUE",
 * //     LookbackPeriodInDays: "SEVEN_DAYS" || "THIRTY_DAYS" || "SIXTY_DAYS",
 * //     AdditionalMetadata: "STRING_VALUE",
 * //   },
 * //   Summary: { // RightsizingRecommendationSummary
 * //     TotalRecommendationCount: "STRING_VALUE",
 * //     EstimatedTotalMonthlySavingsAmount: "STRING_VALUE",
 * //     SavingsCurrencyCode: "STRING_VALUE",
 * //     SavingsPercentage: "STRING_VALUE",
 * //   },
 * //   RightsizingRecommendations: [ // RightsizingRecommendationList
 * //     { // RightsizingRecommendation
 * //       AccountId: "STRING_VALUE",
 * //       CurrentInstance: { // CurrentInstance
 * //         ResourceId: "STRING_VALUE",
 * //         InstanceName: "STRING_VALUE",
 * //         Tags: [ // TagValuesList
 * //           { // TagValues
 * //             Key: "STRING_VALUE",
 * //             Values: [ // Values
 * //               "STRING_VALUE",
 * //             ],
 * //             MatchOptions: [ // MatchOptions
 * //               "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //             ],
 * //           },
 * //         ],
 * //         ResourceDetails: { // ResourceDetails
 * //           EC2ResourceDetails: { // EC2ResourceDetails
 * //             HourlyOnDemandRate: "STRING_VALUE",
 * //             InstanceType: "STRING_VALUE",
 * //             Platform: "STRING_VALUE",
 * //             Region: "STRING_VALUE",
 * //             Sku: "STRING_VALUE",
 * //             Memory: "STRING_VALUE",
 * //             NetworkPerformance: "STRING_VALUE",
 * //             Storage: "STRING_VALUE",
 * //             Vcpu: "STRING_VALUE",
 * //           },
 * //         },
 * //         ResourceUtilization: { // ResourceUtilization
 * //           EC2ResourceUtilization: { // EC2ResourceUtilization
 * //             MaxCpuUtilizationPercentage: "STRING_VALUE",
 * //             MaxMemoryUtilizationPercentage: "STRING_VALUE",
 * //             MaxStorageUtilizationPercentage: "STRING_VALUE",
 * //             EBSResourceUtilization: { // EBSResourceUtilization
 * //               EbsReadOpsPerSecond: "STRING_VALUE",
 * //               EbsWriteOpsPerSecond: "STRING_VALUE",
 * //               EbsReadBytesPerSecond: "STRING_VALUE",
 * //               EbsWriteBytesPerSecond: "STRING_VALUE",
 * //             },
 * //             DiskResourceUtilization: { // DiskResourceUtilization
 * //               DiskReadOpsPerSecond: "STRING_VALUE",
 * //               DiskWriteOpsPerSecond: "STRING_VALUE",
 * //               DiskReadBytesPerSecond: "STRING_VALUE",
 * //               DiskWriteBytesPerSecond: "STRING_VALUE",
 * //             },
 * //             NetworkResourceUtilization: { // NetworkResourceUtilization
 * //               NetworkInBytesPerSecond: "STRING_VALUE",
 * //               NetworkOutBytesPerSecond: "STRING_VALUE",
 * //               NetworkPacketsInPerSecond: "STRING_VALUE",
 * //               NetworkPacketsOutPerSecond: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         ReservationCoveredHoursInLookbackPeriod: "STRING_VALUE",
 * //         SavingsPlansCoveredHoursInLookbackPeriod: "STRING_VALUE",
 * //         OnDemandHoursInLookbackPeriod: "STRING_VALUE",
 * //         TotalRunningHoursInLookbackPeriod: "STRING_VALUE",
 * //         MonthlyCost: "STRING_VALUE",
 * //         CurrencyCode: "STRING_VALUE",
 * //       },
 * //       RightsizingType: "TERMINATE" || "MODIFY",
 * //       ModifyRecommendationDetail: { // ModifyRecommendationDetail
 * //         TargetInstances: [ // TargetInstancesList
 * //           { // TargetInstance
 * //             EstimatedMonthlyCost: "STRING_VALUE",
 * //             EstimatedMonthlySavings: "STRING_VALUE",
 * //             CurrencyCode: "STRING_VALUE",
 * //             DefaultTargetInstance: true || false,
 * //             ResourceDetails: {
 * //               EC2ResourceDetails: {
 * //                 HourlyOnDemandRate: "STRING_VALUE",
 * //                 InstanceType: "STRING_VALUE",
 * //                 Platform: "STRING_VALUE",
 * //                 Region: "STRING_VALUE",
 * //                 Sku: "STRING_VALUE",
 * //                 Memory: "STRING_VALUE",
 * //                 NetworkPerformance: "STRING_VALUE",
 * //                 Storage: "STRING_VALUE",
 * //                 Vcpu: "STRING_VALUE",
 * //               },
 * //             },
 * //             ExpectedResourceUtilization: {
 * //               EC2ResourceUtilization: {
 * //                 MaxCpuUtilizationPercentage: "STRING_VALUE",
 * //                 MaxMemoryUtilizationPercentage: "STRING_VALUE",
 * //                 MaxStorageUtilizationPercentage: "STRING_VALUE",
 * //                 EBSResourceUtilization: {
 * //                   EbsReadOpsPerSecond: "STRING_VALUE",
 * //                   EbsWriteOpsPerSecond: "STRING_VALUE",
 * //                   EbsReadBytesPerSecond: "STRING_VALUE",
 * //                   EbsWriteBytesPerSecond: "STRING_VALUE",
 * //                 },
 * //                 DiskResourceUtilization: {
 * //                   DiskReadOpsPerSecond: "STRING_VALUE",
 * //                   DiskWriteOpsPerSecond: "STRING_VALUE",
 * //                   DiskReadBytesPerSecond: "STRING_VALUE",
 * //                   DiskWriteBytesPerSecond: "STRING_VALUE",
 * //                 },
 * //                 NetworkResourceUtilization: {
 * //                   NetworkInBytesPerSecond: "STRING_VALUE",
 * //                   NetworkOutBytesPerSecond: "STRING_VALUE",
 * //                   NetworkPacketsInPerSecond: "STRING_VALUE",
 * //                   NetworkPacketsOutPerSecond: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             PlatformDifferences: [ // PlatformDifferences
 * //               "HYPERVISOR" || "NETWORK_INTERFACE" || "STORAGE_INTERFACE" || "INSTANCE_STORE_AVAILABILITY" || "VIRTUALIZATION_TYPE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       TerminateRecommendationDetail: { // TerminateRecommendationDetail
 * //         EstimatedMonthlySavings: "STRING_VALUE",
 * //         CurrencyCode: "STRING_VALUE",
 * //       },
 * //       FindingReasonCodes: [ // FindingReasonCodes
 * //         "CPU_OVER_PROVISIONED" || "CPU_UNDER_PROVISIONED" || "MEMORY_OVER_PROVISIONED" || "MEMORY_UNDER_PROVISIONED" || "EBS_THROUGHPUT_OVER_PROVISIONED" || "EBS_THROUGHPUT_UNDER_PROVISIONED" || "EBS_IOPS_OVER_PROVISIONED" || "EBS_IOPS_UNDER_PROVISIONED" || "NETWORK_BANDWIDTH_OVER_PROVISIONED" || "NETWORK_BANDWIDTH_UNDER_PROVISIONED" || "NETWORK_PPS_OVER_PROVISIONED" || "NETWORK_PPS_UNDER_PROVISIONED" || "DISK_IOPS_OVER_PROVISIONED" || "DISK_IOPS_UNDER_PROVISIONED" || "DISK_THROUGHPUT_OVER_PROVISIONED" || "DISK_THROUGHPUT_UNDER_PROVISIONED",
 * //       ],
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * //   Configuration: { // RightsizingRecommendationConfiguration
 * //     RecommendationTarget: "SAME_INSTANCE_FAMILY" || "CROSS_INSTANCE_FAMILY", // required
 * //     BenefitsConsidered: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRightsizingRecommendationCommandInput - {@link GetRightsizingRecommendationCommandInput}
 * @returns {@link GetRightsizingRecommendationCommandOutput}
 * @see {@link GetRightsizingRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRightsizingRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
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
export class GetRightsizingRecommendationCommand extends $Command<
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
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
  constructor(readonly input: GetRightsizingRecommendationCommandInput) {
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
  ): Handler<GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRightsizingRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetRightsizingRecommendationCommand";
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
  private serialize(input: GetRightsizingRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRightsizingRecommendationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRightsizingRecommendationCommandOutput> {
    return de_GetRightsizingRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
