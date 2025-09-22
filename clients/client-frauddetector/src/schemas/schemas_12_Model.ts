// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cT, _d, _eTN, _GM, _GMR, _GMRe, _lUT, _M, _mI, _mL, _mo, _mR, _mT, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetModelsRequest = struct(n0, _GMR, 0, [_mI, _mT, _nT, _mR], [0, 0, 0, 1]);
export var GetModelsResult = struct(n0, _GMRe, 0, [_nT, _mo], [0, () => modelList]);
export var Model = struct(n0, _M, 0, [_mI, _mT, _d, _eTN, _cT, _lUT, _a], [0, 0, 0, 0, 0, 0, 0]);
export var modelList = list(n0, _mL, 0, () => Model);
export var GetModels = op(
  n0,
  _GM,
  0,
  () => GetModelsRequest,
  () => GetModelsResult
);
