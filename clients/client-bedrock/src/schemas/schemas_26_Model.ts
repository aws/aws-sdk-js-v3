// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CMU,
  _cMU,
  _cMUPMC,
  _cMUV,
  _cTr,
  _GIM,
  _GIMR,
  _GIMRe,
  _ht,
  _iS,
  _jA,
  _jN,
  _mA,
  _mAo,
  _mDS,
  _mI,
  _mKKA,
  _mN,
  n0,
} from "./schemas_0";
import { ModelDataSource } from "./schemas_27_Model";

/* eslint no-var: 0 */

export var CustomModelUnits = struct(n0, _CMU, 0, [_cMUPMC, _cMUV], [1, 0]);
export var GetImportedModelRequest = struct(n0, _GIMR, 0, [_mI], [[0, 1]]);
export var GetImportedModelResponse = struct(
  n0,
  _GIMRe,
  0,
  [_mA, _mN, _jN, _jA, _mDS, _cTr, _mAo, _mKKA, _iS, _cMU],
  [0, 0, 0, 0, () => ModelDataSource, 5, 0, 0, 2, () => CustomModelUnits]
);
export var GetImportedModel = op(
  n0,
  _GIM,
  {
    [_ht]: ["GET", "/imported-models/{modelIdentifier}", 200],
  },
  () => GetImportedModelRequest,
  () => GetImportedModelResponse
);
