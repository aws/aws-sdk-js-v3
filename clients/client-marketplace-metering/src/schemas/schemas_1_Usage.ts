// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CustomerNotEntitledException as __CustomerNotEntitledException,
  DisabledApiException as __DisabledApiException,
  DuplicateRequestException as __DuplicateRequestException,
  ExpiredTokenException as __ExpiredTokenException,
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
import {
  _AUQ,
  _BMU,
  _BMUR,
  _BMURa,
  _c,
  _CAWSAI,
  _CI,
  _CNEE,
  _D,
  _DAE,
  _DR,
  _DRE,
  _e,
  _ETE,
  _ICIE,
  _IERE,
  _IPCE,
  _IPKVE,
  _IRE,
  _ISEE,
  _ITE,
  _ITEn,
  _IUAE,
  _IUDE,
  _K,
  _m,
  _MRI,
  _MU,
  _MUR,
  _MURe,
  _N,
  _PC,
  _PKRT,
  _PKV,
  _PNSE,
  _Q,
  _R,
  _RC,
  _RCR,
  _RCRe,
  _RT,
  _RU,
  _RUR,
  _RURe,
  _S,
  _s,
  _St,
  _T,
  _Ta,
  _Tag,
  _TE,
  _TL,
  _TOOBE,
  _UA,
  _UAs,
  _UD,
  _UQ,
  _UR,
  _URL,
  _URn,
  _URR,
  _URRL,
  _URs,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchMeterUsageRequest = struct(n0, _BMUR, 0, [_UR, _PC], [() => UsageRecordList, 0]);
export var BatchMeterUsageResult = struct(
  n0,
  _BMURa,
  0,
  [_R, _URn],
  [() => UsageRecordResultList, () => UsageRecordList]
);
export var CustomerNotEntitledException = error(
  n0,
  _CNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CustomerNotEntitledException
);
export var DisabledApiException = error(
  n0,
  _DAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DisabledApiException
);
export var DuplicateRequestException = error(
  n0,
  _DRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DuplicateRequestException
);
export var ExpiredTokenException = error(
  n0,
  _ETE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExpiredTokenException
);
export var InternalServiceErrorException = error(
  n0,
  _ISEE,
  {
    [_e]: _s,
  },
  [_m],
  [0],

  __InternalServiceErrorException
);
export var InvalidCustomerIdentifierException = error(
  n0,
  _ICIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidCustomerIdentifierException
);
export var InvalidEndpointRegionException = error(
  n0,
  _IERE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidEndpointRegionException
);
export var InvalidProductCodeException = error(
  n0,
  _IPCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidProductCodeException
);
export var InvalidPublicKeyVersionException = error(
  n0,
  _IPKVE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidPublicKeyVersionException
);
export var InvalidRegionException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRegionException
);
export var InvalidTagException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTagException
);
export var InvalidTokenException = error(
  n0,
  _ITEn,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTokenException
);
export var InvalidUsageAllocationsException = error(
  n0,
  _IUAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidUsageAllocationsException
);
export var InvalidUsageDimensionException = error(
  n0,
  _IUDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidUsageDimensionException
);
export var MeterUsageRequest = struct(
  n0,
  _MUR,
  0,
  [_PC, _T, _UD, _UQ, _DR, _UA],
  [0, 4, 0, 1, 2, () => UsageAllocations]
);
export var MeterUsageResult = struct(n0, _MURe, 0, [_MRI], [0]);
export var PlatformNotSupportedException = error(
  n0,
  _PNSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PlatformNotSupportedException
);
export var RegisterUsageRequest = struct(n0, _RUR, 0, [_PC, _PKV, _N], [0, 1, 0]);
export var RegisterUsageResult = struct(n0, _RURe, 0, [_PKRT, _S], [4, 0]);
export var ResolveCustomerRequest = struct(n0, _RCR, 0, [_RT], [0]);
export var ResolveCustomerResult = struct(n0, _RCRe, 0, [_CI, _PC, _CAWSAI], [0, 0, 0]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var TimestampOutOfBoundsException = error(
  n0,
  _TOOBE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TimestampOutOfBoundsException
);
export var UsageAllocation = struct(n0, _UAs, 0, [_AUQ, _Tag], [1, () => TagList]);
export var UsageRecord = struct(n0, _URs, 0, [_T, _CI, _D, _Q, _UA, _CAWSAI], [4, 0, 0, 1, () => UsageAllocations, 0]);
export var UsageRecordResult = struct(n0, _URR, 0, [_URs, _MRI, _St], [() => UsageRecord, 0, 0]);
export var Unit = "unit" as const;

export var TagList = list(n0, _TL, 0, () => Tag);
export var UsageAllocations = list(n0, _UA, 0, () => UsageAllocation);
export var UsageRecordList = list(n0, _URL, 0, () => UsageRecord);
export var UsageRecordResultList = list(n0, _URRL, 0, () => UsageRecordResult);
export var BatchMeterUsage = op(
  n0,
  _BMU,
  0,
  () => BatchMeterUsageRequest,
  () => BatchMeterUsageResult
);
export var MeterUsage = op(
  n0,
  _MU,
  0,
  () => MeterUsageRequest,
  () => MeterUsageResult
);
export var RegisterUsage = op(
  n0,
  _RU,
  0,
  () => RegisterUsageRequest,
  () => RegisterUsageResult
);
export var ResolveCustomer = op(
  n0,
  _RC,
  0,
  () => ResolveCustomerRequest,
  () => ResolveCustomerResult
);
