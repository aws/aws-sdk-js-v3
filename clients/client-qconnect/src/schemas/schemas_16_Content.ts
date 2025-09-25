// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cA,
  _CCo,
  _cCon,
  _cI,
  _Co,
  _co,
  _CSL,
  _CSo,
  _cSo,
  _cSont,
  _cT,
  _cTr,
  _ESC,
  _eSC,
  _GCS,
  _GCSR,
  _GCSRe,
  _hQ,
  _htt,
  _iI,
  _iJI,
  _IJL,
  _IJS,
  _iJS,
  _iJT,
  _kBA,
  _kBI,
  _LC,
  _LCR,
  _LCRi,
  _LIJ,
  _LIJR,
  _LIJRi,
  _lMT,
  _me,
  _mR,
  _n,
  _nT,
  _rI,
  _s,
  _SCe,
  _SCR,
  _SCRe,
  _sE,
  _so,
  _ta,
  _ti,
  _uI,
  n0,
} from "./schemas_0";
import { SearchExpression } from "./schemas_2_Search";

/* eslint no-var: 0 */

export var ConnectConfiguration = struct(n0, _CCo, 0, [_iI], [0]);
export var ContentSummary = struct(
  n0,
  _CSo,
  0,
  [_cA, _cI, _kBA, _kBI, _n, _rI, _ti, _cT, _s, _me, _ta],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 128 | 0]
);
export var ExternalSourceConfiguration = struct(n0, _ESC, 0, [_so, _co], [0, () => Configuration]);
export var GetContentSummaryRequest = struct(
  n0,
  _GCSR,
  0,
  [_cI, _kBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetContentSummaryResponse = struct(n0, _GCSRe, 0, [_cSo], [() => ContentSummary]);
export var ImportJobSummary = struct(
  n0,
  _IJS,
  0,
  [_iJI, _kBI, _uI, _kBA, _iJT, _s, _cTr, _lMT, _me, _eSC],
  [0, 0, 0, 0, 0, 0, 7, 7, 128 | 0, () => ExternalSourceConfiguration]
);
export var ListContentsRequest = struct(
  n0,
  _LCR,
  0,
  [_nT, _mR, _kBI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListContentsResponse = struct(n0, _LCRi, 0, [_cSont, _nT], [() => ContentSummaryList, 0]);
export var ListImportJobsRequest = struct(
  n0,
  _LIJR,
  0,
  [_nT, _mR, _kBI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListImportJobsResponse = struct(n0, _LIJRi, 0, [_iJS, _nT], [() => ImportJobList, 0]);
export var SearchContentRequest = struct(
  n0,
  _SCR,
  0,
  [_nT, _mR, _kBI, _sE],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    () => SearchExpression,
  ]
);
export var SearchContentResponse = struct(n0, _SCRe, 0, [_cSont, _nT], [() => ContentSummaryList, 0]);
export var ContentSummaryList = list(n0, _CSL, 0, () => ContentSummary);
export var ImportJobList = list(n0, _IJL, 0, () => ImportJobSummary);
export var ContentMetadata = 128 | 0;

export var Configuration = uni(n0, _Co, 0, [_cCon], [() => ConnectConfiguration]);
export var GetContentSummary = op(
  n0,
  _GCS,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary", 200],
  },
  () => GetContentSummaryRequest,
  () => GetContentSummaryResponse
);
export var ListContents = op(
  n0,
  _LC,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents", 200],
  },
  () => ListContentsRequest,
  () => ListContentsResponse
);
export var ListImportJobs = op(
  n0,
  _LIJ,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/importJobs", 200],
  },
  () => ListImportJobsRequest,
  () => ListImportJobsResponse
);
export var SearchContent = op(
  n0,
  _SCe,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/search", 200],
  },
  () => SearchContentRequest,
  () => SearchContentResponse
);
