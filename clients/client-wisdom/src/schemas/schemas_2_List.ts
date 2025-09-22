// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { RequestTimeoutException as __RequestTimeoutException } from "../models/index";
import {
  _aA,
  _aAA,
  _aAI,
  _AAS,
  _aAS,
  _AASL,
  _aD,
  _aF,
  _aI,
  _aIt,
  _AL,
  _aNI,
  _AS,
  _aS,
  _aT,
  _at,
  _bOI,
  _c,
  _CA,
  _cA,
  _CAK,
  _ch,
  _cI,
  _cont,
  _CR,
  _cR,
  _CSL,
  _cSo,
  _cT,
  _cTr,
  _D,
  _d,
  _da,
  _do,
  _DT,
  _e,
  _eOE,
  _eSC,
  _ex,
  _F,
  _f,
  _fi,
  _FL,
  _gC,
  _GR,
  _GRR,
  _GRRe,
  _H,
  _h,
  _hE,
  _Hi,
  _hQ,
  _ht,
  _i,
  _iA,
  _iC,
  _iJI,
  _IJL,
  _IJS,
  _iJS,
  _iJT,
  _iNE,
  _kBA,
  _kBI,
  _KBL,
  _KBS,
  _kBS,
  _kBT,
  _l,
  _LA,
  _LAA,
  _LAAR,
  _LAARi,
  _LAR,
  _LARi,
  _LC,
  _LCR,
  _LCRi,
  _LIJ,
  _LIJR,
  _LIJRi,
  _LKB,
  _LKBR,
  _LKBRi,
  _lMB,
  _lMT,
  _LQR,
  _LQRR,
  _LQRRi,
  _m,
  _me,
  _mR,
  _n,
  _nT,
  _o,
  _oOF,
  _or,
  _p,
  _q,
  _QA,
  _QAR,
  _QARu,
  _qRA,
  _QRFF,
  _QRFFL,
  _qRI,
  _QRL,
  _QROF,
  _QRQF,
  _QRQFL,
  _QRS,
  _qRS,
  _QRSE,
  _QRSL,
  _QRSRD,
  _QRSRL,
  _QRTD,
  _QT,
  _qT,
  _qu,
  _r,
  _rC,
  _RD,
  _RDe,
  _re,
  _rIe,
  _rIec,
  _rIes,
  _RL,
  _rL,
  _rS,
  _RT,
  _RTD,
  _RTE,
  _RTL,
  _s,
  _sA,
  _sC,
  _SCe,
  _SCR,
  _SCRe,
  _SE,
  _sE,
  _sI,
  _sK,
  _so,
  _SQR,
  _SQRR,
  _SQRRe,
  _SS,
  _sS,
  _SSe,
  _SSea,
  _sSEC,
  _SSes,
  _SSR,
  _SSRe,
  _t,
  _te,
  _ti,
  _tr,
  _ty,
  _uI,
  _v,
  _va,
  _wTS,
  n0,
} from "./schemas_0";
import { Channels, GroupingConfiguration, QuickResponseContents } from "./schemas_3_Quick";
import {
  AssistantIntegrationConfiguration,
  RenderingConfiguration,
  ServerSideEncryptionConfiguration,
  SourceConfiguration,
} from "./schemas_4_Knowledge";
import { ContentSummary, ExternalSourceConfiguration } from "./schemas_5_Content";
import { AssistantAssociationOutputData } from "./schemas_10_Assistant";

/* eslint no-var: 0 */

export var QueryText = sim(n0, _QT, 0, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var AssistantAssociationSummary = struct(
  n0,
  _AAS,
  0,
  [_aAI, _aAA, _aI, _aA, _aT, _aD, _t],
  [0, 0, 0, 0, 0, () => AssistantAssociationOutputData, 128 | 0]
);
export var AssistantSummary = struct(
  n0,
  _AS,
  0,
  [_aI, _aA, _n, _ty, _s, _d, _t, _sSEC, _iC],
  [0, 0, 0, 0, 0, 0, 128 | 0, () => ServerSideEncryptionConfiguration, () => AssistantIntegrationConfiguration]
);
export var ContentReference = struct(n0, _CR, 0, [_kBA, _kBI, _cA, _cI], [0, 0, 0, 0]);
export var Document = struct(
  n0,
  _D,
  0,
  [_cR, _ti, _ex],
  [() => ContentReference, [() => DocumentText, 0], [() => DocumentText, 0]]
);
export var DocumentText = struct(n0, _DT, 0, [_te, _h], [[() => SensitiveString, 0], () => Highlights]);
export var Filter = struct(n0, _F, 0, [_f, _o, _v], [0, 0, 0]);
export var GetRecommendationsRequest = struct(
  n0,
  _GRR,
  0,
  [_aI, _sI, _mR, _wTS],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      1,
      {
        [_hQ]: _wTS,
      },
    ],
  ]
);
export var GetRecommendationsResponse = struct(
  n0,
  _GRRe,
  0,
  [_r, _tr],
  [
    [() => RecommendationList, 0],
    [() => RecommendationTriggerList, 0],
  ]
);
export var Highlight = struct(n0, _H, 0, [_bOI, _eOE], [1, 1]);
export var ImportJobSummary = struct(
  n0,
  _IJS,
  0,
  [_iJI, _kBI, _uI, _kBA, _iJT, _s, _cTr, _lMT, _me, _eSC],
  [0, 0, 0, 0, 0, 0, 7, 7, 128 | 0, () => ExternalSourceConfiguration]
);
export var KnowledgeBaseSummary = struct(
  n0,
  _KBS,
  0,
  [_kBI, _kBA, _n, _kBT, _s, _sC, _rC, _sSEC, _d, _t],
  [
    0,
    0,
    0,
    0,
    0,
    () => SourceConfiguration,
    () => RenderingConfiguration,
    () => ServerSideEncryptionConfiguration,
    0,
    128 | 0,
  ]
);
export var ListAssistantAssociationsRequest = struct(
  n0,
  _LAAR,
  0,
  [_nT, _mR, _aI],
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
export var ListAssistantAssociationsResponse = struct(
  n0,
  _LAARi,
  0,
  [_aAS, _nT],
  [() => AssistantAssociationSummaryList, 0]
);
export var ListAssistantsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListAssistantsResponse = struct(n0, _LARi, 0, [_aS, _nT], [() => AssistantList, 0]);
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
export var ListContentsResponse = struct(n0, _LCRi, 0, [_cSo, _nT], [() => ContentSummaryList, 0]);
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
export var ListKnowledgeBasesRequest = struct(
  n0,
  _LKBR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListKnowledgeBasesResponse = struct(n0, _LKBRi, 0, [_kBS, _nT], [() => KnowledgeBaseList, 0]);
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
export var QueryAssistantRequest = struct(n0, _QAR, 0, [_aI, _qT, _nT, _mR], [[0, 1], [() => QueryText, 0], 0, 1]);
export var QueryAssistantResponse = struct(n0, _QARu, 0, [_re, _nT], [[() => QueryResultsList, 0], 0]);
export var QueryRecommendationTriggerData = struct(n0, _QRTD, 0, [_te], [[() => QueryText, 0]]);
export var QuickResponseFilterField = struct(n0, _QRFF, 0, [_n, _va, _o, _iNE], [0, 64 | 0, 0, 2]);
export var QuickResponseOrderField = struct(n0, _QROF, 0, [_n, _or], [0, 0]);
export var QuickResponseQueryField = struct(n0, _QRQF, 0, [_n, _va, _o, _aF, _p], [0, 64 | 0, 0, 2, 0]);
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
  [_qRA, _qRI, _kBA, _kBI, _n, _cT, _s, _cont, _cTr, _lMT, _iA, _d, _gC, _sK, _lMB, _ch, _l, _aNI, _aIt, _t],
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
  [_qRA, _qRI, _kBA, _kBI, _n, _cT, _s, _cTr, _lMT, _d, _lMB, _iA, _ch, _t],
  [0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 2, [() => Channels, 0], 128 | 0]
);
export var RecommendationData = struct(n0, _RD, 0, [_rIe, _do, _rS, _rL, _ty], [0, [() => Document, 0], 1, 0, 0]);
export var RecommendationTrigger = struct(
  n0,
  _RT,
  0,
  [_i, _ty, _so, _da, _rIec],
  [0, 0, 0, [() => RecommendationTriggerData, 0], 64 | 0]
);
export var RequestTimeoutException = error(
  n0,
  _RTE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_m],
  [0],

  __RequestTimeoutException
);
export var ResultData = struct(n0, _RDe, 0, [_rIes, _do, _rS], [0, [() => Document, 0], 1]);
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
export var SearchContentResponse = struct(n0, _SCRe, 0, [_cSo, _nT], [() => ContentSummaryList, 0]);
export var SearchExpression = struct(n0, _SE, 0, [_fi], [() => FilterList]);
export var SearchQuickResponsesRequest = struct(
  n0,
  _SQRR,
  0,
  [_kBI, _sE, _nT, _mR, _at],
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
  [_re, _nT],
  [[() => QuickResponseSearchResultsList, 0], 0]
);
export var SearchSessionsRequest = struct(
  n0,
  _SSR,
  0,
  [_nT, _mR, _aI, _sE],
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
export var SearchSessionsResponse = struct(n0, _SSRe, 0, [_sS, _nT], [() => SessionSummaries, 0]);
export var SessionSummary = struct(n0, _SSe, 0, [_sI, _sA, _aI, _aA], [0, 0, 0, 0]);
export var AssistantAssociationSummaryList = list(n0, _AASL, 0, () => AssistantAssociationSummary);
export var AssistantList = list(n0, _AL, 0, () => AssistantSummary);
export var ContactAttributeKeys = list(n0, _CAK, 8, 0);
export var ContentSummaryList = list(n0, _CSL, 0, () => ContentSummary);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var Highlights = list(n0, _Hi, 0, () => Highlight);
export var ImportJobList = list(n0, _IJL, 0, () => ImportJobSummary);
export var KnowledgeBaseList = list(n0, _KBL, 0, () => KnowledgeBaseSummary);
export var QueryResultsList = list(n0, _QRL, 0, [() => ResultData, 0]);
export var QuickResponseFilterFieldList = list(n0, _QRFFL, 0, () => QuickResponseFilterField);
export var QuickResponseFilterValueList = 64 | 0;

export var QuickResponseQueryFieldList = list(n0, _QRQFL, 0, () => QuickResponseQueryField);
export var QuickResponseQueryValueList = 64 | 0;

export var QuickResponseSearchResultsList = list(n0, _QRSRL, 0, [() => QuickResponseSearchResultData, 0]);
export var QuickResponseSummaryList = list(n0, _QRSL, 0, [() => QuickResponseSummary, 0]);
export var RecommendationList = list(n0, _RL, 0, [() => RecommendationData, 0]);
export var RecommendationTriggerList = list(n0, _RTL, 0, [() => RecommendationTrigger, 0]);
export var SessionSummaries = list(n0, _SSes, 0, () => SessionSummary);
export var ContactAttributes = map(n0, _CA, 8, 0, 0);
export var RecommendationTriggerData = uni(n0, _RTD, 0, [_qu], [[() => QueryRecommendationTriggerData, 0]]);
export var GetRecommendations = op(
  n0,
  _GR,
  {
    [_ht]: ["GET", "/assistants/{assistantId}/sessions/{sessionId}/recommendations", 200],
  },
  () => GetRecommendationsRequest,
  () => GetRecommendationsResponse
);
export var ListAssistantAssociations = op(
  n0,
  _LAA,
  {
    [_ht]: ["GET", "/assistants/{assistantId}/associations", 200],
  },
  () => ListAssistantAssociationsRequest,
  () => ListAssistantAssociationsResponse
);
export var ListAssistants = op(
  n0,
  _LA,
  {
    [_ht]: ["GET", "/assistants", 200],
  },
  () => ListAssistantsRequest,
  () => ListAssistantsResponse
);
export var ListContents = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}/contents", 200],
  },
  () => ListContentsRequest,
  () => ListContentsResponse
);
export var ListImportJobs = op(
  n0,
  _LIJ,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}/importJobs", 200],
  },
  () => ListImportJobsRequest,
  () => ListImportJobsResponse
);
export var ListKnowledgeBases = op(
  n0,
  _LKB,
  {
    [_ht]: ["GET", "/knowledgeBases", 200],
  },
  () => ListKnowledgeBasesRequest,
  () => ListKnowledgeBasesResponse
);
export var ListQuickResponses = op(
  n0,
  _LQR,
  {
    [_ht]: ["GET", "/knowledgeBases/{knowledgeBaseId}/quickResponses", 200],
  },
  () => ListQuickResponsesRequest,
  () => ListQuickResponsesResponse
);
export var QueryAssistant = op(
  n0,
  _QA,
  {
    [_ht]: ["POST", "/assistants/{assistantId}/query", 200],
  },
  () => QueryAssistantRequest,
  () => QueryAssistantResponse
);
export var SearchContent = op(
  n0,
  _SCe,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/search", 200],
  },
  () => SearchContentRequest,
  () => SearchContentResponse
);
export var SearchQuickResponses = op(
  n0,
  _SQR,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/search/quickResponses", 200],
  },
  () => SearchQuickResponsesRequest,
  () => SearchQuickResponsesResponse
);
export var SearchSessions = op(
  n0,
  _SSea,
  {
    [_ht]: ["POST", "/assistants/{assistantId}/searchSessions", 200],
  },
  () => SearchSessionsRequest,
  () => SearchSessionsResponse
);
