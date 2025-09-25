// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ForbiddenException as __ForbiddenException,
  LimitExceededException as __LimitExceededException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/index";
import {
  _a,
  _aSTM,
  _c,
  _CE,
  _CEEC,
  _CEECR,
  _CEECRr,
  _CEM,
  _CEMR,
  _CEMRr,
  _cN,
  _co,
  _cRT,
  _cT,
  _d,
  _DE,
  _DEe,
  _DEM,
  _DEMe,
  _DEMR,
  _DEMRe,
  _DEMRes,
  _DEMResc,
  _DER,
  _DERe,
  _DERes,
  _DEResc,
  _DES,
  _DESR,
  _DESRe,
  _dR,
  _E,
  _e,
  _ED,
  _eI,
  _eIn,
  _EL,
  _ELn,
  _EM,
  _EML,
  _en,
  _FE,
  _fR,
  _i,
  _iI,
  _iT,
  _l,
  _lA,
  _LE,
  _LEE,
  _LER,
  _LERi,
  _m,
  _mCA,
  _mCS,
  _me,
  _mem,
  _mR,
  _n,
  _nT,
  _oA,
  _p,
  _r,
  _s,
  _sI,
  _t,
  _TMRE,
  _ty,
  _uA,
  _UE,
  _UEM,
  _UEMR,
  _UEMRp,
  _UER,
  _UERp,
  _uI,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Resource";

/* eslint no-var: 0 */

export var EnvironmentDescription = sim(n0, _ED, 0, 8);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __ConflictException
);
export var CreateEnvironmentEC2Request = struct(
  n0,
  _CEECR,
  0,
  [_n, _d, _cRT, _iT, _sI, _iI, _aSTM, _oA, _t, _cT, _dR],
  [0, [() => EnvironmentDescription, 0], 0, 0, 0, 0, 1, 0, [() => TagList, 0], 0, 2]
);
export var CreateEnvironmentEC2Result = struct(n0, _CEECRr, 0, [_eI], [0]);
export var CreateEnvironmentMembershipRequest = struct(n0, _CEMR, 0, [_eI, _uA, _p], [0, 0, 0]);
export var CreateEnvironmentMembershipResult = struct(n0, _CEMRr, 0, [_me], [() => EnvironmentMember]);
export var DeleteEnvironmentMembershipRequest = struct(n0, _DEMR, 0, [_eI, _uA], [0, 0]);
export var DeleteEnvironmentMembershipResult = struct(n0, _DEMRe, 0, [], []);
export var DeleteEnvironmentRequest = struct(n0, _DER, 0, [_eI], [0]);
export var DeleteEnvironmentResult = struct(n0, _DERe, 0, [], []);
export var DescribeEnvironmentMembershipsRequest = struct(
  n0,
  _DEMRes,
  0,
  [_uA, _eI, _p, _nT, _mR],
  [0, 0, 64 | 0, 0, 1]
);
export var DescribeEnvironmentMembershipsResult = struct(
  n0,
  _DEMResc,
  0,
  [_mem, _nT],
  [() => EnvironmentMembersList, 0]
);
export var DescribeEnvironmentsRequest = struct(n0, _DERes, 0, [_eIn], [64 | 0]);
export var DescribeEnvironmentsResult = struct(n0, _DEResc, 0, [_en], [[() => EnvironmentList, 0]]);
export var DescribeEnvironmentStatusRequest = struct(n0, _DESR, 0, [_eI], [0]);
export var DescribeEnvironmentStatusResult = struct(n0, _DESRe, 0, [_s, _m], [0, 0]);
export var Environment = struct(
  n0,
  _E,
  0,
  [_i, _n, _d, _ty, _cT, _a, _oA, _l, _mCS],
  [0, 0, [() => EnvironmentDescription, 0], 0, 0, 0, 0, () => EnvironmentLifecycle, 0]
);
export var EnvironmentLifecycle = struct(n0, _EL, 0, [_s, _r, _fR], [0, 0, 0]);
export var EnvironmentMember = struct(n0, _EM, 0, [_p, _uI, _uA, _eI, _lA], [0, 0, 0, 0, 4]);
export var ForbiddenException = error(
  n0,
  _FE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __ForbiddenException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __LimitExceededException
);
export var ListEnvironmentsRequest = struct(n0, _LER, 0, [_nT, _mR], [0, 1]);
export var ListEnvironmentsResult = struct(n0, _LERi, 0, [_nT, _eIn], [0, 64 | 0]);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __TooManyRequestsException
);
export var UpdateEnvironmentMembershipRequest = struct(n0, _UEMR, 0, [_eI, _uA, _p], [0, 0, 0]);
export var UpdateEnvironmentMembershipResult = struct(n0, _UEMRp, 0, [_me], [() => EnvironmentMember]);
export var UpdateEnvironmentRequest = struct(
  n0,
  _UER,
  0,
  [_eI, _n, _d, _mCA],
  [0, 0, [() => EnvironmentDescription, 0], 0]
);
export var UpdateEnvironmentResult = struct(n0, _UERp, 0, [], []);
export var Unit = "unit" as const;

export var BoundedEnvironmentIdList = 64 | 0;

export var EnvironmentIdList = 64 | 0;

export var EnvironmentList = list(n0, _ELn, 0, [() => Environment, 0]);
export var EnvironmentMembersList = list(n0, _EML, 0, () => EnvironmentMember);
export var PermissionsList = 64 | 0;

export var CreateEnvironmentEC2 = op(
  n0,
  _CEEC,
  2,
  () => CreateEnvironmentEC2Request,
  () => CreateEnvironmentEC2Result
);
export var CreateEnvironmentMembership = op(
  n0,
  _CEM,
  2,
  () => CreateEnvironmentMembershipRequest,
  () => CreateEnvironmentMembershipResult
);
export var DeleteEnvironment = op(
  n0,
  _DE,
  2,
  () => DeleteEnvironmentRequest,
  () => DeleteEnvironmentResult
);
export var DeleteEnvironmentMembership = op(
  n0,
  _DEM,
  2,
  () => DeleteEnvironmentMembershipRequest,
  () => DeleteEnvironmentMembershipResult
);
export var DescribeEnvironmentMemberships = op(
  n0,
  _DEMe,
  0,
  () => DescribeEnvironmentMembershipsRequest,
  () => DescribeEnvironmentMembershipsResult
);
export var DescribeEnvironments = op(
  n0,
  _DEe,
  0,
  () => DescribeEnvironmentsRequest,
  () => DescribeEnvironmentsResult
);
export var DescribeEnvironmentStatus = op(
  n0,
  _DES,
  0,
  () => DescribeEnvironmentStatusRequest,
  () => DescribeEnvironmentStatusResult
);
export var ListEnvironments = op(
  n0,
  _LE,
  0,
  () => ListEnvironmentsRequest,
  () => ListEnvironmentsResult
);
export var UpdateEnvironment = op(
  n0,
  _UE,
  2,
  () => UpdateEnvironmentRequest,
  () => UpdateEnvironmentResult
);
export var UpdateEnvironmentMembership = op(
  n0,
  _UEM,
  2,
  () => UpdateEnvironmentMembershipRequest,
  () => UpdateEnvironmentMembershipResult
);
