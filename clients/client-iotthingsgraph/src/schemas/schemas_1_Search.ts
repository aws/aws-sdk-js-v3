// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _eI,
  _eTnd,
  _eTv,
  _f,
  _fEI,
  _FEM,
  _FEMl,
  _FES,
  _FESl,
  _FTF,
  _FTFl,
  _fTI,
  _FTSl,
  _GFTRet,
  _GFTRR,
  _GFTRRe,
  _GSTRet,
  _GSTRR,
  _GSTRRe,
  _i,
  _LFEM,
  _LFEMR,
  _LFEMRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _me,
  _mI,
  _mR,
  _n,
  _nT,
  _nV,
  _p,
  _rA,
  _SFE,
  _SFER,
  _SFERe,
  _SFT,
  _SFTR,
  _SFTRe,
  _SIF,
  _SIFy,
  _sII,
  _SISy,
  _SSI,
  _SSIR,
  _SSIRe,
  _SST,
  _SSTR,
  _SSTRe,
  _ST,
  _sT,
  _st,
  _STF,
  _STFy,
  _STR,
  _STRe,
  _STSy,
  _su,
  _t,
  _tA,
  _Th,
  _th,
  _Thi,
  _ti,
  _tN,
  _uA,
  _v,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Create";
import { SystemInstanceSummary } from "./schemas_9_System";
import { FlowTemplateSummary } from "./schemas_12_Flow";
import { SystemTemplateSummary } from "./schemas_13_System";

/* eslint no-var: 0 */

export var FlowExecutionMessage = struct(n0, _FEM, 0, [_mI, _eTv, _ti, _p], [0, 0, 4, 0]);
export var FlowExecutionSummary = struct(n0, _FES, 0, [_fEI, _st, _sII, _fTI, _cA, _uA], [0, 0, 0, 0, 4, 4]);
export var FlowTemplateFilter = struct(n0, _FTF, 0, [_n, _v], [0, 64 | 0]);
export var GetFlowTemplateRevisionsRequest = struct(n0, _GFTRR, 0, [_i, _nT, _mR], [0, 0, 1]);
export var GetFlowTemplateRevisionsResponse = struct(n0, _GFTRRe, 0, [_su, _nT], [() => FlowTemplateSummaries, 0]);
export var GetSystemTemplateRevisionsRequest = struct(n0, _GSTRR, 0, [_i, _nT, _mR], [0, 0, 1]);
export var GetSystemTemplateRevisionsResponse = struct(n0, _GSTRRe, 0, [_su, _nT], [() => SystemTemplateSummaries, 0]);
export var ListFlowExecutionMessagesRequest = struct(n0, _LFEMR, 0, [_fEI, _nT, _mR], [0, 0, 1]);
export var ListFlowExecutionMessagesResponse = struct(n0, _LFEMRi, 0, [_me, _nT], [() => FlowExecutionMessages, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_mR, _rA, _nT], [1, 0, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t, _nT], [() => TagList, 0]);
export var SearchFlowExecutionsRequest = struct(n0, _SFER, 0, [_sII, _fEI, _sT, _eTnd, _nT, _mR], [0, 0, 4, 4, 0, 1]);
export var SearchFlowExecutionsResponse = struct(n0, _SFERe, 0, [_su, _nT], [() => FlowExecutionSummaries, 0]);
export var SearchFlowTemplatesRequest = struct(n0, _SFTR, 0, [_f, _nT, _mR], [() => FlowTemplateFilters, 0, 1]);
export var SearchFlowTemplatesResponse = struct(n0, _SFTRe, 0, [_su, _nT], [() => FlowTemplateSummaries, 0]);
export var SearchSystemInstancesRequest = struct(n0, _SSIR, 0, [_f, _nT, _mR], [() => SystemInstanceFilters, 0, 1]);
export var SearchSystemInstancesResponse = struct(n0, _SSIRe, 0, [_su, _nT], [() => SystemInstanceSummaries, 0]);
export var SearchSystemTemplatesRequest = struct(n0, _SSTR, 0, [_f, _nT, _mR], [() => SystemTemplateFilters, 0, 1]);
export var SearchSystemTemplatesResponse = struct(n0, _SSTRe, 0, [_su, _nT], [() => SystemTemplateSummaries, 0]);
export var SearchThingsRequest = struct(n0, _STR, 0, [_eI, _nT, _mR, _nV], [0, 0, 1, 1]);
export var SearchThingsResponse = struct(n0, _STRe, 0, [_th, _nT], [() => Things, 0]);
export var SystemInstanceFilter = struct(n0, _SIF, 0, [_n, _v], [0, 64 | 0]);
export var SystemTemplateFilter = struct(n0, _STF, 0, [_n, _v], [0, 64 | 0]);
export var Thing = struct(n0, _Th, 0, [_tA, _tN], [0, 0]);
export var FlowExecutionMessages = list(n0, _FEMl, 0, () => FlowExecutionMessage);
export var FlowExecutionSummaries = list(n0, _FESl, 0, () => FlowExecutionSummary);
export var FlowTemplateFilters = list(n0, _FTFl, 0, () => FlowTemplateFilter);
export var FlowTemplateFilterValues = 64 | 0;

export var FlowTemplateSummaries = list(n0, _FTSl, 0, () => FlowTemplateSummary);
export var SystemInstanceFilters = list(n0, _SIFy, 0, () => SystemInstanceFilter);
export var SystemInstanceFilterValues = 64 | 0;

export var SystemInstanceSummaries = list(n0, _SISy, 0, () => SystemInstanceSummary);
export var SystemTemplateFilters = list(n0, _STFy, 0, () => SystemTemplateFilter);
export var SystemTemplateFilterValues = 64 | 0;

export var SystemTemplateSummaries = list(n0, _STSy, 0, () => SystemTemplateSummary);
export var Things = list(n0, _Thi, 0, () => Thing);
export var GetFlowTemplateRevisions = op(
  n0,
  _GFTRet,
  0,
  () => GetFlowTemplateRevisionsRequest,
  () => GetFlowTemplateRevisionsResponse
);
export var GetSystemTemplateRevisions = op(
  n0,
  _GSTRet,
  0,
  () => GetSystemTemplateRevisionsRequest,
  () => GetSystemTemplateRevisionsResponse
);
export var ListFlowExecutionMessages = op(
  n0,
  _LFEM,
  0,
  () => ListFlowExecutionMessagesRequest,
  () => ListFlowExecutionMessagesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var SearchFlowExecutions = op(
  n0,
  _SFE,
  0,
  () => SearchFlowExecutionsRequest,
  () => SearchFlowExecutionsResponse
);
export var SearchFlowTemplates = op(
  n0,
  _SFT,
  0,
  () => SearchFlowTemplatesRequest,
  () => SearchFlowTemplatesResponse
);
export var SearchSystemInstances = op(
  n0,
  _SSI,
  0,
  () => SearchSystemInstancesRequest,
  () => SearchSystemInstancesResponse
);
export var SearchSystemTemplates = op(
  n0,
  _SST,
  0,
  () => SearchSystemTemplatesRequest,
  () => SearchSystemTemplatesResponse
);
export var SearchThings = op(
  n0,
  _ST,
  0,
  () => SearchThingsRequest,
  () => SearchThingsResponse
);
