const _AUQ = "AllocatedUsageQuantity";
const _BMU = "BatchMeterUsage";
const _BMUR = "BatchMeterUsageRequest";
const _BMURa = "BatchMeterUsageResult";
const _CAWSAI = "CustomerAWSAccountId";
const _CI = "CustomerIdentifier";
const _CNEE = "CustomerNotEntitledException";
const _CT = "ClientToken";
const _D = "Dimension";
const _DAE = "DisabledApiException";
const _DR = "DryRun";
const _DRE = "DuplicateRequestException";
const _ETE = "ExpiredTokenException";
const _ICE = "IdempotencyConflictException";
const _ICIE = "InvalidCustomerIdentifierException";
const _IERE = "InvalidEndpointRegionException";
const _IPCE = "InvalidProductCodeException";
const _IPKVE = "InvalidPublicKeyVersionException";
const _IRE = "InvalidRegionException";
const _ISEE = "InternalServiceErrorException";
const _ITE = "InvalidTagException";
const _ITEn = "InvalidTokenException";
const _IUAE = "InvalidUsageAllocationsException";
const _IUDE = "InvalidUsageDimensionException";
const _K = "Key";
const _MRI = "MeteringRecordId";
const _MU = "MeterUsage";
const _MUR = "MeterUsageRequest";
const _MURe = "MeterUsageResult";
const _N = "Nonce";
const _PC = "ProductCode";
const _PKRT = "PublicKeyRotationTimestamp";
const _PKV = "PublicKeyVersion";
const _PNSE = "PlatformNotSupportedException";
const _Q = "Quantity";
const _R = "Results";
const _RC = "ResolveCustomer";
const _RCR = "ResolveCustomerRequest";
const _RCRe = "ResolveCustomerResult";
const _RT = "RegistrationToken";
const _RU = "RegisterUsage";
const _RUR = "RegisterUsageRequest";
const _RURe = "RegisterUsageResult";
const _S = "Signature";
const _St = "Status";
const _T = "Timestamp";
const _TE = "ThrottlingException";
const _TL = "TagList";
const _TOOBE = "TimestampOutOfBoundsException";
const _Ta = "Tag";
const _Tag = "Tags";
const _UA = "UsageAllocations";
const _UAs = "UsageAllocation";
const _UD = "UsageDimension";
const _UQ = "UsageQuantity";
const _UR = "UsageRecords";
const _URL = "UsageRecordList";
const _URR = "UsageRecordResult";
const _URRL = "UsageRecordResultList";
const _URn = "UnprocessedRecords";
const _URs = "UsageRecord";
const _V = "Value";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacemetering";
const n0 = "com.amazonaws.marketplacemetering";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  CustomerNotEntitledException as __CustomerNotEntitledException,
  DisabledApiException as __DisabledApiException,
  DuplicateRequestException as __DuplicateRequestException,
  ExpiredTokenException as __ExpiredTokenException,
  IdempotencyConflictException as __IdempotencyConflictException,
  InternalServiceErrorException as __InternalServiceErrorException,
  InvalidCustomerIdentifierException as __InvalidCustomerIdentifierException,
  InvalidEndpointRegionException as __InvalidEndpointRegionException,
  InvalidProductCodeException as __InvalidProductCodeException,
  InvalidPublicKeyVersionException as __InvalidPublicKeyVersionException,
  InvalidRegionException as __InvalidRegionException,
  InvalidTagException as __InvalidTagException,
  InvalidTokenException as __InvalidTokenException,
  InvalidUsageAllocationsException as __InvalidUsageAllocationsException,
  InvalidUsageDimensionException as __InvalidUsageDimensionException,
  PlatformNotSupportedException as __PlatformNotSupportedException,
  ThrottlingException as __ThrottlingException,
  TimestampOutOfBoundsException as __TimestampOutOfBoundsException,
} from "../models/errors";
import { MarketplaceMeteringServiceException as __MarketplaceMeteringServiceException } from "../models/MarketplaceMeteringServiceException";

/* eslint no-var: 0 */

export var BatchMeterUsageRequest: StaticStructureSchema = [3, n0, _BMUR, 0, [_UR, _PC], [() => UsageRecordList, 0]];
export var BatchMeterUsageResult: StaticStructureSchema = [
  3,
  n0,
  _BMURa,
  0,
  [_R, _URn],
  [() => UsageRecordResultList, () => UsageRecordList],
];
export var CustomerNotEntitledException: StaticErrorSchema = [
  -3,
  n0,
  _CNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(CustomerNotEntitledException, __CustomerNotEntitledException);

export var DisabledApiException: StaticErrorSchema = [
  -3,
  n0,
  _DAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DisabledApiException, __DisabledApiException);

export var DuplicateRequestException: StaticErrorSchema = [
  -3,
  n0,
  _DRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DuplicateRequestException, __DuplicateRequestException);

export var ExpiredTokenException: StaticErrorSchema = [
  -3,
  n0,
  _ETE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ExpiredTokenException, __ExpiredTokenException);

export var IdempotencyConflictException: StaticErrorSchema = [
  -3,
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(IdempotencyConflictException, __IdempotencyConflictException);

export var InternalServiceErrorException: StaticErrorSchema = [
  -3,
  n0,
  _ISEE,
  {
    [_e]: _s,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServiceErrorException, __InternalServiceErrorException);

export var InvalidCustomerIdentifierException: StaticErrorSchema = [
  -3,
  n0,
  _ICIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidCustomerIdentifierException, __InvalidCustomerIdentifierException);

export var InvalidEndpointRegionException: StaticErrorSchema = [
  -3,
  n0,
  _IERE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidEndpointRegionException, __InvalidEndpointRegionException);

export var InvalidProductCodeException: StaticErrorSchema = [
  -3,
  n0,
  _IPCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidProductCodeException, __InvalidProductCodeException);

export var InvalidPublicKeyVersionException: StaticErrorSchema = [
  -3,
  n0,
  _IPKVE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidPublicKeyVersionException, __InvalidPublicKeyVersionException);

export var InvalidRegionException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidRegionException, __InvalidRegionException);

export var InvalidTagException: StaticErrorSchema = [
  -3,
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidTagException, __InvalidTagException);

export var InvalidTokenException: StaticErrorSchema = [
  -3,
  n0,
  _ITEn,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidTokenException, __InvalidTokenException);

export var InvalidUsageAllocationsException: StaticErrorSchema = [
  -3,
  n0,
  _IUAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidUsageAllocationsException, __InvalidUsageAllocationsException);

export var InvalidUsageDimensionException: StaticErrorSchema = [
  -3,
  n0,
  _IUDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidUsageDimensionException, __InvalidUsageDimensionException);

export var MeterUsageRequest: StaticStructureSchema = [
  3,
  n0,
  _MUR,
  0,
  [_PC, _T, _UD, _UQ, _DR, _UA, _CT],
  [0, 4, 0, 1, 2, () => UsageAllocations, [0, 4]],
];
export var MeterUsageResult: StaticStructureSchema = [3, n0, _MURe, 0, [_MRI], [0]];
export var PlatformNotSupportedException: StaticErrorSchema = [
  -3,
  n0,
  _PNSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(PlatformNotSupportedException, __PlatformNotSupportedException);

export var RegisterUsageRequest: StaticStructureSchema = [3, n0, _RUR, 0, [_PC, _PKV, _N], [0, 1, 0]];
export var RegisterUsageResult: StaticStructureSchema = [3, n0, _RURe, 0, [_PKRT, _S], [4, 0]];
export var ResolveCustomerRequest: StaticStructureSchema = [3, n0, _RCR, 0, [_RT], [0]];
export var ResolveCustomerResult: StaticStructureSchema = [3, n0, _RCRe, 0, [_CI, _PC, _CAWSAI], [0, 0, 0]];
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var TimestampOutOfBoundsException: StaticErrorSchema = [
  -3,
  n0,
  _TOOBE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TimestampOutOfBoundsException, __TimestampOutOfBoundsException);

export var UsageAllocation: StaticStructureSchema = [3, n0, _UAs, 0, [_AUQ, _Tag], [1, () => TagList]];
export var UsageRecord: StaticStructureSchema = [
  3,
  n0,
  _URs,
  0,
  [_T, _CI, _D, _Q, _UA, _CAWSAI],
  [4, 0, 0, 1, () => UsageAllocations, 0],
];
export var UsageRecordResult: StaticStructureSchema = [3, n0, _URR, 0, [_URs, _MRI, _St], [() => UsageRecord, 0, 0]];
export var __Unit = "unit" as const;

export var MarketplaceMeteringServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "MarketplaceMeteringServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(MarketplaceMeteringServiceException, __MarketplaceMeteringServiceException);

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var UsageAllocations: StaticListSchema = [1, n0, _UA, 0, () => UsageAllocation];
export var UsageRecordList: StaticListSchema = [1, n0, _URL, 0, () => UsageRecord];
export var UsageRecordResultList: StaticListSchema = [1, n0, _URRL, 0, () => UsageRecordResult];
export var BatchMeterUsage: StaticOperationSchema = [
  9,
  n0,
  _BMU,
  0,
  () => BatchMeterUsageRequest,
  () => BatchMeterUsageResult,
];
export var MeterUsage: StaticOperationSchema = [9, n0, _MU, 0, () => MeterUsageRequest, () => MeterUsageResult];
export var RegisterUsage: StaticOperationSchema = [
  9,
  n0,
  _RU,
  0,
  () => RegisterUsageRequest,
  () => RegisterUsageResult,
];
export var ResolveCustomer: StaticOperationSchema = [
  9,
  n0,
  _RC,
  0,
  () => ResolveCustomerRequest,
  () => ResolveCustomerResult,
];
