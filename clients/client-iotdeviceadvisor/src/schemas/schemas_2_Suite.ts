// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aM,
  _cAe,
  _dRA,
  _en,
  _GE,
  _GER,
  _GERe,
  _h,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _rA,
  _t,
  _tA,
  _tK,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetEndpointRequest = struct(
  n0,
  _GER,
  0,
  [_tA, _cAe, _dRA, _aM],
  [
    [
      0,
      {
        [_hQ]: _tA,
      },
    ],
    [
      0,
      {
        [_hQ]: _cAe,
      },
    ],
    [
      0,
      {
        [_hQ]: _dRA,
      },
    ],
    [
      0,
      {
        [_hQ]: _aM,
      },
    ],
  ]
);
export var GetEndpointResponse = struct(n0, _GERe, 0, [_en], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
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

export var GetEndpoint = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/endpoint", 200],
  },
  () => GetEndpointRequest,
  () => GetEndpointResponse
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
  _TRa,
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
