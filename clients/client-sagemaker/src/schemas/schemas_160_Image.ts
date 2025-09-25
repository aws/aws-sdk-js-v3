// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _FR,
  _IAm,
  _IN,
  _IV,
  _IVA,
  _IVm,
  _IVS,
  _LIV,
  _LIVR,
  _LIVRi,
  _LMT,
  _LMTA,
  _LMTB,
  _MR,
  _NT,
  _SBo,
  _SO,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ImageVersion = struct(n0, _IV, 0, [_CT, _FR, _IAm, _IVA, _IVS, _LMT, _V], [4, 0, 0, 0, 0, 4, 1]);
export var ListImageVersionsRequest = struct(
  n0,
  _LIVR,
  0,
  [_CTA, _CTB, _IN, _LMTA, _LMTB, _MR, _NT, _SBo, _SO],
  [4, 4, 0, 4, 4, 1, 0, 0, 0]
);
export var ListImageVersionsResponse = struct(n0, _LIVRi, 0, [_IVm, _NT], [() => ImageVersions, 0]);
export var ImageVersions = list(n0, _IVm, 0, () => ImageVersion);
export var ListImageVersions = op(
  n0,
  _LIV,
  0,
  () => ListImageVersionsRequest,
  () => ListImageVersionsResponse
);
