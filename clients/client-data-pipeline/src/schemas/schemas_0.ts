export const _AP = "ActivatePipeline";
export const _API = "ActivatePipelineInput";
export const _APO = "ActivatePipelineOutput";
export const _AT = "AddTags";
export const _ATI = "AddTagsInput";
export const _ATO = "AddTagsOutput";
export const _CP = "CreatePipeline";
export const _CPI = "CreatePipelineInput";
export const _CPO = "CreatePipelineOutput";
export const _DO = "DescribeObjects";
export const _DOI = "DescribeObjectsInput";
export const _DOO = "DescribeObjectsOutput";
export const _DP = "DeactivatePipeline";
export const _DPI = "DeactivatePipelineInput";
export const _DPIe = "DeletePipelineInput";
export const _DPIes = "DescribePipelinesInput";
export const _DPO = "DeactivatePipelineOutput";
export const _DPOe = "DescribePipelinesOutput";
export const _DPe = "DeletePipeline";
export const _DPes = "DescribePipelines";
export const _EE = "EvaluateExpression";
export const _EEI = "EvaluateExpressionInput";
export const _EEO = "EvaluateExpressionOutput";
export const _F = "Field";
export const _GPD = "GetPipelineDefinition";
export const _GPDI = "GetPipelineDefinitionInput";
export const _GPDO = "GetPipelineDefinitionOutput";
export const _II = "InstanceIdentity";
export const _IRE = "InvalidRequestException";
export const _ISE = "InternalServiceError";
export const _LP = "ListPipelines";
export const _LPI = "ListPipelinesInput";
export const _LPO = "ListPipelinesOutput";
export const _O = "Operator";
export const _PA = "ParameterAttribute";
export const _PAL = "ParameterAttributeList";
export const _PD = "PipelineDescription";
export const _PDE = "PipelineDeletedException";
export const _PDL = "PipelineDescriptionList";
export const _PFT = "PollForTask";
export const _PFTI = "PollForTaskInput";
export const _PFTO = "PollForTaskOutput";
export const _PIN = "PipelineIdName";
export const _PNFE = "PipelineNotFoundException";
export const _PO = "ParameterObject";
export const _POL = "ParameterObjectList";
export const _POLi = "PipelineObjectList";
export const _POM = "PipelineObjectMap";
export const _POi = "PipelineObject";
export const _PPD = "PutPipelineDefinition";
export const _PPDI = "PutPipelineDefinitionInput";
export const _PPDO = "PutPipelineDefinitionOutput";
export const _PV = "ParameterValue";
export const _PVL = "ParameterValueList";
export const _Q = "Query";
export const _QO = "QueryObjects";
export const _QOI = "QueryObjectsInput";
export const _QOO = "QueryObjectsOutput";
export const _RT = "RemoveTags";
export const _RTI = "RemoveTagsInput";
export const _RTO = "RemoveTagsOutput";
export const _RTP = "ReportTaskProgress";
export const _RTPI = "ReportTaskProgressInput";
export const _RTPO = "ReportTaskProgressOutput";
export const _RTRH = "ReportTaskRunnerHeartbeat";
export const _RTRHI = "ReportTaskRunnerHeartbeatInput";
export const _RTRHO = "ReportTaskRunnerHeartbeatOutput";
export const _S = "Selector";
export const _SL = "SelectorList";
export const _SS = "SetStatus";
export const _SSI = "SetStatusInput";
export const _STS = "SetTaskStatus";
export const _STSI = "SetTaskStatusInput";
export const _STSO = "SetTaskStatusOutput";
export const _T = "Tag";
export const _TNFE = "TaskNotFoundException";
export const _TO = "TaskObject";
export const _VE = "ValidationError";
export const _VEa = "ValidationErrors";
export const _VPD = "ValidatePipelineDefinition";
export const _VPDI = "ValidatePipelineDefinitionInput";
export const _VPDO = "ValidatePipelineDefinitionOutput";
export const _VW = "ValidationWarning";
export const _VWa = "ValidationWarnings";
export const _a = "attributes";
export const _aI = "attemptId";
export const _c = "client";
export const _cA = "cancelActive";
export const _ca = "canceled";
export const _d = "description";
export const _do = "document";
export const _e = "expression";
export const _eE = "evaluateExpressions";
export const _eEv = "evaluatedExpression";
export const _eI = "errorId";
export const _eM = "errorMessage";
export const _eST = "errorStackTrace";
export const _er = "error";
export const _err = "errored";
export const _erro = "errors";
export const _f = "fields";
export const _fL = "fieldList";
export const _fN = "fieldName";
export const _h = "hostname";
export const _hMR = "hasMoreResults";
export const _i = "id";
export const _iI = "instanceIdentity";
export const _id = "ids";
export const _k = "key";
export const _l = "limit";
export const _m = "marker";
export const _me = "message";
export const _n = "name";
export const _o = "operator";
export const _oI = "objectIds";
export const _oIb = "objectId";
export const _ob = "objects";
export const _pDL = "pipelineDescriptionList";
export const _pI = "pipelineId";
export const _pIL = "pipelineIdList";
export const _pIi = "pipelineIds";
export const _pL = "pipelineList";
export const _pO = "pipelineObjects";
export const _pOa = "parameterObjects";
export const _pV = "parameterValues";
export const _q = "query";
export const _rV = "refValue";
export const _s = "signature";
export const _sT = "startTimestamp";
export const _sV = "stringValue";
export const _se = "server";
export const _sel = "selectors";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.datapipeline";
export const _sp = "sphere";
export const _st = "status";
export const _t = "tags";
export const _tI = "taskId";
export const _tIa = "taskrunnerId";
export const _tK = "tagKeys";
export const _tL = "tagList";
export const _tO = "taskObject";
export const _tS = "taskStatus";
export const _te = "terminate";
export const _ty = "type";
export const _uI = "uniqueId";
export const _v = "version";
export const _vE = "validationErrors";
export const _vW = "validationWarnings";
export const _va = "values";
export const _val = "value";
export const _w = "warnings";
export const _wG = "workerGroup";
export const n0 = "com.amazonaws.datapipeline";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { DataPipelineServiceException as __DataPipelineServiceException } from "../models/DataPipelineServiceException";
import {
  InternalServiceError as __InternalServiceError,
  InvalidRequestException as __InvalidRequestException,
  PipelineDeletedException as __PipelineDeletedException,
  PipelineNotFoundException as __PipelineNotFoundException,
  TaskNotFoundException as __TaskNotFoundException,
} from "../models/index";

/* eslint no-var: 0 */

export var ActivatePipelineInput: StaticStructureSchema = [
  3,
  n0,
  _API,
  0,
  [_pI, _pV, _sT],
  [0, () => ParameterValueList, 4],
];
export var ActivatePipelineOutput: StaticStructureSchema = [3, n0, _APO, 0, [], []];
export var AddTagsInput: StaticStructureSchema = [3, n0, _ATI, 0, [_pI, _t], [0, () => tagList]];
export var AddTagsOutput: StaticStructureSchema = [3, n0, _ATO, 0, [], []];
export var CreatePipelineInput: StaticStructureSchema = [3, n0, _CPI, 0, [_n, _uI, _d, _t], [0, 0, 0, () => tagList]];
export var CreatePipelineOutput: StaticStructureSchema = [3, n0, _CPO, 0, [_pI], [0]];
export var DeactivatePipelineInput: StaticStructureSchema = [3, n0, _DPI, 0, [_pI, _cA], [0, 2]];
export var DeactivatePipelineOutput: StaticStructureSchema = [3, n0, _DPO, 0, [], []];
export var DeletePipelineInput: StaticStructureSchema = [3, n0, _DPIe, 0, [_pI], [0]];
export var DescribeObjectsInput: StaticStructureSchema = [3, n0, _DOI, 0, [_pI, _oI, _eE, _m], [0, 64 | 0, 2, 0]];
export var DescribeObjectsOutput: StaticStructureSchema = [
  3,
  n0,
  _DOO,
  0,
  [_pO, _m, _hMR],
  [() => PipelineObjectList, 0, 2],
];
export var DescribePipelinesInput: StaticStructureSchema = [3, n0, _DPIes, 0, [_pIi], [64 | 0]];
export var DescribePipelinesOutput: StaticStructureSchema = [3, n0, _DPOe, 0, [_pDL], [() => PipelineDescriptionList]];
export var EvaluateExpressionInput: StaticStructureSchema = [3, n0, _EEI, 0, [_pI, _oIb, _e], [0, 0, 0]];
export var EvaluateExpressionOutput: StaticStructureSchema = [3, n0, _EEO, 0, [_eEv], [0]];
export var Field: StaticStructureSchema = [3, n0, _F, 0, [_k, _sV, _rV], [0, 0, 0]];
export var GetPipelineDefinitionInput: StaticStructureSchema = [3, n0, _GPDI, 0, [_pI, _v], [0, 0]];
export var GetPipelineDefinitionOutput: StaticStructureSchema = [
  3,
  n0,
  _GPDO,
  0,
  [_pO, _pOa, _pV],
  [() => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList],
];
export var InstanceIdentity: StaticStructureSchema = [3, n0, _II, 0, [_do, _s], [0, 0]];
export var InternalServiceError: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_er]: _se,
  },
  [_me],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServiceError, __InternalServiceError);

export var InvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_er]: _c,
  },
  [_me],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);

export var ListPipelinesInput: StaticStructureSchema = [3, n0, _LPI, 0, [_m], [0]];
export var ListPipelinesOutput: StaticStructureSchema = [3, n0, _LPO, 0, [_pIL, _m, _hMR], [() => pipelineList, 0, 2]];
export var Operator: StaticStructureSchema = [3, n0, _O, 0, [_ty, _va], [0, 64 | 0]];
export var ParameterAttribute: StaticStructureSchema = [3, n0, _PA, 0, [_k, _sV], [0, 0]];
export var ParameterObject: StaticStructureSchema = [3, n0, _PO, 0, [_i, _a], [0, () => ParameterAttributeList]];
export var ParameterValue: StaticStructureSchema = [3, n0, _PV, 0, [_i, _sV], [0, 0]];
export var PipelineDeletedException: StaticErrorSchema = [
  -3,
  n0,
  _PDE,
  {
    [_er]: _c,
  },
  [_me],
  [0],
];
TypeRegistry.for(n0).registerError(PipelineDeletedException, __PipelineDeletedException);

export var PipelineDescription: StaticStructureSchema = [
  3,
  n0,
  _PD,
  0,
  [_pI, _n, _f, _d, _t],
  [0, 0, () => fieldList, 0, () => tagList],
];
export var PipelineIdName: StaticStructureSchema = [3, n0, _PIN, 0, [_i, _n], [0, 0]];
export var PipelineNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _PNFE,
  {
    [_er]: _c,
  },
  [_me],
  [0],
];
TypeRegistry.for(n0).registerError(PipelineNotFoundException, __PipelineNotFoundException);

export var PipelineObject: StaticStructureSchema = [3, n0, _POi, 0, [_i, _n, _f], [0, 0, () => fieldList]];
export var PollForTaskInput: StaticStructureSchema = [3, n0, _PFTI, 0, [_wG, _h, _iI], [0, 0, () => InstanceIdentity]];
export var PollForTaskOutput: StaticStructureSchema = [3, n0, _PFTO, 0, [_tO], [() => TaskObject]];
export var PutPipelineDefinitionInput: StaticStructureSchema = [
  3,
  n0,
  _PPDI,
  0,
  [_pI, _pO, _pOa, _pV],
  [0, () => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList],
];
export var PutPipelineDefinitionOutput: StaticStructureSchema = [
  3,
  n0,
  _PPDO,
  0,
  [_vE, _vW, _err],
  [() => ValidationErrors, () => ValidationWarnings, 2],
];
export var Query: StaticStructureSchema = [3, n0, _Q, 0, [_sel], [() => SelectorList]];
export var QueryObjectsInput: StaticStructureSchema = [
  3,
  n0,
  _QOI,
  0,
  [_pI, _q, _sp, _m, _l],
  [0, () => Query, 0, 0, 1],
];
export var QueryObjectsOutput: StaticStructureSchema = [3, n0, _QOO, 0, [_id, _m, _hMR], [64 | 0, 0, 2]];
export var RemoveTagsInput: StaticStructureSchema = [3, n0, _RTI, 0, [_pI, _tK], [0, 64 | 0]];
export var RemoveTagsOutput: StaticStructureSchema = [3, n0, _RTO, 0, [], []];
export var ReportTaskProgressInput: StaticStructureSchema = [3, n0, _RTPI, 0, [_tI, _f], [0, () => fieldList]];
export var ReportTaskProgressOutput: StaticStructureSchema = [3, n0, _RTPO, 0, [_ca], [2]];
export var ReportTaskRunnerHeartbeatInput: StaticStructureSchema = [3, n0, _RTRHI, 0, [_tIa, _wG, _h], [0, 0, 0]];
export var ReportTaskRunnerHeartbeatOutput: StaticStructureSchema = [3, n0, _RTRHO, 0, [_te], [2]];
export var Selector: StaticStructureSchema = [3, n0, _S, 0, [_fN, _o], [0, () => Operator]];
export var SetStatusInput: StaticStructureSchema = [3, n0, _SSI, 0, [_pI, _oI, _st], [0, 64 | 0, 0]];
export var SetTaskStatusInput: StaticStructureSchema = [3, n0, _STSI, 0, [_tI, _tS, _eI, _eM, _eST], [0, 0, 0, 0, 0]];
export var SetTaskStatusOutput: StaticStructureSchema = [3, n0, _STSO, 0, [], []];
export var Tag: StaticStructureSchema = [3, n0, _T, 0, [_k, _val], [0, 0]];
export var TaskNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _TNFE,
  {
    [_er]: _c,
  },
  [_me],
  [0],
];
TypeRegistry.for(n0).registerError(TaskNotFoundException, __TaskNotFoundException);

export var TaskObject: StaticStructureSchema = [
  3,
  n0,
  _TO,
  0,
  [_tI, _pI, _aI, _ob],
  [0, 0, 0, () => PipelineObjectMap],
];
export var ValidatePipelineDefinitionInput: StaticStructureSchema = [
  3,
  n0,
  _VPDI,
  0,
  [_pI, _pO, _pOa, _pV],
  [0, () => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList],
];
export var ValidatePipelineDefinitionOutput: StaticStructureSchema = [
  3,
  n0,
  _VPDO,
  0,
  [_vE, _vW, _err],
  [() => ValidationErrors, () => ValidationWarnings, 2],
];
export var ValidationError: StaticStructureSchema = [3, n0, _VE, 0, [_i, _erro], [0, 64 | 0]];
export var ValidationWarning: StaticStructureSchema = [3, n0, _VW, 0, [_i, _w], [0, 64 | 0]];
export var __Unit = "unit" as const;

export var DataPipelineServiceException: StaticErrorSchema = [-3, _sm, "DataPipelineServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(DataPipelineServiceException, __DataPipelineServiceException);

export var fieldList: StaticListSchema = [1, n0, _fL, 0, () => Field];
export var idList = 64 | 0;

export var ParameterAttributeList: StaticListSchema = [1, n0, _PAL, 0, () => ParameterAttribute];
export var ParameterObjectList: StaticListSchema = [1, n0, _POL, 0, () => ParameterObject];
export var ParameterValueList: StaticListSchema = [1, n0, _PVL, 0, () => ParameterValue];
export var PipelineDescriptionList: StaticListSchema = [1, n0, _PDL, 0, () => PipelineDescription];
export var pipelineList: StaticListSchema = [1, n0, _pL, 0, () => PipelineIdName];
export var PipelineObjectList: StaticListSchema = [1, n0, _POLi, 0, () => PipelineObject];
export var SelectorList: StaticListSchema = [1, n0, _SL, 0, () => Selector];
export var stringList = 64 | 0;

export var tagList: StaticListSchema = [1, n0, _tL, 0, () => Tag];
export var ValidationErrors: StaticListSchema = [1, n0, _VEa, 0, () => ValidationError];
export var validationMessages = 64 | 0;

export var ValidationWarnings: StaticListSchema = [1, n0, _VWa, 0, () => ValidationWarning];
export var PipelineObjectMap: StaticMapSchema = [2, n0, _POM, 0, 0, () => PipelineObject];
export var ActivatePipeline: StaticOperationSchema = [
  9,
  n0,
  _AP,
  0,
  () => ActivatePipelineInput,
  () => ActivatePipelineOutput,
];
export var AddTags: StaticOperationSchema = [9, n0, _AT, 0, () => AddTagsInput, () => AddTagsOutput];
export var CreatePipeline: StaticOperationSchema = [
  9,
  n0,
  _CP,
  0,
  () => CreatePipelineInput,
  () => CreatePipelineOutput,
];
export var DeactivatePipeline: StaticOperationSchema = [
  9,
  n0,
  _DP,
  0,
  () => DeactivatePipelineInput,
  () => DeactivatePipelineOutput,
];
export var DeletePipeline: StaticOperationSchema = [9, n0, _DPe, 0, () => DeletePipelineInput, () => __Unit];
export var DescribeObjects: StaticOperationSchema = [
  9,
  n0,
  _DO,
  0,
  () => DescribeObjectsInput,
  () => DescribeObjectsOutput,
];
export var DescribePipelines: StaticOperationSchema = [
  9,
  n0,
  _DPes,
  0,
  () => DescribePipelinesInput,
  () => DescribePipelinesOutput,
];
export var EvaluateExpression: StaticOperationSchema = [
  9,
  n0,
  _EE,
  0,
  () => EvaluateExpressionInput,
  () => EvaluateExpressionOutput,
];
export var GetPipelineDefinition: StaticOperationSchema = [
  9,
  n0,
  _GPD,
  0,
  () => GetPipelineDefinitionInput,
  () => GetPipelineDefinitionOutput,
];
export var ListPipelines: StaticOperationSchema = [9, n0, _LP, 0, () => ListPipelinesInput, () => ListPipelinesOutput];
export var PollForTask: StaticOperationSchema = [9, n0, _PFT, 0, () => PollForTaskInput, () => PollForTaskOutput];
export var PutPipelineDefinition: StaticOperationSchema = [
  9,
  n0,
  _PPD,
  0,
  () => PutPipelineDefinitionInput,
  () => PutPipelineDefinitionOutput,
];
export var QueryObjects: StaticOperationSchema = [9, n0, _QO, 0, () => QueryObjectsInput, () => QueryObjectsOutput];
export var RemoveTags: StaticOperationSchema = [9, n0, _RT, 0, () => RemoveTagsInput, () => RemoveTagsOutput];
export var ReportTaskProgress: StaticOperationSchema = [
  9,
  n0,
  _RTP,
  0,
  () => ReportTaskProgressInput,
  () => ReportTaskProgressOutput,
];
export var ReportTaskRunnerHeartbeat: StaticOperationSchema = [
  9,
  n0,
  _RTRH,
  0,
  () => ReportTaskRunnerHeartbeatInput,
  () => ReportTaskRunnerHeartbeatOutput,
];
export var SetStatus: StaticOperationSchema = [9, n0, _SS, 0, () => SetStatusInput, () => __Unit];
export var SetTaskStatus: StaticOperationSchema = [9, n0, _STS, 0, () => SetTaskStatusInput, () => SetTaskStatusOutput];
export var ValidatePipelineDefinition: StaticOperationSchema = [
  9,
  n0,
  _VPD,
  0,
  () => ValidatePipelineDefinitionInput,
  () => ValidatePipelineDefinitionOutput,
];
