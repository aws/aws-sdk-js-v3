// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cTr,
  _d,
  _ETS,
  _ETSL,
  _eTx,
  _h,
  _hQ,
  _i,
  _LET,
  _LETR,
  _LETRi,
  _lUT,
  _mR,
  _nT,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExperimentTemplateSummary = struct(n0, _ETS, 0, [_i, _a, _d, _cTr, _lUT, _ta], [0, 0, 0, 4, 4, 128 | 0]);
export var ListExperimentTemplatesRequest = struct(
  n0,
  _LETR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListExperimentTemplatesResponse = struct(
  n0,
  _LETRi,
  0,
  [_eTx, _nT],
  [() => ExperimentTemplateSummaryList, 0]
);
export var ExperimentTemplateSummaryList = list(n0, _ETSL, 0, () => ExperimentTemplateSummary);
export var ListExperimentTemplates = op(
  n0,
  _LET,
  {
    [_h]: ["GET", "/experimentTemplates", 200],
  },
  () => ListExperimentTemplatesRequest,
  () => ListExperimentTemplatesResponse
);
