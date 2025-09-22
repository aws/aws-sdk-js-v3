// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  InternalFailureException as __InternalFailureException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/index";
import {
  _A,
  _BRE,
  _c,
  _CG,
  _CGR,
  _CGRr,
  _CTr,
  _e,
  _G,
  _GG,
  _GGR,
  _GGRe,
  _GI,
  _h,
  _hE,
  _hQ,
  _I,
  _IFE,
  _LMT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _N,
  _NFE,
  _RA,
  _s,
  _Ta,
  _TK,
  _tK,
  _TMRE,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __BadRequestException
);
export var CreateGroupRequest = struct(n0, _CGR, 0, [_N, _Ta], [0, 128 | 0]);
export var CreateGroupResponse = struct(n0, _CGRr, 0, [_G], [() => Group]);
export var GetGroupRequest = struct(n0, _GGR, 0, [_GI], [[0, 1]]);
export var GetGroupResponse = struct(n0, _GGRe, 0, [_G], [() => Group]);
export var Group = struct(n0, _G, 0, [_I, _N, _A, _Ta, _CTr, _LMT], [0, 0, 0, 128 | 0, 4, 4]);
export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalFailureException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __TooManyRequestsException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
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
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateGroup = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/group", 200],
  },
  () => CreateGroupRequest,
  () => CreateGroupResponse
);
export var GetGroup = op(
  n0,
  _GG,
  {
    [_h]: ["GET", "/group/{GroupIdentifier}", 200],
  },
  () => GetGroupRequest,
  () => GetGroupResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
