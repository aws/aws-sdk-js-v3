import {
  CreateSavingsPlanCommand,
  CurrencyCode,
  DeleteQueuedSavingsPlanCommand,
  DescribeSavingsPlanRatesCommand,
  DescribeSavingsPlansCommand,
  DescribeSavingsPlansOfferingRatesCommand,
  DescribeSavingsPlansOfferingsCommand,
  InternalServerException,
  ListTagsForResourceCommand,
  ResourceNotFoundException,
  ReturnSavingsPlanCommand,
  SavingsPlanOfferingFilterAttribute,
  SavingsPlanOfferingPropertyKey,
  SavingsPlanPaymentOption,
  SavingsPlanProductType,
  SavingsPlanRateFilterAttribute,
  SavingsPlanRateFilterName,
  SavingsPlanRatePropertyKey,
  SavingsPlanRateServiceCode,
  SavingsPlanRateUnit,
  SavingsPlanState,
  SavingsPlanType,
  SavingsPlansFilterName,
  Savingsplans,
  SavingsplansClient,
  SavingsplansServiceException,
  ServiceQuotaExceededException,
  TagResourceCommand,
  UntagResourceCommand,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SavingsplansClient === "function");
assert(typeof Savingsplans === "function");
// commands
assert(typeof CreateSavingsPlanCommand === "function");
assert(typeof DeleteQueuedSavingsPlanCommand === "function");
assert(typeof DescribeSavingsPlanRatesCommand === "function");
assert(typeof DescribeSavingsPlansCommand === "function");
assert(typeof DescribeSavingsPlansOfferingRatesCommand === "function");
assert(typeof DescribeSavingsPlansOfferingsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ReturnSavingsPlanCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof CurrencyCode === "object");
assert(typeof SavingsPlanOfferingFilterAttribute === "object");
assert(typeof SavingsPlanOfferingPropertyKey === "object");
assert(typeof SavingsPlanPaymentOption === "object");
assert(typeof SavingsPlanProductType === "object");
assert(typeof SavingsPlanRateFilterAttribute === "object");
assert(typeof SavingsPlanRateFilterName === "object");
assert(typeof SavingsPlanRatePropertyKey === "object");
assert(typeof SavingsPlanRateServiceCode === "object");
assert(typeof SavingsPlanRateUnit === "object");
assert(typeof SavingsPlansFilterName === "object");
assert(typeof SavingsPlanState === "object");
assert(typeof SavingsPlanType === "object");
// errors
assert(InternalServerException.prototype instanceof SavingsplansServiceException);
assert(ResourceNotFoundException.prototype instanceof SavingsplansServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SavingsplansServiceException);
assert(ValidationException.prototype instanceof SavingsplansServiceException);
assert(SavingsplansServiceException.prototype instanceof Error);
console.log(`Savingsplans index test passed.`);
