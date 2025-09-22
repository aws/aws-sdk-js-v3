// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _bOI,
  _cA,
  _CDD,
  _cDo,
  _cI,
  _com,
  _CR,
  _cR,
  _CS,
  _cSD,
  _cSi,
  _CSon,
  _cSon,
  _D,
  _da,
  _DD,
  _de,
  _do,
  _DR,
  _DS,
  _DSL,
  _DT,
  _eOE,
  _ex,
  _gCD,
  _GCDD,
  _gD,
  _GDD,
  _gI,
  _GNM,
  _GNMR,
  _GNMRe,
  _GR,
  _gR,
  _GRe,
  _GRR,
  _GRRe,
  _H,
  _h,
  _Hi,
  _hQ,
  _htt,
  _i,
  _id,
  _iDD,
  _IDDD,
  _iIn,
  _kBA,
  _kBI,
  _LM,
  _LMR,
  _LMRi,
  _MD,
  _mes,
  _mI,
  _mIe,
  _ML,
  _MO,
  _mR,
  _nCT,
  _nMT,
  _nT,
  _par,
  _QRTD,
  _QT,
  _qu,
  _r,
  _RD,
  _rD,
  _RDe,
  _re,
  _rec,
  _ref,
  _res,
  _rIe,
  _rIec,
  _RL,
  _rL,
  _rMI,
  _rS,
  _RT,
  _rT,
  _RTD,
  _RTL,
  _s,
  _sCD,
  _SCDD,
  _sI,
  _so,
  _SS,
  _sURL,
  _t,
  _TD,
  _tD,
  _te,
  _ti,
  _tim,
  _TM,
  _tr,
  _v,
  _wTS,
  n0,
} from "./schemas_0";
import { RuntimeSessionDataList } from "./schemas_37_";

/* eslint no-var: 0 */

export var QueryText = sim(n0, _QT, 0, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var CitationSpan = struct(n0, _CS, 0, [_bOI, _eOE], [1, 1]);
export var ContentDataDetails = struct(n0, _CDD, 0, [_tD, _rD], [[() => TextData, 0], () => RankingData]);
export var ContentReference = struct(n0, _CR, 0, [_kBA, _kBI, _cA, _cI, _sURL, _rT], [0, 0, 0, 0, 0, 0]);
export var ConversationState = struct(n0, _CSon, 0, [_s, _r], [0, 0]);
export var DataSummary = struct(n0, _DS, 0, [_re, _de], [() => DataReference, [() => DataDetails, 0]]);
export var Document = struct(
  n0,
  _D,
  0,
  [_cR, _ti, _ex],
  [() => ContentReference, [() => DocumentText, 0], [() => DocumentText, 0]]
);
export var DocumentText = struct(n0, _DT, 0, [_te, _h], [[() => SensitiveString, 0], () => Highlights]);
export var GenerativeChunkDataDetails = struct(
  n0,
  _GCDD,
  0,
  [_com, _ref, _nCT],
  [[() => SensitiveString, 0], [() => DataSummaryList, 0], 0]
);
export var GenerativeDataDetails = struct(
  n0,
  _GDD,
  0,
  [_com, _ref, _rD],
  [[() => SensitiveString, 0], [() => DataSummaryList, 0], () => RankingData]
);
export var GenerativeReference = struct(n0, _GR, 0, [_mI, _gI], [0, 0]);
export var GetNextMessageRequest = struct(
  n0,
  _GNMR,
  0,
  [_aI, _sI, _nMT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nMT,
      },
    ],
  ]
);
export var GetNextMessageResponse = struct(
  n0,
  _GNMRe,
  0,
  [_t, _res, _rMI, _cSon, _nMT, _cSD],
  [0, [() => MessageOutput, 0], 0, () => ConversationState, 0, [() => RuntimeSessionDataList, 0]]
);
export var GetRecommendationsRequest = struct(
  n0,
  _GRR,
  0,
  [_aI, _sI, _mR, _wTS, _nCT],
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
    [
      0,
      {
        [_hQ]: _nCT,
      },
    ],
  ]
);
export var GetRecommendationsResponse = struct(
  n0,
  _GRRe,
  0,
  [_rec, _tr],
  [
    [() => RecommendationList, 0],
    [() => RecommendationTriggerList, 0],
  ]
);
export var Highlight = struct(n0, _H, 0, [_bOI, _eOE], [1, 1]);
export var IntentDetectedDataDetails = struct(n0, _IDDD, 0, [_i, _iIn], [[() => SensitiveString, 0], 0]);
export var ListMessagesRequest = struct(
  n0,
  _LMR,
  0,
  [_aI, _sI, _nT, _mR],
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
export var ListMessagesResponse = struct(n0, _LMRi, 0, [_mes, _nT], [[() => MessageList, 0], 0]);
export var MessageOutput = struct(n0, _MO, 0, [_v, _mIe, _par, _tim], [[() => MessageData, 0], 0, 0, 4]);
export var QueryRecommendationTriggerData = struct(n0, _QRTD, 0, [_te], [[() => QueryText, 0]]);
export var RankingData = struct(n0, _RD, 0, [_rS, _rL], [1, 0]);
export var RecommendationData = struct(
  n0,
  _RDe,
  0,
  [_rIe, _do, _rS, _rL, _t, _da],
  [0, [() => Document, 0], 1, 0, 0, [() => DataSummary, 0]]
);
export var RecommendationTrigger = struct(
  n0,
  _RT,
  0,
  [_id, _t, _so, _da, _rIec],
  [0, 0, 0, [() => RecommendationTriggerData, 0], 64 | 0]
);
export var SourceContentDataDetails = struct(
  n0,
  _SCDD,
  0,
  [_id, _t, _tD, _rD, _cSi],
  [0, 0, [() => TextData, 0], () => RankingData, () => CitationSpan]
);
export var TextData = struct(
  n0,
  _TD,
  0,
  [_ti, _ex],
  [
    [() => DocumentText, 0],
    [() => DocumentText, 0],
  ]
);
export var TextMessage = struct(n0, _TM, 0, [_v], [[() => SensitiveString, 0]]);
export var DataSummaryList = list(n0, _DSL, 0, [() => DataSummary, 0]);
export var Highlights = list(n0, _Hi, 0, () => Highlight);
export var MessageList = list(n0, _ML, 0, [() => MessageOutput, 0]);
export var RecommendationList = list(n0, _RL, 0, [() => RecommendationData, 0]);
export var RecommendationTriggerList = list(n0, _RTL, 0, [() => RecommendationTrigger, 0]);
export var DataDetails = uni(
  n0,
  _DD,
  0,
  [_cDo, _gD, _iDD, _sCD, _gCD],
  [
    [() => ContentDataDetails, 0],
    [() => GenerativeDataDetails, 0],
    [() => IntentDetectedDataDetails, 0],
    [() => SourceContentDataDetails, 0],
    [() => GenerativeChunkDataDetails, 0],
  ]
);
export var DataReference = uni(n0, _DR, 0, [_cR, _gR], [() => ContentReference, () => GenerativeReference]);
export var MessageData = uni(n0, _MD, 0, [_te], [[() => TextMessage, 0]]);
export var RecommendationTriggerData = uni(n0, _RTD, 0, [_qu], [[() => QueryRecommendationTriggerData, 0]]);
export var GetNextMessage = op(
  n0,
  _GNM,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/sessions/{sessionId}/messages/next", 200],
  },
  () => GetNextMessageRequest,
  () => GetNextMessageResponse
);
export var GetRecommendations = op(
  n0,
  _GRe,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/sessions/{sessionId}/recommendations", 200],
  },
  () => GetRecommendationsRequest,
  () => GetRecommendationsResponse
);
export var ListMessages = op(
  n0,
  _LM,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/sessions/{sessionId}/messages", 200],
  },
  () => ListMessagesRequest,
  () => ListMessagesResponse
);
