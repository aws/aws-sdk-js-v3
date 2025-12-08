const _ADE = "AccessDeniedException";
const _AN = "AttemptNumber";
const _B = "Bucket";
const _CA = "CreatedAt";
const _CE = "ConflictException";
const _CEr = "CronExpression";
const _CO = "CreatedOn";
const _COo = "CompletedOn";
const _CT = "ClientToken";
const _CW = "CreateWorkflow";
const _CWR = "CreateWorkflowRequest";
const _CWRr = "CreateWorkflowResponse";
const _D = "Description";
const _DIS = "DurationInSeconds";
const _DSL = "DefinitionS3Location";
const _DW = "DeleteWorkflow";
const _DWR = "DeleteWorkflowRequest";
const _DWRe = "DeleteWorkflowResponse";
const _Du = "Duration";
const _EA = "EndedAt";
const _EC = "EncryptionConfiguration";
const _EM = "ErrorMessage";
const _EV = "EngineVersion";
const _FL = "FieldList";
const _GTI = "GetTaskInstance";
const _GTIR = "GetTaskInstanceRequest";
const _GTIRe = "GetTaskInstanceResponse";
const _GW = "GetWorkflow";
const _GWR = "GetWorkflowRequest";
const _GWRR = "GetWorkflowRunRequest";
const _GWRRe = "GetWorkflowRunResponse";
const _GWRe = "GetWorkflowResponse";
const _GWRet = "GetWorkflowRun";
const _ILV = "IsLatestVersion";
const _ISE = "InternalServerException";
const _KKI = "KmsKeyId";
const _LC = "LoggingConfiguration";
const _LGN = "LogGroupName";
const _LS = "LogStream";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LTI = "ListTaskInstances";
const _LTIR = "ListTaskInstancesRequest";
const _LTIRi = "ListTaskInstancesResponse";
const _LW = "ListWorkflows";
const _LWR = "ListWorkflowsRequest";
const _LWRR = "ListWorkflowRunsRequest";
const _LWRRi = "ListWorkflowRunsResponse";
const _LWRi = "ListWorkflowsResponse";
const _LWRis = "ListWorkflowRuns";
const _LWV = "ListWorkflowVersions";
const _LWVR = "ListWorkflowVersionsRequest";
const _LWVRi = "ListWorkflowVersionsResponse";
const _M = "Message";
const _MA = "ModifiedAt";
const _MR = "MaxResults";
const _N = "Name";
const _NC = "NetworkConfiguration";
const _NT = "NextToken";
const _OK = "ObjectKey";
const _OM = "ObjectMap";
const _ON = "OperatorName";
const _OP = "OverrideParameters";
const _OTE = "OperationTimeoutException";
const _QC = "QuotaCode";
const _R = "Reason";
const _RA = "RoleArn";
const _RAS = "RetryAfterSeconds";
const _RA_ = "Retry-After";
const _RAe = "ResourceArn";
const _RD = "RunDetail";
const _RDS = "RunDetailSummary";
const _RI = "ResourceId";
const _RIe = "RevisionId";
const _RIu = "RunId";
const _RNFE = "ResourceNotFoundException";
const _RS = "RunState";
const _RT = "ResourceType";
const _RTu = "RunType";
const _S = "Status";
const _SA = "StartedAt";
const _SC = "ScheduleConfiguration";
const _SCe = "ServiceCode";
const _SGI = "SecurityGroupIds";
const _SI = "SubnetIds";
const _SO = "StartedOn";
const _SQEE = "ServiceQuotaExceededException";
const _SWR = "StartWorkflowRun";
const _SWRR = "StartWorkflowRunRequest";
const _SWRRt = "StartWorkflowRunResponse";
const _SWRRto = "StopWorkflowRunRequest";
const _SWRRtop = "StopWorkflowRunResponse";
const _SWRt = "StopWorkflowRun";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TI = "TaskId";
const _TII = "TaskInstanceId";
const _TIS = "TaskInstanceSummary";
const _TISa = "TaskInstanceSummaries";
const _TIa = "TaskInstances";
const _TK = "TagKeys";
const _TM = "TriggerMode";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ty = "Type";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _UW = "UpdateWorkflow";
const _UWR = "UpdateWorkflowRequest";
const _UWRp = "UpdateWorkflowResponse";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFa = "ValidationExceptionFields";
const _VI = "VersionId";
const _W = "Warnings";
const _WA = "WorkflowArn";
const _WD = "WorkflowDefinition";
const _WR = "WorkflowRuns";
const _WRD = "WorkflowRunDetail";
const _WRS = "WorkflowRunSummary";
const _WRSo = "WorkflowRunSummaries";
const _WS = "WorkflowStatus";
const _WSo = "WorkflowSummary";
const _WSor = "WorkflowSummaries";
const _WV = "WorkflowVersion";
const _WVS = "WorkflowVersionSummary";
const _WVSo = "WorkflowVersionSummaries";
const _WVo = "WorkflowVersions";
const _Wo = "Workflows";
const _X = "Xcom";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.mwaaserverless";
const _tK = "tagKeys";
const _wV = "workflowVersion";
const n0 = "com.amazonaws.mwaaserverless";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  OperationTimeoutException as __OperationTimeoutException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { MWAAServerlessServiceException as __MWAAServerlessServiceException } from "../models/MWAAServerlessServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M, _RI, _RT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var CreateWorkflowRequest: StaticStructureSchema = [
  3,
  n0,
  _CWR,
  0,
  [_N, _CT, _DSL, _RA, _D, _EC, _LC, _EV, _NC, _T, _TM],
  [
    0,
    [0, 4],
    () => DefinitionS3Location,
    0,
    0,
    () => EncryptionConfiguration,
    () => LoggingConfiguration,
    1,
    () => NetworkConfiguration,
    128 | 0,
    0,
  ],
];
export var CreateWorkflowResponse: StaticStructureSchema = [
  3,
  n0,
  _CWRr,
  0,
  [_WA, _CA, _RIe, _WS, _WV, _ILV, _W],
  [0, 5, 0, 0, 0, 2, 64 | 0],
];
export var DefinitionS3Location: StaticStructureSchema = [3, n0, _DSL, 0, [_B, _OK, _VI], [0, 0, 0]];
export var DeleteWorkflowRequest: StaticStructureSchema = [
  3,
  n0,
  _DWR,
  0,
  [_WA, _WV],
  [
    [0, 1],
    [0, { [_hQ]: _wV }],
  ],
];
export var DeleteWorkflowResponse: StaticStructureSchema = [3, n0, _DWRe, 0, [_WA, _WV], [0, 0]];
export var EncryptionConfiguration: StaticStructureSchema = [3, n0, _EC, 0, [_Ty, _KKI], [0, 0]];
export var GetTaskInstanceRequest: StaticStructureSchema = [
  3,
  n0,
  _GTIR,
  0,
  [_WA, _TII, _RIu],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ],
];
export var GetTaskInstanceResponse: StaticStructureSchema = [
  3,
  n0,
  _GTIRe,
  0,
  [_WA, _RIu, _TII, _WV, _S, _DIS, _ON, _MA, _EA, _SA, _AN, _EM, _TI, _LS, _X],
  [0, 0, 0, 0, 0, 1, 0, 5, 5, 5, 1, 0, 0, 0, 128 | 0],
];
export var GetWorkflowRequest: StaticStructureSchema = [
  3,
  n0,
  _GWR,
  0,
  [_WA, _WV],
  [
    [0, 1],
    [0, { [_hQ]: _wV }],
  ],
];
export var GetWorkflowResponse: StaticStructureSchema = [
  3,
  n0,
  _GWRe,
  0,
  [_WA, _WV, _N, _D, _CA, _MA, _EC, _LC, _EV, _WS, _DSL, _SC, _RA, _NC, _TM, _WD],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    () => EncryptionConfiguration,
    () => LoggingConfiguration,
    1,
    0,
    () => DefinitionS3Location,
    () => ScheduleConfiguration,
    0,
    () => NetworkConfiguration,
    0,
    0,
  ],
];
export var GetWorkflowRunRequest: StaticStructureSchema = [
  3,
  n0,
  _GWRR,
  0,
  [_WA, _RIu],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetWorkflowRunResponse: StaticStructureSchema = [
  3,
  n0,
  _GWRRe,
  0,
  [_WA, _WV, _RIu, _RTu, _OP, _RD],
  [0, 0, 0, 0, [() => ObjectMap, 0], () => WorkflowRunDetail],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_M, _RAS],
  [0, [1, { [_hH]: _RA_ }]],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RAe], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [128 | 0]];
export var ListTaskInstancesRequest: StaticStructureSchema = [
  3,
  n0,
  _LTIR,
  0,
  [_WA, _RIu, _MR, _NT],
  [
    [0, 1],
    [0, 1],
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListTaskInstancesResponse: StaticStructureSchema = [
  3,
  n0,
  _LTIRi,
  0,
  [_TIa, _NT],
  [() => TaskInstanceSummaries, 0],
];
export var ListWorkflowRunsRequest: StaticStructureSchema = [
  3,
  n0,
  _LWRR,
  0,
  [_MR, _NT, _WA, _WV],
  [
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
    [0, 1],
    [0, { [_hQ]: _wV }],
  ],
];
export var ListWorkflowRunsResponse: StaticStructureSchema = [
  3,
  n0,
  _LWRRi,
  0,
  [_WR, _NT],
  [() => WorkflowRunSummaries, 0],
];
export var ListWorkflowsRequest: StaticStructureSchema = [
  3,
  n0,
  _LWR,
  0,
  [_MR, _NT],
  [
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListWorkflowsResponse: StaticStructureSchema = [3, n0, _LWRi, 0, [_Wo, _NT], [() => WorkflowSummaries, 0]];
export var ListWorkflowVersionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LWVR,
  0,
  [_MR, _NT, _WA],
  [
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
    [0, 1],
  ],
];
export var ListWorkflowVersionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LWVRi,
  0,
  [_WVo, _NT],
  [() => WorkflowVersionSummaries, 0],
];
export var LoggingConfiguration: StaticStructureSchema = [3, n0, _LC, 0, [_LGN], [0]];
export var NetworkConfiguration: StaticStructureSchema = [3, n0, _NC, 0, [_SGI, _SI], [64 | 0, 64 | 0]];
export var OperationTimeoutException: StaticErrorSchema = [-3, n0, _OTE, { [_e]: _s, [_hE]: 504 }, [_M], [0]];
TypeRegistry.for(n0).registerError(OperationTimeoutException, __OperationTimeoutException);
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M, _RI, _RT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var RunDetailSummary: StaticStructureSchema = [3, n0, _RDS, 0, [_S, _CO, _SA, _EA], [0, 5, 5, 5]];
export var ScheduleConfiguration: StaticStructureSchema = [3, n0, _SC, 0, [_CEr], [0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M, _RI, _RT, _SCe, _QC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var StartWorkflowRunRequest: StaticStructureSchema = [
  3,
  n0,
  _SWRR,
  0,
  [_WA, _CT, _OP, _WV],
  [[0, 1], [0, 4], [() => ObjectMap, 0], 0],
];
export var StartWorkflowRunResponse: StaticStructureSchema = [3, n0, _SWRRt, 0, [_RIu, _S, _SA], [0, 0, 5]];
export var StopWorkflowRunRequest: StaticStructureSchema = [
  3,
  n0,
  _SWRRto,
  0,
  [_WA, _RIu],
  [
    [0, 1],
    [0, 1],
  ],
];
export var StopWorkflowRunResponse: StaticStructureSchema = [3, n0, _SWRRtop, 0, [_WA, _WV, _RIu, _S], [0, 0, 0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RAe, _T], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TaskInstanceSummary: StaticStructureSchema = [
  3,
  n0,
  _TIS,
  0,
  [_WA, _WV, _RIu, _TII, _S, _DIS, _ON],
  [0, 0, 0, 0, 0, 1, 0],
];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M, _SCe, _QC, _RAS],
  [0, 0, 0, [1, { [_hH]: _RA_ }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateWorkflowRequest: StaticStructureSchema = [
  3,
  n0,
  _UWR,
  0,
  [_WA, _DSL, _RA, _D, _LC, _EV, _NC, _TM],
  [[0, 1], () => DefinitionS3Location, 0, 0, () => LoggingConfiguration, 1, () => NetworkConfiguration, 0],
];
export var UpdateWorkflowResponse: StaticStructureSchema = [3, n0, _UWRp, 0, [_WA, _MA, _WV, _W], [0, 5, 0, 64 | 0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R, _FL],
  [0, 0, () => ValidationExceptionFields],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_N, _M], [0, 0]];
export var WorkflowRunDetail: StaticStructureSchema = [
  3,
  n0,
  _WRD,
  0,
  [_WA, _WV, _RIu, _RTu, _SO, _CA, _COo, _MA, _Du, _EM, _TIa, _RS],
  [0, 0, 0, 0, 5, 5, 5, 5, 1, 0, 64 | 0, 0],
];
export var WorkflowRunSummary: StaticStructureSchema = [
  3,
  n0,
  _WRS,
  0,
  [_RIu, _WA, _WV, _RTu, _RDS],
  [0, 0, 0, 0, () => RunDetailSummary],
];
export var WorkflowSummary: StaticStructureSchema = [
  3,
  n0,
  _WSo,
  0,
  [_WA, _WV, _N, _D, _CA, _MA, _WS, _TM],
  [0, 0, 0, 0, 5, 5, 0, 0],
];
export var WorkflowVersionSummary: StaticStructureSchema = [
  3,
  n0,
  _WVS,
  0,
  [_WV, _WA, _ILV, _CA, _MA, _DSL, _SC, _TM],
  [0, 0, 2, 5, 5, () => DefinitionS3Location, () => ScheduleConfiguration, 0],
];
export var MWAAServerlessServiceException: StaticErrorSchema = [-3, _sm, "MWAAServerlessServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(MWAAServerlessServiceException, __MWAAServerlessServiceException);
export var SecurityGroupIds = 64 | 0;
export var SubnetIds = 64 | 0;
export var TagKeys = 64 | 0;
export var TaskInstanceIds = 64 | 0;
export var TaskInstanceSummaries: StaticListSchema = [1, n0, _TISa, 0, () => TaskInstanceSummary];
export var ValidationExceptionFields: StaticListSchema = [1, n0, _VEFa, 0, () => ValidationExceptionField];
export var WarningMessages = 64 | 0;
export var WorkflowRunSummaries: StaticListSchema = [1, n0, _WRSo, 0, () => WorkflowRunSummary];
export var WorkflowSummaries: StaticListSchema = [1, n0, _WSor, 0, () => WorkflowSummary];
export var WorkflowVersionSummaries: StaticListSchema = [1, n0, _WVSo, 0, () => WorkflowVersionSummary];
export var GenericMap = 128 | 0;
export var ObjectMap: StaticMapSchema = [2, n0, _OM, 8, 0, 15];
export var Tags = 128 | 0;
export var CreateWorkflow: StaticOperationSchema = [
  9,
  n0,
  _CW,
  { [_h]: ["POST", "/workflows", 200] },
  () => CreateWorkflowRequest,
  () => CreateWorkflowResponse,
];
export var DeleteWorkflow: StaticOperationSchema = [
  9,
  n0,
  _DW,
  { [_h]: ["DELETE", "/workflows/{WorkflowArn}", 200] },
  () => DeleteWorkflowRequest,
  () => DeleteWorkflowResponse,
];
export var GetTaskInstance: StaticOperationSchema = [
  9,
  n0,
  _GTI,
  { [_h]: ["GET", "/workflows/{WorkflowArn}/runs/{RunId}/tasks/{TaskInstanceId}", 200] },
  () => GetTaskInstanceRequest,
  () => GetTaskInstanceResponse,
];
export var GetWorkflow: StaticOperationSchema = [
  9,
  n0,
  _GW,
  { [_h]: ["GET", "/workflows/{WorkflowArn}", 200] },
  () => GetWorkflowRequest,
  () => GetWorkflowResponse,
];
export var GetWorkflowRun: StaticOperationSchema = [
  9,
  n0,
  _GWRet,
  { [_h]: ["GET", "/workflows/{WorkflowArn}/runs/{RunId}", 200] },
  () => GetWorkflowRunRequest,
  () => GetWorkflowRunResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var ListTaskInstances: StaticOperationSchema = [
  9,
  n0,
  _LTI,
  { [_h]: ["GET", "/workflows/{WorkflowArn}/runs/{RunId}/tasks", 200] },
  () => ListTaskInstancesRequest,
  () => ListTaskInstancesResponse,
];
export var ListWorkflowRuns: StaticOperationSchema = [
  9,
  n0,
  _LWRis,
  { [_h]: ["GET", "/workflows/{WorkflowArn}/runs", 200] },
  () => ListWorkflowRunsRequest,
  () => ListWorkflowRunsResponse,
];
export var ListWorkflows: StaticOperationSchema = [
  9,
  n0,
  _LW,
  { [_h]: ["GET", "/workflows", 200] },
  () => ListWorkflowsRequest,
  () => ListWorkflowsResponse,
];
export var ListWorkflowVersions: StaticOperationSchema = [
  9,
  n0,
  _LWV,
  { [_h]: ["GET", "/workflows/{WorkflowArn}/versions", 200] },
  () => ListWorkflowVersionsRequest,
  () => ListWorkflowVersionsResponse,
];
export var StartWorkflowRun: StaticOperationSchema = [
  9,
  n0,
  _SWR,
  { [_h]: ["POST", "/workflows/{WorkflowArn}/runs", 200] },
  () => StartWorkflowRunRequest,
  () => StartWorkflowRunResponse,
];
export var StopWorkflowRun: StaticOperationSchema = [
  9,
  n0,
  _SWRt,
  { [_h]: ["DELETE", "/workflows/{WorkflowArn}/runs/{RunId}", 200] },
  () => StopWorkflowRunRequest,
  () => StopWorkflowRunResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 200] },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 200] },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateWorkflow: StaticOperationSchema = [
  9,
  n0,
  _UW,
  { [_h]: ["PUT", "/workflows/{WorkflowArn}", 200] },
  () => UpdateWorkflowRequest,
  () => UpdateWorkflowResponse,
];
