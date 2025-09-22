// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _CCu,
  _Du,
  _FP,
  _NC,
  _NT,
  _OT,
  _RC,
  _RCA,
  _RCe,
  _RCF,
  _RCL,
  _RNe,
  _RNI,
  _RNOI,
  _RNOT,
  _Sta,
  _STt,
  _UP,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var RecurringCharge = struct(n0, _RC, 0, [_RCA, _RCF], [1, 0]);
export var ReservedNode = struct(
  n0,
  _RNe,
  0,
  [_RNI, _RNOI, _NT, _STt, _Du, _FP, _UP, _CCu, _NC, _Sta, _OT, _RCe, _RNOT],
  [0, 0, 0, 4, 1, 1, 1, 0, 1, 0, 0, [() => RecurringChargeList, 0], 0]
);
export var RecurringChargeList = list(n0, _RCL, 0, [
  () => RecurringCharge,
  {
    [_xN]: _RC,
  },
]);
