// smithy-typescript generated code
import { error, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _a,
  _AAID,
  _aAs,
  _aI,
  _as,
  _aT,
  _c,
  _CAA,
  _CAAR,
  _CAARr,
  _CAR,
  _CAr,
  _CARr,
  _CCR,
  _CCr,
  _CCRr,
  _CE,
  _ch,
  _CKB,
  _CKBR,
  _CKBRr,
  _co,
  _CQR,
  _CQRR,
  _CQRRr,
  _CSR,
  _CSr,
  _CSRr,
  _cT,
  _cTl,
  _d,
  _DIJ,
  _DIJR,
  _DIJRe,
  _DKB,
  _DKBR,
  _DKBRe,
  _e,
  _eSC,
  _gC,
  _hE,
  _ht,
  _iA,
  _iJ,
  _iJI,
  _iJT,
  _kB,
  _kBI,
  _kBT,
  _l,
  _m,
  _me,
  _n,
  _oLOU,
  _qR,
  _QRDP,
  _qRI,
  _rC,
  _rD,
  _rGC,
  _rSK,
  _sC,
  _se,
  _SIJ,
  _SIJR,
  _SIJRt,
  _sK,
  _SQEE,
  _sSEC,
  _t,
  _ti,
  _ty,
  _uI,
  _UQR,
  _UQRR,
  _UQRRp,
  n0,
} from "./schemas_0";
import { Channels, GroupingConfiguration, QuickResponseContent, QuickResponseData } from "./schemas_3_Quick";
import {
  AssistantData,
  KnowledgeBaseData,
  RenderingConfiguration,
  ServerSideEncryptionConfiguration,
  SessionData,
  SourceConfiguration,
} from "./schemas_4_Knowledge";
import { ContentData, ExternalSourceConfiguration, ImportJobData } from "./schemas_5_Content";
import { AssistantAssociationData } from "./schemas_10_Assistant";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateAssistantAssociationRequest = struct(
  n0,
  _CAAR,
  0,
  [_aI, _aT, _a, _cTl, _t],
  [[0, 1], 0, () => AssistantAssociationInputData, [0, 4], 128 | 0]
);
export var CreateAssistantAssociationResponse = struct(n0, _CAARr, 0, [_aAs], [() => AssistantAssociationData]);
export var CreateAssistantRequest = struct(
  n0,
  _CAR,
  0,
  [_cTl, _n, _ty, _d, _t, _sSEC],
  [[0, 4], 0, 0, 0, 128 | 0, () => ServerSideEncryptionConfiguration]
);
export var CreateAssistantResponse = struct(n0, _CARr, 0, [_as], [() => AssistantData]);
export var CreateContentRequest = struct(
  n0,
  _CCR,
  0,
  [_kBI, _n, _ti, _oLOU, _me, _uI, _cTl, _t],
  [[0, 1], 0, 0, 0, 128 | 0, 0, [0, 4], 128 | 0]
);
export var CreateContentResponse = struct(n0, _CCRr, 0, [_co], [[() => ContentData, 0]]);
export var CreateKnowledgeBaseRequest = struct(
  n0,
  _CKBR,
  0,
  [_cTl, _n, _kBT, _sC, _rC, _sSEC, _d, _t],
  [
    [0, 4],
    0,
    0,
    () => SourceConfiguration,
    () => RenderingConfiguration,
    () => ServerSideEncryptionConfiguration,
    0,
    128 | 0,
  ]
);
export var CreateKnowledgeBaseResponse = struct(n0, _CKBRr, 0, [_kB], [() => KnowledgeBaseData]);
export var CreateQuickResponseRequest = struct(
  n0,
  _CQRR,
  0,
  [_kBI, _n, _co, _cT, _gC, _d, _sK, _iA, _ch, _l, _cTl, _t],
  [
    [0, 1],
    0,
    [() => QuickResponseDataProvider, 0],
    0,
    [() => GroupingConfiguration, 0],
    0,
    0,
    2,
    [() => Channels, 0],
    0,
    [0, 4],
    128 | 0,
  ]
);
export var CreateQuickResponseResponse = struct(n0, _CQRRr, 0, [_qR], [[() => QuickResponseData, 0]]);
export var CreateSessionRequest = struct(n0, _CSR, 0, [_cTl, _aI, _n, _d, _t], [[0, 4], [0, 1], 0, 0, 128 | 0]);
export var CreateSessionResponse = struct(n0, _CSRr, 0, [_se], [() => SessionData]);
export var DeleteImportJobRequest = struct(
  n0,
  _DIJR,
  0,
  [_kBI, _iJI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteImportJobResponse = struct(n0, _DIJRe, 0, [], []);
export var DeleteKnowledgeBaseRequest = struct(n0, _DKBR, 0, [_kBI], [[0, 1]]);
export var DeleteKnowledgeBaseResponse = struct(n0, _DKBRe, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var StartImportJobRequest = struct(
  n0,
  _SIJR,
  0,
  [_kBI, _iJT, _uI, _cTl, _me, _eSC],
  [[0, 1], 0, 0, [0, 4], 128 | 0, () => ExternalSourceConfiguration]
);
export var StartImportJobResponse = struct(n0, _SIJRt, 0, [_iJ], [[() => ImportJobData, 0]]);
export var UpdateQuickResponseRequest = struct(
  n0,
  _UQRR,
  0,
  [_kBI, _qRI, _n, _co, _cT, _gC, _rGC, _d, _rD, _sK, _rSK, _iA, _ch, _l],
  [
    [0, 1],
    [0, 1],
    0,
    [() => QuickResponseDataProvider, 0],
    0,
    [() => GroupingConfiguration, 0],
    2,
    0,
    2,
    0,
    2,
    2,
    [() => Channels, 0],
    0,
  ]
);
export var UpdateQuickResponseResponse = struct(n0, _UQRRp, 0, [_qR], [[() => QuickResponseData, 0]]);
export var AssistantAssociationInputData = uni(n0, _AAID, 0, [_kBI], [0]);
export var QuickResponseDataProvider = uni(n0, _QRDP, 0, [_co], [[() => QuickResponseContent, 0]]);
export var CreateAssistant = op(
  n0,
  _CAr,
  {
    [_ht]: ["POST", "/assistants", 200],
  },
  () => CreateAssistantRequest,
  () => CreateAssistantResponse
);
export var CreateAssistantAssociation = op(
  n0,
  _CAA,
  {
    [_ht]: ["POST", "/assistants/{assistantId}/associations", 200],
  },
  () => CreateAssistantAssociationRequest,
  () => CreateAssistantAssociationResponse
);
export var CreateContent = op(
  n0,
  _CCr,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/contents", 200],
  },
  () => CreateContentRequest,
  () => CreateContentResponse
);
export var CreateKnowledgeBase = op(
  n0,
  _CKB,
  {
    [_ht]: ["POST", "/knowledgeBases", 200],
  },
  () => CreateKnowledgeBaseRequest,
  () => CreateKnowledgeBaseResponse
);
export var CreateQuickResponse = op(
  n0,
  _CQR,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/quickResponses", 200],
  },
  () => CreateQuickResponseRequest,
  () => CreateQuickResponseResponse
);
export var CreateSession = op(
  n0,
  _CSr,
  {
    [_ht]: ["POST", "/assistants/{assistantId}/sessions", 200],
  },
  () => CreateSessionRequest,
  () => CreateSessionResponse
);
export var DeleteImportJob = op(
  n0,
  _DIJ,
  {
    [_ht]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}", 204],
  },
  () => DeleteImportJobRequest,
  () => DeleteImportJobResponse
);
export var DeleteKnowledgeBase = op(
  n0,
  _DKB,
  {
    [_ht]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}", 204],
  },
  () => DeleteKnowledgeBaseRequest,
  () => DeleteKnowledgeBaseResponse
);
export var StartImportJob = op(
  n0,
  _SIJ,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/importJobs", 200],
  },
  () => StartImportJobRequest,
  () => StartImportJobResponse
);
export var UpdateQuickResponse = op(
  n0,
  _UQR,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}", 200],
  },
  () => UpdateQuickResponseRequest,
  () => UpdateQuickResponseResponse
);
