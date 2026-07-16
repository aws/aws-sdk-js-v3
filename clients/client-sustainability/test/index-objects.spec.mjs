import {
  AccessDeniedException,
  AccessDeniedException$,
  Dimension,
  DimensionEntry$,
  Emissions$,
  EmissionsType,
  EmissionsUnit,
  EstimatedCarbonEmissions$,
  EstimatedWaterAllocation$,
  FilterExpression$,
  GetEstimatedCarbonEmissions$,
  GetEstimatedCarbonEmissionsCommand,
  GetEstimatedCarbonEmissionsDimensionValues$,
  GetEstimatedCarbonEmissionsDimensionValuesCommand,
  GetEstimatedCarbonEmissionsDimensionValuesRequest$,
  GetEstimatedCarbonEmissionsDimensionValuesResponse$,
  GetEstimatedCarbonEmissionsRequest$,
  GetEstimatedCarbonEmissionsResponse$,
  GetEstimatedWaterAllocation$,
  GetEstimatedWaterAllocationCommand,
  GetEstimatedWaterAllocationDimensionValues$,
  GetEstimatedWaterAllocationDimensionValuesCommand,
  GetEstimatedWaterAllocationDimensionValuesRequest$,
  GetEstimatedWaterAllocationDimensionValuesResponse$,
  GetEstimatedWaterAllocationRequest$,
  GetEstimatedWaterAllocationResponse$,
  GranularityConfiguration$,
  InternalServerException,
  InternalServerException$,
  paginateGetEstimatedCarbonEmissions,
  paginateGetEstimatedCarbonEmissionsDimensionValues,
  paginateGetEstimatedWaterAllocation,
  paginateGetEstimatedWaterAllocationDimensionValues,
  Sustainability,
  SustainabilityClient,
  SustainabilityServiceException,
  ThrottlingException,
  ThrottlingException$,
  TimeGranularity,
  TimePeriod$,
  ValidationException,
  ValidationException$,
  WaterAllocation$,
  WaterAllocationType,
  WaterAllocationUnit,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SustainabilityClient === "function");
assert(typeof Sustainability === "function");
// commands
assert(typeof GetEstimatedCarbonEmissionsCommand === "function");
assert(typeof GetEstimatedCarbonEmissions$ === "object");
assert(typeof GetEstimatedCarbonEmissionsDimensionValuesCommand === "function");
assert(typeof GetEstimatedCarbonEmissionsDimensionValues$ === "object");
assert(typeof GetEstimatedWaterAllocationCommand === "function");
assert(typeof GetEstimatedWaterAllocation$ === "object");
assert(typeof GetEstimatedWaterAllocationDimensionValuesCommand === "function");
assert(typeof GetEstimatedWaterAllocationDimensionValues$ === "object");
// structural schemas
assert(typeof DimensionEntry$ === "object");
assert(typeof Emissions$ === "object");
assert(typeof EstimatedCarbonEmissions$ === "object");
assert(typeof EstimatedWaterAllocation$ === "object");
assert(typeof FilterExpression$ === "object");
assert(typeof GetEstimatedCarbonEmissionsDimensionValuesRequest$ === "object");
assert(typeof GetEstimatedCarbonEmissionsDimensionValuesResponse$ === "object");
assert(typeof GetEstimatedCarbonEmissionsRequest$ === "object");
assert(typeof GetEstimatedCarbonEmissionsResponse$ === "object");
assert(typeof GetEstimatedWaterAllocationDimensionValuesRequest$ === "object");
assert(typeof GetEstimatedWaterAllocationDimensionValuesResponse$ === "object");
assert(typeof GetEstimatedWaterAllocationRequest$ === "object");
assert(typeof GetEstimatedWaterAllocationResponse$ === "object");
assert(typeof GranularityConfiguration$ === "object");
assert(typeof TimePeriod$ === "object");
assert(typeof WaterAllocation$ === "object");
// enums
assert(typeof Dimension === "object");
assert(typeof EmissionsType === "object");
assert(typeof EmissionsUnit === "object");
assert(typeof TimeGranularity === "object");
assert(typeof WaterAllocationType === "object");
assert(typeof WaterAllocationUnit === "object");
// errors
assert(AccessDeniedException.prototype instanceof SustainabilityServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof SustainabilityServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof SustainabilityServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SustainabilityServiceException);
assert(typeof ValidationException$ === "object");
assert(SustainabilityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetEstimatedCarbonEmissions === "function");
assert(typeof paginateGetEstimatedCarbonEmissionsDimensionValues === "function");
assert(typeof paginateGetEstimatedWaterAllocation === "function");
assert(typeof paginateGetEstimatedWaterAllocationDimensionValues === "function");
console.log(`Sustainability index test passed.`);
