// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  NotFoundException as __NotFoundException,
} from "../models/index";
import {
  _BRE,
  _c,
  _co,
  _e,
  _h,
  _hE,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _NFE,
  _rA,
  _ta,
  _tK,
  _TR,
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
  [_m, _co],
  [0, 0],

  __BadRequestException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _co],
  [0, 0],

  __NotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
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
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

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
