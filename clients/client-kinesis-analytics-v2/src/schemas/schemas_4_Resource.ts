// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _c,
  _e,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _RARNe,
  _T,
  _Ta,
  _TK,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARNe], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => Tags]);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARNe, _T], [0, () => Tags]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARNe, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _T, 0, () => Tag);
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
