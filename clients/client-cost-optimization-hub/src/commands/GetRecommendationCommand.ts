// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecommendationRequest, GetRecommendationResponse } from "../models/models_0";
import { de_GetRecommendationCommand, se_GetRecommendationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandInput extends GetRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandOutput extends GetRecommendationResponse, __MetadataBearer {}

/**
 * <p>Returns both the current and recommended resource configuration and the estimated cost
 *       impact for a recommendation.</p>
 *          <p>The <code>recommendationId</code> is only valid for up to a maximum of 24 hours as
 *       recommendations are refreshed daily. To retrieve the <code>recommendationId</code>, use the
 *         <code>ListRecommendations</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, GetRecommendationCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, GetRecommendationCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // GetRecommendationRequest
 *   recommendationId: "STRING_VALUE", // required
 * };
 * const command = new GetRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationResponse
 * //   recommendationId: "STRING_VALUE",
 * //   resourceId: "STRING_VALUE",
 * //   resourceArn: "STRING_VALUE",
 * //   accountId: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   recommendationLookbackPeriodInDays: Number("int"),
 * //   costCalculationLookbackPeriodInDays: Number("int"),
 * //   estimatedSavingsPercentage: Number("double"),
 * //   estimatedSavingsOverCostCalculationLookbackPeriod: Number("double"),
 * //   currentResourceType: "Ec2Instance" || "LambdaFunction" || "EbsVolume" || "EcsService" || "Ec2AutoScalingGroup" || "Ec2InstanceSavingsPlans" || "ComputeSavingsPlans" || "SageMakerSavingsPlans" || "Ec2ReservedInstances" || "RdsReservedInstances" || "OpenSearchReservedInstances" || "RedshiftReservedInstances" || "ElastiCacheReservedInstances" || "RdsDbInstanceStorage" || "RdsDbInstance" || "DynamoDbReservedCapacity" || "MemoryDbReservedInstances",
 * //   recommendedResourceType: "Ec2Instance" || "LambdaFunction" || "EbsVolume" || "EcsService" || "Ec2AutoScalingGroup" || "Ec2InstanceSavingsPlans" || "ComputeSavingsPlans" || "SageMakerSavingsPlans" || "Ec2ReservedInstances" || "RdsReservedInstances" || "OpenSearchReservedInstances" || "RedshiftReservedInstances" || "ElastiCacheReservedInstances" || "RdsDbInstanceStorage" || "RdsDbInstance" || "DynamoDbReservedCapacity" || "MemoryDbReservedInstances",
 * //   region: "STRING_VALUE",
 * //   source: "ComputeOptimizer" || "CostExplorer",
 * //   lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //   estimatedMonthlySavings: Number("double"),
 * //   estimatedMonthlyCost: Number("double"),
 * //   implementationEffort: "VeryLow" || "Low" || "Medium" || "High" || "VeryHigh",
 * //   restartNeeded: true || false,
 * //   actionType: "Rightsize" || "Stop" || "Upgrade" || "PurchaseSavingsPlans" || "PurchaseReservedInstances" || "MigrateToGraviton" || "Delete" || "ScaleIn",
 * //   rollbackPossible: true || false,
 * //   currentResourceDetails: { // ResourceDetails Union: only one key present
 * //     lambdaFunction: { // LambdaFunction
 * //       configuration: { // LambdaFunctionConfiguration
 * //         compute: { // ComputeConfiguration
 * //           vCpu: Number("double"),
 * //           memorySizeInMB: Number("int"),
 * //           architecture: "STRING_VALUE",
 * //           platform: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: { // ResourceCostCalculation
 * //         usages: [ // UsageList
 * //           { // Usage
 * //             usageType: "STRING_VALUE",
 * //             usageAmount: Number("double"),
 * //             operation: "STRING_VALUE",
 * //             productCode: "STRING_VALUE",
 * //             unit: "STRING_VALUE",
 * //           },
 * //         ],
 * //         pricing: { // ResourcePricing
 * //           estimatedCostBeforeDiscounts: Number("double"),
 * //           estimatedNetUnusedAmortizedCommitments: Number("double"),
 * //           estimatedDiscounts: { // EstimatedDiscounts
 * //             savingsPlansDiscount: Number("double"),
 * //             reservedInstancesDiscount: Number("double"),
 * //             otherDiscount: Number("double"),
 * //           },
 * //           estimatedCostAfterDiscounts: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     ecsService: { // EcsService
 * //       configuration: { // EcsServiceConfiguration
 * //         compute: {
 * //           vCpu: Number("double"),
 * //           memorySizeInMB: Number("int"),
 * //           architecture: "STRING_VALUE",
 * //           platform: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: {
 * //         usages: [
 * //           {
 * //             usageType: "STRING_VALUE",
 * //             usageAmount: Number("double"),
 * //             operation: "STRING_VALUE",
 * //             productCode: "STRING_VALUE",
 * //             unit: "STRING_VALUE",
 * //           },
 * //         ],
 * //         pricing: {
 * //           estimatedCostBeforeDiscounts: Number("double"),
 * //           estimatedNetUnusedAmortizedCommitments: Number("double"),
 * //           estimatedDiscounts: {
 * //             savingsPlansDiscount: Number("double"),
 * //             reservedInstancesDiscount: Number("double"),
 * //             otherDiscount: Number("double"),
 * //           },
 * //           estimatedCostAfterDiscounts: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     ec2Instance: { // Ec2Instance
 * //       configuration: { // Ec2InstanceConfiguration
 * //         instance: { // InstanceConfiguration
 * //           type: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: {
 * //         usages: [
 * //           {
 * //             usageType: "STRING_VALUE",
 * //             usageAmount: Number("double"),
 * //             operation: "STRING_VALUE",
 * //             productCode: "STRING_VALUE",
 * //             unit: "STRING_VALUE",
 * //           },
 * //         ],
 * //         pricing: {
 * //           estimatedCostBeforeDiscounts: Number("double"),
 * //           estimatedNetUnusedAmortizedCommitments: Number("double"),
 * //           estimatedDiscounts: {
 * //             savingsPlansDiscount: Number("double"),
 * //             reservedInstancesDiscount: Number("double"),
 * //             otherDiscount: Number("double"),
 * //           },
 * //           estimatedCostAfterDiscounts: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     ebsVolume: { // EbsVolume
 * //       configuration: { // EbsVolumeConfiguration
 * //         storage: { // StorageConfiguration
 * //           type: "STRING_VALUE",
 * //           sizeInGb: Number("double"),
 * //         },
 * //         performance: { // BlockStoragePerformanceConfiguration
 * //           iops: Number("double"),
 * //           throughput: Number("double"),
 * //         },
 * //         attachmentState: "STRING_VALUE",
 * //       },
 * //       costCalculation: {
 * //         usages: [
 * //           {
 * //             usageType: "STRING_VALUE",
 * //             usageAmount: Number("double"),
 * //             operation: "STRING_VALUE",
 * //             productCode: "STRING_VALUE",
 * //             unit: "STRING_VALUE",
 * //           },
 * //         ],
 * //         pricing: {
 * //           estimatedCostBeforeDiscounts: Number("double"),
 * //           estimatedNetUnusedAmortizedCommitments: Number("double"),
 * //           estimatedDiscounts: {
 * //             savingsPlansDiscount: Number("double"),
 * //             reservedInstancesDiscount: Number("double"),
 * //             otherDiscount: Number("double"),
 * //           },
 * //           estimatedCostAfterDiscounts: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     ec2AutoScalingGroup: { // Ec2AutoScalingGroup
 * //       configuration: { // Ec2AutoScalingGroupConfiguration
 * //         instance: {
 * //           type: "STRING_VALUE",
 * //         },
 * //         mixedInstances: [ // MixedInstanceConfigurationList
 * //           { // MixedInstanceConfiguration
 * //             type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         type: "SingleInstanceType" || "MixedInstanceTypes",
 * //         allocationStrategy: "Prioritized" || "LowestPrice",
 * //       },
 * //       costCalculation: {
 * //         usages: [
 * //           {
 * //             usageType: "STRING_VALUE",
 * //             usageAmount: Number("double"),
 * //             operation: "STRING_VALUE",
 * //             productCode: "STRING_VALUE",
 * //             unit: "STRING_VALUE",
 * //           },
 * //         ],
 * //         pricing: {
 * //           estimatedCostBeforeDiscounts: Number("double"),
 * //           estimatedNetUnusedAmortizedCommitments: Number("double"),
 * //           estimatedDiscounts: {
 * //             savingsPlansDiscount: Number("double"),
 * //             reservedInstancesDiscount: Number("double"),
 * //             otherDiscount: Number("double"),
 * //           },
 * //           estimatedCostAfterDiscounts: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     ec2ReservedInstances: { // Ec2ReservedInstances
 * //       configuration: { // Ec2ReservedInstancesConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         offeringClass: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         currentGeneration: "STRING_VALUE",
 * //         platform: "STRING_VALUE",
 * //         tenancy: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //       },
 * //       costCalculation: { // ReservedInstancesCostCalculation
 * //         pricing: { // ReservedInstancesPricing
 * //           estimatedOnDemandCost: Number("double"),
 * //           monthlyReservationEligibleCost: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedMonthlyAmortizedReservationCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     rdsReservedInstances: { // RdsReservedInstances
 * //       configuration: { // RdsReservedInstancesConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //         currentGeneration: "STRING_VALUE",
 * //         licenseModel: "STRING_VALUE",
 * //         databaseEdition: "STRING_VALUE",
 * //         databaseEngine: "STRING_VALUE",
 * //         deploymentOption: "STRING_VALUE",
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           estimatedOnDemandCost: Number("double"),
 * //           monthlyReservationEligibleCost: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedMonthlyAmortizedReservationCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     elastiCacheReservedInstances: { // ElastiCacheReservedInstances
 * //       configuration: { // ElastiCacheReservedInstancesConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         currentGeneration: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           estimatedOnDemandCost: Number("double"),
 * //           monthlyReservationEligibleCost: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedMonthlyAmortizedReservationCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     openSearchReservedInstances: { // OpenSearchReservedInstances
 * //       configuration: { // OpenSearchReservedInstancesConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         currentGeneration: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           estimatedOnDemandCost: Number("double"),
 * //           monthlyReservationEligibleCost: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedMonthlyAmortizedReservationCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     redshiftReservedInstances: { // RedshiftReservedInstances
 * //       configuration: { // RedshiftReservedInstancesConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //         currentGeneration: "STRING_VALUE",
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           estimatedOnDemandCost: Number("double"),
 * //           monthlyReservationEligibleCost: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedMonthlyAmortizedReservationCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     ec2InstanceSavingsPlans: { // Ec2InstanceSavingsPlans
 * //       configuration: { // Ec2InstanceSavingsPlansConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         hourlyCommitment: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         savingsPlansRegion: "STRING_VALUE",
 * //       },
 * //       costCalculation: { // SavingsPlansCostCalculation
 * //         pricing: { // SavingsPlansPricing
 * //           monthlySavingsPlansEligibleCost: Number("double"),
 * //           estimatedMonthlyCommitment: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedOnDemandCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     computeSavingsPlans: { // ComputeSavingsPlans
 * //       configuration: { // ComputeSavingsPlansConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         hourlyCommitment: "STRING_VALUE",
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           monthlySavingsPlansEligibleCost: Number("double"),
 * //           estimatedMonthlyCommitment: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedOnDemandCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     sageMakerSavingsPlans: { // SageMakerSavingsPlans
 * //       configuration: { // SageMakerSavingsPlansConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         hourlyCommitment: "STRING_VALUE",
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           monthlySavingsPlansEligibleCost: Number("double"),
 * //           estimatedMonthlyCommitment: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedOnDemandCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     rdsDbInstance: { // RdsDbInstance
 * //       configuration: { // RdsDbInstanceConfiguration
 * //         instance: { // DbInstanceConfiguration
 * //           dbInstanceClass: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     rdsDbInstanceStorage: { // RdsDbInstanceStorage
 * //       configuration: { // RdsDbInstanceStorageConfiguration
 * //         storageType: "STRING_VALUE",
 * //         allocatedStorageInGb: Number("double"),
 * //         iops: Number("double"),
 * //         storageThroughput: Number("double"),
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     dynamoDbReservedCapacity: { // DynamoDbReservedCapacity
 * //       configuration: { // DynamoDbReservedCapacityConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         numberOfCapacityUnitsToPurchase: "STRING_VALUE",
 * //         capacityUnits: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //     memoryDbReservedInstances: { // MemoryDbReservedInstances
 * //       configuration: { // MemoryDbReservedInstancesConfiguration
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //         currentGeneration: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //   },
 * //   recommendedResourceDetails: {//  Union: only one key present
 * //     lambdaFunction: {
 * //       configuration: {
 * //         compute: {
 * //           vCpu: Number("double"),
 * //           memorySizeInMB: Number("int"),
 * //           architecture: "STRING_VALUE",
 * //           platform: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     ecsService: {
 * //       configuration: {
 * //         compute: {
 * //           vCpu: Number("double"),
 * //           memorySizeInMB: Number("int"),
 * //           architecture: "STRING_VALUE",
 * //           platform: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     ec2Instance: {
 * //       configuration: {
 * //         instance: {
 * //           type: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     ebsVolume: {
 * //       configuration: {
 * //         storage: {
 * //           type: "STRING_VALUE",
 * //           sizeInGb: Number("double"),
 * //         },
 * //         performance: {
 * //           iops: Number("double"),
 * //           throughput: Number("double"),
 * //         },
 * //         attachmentState: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     ec2AutoScalingGroup: {
 * //       configuration: {
 * //         instance: {
 * //           type: "STRING_VALUE",
 * //         },
 * //         mixedInstances: [
 * //           {
 * //             type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         type: "SingleInstanceType" || "MixedInstanceTypes",
 * //         allocationStrategy: "Prioritized" || "LowestPrice",
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     ec2ReservedInstances: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         offeringClass: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         currentGeneration: "STRING_VALUE",
 * //         platform: "STRING_VALUE",
 * //         tenancy: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //     rdsReservedInstances: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //         currentGeneration: "STRING_VALUE",
 * //         licenseModel: "STRING_VALUE",
 * //         databaseEdition: "STRING_VALUE",
 * //         databaseEngine: "STRING_VALUE",
 * //         deploymentOption: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //     elastiCacheReservedInstances: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         currentGeneration: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //     openSearchReservedInstances: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         currentGeneration: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //     redshiftReservedInstances: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //         currentGeneration: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //     ec2InstanceSavingsPlans: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         hourlyCommitment: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         savingsPlansRegion: "STRING_VALUE",
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           monthlySavingsPlansEligibleCost: Number("double"),
 * //           estimatedMonthlyCommitment: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedOnDemandCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     computeSavingsPlans: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         hourlyCommitment: "STRING_VALUE",
 * //       },
 * //       costCalculation: {
 * //         pricing: {
 * //           monthlySavingsPlansEligibleCost: Number("double"),
 * //           estimatedMonthlyCommitment: Number("double"),
 * //           savingsPercentage: Number("double"),
 * //           estimatedOnDemandCost: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     sageMakerSavingsPlans: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         hourlyCommitment: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<SavingsPlansCostCalculation>",
 * //     },
 * //     rdsDbInstance: {
 * //       configuration: {
 * //         instance: {
 * //           dbInstanceClass: "STRING_VALUE",
 * //         },
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     rdsDbInstanceStorage: {
 * //       configuration: {
 * //         storageType: "STRING_VALUE",
 * //         allocatedStorageInGb: Number("double"),
 * //         iops: Number("double"),
 * //         storageThroughput: Number("double"),
 * //       },
 * //       costCalculation: "<ResourceCostCalculation>",
 * //     },
 * //     dynamoDbReservedCapacity: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         numberOfCapacityUnitsToPurchase: "STRING_VALUE",
 * //         capacityUnits: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //     memoryDbReservedInstances: {
 * //       configuration: {
 * //         accountScope: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         term: "STRING_VALUE",
 * //         paymentOption: "STRING_VALUE",
 * //         reservedInstancesRegion: "STRING_VALUE",
 * //         upfrontCost: "STRING_VALUE",
 * //         monthlyRecurringCost: "STRING_VALUE",
 * //         normalizedUnitsToPurchase: "STRING_VALUE",
 * //         numberOfInstancesToPurchase: "STRING_VALUE",
 * //         instanceType: "STRING_VALUE",
 * //         instanceFamily: "STRING_VALUE",
 * //         sizeFlexEligible: true || false,
 * //         currentGeneration: "STRING_VALUE",
 * //       },
 * //       costCalculation: "<ReservedInstancesCostCalculation>",
 * //     },
 * //   },
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationCommandInput - {@link GetRecommendationCommandInput}
 * @returns {@link GetRecommendationCommandOutput}
 * @see {@link GetRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 *
 * @public
 */
export class GetRecommendationCommand extends $Command
  .classBuilder<
    GetRecommendationCommandInput,
    GetRecommendationCommandOutput,
    CostOptimizationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostOptimizationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CostOptimizationHubService", "GetRecommendation", {})
  .n("CostOptimizationHubClient", "GetRecommendationCommand")
  .f(void 0, void 0)
  .ser(se_GetRecommendationCommand)
  .de(de_GetRecommendationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationRequest;
      output: GetRecommendationResponse;
    };
    sdk: {
      input: GetRecommendationCommandInput;
      output: GetRecommendationCommandOutput;
    };
  };
}
