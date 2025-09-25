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
export const _t = "tags";
export const _ty = "type";
export const _uA = "userArn";
export const _uI = "userId";
export const n0 = "com.amazonaws.cloud9";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { Cloud9ServiceException as __Cloud9ServiceException } from "../models/Cloud9ServiceException";
import {
  BadRequestException as __BadRequestException,
  InternalServerErrorException as __InternalServerErrorException,
  NotFoundException as __NotFoundException,
} from "../models/index";

/* eslint no-var: 0 */

export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __BadRequestException
);
export var InternalServerErrorException = error(
  n0,
  _ISEE,
  {
    [_e]: _se,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __InternalServerErrorException
);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __NotFoundException
);
export var Cloud9ServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.cloud9",
  "Cloud9ServiceException",
  0,
  [],
  [],
  __Cloud9ServiceException
);
