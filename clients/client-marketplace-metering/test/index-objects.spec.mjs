import {
  BatchMeterUsageCommand,
  CustomerNotEntitledException,
  DisabledApiException,
  DuplicateRequestException,
  ExpiredTokenException,
  IdempotencyConflictException,
  InternalServiceErrorException,
  InvalidCustomerIdentifierException,
  InvalidEndpointRegionException,
  InvalidProductCodeException,
  InvalidPublicKeyVersionException,
  InvalidRegionException,
  InvalidTagException,
  InvalidTokenException,
  InvalidUsageAllocationsException,
  InvalidUsageDimensionException,
  MarketplaceMetering,
  MarketplaceMeteringClient,
  MarketplaceMeteringServiceException,
  MeterUsageCommand,
  PlatformNotSupportedException,
  RegisterUsageCommand,
  ResolveCustomerCommand,
  ThrottlingException,
  TimestampOutOfBoundsException,
  UsageRecordResultStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceMeteringClient === "function");
assert(typeof MarketplaceMetering === "function");
// commands
assert(typeof BatchMeterUsageCommand === "function");
assert(typeof MeterUsageCommand === "function");
assert(typeof RegisterUsageCommand === "function");
assert(typeof ResolveCustomerCommand === "function");
// enums
assert(typeof UsageRecordResultStatus === "object");
// errors
assert(CustomerNotEntitledException.prototype instanceof MarketplaceMeteringServiceException);
assert(DisabledApiException.prototype instanceof MarketplaceMeteringServiceException);
assert(DuplicateRequestException.prototype instanceof MarketplaceMeteringServiceException);
assert(ExpiredTokenException.prototype instanceof MarketplaceMeteringServiceException);
assert(IdempotencyConflictException.prototype instanceof MarketplaceMeteringServiceException);
assert(InternalServiceErrorException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidCustomerIdentifierException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidEndpointRegionException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidProductCodeException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidPublicKeyVersionException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidRegionException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidTagException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidTokenException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidUsageAllocationsException.prototype instanceof MarketplaceMeteringServiceException);
assert(InvalidUsageDimensionException.prototype instanceof MarketplaceMeteringServiceException);
assert(PlatformNotSupportedException.prototype instanceof MarketplaceMeteringServiceException);
assert(ThrottlingException.prototype instanceof MarketplaceMeteringServiceException);
assert(TimestampOutOfBoundsException.prototype instanceof MarketplaceMeteringServiceException);
assert(MarketplaceMeteringServiceException.prototype instanceof Error);
console.log(`MarketplaceMetering index test passed.`);
