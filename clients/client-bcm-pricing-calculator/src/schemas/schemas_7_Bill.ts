// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bI,
  _cAr,
  _eA,
  _fM,
  _GBS,
  _GBSR,
  _GBSRe,
  _i,
  _ide,
  _n,
  _s,
  _UBS,
  _UBSR,
  _UBSRp,
  BillInterval,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBillScenarioRequest = struct(n0, _GBSR, 0, [_ide], [0]);
export var GetBillScenarioResponse = struct(
  n0,
  _GBSRe,
  0,
  [_i, _n, _bI, _s, _cAr, _eA, _fM],
  [0, 0, () => BillInterval, 0, 4, 4, 0]
);
export var UpdateBillScenarioRequest = struct(n0, _UBSR, 0, [_ide, _n, _eA], [0, 0, 4]);
export var UpdateBillScenarioResponse = struct(
  n0,
  _UBSRp,
  0,
  [_i, _n, _bI, _s, _cAr, _eA, _fM],
  [0, 0, () => BillInterval, 0, 4, 4, 0]
);
export var GetBillScenario = op(
  n0,
  _GBS,
  0,
  () => GetBillScenarioRequest,
  () => GetBillScenarioResponse
);
export var UpdateBillScenario = op(
  n0,
  _UBS,
  2,
  () => UpdateBillScenarioRequest,
  () => UpdateBillScenarioResponse
);
