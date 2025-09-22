// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  InternalServiceErrorException as __InternalServiceErrorException,
  InvalidParameterException as __InvalidParameterException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _BV,
  _c,
  _CAWSAI,
  _CI,
  _D,
  _DV,
  _E,
  _e,
  _ED,
  _EL,
  _En,
  _EV,
  _F,
  _GE,
  _GEF,
  _GER,
  _GERe,
  _IPE,
  _ISEE,
  _IV,
  _m,
  _MR,
  _NT,
  _PC,
  _s,
  _SV,
  _TE,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Entitlement = struct(n0, _E, 0, [_PC, _D, _CI, _CAWSAI, _V, _ED], [0, 0, 0, 0, () => EntitlementValue, 4]);
export var EntitlementValue = struct(n0, _EV, 0, [_IV, _DV, _BV, _SV], [1, 1, 2, 0]);
export var GetEntitlementsRequest = struct(n0, _GER, 0, [_PC, _F, _NT, _MR], [0, map(n0, _GEF, 0, 0, 64 | 0), 0, 1]);
export var GetEntitlementsResult = struct(n0, _GERe, 0, [_En, _NT], [() => EntitlementList, 0]);
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
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidParameterException
);
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
export var Unit = "unit" as const;

export var EntitlementList = list(n0, _EL, 0, () => Entitlement);
export var FilterValueList = 64 | 0;

export var GetEntitlementFilters = map(n0, _GEF, 0, 0, 64 | 0);
export var GetEntitlements = op(
  n0,
  _GE,
  0,
  () => GetEntitlementsRequest,
  () => GetEntitlementsResult
);
