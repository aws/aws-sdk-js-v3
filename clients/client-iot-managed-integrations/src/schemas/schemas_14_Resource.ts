// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidRequestException as __InvalidRequestException } from "../models/index";
import {
  _c,
  _e,
  _h,
  _hE,
  _hQ,
  _IRE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _Me,
  _RAe,
  _t,
  _Ta,
  _TK,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Me],
  [0],

  __InvalidRequestException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [[() => TagsMap, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAe, _Ta],
  [
    [0, 1],
    [() => TagsMap, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TK],
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
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
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
