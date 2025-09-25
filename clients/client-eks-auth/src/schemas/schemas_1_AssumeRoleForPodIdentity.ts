// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ExpiredTokenException as __ExpiredTokenException,
  InternalServerException as __InternalServerException,
  InvalidParameterException as __InvalidParameterException,
  InvalidRequestException as __InvalidRequestException,
  InvalidTokenException as __InvalidTokenException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _a,
  _aA,
  _ADE,
  _aI,
  _aKI,
  _ARFPI,
  _ARFPIR,
  _ARFPIRs,
  _aRI,
  _ARU,
  _aRU,
  _au,
  _C,
  _c,
  _cN,
  _cr,
  _e,
  _ETE,
  _ex,
  _h,
  _hE,
  _IPE,
  _IRE,
  _ISE,
  _ITE,
  _JT,
  _m,
  _n,
  _PIA,
  _pIA,
  _RNFE,
  _S,
  _s,
  _sA,
  _sAK,
  _se,
  _sT,
  _SUE,
  _t,
  _TE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var JwtToken = sim(n0, _JT, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AssumedRoleUser = struct(n0, _ARU, 0, [_a, _aRI], [0, 0]);
export var AssumeRoleForPodIdentityRequest = struct(
  n0,
  _ARFPIR,
  0,
  [_cN, _t],
  [
    [0, 1],
    [() => JwtToken, 0],
  ]
);
export var AssumeRoleForPodIdentityResponse = struct(
  n0,
  _ARFPIRs,
  0,
  [_s, _au, _pIA, _aRU, _cr],
  [() => Subject, 0, () => PodIdentityAssociation, () => AssumedRoleUser, [() => Credentials, 0]]
);
export var Credentials = struct(n0, _C, 8, [_sT, _sAK, _aKI, _ex], [0, 0, 0, 4]);
export var ExpiredTokenException = error(
  n0,
  _ETE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ExpiredTokenException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidParameterException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidRequestException
);
export var InvalidTokenException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidTokenException
);
export var PodIdentityAssociation = struct(n0, _PIA, 0, [_aA, _aI], [0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var Subject = struct(n0, _S, 0, [_n, _sA], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var AssumeRoleForPodIdentity = op(
  n0,
  _ARFPI,
  {
    [_h]: ["POST", "/clusters/{clusterName}/assume-role-for-pod-identity", 200],
  },
  () => AssumeRoleForPodIdentityRequest,
  () => AssumeRoleForPodIdentityResponse
);
