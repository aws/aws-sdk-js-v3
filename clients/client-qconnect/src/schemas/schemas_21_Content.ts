// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aCGA,
  _ACGAD,
  _aD,
  _aT,
  _cA,
  _cAA,
  _CAC,
  _CAD,
  _cAI,
  _cAo,
  _CAS,
  _cAS,
  _CASL,
  _CCA,
  _CCAR,
  _CCARr,
  _cI,
  _cTl,
  _fI,
  _GCA,
  _GCAR,
  _GCARe,
  _hQ,
  _htt,
  _kBA,
  _kBI,
  _LCA,
  _LCAR,
  _LCARi,
  _mR,
  _nT,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AmazonConnectGuideAssociationData = struct(n0, _ACGAD, 0, [_fI], [0]);
export var ContentAssociationData = struct(
  n0,
  _CAD,
  0,
  [_kBI, _kBA, _cI, _cA, _cAI, _cAA, _aT, _aD, _ta],
  [0, 0, 0, 0, 0, 0, 0, () => ContentAssociationContents, 128 | 0]
);
export var ContentAssociationSummary = struct(
  n0,
  _CAS,
  0,
  [_kBI, _kBA, _cI, _cA, _cAI, _cAA, _aT, _aD, _ta],
  [0, 0, 0, 0, 0, 0, 0, () => ContentAssociationContents, 128 | 0]
);
export var CreateContentAssociationRequest = struct(
  n0,
  _CCAR,
  0,
  [_cTl, _kBI, _cI, _aT, _a, _ta],
  [[0, 4], [0, 1], [0, 1], 0, () => ContentAssociationContents, 128 | 0]
);
export var CreateContentAssociationResponse = struct(n0, _CCARr, 0, [_cAo], [() => ContentAssociationData]);
export var GetContentAssociationRequest = struct(
  n0,
  _GCAR,
  0,
  [_kBI, _cI, _cAI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetContentAssociationResponse = struct(n0, _GCARe, 0, [_cAo], [() => ContentAssociationData]);
export var ListContentAssociationsRequest = struct(
  n0,
  _LCAR,
  0,
  [_nT, _mR, _kBI, _cI],
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
    [0, 1],
  ]
);
export var ListContentAssociationsResponse = struct(
  n0,
  _LCARi,
  0,
  [_cAS, _nT],
  [() => ContentAssociationSummaryList, 0]
);
export var ContentAssociationSummaryList = list(n0, _CASL, 0, () => ContentAssociationSummary);
export var ContentAssociationContents = uni(n0, _CAC, 0, [_aCGA], [() => AmazonConnectGuideAssociationData]);
export var CreateContentAssociation = op(
  n0,
  _CCA,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations", 200],
  },
  () => CreateContentAssociationRequest,
  () => CreateContentAssociationResponse
);
export var GetContentAssociation = op(
  n0,
  _GCA,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}", 200],
  },
  () => GetContentAssociationRequest,
  () => GetContentAssociationResponse
);
export var ListContentAssociations = op(
  n0,
  _LCA,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations", 200],
  },
  () => ListContentAssociationsRequest,
  () => ListContentAssociationsResponse
);
