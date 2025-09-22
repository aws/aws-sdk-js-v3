// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aU,
  _cat,
  _cr,
  _cT,
  _CU,
  _CUR,
  _CURr,
  _eCd,
  _GU,
  _GUR,
  _GURe,
  _ITRAS,
  _ITRASR,
  _ITRASRn,
  _LU,
  _LUR,
  _LURi,
  _m,
  _meta,
  _n,
  _nT,
  _pA,
  _rASA,
  _st,
  _SURL,
  _t,
  _U,
  _u,
  _Up,
  _up,
  _upl,
  _UU,
  _UUR,
  _UURp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveURL = sim(n0, _SURL, 0, 8);
export var CreateUploadRequest = struct(n0, _CUR, 0, [_pA, _n, _t, _cT], [0, 0, 0, 0]);
export var CreateUploadResult = struct(n0, _CURr, 0, [_up], [[() => Upload, 0]]);
export var GetUploadRequest = struct(n0, _GUR, 0, [_a], [0]);
export var GetUploadResult = struct(n0, _GURe, 0, [_up], [[() => Upload, 0]]);
export var InstallToRemoteAccessSessionRequest = struct(n0, _ITRASR, 0, [_rASA, _aA], [0, 0]);
export var InstallToRemoteAccessSessionResult = struct(n0, _ITRASRn, 0, [_aU], [[() => Upload, 0]]);
export var ListUploadsRequest = struct(n0, _LUR, 0, [_a, _t, _nT], [0, 0, 0]);
export var ListUploadsResult = struct(n0, _LURi, 0, [_upl, _nT], [[() => Uploads, 0], 0]);
export var UpdateUploadRequest = struct(n0, _UUR, 0, [_a, _n, _cT, _eCd], [0, 0, 0, 2]);
export var UpdateUploadResult = struct(n0, _UURp, 0, [_up], [[() => Upload, 0]]);
export var Upload = struct(
  n0,
  _U,
  0,
  [_a, _n, _cr, _t, _st, _u, _meta, _cT, _m, _cat],
  [0, 0, 4, 0, 0, [() => SensitiveURL, 0], 0, 0, 0, 0]
);
export var Uploads = list(n0, _Up, 0, [() => Upload, 0]);
export var CreateUpload = op(
  n0,
  _CU,
  0,
  () => CreateUploadRequest,
  () => CreateUploadResult
);
export var GetUpload = op(
  n0,
  _GU,
  0,
  () => GetUploadRequest,
  () => GetUploadResult
);
export var InstallToRemoteAccessSession = op(
  n0,
  _ITRAS,
  0,
  () => InstallToRemoteAccessSessionRequest,
  () => InstallToRemoteAccessSessionResult
);
export var ListUploads = op(
  n0,
  _LU,
  0,
  () => ListUploadsRequest,
  () => ListUploadsResult
);
export var UpdateUpload = op(
  n0,
  _UU,
  0,
  () => UpdateUploadRequest,
  () => UpdateUploadResult
);
