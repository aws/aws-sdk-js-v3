// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _at,
  _cT,
  _d,
  _dSI,
  _f,
  _fR,
  _GIJ,
  _GIJR,
  _GIJRe,
  _h,
  _IJ,
  _iJ,
  _IJF,
  _IJFn,
  _iJI,
  _IJS,
  _iJS,
  _IJSB,
  _IJSn,
  _IJSng,
  _kBI,
  _LIJ,
  _LIJR,
  _LIJRi,
  _mR,
  _nODD,
  _nODF,
  _nODS,
  _nOMDI,
  _nOMDM,
  _nOMDS,
  _nONDI,
  _nT,
  _op,
  _or,
  _sA,
  _sB,
  _SIJ,
  _SIJR,
  _SIJRt,
  _SIJRto,
  _SIJRtop,
  _SIJt,
  _st,
  _sta,
  _uA,
  _valu,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetIngestionJobRequest = struct(
  n0,
  _GIJR,
  0,
  [_kBI, _dSI, _iJI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetIngestionJobResponse = struct(n0, _GIJRe, 0, [_iJ], [() => IngestionJob]);
export var IngestionJob = struct(
  n0,
  _IJ,
  0,
  [_kBI, _dSI, _iJI, _d, _st, _sta, _fR, _sA, _uA],
  [0, 0, 0, 0, 0, () => IngestionJobStatistics, 64 | 0, 5, 5]
);
export var IngestionJobFilter = struct(n0, _IJF, 0, [_at, _op, _valu], [0, 0, 64 | 0]);
export var IngestionJobSortBy = struct(n0, _IJSB, 0, [_at, _or], [0, 0]);
export var IngestionJobStatistics = struct(
  n0,
  _IJS,
  0,
  [_nODS, _nOMDS, _nONDI, _nOMDI, _nOMDM, _nODD, _nODF],
  [1, 1, 1, 1, 1, 1, 1]
);
export var IngestionJobSummary = struct(
  n0,
  _IJSn,
  0,
  [_kBI, _dSI, _iJI, _d, _st, _sA, _uA, _sta],
  [0, 0, 0, 0, 0, 5, 5, () => IngestionJobStatistics]
);
export var ListIngestionJobsRequest = struct(
  n0,
  _LIJR,
  0,
  [_kBI, _dSI, _f, _sB, _mR, _nT],
  [[0, 1], [0, 1], () => IngestionJobFilters, () => IngestionJobSortBy, 1, 0]
);
export var ListIngestionJobsResponse = struct(n0, _LIJRi, 0, [_iJS, _nT], [() => IngestionJobSummaries, 0]);
export var StartIngestionJobRequest = struct(n0, _SIJR, 0, [_kBI, _dSI, _cT, _d], [[0, 1], [0, 1], [0, 4], 0]);
export var StartIngestionJobResponse = struct(n0, _SIJRt, 0, [_iJ], [() => IngestionJob]);
export var StopIngestionJobRequest = struct(
  n0,
  _SIJRto,
  0,
  [_kBI, _dSI, _iJI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StopIngestionJobResponse = struct(n0, _SIJRtop, 0, [_iJ], [() => IngestionJob]);
export var IngestionJobFilters = list(n0, _IJFn, 0, () => IngestionJobFilter);
export var IngestionJobFilterValues = 64 | 0;

export var IngestionJobSummaries = list(n0, _IJSng, 0, () => IngestionJobSummary);
export var GetIngestionJob = op(
  n0,
  _GIJ,
  {
    [_h]: ["GET", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}", 200],
  },
  () => GetIngestionJobRequest,
  () => GetIngestionJobResponse
);
export var ListIngestionJobs = op(
  n0,
  _LIJ,
  {
    [_h]: ["POST", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/", 200],
  },
  () => ListIngestionJobsRequest,
  () => ListIngestionJobsResponse
);
export var StartIngestionJob = op(
  n0,
  _SIJ,
  {
    [_h]: ["PUT", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/", 202],
  },
  () => StartIngestionJobRequest,
  () => StartIngestionJobResponse
);
export var StopIngestionJob = op(
  n0,
  _SIJt,
  {
    [_h]: [
      "POST",
      "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}/stop",
      202,
    ],
  },
  () => StopIngestionJobRequest,
  () => StopIngestionJobResponse
);
