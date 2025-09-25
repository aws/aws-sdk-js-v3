// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAF,
  _AF,
  _AFL,
  _AN,
  _ARAd,
  _ASC,
  _ASDC,
  _ASGC,
  _ASM,
  _ASUC,
  _BGDS,
  _BGDSR,
  _BGDSRa,
  _BGDSRE,
  _BGDSREa,
  _BO,
  _CA,
  _CAo,
  _Cont,
  _DA,
  _DAL,
  _DAoc,
  _DAV,
  _DI,
  _DILo,
  _DIo,
  _DQSC,
  _DQSCR,
  _DQSCRe,
  _DRC,
  _DROC,
  _DROCL,
  _DSG,
  _DSGa,
  _DSI,
  _DSL,
  _DSo,
  _DT,
  _DURI,
  _DV,
  _E,
  _EC,
  _EM,
  _EO,
  _ET,
  _FCa,
  _FRai,
  _G,
  _GI,
  _GQS,
  _GQSR,
  _GQSRe,
  _GT,
  _GTOE,
  _Hig,
  _I,
  _II,
  _IQWUI,
  _K,
  _LCT,
  _LSBT,
  _LT,
  _LTOE,
  _LV,
  _MNOQU,
  _Mo,
  _MQC,
  _MSC,
  _N,
  _NF,
  _OAF,
  _PN,
  _PSa,
  _QI,
  _QLLBWID,
  _QSI,
  _QT,
  _R,
  _RDA,
  _Re,
  _RIe,
  _RR,
  _RRe,
  _RRI,
  _RRIL,
  _SAc,
  _SAu,
  _SCc,
  _SCL,
  _SCu,
  _SDo,
  _SDou,
  _SH,
  _SHL,
  _SL,
  _SLV,
  _St,
  _STu,
  _STWH,
  _Su,
  _Sug,
  _Sugg,
  _SV,
  _SVu,
  _Te,
  _To,
  _TSC,
  _UC,
  _UI,
  _UQSC,
  _UQSCR,
  _V,
  n0,
  Unit,
} from "./schemas_0";
import { Relevance } from "./schemas_14_Describe";

/* eslint no-var: 0 */

export var AttributeFilter = struct(
  n0,
  _AF,
  0,
  [_AAF, _OAF, _NF, _ET, _CA, _CAo, _GT, _GTOE, _LT, _LTOE],
  [
    () => AttributeFilterList,
    () => AttributeFilterList,
    () => AttributeFilter,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
  ]
);
export var AttributeSuggestionsDescribeConfig = struct(n0, _ASDC, 0, [_SCL, _ASM], [() => SuggestableConfigList, 0]);
export var AttributeSuggestionsGetConfig = struct(
  n0,
  _ASGC,
  0,
  [_SAu, _ARAd, _AF, _UC],
  [64 | 0, 64 | 0, () => AttributeFilter, () => UserContext]
);
export var AttributeSuggestionsUpdateConfig = struct(n0, _ASUC, 0, [_SCL, _ASM], [() => SuggestableConfigList, 0]);
export var BatchGetDocumentStatusRequest = struct(n0, _BGDSR, 0, [_II, _DILo], [0, () => DocumentInfoList]);
export var BatchGetDocumentStatusResponse = struct(
  n0,
  _BGDSRa,
  0,
  [_E, _DSL],
  [() => BatchGetDocumentStatusResponseErrors, () => DocumentStatusList]
);
export var BatchGetDocumentStatusResponseError = struct(n0, _BGDSRE, 0, [_DI, _DSI, _EC, _EM], [0, 0, 0, 0]);
export var DataSourceGroup = struct(n0, _DSG, 0, [_GI, _DSI], [0, 0]);
export var DescribeQuerySuggestionsConfigRequest = struct(n0, _DQSCR, 0, [_II], [0]);
export var DescribeQuerySuggestionsConfigResponse = struct(
  n0,
  _DQSCRe,
  0,
  [_Mo, _St, _QLLBWID, _IQWUI, _MNOQU, _MQC, _LSBT, _LCT, _TSC, _ASC],
  [0, 0, 1, 2, 1, 1, 4, 4, 1, () => AttributeSuggestionsDescribeConfig]
);
export var DocumentAttribute = struct(n0, _DA, 0, [_K, _V], [0, () => DocumentAttributeValue]);
export var DocumentAttributeValue = struct(n0, _DAV, 0, [_SV, _SLV, _LV, _DV], [0, 64 | 0, 1, 4]);
export var DocumentInfo = struct(n0, _DIo, 0, [_DI, _A], [0, () => DocumentAttributeList]);
export var DocumentRelevanceConfiguration = struct(n0, _DRC, 0, [_N, _R], [0, () => Relevance]);
export var GetQuerySuggestionsRequest = struct(
  n0,
  _GQSR,
  0,
  [_II, _QT, _MSC, _STu, _ASC],
  [0, 0, 1, 64 | 0, () => AttributeSuggestionsGetConfig]
);
export var GetQuerySuggestionsResponse = struct(n0, _GQSRe, 0, [_QSI, _Su], [0, () => SuggestionList]);
export var RetrieveRequest = struct(
  n0,
  _RR,
  0,
  [_II, _QT, _AF, _RDA, _DROC, _PN, _PSa, _UC],
  [0, 0, () => AttributeFilter, 64 | 0, () => DocumentRelevanceOverrideConfigurationList, 1, 1, () => UserContext]
);
export var RetrieveResult = struct(n0, _RRe, 0, [_QI, _RIe], [0, () => RetrieveResultItemList]);
export var RetrieveResultItem = struct(
  n0,
  _RRI,
  0,
  [_I, _DI, _DT, _Cont, _DURI, _DAoc, _SAc],
  [0, 0, 0, 0, 0, () => DocumentAttributeList, () => ScoreAttributes]
);
export var ScoreAttributes = struct(n0, _SAc, 0, [_SCc], [0]);
export var SourceDocument = struct(n0, _SDo, 0, [_DI, _SAu, _AA], [0, 64 | 0, () => DocumentAttributeList]);
export var Status = struct(n0, _St, 0, [_DI, _DSo, _FCa, _FRai], [0, 0, 0, 0]);
export var SuggestableConfig = struct(n0, _SCu, 0, [_AN, _Sug], [0, 2]);
export var Suggestion = struct(n0, _Sugg, 0, [_I, _V, _SDou], [0, () => SuggestionValue, () => SourceDocuments]);
export var SuggestionHighlight = struct(n0, _SH, 0, [_BO, _EO], [1, 1]);
export var SuggestionTextWithHighlights = struct(n0, _STWH, 0, [_Te, _Hig], [0, () => SuggestionHighlightList]);
export var SuggestionValue = struct(n0, _SVu, 0, [_Te], [() => SuggestionTextWithHighlights]);
export var UpdateQuerySuggestionsConfigRequest = struct(
  n0,
  _UQSCR,
  0,
  [_II, _Mo, _QLLBWID, _IQWUI, _MNOQU, _MQC, _ASC],
  [0, 0, 1, 2, 1, 1, () => AttributeSuggestionsUpdateConfig]
);
export var UserContext = struct(n0, _UC, 0, [_To, _UI, _G, _DSGa], [0, 0, 64 | 0, () => DataSourceGroups]);
export var AttributeFilterList = list(n0, _AFL, 0, () => AttributeFilter);
export var BatchGetDocumentStatusResponseErrors = list(n0, _BGDSREa, 0, () => BatchGetDocumentStatusResponseError);
export var DataSourceGroups = list(n0, _DSGa, 0, () => DataSourceGroup);
export var DocumentAttributeKeyList = 64 | 0;

export var DocumentAttributeList = list(n0, _DAL, 0, () => DocumentAttribute);
export var DocumentAttributeStringListValue = 64 | 0;

export var DocumentInfoList = list(n0, _DILo, 0, () => DocumentInfo);
export var DocumentRelevanceOverrideConfigurationList = list(n0, _DROCL, 0, () => DocumentRelevanceConfiguration);
export var DocumentStatusList = list(n0, _DSL, 0, () => Status);
export var Groups = 64 | 0;

export var RetrieveResultItemList = list(n0, _RRIL, 0, () => RetrieveResultItem);
export var SourceDocuments = list(n0, _SDou, 0, () => SourceDocument);
export var SuggestableConfigList = list(n0, _SCL, 0, () => SuggestableConfig);
export var SuggestionHighlightList = list(n0, _SHL, 0, () => SuggestionHighlight);
export var SuggestionList = list(n0, _SL, 0, () => Suggestion);
export var SuggestionTypes = 64 | 0;

export var BatchGetDocumentStatus = op(
  n0,
  _BGDS,
  0,
  () => BatchGetDocumentStatusRequest,
  () => BatchGetDocumentStatusResponse
);
export var DescribeQuerySuggestionsConfig = op(
  n0,
  _DQSC,
  0,
  () => DescribeQuerySuggestionsConfigRequest,
  () => DescribeQuerySuggestionsConfigResponse
);
export var GetQuerySuggestions = op(
  n0,
  _GQS,
  0,
  () => GetQuerySuggestionsRequest,
  () => GetQuerySuggestionsResponse
);
export var Retrieve = op(
  n0,
  _Re,
  0,
  () => RetrieveRequest,
  () => RetrieveResult
);
export var UpdateQuerySuggestionsConfig = op(
  n0,
  _UQSC,
  0,
  () => UpdateQuerySuggestionsConfigRequest,
  () => Unit
);
