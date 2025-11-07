export const _AUQ = "AllocatedUsageQuantity";
export const _BMU = "BatchMeterUsage";
export const _BMUR = "BatchMeterUsageRequest";
export const _BMURa = "BatchMeterUsageResult";
export const _CAWSAI = "CustomerAWSAccountId";
export const _CI = "CustomerIdentifier";
export const _CNEE = "CustomerNotEntitledException";
export const _CT = "ClientToken";
export const _D = "Dimension";
export const _DAE = "DisabledApiException";
export const _DR = "DryRun";
export const _DRE = "DuplicateRequestException";
export const _ETE = "ExpiredTokenException";
export const _ICE = "IdempotencyConflictException";
export const _ICIE = "InvalidCustomerIdentifierException";
export const _IERE = "InvalidEndpointRegionException";
export const _IPCE = "InvalidProductCodeException";
export const _IPKVE = "InvalidPublicKeyVersionException";
export const _IRE = "InvalidRegionException";
export const _ISEE = "InternalServiceErrorException";
export const _ITE = "InvalidTagException";
export const _ITEn = "InvalidTokenException";
export const _IUAE = "InvalidUsageAllocationsException";
export const _IUDE = "InvalidUsageDimensionException";
export const _K = "Key";
export const _MRI = "MeteringRecordId";
export const _MU = "MeterUsage";
export const _MUR = "MeterUsageRequest";
export const _MURe = "MeterUsageResult";
export const _N = "Nonce";
export const _PC = "ProductCode";
export const _PKRT = "PublicKeyRotationTimestamp";
export const _PKV = "PublicKeyVersion";
export const _PNSE = "PlatformNotSupportedException";
export const _Q = "Quantity";
export const _R = "Results";
export const _RC = "ResolveCustomer";
export const _RCR = "ResolveCustomerRequest";
export const _RCRe = "ResolveCustomerResult";
export const _RT = "RegistrationToken";
export const _RU = "RegisterUsage";
export const _RUR = "RegisterUsageRequest";
export const _RURe = "RegisterUsageResult";
export const _S = "Signature";
export const _St = "Status";
export const _T = "Timestamp";
export const _TE = "ThrottlingException";
export const _TL = "TagList";
export const _TOOBE = "TimestampOutOfBoundsException";
export const _Ta = "Tag";
export const _Tag = "Tags";
export const _UA = "UsageAllocations";
export const _UAs = "UsageAllocation";
export const _UD = "UsageDimension";
export const _UQ = "UsageQuantity";
export const _UR = "UsageRecords";
export const _URL = "UsageRecordList";
export const _URR = "UsageRecordResult";
export const _URRL = "UsageRecordResultList";
export const _URn = "UnprocessedRecords";
export const _URs = "UsageRecord";
export const _V = "Value";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _m = "message";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacemetering";
export const n0 = "com.amazonaws.marketplacemetering";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

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
} from "../models/index";
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
