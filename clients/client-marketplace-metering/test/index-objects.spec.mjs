import {
  BatchMeterUsage$,
  BatchMeterUsageCommand,
  BatchMeterUsageRequest$,
  BatchMeterUsageResult$,
  CustomerNotEntitledException,
  CustomerNotEntitledException$,
  DisabledApiException,
  DisabledApiException$,
  DuplicateRequestException,
  DuplicateRequestException$,
  ExpiredTokenException,
  ExpiredTokenException$,
  IdempotencyConflictException,
  IdempotencyConflictException$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidCustomerIdentifierException,
  InvalidCustomerIdentifierException$,
  InvalidEndpointRegionException,
  InvalidEndpointRegionException$,
  InvalidProductCodeException,
  InvalidProductCodeException$,
  InvalidPublicKeyVersionException,
  InvalidPublicKeyVersionException$,
  InvalidRegionException,
  InvalidRegionException$,
  InvalidTagException,
  InvalidTagException$,
  InvalidTokenException,
  InvalidTokenException$,
  InvalidUsageAllocationsException,
  InvalidUsageAllocationsException$,
  InvalidUsageDimensionException,
  InvalidUsageDimensionException$,
  MarketplaceMetering,
  MarketplaceMeteringClient,
  MarketplaceMeteringServiceException,
  MeterUsage$,
  MeterUsageCommand,
  MeterUsageRequest$,
  MeterUsageResult$,
  PlatformNotSupportedException,
  PlatformNotSupportedException$,
  RegisterUsage$,
  RegisterUsageCommand,
  RegisterUsageRequest$,
  RegisterUsageResult$,
  ResolveCustomer$,
  ResolveCustomerCommand,
  ResolveCustomerRequest$,
  ResolveCustomerResult$,
  Tag$,
  ThrottlingException,
  ThrottlingException$,
  TimestampOutOfBoundsException,
  TimestampOutOfBoundsException$,
  UsageAllocation$,
  UsageRecord$,
  UsageRecordResult$,
  UsageRecordResultStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceMeteringClient === "function");
assert(typeof MarketplaceMetering === "function");
// commands
assert(typeof BatchMeterUsageCommand === "function");
assert(typeof BatchMeterUsage$ === "object");
assert(typeof MeterUsageCommand === "function");
assert(typeof MeterUsage$ === "object");
assert(typeof RegisterUsageCommand === "function");
assert(typeof RegisterUsage$ === "object");
assert(typeof ResolveCustomerCommand === "function");
assert(typeof ResolveCustomer$ === "object");
// structural schemas
assert(typeof BatchMeterUsageRequest$ === "object");
assert(typeof BatchMeterUsageResult$ === "object");
assert(typeof MeterUsageRequest$ === "object");
assert(typeof MeterUsageResult$ === "object");
assert(typeof RegisterUsageRequest$ === "object");
assert(typeof RegisterUsageResult$ === "object");
assert(typeof ResolveCustomerRequest$ === "object");
assert(typeof ResolveCustomerResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof UsageAllocation$ === "object");
assert(typeof UsageRecord$ === "object");
assert(typeof UsageRecordResult$ === "object");
// enums
assert(typeof UsageRecordResultStatus === "object");
// errors
assert(CustomerNotEntitledException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof CustomerNotEntitledException$ === "object");
assert(DisabledApiException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof DisabledApiException$ === "object");
assert(DuplicateRequestException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof DuplicateRequestException$ === "object");
assert(ExpiredTokenException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof ExpiredTokenException$ === "object");
assert(IdempotencyConflictException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof IdempotencyConflictException$ === "object");
assert(InternalServiceErrorException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidCustomerIdentifierException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidCustomerIdentifierException$ === "object");
assert(InvalidEndpointRegionException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidEndpointRegionException$ === "object");
assert(InvalidProductCodeException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidProductCodeException$ === "object");
assert(InvalidPublicKeyVersionException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidPublicKeyVersionException$ === "object");
assert(InvalidRegionException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidRegionException$ === "object");
assert(InvalidTagException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidTagException$ === "object");
assert(InvalidTokenException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidTokenException$ === "object");
assert(InvalidUsageAllocationsException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidUsageAllocationsException$ === "object");
assert(InvalidUsageDimensionException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof InvalidUsageDimensionException$ === "object");
assert(PlatformNotSupportedException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof PlatformNotSupportedException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TimestampOutOfBoundsException.prototype instanceof MarketplaceMeteringServiceException);
assert(typeof TimestampOutOfBoundsException$ === "object");
assert(MarketplaceMeteringServiceException.prototype instanceof Error);
console.log(`MarketplaceMetering index test passed.`);
