const _ADE = "AccessDeniedException";
const _AI = "ActorInfo";
const _AT = "ApprovalType";
const _ATO = "ApproveTimeOff";
const _ATOR = "ApproveTimeOffRequest";
const _ATORp = "ApproveTimeOffResponse";
const _AWSIA = "AWSIdentityArn";
const _B = "Balance";
const _C = "Code";
const _CA = "CreatedAt";
const _CB = "CreatedBy";
const _CE = "ConflictException";
const _CT = "ClientToken";
const _CTO = "CancelTimeOff";
const _CTOR = "CancelTimeOffRequest";
const _CTORa = "CancelTimeOffResponse";
const _CTORr = "CreateTimeOffRequest";
const _CTORre = "CreateTimeOffResponse";
const _CTOr = "CreateTimeOff";
const _CUA = "ConnectUserArn";
const _D = "Description";
const _Du = "Duration";
const _EA = "EndAt";
const _FL = "FieldList";
const _GTO = "GetTimeOff";
const _GTOR = "GetTimeOffRequest";
const _GTORe = "GetTimeOffResponse";
const _II = "InstanceId";
const _ISE = "InternalServerException";
const _M = "Message";
const _N = "Name";
const _PTOB = "PutTimeOffBalance";
const _PTOBR = "PutTimeOffBalanceRequest";
const _PTOBRu = "PutTimeOffBalanceResponse";
const _QC = "QuotaCode";
const _R = "Reason";
const _RA = "Retry-After";
const _RAS = "RetryAfterSeconds";
const _RFA = "RuleFailureAction";
const _RI = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceType";
const _RTO = "RejectTimeOff";
const _RTOR = "RejectTimeOffRequest";
const _RTORe = "RejectTimeOffResponse";
const _S = "Status";
const _SA = "StartAt";
const _SAI = "ShiftActivityId";
const _SC = "ServiceCode";
const _SQEE = "ServiceQuotaExceededException";
const _Se = "Severity";
const _TE = "ThrottlingException";
const _TOI = "TimeOffId";
const _TOVR = "TimeOffValidationResult";
const _TOVRi = "TimeOffValidationResults";
const _U = "Unit";
const _UA = "UpdatedAt";
const _UB = "UpdatedBy";
const _UI = "UserId";
const _V = "Value";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _VR = "ValidationResults";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.connectscheduling";
const _se = "server";
const n0 = "com.amazonaws.connectscheduling";

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

import { ConnectSchedulingServiceException } from "../models/ConnectSchedulingServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var ConnectSchedulingServiceException$: StaticErrorSchema = [-3, _s, "ConnectSchedulingServiceException", 0, [], []];
_s_registry.registerError(ConnectSchedulingServiceException$, ConnectSchedulingServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_M, _RI, _RT],
  [0, 0, 0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_M, _RAS],
  [0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M, _RI, _RT],
  [0, 0, 0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M, _QC, _SC, _RI, _RT],
  [0, 0, 0, 0, 0], 1
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M, _QC, _SC, _RAS],
  [0, 0, 0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R, _FL],
  [0, 0, () => ValidationExceptionFieldList], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var Description: StaticSimpleSchema = [0, n0, _D, 8, 0];
export var ApproveTimeOffRequest$: StaticStructureSchema = [3, n0, _ATOR,
  0,
  [_II, _UI, _TOI, _D, _RFA],
  [[0, 1], [0, 1], [0, 1], [() => Description, 0], 0], 3
];
export var ApproveTimeOffResponse$: StaticStructureSchema = [3, n0, _ATORp,
  0,
  [],
  []
];
export var CancelTimeOffRequest$: StaticStructureSchema = [3, n0, _CTOR,
  0,
  [_II, _UI, _TOI, _D],
  [[0, 1], [0, 1], [0, 1], [() => Description, 0]], 3
];
export var CancelTimeOffResponse$: StaticStructureSchema = [3, n0, _CTORa,
  0,
  [],
  []
];
export var CreateTimeOffRequest$: StaticStructureSchema = [3, n0, _CTORr,
  0,
  [_II, _UI, _SAI, _SA, _EA, _AT, _D, _RFA, _CT],
  [[0, 1], [0, 1], 0, 4, 4, 0, [() => Description, 0], 0, [0, 4]], 6
];
export var CreateTimeOffResponse$: StaticStructureSchema = [3, n0, _CTORre,
  0,
  [_TOI],
  [0], 1
];
export var Duration$: StaticStructureSchema = [3, n0, _Du,
  0,
  [_V, _U],
  [1, 0], 2
];
export var GetTimeOffRequest$: StaticStructureSchema = [3, n0, _GTOR,
  0,
  [_II, _UI, _TOI],
  [[0, 1], [0, 1], [0, 1]], 3
];
export var GetTimeOffResponse$: StaticStructureSchema = [3, n0, _GTORe,
  0,
  [_TOI, _UI, _SAI, _SA, _EA, _S, _CB, _CA, _UA, _D, _VR, _UB],
  [0, 0, 0, 4, 4, 0, () => ActorInfo$, 4, 4, [() => Description, 0], () => TimeOffValidationResults, () => ActorInfo$], 9
];
export var PutTimeOffBalanceRequest$: StaticStructureSchema = [3, n0, _PTOBR,
  0,
  [_II, _UI, _SAI, _B],
  [[0, 1], [0, 1], [0, 1], () => Duration$], 4
];
export var PutTimeOffBalanceResponse$: StaticStructureSchema = [3, n0, _PTOBRu,
  0,
  [],
  []
];
export var RejectTimeOffRequest$: StaticStructureSchema = [3, n0, _RTOR,
  0,
  [_II, _UI, _TOI, _D],
  [[0, 1], [0, 1], [0, 1], [() => Description, 0]], 3
];
export var RejectTimeOffResponse$: StaticStructureSchema = [3, n0, _RTORe,
  0,
  [],
  []
];
export var TimeOffValidationResult$: StaticStructureSchema = [3, n0, _TOVR,
  0,
  [_Se, _C],
  [0, 0], 2
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_N, _M],
  [0, 0], 2
];
var TimeOffValidationResults: StaticListSchema = [1, n0, _TOVRi,
  0, () => TimeOffValidationResult$
];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
export var ActorInfo$: StaticUnionSchema = [4, n0, _AI,
  0,
  [_CUA, _AWSIA],
  [0, 0]
];
export var ApproveTimeOff$: StaticOperationSchema = [9, n0, _ATO,
  { [_h]: ["POST", "/scheduling/instances/{InstanceId}/users/{UserId}/timeoffs/{TimeOffId}/approve", 200] }, () => ApproveTimeOffRequest$, () => ApproveTimeOffResponse$
];
export var CancelTimeOff$: StaticOperationSchema = [9, n0, _CTO,
  { [_h]: ["POST", "/scheduling/instances/{InstanceId}/users/{UserId}/timeoffs/{TimeOffId}/cancel", 200] }, () => CancelTimeOffRequest$, () => CancelTimeOffResponse$
];
export var CreateTimeOff$: StaticOperationSchema = [9, n0, _CTOr,
  { [_h]: ["POST", "/scheduling/instances/{InstanceId}/users/{UserId}/timeoffs", 200] }, () => CreateTimeOffRequest$, () => CreateTimeOffResponse$
];
export var GetTimeOff$: StaticOperationSchema = [9, n0, _GTO,
  { [_h]: ["GET", "/scheduling/instances/{InstanceId}/users/{UserId}/timeoffs/{TimeOffId}", 200] }, () => GetTimeOffRequest$, () => GetTimeOffResponse$
];
export var PutTimeOffBalance$: StaticOperationSchema = [9, n0, _PTOB,
  { [_h]: ["PUT", "/scheduling/instances/{InstanceId}/users/{UserId}/timeoff-balances/{ShiftActivityId}", 200] }, () => PutTimeOffBalanceRequest$, () => PutTimeOffBalanceResponse$
];
export var RejectTimeOff$: StaticOperationSchema = [9, n0, _RTO,
  { [_h]: ["POST", "/scheduling/instances/{InstanceId}/users/{UserId}/timeoffs/{TimeOffId}/reject", 200] }, () => RejectTimeOffRequest$, () => RejectTimeOffResponse$
];
