// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _aI,
  _c,
  _ca,
  _CE,
  _cT,
  _dP,
  _DPI,
  _dPI,
  _e,
  _eD,
  _fN,
  _h,
  _hE,
  _hQ,
  _ISE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _n,
  _PDP,
  _PDPR,
  _PDPRu,
  _pI,
  _rA,
  _rI,
  _RNFE,
  _s,
  _SQEE,
  _SS,
  _sS,
  _t,
  _TE,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SecretString = sim(n0, _SS, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI],
  [0, 0],

  __ConflictException
);
export var DeploymentParameterInput = struct(n0, _DPI, 0, [_n, _sS], [0, [() => SecretString, 0]]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var PutDeploymentParameterRequest = struct(
  n0,
  _PDPR,
  0,
  [_ca, _pI, _aI, _dP, _t, _eD, _cT],
  [[0, 1], [0, 1], 0, [() => DeploymentParameterInput, 0], 128 | 0, 5, [0, 4]]
);
export var PutDeploymentParameterResponse = struct(n0, _PDPRu, 0, [_rA, _aI, _dPI, _t], [0, 0, 0, 128 | 0]);
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
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
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
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _fN],
  [0, 0],

  __ValidationException
);
export var StringList = 64 | 0;

export var Tags = 128 | 0;

export var TagsMap = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var PutDeploymentParameter = op(
  n0,
  _PDP,
  {
    [_h]: ["POST", "/catalogs/{catalog}/products/{productId}/deployment-parameters", 200],
  },
  () => PutDeploymentParameterRequest,
  () => PutDeploymentParameterResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
