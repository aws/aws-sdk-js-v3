// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _BI,
  _bI,
  _BIL,
  _CBIJr,
  _CBIJRr,
  _CBIJRre,
  _CBPJr,
  _CBPJRr,
  _CBPJRre,
  _cTo,
  _dN,
  _dV,
  _eTN,
  _fR,
  _fRC,
  _GBIJ,
  _GBIJR,
  _GBIJRe,
  _iP,
  _iRA,
  _jI,
  _mR,
  _nT,
  _oP,
  _pRC,
  _s,
  _sT,
  _ta,
  _tRC,
  n0,
  tagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchImport = struct(
  n0,
  _BI,
  0,
  [_jI, _s, _fR, _sT, _cTo, _iP, _oP, _eTN, _iRA, _a, _pRC, _fRC, _tRC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
);
export var CreateBatchImportJobRequest = struct(
  n0,
  _CBIJRr,
  0,
  [_jI, _iP, _oP, _eTN, _iRA, _ta],
  [0, 0, 0, 0, 0, () => tagList]
);
export var CreateBatchImportJobResult = struct(n0, _CBIJRre, 0, [], []);
export var CreateBatchPredictionJobRequest = struct(
  n0,
  _CBPJRr,
  0,
  [_jI, _iP, _oP, _eTN, _dN, _dV, _iRA, _ta],
  [0, 0, 0, 0, 0, 0, 0, () => tagList]
);
export var CreateBatchPredictionJobResult = struct(n0, _CBPJRre, 0, [], []);
export var GetBatchImportJobsRequest = struct(n0, _GBIJR, 0, [_jI, _mR, _nT], [0, 1, 0]);
export var GetBatchImportJobsResult = struct(n0, _GBIJRe, 0, [_bI, _nT], [() => BatchImportList, 0]);
export var BatchImportList = list(n0, _BIL, 0, () => BatchImport);
export var CreateBatchImportJob = op(
  n0,
  _CBIJr,
  0,
  () => CreateBatchImportJobRequest,
  () => CreateBatchImportJobResult
);
export var CreateBatchPredictionJob = op(
  n0,
  _CBPJr,
  0,
  () => CreateBatchPredictionJobRequest,
  () => CreateBatchPredictionJobResult
);
export var GetBatchImportJobs = op(
  n0,
  _GBIJ,
  0,
  () => GetBatchImportJobsRequest,
  () => GetBatchImportJobsResult
);
