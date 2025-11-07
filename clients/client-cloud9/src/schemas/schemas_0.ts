export const _BRE = "BadRequestException";
export const _CAE = "ConcurrentAccessException";
export const _CE = "ConflictException";
export const _CEEC = "CreateEnvironmentEC2";
export const _CEECR = "CreateEnvironmentEC2Request";
export const _CEECRr = "CreateEnvironmentEC2Result";
export const _CEM = "CreateEnvironmentMembership";
export const _CEMR = "CreateEnvironmentMembershipRequest";
export const _CEMRr = "CreateEnvironmentMembershipResult";
export const _DE = "DeleteEnvironment";
export const _DEM = "DeleteEnvironmentMembership";
export const _DEMR = "DeleteEnvironmentMembershipRequest";
export const _DEMRe = "DeleteEnvironmentMembershipResult";
export const _DEMRes = "DescribeEnvironmentMembershipsRequest";
export const _DEMResc = "DescribeEnvironmentMembershipsResult";
export const _DEMe = "DescribeEnvironmentMemberships";
export const _DER = "DeleteEnvironmentRequest";
export const _DERe = "DeleteEnvironmentResult";
export const _DERes = "DescribeEnvironmentsRequest";
export const _DEResc = "DescribeEnvironmentsResult";
export const _DES = "DescribeEnvironmentStatus";
export const _DESR = "DescribeEnvironmentStatusRequest";
export const _DESRe = "DescribeEnvironmentStatusResult";
export const _DEe = "DescribeEnvironments";
export const _E = "Environment";
export const _ED = "EnvironmentDescription";
export const _EL = "EnvironmentLifecycle";
export const _ELn = "EnvironmentList";
export const _EM = "EnvironmentMember";
export const _EML = "EnvironmentMembersList";
export const _FE = "ForbiddenException";
export const _ISEE = "InternalServerErrorException";
export const _K = "Key";
export const _LE = "ListEnvironments";
export const _LEE = "LimitExceededException";
export const _LER = "ListEnvironmentsRequest";
export const _LERi = "ListEnvironmentsResult";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _NFE = "NotFoundException";
export const _RARN = "ResourceARN";
export const _T = "Tags";
export const _TK = "TagKey";
export const _TKL = "TagKeyList";
export const _TKa = "TagKeys";
export const _TL = "TagList";
export const _TMRE = "TooManyRequestsException";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TV = "TagValue";
export const _Ta = "Tag";
export const _UE = "UpdateEnvironment";
export const _UEM = "UpdateEnvironmentMembership";
export const _UEMR = "UpdateEnvironmentMembershipRequest";
export const _UEMRp = "UpdateEnvironmentMembershipResult";
export const _UER = "UpdateEnvironmentRequest";
export const _UERp = "UpdateEnvironmentResult";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _V = "Value";
export const _a = "arn";
export const _aSTM = "automaticStopTimeMinutes";
export const _c = "client";
export const _cN = "className";
export const _cRT = "clientRequestToken";
export const _cT = "connectionType";
export const _co = "code";
export const _d = "description";
export const _dR = "dryRun";
export const _e = "error";
export const _eI = "environmentId";
export const _eIn = "environmentIds";
export const _en = "environments";
export const _fR = "failureResource";
export const _i = "id";
export const _iI = "imageId";
export const _iT = "instanceType";
export const _l = "lifecycle";
export const _lA = "lastAccess";
export const _m = "message";
export const _mCA = "managedCredentialsAction";
export const _mCS = "managedCredentialsStatus";
export const _mR = "maxResults";
export const _me = "membership";
export const _mem = "memberships";
export const _n = "name";
export const _nT = "nextToken";
export const _oA = "ownerArn";
export const _p = "permissions";
export const _r = "reason";
export const _s = "status";
export const _sI = "subnetId";
export const _se = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloud9";
export const _t = "tags";
export const _ty = "type";
export const _uA = "userArn";
export const _uI = "userId";
export const n0 = "com.amazonaws.cloud9";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { Cloud9ServiceException as __Cloud9ServiceException } from "../models/Cloud9ServiceException";
import {
  BadRequestException as __BadRequestException,
  ConcurrentAccessException as __ConcurrentAccessException,
  ConflictException as __ConflictException,
  ForbiddenException as __ForbiddenException,
  InternalServerErrorException as __InternalServerErrorException,
  LimitExceededException as __LimitExceededException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/index";

/* eslint no-var: 0 */

export var EnvironmentDescription: StaticSimpleSchema = [0, n0, _ED, 8, 0];
export var TagKey: StaticSimpleSchema = [0, n0, _TK, 8, 0];
export var TagValue: StaticSimpleSchema = [0, n0, _TV, 8, 0];
export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var ConcurrentAccessException: StaticErrorSchema = [
  -3,
  n0,
  _CAE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(ConcurrentAccessException, __ConcurrentAccessException);

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateEnvironmentEC2Request: StaticStructureSchema = [
  3,
  n0,
  _CEECR,
  0,
  [_n, _d, _cRT, _iT, _sI, _iI, _aSTM, _oA, _t, _cT, _dR],
  [0, [() => EnvironmentDescription, 0], 0, 0, 0, 0, 1, 0, [() => TagList, 0], 0, 2],
];
export var CreateEnvironmentEC2Result: StaticStructureSchema = [3, n0, _CEECRr, 0, [_eI], [0]];
export var CreateEnvironmentMembershipRequest: StaticStructureSchema = [3, n0, _CEMR, 0, [_eI, _uA, _p], [0, 0, 0]];
export var CreateEnvironmentMembershipResult: StaticStructureSchema = [
  3,
  n0,
  _CEMRr,
  0,
  [_me],
  [() => EnvironmentMember],
];
export var DeleteEnvironmentMembershipRequest: StaticStructureSchema = [3, n0, _DEMR, 0, [_eI, _uA], [0, 0]];
export var DeleteEnvironmentMembershipResult: StaticStructureSchema = [3, n0, _DEMRe, 0, [], []];
export var DeleteEnvironmentRequest: StaticStructureSchema = [3, n0, _DER, 0, [_eI], [0]];
export var DeleteEnvironmentResult: StaticStructureSchema = [3, n0, _DERe, 0, [], []];
export var DescribeEnvironmentMembershipsRequest: StaticStructureSchema = [
  3,
  n0,
  _DEMRes,
  0,
  [_uA, _eI, _p, _nT, _mR],
  [0, 0, 64 | 0, 0, 1],
];
export var DescribeEnvironmentMembershipsResult: StaticStructureSchema = [
  3,
  n0,
  _DEMResc,
  0,
  [_mem, _nT],
  [() => EnvironmentMembersList, 0],
];
export var DescribeEnvironmentsRequest: StaticStructureSchema = [3, n0, _DERes, 0, [_eIn], [64 | 0]];
export var DescribeEnvironmentsResult: StaticStructureSchema = [3, n0, _DEResc, 0, [_en], [[() => EnvironmentList, 0]]];
export var DescribeEnvironmentStatusRequest: StaticStructureSchema = [3, n0, _DESR, 0, [_eI], [0]];
export var DescribeEnvironmentStatusResult: StaticStructureSchema = [3, n0, _DESRe, 0, [_s, _m], [0, 0]];
export var Environment: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_i, _n, _d, _ty, _cT, _a, _oA, _l, _mCS],
  [0, 0, [() => EnvironmentDescription, 0], 0, 0, 0, 0, () => EnvironmentLifecycle, 0],
];
export var EnvironmentLifecycle: StaticStructureSchema = [3, n0, _EL, 0, [_s, _r, _fR], [0, 0, 0]];
export var EnvironmentMember: StaticStructureSchema = [3, n0, _EM, 0, [_p, _uI, _uA, _eI, _lA], [0, 0, 0, 0, 4]];
export var ForbiddenException: StaticErrorSchema = [
  -3,
  n0,
  _FE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);

export var InternalServerErrorException: StaticErrorSchema = [
  -3,
  n0,
  _ISEE,
  {
    [_e]: _se,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(InternalServerErrorException, __InternalServerErrorException);

export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var ListEnvironmentsRequest: StaticStructureSchema = [3, n0, _LER, 0, [_nT, _mR], [0, 1]];
export var ListEnvironmentsResult: StaticStructureSchema = [3, n0, _LERi, 0, [_nT, _eIn], [0, 64 | 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RARN], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [[() => TagList, 0]]];
export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var Tag: StaticStructureSchema = [
  3,
  n0,
  _Ta,
  8,
  [_K, _V],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ],
];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RARN, _T], [0, [() => TagList, 0]]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TooManyRequestsException: StaticErrorSchema = [
  -3,
  n0,
  _TMRE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],
];
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RARN, _TKa], [0, [() => TagKeyList, 0]]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateEnvironmentMembershipRequest: StaticStructureSchema = [3, n0, _UEMR, 0, [_eI, _uA, _p], [0, 0, 0]];
export var UpdateEnvironmentMembershipResult: StaticStructureSchema = [
  3,
  n0,
  _UEMRp,
  0,
  [_me],
  [() => EnvironmentMember],
];
export var UpdateEnvironmentRequest: StaticStructureSchema = [
  3,
  n0,
  _UER,
  0,
  [_eI, _n, _d, _mCA],
  [0, 0, [() => EnvironmentDescription, 0], 0],
];
export var UpdateEnvironmentResult: StaticStructureSchema = [3, n0, _UERp, 0, [], []];
export var __Unit = "unit" as const;

export var Cloud9ServiceException: StaticErrorSchema = [-3, _sm, "Cloud9ServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(Cloud9ServiceException, __Cloud9ServiceException);

export var BoundedEnvironmentIdList = 64 | 0;

export var EnvironmentIdList = 64 | 0;

export var EnvironmentList: StaticListSchema = [1, n0, _ELn, 0, [() => Environment, 0]];
export var EnvironmentMembersList: StaticListSchema = [1, n0, _EML, 0, () => EnvironmentMember];
export var PermissionsList = 64 | 0;

export var TagKeyList: StaticListSchema = [1, n0, _TKL, 8, [() => TagKey, 0]];
export var TagList: StaticListSchema = [1, n0, _TL, 8, [() => Tag, 0]];
export var CreateEnvironmentEC2: StaticOperationSchema = [
  9,
  n0,
  _CEEC,
  2,
  () => CreateEnvironmentEC2Request,
  () => CreateEnvironmentEC2Result,
];
export var CreateEnvironmentMembership: StaticOperationSchema = [
  9,
  n0,
  _CEM,
  2,
  () => CreateEnvironmentMembershipRequest,
  () => CreateEnvironmentMembershipResult,
];
export var DeleteEnvironment: StaticOperationSchema = [
  9,
  n0,
  _DE,
  2,
  () => DeleteEnvironmentRequest,
  () => DeleteEnvironmentResult,
];
export var DeleteEnvironmentMembership: StaticOperationSchema = [
  9,
  n0,
  _DEM,
  2,
  () => DeleteEnvironmentMembershipRequest,
  () => DeleteEnvironmentMembershipResult,
];
export var DescribeEnvironmentMemberships: StaticOperationSchema = [
  9,
  n0,
  _DEMe,
  0,
  () => DescribeEnvironmentMembershipsRequest,
  () => DescribeEnvironmentMembershipsResult,
];
export var DescribeEnvironments: StaticOperationSchema = [
  9,
  n0,
  _DEe,
  0,
  () => DescribeEnvironmentsRequest,
  () => DescribeEnvironmentsResult,
];
export var DescribeEnvironmentStatus: StaticOperationSchema = [
  9,
  n0,
  _DES,
  0,
  () => DescribeEnvironmentStatusRequest,
  () => DescribeEnvironmentStatusResult,
];
export var ListEnvironments: StaticOperationSchema = [
  9,
  n0,
  _LE,
  0,
  () => ListEnvironmentsRequest,
  () => ListEnvironmentsResult,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateEnvironment: StaticOperationSchema = [
  9,
  n0,
  _UE,
  2,
  () => UpdateEnvironmentRequest,
  () => UpdateEnvironmentResult,
];
export var UpdateEnvironmentMembership: StaticOperationSchema = [
  9,
  n0,
  _UEM,
  2,
  () => UpdateEnvironmentMembershipRequest,
  () => UpdateEnvironmentMembershipResult,
];
