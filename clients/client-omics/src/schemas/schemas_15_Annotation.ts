// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aF,
  _aIJ,
  _AIJI,
  _AIJIn,
  _cT,
  _cTo,
  _DASV,
  _DASVR,
  _DASVRe,
  _dN,
  _end,
  _er,
  _f,
  _filt,
  _hQ,
  _ht,
  _i,
  _id,
  _LAIJ,
  _LAIJF,
  _LAIJR,
  _LAIJRi,
  _m,
  _mRa,
  _n,
  _nT,
  _rA,
  _rLN,
  _sNt,
  _st,
  _uT,
  _v,
  _VDE,
  _VDEL,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnnotationImportJobItem = struct(
  n0,
  _AIJI,
  0,
  [_i, _dN, _vN, _rA, _st, _cT, _uT, _cTo, _rLN, _aF],
  [0, 0, 0, 0, 0, 5, 5, 5, 2, 128 | 0]
);
export var DeleteAnnotationStoreVersionsRequest = struct(
  n0,
  _DASVR,
  0,
  [_n, _v, _f],
  [
    [0, 1],
    64 | 0,
    [
      2,
      {
        [_hQ]: _f,
      },
    ],
  ]
);
export var DeleteAnnotationStoreVersionsResponse = struct(n0, _DASVRe, 0, [_er], [() => VersionDeleteErrorList]);
export var ListAnnotationImportJobsFilter = struct(n0, _LAIJF, 0, [_st, _sNt], [0, 0]);
export var ListAnnotationImportJobsRequest = struct(
  n0,
  _LAIJR,
  0,
  [_mRa, _id, _nT, _filt],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    64 | 0,
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ListAnnotationImportJobsFilter,
  ]
);
export var ListAnnotationImportJobsResponse = struct(n0, _LAIJRi, 0, [_aIJ, _nT], [() => AnnotationImportJobItems, 0]);
export var VersionDeleteError = struct(n0, _VDE, 0, [_vN, _m], [0, 0]);
export var AnnotationImportJobItems = list(n0, _AIJIn, 0, () => AnnotationImportJobItem);
export var VersionDeleteErrorList = list(n0, _VDEL, 0, () => VersionDeleteError);
export var VersionList = 64 | 0;

export var DeleteAnnotationStoreVersions = op(
  n0,
  _DASV,
  {
    [_ht]: ["POST", "/annotationStore/{name}/versions/delete", 200],
    [_end]: ["analytics-"],
  },
  () => DeleteAnnotationStoreVersionsRequest,
  () => DeleteAnnotationStoreVersionsResponse
);
export var ListAnnotationImportJobs = op(
  n0,
  _LAIJ,
  {
    [_ht]: ["POST", "/import/annotations", 200],
    [_end]: ["analytics-"],
  },
  () => ListAnnotationImportJobsRequest,
  () => ListAnnotationImportJobsResponse
);
