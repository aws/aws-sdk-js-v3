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
import { error } from "@smithy/core/schema";

import { DataPipelineServiceException as __DataPipelineServiceException } from "../models/DataPipelineServiceException";
import {
  InternalServiceError as __InternalServiceError,
  InvalidRequestException as __InvalidRequestException,
  PipelineDeletedException as __PipelineDeletedException,
  PipelineNotFoundException as __PipelineNotFoundException,
} from "../models/index";

/* eslint no-var: 0 */

export var InternalServiceError = error(
  n0,
  _ISE,
  {
    [_er]: _se,
  },
  [_me],
  [0],

  __InternalServiceError
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_er]: _c,
  },
  [_me],
  [0],

  __InvalidRequestException
);
export var PipelineDeletedException = error(
  n0,
  _PDE,
  {
    [_er]: _c,
  },
  [_me],
  [0],

  __PipelineDeletedException
);
export var PipelineNotFoundException = error(
  n0,
  _PNFE,
  {
    [_er]: _c,
  },
  [_me],
  [0],

  __PipelineNotFoundException
);
export var DataPipelineServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.datapipeline",
  "DataPipelineServiceException",
  0,
  [],
  [],
  __DataPipelineServiceException
);
