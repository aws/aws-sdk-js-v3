// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  LimitExceededException as __LimitExceededException,
  PredictorNotMountedException as __PredictorNotMountedException,
} from "../models/index";
import {
  _c,
  _co,
  _d,
  _e,
  _hE,
  _LEE,
  _m,
  _MLMI,
  _PE,
  _PI,
  _pL,
  _PNME,
  _PO,
  _Pre,
  _Pred,
  _pS,
  _pV,
  _Rec,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 417,
  },
  [_m, _co],
  [0, 1],

  __LimitExceededException
);
export var PredictInput = struct(n0, _PI, 0, [_MLMI, _Rec, _PE], [0, 128 | 0, 0]);
export var Prediction = struct(n0, _Pre, 0, [_pL, _pV, _pS, _d], [0, 1, 128 | 1, 128 | 0]);
export var PredictorNotMountedException = error(
  n0,
  _PNME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __PredictorNotMountedException
);
export var PredictOutput = struct(n0, _PO, 0, [_Pre], [() => Prediction]);
export var DetailsMap = 128 | 0;

export var _Record = 128 | 0;

export var ScoreValuePerLabelMap = 128 | 1;

export var Predict = op(
  n0,
  _Pred,
  0,
  () => PredictInput,
  () => PredictOutput
);
