const _AP = "ActivatePipeline";
const _API = "ActivatePipelineInput";
const _APO = "ActivatePipelineOutput";
const _AT = "AddTags";
const _ATI = "AddTagsInput";
const _ATO = "AddTagsOutput";
const _CP = "CreatePipeline";
const _CPI = "CreatePipelineInput";
const _CPO = "CreatePipelineOutput";
const _DO = "DescribeObjects";
const _DOI = "DescribeObjectsInput";
const _DOO = "DescribeObjectsOutput";
const _DP = "DeactivatePipeline";
const _DPI = "DeactivatePipelineInput";
const _DPIe = "DeletePipelineInput";
const _DPIes = "DescribePipelinesInput";
const _DPO = "DeactivatePipelineOutput";
const _DPOe = "DescribePipelinesOutput";
const _DPe = "DeletePipeline";
const _DPes = "DescribePipelines";
const _EE = "EvaluateExpression";
const _EEI = "EvaluateExpressionInput";
const _EEO = "EvaluateExpressionOutput";
const _F = "Field";
const _GPD = "GetPipelineDefinition";
const _GPDI = "GetPipelineDefinitionInput";
const _GPDO = "GetPipelineDefinitionOutput";
const _II = "InstanceIdentity";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServiceError";
const _LP = "ListPipelines";
const _LPI = "ListPipelinesInput";
const _LPO = "ListPipelinesOutput";
const _O = "Operator";
const _PA = "ParameterAttribute";
const _PAL = "ParameterAttributeList";
const _PD = "PipelineDescription";
const _PDE = "PipelineDeletedException";
const _PDL = "PipelineDescriptionList";
const _PFT = "PollForTask";
const _PFTI = "PollForTaskInput";
const _PFTO = "PollForTaskOutput";
const _PIN = "PipelineIdName";
const _PNFE = "PipelineNotFoundException";
const _PO = "ParameterObject";
const _POL = "ParameterObjectList";
const _POLi = "PipelineObjectList";
const _POM = "PipelineObjectMap";
const _POi = "PipelineObject";
const _PPD = "PutPipelineDefinition";
const _PPDI = "PutPipelineDefinitionInput";
const _PPDO = "PutPipelineDefinitionOutput";
const _PV = "ParameterValue";
const _PVL = "ParameterValueList";
const _Q = "Query";
const _QO = "QueryObjects";
const _QOI = "QueryObjectsInput";
const _QOO = "QueryObjectsOutput";
const _RT = "RemoveTags";
const _RTI = "RemoveTagsInput";
const _RTO = "RemoveTagsOutput";
const _RTP = "ReportTaskProgress";
const _RTPI = "ReportTaskProgressInput";
const _RTPO = "ReportTaskProgressOutput";
const _RTRH = "ReportTaskRunnerHeartbeat";
const _RTRHI = "ReportTaskRunnerHeartbeatInput";
const _RTRHO = "ReportTaskRunnerHeartbeatOutput";
const _S = "Selector";
const _SL = "SelectorList";
const _SS = "SetStatus";
const _SSI = "SetStatusInput";
const _STS = "SetTaskStatus";
const _STSI = "SetTaskStatusInput";
const _STSO = "SetTaskStatusOutput";
const _T = "Tag";
const _TNFE = "TaskNotFoundException";
const _TO = "TaskObject";
const _VE = "ValidationError";
const _VEa = "ValidationErrors";
const _VPD = "ValidatePipelineDefinition";
const _VPDI = "ValidatePipelineDefinitionInput";
const _VPDO = "ValidatePipelineDefinitionOutput";
const _VW = "ValidationWarning";
const _VWa = "ValidationWarnings";
const _a = "attributes";
const _aI = "attemptId";
const _c = "client";
const _cA = "cancelActive";
const _ca = "canceled";
const _d = "description";
const _do = "document";
const _e = "expression";
const _eE = "evaluateExpressions";
const _eEv = "evaluatedExpression";
const _eI = "errorId";
const _eM = "errorMessage";
const _eST = "errorStackTrace";
const _er = "error";
const _err = "errored";
const _erro = "errors";
const _f = "fields";
const _fL = "fieldList";
const _fN = "fieldName";
const _h = "hostname";
const _hMR = "hasMoreResults";
const _i = "id";
const _iI = "instanceIdentity";
const _id = "ids";
const _k = "key";
const _l = "limit";
const _m = "marker";
const _me = "message";
const _n = "name";
const _o = "operator";
const _oI = "objectIds";
const _oIb = "objectId";
const _ob = "objects";
const _pDL = "pipelineDescriptionList";
const _pI = "pipelineId";
const _pIL = "pipelineIdList";
const _pIi = "pipelineIds";
const _pL = "pipelineList";
const _pO = "pipelineObjects";
const _pOa = "parameterObjects";
const _pV = "parameterValues";
const _q = "query";
const _rV = "refValue";
const _s = "signature";
const _sT = "startTimestamp";
const _sV = "stringValue";
const _se = "server";
const _sel = "selectors";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.datapipeline";
const _sp = "sphere";
const _st = "status";
const _t = "tags";
const _tI = "taskId";
const _tIa = "taskrunnerId";
const _tK = "tagKeys";
const _tL = "tagList";
const _tO = "taskObject";
const _tS = "taskStatus";
const _te = "terminate";
const _ty = "type";
const _uI = "uniqueId";
const _v = "version";
const _vE = "validationErrors";
const _vW = "validationWarnings";
const _va = "values";
const _val = "value";
const _w = "warnings";
const _wG = "workerGroup";
const n0 = "com.amazonaws.datapipeline";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { DataPipelineServiceException } from "../models/DataPipelineServiceException";
import {
  InternalServiceError,
  InvalidRequestException,
  PipelineDeletedException,
  PipelineNotFoundException,
  TaskNotFoundException,
} from "../models/errors";

/* eslint no-var: 0 */
export var ActivatePipelineInput$: StaticStructureSchema = [
  3,
  n0,
  _API,
  0,
  [_pI, _pV, _sT],
  [0, () => ParameterValueList, 4],
];
export var ActivatePipelineOutput$: StaticStructureSchema = [3, n0, _APO, 0, [], []];
export var AddTagsInput$: StaticStructureSchema = [3, n0, _ATI, 0, [_pI, _t], [0, () => tagList]];
export var AddTagsOutput$: StaticStructureSchema = [3, n0, _ATO, 0, [], []];
export var CreatePipelineInput$: StaticStructureSchema = [3, n0, _CPI, 0, [_n, _uI, _d, _t], [0, 0, 0, () => tagList]];
export var CreatePipelineOutput$: StaticStructureSchema = [3, n0, _CPO, 0, [_pI], [0]];
export var DeactivatePipelineInput$: StaticStructureSchema = [3, n0, _DPI, 0, [_pI, _cA], [0, 2]];
export var DeactivatePipelineOutput$: StaticStructureSchema = [3, n0, _DPO, 0, [], []];
export var DeletePipelineInput$: StaticStructureSchema = [3, n0, _DPIe, 0, [_pI], [0]];
export var DescribeObjectsInput$: StaticStructureSchema = [3, n0, _DOI, 0, [_pI, _oI, _eE, _m], [0, 64 | 0, 2, 0]];
export var DescribeObjectsOutput$: StaticStructureSchema = [
  3,
  n0,
  _DOO,
  0,
  [_pO, _m, _hMR],
  [() => PipelineObjectList, 0, 2],
];
export var DescribePipelinesInput$: StaticStructureSchema = [3, n0, _DPIes, 0, [_pIi], [64 | 0]];
export var DescribePipelinesOutput$: StaticStructureSchema = [3, n0, _DPOe, 0, [_pDL], [() => PipelineDescriptionList]];
export var EvaluateExpressionInput$: StaticStructureSchema = [3, n0, _EEI, 0, [_pI, _oIb, _e], [0, 0, 0]];
export var EvaluateExpressionOutput$: StaticStructureSchema = [3, n0, _EEO, 0, [_eEv], [0]];
export var Field$: StaticStructureSchema = [3, n0, _F, 0, [_k, _sV, _rV], [0, 0, 0]];
export var GetPipelineDefinitionInput$: StaticStructureSchema = [3, n0, _GPDI, 0, [_pI, _v], [0, 0]];
export var GetPipelineDefinitionOutput$: StaticStructureSchema = [
  3,
  n0,
  _GPDO,
  0,
  [_pO, _pOa, _pV],
  [() => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList],
];
export var InstanceIdentity$: StaticStructureSchema = [3, n0, _II, 0, [_do, _s], [0, 0]];
export var InternalServiceError$: StaticErrorSchema = [-3, n0, _ISE, { [_er]: _se }, [_me], [0]];
TypeRegistry.for(n0).registerError(InternalServiceError$, InternalServiceError);
export var InvalidRequestException$: StaticErrorSchema = [-3, n0, _IRE, { [_er]: _c }, [_me], [0]];
TypeRegistry.for(n0).registerError(InvalidRequestException$, InvalidRequestException);
export var ListPipelinesInput$: StaticStructureSchema = [3, n0, _LPI, 0, [_m], [0]];
export var ListPipelinesOutput$: StaticStructureSchema = [3, n0, _LPO, 0, [_pIL, _m, _hMR], [() => pipelineList, 0, 2]];
export var Operator$: StaticStructureSchema = [3, n0, _O, 0, [_ty, _va], [0, 64 | 0]];
export var ParameterAttribute$: StaticStructureSchema = [3, n0, _PA, 0, [_k, _sV], [0, 0]];
export var ParameterObject$: StaticStructureSchema = [3, n0, _PO, 0, [_i, _a], [0, () => ParameterAttributeList]];
export var ParameterValue$: StaticStructureSchema = [3, n0, _PV, 0, [_i, _sV], [0, 0]];
export var PipelineDeletedException$: StaticErrorSchema = [-3, n0, _PDE, { [_er]: _c }, [_me], [0]];
TypeRegistry.for(n0).registerError(PipelineDeletedException$, PipelineDeletedException);
export var PipelineDescription$: StaticStructureSchema = [
  3,
  n0,
  _PD,
  0,
  [_pI, _n, _f, _d, _t],
  [0, 0, () => fieldList, 0, () => tagList],
];
export var PipelineIdName$: StaticStructureSchema = [3, n0, _PIN, 0, [_i, _n], [0, 0]];
export var PipelineNotFoundException$: StaticErrorSchema = [-3, n0, _PNFE, { [_er]: _c }, [_me], [0]];
TypeRegistry.for(n0).registerError(PipelineNotFoundException$, PipelineNotFoundException);
export var PipelineObject$: StaticStructureSchema = [3, n0, _POi, 0, [_i, _n, _f], [0, 0, () => fieldList]];
export var PollForTaskInput$: StaticStructureSchema = [
  3,
  n0,
  _PFTI,
  0,
  [_wG, _h, _iI],
  [0, 0, () => InstanceIdentity$],
];
export var PollForTaskOutput$: StaticStructureSchema = [3, n0, _PFTO, 0, [_tO], [() => TaskObject$]];
export var PutPipelineDefinitionInput$: StaticStructureSchema = [
  3,
  n0,
  _PPDI,
  0,
  [_pI, _pO, _pOa, _pV],
  [0, () => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList],
];
export var PutPipelineDefinitionOutput$: StaticStructureSchema = [
  3,
  n0,
  _PPDO,
  0,
  [_vE, _vW, _err],
  [() => ValidationErrors, () => ValidationWarnings, 2],
];
export var Query$: StaticStructureSchema = [3, n0, _Q, 0, [_sel], [() => SelectorList]];
export var QueryObjectsInput$: StaticStructureSchema = [
  3,
  n0,
  _QOI,
  0,
  [_pI, _q, _sp, _m, _l],
  [0, () => Query$, 0, 0, 1],
];
export var QueryObjectsOutput$: StaticStructureSchema = [3, n0, _QOO, 0, [_id, _m, _hMR], [64 | 0, 0, 2]];
export var RemoveTagsInput$: StaticStructureSchema = [3, n0, _RTI, 0, [_pI, _tK], [0, 64 | 0]];
export var RemoveTagsOutput$: StaticStructureSchema = [3, n0, _RTO, 0, [], []];
export var ReportTaskProgressInput$: StaticStructureSchema = [3, n0, _RTPI, 0, [_tI, _f], [0, () => fieldList]];
export var ReportTaskProgressOutput$: StaticStructureSchema = [3, n0, _RTPO, 0, [_ca], [2]];
export var ReportTaskRunnerHeartbeatInput$: StaticStructureSchema = [3, n0, _RTRHI, 0, [_tIa, _wG, _h], [0, 0, 0]];
export var ReportTaskRunnerHeartbeatOutput$: StaticStructureSchema = [3, n0, _RTRHO, 0, [_te], [2]];
export var Selector$: StaticStructureSchema = [3, n0, _S, 0, [_fN, _o], [0, () => Operator$]];
export var SetStatusInput$: StaticStructureSchema = [3, n0, _SSI, 0, [_pI, _oI, _st], [0, 64 | 0, 0]];
export var SetTaskStatusInput$: StaticStructureSchema = [3, n0, _STSI, 0, [_tI, _tS, _eI, _eM, _eST], [0, 0, 0, 0, 0]];
export var SetTaskStatusOutput$: StaticStructureSchema = [3, n0, _STSO, 0, [], []];
export var Tag$: StaticStructureSchema = [3, n0, _T, 0, [_k, _val], [0, 0]];
export var TaskNotFoundException$: StaticErrorSchema = [-3, n0, _TNFE, { [_er]: _c }, [_me], [0]];
TypeRegistry.for(n0).registerError(TaskNotFoundException$, TaskNotFoundException);
export var TaskObject$: StaticStructureSchema = [
  3,
  n0,
  _TO,
  0,
  [_tI, _pI, _aI, _ob],
  [0, 0, 0, () => PipelineObjectMap],
];
export var ValidatePipelineDefinitionInput$: StaticStructureSchema = [
  3,
  n0,
  _VPDI,
  0,
  [_pI, _pO, _pOa, _pV],
  [0, () => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList],
];
export var ValidatePipelineDefinitionOutput$: StaticStructureSchema = [
  3,
  n0,
  _VPDO,
  0,
  [_vE, _vW, _err],
  [() => ValidationErrors, () => ValidationWarnings, 2],
];
export var ValidationError$: StaticStructureSchema = [3, n0, _VE, 0, [_i, _erro], [0, 64 | 0]];
export var ValidationWarning$: StaticStructureSchema = [3, n0, _VW, 0, [_i, _w], [0, 64 | 0]];
var __Unit = "unit" as const;
export var DataPipelineServiceException$: StaticErrorSchema = [-3, _sm, "DataPipelineServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(DataPipelineServiceException$, DataPipelineServiceException);
var fieldList: StaticListSchema = [1, n0, _fL, 0, () => Field$];
var idList = 64 | 0;
var ParameterAttributeList: StaticListSchema = [1, n0, _PAL, 0, () => ParameterAttribute$];
var ParameterObjectList: StaticListSchema = [1, n0, _POL, 0, () => ParameterObject$];
var ParameterValueList: StaticListSchema = [1, n0, _PVL, 0, () => ParameterValue$];
var PipelineDescriptionList: StaticListSchema = [1, n0, _PDL, 0, () => PipelineDescription$];
var pipelineList: StaticListSchema = [1, n0, _pL, 0, () => PipelineIdName$];
var PipelineObjectList: StaticListSchema = [1, n0, _POLi, 0, () => PipelineObject$];
var SelectorList: StaticListSchema = [1, n0, _SL, 0, () => Selector$];
var stringList = 64 | 0;
var tagList: StaticListSchema = [1, n0, _tL, 0, () => Tag$];
var ValidationErrors: StaticListSchema = [1, n0, _VEa, 0, () => ValidationError$];
var validationMessages = 64 | 0;
var ValidationWarnings: StaticListSchema = [1, n0, _VWa, 0, () => ValidationWarning$];
var PipelineObjectMap: StaticMapSchema = [2, n0, _POM, 0, 0, () => PipelineObject$];
export var ActivatePipeline$: StaticOperationSchema = [
  9,
  n0,
  _AP,
  0,
  () => ActivatePipelineInput$,
  () => ActivatePipelineOutput$,
];
export var AddTags$: StaticOperationSchema = [9, n0, _AT, 0, () => AddTagsInput$, () => AddTagsOutput$];
export var CreatePipeline$: StaticOperationSchema = [
  9,
  n0,
  _CP,
  0,
  () => CreatePipelineInput$,
  () => CreatePipelineOutput$,
];
export var DeactivatePipeline$: StaticOperationSchema = [
  9,
  n0,
  _DP,
  0,
  () => DeactivatePipelineInput$,
  () => DeactivatePipelineOutput$,
];
export var DeletePipeline$: StaticOperationSchema = [9, n0, _DPe, 0, () => DeletePipelineInput$, () => __Unit];
export var DescribeObjects$: StaticOperationSchema = [
  9,
  n0,
  _DO,
  0,
  () => DescribeObjectsInput$,
  () => DescribeObjectsOutput$,
];
export var DescribePipelines$: StaticOperationSchema = [
  9,
  n0,
  _DPes,
  0,
  () => DescribePipelinesInput$,
  () => DescribePipelinesOutput$,
];
export var EvaluateExpression$: StaticOperationSchema = [
  9,
  n0,
  _EE,
  0,
  () => EvaluateExpressionInput$,
  () => EvaluateExpressionOutput$,
];
export var GetPipelineDefinition$: StaticOperationSchema = [
  9,
  n0,
  _GPD,
  0,
  () => GetPipelineDefinitionInput$,
  () => GetPipelineDefinitionOutput$,
];
export var ListPipelines$: StaticOperationSchema = [
  9,
  n0,
  _LP,
  0,
  () => ListPipelinesInput$,
  () => ListPipelinesOutput$,
];
export var PollForTask$: StaticOperationSchema = [9, n0, _PFT, 0, () => PollForTaskInput$, () => PollForTaskOutput$];
export var PutPipelineDefinition$: StaticOperationSchema = [
  9,
  n0,
  _PPD,
  0,
  () => PutPipelineDefinitionInput$,
  () => PutPipelineDefinitionOutput$,
];
export var QueryObjects$: StaticOperationSchema = [9, n0, _QO, 0, () => QueryObjectsInput$, () => QueryObjectsOutput$];
export var RemoveTags$: StaticOperationSchema = [9, n0, _RT, 0, () => RemoveTagsInput$, () => RemoveTagsOutput$];
export var ReportTaskProgress$: StaticOperationSchema = [
  9,
  n0,
  _RTP,
  0,
  () => ReportTaskProgressInput$,
  () => ReportTaskProgressOutput$,
];
export var ReportTaskRunnerHeartbeat$: StaticOperationSchema = [
  9,
  n0,
  _RTRH,
  0,
  () => ReportTaskRunnerHeartbeatInput$,
  () => ReportTaskRunnerHeartbeatOutput$,
];
export var SetStatus$: StaticOperationSchema = [9, n0, _SS, 0, () => SetStatusInput$, () => __Unit];
export var SetTaskStatus$: StaticOperationSchema = [
  9,
  n0,
  _STS,
  0,
  () => SetTaskStatusInput$,
  () => SetTaskStatusOutput$,
];
export var ValidatePipelineDefinition$: StaticOperationSchema = [
  9,
  n0,
  _VPD,
  0,
  () => ValidatePipelineDefinitionInput$,
  () => ValidatePipelineDefinitionOutput$,
];
