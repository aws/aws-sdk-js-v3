// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aF,
  _AIID,
  _AIIDn,
  _AIIS,
  _AIISn,
  _aSV,
  _ASVI,
  _ASVIn,
  _aT,
  _CAS,
  _CASR,
  _CASRr,
  _CASV,
  _CASVR,
  _CASVRr,
  _co,
  _cT,
  _cTo,
  _CVS,
  _CVSR,
  _CVSRr,
  _d,
  _dN,
  _enc,
  _end,
  _eQ,
  _es,
  _filt,
  _FO,
  _fO,
  _fTH,
  _GAIJ,
  _GAIR,
  _GAIRe,
  _GASV,
  _GASVR,
  _GASVRe,
  _GVIJ,
  _GVIR,
  _GVIRe,
  _h,
  _hQ,
  _ht,
  _i,
  _iFF,
  _iQF,
  _it,
  _jI,
  _jS,
  _LASV,
  _LASVF,
  _LASVR,
  _LASVRi,
  _lSi,
  _mRa,
  _n,
  _nT,
  _q,
  _qA,
  _r,
  _rA,
  _rLN,
  _RO,
  _rOe,
  _S,
  _SAIJ,
  _SAIR,
  _SAIRt,
  _sC,
  _sc,
  _sep,
  _sF,
  _sIt,
  _sM,
  _sO,
  _so,
  _st,
  _SVIJ,
  _SVIR,
  _SVIRt,
  _ta,
  _TO,
  _tO,
  _TVO,
  _tVO,
  _UASV,
  _UASVR,
  _UASVRp,
  _uT,
  _vA,
  _VIID,
  _VIIDa,
  _VIIS,
  _VIISa,
  _vN,
  _VO,
  _vO,
  _vOc,
  _VOe,
  _vSB,
  n0,
  SseConfig,
} from "./schemas_0";
import { ReferenceItem, StoreOptions } from "./schemas_22_Store";

/* eslint no-var: 0 */

export var AnnotationImportItemDetail = struct(n0, _AIID, 0, [_so, _jS], [0, 0]);
export var AnnotationImportItemSource = struct(n0, _AIIS, 0, [_so], [0]);
export var AnnotationStoreVersionItem = struct(
  n0,
  _ASVI,
  0,
  [_sIt, _i, _st, _vA, _n, _vN, _d, _cT, _uT, _sM, _vSB],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 1]
);
export var CreateAnnotationStoreRequest = struct(
  n0,
  _CASR,
  0,
  [_r, _n, _d, _ta, _vN, _sC, _sF, _sO],
  [() => ReferenceItem, 0, 0, 128 | 0, 0, () => SseConfig, 0, () => StoreOptions]
);
export var CreateAnnotationStoreResponse = struct(
  n0,
  _CASRr,
  0,
  [_i, _r, _sF, _sO, _st, _n, _vN, _cT],
  [0, () => ReferenceItem, 0, () => StoreOptions, 0, 0, 0, 5]
);
export var CreateAnnotationStoreVersionRequest = struct(
  n0,
  _CASVR,
  0,
  [_n, _vN, _d, _vO, _ta],
  [[0, 1], 0, 0, () => VersionOptions, 128 | 0]
);
export var CreateAnnotationStoreVersionResponse = struct(
  n0,
  _CASVRr,
  0,
  [_i, _vN, _sIt, _vO, _n, _st, _cT],
  [0, 0, 0, () => VersionOptions, 0, 0, 5]
);
export var CreateVariantStoreRequest = struct(
  n0,
  _CVSR,
  0,
  [_r, _n, _d, _ta, _sC],
  [() => ReferenceItem, 0, 0, 128 | 0, () => SseConfig]
);
export var CreateVariantStoreResponse = struct(
  n0,
  _CVSRr,
  0,
  [_i, _r, _st, _n, _cT],
  [0, () => ReferenceItem, 0, 0, 5]
);
export var GetAnnotationImportRequest = struct(n0, _GAIR, 0, [_jI], [[0, 1]]);
export var GetAnnotationImportResponse = struct(
  n0,
  _GAIRe,
  0,
  [_i, _dN, _vN, _rA, _st, _sM, _cT, _uT, _cTo, _it, _rLN, _fO, _aF],
  [0, 0, 0, 0, 0, 0, 5, 5, 5, () => AnnotationImportItemDetails, 2, () => FormatOptions, 128 | 0]
);
export var GetAnnotationStoreVersionRequest = struct(
  n0,
  _GASVR,
  0,
  [_n, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAnnotationStoreVersionResponse = struct(
  n0,
  _GASVRe,
  0,
  [_sIt, _i, _st, _vA, _n, _vN, _d, _cT, _uT, _ta, _vO, _sM, _vSB],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 128 | 0, () => VersionOptions, 0, 1]
);
export var GetVariantImportRequest = struct(n0, _GVIR, 0, [_jI], [[0, 1]]);
export var GetVariantImportResponse = struct(
  n0,
  _GVIRe,
  0,
  [_i, _dN, _rA, _st, _sM, _cT, _uT, _cTo, _it, _rLN, _aF],
  [0, 0, 0, 0, 0, 5, 5, 5, () => VariantImportItemDetails, 2, 128 | 0]
);
export var ListAnnotationStoreVersionsFilter = struct(n0, _LASVF, 0, [_st], [0]);
export var ListAnnotationStoreVersionsRequest = struct(
  n0,
  _LASVR,
  0,
  [_n, _mRa, _nT, _filt],
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
    () => ListAnnotationStoreVersionsFilter,
  ]
);
export var ListAnnotationStoreVersionsResponse = struct(
  n0,
  _LASVRi,
  0,
  [_aSV, _nT],
  [() => AnnotationStoreVersionItems, 0]
);
export var ReadOptions = struct(
  n0,
  _RO,
  0,
  [_sep, _enc, _q, _qA, _es, _eQ, _co, _h, _lSi],
  [0, 0, 0, 2, 0, 2, 0, 2, 0]
);
export var StartAnnotationImportRequest = struct(
  n0,
  _SAIR,
  0,
  [_dN, _rA, _it, _vN, _fO, _rLN, _aF],
  [0, 0, () => AnnotationImportItemSources, 0, () => FormatOptions, 2, 128 | 0]
);
export var StartAnnotationImportResponse = struct(n0, _SAIRt, 0, [_jI], [0]);
export var StartVariantImportRequest = struct(
  n0,
  _SVIR,
  0,
  [_dN, _rA, _it, _rLN, _aF],
  [0, 0, () => VariantImportItemSources, 2, 128 | 0]
);
export var StartVariantImportResponse = struct(n0, _SVIRt, 0, [_jI], [0]);
export var TsvOptions = struct(n0, _TO, 0, [_rOe], [() => ReadOptions]);
export var TsvVersionOptions = struct(n0, _TVO, 0, [_aT, _fTH, _sc], [0, 128 | 0, list(n0, _S, 0, 128 | 0)]);
export var UpdateAnnotationStoreVersionRequest = struct(n0, _UASVR, 0, [_n, _vN, _d], [[0, 1], [0, 1], 0]);
export var UpdateAnnotationStoreVersionResponse = struct(
  n0,
  _UASVRp,
  0,
  [_sIt, _i, _st, _n, _vN, _d, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 5, 5]
);
export var VariantImportItemDetail = struct(n0, _VIID, 0, [_so, _jS, _sM], [0, 0, 0]);
export var VariantImportItemSource = struct(n0, _VIIS, 0, [_so], [0]);
export var VcfOptions = struct(n0, _VO, 0, [_iQF, _iFF], [2, 2]);
export var AnnotationImportItemDetails = list(n0, _AIIDn, 0, () => AnnotationImportItemDetail);
export var AnnotationImportItemSources = list(n0, _AIISn, 0, () => AnnotationImportItemSource);
export var AnnotationStoreVersionItems = list(n0, _ASVIn, 0, () => AnnotationStoreVersionItem);
export var VariantImportItemDetails = list(n0, _VIIDa, 0, () => VariantImportItemDetail);
export var VariantImportItemSources = list(n0, _VIISa, 0, () => VariantImportItemSource);
export var FormatOptions = uni(n0, _FO, 0, [_tO, _vOc], [() => TsvOptions, () => VcfOptions]);
export var VersionOptions = uni(n0, _VOe, 0, [_tVO], [() => TsvVersionOptions]);
export var CreateAnnotationStore = op(
  n0,
  _CAS,
  {
    [_ht]: ["POST", "/annotationStore", 200],
    [_end]: ["analytics-"],
  },
  () => CreateAnnotationStoreRequest,
  () => CreateAnnotationStoreResponse
);
export var CreateAnnotationStoreVersion = op(
  n0,
  _CASV,
  {
    [_ht]: ["POST", "/annotationStore/{name}/version", 200],
    [_end]: ["analytics-"],
  },
  () => CreateAnnotationStoreVersionRequest,
  () => CreateAnnotationStoreVersionResponse
);
export var CreateVariantStore = op(
  n0,
  _CVS,
  {
    [_ht]: ["POST", "/variantStore", 200],
    [_end]: ["analytics-"],
  },
  () => CreateVariantStoreRequest,
  () => CreateVariantStoreResponse
);
export var GetAnnotationImportJob = op(
  n0,
  _GAIJ,
  {
    [_ht]: ["GET", "/import/annotation/{jobId}", 200],
    [_end]: ["analytics-"],
  },
  () => GetAnnotationImportRequest,
  () => GetAnnotationImportResponse
);
export var GetAnnotationStoreVersion = op(
  n0,
  _GASV,
  {
    [_ht]: ["GET", "/annotationStore/{name}/version/{versionName}", 200],
    [_end]: ["analytics-"],
  },
  () => GetAnnotationStoreVersionRequest,
  () => GetAnnotationStoreVersionResponse
);
export var GetVariantImportJob = op(
  n0,
  _GVIJ,
  {
    [_ht]: ["GET", "/import/variant/{jobId}", 200],
    [_end]: ["analytics-"],
  },
  () => GetVariantImportRequest,
  () => GetVariantImportResponse
);
export var ListAnnotationStoreVersions = op(
  n0,
  _LASV,
  {
    [_ht]: ["POST", "/annotationStore/{name}/versions", 200],
    [_end]: ["analytics-"],
  },
  () => ListAnnotationStoreVersionsRequest,
  () => ListAnnotationStoreVersionsResponse
);
export var StartAnnotationImportJob = op(
  n0,
  _SAIJ,
  {
    [_ht]: ["POST", "/import/annotation", 200],
    [_end]: ["analytics-"],
  },
  () => StartAnnotationImportRequest,
  () => StartAnnotationImportResponse
);
export var StartVariantImportJob = op(
  n0,
  _SVIJ,
  {
    [_ht]: ["POST", "/import/variant", 200],
    [_end]: ["analytics-"],
  },
  () => StartVariantImportRequest,
  () => StartVariantImportResponse
);
export var UpdateAnnotationStoreVersion = op(
  n0,
  _UASV,
  {
    [_ht]: ["POST", "/annotationStore/{name}/version/{versionName}", 200],
    [_end]: ["analytics-"],
  },
  () => UpdateAnnotationStoreVersionRequest,
  () => UpdateAnnotationStoreVersionResponse
);
