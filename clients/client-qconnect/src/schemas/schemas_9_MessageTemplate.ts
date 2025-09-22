// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AFN,
  _aIt,
  _aNI,
  _at,
  _att,
  _attr,
  _b,
  _cA,
  _CCR,
  _CCr,
  _CCRr,
  _CD,
  _cD,
  _cI,
  _CMTA,
  _CMTAR,
  _CMTARr,
  _con,
  _cT,
  _cTl,
  _cTr,
  _eSC,
  _fRR,
  _GCe,
  _GCR,
  _GCRe,
  _GIJ,
  _GIJR,
  _GIJRe,
  _hTI,
  _htt,
  _iJ,
  _IJD,
  _iJI,
  _iJT,
  _kBA,
  _kBI,
  _lMT,
  _lOU,
  _me,
  _MTA,
  _MTAKL,
  _MTAL,
  _mTI,
  _n,
  _oLOU,
  _pUTTL,
  _rI,
  _RMT,
  _RMTR,
  _RMTRe,
  _s,
  _SCU,
  _SCUR,
  _SCURt,
  _SIJ,
  _SIJR,
  _SIJRt,
  _ta,
  _ti,
  _U,
  _u,
  _uE,
  _uI,
  _uT,
  n0,
} from "./schemas_0";
import {
  MessageTemplateAttributes,
  MessageTemplateContentProvider,
  NonEmptyUnlimitedString,
} from "./schemas_11_MessageTemplate";
import { ExternalSourceConfiguration } from "./schemas_16_Content";

/* eslint no-var: 0 */

export var AttachmentFileName = sim(n0, _AFN, 0, 8);
export var Url = sim(n0, _U, 0, 8);
export var ContentData = struct(
  n0,
  _CD,
  0,
  [_cA, _cI, _kBA, _kBI, _n, _rI, _ti, _cT, _s, _me, _ta, _lOU, _u, _uE],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, 128 | 0, 0, [() => Url, 0], 7]
);
export var CreateContentRequest = struct(
  n0,
  _CCR,
  0,
  [_kBI, _n, _ti, _oLOU, _me, _uI, _cTl, _ta],
  [[0, 1], 0, 0, 0, 128 | 0, 0, [0, 4], 128 | 0]
);
export var CreateContentResponse = struct(n0, _CCRr, 0, [_con], [[() => ContentData, 0]]);
export var CreateMessageTemplateAttachmentRequest = struct(
  n0,
  _CMTAR,
  0,
  [_kBI, _mTI, _cD, _n, _b, _cTl],
  [[0, 1], [0, 1], 0, [() => AttachmentFileName, 0], [() => NonEmptyUnlimitedString, 0], 0]
);
export var CreateMessageTemplateAttachmentResponse = struct(
  n0,
  _CMTARr,
  0,
  [_at],
  [[() => MessageTemplateAttachment, 0]]
);
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
export var GetContentResponse = struct(n0, _GCRe, 0, [_con], [[() => ContentData, 0]]);
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
export var MessageTemplateAttachment = struct(
  n0,
  _MTA,
  0,
  [_cD, _n, _uT, _u, _uE, _aIt],
  [0, [() => AttachmentFileName, 0], 5, [() => Url, 0], 5, 0]
);
export var RenderMessageTemplateRequest = struct(
  n0,
  _RMTR,
  0,
  [_kBI, _mTI, _attr],
  [
    [0, 1],
    [0, 1],
    [() => MessageTemplateAttributes, 0],
  ]
);
export var RenderMessageTemplateResponse = struct(
  n0,
  _RMTRe,
  0,
  [_con, _aNI, _att],
  [
    [() => MessageTemplateContentProvider, 0],
    [() => MessageTemplateAttributeKeyList, 0],
    [() => MessageTemplateAttachmentList, 0],
  ]
);
export var StartContentUploadRequest = struct(n0, _SCUR, 0, [_kBI, _cT, _pUTTL], [[0, 1], 0, 1]);
export var StartContentUploadResponse = struct(n0, _SCURt, 0, [_uI, _u, _uE, _hTI], [0, [() => Url, 0], 7, 128 | 0]);
export var StartImportJobRequest = struct(
  n0,
  _SIJR,
  0,
  [_kBI, _iJT, _uI, _cTl, _me, _eSC],
  [[0, 1], 0, 0, [0, 4], 128 | 0, () => ExternalSourceConfiguration]
);
export var StartImportJobResponse = struct(n0, _SIJRt, 0, [_iJ], [[() => ImportJobData, 0]]);
export var MessageTemplateAttachmentList = list(n0, _MTAL, 0, [() => MessageTemplateAttachment, 0]);
export var MessageTemplateAttributeKeyList = list(n0, _MTAKL, 8, 0);
export var Headers = 128 | 0;

export var CreateContent = op(
  n0,
  _CCr,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/contents", 200],
  },
  () => CreateContentRequest,
  () => CreateContentResponse
);
export var CreateMessageTemplateAttachment = op(
  n0,
  _CMTA,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments", 200],
  },
  () => CreateMessageTemplateAttachmentRequest,
  () => CreateMessageTemplateAttachmentResponse
);
export var GetContent = op(
  n0,
  _GCe,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}", 200],
  },
  () => GetContentRequest,
  () => GetContentResponse
);
export var GetImportJob = op(
  n0,
  _GIJ,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}", 200],
  },
  () => GetImportJobRequest,
  () => GetImportJobResponse
);
export var RenderMessageTemplate = op(
  n0,
  _RMT,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/render", 200],
  },
  () => RenderMessageTemplateRequest,
  () => RenderMessageTemplateResponse
);
export var StartContentUpload = op(
  n0,
  _SCU,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/upload", 200],
  },
  () => StartContentUploadRequest,
  () => StartContentUploadResponse
);
export var StartImportJob = op(
  n0,
  _SIJ,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/importJobs", 200],
  },
  () => StartImportJobRequest,
  () => StartImportJobResponse
);
