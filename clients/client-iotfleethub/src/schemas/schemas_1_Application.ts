// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InternalFailureException as __InternalFailureException,
  InvalidRequestException as __InvalidRequestException,
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _aA,
  _aCD,
  _aD,
  _aI,
  _aLUD,
  _aN,
  _AS,
  _aS,
  _ASp,
  _aSp,
  _aU,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CE,
  _cT,
  _DA,
  _DAe,
  _DAR,
  _DARe,
  _DARes,
  _DAResc,
  _e,
  _eM,
  _h,
  _hE,
  _hQ,
  _IFE,
  _IRE,
  _iT,
  _LA,
  _LAR,
  _LARi,
  _LEE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _nT,
  _rA,
  _rAe,
  _RNFE,
  _s,
  _sCI,
  _t,
  _TE,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UA,
  _UAR,
  _UARp,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(n0, _AS, 0, [_aI, _aN, _aD, _aU, _aCD, _aLUD, _aS], [0, 0, 0, 0, 1, 1, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateApplicationRequest = struct(n0, _CAR, 0, [_aN, _aD, _cT, _rA, _t], [0, 0, [0, 4], 0, 128 | 0]);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_aI, _aA], [0, 0]);
export var DeleteApplicationRequest = struct(
  n0,
  _DAR,
  0,
  [_aI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [], []);
export var DescribeApplicationRequest = struct(n0, _DARes, 0, [_aI], [[0, 1]]);
export var DescribeApplicationResponse = struct(
  n0,
  _DAResc,
  0,
  [_aI, _aA, _aN, _aD, _aU, _aS, _aCD, _aLUD, _rA, _sCI, _eM, _t],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 128 | 0]
);
export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalFailureException
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
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_aSp, _nT], [() => ApplicationSummaries, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
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
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tK],
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
export var UpdateApplicationRequest = struct(n0, _UAR, 0, [_aI, _aN, _aD, _cT], [[0, 1], 0, 0, [0, 4]]);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [], []);
export var Unit = "unit" as const;

export var ApplicationSummaries = list(n0, _ASp, 0, () => ApplicationSummary);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateApplication = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/applications", 201],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var DeleteApplication = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/applications/{applicationId}", 204],
  },
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
export var DescribeApplication = op(
  n0,
  _DAe,
  {
    [_h]: ["GET", "/applications/{applicationId}", 200],
  },
  () => DescribeApplicationRequest,
  () => DescribeApplicationResponse
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  {
    [_h]: ["PATCH", "/applications/{applicationId}", 202],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
