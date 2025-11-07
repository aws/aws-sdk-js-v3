const _BV = "BooleanValue";
const _CAWSAI = "CustomerAWSAccountId";
const _CI = "CustomerIdentifier";
const _D = "Dimension";
const _DV = "DoubleValue";
const _E = "Entitlement";
const _ED = "ExpirationDate";
const _EL = "EntitlementList";
const _EV = "EntitlementValue";
const _En = "Entitlements";
const _F = "Filter";
const _GE = "GetEntitlements";
const _GEF = "GetEntitlementFilters";
const _GER = "GetEntitlementsRequest";
const _GERe = "GetEntitlementsResult";
const _IPE = "InvalidParameterException";
const _ISEE = "InternalServiceErrorException";
const _IV = "IntegerValue";
const _MR = "MaxResults";
const _NT = "NextToken";
const _PC = "ProductCode";
const _SV = "StringValue";
const _TE = "ThrottlingException";
const _V = "Value";
const _c = "client";
const _e = "error";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplaceentitlementservice";
const n0 = "com.amazonaws.marketplaceentitlementservice";

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
