// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConcurrentModificationException as __ConcurrentModificationException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _c,
  _CME,
  _DPD,
  _DPDR,
  _DPDRe,
  _e,
  _hE,
  _M,
  _m,
  _N,
  _RA,
  _S,
  _Ta,
  _TK,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var DeleteParallelDataRequest = struct(n0, _DPDR, 0, [_N], [0]);
export var DeleteParallelDataResponse = struct(n0, _DPDRe, 0, [_N, _S], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _RA],
  [0, 0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var DeleteParallelData = op(
  n0,
  _DPD,
  0,
  () => DeleteParallelDataRequest,
  () => DeleteParallelDataResponse
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
