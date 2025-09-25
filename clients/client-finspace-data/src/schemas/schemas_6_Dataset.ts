// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _CD,
  _cD,
  _CLo,
  _cN,
  _co,
  _cT,
  _cTr,
  _dA,
  _dD,
  _dI,
  _dT,
  _dTa,
  _GD,
  _GDR,
  _GDRe,
  _h,
  _k,
  _lMT,
  _pKC,
  _s,
  _SD,
  _sD,
  _SU,
  _tSC,
  _UD,
  _UDR,
  _UDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ColumnDefinition = struct(n0, _CD, 0, [_dT, _cN, _cD], [0, 0, 0]);
export var GetDatasetRequest = struct(n0, _GDR, 0, [_dI], [[0, 1]]);
export var GetDatasetResponse = struct(
  n0,
  _GDRe,
  0,
  [_dI, _dA, _dTa, _k, _dD, _cTr, _lMT, _sD, _a, _s],
  [0, 0, 0, 0, 0, 1, 1, () => SchemaUnion, 0, 0]
);
export var SchemaDefinition = struct(n0, _SD, 0, [_co, _pKC], [() => ColumnList, 64 | 0]);
export var SchemaUnion = struct(n0, _SU, 0, [_tSC], [() => SchemaDefinition]);
export var UpdateDatasetRequest = struct(
  n0,
  _UDR,
  0,
  [_cT, _dI, _dTa, _k, _dD, _a, _sD],
  [[0, 4], [0, 1], 0, 0, 0, 0, () => SchemaUnion]
);
export var UpdateDatasetResponse = struct(n0, _UDRp, 0, [_dI], [0]);
export var ColumnList = list(n0, _CLo, 0, () => ColumnDefinition);
export var ColumnNameList = 64 | 0;

export var GetDataset = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/datasetsv2/{datasetId}", 200],
  },
  () => GetDatasetRequest,
  () => GetDatasetResponse
);
export var UpdateDataset = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/datasetsv2/{datasetId}", 200],
  },
  () => UpdateDatasetRequest,
  () => UpdateDatasetResponse
);
