// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InternalServerException as __InternalServerException } from "../models/index";
import {
  _a,
  _e,
  _hE,
  _ISEn,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _me,
  _rT,
  _rTK,
  _ser,
  _ta,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISEn,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_me],
  [0],

  __InternalServerException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_a], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_rT], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_a, _ta], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_a, _rTK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
