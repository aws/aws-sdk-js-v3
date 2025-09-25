// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _cB,
  _cJI,
  _CRS,
  _CRSR,
  _CRSRr,
  _cT,
  _cTl,
  _cTo,
  _cTr,
  _d,
  _DRe,
  _DRR,
  _DRRe,
  _DRS,
  _DRSR,
  _DRSRe,
  _end,
  _fi,
  _fil,
  _filt,
  _GR,
  _GRIJ,
  _GRIJR,
  _GRIJRe,
  _GRM,
  _GRMR,
  _GRMRe,
  _GRR,
  _GRRe,
  _GRSe,
  _GRSRet,
  _GRSRete,
  _hH,
  _hQ,
  _ht,
  _i,
  _iJ,
  _in,
  _IRF,
  _IRJI,
  _IRJL,
  _IRSI,
  _IRSL,
  _LR,
  _LRIJ,
  _LRIJR,
  _LRIJRi,
  _LRR,
  _LRRi,
  _LRSi,
  _LRSRis,
  _LRSRist,
  _md,
  _mRa,
  _n,
  _nT,
  _pa,
  _pN,
  _R,
  _rA,
  _ra,
  _ref,
  _RF,
  _RFe,
  _rIe,
  _RL,
  _RLI,
  _RSB,
  _RSD,
  _RSDL,
  _rSe,
  _RSFef,
  _rSIe,
  _s,
  _sC,
  _sFou,
  _sM,
  _so,
  _sourc,
  _SRIJ,
  _SRIJR,
  _SRIJRt,
  _SRIJSI,
  _SRIJSL,
  _st,
  _ta,
  _uT,
  n0,
  SseConfig,
} from "./schemas_0";
import { FileInformation } from "./schemas_1_Store";

/* eslint no-var: 0 */

export var ReferenceStreamingBlob = sim(n0, _RSB, 42, {
  [_s]: 1,
});
export var CreateReferenceStoreRequest = struct(
  n0,
  _CRSR,
  0,
  [_n, _d, _sC, _ta, _cTl],
  [0, 0, () => SseConfig, 128 | 0, 0]
);
export var CreateReferenceStoreResponse = struct(
  n0,
  _CRSRr,
  0,
  [_i, _ar, _n, _d, _sC, _cT],
  [0, 0, 0, 0, () => SseConfig, 5]
);
export var DeleteReferenceRequest = struct(
  n0,
  _DRR,
  0,
  [_i, _rSIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteReferenceResponse = struct(n0, _DRRe, 0, [], []);
export var DeleteReferenceStoreRequest = struct(n0, _DRSR, 0, [_i], [[0, 1]]);
export var DeleteReferenceStoreResponse = struct(n0, _DRSRe, 0, [], []);
export var GetReferenceImportJobRequest = struct(
  n0,
  _GRIJR,
  0,
  [_i, _rSIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReferenceImportJobResponse = struct(
  n0,
  _GRIJRe,
  0,
  [_i, _rSIe, _rA, _st, _sM, _cT, _cTo, _sourc],
  [0, 0, 0, 0, 0, 5, 5, () => ImportReferenceSourceList]
);
export var GetReferenceMetadataRequest = struct(
  n0,
  _GRMR,
  0,
  [_i, _rSIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReferenceMetadataResponse = struct(
  n0,
  _GRMRe,
  0,
  [_i, _ar, _rSIe, _md, _st, _n, _d, _cT, _uT, _fi, _cTr, _cJI],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, () => ReferenceFiles, 0, 0]
);
export var GetReferenceRequest = struct(
  n0,
  _GRR,
  0,
  [_i, _rSIe, _ra, _pN, _fil],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _R,
      },
    ],
    [
      1,
      {
        [_hQ]: _pN,
      },
    ],
    [
      0,
      {
        [_hQ]: _fil,
      },
    ],
  ]
);
export var GetReferenceResponse = struct(n0, _GRRe, 0, [_pa], [[() => ReferenceStreamingBlob, 16]]);
export var GetReferenceStoreRequest = struct(n0, _GRSRet, 0, [_i], [[0, 1]]);
export var GetReferenceStoreResponse = struct(
  n0,
  _GRSRete,
  0,
  [_i, _ar, _n, _d, _sC, _cT],
  [0, 0, 0, 0, () => SseConfig, 5]
);
export var ImportReferenceFilter = struct(n0, _IRF, 0, [_st, _cA, _cB], [0, 5, 5]);
export var ImportReferenceJobItem = struct(n0, _IRJI, 0, [_i, _rSIe, _rA, _st, _cT, _cTo], [0, 0, 0, 0, 5, 5]);
export var ImportReferenceSourceItem = struct(
  n0,
  _IRSI,
  0,
  [_sFou, _st, _sM, _n, _d, _ta, _rIe],
  [0, 0, 0, 0, 0, 128 | 0, 0]
);
export var ListReferenceImportJobsRequest = struct(
  n0,
  _LRIJR,
  0,
  [_mRa, _nT, _rSIe, _filt],
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
    () => ImportReferenceFilter,
  ]
);
export var ListReferenceImportJobsResponse = struct(n0, _LRIJRi, 0, [_nT, _iJ], [0, () => ImportReferenceJobList]);
export var ListReferencesRequest = struct(
  n0,
  _LRR,
  0,
  [_rSIe, _mRa, _nT, _filt],
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
    () => ReferenceFilter,
  ]
);
export var ListReferencesResponse = struct(n0, _LRRi, 0, [_nT, _ref], [0, () => ReferenceList]);
export var ListReferenceStoresRequest = struct(
  n0,
  _LRSRis,
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
    () => ReferenceStoreFilter,
  ]
);
export var ListReferenceStoresResponse = struct(n0, _LRSRist, 0, [_nT, _rSe], [0, () => ReferenceStoreDetailList]);
export var ReferenceFiles = struct(n0, _RF, 0, [_so, _in], [() => FileInformation, () => FileInformation]);
export var ReferenceFilter = struct(n0, _RFe, 0, [_n, _md, _cA, _cB], [0, 0, 5, 5]);
export var ReferenceListItem = struct(
  n0,
  _RLI,
  0,
  [_i, _ar, _rSIe, _md, _st, _n, _d, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 0, 5, 5]
);
export var ReferenceStoreDetail = struct(n0, _RSD, 0, [_ar, _i, _n, _d, _sC, _cT], [0, 0, 0, 0, () => SseConfig, 5]);
export var ReferenceStoreFilter = struct(n0, _RSFef, 0, [_n, _cA, _cB], [0, 5, 5]);
export var StartReferenceImportJobRequest = struct(
  n0,
  _SRIJR,
  0,
  [_rSIe, _rA, _cTl, _sourc],
  [[0, 1], 0, 0, () => StartReferenceImportJobSourceList]
);
export var StartReferenceImportJobResponse = struct(n0, _SRIJRt, 0, [_i, _rSIe, _rA, _st, _cT], [0, 0, 0, 0, 5]);
export var StartReferenceImportJobSourceItem = struct(n0, _SRIJSI, 0, [_sFou, _n, _d, _ta], [0, 0, 0, 128 | 0]);
export var ImportReferenceJobList = list(n0, _IRJL, 0, () => ImportReferenceJobItem);
export var ImportReferenceSourceList = list(n0, _IRSL, 0, () => ImportReferenceSourceItem);
export var ReferenceList = list(n0, _RL, 0, () => ReferenceListItem);
export var ReferenceStoreDetailList = list(n0, _RSDL, 0, () => ReferenceStoreDetail);
export var StartReferenceImportJobSourceList = list(n0, _SRIJSL, 0, () => StartReferenceImportJobSourceItem);
export var CreateReferenceStore = op(
  n0,
  _CRS,
  {
    [_ht]: ["POST", "/referencestore", 200],
    [_end]: ["control-storage-"],
  },
  () => CreateReferenceStoreRequest,
  () => CreateReferenceStoreResponse
);
export var DeleteReference = op(
  n0,
  _DRe,
  {
    [_ht]: ["DELETE", "/referencestore/{referenceStoreId}/reference/{id}", 200],
    [_end]: ["control-storage-"],
  },
  () => DeleteReferenceRequest,
  () => DeleteReferenceResponse
);
export var DeleteReferenceStore = op(
  n0,
  _DRS,
  {
    [_ht]: ["DELETE", "/referencestore/{id}", 200],
    [_end]: ["control-storage-"],
  },
  () => DeleteReferenceStoreRequest,
  () => DeleteReferenceStoreResponse
);
export var GetReference = op(
  n0,
  _GR,
  {
    [_ht]: ["GET", "/referencestore/{referenceStoreId}/reference/{id}", 200],
    [_end]: ["storage-"],
  },
  () => GetReferenceRequest,
  () => GetReferenceResponse
);
export var GetReferenceImportJob = op(
  n0,
  _GRIJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["GET", "/referencestore/{referenceStoreId}/importjob/{id}", 200],
  },
  () => GetReferenceImportJobRequest,
  () => GetReferenceImportJobResponse
);
export var GetReferenceMetadata = op(
  n0,
  _GRM,
  {
    [_ht]: ["GET", "/referencestore/{referenceStoreId}/reference/{id}/metadata", 200],
    [_end]: ["control-storage-"],
  },
  () => GetReferenceMetadataRequest,
  () => GetReferenceMetadataResponse
);
export var GetReferenceStore = op(
  n0,
  _GRSe,
  {
    [_ht]: ["GET", "/referencestore/{id}", 200],
    [_end]: ["control-storage-"],
  },
  () => GetReferenceStoreRequest,
  () => GetReferenceStoreResponse
);
export var ListReferenceImportJobs = op(
  n0,
  _LRIJ,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/referencestore/{referenceStoreId}/importjobs", 200],
  },
  () => ListReferenceImportJobsRequest,
  () => ListReferenceImportJobsResponse
);
export var ListReferences = op(
  n0,
  _LR,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/referencestore/{referenceStoreId}/references", 200],
  },
  () => ListReferencesRequest,
  () => ListReferencesResponse
);
export var ListReferenceStores = op(
  n0,
  _LRSi,
  {
    [_end]: ["control-storage-"],
    [_ht]: ["POST", "/referencestores", 200],
  },
  () => ListReferenceStoresRequest,
  () => ListReferenceStoresResponse
);
export var StartReferenceImportJob = op(
  n0,
  _SRIJ,
  {
    [_ht]: ["POST", "/referencestore/{referenceStoreId}/importjob", 200],
    [_end]: ["control-storage-"],
  },
  () => StartReferenceImportJobRequest,
  () => StartReferenceImportJobResponse
);
