// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { PreconditionFailedException as __PreconditionFailedException } from "../models/index";
import {
  _aFl,
  _aI,
  _aItt,
  _aNI,
  _aTt,
  _att,
  _attr,
  _bR,
  _C,
  _c,
  _CA,
  _CAK,
  _cCo,
  _CCon,
  _Ch,
  _ch,
  _cI,
  _CMTV,
  _CMTVR,
  _CMTVRr,
  _co,
  _con,
  _cont,
  _CQR,
  _CQRR,
  _CQRRr,
  _cSh,
  _cT,
  _cTl,
  _cTr,
  _d,
  _dA,
  _e,
  _EMTD,
  _fi,
  _gC,
  _gFM,
  _GMT,
  _GMTR,
  _GMTRe,
  _GQR,
  _GQRR,
  _GQRRe,
  _hE,
  _hQ,
  _htt,
  _iA,
  _iNE,
  _iT,
  _kBA,
  _kBI,
  _la,
  _lMB,
  _lMT,
  _LMTV,
  _LMTVR,
  _LMTVRi,
  _LQR,
  _LQRR,
  _LQRRi,
  _m,
  _ma,
  _MC,
  _me,
  _MI,
  _mR,
  _mTA,
  _mTCS,
  _mTe,
  _MTFF,
  _MTFFL,
  _mTI,
  _MTOF,
  _MTQF,
  _MTQFL,
  _MTSE,
  _MTSRD,
  _MTSRL,
  _MTVS,
  _mTVS,
  _MTVSL,
  _n,
  _nMT,
  _nT,
  _oLOU,
  _oOF,
  _op,
  _or,
  _PFE,
  _pr,
  _pTl,
  _q,
  _qR,
  _qRA,
  _QRC,
  _QRCP,
  _QRCu,
  _QRD,
  _QRDP,
  _QRFF,
  _QRFFL,
  _qRI,
  _QROF,
  _QRQF,
  _QRQFL,
  _QRS,
  _qRS,
  _QRSE,
  _QRSL,
  _QRSRD,
  _QRSRL,
  _rDe,
  _resu,
  _rGC,
  _rI,
  _rMI,
  _rOLOU,
  _rSK,
  _s,
  _sE,
  _sI,
  _sK,
  _SM,
  _SMR,
  _SMRe,
  _SMT,
  _SMTR,
  _SMTRe,
  _SQR,
  _SQRR,
  _SQRRe,
  _SSCH,
  _sSCH,
  _SSCHL,
  _t,
  _ta,
  _ti,
  _tN,
  _UCp,
  _UCR,
  _UCRp,
  _uI,
  _UQR,
  _UQRR,
  _UQRRp,
  _v,
  _va,
  _vN,
  n0,
} from "./schemas_0";
import { MessageData, SensitiveString } from "./schemas_5_Message";
import { ContentData, MessageTemplateAttachmentList } from "./schemas_9_MessageTemplate";
import { MessageTemplateAttributes, MessageTemplateContentProvider } from "./schemas_11_MessageTemplate";
import { GroupingConfiguration } from "./schemas_19_Message";

/* eslint no-var: 0 */

export var Channel = sim(n0, _C, 0, 8);
export var QuickResponseContent = sim(n0, _QRC, 0, 8);
export var ConversationContext = struct(n0, _CCon, 0, [_sSCH], [[() => SelfServiceConversationHistoryList, 0]]);
export var CreateMessageTemplateVersionRequest = struct(n0, _CMTVR, 0, [_kBI, _mTI, _mTCS], [[0, 1], [0, 1], 0]);
export var CreateMessageTemplateVersionResponse = struct(
  n0,
  _CMTVRr,
  0,
  [_mTe],
  [[() => ExtendedMessageTemplateData, 0]]
);
export var CreateQuickResponseRequest = struct(
  n0,
  _CQRR,
  0,
  [_kBI, _n, _con, _cT, _gC, _d, _sK, _iA, _ch, _la, _cTl, _ta],
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
export var ExtendedMessageTemplateData = struct(
  n0,
  _EMTD,
  0,
  [_mTA, _mTI, _kBA, _kBI, _n, _cSh, _cTr, _lMT, _lMB, _con, _d, _la, _gC, _dA, _aTt, _att, _iA, _vN, _mTCS, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    [() => MessageTemplateContentProvider, 0],
    0,
    0,
    [() => GroupingConfiguration, 0],
    [() => MessageTemplateAttributes, 0],
    64 | 0,
    [() => MessageTemplateAttachmentList, 0],
    2,
    1,
    0,
    128 | 0,
  ]
);
export var GetMessageTemplateRequest = struct(
  n0,
  _GMTR,
  0,
  [_mTI, _kBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetMessageTemplateResponse = struct(n0, _GMTRe, 0, [_mTe], [[() => ExtendedMessageTemplateData, 0]]);
export var GetQuickResponseRequest = struct(
  n0,
  _GQRR,
  0,
  [_qRI, _kBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetQuickResponseResponse = struct(n0, _GQRRe, 0, [_qR], [[() => QuickResponseData, 0]]);
export var ListMessageTemplateVersionsRequest = struct(
  n0,
  _LMTVR,
  0,
  [_kBI, _mTI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
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
  ]
);
export var ListMessageTemplateVersionsResponse = struct(
  n0,
  _LMTVRi,
  0,
  [_mTVS, _nT],
  [() => MessageTemplateVersionSummaryList, 0]
);
export var ListQuickResponsesRequest = struct(
  n0,
  _LQRR,
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
export var ListQuickResponsesResponse = struct(n0, _LQRRi, 0, [_qRS, _nT], [[() => QuickResponseSummaryList, 0], 0]);
export var MessageConfiguration = struct(n0, _MC, 0, [_gFM], [2]);
export var MessageInput = struct(n0, _MI, 0, [_v], [[() => MessageData, 0]]);
export var MessageTemplateFilterField = struct(n0, _MTFF, 0, [_n, _va, _op, _iNE], [0, 64 | 0, 0, 2]);
export var MessageTemplateOrderField = struct(n0, _MTOF, 0, [_n, _or], [0, 0]);
export var MessageTemplateQueryField = struct(n0, _MTQF, 0, [_n, _va, _op, _aFl, _pr], [0, 64 | 0, 0, 2, 0]);
export var MessageTemplateSearchExpression = struct(
  n0,
  _MTSE,
  0,
  [_q, _fi, _oOF],
  [() => MessageTemplateQueryFieldList, () => MessageTemplateFilterFieldList, () => MessageTemplateOrderField]
);
export var MessageTemplateSearchResultData = struct(
  n0,
  _MTSRD,
  0,
  [_mTA, _mTI, _kBA, _kBI, _n, _cSh, _cTr, _lMT, _lMB, _iA, _vN, _d, _gC, _la, _ta],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, 2, 1, 0, [() => GroupingConfiguration, 0], 0, 128 | 0]
);
export var MessageTemplateVersionSummary = struct(
  n0,
  _MTVS,
  0,
  [_mTA, _mTI, _kBA, _kBI, _n, _cSh, _iA, _vN],
  [0, 0, 0, 0, 0, 0, 2, 1]
);
export var PreconditionFailedException = error(
  n0,
  _PFE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_m],
  [0],

  __PreconditionFailedException
);
export var QuickResponseContents = struct(
  n0,
  _QRCu,
  0,
  [_pTl, _ma],
  [
    [() => QuickResponseContentProvider, 0],
    [() => QuickResponseContentProvider, 0],
  ]
);
export var QuickResponseData = struct(
  n0,
  _QRD,
  0,
  [_qRA, _qRI, _kBA, _kBI, _n, _cT, _s, _cTr, _lMT, _cont, _d, _gC, _sK, _lMB, _iA, _ch, _la, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    7,
    7,
    [() => QuickResponseContents, 0],
    0,
    [() => GroupingConfiguration, 0],
    0,
    0,
    2,
    [() => Channels, 0],
    0,
    128 | 0,
  ]
);
export var QuickResponseFilterField = struct(n0, _QRFF, 0, [_n, _va, _op, _iNE], [0, 64 | 0, 0, 2]);
export var QuickResponseOrderField = struct(n0, _QROF, 0, [_n, _or], [0, 0]);
export var QuickResponseQueryField = struct(n0, _QRQF, 0, [_n, _va, _op, _aFl, _pr], [0, 64 | 0, 0, 2, 0]);
export var QuickResponseSearchExpression = struct(
  n0,
  _QRSE,
  0,
  [_q, _fi, _oOF],
  [() => QuickResponseQueryFieldList, () => QuickResponseFilterFieldList, () => QuickResponseOrderField]
);
export var QuickResponseSearchResultData = struct(
  n0,
  _QRSRD,
  0,
  [_qRA, _qRI, _kBA, _kBI, _n, _cT, _s, _cont, _cTr, _lMT, _iA, _d, _gC, _sK, _lMB, _ch, _la, _aNI, _aItt, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => QuickResponseContents, 0],
    7,
    7,
    2,
    0,
    [() => GroupingConfiguration, 0],
    0,
    0,
    [() => Channels, 0],
    0,
    [() => ContactAttributeKeys, 0],
    [() => ContactAttributeKeys, 0],
    128 | 0,
  ]
);
export var QuickResponseSummary = struct(
  n0,
  _QRS,
  0,
  [_qRA, _qRI, _kBA, _kBI, _n, _cT, _s, _cTr, _lMT, _d, _lMB, _iA, _ch, _ta],
  [0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 2, [() => Channels, 0], 128 | 0]
);
export var SearchMessageTemplatesRequest = struct(
  n0,
  _SMTR,
  0,
  [_kBI, _sE, _nT, _mR],
  [
    [0, 1],
    () => MessageTemplateSearchExpression,
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
  ]
);
export var SearchMessageTemplatesResponse = struct(
  n0,
  _SMTRe,
  0,
  [_resu, _nT],
  [[() => MessageTemplateSearchResultsList, 0], 0]
);
export var SearchQuickResponsesRequest = struct(
  n0,
  _SQRR,
  0,
  [_kBI, _sE, _nT, _mR, _attr],
  [
    [0, 1],
    () => QuickResponseSearchExpression,
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
    [() => ContactAttributes, 0],
  ]
);
export var SearchQuickResponsesResponse = struct(
  n0,
  _SQRRe,
  0,
  [_resu, _nT],
  [[() => QuickResponseSearchResultsList, 0], 0]
);
export var SelfServiceConversationHistory = struct(
  n0,
  _SSCH,
  0,
  [_tN, _iT, _bR],
  [1, [() => SensitiveString, 0], [() => SensitiveString, 0]]
);
export var SendMessageRequest = struct(
  n0,
  _SMR,
  0,
  [_aI, _sI, _t, _m, _cCo, _co, _cTl],
  [[0, 1], [0, 1], 0, [() => MessageInput, 0], [() => ConversationContext, 0], () => MessageConfiguration, [0, 4]]
);
export var SendMessageResponse = struct(n0, _SMRe, 0, [_rMI, _co, _nMT], [0, () => MessageConfiguration, 0]);
export var UpdateContentRequest = struct(
  n0,
  _UCR,
  0,
  [_kBI, _cI, _rI, _ti, _oLOU, _rOLOU, _me, _uI],
  [[0, 1], [0, 1], 0, 0, 0, 2, 128 | 0, 0]
);
export var UpdateContentResponse = struct(n0, _UCRp, 0, [_con], [[() => ContentData, 0]]);
export var UpdateQuickResponseRequest = struct(
  n0,
  _UQRR,
  0,
  [_kBI, _qRI, _n, _con, _cT, _gC, _rGC, _d, _rDe, _sK, _rSK, _iA, _ch, _la],
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
export var Channels = list(n0, _Ch, 0, [() => Channel, 0]);
export var ContactAttributeKeys = list(n0, _CAK, 8, 0);
export var MessageTemplateFilterFieldList = list(n0, _MTFFL, 0, () => MessageTemplateFilterField);
export var MessageTemplateFilterValueList = 64 | 0;

export var MessageTemplateQueryFieldList = list(n0, _MTQFL, 0, () => MessageTemplateQueryField);
export var MessageTemplateQueryValueList = 64 | 0;

export var MessageTemplateSearchResultsList = list(n0, _MTSRL, 0, [() => MessageTemplateSearchResultData, 0]);
export var MessageTemplateVersionSummaryList = list(n0, _MTVSL, 0, () => MessageTemplateVersionSummary);
export var QuickResponseFilterFieldList = list(n0, _QRFFL, 0, () => QuickResponseFilterField);
export var QuickResponseFilterValueList = 64 | 0;

export var QuickResponseQueryFieldList = list(n0, _QRQFL, 0, () => QuickResponseQueryField);
export var QuickResponseQueryValueList = 64 | 0;

export var QuickResponseSearchResultsList = list(n0, _QRSRL, 0, [() => QuickResponseSearchResultData, 0]);
export var QuickResponseSummaryList = list(n0, _QRSL, 0, [() => QuickResponseSummary, 0]);
export var SelfServiceConversationHistoryList = list(n0, _SSCHL, 0, [() => SelfServiceConversationHistory, 0]);
export var ContactAttributes = map(n0, _CA, 8, 0, 0);
export var QuickResponseContentProvider = uni(n0, _QRCP, 0, [_con], [[() => QuickResponseContent, 0]]);
export var QuickResponseDataProvider = uni(n0, _QRDP, 0, [_con], [[() => QuickResponseContent, 0]]);
export var CreateMessageTemplateVersion = op(
  n0,
  _CMTV,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions", 200],
  },
  () => CreateMessageTemplateVersionRequest,
  () => CreateMessageTemplateVersionResponse
);
export var CreateQuickResponse = op(
  n0,
  _CQR,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/quickResponses", 200],
  },
  () => CreateQuickResponseRequest,
  () => CreateQuickResponseResponse
);
export var GetMessageTemplate = op(
  n0,
  _GMT,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}", 200],
  },
  () => GetMessageTemplateRequest,
  () => GetMessageTemplateResponse
);
export var GetQuickResponse = op(
  n0,
  _GQR,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}", 200],
  },
  () => GetQuickResponseRequest,
  () => GetQuickResponseResponse
);
export var ListMessageTemplateVersions = op(
  n0,
  _LMTV,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions", 200],
  },
  () => ListMessageTemplateVersionsRequest,
  () => ListMessageTemplateVersionsResponse
);
export var ListQuickResponses = op(
  n0,
  _LQR,
  {
    [_htt]: ["GET", "/knowledgeBases/{knowledgeBaseId}/quickResponses", 200],
  },
  () => ListQuickResponsesRequest,
  () => ListQuickResponsesResponse
);
export var SearchMessageTemplates = op(
  n0,
  _SMT,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/search/messageTemplates", 200],
  },
  () => SearchMessageTemplatesRequest,
  () => SearchMessageTemplatesResponse
);
export var SearchQuickResponses = op(
  n0,
  _SQR,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/search/quickResponses", 200],
  },
  () => SearchQuickResponsesRequest,
  () => SearchQuickResponsesResponse
);
export var SendMessage = op(
  n0,
  _SM,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/sessions/{sessionId}/message", 200],
  },
  () => SendMessageRequest,
  () => SendMessageResponse
);
export var UpdateContent = op(
  n0,
  _UCp,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}", 200],
  },
  () => UpdateContentRequest,
  () => UpdateContentResponse
);
export var UpdateQuickResponse = op(
  n0,
  _UQR,
  {
    [_htt]: ["POST", "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}", 200],
  },
  () => UpdateQuickResponseRequest,
  () => UpdateQuickResponseResponse
);
