// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _al,
  _ali,
  _ar,
  _cJI,
  _cL,
  _cT,
  _cTr,
  _d,
  _end,
  _ET,
  _et,
  _FI,
  _fi,
  _fT,
  _gF,
  _GRSM,
  _GRSMR,
  _GRSMRe,
  _ht,
  _i,
  _in,
  _n,
  _pSa,
  _rAe,
  _RSF,
  _RSSA,
  _sAc,
  _SI,
  _sIa,
  _sIe,
  _sIu,
  _sM,
  _sou,
  _sour,
  _sSI,
  _st,
  _sU,
  _tBC,
  _tP,
  _tRC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ETag = struct(n0, _ET, 0, [_al, _sou, _sour], [0, 0, 0]);
export var FileInformation = struct(n0, _FI, 0, [_tP, _pSa, _cL, _sAc], [1, 1, 1, () => ReadSetS3Access]);
export var GetReadSetMetadataRequest = struct(
  n0,
  _GRSMR,
  0,
  [_i, _sSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReadSetMetadataResponse = struct(
  n0,
  _GRSMRe,
  0,
  [_i, _ar, _sSI, _sIu, _sIa, _st, _n, _d, _fT, _cT, _sIe, _rAe, _fi, _sM, _cTr, _et, _cJI],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, () => SequenceInformation, 0, () => ReadSetFiles, 0, 0, () => ETag, 0]
);
export var ReadSetFiles = struct(
  n0,
  _RSF,
  0,
  [_sou, _sour, _in],
  [() => FileInformation, () => FileInformation, () => FileInformation]
);
export var ReadSetS3Access = struct(n0, _RSSA, 0, [_sU], [0]);
export var SequenceInformation = struct(n0, _SI, 0, [_tRC, _tBC, _gF, _ali], [1, 1, 0, 0]);
export var GetReadSetMetadata = op(
  n0,
  _GRSM,
  {
    [_ht]: ["GET", "/sequencestore/{sequenceStoreId}/readset/{id}/metadata", 200],
    [_end]: ["control-storage-"],
  },
  () => GetReadSetMetadataRequest,
  () => GetReadSetMetadataResponse
);
