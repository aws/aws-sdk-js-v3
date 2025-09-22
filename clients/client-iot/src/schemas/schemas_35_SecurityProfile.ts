// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ci,
  _cou,
  _dNim,
  _dVO,
  _eT,
  _h,
  _hQ,
  _LMV,
  _LMVR,
  _LMVRi,
  _MD,
  _MDL,
  _mDL,
  _mNe,
  _mR,
  _MV,
  _nT,
  _nu,
  _num,
  _po,
  _sT,
  _stri,
  _ti,
  _tN,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMetricValuesRequest = struct(
  n0,
  _LMVR,
  0,
  [_tN, _mNe, _dNim, _dVO, _sT, _eT, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
    [
      0,
      {
        [_hQ]: _mNe,
      },
    ],
    [
      0,
      {
        [_hQ]: _dNim,
      },
    ],
    [
      0,
      {
        [_hQ]: _dVO,
      },
    ],
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
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
export var ListMetricValuesResponse = struct(n0, _LMVRi, 0, [_mDL, _nT], [() => MetricDatumList, 0]);
export var MetricDatum = struct(n0, _MD, 0, [_ti, _va], [4, () => MetricValue]);
export var MetricValue = struct(n0, _MV, 0, [_cou, _ci, _po, _nu, _num, _stri], [1, 64 | 0, 64 | 1, 1, 64 | 1, 64 | 0]);
export var Cidrs = 64 | 0;

export var MetricDatumList = list(n0, _MDL, 0, () => MetricDatum);
export var NumberList = 64 | 1;

export var Ports = 64 | 1;

export var StringList = 64 | 0;

export var ListMetricValues = op(
  n0,
  _LMV,
  {
    [_h]: ["GET", "/metric-values", 200],
  },
  () => ListMetricValuesRequest,
  () => ListMetricValuesResponse
);
