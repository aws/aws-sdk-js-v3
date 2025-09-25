// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cA,
  _CC,
  _cC,
  _CD,
  _cI,
  _Co,
  _co,
  _con,
  _CS,
  _cS,
  _cT,
  _cTr,
  _ESC,
  _eSC,
  _fRR,
  _GCe,
  _GCR,
  _GCRe,
  _GCS,
  _GCSR,
  _GCSRe,
  _GIJ,
  _GIJR,
  _GIJRe,
  _ht,
  _iI,
  _iJ,
  _IJD,
  _iJI,
  _iJT,
  _kBA,
  _kBI,
  _lMT,
  _lOU,
  _me,
  _n,
  _oLOU,
  _rI,
  _rOLOU,
  _s,
  _so,
  _t,
  _ti,
  _u,
  _UC,
  _UCR,
  _UCRp,
  _uE,
  _uI,
  n0,
} from "./schemas_0";
import { Url } from "./schemas_19_Content";

/* eslint no-var: 0 */

export var ConnectConfiguration = struct(n0, _CC, 0, [_iI], [0]);
export var ContentData = struct(
  n0,
  _CD,
  0,
  [_cA, _cI, _kBA, _kBI, _n, _rI, _ti, _cT, _s, _me, _t, _lOU, _u, _uE],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 128 | 0, 0, [() => Url, 0], 7]
);
export var ContentSummary = struct(
  n0,
  _CS,
  0,
  [_cA, _cI, _kBA, _kBI, _n, _rI, _ti, _cT, _s, _me, _t],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 128 | 0]
);
export var ExternalSourceConfiguration = struct(n0, _ESC, 0, [_so, _con], [0, () => Configuration]);
export var GetContentRequest = struct(
  n0,
  _GCR,
  0,
  [_cI, _kBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetContentResponse = struct(n0, _GCRe, 0, [_co], [[() => ContentData, 0]]);
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
export var GetContentSummaryResponse = struct(n0, _GCSRe, 0, [_cS], [() => ContentSummary]);
export var GetImportJobRequest = struct(
  n0,
  _GIJR,
  0,
  [_iJI, _kBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetImportJobResponse = struct(n0, _GIJRe, 0, [_iJ], [[() => ImportJobData, 0]]);
export var ImportJobData = struct(
  n0,
  _IJD,
  0,
  [_iJI, _kBI, _uI, _kBA, _iJT, _s, _u, _fRR, _uE, _cTr, _lMT, _me, _eSC],
  [0, 0, 0, 0, 0, 0, [() => Url, 0], [() => Url, 0], 7, 7, 7, 128 | 0, () => ExternalSourceConfiguration]
);
export var UpdateContentRequest = struct(
  n0,
  _UCR,
  0,
  [_kBI, _cI, _rI, _ti, _oLOU, _rOLOU, _me, _uI],
  [[0, 1], [0, 1], 0, 0, 0, 2, 128 | 0, 0]
);
export var UpdateContentResponse = struct(n0, _UCRp, 0, [_co], [[() => ContentData, 0]]);
export var ContentMetadata = 128 | 0;

export var Configuration = uni(n0, _Co, 0, [_cC], [() => ConnectConfiguration]);
export var GetContent = op(
  n0,
  _GCe,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}", 200],
  },
  () => GetContentRequest,
  () => GetContentResponse
);
export var GetContentSummary = op(
  n0,
  _GCS,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary", 200],
  },
  () => GetContentSummaryRequest,
  () => GetContentSummaryResponse
);
export var GetImportJob = op(
  n0,
  _GIJ,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}", 200],
  },
  () => GetImportJobRequest,
  () => GetImportJobResponse
);
export var UpdateContent = op(
  n0,
  _UC,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}", 200],
  },
  () => UpdateContentRequest,
  () => UpdateContentResponse
);
