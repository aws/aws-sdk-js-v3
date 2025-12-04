import {
  BCMPricingCalculator,
  BCMPricingCalculatorClient,
  BCMPricingCalculatorServiceException,
  BatchCreateBillScenarioCommitmentModificationCommand,
  BatchCreateBillScenarioCommitmentModificationErrorCode,
  BatchCreateBillScenarioUsageModificationCommand,
  BatchCreateBillScenarioUsageModificationErrorCode,
  BatchCreateWorkloadEstimateUsageCode,
  BatchCreateWorkloadEstimateUsageCommand,
  BatchDeleteBillScenarioCommitmentModificationCommand,
  BatchDeleteBillScenarioCommitmentModificationErrorCode,
  BatchDeleteBillScenarioUsageModificationCommand,
  BatchDeleteBillScenarioUsageModificationErrorCode,
  BatchDeleteWorkloadEstimateUsageCommand,
  BatchUpdateBillScenarioCommitmentModificationCommand,
  BatchUpdateBillScenarioCommitmentModificationErrorCode,
  BatchUpdateBillScenarioUsageModificationCommand,
  BatchUpdateBillScenarioUsageModificationErrorCode,
  BatchUpdateWorkloadEstimateUsageCommand,
  BillEstimateStatus,
  BillScenarioStatus,
  CreateBillEstimateCommand,
  CreateBillScenarioCommand,
  CreateWorkloadEstimateCommand,
  CurrencyCode,
  DeleteBillEstimateCommand,
  DeleteBillScenarioCommand,
  DeleteWorkloadEstimateCommand,
  GetBillEstimateCommand,
  GetBillScenarioCommand,
  GetPreferencesCommand,
  GetWorkloadEstimateCommand,
  GroupSharingPreferenceEnum,
  ListBillEstimateCommitmentsCommand,
  ListBillEstimateInputCommitmentModificationsCommand,
  ListBillEstimateInputUsageModificationsCommand,
  ListBillEstimateLineItemsCommand,
  ListBillEstimateLineItemsFilterName,
  ListBillEstimatesCommand,
  ListBillEstimatesFilterName,
  ListBillScenarioCommitmentModificationsCommand,
  ListBillScenarioUsageModificationsCommand,
  ListBillScenariosCommand,
  ListBillScenariosFilterName,
  ListTagsForResourceCommand,
  ListUsageFilterName,
  ListWorkloadEstimateUsageCommand,
  ListWorkloadEstimatesCommand,
  ListWorkloadEstimatesFilterName,
  MatchOption,
  PurchaseAgreementType,
  RateType,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBillEstimateCommand,
  UpdateBillScenarioCommand,
  UpdatePreferencesCommand,
  UpdateWorkloadEstimateCommand,
  WorkloadEstimateCostStatus,
  WorkloadEstimateRateType,
  WorkloadEstimateStatus,
  WorkloadEstimateUpdateUsageErrorCode,
  paginateListBillEstimateCommitments,
  paginateListBillEstimateInputCommitmentModifications,
  paginateListBillEstimateInputUsageModifications,
  paginateListBillEstimateLineItems,
  paginateListBillEstimates,
  paginateListBillScenarioCommitmentModifications,
  paginateListBillScenarioUsageModifications,
  paginateListBillScenarios,
  paginateListWorkloadEstimateUsage,
  paginateListWorkloadEstimates,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BCMPricingCalculatorClient === "function");
assert(typeof BCMPricingCalculator === "function");
// commands
assert(typeof BatchCreateBillScenarioCommitmentModificationCommand === "function");
assert(typeof BatchCreateBillScenarioUsageModificationCommand === "function");
assert(typeof BatchCreateWorkloadEstimateUsageCommand === "function");
assert(typeof BatchDeleteBillScenarioCommitmentModificationCommand === "function");
assert(typeof BatchDeleteBillScenarioUsageModificationCommand === "function");
assert(typeof BatchDeleteWorkloadEstimateUsageCommand === "function");
assert(typeof BatchUpdateBillScenarioCommitmentModificationCommand === "function");
assert(typeof BatchUpdateBillScenarioUsageModificationCommand === "function");
assert(typeof BatchUpdateWorkloadEstimateUsageCommand === "function");
assert(typeof CreateBillEstimateCommand === "function");
assert(typeof CreateBillScenarioCommand === "function");
assert(typeof CreateWorkloadEstimateCommand === "function");
assert(typeof DeleteBillEstimateCommand === "function");
assert(typeof DeleteBillScenarioCommand === "function");
assert(typeof DeleteWorkloadEstimateCommand === "function");
assert(typeof GetBillEstimateCommand === "function");
assert(typeof GetBillScenarioCommand === "function");
assert(typeof GetPreferencesCommand === "function");
assert(typeof GetWorkloadEstimateCommand === "function");
assert(typeof ListBillEstimateCommitmentsCommand === "function");
assert(typeof ListBillEstimateInputCommitmentModificationsCommand === "function");
assert(typeof ListBillEstimateInputUsageModificationsCommand === "function");
assert(typeof ListBillEstimateLineItemsCommand === "function");
assert(typeof ListBillEstimatesCommand === "function");
assert(typeof ListBillScenarioCommitmentModificationsCommand === "function");
assert(typeof ListBillScenariosCommand === "function");
assert(typeof ListBillScenarioUsageModificationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWorkloadEstimatesCommand === "function");
assert(typeof ListWorkloadEstimateUsageCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBillEstimateCommand === "function");
assert(typeof UpdateBillScenarioCommand === "function");
assert(typeof UpdatePreferencesCommand === "function");
assert(typeof UpdateWorkloadEstimateCommand === "function");
// enums
assert(typeof BatchCreateBillScenarioCommitmentModificationErrorCode === "object");
assert(typeof BatchCreateBillScenarioUsageModificationErrorCode === "object");
assert(typeof BatchCreateWorkloadEstimateUsageCode === "object");
assert(typeof BatchDeleteBillScenarioCommitmentModificationErrorCode === "object");
assert(typeof BatchDeleteBillScenarioUsageModificationErrorCode === "object");
assert(typeof BatchUpdateBillScenarioCommitmentModificationErrorCode === "object");
assert(typeof BatchUpdateBillScenarioUsageModificationErrorCode === "object");
assert(typeof BillEstimateStatus === "object");
assert(typeof BillScenarioStatus === "object");
assert(typeof CurrencyCode === "object");
assert(typeof GroupSharingPreferenceEnum === "object");
assert(typeof ListBillEstimateLineItemsFilterName === "object");
assert(typeof ListBillEstimatesFilterName === "object");
assert(typeof ListBillScenariosFilterName === "object");
assert(typeof ListUsageFilterName === "object");
assert(typeof ListWorkloadEstimatesFilterName === "object");
assert(typeof MatchOption === "object");
assert(typeof PurchaseAgreementType === "object");
assert(typeof RateType === "object");
assert(typeof WorkloadEstimateCostStatus === "object");
assert(typeof WorkloadEstimateRateType === "object");
assert(typeof WorkloadEstimateStatus === "object");
assert(typeof WorkloadEstimateUpdateUsageErrorCode === "object");
// errors
assert(BCMPricingCalculatorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBillEstimateCommitments === "function");
assert(typeof paginateListBillEstimateInputCommitmentModifications === "function");
assert(typeof paginateListBillEstimateInputUsageModifications === "function");
assert(typeof paginateListBillEstimateLineItems === "function");
assert(typeof paginateListBillEstimates === "function");
assert(typeof paginateListBillScenarioCommitmentModifications === "function");
assert(typeof paginateListBillScenarioUsageModifications === "function");
assert(typeof paginateListBillScenarios === "function");
assert(typeof paginateListWorkloadEstimateUsage === "function");
assert(typeof paginateListWorkloadEstimates === "function");
console.log(`BCMPricingCalculator index test passed.`);
