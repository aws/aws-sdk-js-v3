// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  NotFoundException as __NotFoundException,
} from "../models/index";
import {
  _BRE,
  _c,
  _e,
  _hE,
  _hQ,
  _ht,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _NFE,
  _rAes,
  _t,
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
  [_m],
  [0],

  __BadRequestException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAes], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAes, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAes, _tK],
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

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
