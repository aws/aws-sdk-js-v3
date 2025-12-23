import {
  CreateSavingsPlan$,
  CreateSavingsPlanCommand,
  CreateSavingsPlanRequest$,
  CreateSavingsPlanResponse$,
  CurrencyCode,
  DeleteQueuedSavingsPlan$,
  DeleteQueuedSavingsPlanCommand,
  DeleteQueuedSavingsPlanRequest$,
  DeleteQueuedSavingsPlanResponse$,
  DescribeSavingsPlanRates$,
  DescribeSavingsPlanRatesCommand,
  DescribeSavingsPlanRatesRequest$,
  DescribeSavingsPlanRatesResponse$,
  DescribeSavingsPlans$,
  DescribeSavingsPlansCommand,
  DescribeSavingsPlansOfferingRates$,
  DescribeSavingsPlansOfferingRatesCommand,
  DescribeSavingsPlansOfferingRatesRequest$,
  DescribeSavingsPlansOfferingRatesResponse$,
  DescribeSavingsPlansOfferings$,
  DescribeSavingsPlansOfferingsCommand,
  DescribeSavingsPlansOfferingsRequest$,
  DescribeSavingsPlansOfferingsResponse$,
  DescribeSavingsPlansRequest$,
  DescribeSavingsPlansResponse$,
  InternalServerException,
  InternalServerException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ParentSavingsPlanOffering$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ReturnSavingsPlan$,
  ReturnSavingsPlanCommand,
  ReturnSavingsPlanRequest$,
  ReturnSavingsPlanResponse$,
  SavingsPlan$,
  SavingsPlanFilter$,
  SavingsPlanOffering$,
  SavingsPlanOfferingFilterAttribute,
  SavingsPlanOfferingFilterElement$,
  SavingsPlanOfferingProperty$,
  SavingsPlanOfferingPropertyKey,
  SavingsPlanOfferingRate$,
  SavingsPlanOfferingRateFilterElement$,
  SavingsPlanOfferingRateProperty$,
  SavingsPlanPaymentOption,
  SavingsPlanProductType,
  SavingsPlanRate$,
  SavingsPlanRateFilter$,
  SavingsPlanRateFilterAttribute,
  SavingsPlanRateFilterName,
  SavingsPlanRateProperty$,
  SavingsPlanRatePropertyKey,
  SavingsPlanRateServiceCode,
  SavingsPlanRateUnit,
  Savingsplans,
  SavingsplansClient,
  SavingsPlansFilterName,
  SavingsplansServiceException,
  SavingsPlanState,
  SavingsPlanType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SavingsplansClient === "function");
assert(typeof Savingsplans === "function");
// commands
assert(typeof CreateSavingsPlanCommand === "function");
assert(typeof CreateSavingsPlan$ === "object");
assert(typeof DeleteQueuedSavingsPlanCommand === "function");
assert(typeof DeleteQueuedSavingsPlan$ === "object");
assert(typeof DescribeSavingsPlanRatesCommand === "function");
assert(typeof DescribeSavingsPlanRates$ === "object");
assert(typeof DescribeSavingsPlansCommand === "function");
assert(typeof DescribeSavingsPlans$ === "object");
assert(typeof DescribeSavingsPlansOfferingRatesCommand === "function");
assert(typeof DescribeSavingsPlansOfferingRates$ === "object");
assert(typeof DescribeSavingsPlansOfferingsCommand === "function");
assert(typeof DescribeSavingsPlansOfferings$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ReturnSavingsPlanCommand === "function");
assert(typeof ReturnSavingsPlan$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof CreateSavingsPlanRequest$ === "object");
assert(typeof CreateSavingsPlanResponse$ === "object");
assert(typeof DeleteQueuedSavingsPlanRequest$ === "object");
assert(typeof DeleteQueuedSavingsPlanResponse$ === "object");
assert(typeof DescribeSavingsPlanRatesRequest$ === "object");
assert(typeof DescribeSavingsPlanRatesResponse$ === "object");
assert(typeof DescribeSavingsPlansOfferingRatesRequest$ === "object");
assert(typeof DescribeSavingsPlansOfferingRatesResponse$ === "object");
assert(typeof DescribeSavingsPlansOfferingsRequest$ === "object");
assert(typeof DescribeSavingsPlansOfferingsResponse$ === "object");
assert(typeof DescribeSavingsPlansRequest$ === "object");
assert(typeof DescribeSavingsPlansResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ParentSavingsPlanOffering$ === "object");
assert(typeof ReturnSavingsPlanRequest$ === "object");
assert(typeof ReturnSavingsPlanResponse$ === "object");
assert(typeof SavingsPlan$ === "object");
assert(typeof SavingsPlanFilter$ === "object");
assert(typeof SavingsPlanOffering$ === "object");
assert(typeof SavingsPlanOfferingFilterElement$ === "object");
assert(typeof SavingsPlanOfferingProperty$ === "object");
assert(typeof SavingsPlanOfferingRate$ === "object");
assert(typeof SavingsPlanOfferingRateFilterElement$ === "object");
assert(typeof SavingsPlanOfferingRateProperty$ === "object");
assert(typeof SavingsPlanRate$ === "object");
assert(typeof SavingsPlanRateFilter$ === "object");
assert(typeof SavingsPlanRateProperty$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
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
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SavingsplansServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SavingsplansServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof SavingsplansServiceException);
assert(typeof ValidationException$ === "object");
assert(SavingsplansServiceException.prototype instanceof Error);
console.log(`Savingsplans index test passed.`);
