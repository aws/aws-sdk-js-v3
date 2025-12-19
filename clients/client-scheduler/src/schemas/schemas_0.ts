const _A = "Arn";
const _AAC = "ActionAfterCompletion";
const _API = "AssignPublicIp";
const _AVC = "AwsVpcConfiguration";
const _CD = "CreationDate";
const _CE = "ConflictException";
const _CPS = "CapacityProviderStrategy";
const _CPSI = "CapacityProviderStrategyItem";
const _CS = "CreateSchedule";
const _CSG = "CreateScheduleGroup";
const _CSGI = "CreateScheduleGroupInput";
const _CSGO = "CreateScheduleGroupOutput";
const _CSI = "CreateScheduleInput";
const _CSO = "CreateScheduleOutput";
const _CT = "ClientToken";
const _D = "Description";
const _DLC = "DeadLetterConfig";
const _DS = "DeleteSchedule";
const _DSG = "DeleteScheduleGroup";
const _DSGI = "DeleteScheduleGroupInput";
const _DSGO = "DeleteScheduleGroupOutput";
const _DSI = "DeleteScheduleInput";
const _DSO = "DeleteScheduleOutput";
const _DT = "DetailType";
const _EBP = "EventBridgeParameters";
const _ED = "EndDate";
const _EEC = "EnableExecuteCommand";
const _EECSMT = "EnableECSManagedTags";
const _EP = "EcsParameters";
const _FTW = "FlexibleTimeWindow";
const _G = "Group";
const _GN = "GroupName";
const _GS = "GetSchedule";
const _GSG = "GetScheduleGroup";
const _GSGI = "GetScheduleGroupInput";
const _GSGO = "GetScheduleGroupOutput";
const _GSI = "GetScheduleInput";
const _GSO = "GetScheduleOutput";
const _I = "Input";
const _ISE = "InternalServerException";
const _K = "Key";
const _KKA = "KmsKeyArn";
const _KP = "KinesisParameters";
const _LMD = "LastModificationDate";
const _LS = "ListSchedules";
const _LSG = "ListScheduleGroups";
const _LSGI = "ListScheduleGroupsInput";
const _LSGO = "ListScheduleGroupsOutput";
const _LSI = "ListSchedulesInput";
const _LSO = "ListSchedulesOutput";
const _LT = "LaunchType";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _M = "Message";
const _MEAIS = "MaximumEventAgeInSeconds";
const _MGI = "MessageGroupId";
const _MR = "MaxResults";
const _MRA = "MaximumRetryAttempts";
const _MWIM = "MaximumWindowInMinutes";
const _Mo = "Mode";
const _N = "Name";
const _NC = "NetworkConfiguration";
const _NP = "NamePrefix";
const _NT = "NextToken";
const _PC = "PlacementConstraints";
const _PCl = "PlacementConstraint";
const _PK = "PartitionKey";
const _PPL = "PipelineParameterList";
const _PS = "PlacementStrategy";
const _PSl = "PlacementStrategies";
const _PT = "PropagateTags";
const _PV = "PlatformVersion";
const _RA = "ResourceArn";
const _RAo = "RoleArn";
const _RI = "ReferenceId";
const _RNFE = "ResourceNotFoundException";
const _RP = "RetryPolicy";
const _S = "Subnets";
const _SA = "ScheduleArn";
const _SD = "StartDate";
const _SE = "ScheduleExpression";
const _SET = "ScheduleExpressionTimezone";
const _SG = "SecurityGroups";
const _SGA = "ScheduleGroupArn";
const _SGL = "ScheduleGroupList";
const _SGS = "ScheduleGroupSummary";
const _SGc = "ScheduleGroups";
const _SGch = "ScheduleGroup";
const _SL = "ScheduleList";
const _SMPP = "SageMakerPipelineParameter";
const _SMPPL = "SageMakerPipelineParameterList";
const _SMPPa = "SageMakerPipelineParameters";
const _SP = "SqsParameters";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "ScheduleSummary";
const _Sc = "Schedules";
const _So = "Source";
const _St = "State";
const _T = "Tags";
const _TC = "TaskCount";
const _TDA = "TaskDefinitionArn";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _TS = "TargetSummary";
const _Ta = "Target";
const _Tag = "Tag";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _US = "UpdateSchedule";
const _USI = "UpdateScheduleInput";
const _USO = "UpdateScheduleOutput";
const _V = "Value";
const _VE = "ValidationException";
const _aC = "awsvpcConfiguration";
const _b = "base";
const _c = "client";
const _cP = "capacityProvider";
const _cT = "clientToken";
const _e = "error";
const _ex = "expression";
const _f = "field";
const _gN = "groupName";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _iT = "idempotencyToken";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.scheduler";
const _t = "type";
const _w = "weight";
const n0 = "com.amazonaws.scheduler";

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
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { SchedulerServiceException } from "../models/SchedulerServiceException";

/* eslint no-var: 0 */
export var AwsVpcConfiguration$: StaticStructureSchema = [3, n0, _AVC, 0, [_S, _SG, _API], [64 | 0, 64 | 0, 0]];
export var CapacityProviderStrategyItem$: StaticStructureSchema = [3, n0, _CPSI, 0, [_cP, _w, _b], [0, 1, 1]];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateScheduleGroupInput$: StaticStructureSchema = [
  3,
  n0,
  _CSGI,
  0,
  [_N, _T, _CT],
  [[0, 1], () => TagList, [0, 4]],
];
export var CreateScheduleGroupOutput$: StaticStructureSchema = [3, n0, _CSGO, 0, [_SGA], [0]];
export var CreateScheduleInput$: StaticStructureSchema = [
  3,
  n0,
  _CSI,
  0,
  [_N, _GN, _SE, _SD, _ED, _D, _SET, _St, _KKA, _Ta, _FTW, _CT, _AAC],
  [[0, 1], 0, 0, 4, 4, 0, 0, 0, 0, () => Target$, () => FlexibleTimeWindow$, [0, 4], 0],
];
export var CreateScheduleOutput$: StaticStructureSchema = [3, n0, _CSO, 0, [_SA], [0]];
export var DeadLetterConfig$: StaticStructureSchema = [3, n0, _DLC, 0, [_A], [0]];
export var DeleteScheduleGroupInput$: StaticStructureSchema = [
  3,
  n0,
  _DSGI,
  0,
  [_N, _CT],
  [
    [0, 1],
    [0, { [_hQ]: _cT, [_iT]: 1 }],
  ],
];
export var DeleteScheduleGroupOutput$: StaticStructureSchema = [3, n0, _DSGO, 0, [], []];
export var DeleteScheduleInput$: StaticStructureSchema = [
  3,
  n0,
  _DSI,
  0,
  [_N, _GN, _CT],
  [
    [0, 1],
    [0, { [_hQ]: _gN }],
    [0, { [_hQ]: _cT, [_iT]: 1 }],
  ],
];
export var DeleteScheduleOutput$: StaticStructureSchema = [3, n0, _DSO, 0, [], []];
export var EcsParameters$: StaticStructureSchema = [
  3,
  n0,
  _EP,
  0,
  [_TDA, _TC, _LT, _NC, _PV, _G, _CPS, _EECSMT, _EEC, _PC, _PS, _PT, _RI, _T],
  [
    0,
    1,
    0,
    () => NetworkConfiguration$,
    0,
    0,
    () => CapacityProviderStrategy,
    2,
    2,
    () => PlacementConstraints,
    () => PlacementStrategies,
    0,
    0,
    [1, n0, _T, 0, 128 | 0],
  ],
];
export var EventBridgeParameters$: StaticStructureSchema = [3, n0, _EBP, 0, [_DT, _So], [0, 0]];
export var FlexibleTimeWindow$: StaticStructureSchema = [3, n0, _FTW, 0, [_Mo, _MWIM], [0, 1]];
export var GetScheduleGroupInput$: StaticStructureSchema = [3, n0, _GSGI, 0, [_N], [[0, 1]]];
export var GetScheduleGroupOutput$: StaticStructureSchema = [
  3,
  n0,
  _GSGO,
  0,
  [_A, _N, _St, _CD, _LMD],
  [0, 0, 0, 4, 4],
];
export var GetScheduleInput$: StaticStructureSchema = [
  3,
  n0,
  _GSI,
  0,
  [_N, _GN],
  [
    [0, 1],
    [0, { [_hQ]: _gN }],
  ],
];
export var GetScheduleOutput$: StaticStructureSchema = [
  3,
  n0,
  _GSO,
  0,
  [_A, _GN, _N, _SE, _SD, _ED, _D, _SET, _St, _CD, _LMD, _KKA, _Ta, _FTW, _AAC],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 0, () => Target$, () => FlexibleTimeWindow$, 0],
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var KinesisParameters$: StaticStructureSchema = [3, n0, _KP, 0, [_PK], [0]];
export var ListScheduleGroupsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSGI,
  0,
  [_NP, _NT, _MR],
  [
    [0, { [_hQ]: _NP }],
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListScheduleGroupsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LSGO,
  0,
  [_NT, _SGc],
  [0, () => ScheduleGroupList],
];
export var ListSchedulesInput$: StaticStructureSchema = [
  3,
  n0,
  _LSI,
  0,
  [_GN, _NP, _St, _NT, _MR],
  [
    [0, { [_hQ]: _SGch }],
    [0, { [_hQ]: _NP }],
    [0, { [_hQ]: _St }],
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListSchedulesOutput$: StaticStructureSchema = [3, n0, _LSO, 0, [_NT, _Sc], [0, () => ScheduleList]];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO, 0, [_T], [() => TagList]];
export var NetworkConfiguration$: StaticStructureSchema = [3, n0, _NC, 0, [_aC], [() => AwsVpcConfiguration$]];
export var PlacementConstraint$: StaticStructureSchema = [3, n0, _PCl, 0, [_t, _ex], [0, 0]];
export var PlacementStrategy$: StaticStructureSchema = [3, n0, _PS, 0, [_t, _f], [0, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RetryPolicy$: StaticStructureSchema = [3, n0, _RP, 0, [_MEAIS, _MRA], [1, 1]];
export var SageMakerPipelineParameter$: StaticStructureSchema = [3, n0, _SMPP, 0, [_N, _V], [0, 0]];
export var SageMakerPipelineParameters$: StaticStructureSchema = [
  3,
  n0,
  _SMPPa,
  0,
  [_PPL],
  [() => SageMakerPipelineParameterList],
];
export var ScheduleGroupSummary$: StaticStructureSchema = [3, n0, _SGS, 0, [_A, _N, _St, _CD, _LMD], [0, 0, 0, 4, 4]];
export var ScheduleSummary$: StaticStructureSchema = [
  3,
  n0,
  _SS,
  0,
  [_A, _N, _GN, _St, _CD, _LMD, _Ta],
  [0, 0, 0, 0, 4, 4, () => TargetSummary$],
];
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var SqsParameters$: StaticStructureSchema = [3, n0, _SP, 0, [_MGI], [0]];
export var Tag$: StaticStructureSchema = [3, n0, _Tag, 0, [_K, _V], [0, 0]];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI, 0, [_RA, _T], [[0, 1], () => TagList]];
export var TagResourceOutput$: StaticStructureSchema = [3, n0, _TRO, 0, [], []];
export var Target$: StaticStructureSchema = [
  3,
  n0,
  _Ta,
  0,
  [_A, _RAo, _DLC, _RP, _I, _EP, _EBP, _KP, _SMPPa, _SP],
  [
    0,
    0,
    () => DeadLetterConfig$,
    () => RetryPolicy$,
    0,
    () => EcsParameters$,
    () => EventBridgeParameters$,
    () => KinesisParameters$,
    () => SageMakerPipelineParameters$,
    () => SqsParameters$,
  ],
];
export var TargetSummary$: StaticStructureSchema = [3, n0, _TS, 0, [_A], [0]];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _TK }],
  ],
];
export var UntagResourceOutput$: StaticStructureSchema = [3, n0, _URO, 0, [], []];
export var UpdateScheduleInput$: StaticStructureSchema = [
  3,
  n0,
  _USI,
  0,
  [_N, _GN, _SE, _SD, _ED, _D, _SET, _St, _KKA, _Ta, _FTW, _CT, _AAC],
  [[0, 1], 0, 0, 4, 4, 0, 0, 0, 0, () => Target$, () => FlexibleTimeWindow$, [0, 4], 0],
];
export var UpdateScheduleOutput$: StaticStructureSchema = [3, n0, _USO, 0, [_SA], [0]];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var SchedulerServiceException$: StaticErrorSchema = [-3, _sm, "SchedulerServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SchedulerServiceException$, SchedulerServiceException);
var CapacityProviderStrategy: StaticListSchema = [1, n0, _CPS, 0, () => CapacityProviderStrategyItem$];
var PlacementConstraints: StaticListSchema = [1, n0, _PC, 0, () => PlacementConstraint$];
var PlacementStrategies: StaticListSchema = [1, n0, _PSl, 0, () => PlacementStrategy$];
var SageMakerPipelineParameterList: StaticListSchema = [1, n0, _SMPPL, 0, () => SageMakerPipelineParameter$];
var ScheduleGroupList: StaticListSchema = [1, n0, _SGL, 0, () => ScheduleGroupSummary$];
var ScheduleList: StaticListSchema = [1, n0, _SL, 0, () => ScheduleSummary$];
var SecurityGroups = 64 | 0;
var Subnets = 64 | 0;
var TagKeyList = 64 | 0;
var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag$];
var Tags: StaticListSchema = [1, n0, _T, 0, 128 | 0];
var TagMap = 128 | 0;
export var CreateSchedule$: StaticOperationSchema = [
  9,
  n0,
  _CS,
  { [_h]: ["POST", "/schedules/{Name}", 200] },
  () => CreateScheduleInput$,
  () => CreateScheduleOutput$,
];
export var CreateScheduleGroup$: StaticOperationSchema = [
  9,
  n0,
  _CSG,
  { [_h]: ["POST", "/schedule-groups/{Name}", 200] },
  () => CreateScheduleGroupInput$,
  () => CreateScheduleGroupOutput$,
];
export var DeleteSchedule$: StaticOperationSchema = [
  9,
  n0,
  _DS,
  { [_h]: ["DELETE", "/schedules/{Name}", 200] },
  () => DeleteScheduleInput$,
  () => DeleteScheduleOutput$,
];
export var DeleteScheduleGroup$: StaticOperationSchema = [
  9,
  n0,
  _DSG,
  { [_h]: ["DELETE", "/schedule-groups/{Name}", 200] },
  () => DeleteScheduleGroupInput$,
  () => DeleteScheduleGroupOutput$,
];
export var GetSchedule$: StaticOperationSchema = [
  9,
  n0,
  _GS,
  { [_h]: ["GET", "/schedules/{Name}", 200] },
  () => GetScheduleInput$,
  () => GetScheduleOutput$,
];
export var GetScheduleGroup$: StaticOperationSchema = [
  9,
  n0,
  _GSG,
  { [_h]: ["GET", "/schedule-groups/{Name}", 200] },
  () => GetScheduleGroupInput$,
  () => GetScheduleGroupOutput$,
];
export var ListScheduleGroups$: StaticOperationSchema = [
  9,
  n0,
  _LSG,
  { [_h]: ["GET", "/schedule-groups", 200] },
  () => ListScheduleGroupsInput$,
  () => ListScheduleGroupsOutput$,
];
export var ListSchedules$: StaticOperationSchema = [
  9,
  n0,
  _LS,
  { [_h]: ["GET", "/schedules", 200] },
  () => ListSchedulesInput$,
  () => ListSchedulesOutput$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceInput$,
  () => ListTagsForResourceOutput$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 200] },
  () => TagResourceInput$,
  () => TagResourceOutput$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 200] },
  () => UntagResourceInput$,
  () => UntagResourceOutput$,
];
export var UpdateSchedule$: StaticOperationSchema = [
  9,
  n0,
  _US,
  { [_h]: ["PUT", "/schedules/{Name}", 200] },
  () => UpdateScheduleInput$,
  () => UpdateScheduleOutput$,
];
