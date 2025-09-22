// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cTr,
  _h,
  _it,
  _LRT,
  _LRTR,
  _LRTRi,
  _lUT,
  _mR,
  _nT,
  _R,
  _rGA,
  _RL,
  _rRS,
  _rSA,
  _rT,
  _rTe,
  _s,
  _sM,
  _sN,
  _SNART,
  _SNARTL,
  _ty,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListResourceTypesRequest = struct(n0, _LRTR, 0, [_nT, _mR, _rRS], [0, 1, 0]);
export var ListResourceTypesResponse = struct(
  n0,
  _LRTRi,
  0,
  [_rTe, _nT],
  [[() => ServiceNameAndResourceTypeList, 0], 0]
);
export var Resource = struct(n0, _R, 0, [_a, _ty, _rSA, _rGA, _s, _sM, _cTr, _lUT, _rRS], [0, 0, 0, 0, 0, 0, 4, 4, 0]);
export var ServiceNameAndResourceType = struct(n0, _SNART, 0, [_rT, _sN, _rRS], [0, 0, 0]);
export var ResourceList = list(n0, _RL, 0, [
  () => Resource,
  {
    [_xN]: _it,
  },
]);
export var ServiceNameAndResourceTypeList = list(n0, _SNARTL, 0, [
  () => ServiceNameAndResourceType,
  {
    [_xN]: _it,
  },
]);
export var ListResourceTypes = op(
  n0,
  _LRT,
  {
    [_h]: ["POST", "/listresourcetypes", 200],
  },
  () => ListResourceTypesRequest,
  () => ListResourceTypesResponse
);
