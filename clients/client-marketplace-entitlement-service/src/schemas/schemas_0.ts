export const _BV = "BooleanValue";
export const _CAWSAI = "CustomerAWSAccountId";
export const _CI = "CustomerIdentifier";
export const _D = "Dimension";
export const _DV = "DoubleValue";
export const _E = "Entitlement";
export const _ED = "ExpirationDate";
export const _EL = "EntitlementList";
export const _EV = "EntitlementValue";
export const _En = "Entitlements";
export const _F = "Filter";
export const _GE = "GetEntitlements";
export const _GEF = "GetEntitlementFilters";
export const _GER = "GetEntitlementsRequest";
export const _GERe = "GetEntitlementsResult";
export const _IPE = "InvalidParameterException";
export const _ISEE = "InternalServiceErrorException";
export const _IV = "IntegerValue";
export const _MR = "MaxResults";
export const _NT = "NextToken";
export const _PC = "ProductCode";
export const _SV = "StringValue";
export const _TE = "ThrottlingException";
export const _V = "Value";
export const _c = "client";
export const _e = "error";
export const _m = "message";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplaceentitlementservice";
export const n0 = "com.amazonaws.marketplaceentitlementservice";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InternalServiceErrorException as __InternalServiceErrorException,
  InvalidParameterException as __InvalidParameterException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import { MarketplaceEntitlementServiceServiceException as __MarketplaceEntitlementServiceServiceException } from "../models/MarketplaceEntitlementServiceServiceException";

/* eslint no-var: 0 */

export var Entitlement: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_PC, _D, _CI, _CAWSAI, _V, _ED],
  [0, 0, 0, 0, () => EntitlementValue, 4],
];
export var EntitlementValue: StaticStructureSchema = [3, n0, _EV, 0, [_IV, _DV, _BV, _SV], [1, 1, 2, 0]];
export var GetEntitlementsRequest: StaticStructureSchema = [
  3,
  n0,
  _GER,
  0,
  [_PC, _F, _NT, _MR],
  [0, [2, n0, _GEF, 0, 0, 64 | 0], 0, 1],
];
export var GetEntitlementsResult: StaticStructureSchema = [3, n0, _GERe, 0, [_En, _NT], [() => EntitlementList, 0]];
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

export var InvalidParameterException: StaticErrorSchema = [
  -3,
  n0,
  _IPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidParameterException, __InvalidParameterException);

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

export var __Unit = "unit" as const;

export var MarketplaceEntitlementServiceServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "MarketplaceEntitlementServiceServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  MarketplaceEntitlementServiceServiceException,
  __MarketplaceEntitlementServiceServiceException
);

export var EntitlementList: StaticListSchema = [1, n0, _EL, 0, () => Entitlement];
export var FilterValueList = 64 | 0;

export var GetEntitlementFilters: StaticMapSchema = [2, n0, _GEF, 0, 0, 64 | 0];
export var GetEntitlements: StaticOperationSchema = [
  9,
  n0,
  _GE,
  0,
  () => GetEntitlementsRequest,
  () => GetEntitlementsResult,
];
