// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aLL,
  _ar,
  _CSS,
  _CSSR,
  _CSSRr,
  _cT,
  _cTl,
  _d,
  _end,
  _eTAF,
  _fL,
  _gF,
  _ht,
  _i,
  _n,
  _pSLT,
  _rA,
  _rAe,
  _SAC,
  _sAC,
  _sAc,
  _sC,
  _sFo,
  _sFT,
  _sIa,
  _sIu,
  _sM,
  _sourc,
  _SRSIJ,
  _SRSIJR,
  _SRSIJRt,
  _SRSIJSI,
  _SRSIJSL,
  _sSI,
  _st,
  _ta,
  _USS,
  _USSR,
  _USSRp,
  _uT,
  n0,
  SseConfig,
} from "./schemas_0";
import { SequenceStoreS3Access } from "./schemas_19_Policy";
import { SourceFiles } from "./schemas_33_Import";

/* eslint no-var: 0 */

export var CreateSequenceStoreRequest = struct(
  n0,
  _CSSR,
  0,
  [_n, _d, _sC, _ta, _cTl, _fL, _eTAF, _pSLT, _sAC],
  [0, 0, () => SseConfig, 128 | 0, [0, 4], 0, 0, 64 | 0, () => S3AccessConfig]
);
export var CreateSequenceStoreResponse = struct(
  n0,
  _CSSRr,
  0,
  [_i, _ar, _n, _d, _sC, _cT, _fL, _eTAF, _st, _sM, _pSLT, _sAc],
  [0, 0, 0, 0, () => SseConfig, 5, 0, 0, 0, 0, 64 | 0, () => SequenceStoreS3Access]
);
export var S3AccessConfig = struct(n0, _SAC, 0, [_aLL], [0]);
export var StartReadSetImportJobRequest = struct(
  n0,
  _SRSIJR,
  0,
  [_sSI, _rA, _cTl, _sourc],
  [[0, 1], 0, 0, () => StartReadSetImportJobSourceList]
);
export var StartReadSetImportJobResponse = struct(n0, _SRSIJRt, 0, [_i, _sSI, _rA, _st, _cT], [0, 0, 0, 0, 5]);
export var StartReadSetImportJobSourceItem = struct(
  n0,
  _SRSIJSI,
  0,
  [_sFo, _sFT, _sIu, _sIa, _gF, _rAe, _n, _d, _ta],
  [() => SourceFiles, 0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var UpdateSequenceStoreRequest = struct(
  n0,
  _USSR,
  0,
  [_i, _n, _d, _cTl, _fL, _pSLT, _sAC],
  [[0, 1], 0, 0, [0, 4], 0, 64 | 0, () => S3AccessConfig]
);
export var UpdateSequenceStoreResponse = struct(
  n0,
  _USSRp,
  0,
  [_i, _ar, _n, _d, _sC, _cT, _uT, _pSLT, _st, _sM, _fL, _sAc, _eTAF],
  [0, 0, 0, 0, () => SseConfig, 5, 5, 64 | 0, 0, 0, 0, () => SequenceStoreS3Access, 0]
);
export var StartReadSetImportJobSourceList = list(n0, _SRSIJSL, 0, () => StartReadSetImportJobSourceItem);
export var CreateSequenceStore = op(
  n0,
  _CSS,
  {
    [_ht]: ["POST", "/sequencestore", 200],
    [_end]: ["control-storage-"],
  },
  () => CreateSequenceStoreRequest,
  () => CreateSequenceStoreResponse
);
export var StartReadSetImportJob = op(
  n0,
  _SRSIJ,
  {
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/importjob", 200],
    [_end]: ["control-storage-"],
  },
  () => StartReadSetImportJobRequest,
  () => StartReadSetImportJobResponse
);
export var UpdateSequenceStore = op(
  n0,
  _USS,
  {
    [_ht]: ["PATCH", "/sequencestore/{id}", 200],
    [_end]: ["control-storage-"],
  },
  () => UpdateSequenceStoreRequest,
  () => UpdateSequenceStoreResponse
);
