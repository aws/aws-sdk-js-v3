// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aJ,
  _ar,
  _ARSF,
  _ARSJI,
  _ARSJL,
  _cA,
  _cB,
  _ch,
  _cT,
  _cTo,
  _cTr,
  _d,
  _de,
  _eJ,
  _end,
  _ERSF,
  _ERSJD,
  _ERSJDL,
  _et,
  _eTAF,
  _filt,
  _fL,
  _fT,
  _gF,
  _hQ,
  _ht,
  _i,
  _iJ,
  _IRSF,
  _IRSJI,
  _IRSJL,
  _LMRSU,
  _LMRSUR,
  _LMRSURi,
  _LRS,
  _LRSAJ,
  _LRSAJR,
  _LRSAJRi,
  _LRSEJ,
  _LRSEJR,
  _LRSEJRi,
  _LRSIJ,
  _LRSIJR,
  _LRSIJRi,
  _LRSR,
  _LRSRi,
  _LRSUP,
  _LRSUPR,
  _LRSUPRi,
  _LSS,
  _LSSR,
  _LSSRi,
  _lUT,
  _mRa,
  _MRSUL,
  _MRSULI,
  _n,
  _nT,
  _p,
  _pN,
  _pS,
  _pSa,
  _rA,
  _rAe,
  _rS,
  _RSFe,
  _RSL,
  _RSLI,
  _RSUPL,
  _RSUPLF,
  _RSUPLI,
  _sC,
  _sFT,
  _sIa,
  _sIe,
  _sIu,
  _sM,
  _sS,
  _SSD,
  _SSDL,
  _SSF,
  _sSI,
  _st,
  _ta,
  _uA,
  _uB,
  _uI,
  _up,
  _uT,
  n0,
  SseConfig,
} from "./schemas_0";
import { ETag, SequenceInformation } from "./schemas_1_Store";

/* eslint no-var: 0 */

export var ActivateReadSetFilter = struct(n0, _ARSF, 0, [_st, _cA, _cB], [0, 5, 5]);
export var ActivateReadSetJobItem = struct(n0, _ARSJI, 0, [_i, _sSI, _st, _cT, _cTo], [0, 0, 0, 5, 5]);
export var ExportReadSetFilter = struct(n0, _ERSF, 0, [_st, _cA, _cB], [0, 5, 5]);
export var ExportReadSetJobDetail = struct(n0, _ERSJD, 0, [_i, _sSI, _de, _st, _cT, _cTo], [0, 0, 0, 0, 5, 5]);
export var ImportReadSetFilter = struct(n0, _IRSF, 0, [_st, _cA, _cB], [0, 5, 5]);
export var ImportReadSetJobItem = struct(n0, _IRSJI, 0, [_i, _sSI, _rA, _st, _cT, _cTo], [0, 0, 0, 0, 5, 5]);
export var ListMultipartReadSetUploadsRequest = struct(
  n0,
  _LMRSUR,
  0,
  [_sSI, _mRa, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
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
export var ListMultipartReadSetUploadsResponse = struct(
  n0,
  _LMRSURi,
  0,
  [_nT, _up],
  [0, () => MultipartReadSetUploadList]
);
export var ListReadSetActivationJobsRequest = struct(
  n0,
  _LRSAJR,
  0,
  [_sSI, _mRa, _nT, _filt],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ActivateReadSetFilter,
  ]
);
export var ListReadSetActivationJobsResponse = struct(n0, _LRSAJRi, 0, [_nT, _aJ], [0, () => ActivateReadSetJobList]);
export var ListReadSetExportJobsRequest = struct(
  n0,
  _LRSEJR,
  0,
  [_sSI, _mRa, _nT, _filt],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ExportReadSetFilter,
  ]
);
export var ListReadSetExportJobsResponse = struct(n0, _LRSEJRi, 0, [_nT, _eJ], [0, () => ExportReadSetJobDetailList]);
export var ListReadSetImportJobsRequest = struct(
  n0,
  _LRSIJR,
  0,
  [_mRa, _nT, _sSI, _filt],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
    () => ImportReadSetFilter,
  ]
);
export var ListReadSetImportJobsResponse = struct(n0, _LRSIJRi, 0, [_nT, _iJ], [0, () => ImportReadSetJobList]);
export var ListReadSetsRequest = struct(
  n0,
  _LRSR,
  0,
  [_sSI, _mRa, _nT, _filt],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ReadSetFilter,
  ]
);
export var ListReadSetsResponse = struct(n0, _LRSRi, 0, [_nT, _rS], [0, () => ReadSetList]);
export var ListReadSetUploadPartsRequest = struct(
  n0,
  _LRSUPR,
  0,
  [_sSI, _uI, _pS, _mRa, _nT, _filt],
  [
    [0, 1],
    [0, 1],
    0,
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ReadSetUploadPartListFilter,
  ]
);
export var ListReadSetUploadPartsResponse = struct(n0, _LRSUPRi, 0, [_nT, _p], [0, () => ReadSetUploadPartList]);
export var ListSequenceStoresRequest = struct(
  n0,
  _LSSR,
  0,
  [_mRa, _nT, _filt],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => SequenceStoreFilter,
  ]
);
export var ListSequenceStoresResponse = struct(n0, _LSSRi, 0, [_nT, _sS], [0, () => SequenceStoreDetailList]);
export var MultipartReadSetUploadListItem = struct(
  n0,
  _MRSULI,
  0,
  [_sSI, _uI, _sFT, _sIu, _sIa, _gF, _rAe, _n, _d, _ta, _cT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 5]
);
export var ReadSetFilter = struct(
  n0,
  _RSFe,
  0,
  [_n, _st, _rAe, _cA, _cB, _sIa, _sIu, _gF, _cTr],
  [0, 0, 0, 5, 5, 0, 0, 0, 0]
);
export var ReadSetListItem = struct(
  n0,
  _RSLI,
  0,
  [_i, _ar, _sSI, _sIu, _sIa, _st, _n, _d, _rAe, _fT, _sIe, _cT, _sM, _cTr, _et],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => SequenceInformation, 5, 0, 0, () => ETag]
);
export var ReadSetUploadPartListFilter = struct(n0, _RSUPLF, 0, [_cA, _cB], [5, 5]);
export var ReadSetUploadPartListItem = struct(n0, _RSUPLI, 0, [_pN, _pSa, _pS, _ch, _cT, _lUT], [1, 1, 0, 0, 5, 5]);
export var SequenceStoreDetail = struct(
  n0,
  _SSD,
  0,
  [_ar, _i, _n, _d, _sC, _cT, _fL, _eTAF, _st, _sM, _uT],
  [0, 0, 0, 0, () => SseConfig, 5, 0, 0, 0, 0, 5]
);
export var SequenceStoreFilter = struct(n0, _SSF, 0, [_n, _cA, _cB, _st, _uA, _uB], [0, 5, 5, 0, 5, 5]);
export var ActivateReadSetJobList = list(n0, _ARSJL, 0, () => ActivateReadSetJobItem);
export var ExportReadSetJobDetailList = list(n0, _ERSJDL, 0, () => ExportReadSetJobDetail);
export var ImportReadSetJobList = list(n0, _IRSJL, 0, () => ImportReadSetJobItem);
export var MultipartReadSetUploadList = list(n0, _MRSUL, 0, () => MultipartReadSetUploadListItem);
export var ReadSetList = list(n0, _RSL, 0, () => ReadSetListItem);
export var ReadSetUploadPartList = list(n0, _RSUPL, 0, () => ReadSetUploadPartListItem);
export var SequenceStoreDetailList = list(n0, _SSDL, 0, () => SequenceStoreDetail);
export var ListMultipartReadSetUploads = op(
  n0,
  _LMRSU,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/uploads", 200],
  },
  () => ListMultipartReadSetUploadsRequest,
  () => ListMultipartReadSetUploadsResponse
);
export var ListReadSetActivationJobs = op(
  n0,
  _LRSAJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/activationjobs", 200],
  },
  () => ListReadSetActivationJobsRequest,
  () => ListReadSetActivationJobsResponse
);
export var ListReadSetExportJobs = op(
  n0,
  _LRSEJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/exportjobs", 200],
  },
  () => ListReadSetExportJobsRequest,
  () => ListReadSetExportJobsResponse
);
export var ListReadSetImportJobs = op(
  n0,
  _LRSIJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/importjobs", 200],
  },
  () => ListReadSetImportJobsRequest,
  () => ListReadSetImportJobsResponse
);
export var ListReadSets = op(
  n0,
  _LRS,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/readsets", 200],
  },
  () => ListReadSetsRequest,
  () => ListReadSetsResponse
);
export var ListReadSetUploadParts = op(
  n0,
  _LRSUP,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/sequencestore/{sequenceStoreId}/upload/{uploadId}/parts", 200],
  },
  () => ListReadSetUploadPartsRequest,
  () => ListReadSetUploadPartsResponse
);
export var ListSequenceStores = op(
  n0,
  _LSS,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/sequencestores", 200],
  },
  () => ListSequenceStoresRequest,
  () => ListSequenceStoresResponse
);
