// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _Ar,
  _c,
  _CRI,
  _CTr,
  _e,
  _GOR,
  _GORR,
  _GORRe,
  _I,
  _IC,
  _LOR,
  _LORR,
  _LORRi,
  _M,
  _MR,
  _MT,
  _N,
  _NT,
  _OA,
  _OR,
  _ORL,
  _ORu,
  _PIT,
  _S,
  _SM,
  _SQEE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetOutpostResolverRequest = struct(n0, _GORR, 0, [_I], [0]);
export var GetOutpostResolverResponse = struct(n0, _GORRe, 0, [_OR], [() => OutpostResolver]);
export var ListOutpostResolversRequest = struct(n0, _LORR, 0, [_OA, _MR, _NT], [0, 1, 0]);
export var ListOutpostResolversResponse = struct(n0, _LORRi, 0, [_ORu, _NT], [() => OutpostResolverList, 0]);
export var OutpostResolver = struct(
  n0,
  _OR,
  0,
  [_Ar, _CTr, _MT, _CRI, _I, _IC, _PIT, _N, _S, _SM, _OA],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var OutpostResolverList = list(n0, _ORL, 0, () => OutpostResolver);
export var GetOutpostResolver = op(
  n0,
  _GOR,
  0,
  () => GetOutpostResolverRequest,
  () => GetOutpostResolverResponse
);
export var ListOutpostResolvers = op(
  n0,
  _LOR,
  0,
  () => ListOutpostResolversRequest,
  () => ListOutpostResolversResponse
);
