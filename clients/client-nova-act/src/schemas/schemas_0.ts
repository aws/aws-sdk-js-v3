const _ADE = "AccessDeniedException";
const _AE = "ActError";
const _AS = "ActSummary";
const _ASc = "ActSummaries";
const _C = "Call";
const _CA = "CreateAct";
const _CAR = "CreateActRequest";
const _CARr = "CreateActResponse";
const _CE = "ConflictException";
const _CI = "ClientInfo";
const _CIo = "CompatibilityInformation";
const _CR = "CallResult";
const _CRC = "CallResultContents";
const _CRCa = "CallResultContent";
const _CRa = "CallResults";
const _CS = "CreateSession";
const _CSR = "CreateSessionRequest";
const _CSRr = "CreateSessionResponse";
const _CWD = "CreateWorkflowDefinition";
const _CWDR = "CreateWorkflowDefinitionRequest";
const _CWDRr = "CreateWorkflowDefinitionResponse";
const _CWR = "CreateWorkflowRun";
const _CWRR = "CreateWorkflowRunRequest";
const _CWRRr = "CreateWorkflowRunResponse";
const _Ca = "Calls";
const _DWD = "DeleteWorkflowDefinition";
const _DWDR = "DeleteWorkflowDefinitionRequest";
const _DWDRe = "DeleteWorkflowDefinitionResponse";
const _DWR = "DeleteWorkflowRun";
const _DWRR = "DeleteWorkflowRunRequest";
const _DWRRe = "DeleteWorkflowRunResponse";
const _GWD = "GetWorkflowDefinition";
const _GWDR = "GetWorkflowDefinitionRequest";
const _GWDRe = "GetWorkflowDefinitionResponse";
const _GWR = "GetWorkflowRun";
const _GWRR = "GetWorkflowRunRequest";
const _GWRRe = "GetWorkflowRunResponse";
const _IAS = "InvokeActStep";
const _IASR = "InvokeActStepRequest";
const _IASRn = "InvokeActStepResponse";
const _ISE = "InternalServerException";
const _LA = "ListActs";
const _LAR = "ListActsRequest";
const _LARi = "ListActsResponse";
const _LM = "ListModels";
const _LMR = "ListModelsRequest";
const _LMRi = "ListModelsResponse";
const _LS = "ListSessions";
const _LSR = "ListSessionsRequest";
const _LSRi = "ListSessionsResponse";
const _LWD = "ListWorkflowDefinitions";
const _LWDR = "ListWorkflowDefinitionsRequest";
const _LWDRi = "ListWorkflowDefinitionsResponse";
const _LWR = "ListWorkflowRuns";
const _LWRR = "ListWorkflowRunsRequest";
const _LWRRi = "ListWorkflowRunsResponse";
const _MA = "ModelAlias";
const _MAo = "ModelAliases";
const _ML = "ModelLifecycle";
const _MS = "ModelSummary";
const _MSo = "ModelSummaries";
const _RA = "Retry-After";
const _RNFE = "ResourceNotFoundException";
const _SD = "SensitiveDocument";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "SensitiveString";
const _SSe = "SessionSummary";
const _SSes = "SessionSummaries";
const _T = "Task";
const _TD = "ToolDescription";
const _TE = "ThrottlingException";
const _TIS = "ToolInputSchema";
const _TL = "TraceLocation";
const _TS = "ToolSpec";
const _TSo = "ToolSpecs";
const _UA = "UpdateAct";
const _UAR = "UpdateActRequest";
const _UARp = "UpdateActResponse";
const _UWR = "UpdateWorkflowRun";
const _UWRR = "UpdateWorkflowRunRequest";
const _UWRRp = "UpdateWorkflowRunResponse";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _WD = "WorkflowDescription";
const _WDS = "WorkflowDefinitionSummary";
const _WDSo = "WorkflowDefinitionSummaries";
const _WEC = "WorkflowExportConfig";
const _WRS = "WorkflowRunSummary";
const _WRSo = "WorkflowRunSummaries";
const _a = "arn";
const _aI = "actId";
const _aN = "aliasName";
const _aS = "actSummaries";
const _c = "client";
const _cA = "createdAt";
const _cCV = "clientCompatibilityVersion";
const _cI = "callId";
const _cIl = "clientInfo";
const _cIo = "compatibilityInformation";
const _cR = "callResults";
const _cT = "clientToken";
const _cV = "compatibilityVersion";
const _ca = "calls";
const _co = "content";
const _d = "description";
const _e = "error";
const _eA = "endedAt";
const _eC = "exportConfig";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _i = "input";
const _iS = "inputSchema";
const _j = "json";
const _l = "location";
const _lGN = "logGroupName";
const _lMI = "latestModelId";
const _lT = "locationType";
const _m = "message";
const _mA = "modelAliases";
const _mCV = "minimumCompatibilityVersion";
const _mI = "modelId";
const _mL = "modelLifecycle";
const _mR = "maxResults";
const _mS = "modelSummaries";
const _n = "name";
const _nT = "nextToken";
const _pSI = "previousStepId";
const _qC = "quotaCode";
const _r = "reason";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rMI = "resolvedModelId";
const _rT = "resourceType";
const _s = "status";
const _sA = "startedAt";
const _sBN = "s3BucketName";
const _sC = "serviceCode";
const _sI = "sessionId";
const _sIt = "stepId";
const _sKP = "s3KeyPrefix";
const _sMI = "supportedModelIds";
const _sO = "sortOrder";
const _sS = "sessionSummaries";
const _sV = "sdkVersion";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.novaact";
const _t = "type";
const _tL = "traceLocation";
const _tS = "toolSpecs";
const _ta = "task";
const _te = "text";
const _wDA = "workflowDefinitionArn";
const _wDN = "workflowDefinitionName";
const _wDS = "workflowDefinitionSummaries";
const _wRA = "workflowRunArn";
const _wRI = "workflowRunId";
const _wRS = "workflowRunSummaries";
const n0 = "com.amazonaws.novaact";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { NovaActServiceException } from "../models/NovaActServiceException";

/* eslint no-var: 0 */
var SensitiveDocument: StaticSimpleSchema = [0, n0, _SD, 8, 15];
var SensitiveString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
var Task: StaticSimpleSchema = [0, n0, _T, 8, 0];
var ToolDescription: StaticSimpleSchema = [0, n0, _TD, 8, 0];
var WorkflowDescription: StaticSimpleSchema = [0, n0, _WD, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ActError$: StaticStructureSchema = [3, n0, _AE,
  0,
  [_m, _t],
  [[() => SensitiveString, 0], 0]
];
export var ActSummary$: StaticStructureSchema = [3, n0, _AS,
  0,
  [_wRI, _sI, _aI, _s, _sA, _eA, _tL],
  [0, 0, 0, 0, 5, 5, () => TraceLocation$]
];
export var Call$: StaticStructureSchema = [3, n0, _C,
  0,
  [_cI, _i, _n],
  [0, [() => SensitiveDocument, 0], 0]
];
export var CallResult$: StaticStructureSchema = [3, n0, _CR,
  0,
  [_cI, _co],
  [0, [() => CallResultContents, 0]]
];
export var ClientInfo$: StaticStructureSchema = [3, n0, _CI,
  0,
  [_cV, _sV],
  [1, 0]
];
export var CompatibilityInformation$: StaticStructureSchema = [3, n0, _CIo,
  0,
  [_cCV, _sMI, _m],
  [1, 64 | 0, 0]
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m, _rI, _rT],
  [0, 0, 0]
];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateActRequest$: StaticStructureSchema = [3, n0, _CAR,
  0,
  [_wDN, _wRI, _sI, _ta, _tS, _cT],
  [[0, 1], [0, 1], [0, 1], [() => Task, 0], [() => ToolSpecs, 0], [0, 4]]
];
export var CreateActResponse$: StaticStructureSchema = [3, n0, _CARr,
  0,
  [_aI, _s],
  [0, 0]
];
export var CreateSessionRequest$: StaticStructureSchema = [3, n0, _CSR,
  0,
  [_wDN, _wRI, _cT],
  [[0, 1], [0, 1], [0, 4]]
];
export var CreateSessionResponse$: StaticStructureSchema = [3, n0, _CSRr,
  0,
  [_sI],
  [0]
];
export var CreateWorkflowDefinitionRequest$: StaticStructureSchema = [3, n0, _CWDR,
  0,
  [_n, _d, _eC, _cT],
  [0, [() => WorkflowDescription, 0], () => WorkflowExportConfig$, [0, 4]]
];
export var CreateWorkflowDefinitionResponse$: StaticStructureSchema = [3, n0, _CWDRr,
  0,
  [_s],
  [0]
];
export var CreateWorkflowRunRequest$: StaticStructureSchema = [3, n0, _CWRR,
  0,
  [_wDN, _mI, _cT, _lGN, _cIl],
  [[0, 1], 0, [0, 4], 0, () => ClientInfo$]
];
export var CreateWorkflowRunResponse$: StaticStructureSchema = [3, n0, _CWRRr,
  0,
  [_wRI, _s],
  [0, 0]
];
export var DeleteWorkflowDefinitionRequest$: StaticStructureSchema = [3, n0, _DWDR,
  0,
  [_wDN],
  [[0, 1]]
];
export var DeleteWorkflowDefinitionResponse$: StaticStructureSchema = [3, n0, _DWDRe,
  0,
  [_s],
  [0]
];
export var DeleteWorkflowRunRequest$: StaticStructureSchema = [3, n0, _DWRR,
  0,
  [_wDN, _wRI],
  [[0, 1], [0, 1]]
];
export var DeleteWorkflowRunResponse$: StaticStructureSchema = [3, n0, _DWRRe,
  0,
  [_s],
  [0]
];
export var GetWorkflowDefinitionRequest$: StaticStructureSchema = [3, n0, _GWDR,
  0,
  [_wDN],
  [[0, 1]]
];
export var GetWorkflowDefinitionResponse$: StaticStructureSchema = [3, n0, _GWDRe,
  0,
  [_n, _a, _cA, _d, _eC, _s],
  [0, 0, 5, [() => WorkflowDescription, 0], () => WorkflowExportConfig$, 0]
];
export var GetWorkflowRunRequest$: StaticStructureSchema = [3, n0, _GWRR,
  0,
  [_wDN, _wRI],
  [[0, 1], [0, 1]]
];
export var GetWorkflowRunResponse$: StaticStructureSchema = [3, n0, _GWRRe,
  0,
  [_wRA, _wRI, _s, _sA, _eA, _mI, _lGN],
  [0, 0, 0, 5, 5, 0, 0]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS, _r],
  [0, [1, { [_hH]: _RA }], 0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var InvokeActStepRequest$: StaticStructureSchema = [3, n0, _IASR,
  0,
  [_wDN, _wRI, _sI, _aI, _cR, _pSI],
  [[0, 1], [0, 1], [0, 1], [0, 1], [() => CallResults, 0], 0]
];
export var InvokeActStepResponse$: StaticStructureSchema = [3, n0, _IASRn,
  0,
  [_ca, _sIt],
  [[() => Calls, 0], 0]
];
export var ListActsRequest$: StaticStructureSchema = [3, n0, _LAR,
  0,
  [_wDN, _wRI, _sI, _mR, _nT, _sO],
  [[0, 1], [0, { [_hQ]: _wRI }], [0, { [_hQ]: _sI }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], 0]
];
export var ListActsResponse$: StaticStructureSchema = [3, n0, _LARi,
  0,
  [_aS, _nT],
  [() => ActSummaries, 0]
];
export var ListModelsRequest$: StaticStructureSchema = [3, n0, _LMR,
  0,
  [_cCV],
  [[1, { [_hQ]: _cCV }]]
];
export var ListModelsResponse$: StaticStructureSchema = [3, n0, _LMRi,
  0,
  [_mS, _mA, _cIo],
  [() => ModelSummaries, () => ModelAliases, () => CompatibilityInformation$]
];
export var ListSessionsRequest$: StaticStructureSchema = [3, n0, _LSR,
  0,
  [_wDN, _wRI, _mR, _nT, _sO],
  [[0, 1], [0, 1], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], 0]
];
export var ListSessionsResponse$: StaticStructureSchema = [3, n0, _LSRi,
  0,
  [_sS, _nT],
  [() => SessionSummaries, 0]
];
export var ListWorkflowDefinitionsRequest$: StaticStructureSchema = [3, n0, _LWDR,
  0,
  [_mR, _nT, _sO],
  [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], 0]
];
export var ListWorkflowDefinitionsResponse$: StaticStructureSchema = [3, n0, _LWDRi,
  0,
  [_wDS, _nT],
  [() => WorkflowDefinitionSummaries, 0]
];
export var ListWorkflowRunsRequest$: StaticStructureSchema = [3, n0, _LWRR,
  0,
  [_wDN, _mR, _nT, _sO],
  [[0, 1], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], 0]
];
export var ListWorkflowRunsResponse$: StaticStructureSchema = [3, n0, _LWRRi,
  0,
  [_wRS, _nT],
  [() => WorkflowRunSummaries, 0]
];
export var ModelAlias$: StaticStructureSchema = [3, n0, _MA,
  0,
  [_aN, _lMI, _rMI],
  [0, 0, 0]
];
export var ModelLifecycle$: StaticStructureSchema = [3, n0, _ML,
  0,
  [_s],
  [0]
];
export var ModelSummary$: StaticStructureSchema = [3, n0, _MS,
  0,
  [_mI, _mL, _mCV],
  [0, () => ModelLifecycle$, 1]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0]
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var SessionSummary$: StaticStructureSchema = [3, n0, _SSe,
  0,
  [_sI],
  [0]
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var ToolSpec$: StaticStructureSchema = [3, n0, _TS,
  0,
  [_n, _d, _iS],
  [0, [() => ToolDescription, 0], [() => ToolInputSchema$, 0]]
];
export var TraceLocation$: StaticStructureSchema = [3, n0, _TL,
  0,
  [_lT, _l],
  [0, 0]
];
export var UpdateActRequest$: StaticStructureSchema = [3, n0, _UAR,
  0,
  [_wDN, _wRI, _sI, _aI, _s, _e],
  [[0, 1], [0, 1], [0, 1], [0, 1], 0, [() => ActError$, 0]]
];
export var UpdateActResponse$: StaticStructureSchema = [3, n0, _UARp,
  0,
  [],
  []
];
export var UpdateWorkflowRunRequest$: StaticStructureSchema = [3, n0, _UWRR,
  0,
  [_wDN, _wRI, _s],
  [[0, 1], [0, 1], 0]
];
export var UpdateWorkflowRunResponse$: StaticStructureSchema = [3, n0, _UWRRp,
  0,
  [],
  []
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_n, _m],
  [0, 0]
];
export var WorkflowDefinitionSummary$: StaticStructureSchema = [3, n0, _WDS,
  0,
  [_wDA, _wDN, _cA, _s],
  [0, 0, 5, 0]
];
export var WorkflowExportConfig$: StaticStructureSchema = [3, n0, _WEC,
  0,
  [_sBN, _sKP],
  [0, 0]
];
export var WorkflowRunSummary$: StaticStructureSchema = [3, n0, _WRS,
  0,
  [_wRA, _wRI, _s, _sA, _eA, _tL],
  [0, 0, 0, 5, 5, () => TraceLocation$]
];
export var NovaActServiceException$: StaticErrorSchema = [-3, _sm, "NovaActServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(NovaActServiceException$, NovaActServiceException);
var ActSummaries: StaticListSchema = [1, n0, _ASc,
  0, () => ActSummary$
];
var CallResultContents: StaticListSchema = [1, n0, _CRC,
  0, [() => CallResultContent$,
    0]
];
var CallResults: StaticListSchema = [1, n0, _CRa,
  0, [() => CallResult$,
    0]
];
var Calls: StaticListSchema = [1, n0, _Ca,
  0, [() => Call$,
    0]
];
var ModelAliases: StaticListSchema = [1, n0, _MAo,
  0, () => ModelAlias$
];
var ModelIdList = 64 | 0;
var ModelSummaries: StaticListSchema = [1, n0, _MSo,
  0, () => ModelSummary$
];
var SessionSummaries: StaticListSchema = [1, n0, _SSes,
  0, () => SessionSummary$
];
var ToolSpecs: StaticListSchema = [1, n0, _TSo,
  0, [() => ToolSpec$,
    0]
];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
var WorkflowDefinitionSummaries: StaticListSchema = [1, n0, _WDSo,
  0, () => WorkflowDefinitionSummary$
];
var WorkflowRunSummaries: StaticListSchema = [1, n0, _WRSo,
  0, () => WorkflowRunSummary$
];
export var CallResultContent$: StaticUnionSchema = [4, n0, _CRCa,
  8,
  [_te],
  [0]
];
export var ToolInputSchema$: StaticUnionSchema = [4, n0, _TIS,
  8,
  [_j],
  [15]
];
export var CreateAct$: StaticOperationSchema = [9, n0, _CA,
  { [_h]: ["PUT", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions/{sessionId}/acts", 201] }, () => CreateActRequest$, () => CreateActResponse$
];
export var CreateSession$: StaticOperationSchema = [9, n0, _CS,
  { [_h]: ["PUT", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions", 201] }, () => CreateSessionRequest$, () => CreateSessionResponse$
];
export var CreateWorkflowDefinition$: StaticOperationSchema = [9, n0, _CWD,
  { [_h]: ["PUT", "/workflow-definitions", 201] }, () => CreateWorkflowDefinitionRequest$, () => CreateWorkflowDefinitionResponse$
];
export var CreateWorkflowRun$: StaticOperationSchema = [9, n0, _CWR,
  { [_h]: ["PUT", "/workflow-definitions/{workflowDefinitionName}/workflow-runs", 201] }, () => CreateWorkflowRunRequest$, () => CreateWorkflowRunResponse$
];
export var DeleteWorkflowDefinition$: StaticOperationSchema = [9, n0, _DWD,
  { [_h]: ["DELETE", "/workflow-definitions/{workflowDefinitionName}", 202] }, () => DeleteWorkflowDefinitionRequest$, () => DeleteWorkflowDefinitionResponse$
];
export var DeleteWorkflowRun$: StaticOperationSchema = [9, n0, _DWR,
  { [_h]: ["DELETE", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}", 202] }, () => DeleteWorkflowRunRequest$, () => DeleteWorkflowRunResponse$
];
export var GetWorkflowDefinition$: StaticOperationSchema = [9, n0, _GWD,
  { [_h]: ["GET", "/workflow-definitions/{workflowDefinitionName}", 200] }, () => GetWorkflowDefinitionRequest$, () => GetWorkflowDefinitionResponse$
];
export var GetWorkflowRun$: StaticOperationSchema = [9, n0, _GWR,
  { [_h]: ["GET", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}", 200] }, () => GetWorkflowRunRequest$, () => GetWorkflowRunResponse$
];
export var InvokeActStep$: StaticOperationSchema = [9, n0, _IAS,
  { [_h]: ["PUT", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions/{sessionId}/acts/{actId}/invoke-step/", 200] }, () => InvokeActStepRequest$, () => InvokeActStepResponse$
];
export var ListActs$: StaticOperationSchema = [9, n0, _LA,
  { [_h]: ["POST", "/workflow-definitions/{workflowDefinitionName}/acts", 200] }, () => ListActsRequest$, () => ListActsResponse$
];
export var ListModels$: StaticOperationSchema = [9, n0, _LM,
  { [_h]: ["POST", "/models", 200] }, () => ListModelsRequest$, () => ListModelsResponse$
];
export var ListSessions$: StaticOperationSchema = [9, n0, _LS,
  { [_h]: ["POST", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}", 200] }, () => ListSessionsRequest$, () => ListSessionsResponse$
];
export var ListWorkflowDefinitions$: StaticOperationSchema = [9, n0, _LWD,
  { [_h]: ["POST", "/workflow-definitions", 200] }, () => ListWorkflowDefinitionsRequest$, () => ListWorkflowDefinitionsResponse$
];
export var ListWorkflowRuns$: StaticOperationSchema = [9, n0, _LWR,
  { [_h]: ["POST", "/workflow-definitions/{workflowDefinitionName}/workflow-runs", 200] }, () => ListWorkflowRunsRequest$, () => ListWorkflowRunsResponse$
];
export var UpdateAct$: StaticOperationSchema = [9, n0, _UA,
  { [_h]: ["PUT", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions/{sessionId}/acts/{actId}", 200] }, () => UpdateActRequest$, () => UpdateActResponse$
];
export var UpdateWorkflowRun$: StaticOperationSchema = [9, n0, _UWR,
  { [_h]: ["PUT", "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}", 200] }, () => UpdateWorkflowRunRequest$, () => UpdateWorkflowRunResponse$
];
