// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BCLA,
  _BCLAR,
  _BCLARa,
  _f,
  _fC,
  _fR,
  _L,
  _l,
  _lA,
  _lD,
  _lDa,
  _LF,
  _LFL,
  _LL,
  _lS,
  _mT,
  _rI,
  _rN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchCheckLayerAvailabilityRequest = struct(n0, _BCLAR, 0, [_rI, _rN, _lD], [0, 0, 64 | 0]);
export var BatchCheckLayerAvailabilityResponse = struct(
  n0,
  _BCLARa,
  0,
  [_l, _f],
  [() => LayerList, () => LayerFailureList]
);
export var Layer = struct(n0, _L, 0, [_lDa, _lA, _lS, _mT], [0, 0, 1, 0]);
export var LayerFailure = struct(n0, _LF, 0, [_lDa, _fC, _fR], [0, 0, 0]);
export var BatchedOperationLayerDigestList = 64 | 0;

export var LayerFailureList = list(n0, _LFL, 0, () => LayerFailure);
export var LayerList = list(n0, _LL, 0, () => Layer);
export var BatchCheckLayerAvailability = op(
  n0,
  _BCLA,
  0,
  () => BatchCheckLayerAvailabilityRequest,
  () => BatchCheckLayerAvailabilityResponse
);
