// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ARSSI,
  _ARSSL,
  _BDRS,
  _BDRSR,
  _BDRSRa,
  _ch,
  _CMRSU,
  _CMRSUR,
  _CMRSURo,
  _cod,
  _CRSUPL,
  _CRSUPLI,
  _cT,
  _cTl,
  _cTo,
  _d,
  _de,
  _end,
  _er,
  _ERS,
  _ERSD,
  _ERSDL,
  _ERSL,
  _fil,
  _gF,
  _GRS,
  _GRSAJ,
  _GRSAJR,
  _GRSAJRe,
  _GRSEJ,
  _GRSEJR,
  _GRSEJRe,
  _GRSIJ,
  _GRSIJR,
  _GRSIJRe,
  _GRSR,
  _GRSRe,
  _hQ,
  _ht,
  _i,
  _id,
  _IRSSI,
  _IRSSL,
  _m,
  _n,
  _p,
  _pa,
  _pN,
  _pS,
  _rA,
  _rAe,
  _rS,
  _RSBE,
  _RSBEL,
  _rSI,
  _RSSB,
  _s,
  _sFo,
  _sFT,
  _sIa,
  _sIu,
  _sM,
  _sourc,
  _SRSAJ,
  _SRSAJR,
  _SRSAJRt,
  _SRSAJSI,
  _SRSAJSL,
  _SRSEJ,
  _SRSEJR,
  _SRSEJRt,
  _sSI,
  _st,
  _ta,
  _uI,
  n0,
} from "./schemas_0";
import { SourceFiles } from "./schemas_33_Import";

/* eslint no-var: 0 */

export var ReadSetStreamingBlob = sim(n0, _RSSB, 42, {
  [_s]: 1,
});
export var ActivateReadSetSourceItem = struct(n0, _ARSSI, 0, [_rSI, _st, _sM], [0, 0, 0]);
export var BatchDeleteReadSetRequest = struct(n0, _BDRSR, 0, [_id, _sSI], [64 | 0, [0, 1]]);
export var BatchDeleteReadSetResponse = struct(n0, _BDRSRa, 0, [_er], [() => ReadSetBatchErrorList]);
export var CompleteMultipartReadSetUploadRequest = struct(
  n0,
  _CMRSUR,
  0,
  [_sSI, _uI, _p],
  [[0, 1], [0, 1], () => CompleteReadSetUploadPartList]
);
export var CompleteMultipartReadSetUploadResponse = struct(n0, _CMRSURo, 0, [_rSI], [0]);
export var CompleteReadSetUploadPartListItem = struct(n0, _CRSUPLI, 0, [_pN, _pS, _ch], [1, 0, 0]);
export var ExportReadSet = struct(n0, _ERS, 0, [_rSI], [0]);
export var ExportReadSetDetail = struct(n0, _ERSD, 0, [_i, _st, _sM], [0, 0, 0]);
export var GetReadSetActivationJobRequest = struct(
  n0,
  _GRSAJR,
  0,
  [_i, _sSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReadSetActivationJobResponse = struct(
  n0,
  _GRSAJRe,
  0,
  [_i, _sSI, _st, _sM, _cT, _cTo, _sourc],
  [0, 0, 0, 0, 5, 5, () => ActivateReadSetSourceList]
);
export var GetReadSetExportJobRequest = struct(
  n0,
  _GRSEJR,
  0,
  [_sSI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReadSetExportJobResponse = struct(
  n0,
  _GRSEJRe,
  0,
  [_i, _sSI, _de, _st, _sM, _cT, _cTo, _rS],
  [0, 0, 0, 0, 0, 5, 5, () => ExportReadSetDetailList]
);
export var GetReadSetImportJobRequest = struct(
  n0,
  _GRSIJR,
  0,
  [_i, _sSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReadSetImportJobResponse = struct(
  n0,
  _GRSIJRe,
  0,
  [_i, _sSI, _rA, _st, _sM, _cT, _cTo, _sourc],
  [0, 0, 0, 0, 0, 5, 5, () => ImportReadSetSourceList]
);
export var GetReadSetRequest = struct(
  n0,
  _GRSR,
  0,
  [_i, _sSI, _fil, _pN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _fil,
      },
    ],
    [
      1,
      {
        [_hQ]: _pN,
      },
    ],
  ]
);
export var GetReadSetResponse = struct(n0, _GRSRe, 0, [_pa], [[() => ReadSetStreamingBlob, 16]]);
export var ImportReadSetSourceItem = struct(
  n0,
  _IRSSI,
  0,
  [_sFo, _sFT, _st, _sM, _sIu, _sIa, _gF, _rAe, _n, _d, _ta, _rSI],
  [() => SourceFiles, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 0]
);
export var ReadSetBatchError = struct(n0, _RSBE, 0, [_i, _cod, _m], [0, 0, 0]);
export var StartReadSetActivationJobRequest = struct(
  n0,
  _SRSAJR,
  0,
  [_sSI, _cTl, _sourc],
  [[0, 1], 0, () => StartReadSetActivationJobSourceList]
);
export var StartReadSetActivationJobResponse = struct(n0, _SRSAJRt, 0, [_i, _sSI, _st, _cT], [0, 0, 0, 5]);
export var StartReadSetActivationJobSourceItem = struct(n0, _SRSAJSI, 0, [_rSI], [0]);
export var StartReadSetExportJobRequest = struct(
  n0,
  _SRSEJR,
  0,
  [_sSI, _de, _rA, _cTl, _sourc],
  [[0, 1], 0, 0, 0, () => ExportReadSetList]
);
export var StartReadSetExportJobResponse = struct(n0, _SRSEJRt, 0, [_i, _sSI, _de, _st, _cT], [0, 0, 0, 0, 5]);
export var ActivateReadSetSourceList = list(n0, _ARSSL, 0, () => ActivateReadSetSourceItem);
export var CompleteReadSetUploadPartList = list(n0, _CRSUPL, 0, () => CompleteReadSetUploadPartListItem);
export var ExportReadSetDetailList = list(n0, _ERSDL, 0, () => ExportReadSetDetail);
export var ExportReadSetList = list(n0, _ERSL, 0, () => ExportReadSet);
export var ImportReadSetSourceList = list(n0, _IRSSL, 0, () => ImportReadSetSourceItem);
export var ReadSetBatchErrorList = list(n0, _RSBEL, 0, () => ReadSetBatchError);
export var ReadSetIdList = 64 | 0;

export var StartReadSetActivationJobSourceList = list(n0, _SRSAJSL, 0, () => StartReadSetActivationJobSourceItem);
export var BatchDeleteReadSet = op(
  n0,
  _BDRS,
  {
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/readset/batch/delete", 200],
    [_end]: ["control-storage-"],
  },
  () => BatchDeleteReadSetRequest,
  () => BatchDeleteReadSetResponse
);
export var CompleteMultipartReadSetUpload = op(
  n0,
  _CMRSU,
  {
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/upload/{uploadId}/complete", 200],
    [_end]: ["storage-"],
  },
  () => CompleteMultipartReadSetUploadRequest,
  () => CompleteMultipartReadSetUploadResponse
);
export var GetReadSet = op(
  n0,
  _GRS,
  {
    [_ht]: ["GET", "/sequencestore/{sequenceStoreId}/readset/{id}", 200],
    [_end]: ["storage-"],
  },
  () => GetReadSetRequest,
  () => GetReadSetResponse
);
export var GetReadSetActivationJob = op(
  n0,
  _GRSAJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["GET", "/sequencestore/{sequenceStoreId}/activationjob/{id}", 200],
  },
  () => GetReadSetActivationJobRequest,
  () => GetReadSetActivationJobResponse
);
export var GetReadSetExportJob = op(
  n0,
  _GRSEJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["GET", "/sequencestore/{sequenceStoreId}/exportjob/{id}", 200],
  },
  () => GetReadSetExportJobRequest,
  () => GetReadSetExportJobResponse
);
export var GetReadSetImportJob = op(
  n0,
  _GRSIJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["GET", "/sequencestore/{sequenceStoreId}/importjob/{id}", 200],
  },
  () => GetReadSetImportJobRequest,
  () => GetReadSetImportJobResponse
);
export var StartReadSetActivationJob = op(
  n0,
  _SRSAJ,
  {
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/activationjob", 200],
    [_end]: ["control-storage-"],
  },
  () => StartReadSetActivationJobRequest,
  () => StartReadSetActivationJobResponse
);
export var StartReadSetExportJob = op(
  n0,
  _SRSEJ,
  {
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/exportjob", 200],
    [_end]: ["control-storage-"],
  },
  () => StartReadSetExportJobRequest,
  () => StartReadSetExportJobResponse
);
