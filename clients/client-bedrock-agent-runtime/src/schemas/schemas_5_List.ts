// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAI,
  _aI,
  _aMRF,
  _BRC,
  _bRC,
  _BRMC,
  _cA,
  _cNo,
  _co,
  _CRE,
  _cRE,
  _do,
  _eA,
  _eAn,
  _eC,
  _eI,
  _eM,
  _eTve,
  _fAI,
  _FEC,
  _fEE,
  _FEElo,
  _FEElow,
  _FEIE,
  _FEOE,
  _FES,
  _fES,
  _FESl,
  _FFE,
  _fFE,
  _fI,
  _fIE,
  _fie,
  _FIF,
  _FIFl,
  _fOE,
  _FOF,
  _FOFl,
  _fV,
  _gA,
  _GAM,
  _GAMR,
  _GAMRe,
  _gC,
  _h,
  _hQ,
  _iDS,
  _ind,
  _jD,
  _kBI,
  _KBQ,
  _KBRR,
  _KBRRn,
  _l,
  _LFE,
  _LFEE,
  _LFEER,
  _LFEERi,
  _LFER,
  _LFERi,
  _mA,
  _mC,
  _mCe,
  _me,
  _Mem,
  _Memo,
  _mI,
  _mIa,
  _mR,
  _MSS,
  _mTe,
  _n,
  _NEC,
  _NFE,
  _nFE,
  _NIE,
  _nIE,
  _NIF,
  _NIFo,
  _nN,
  _NOE,
  _nOE,
  _NOF,
  _NOFo,
  _nOR,
  _nTe,
  _q,
  _RC,
  _rCe,
  _rCer,
  _RDe,
  _Re,
  _res,
  _Ret,
  _RQ,
  _rQ,
  _RQL,
  _RRer,
  _RRera,
  _RReran,
  _rRet,
  _RRetr,
  _RRetri,
  _RRLe,
  _RSe,
  _rSel,
  _RSL,
  _RTD,
  _SC,
  _sC,
  _sc,
  _SCa,
  _sET,
  _sIe,
  _so,
  _sSess,
  _sST,
  _st,
  _sTu,
  _t,
  _tD,
  _ti,
  _tQ,
  _ty,
  n0,
} from "./schemas_0";
import {
  GuardrailConfiguration,
  KnowledgeBaseRetrievalConfiguration,
  RetrievalResultContent,
  RetrievalResultLocation,
  RetrievalResultMetadata,
} from "./schemas_7_Retrieve";

/* eslint no-var: 0 */

export var BedrockRerankingConfiguration = struct(
  n0,
  _BRC,
  0,
  [_nOR, _mC],
  [1, () => BedrockRerankingModelConfiguration]
);
export var BedrockRerankingModelConfiguration = struct(n0, _BRMC, 0, [_mA, _aMRF], [0, 128 | 15]);
export var ConditionResultEvent = struct(n0, _CRE, 8, [_nN, _ti, _sC], [0, 5, [() => SatisfiedConditions, 0]]);
export var FlowExecutionInputEvent = struct(n0, _FEIE, 8, [_nN, _ti, _fie], [0, 5, [() => FlowInputFields, 0]]);
export var FlowExecutionOutputEvent = struct(n0, _FEOE, 8, [_nN, _ti, _fie], [0, 5, [() => FlowOutputFields, 0]]);
export var FlowExecutionSummary = struct(n0, _FES, 0, [_eA, _fAI, _fI, _fV, _st, _cA, _eAn], [0, 0, 0, 0, 0, 5, 5]);
export var FlowFailureEvent = struct(n0, _FFE, 8, [_ti, _eC, _eM], [5, 0, 0]);
export var FlowInputField = struct(n0, _FIF, 8, [_n, _co], [0, [() => FlowExecutionContent, 0]]);
export var FlowOutputField = struct(n0, _FOF, 8, [_n, _co], [0, [() => FlowExecutionContent, 0]]);
export var GetAgentMemoryRequest = struct(
  n0,
  _GAMR,
  0,
  [_nTe, _mIa, _aI, _aAI, _mTe, _mI],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mIa,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mTe,
      },
    ],
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
  ]
);
export var GetAgentMemoryResponse = struct(n0, _GAMRe, 0, [_nTe, _mCe], [0, () => Memories]);
export var KnowledgeBaseQuery = struct(n0, _KBQ, 8, [_t], [0]);
export var KnowledgeBaseRetrievalResult = struct(
  n0,
  _KBRR,
  0,
  [_co, _l, _sc, _me],
  [[() => RetrievalResultContent, 0], [() => RetrievalResultLocation, 0], 1, [() => RetrievalResultMetadata, 0]]
);
export var ListFlowExecutionEventsRequest = struct(
  n0,
  _LFEER,
  0,
  [_fI, _fAI, _eI, _mR, _nTe, _eTve],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      0,
      {
        [_hQ]: _eTve,
      },
    ],
  ]
);
export var ListFlowExecutionEventsResponse = struct(n0, _LFEERi, 0, [_fEE, _nTe], [[() => FlowExecutionEvents, 0], 0]);
export var ListFlowExecutionsRequest = struct(
  n0,
  _LFER,
  0,
  [_fI, _fAI, _mR, _nTe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _fAI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
  ]
);
export var ListFlowExecutionsResponse = struct(n0, _LFERi, 0, [_fES, _nTe], [() => FlowExecutionSummaries, 0]);
export var MemorySessionSummary = struct(n0, _MSS, 0, [_mI, _sIe, _sST, _sET, _sTu], [0, 0, 5, 5, 0]);
export var NodeFailureEvent = struct(n0, _NFE, 8, [_nN, _ti, _eC, _eM], [0, 5, 0, 0]);
export var NodeInputEvent = struct(n0, _NIE, 8, [_nN, _ti, _fie], [0, 5, [() => NodeInputFields, 0]]);
export var NodeInputField = struct(n0, _NIF, 8, [_n, _co], [0, [() => NodeExecutionContent, 0]]);
export var NodeOutputEvent = struct(n0, _NOE, 8, [_nN, _ti, _fie], [0, 5, [() => NodeOutputFields, 0]]);
export var NodeOutputField = struct(n0, _NOF, 8, [_n, _co], [0, [() => NodeExecutionContent, 0]]);
export var RerankDocument = struct(n0, _RDe, 8, [_ty, _tD, _jD], [0, [() => RerankTextDocument, 0], 15]);
export var RerankingConfiguration = struct(n0, _RC, 0, [_ty, _bRC], [0, () => BedrockRerankingConfiguration]);
export var RerankQuery = struct(n0, _RQ, 8, [_ty, _tQ], [0, [() => RerankTextDocument, 0]]);
export var RerankRequest = struct(
  n0,
  _RRer,
  0,
  [_q, _so, _rCer, _nTe],
  [[() => RerankQueriesList, 0], [() => RerankSourcesList, 0], () => RerankingConfiguration, 0]
);
export var RerankResponse = struct(n0, _RRera, 0, [_res, _nTe], [[() => RerankResultsList, 0], 0]);
export var RerankResult = struct(n0, _RReran, 0, [_ind, _rSel, _do], [1, 1, [() => RerankDocument, 0]]);
export var RerankSource = struct(n0, _RSe, 8, [_ty, _iDS], [0, [() => RerankDocument, 0]]);
export var RerankTextDocument = struct(n0, _RTD, 8, [_t], [0]);
export var RetrieveRequest = struct(
  n0,
  _RRetr,
  0,
  [_kBI, _rQ, _rCe, _gC, _nTe],
  [
    [0, 1],
    [() => KnowledgeBaseQuery, 0],
    [() => KnowledgeBaseRetrievalConfiguration, 0],
    () => GuardrailConfiguration,
    0,
  ]
);
export var RetrieveResponse = struct(
  n0,
  _RRetri,
  0,
  [_rRet, _gA, _nTe],
  [[() => KnowledgeBaseRetrievalResults, 0], 0, 0]
);
export var SatisfiedCondition = struct(n0, _SC, 8, [_cNo], [0]);
export var FlowExecutionEvents = list(n0, _FEElo, 0, [() => FlowExecutionEvent, 0]);
export var FlowExecutionSummaries = list(n0, _FESl, 0, () => FlowExecutionSummary);
export var FlowInputFields = list(n0, _FIFl, 0, [() => FlowInputField, 0]);
export var FlowOutputFields = list(n0, _FOFl, 0, [() => FlowOutputField, 0]);
export var KnowledgeBaseRetrievalResults = list(n0, _KBRRn, 8, [() => KnowledgeBaseRetrievalResult, 0]);
export var Memories = list(n0, _Mem, 0, () => Memory);
export var NodeInputFields = list(n0, _NIFo, 0, [() => NodeInputField, 0]);
export var NodeOutputFields = list(n0, _NOFo, 0, [() => NodeOutputField, 0]);
export var RerankQueriesList = list(n0, _RQL, 8, [() => RerankQuery, 0]);
export var RerankResultsList = list(n0, _RRLe, 0, [() => RerankResult, 0]);
export var RerankSourcesList = list(n0, _RSL, 8, [() => RerankSource, 0]);
export var SatisfiedConditions = list(n0, _SCa, 0, [() => SatisfiedCondition, 0]);
export var FlowExecutionContent = uni(n0, _FEC, 8, [_do], [15]);
export var FlowExecutionEvent = uni(
  n0,
  _FEElow,
  0,
  [_fIE, _fOE, _nIE, _nOE, _cRE, _nFE, _fFE],
  [
    [() => FlowExecutionInputEvent, 0],
    [() => FlowExecutionOutputEvent, 0],
    [() => NodeInputEvent, 0],
    [() => NodeOutputEvent, 0],
    [() => ConditionResultEvent, 0],
    [() => NodeFailureEvent, 0],
    [() => FlowFailureEvent, 0],
  ]
);
export var Memory = uni(n0, _Memo, 0, [_sSess], [() => MemorySessionSummary]);
export var NodeExecutionContent = uni(n0, _NEC, 8, [_do], [15]);
export var GetAgentMemory = op(
  n0,
  _GAM,
  {
    [_h]: ["GET", "/agents/{agentId}/agentAliases/{agentAliasId}/memories", 200],
  },
  () => GetAgentMemoryRequest,
  () => GetAgentMemoryResponse
);
export var ListFlowExecutionEvents = op(
  n0,
  _LFEE,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/events", 200],
  },
  () => ListFlowExecutionEventsRequest,
  () => ListFlowExecutionEventsResponse
);
export var ListFlowExecutions = op(
  n0,
  _LFE,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/executions", 200],
  },
  () => ListFlowExecutionsRequest,
  () => ListFlowExecutionsResponse
);
export var Rerank = op(
  n0,
  _Re,
  {
    [_h]: ["POST", "/rerank", 200],
  },
  () => RerankRequest,
  () => RerankResponse
);
export var Retrieve = op(
  n0,
  _Ret,
  {
    [_h]: ["POST", "/knowledgebases/{knowledgeBaseId}/retrieve", 200],
  },
  () => RetrieveRequest,
  () => RetrieveResponse
);
