// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  TagPolicyViolationException as __TagPolicyViolationException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _c,
  _e,
  _hE,
  _IT,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _OT,
  _RARN,
  _T,
  _Ta,
  _TK,
  _TMTE,
  _TPVE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => OutputTags]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagPolicyViolationException = error(
  n0,
  _TPVE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __TagPolicyViolationException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [0, () => InputTags]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var InputTagKeys = 64 | 0;

export var InputTags = list(n0, _IT, 0, () => Tag);
export var OutputTags = list(n0, _OT, 0, () => Tag);
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
