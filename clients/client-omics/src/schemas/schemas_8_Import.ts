// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aF,
  _cT,
  _cTo,
  _dN,
  _end,
  _filt,
  _hQ,
  _ht,
  _i,
  _id,
  _LVIJ,
  _LVIJF,
  _LVIJR,
  _LVIJRi,
  _mRa,
  _nT,
  _rA,
  _rLN,
  _sNt,
  _st,
  _uT,
  _vIJ,
  _VIJI,
  _VIJIa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListVariantImportJobsFilter = struct(n0, _LVIJF, 0, [_st, _sNt], [0, 0]);
export var ListVariantImportJobsRequest = struct(
  n0,
  _LVIJR,
  0,
  [_mRa, _id, _nT, _filt],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    64 | 0,
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ListVariantImportJobsFilter,
  ]
);
export var ListVariantImportJobsResponse = struct(n0, _LVIJRi, 0, [_vIJ, _nT], [() => VariantImportJobItems, 0]);
export var VariantImportJobItem = struct(
  n0,
  _VIJI,
  0,
  [_i, _dN, _rA, _st, _cT, _uT, _cTo, _rLN, _aF],
  [0, 0, 0, 0, 5, 5, 5, 2, 128 | 0]
);
export var VariantImportJobItems = list(n0, _VIJIa, 0, () => VariantImportJobItem);
export var AnnotationFieldMap = 128 | 0;

export var ListVariantImportJobs = op(
  n0,
  _LVIJ,
  {
    [_ht]: ["POST", "/import/variants", 200],
    [_end]: ["analytics-"],
  },
  () => ListVariantImportJobsRequest,
  () => ListVariantImportJobsResponse
);
