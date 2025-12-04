const _BRE = "BadRequestException";
const _CAE = "ConcurrentAccessException";
const _CE = "ConflictException";
const _CEEC = "CreateEnvironmentEC2";
const _CEECR = "CreateEnvironmentEC2Request";
const _CEECRr = "CreateEnvironmentEC2Result";
const _CEM = "CreateEnvironmentMembership";
const _CEMR = "CreateEnvironmentMembershipRequest";
const _CEMRr = "CreateEnvironmentMembershipResult";
const _DE = "DeleteEnvironment";
const _DEM = "DeleteEnvironmentMembership";
const _DEMR = "DeleteEnvironmentMembershipRequest";
const _DEMRe = "DeleteEnvironmentMembershipResult";
const _DEMRes = "DescribeEnvironmentMembershipsRequest";
const _DEMResc = "DescribeEnvironmentMembershipsResult";
const _DEMe = "DescribeEnvironmentMemberships";
const _DER = "DeleteEnvironmentRequest";
const _DERe = "DeleteEnvironmentResult";
const _DERes = "DescribeEnvironmentsRequest";
const _DEResc = "DescribeEnvironmentsResult";
const _DES = "DescribeEnvironmentStatus";
const _DESR = "DescribeEnvironmentStatusRequest";
const _DESRe = "DescribeEnvironmentStatusResult";
const _DEe = "DescribeEnvironments";
const _E = "Environment";
const _ED = "EnvironmentDescription";
const _EL = "EnvironmentLifecycle";
const _ELn = "EnvironmentList";
const _EM = "EnvironmentMember";
const _EML = "EnvironmentMembersList";
const _FE = "ForbiddenException";
const _ISEE = "InternalServerErrorException";
const _K = "Key";
const _LE = "ListEnvironments";
const _LEE = "LimitExceededException";
const _LER = "ListEnvironmentsRequest";
const _LERi = "ListEnvironmentsResult";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _NFE = "NotFoundException";
const _RARN = "ResourceARN";
const _T = "Tags";
const _TK = "TagKey";
const _TKL = "TagKeyList";
const _TKa = "TagKeys";
const _TL = "TagList";
const _TMRE = "TooManyRequestsException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TV = "TagValue";
const _Ta = "Tag";
const _UE = "UpdateEnvironment";
const _UEM = "UpdateEnvironmentMembership";
const _UEMR = "UpdateEnvironmentMembershipRequest";
const _UEMRp = "UpdateEnvironmentMembershipResult";
const _UER = "UpdateEnvironmentRequest";
const _UERp = "UpdateEnvironmentResult";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _a = "arn";
const _aSTM = "automaticStopTimeMinutes";
const _c = "client";
const _cN = "className";
const _cRT = "clientRequestToken";
const _cT = "connectionType";
const _co = "code";
const _d = "description";
const _dR = "dryRun";
const _e = "error";
const _eI = "environmentId";
const _eIn = "environmentIds";
const _en = "environments";
const _fR = "failureResource";
const _i = "id";
const _iI = "imageId";
const _iT = "instanceType";
const _l = "lifecycle";
const _lA = "lastAccess";
const _m = "message";
const _mCA = "managedCredentialsAction";
const _mCS = "managedCredentialsStatus";
const _mR = "maxResults";
const _me = "membership";
const _mem = "memberships";
const _n = "name";
const _nT = "nextToken";
const _oA = "ownerArn";
const _p = "permissions";
const _r = "reason";
const _s = "status";
const _sI = "subnetId";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloud9";
const _t = "tags";
const _ty = "type";
const _uA = "userArn";
const _uI = "userId";
const n0 = "com.amazonaws.cloud9";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
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
} from "../models/errors";

/* eslint no-var: 0 */
export var EnvironmentDescription: StaticSimpleSchema = [0, n0, _ED, 8, 0];
export var TagKey: StaticSimpleSchema = [0, n0, _TK, 8, 0];
export var TagValue: StaticSimpleSchema = [0, n0, _TV, 8, 0];
export var BadRequestException: StaticErrorSchema = [-3, n0, _BRE, { [_e]: _c }, [_m, _cN, _co], [0, 0, 1]];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);
export var ConcurrentAccessException: StaticErrorSchema = [-3, n0, _CAE, { [_e]: _c }, [_m, _cN, _co], [0, 0, 1]];
TypeRegistry.for(n0).registerError(ConcurrentAccessException, __ConcurrentAccessException);
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c }, [_m, _cN, _co], [0, 0, 1]];
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
export var ForbiddenException: StaticErrorSchema = [-3, n0, _FE, { [_e]: _c }, [_m, _cN, _co], [0, 0, 1]];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);
export var InternalServerErrorException: StaticErrorSchema = [-3, n0, _ISEE, { [_e]: _se }, [_m, _cN, _co], [0, 0, 1]];
TypeRegistry.for(n0).registerError(InternalServerErrorException, __InternalServerErrorException);
export var LimitExceededException: StaticErrorSchema = [-3, n0, _LEE, { [_e]: _c }, [_m, _cN, _co], [0, 0, 1]];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);
export var ListEnvironmentsRequest: StaticStructureSchema = [3, n0, _LER, 0, [_nT, _mR], [0, 1]];
export var ListEnvironmentsResult: StaticStructureSchema = [3, n0, _LERi, 0, [_nT, _eIn], [0, 64 | 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RARN], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [[() => TagList, 0]]];
export var NotFoundException: StaticErrorSchema = [-3, n0, _NFE, { [_e]: _c }, [_m, _cN, _co], [0, 0, 1]];
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
export var TooManyRequestsException: StaticErrorSchema = [-3, n0, _TMRE, { [_e]: _c }, [_m, _cN, _co], [0, 0, 1]];
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
