// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import {
  _c,
  _e,
  _hE,
  _k,
  _m,
  _rA,
  _RAEE,
  _T,
  _t,
  _tK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceAlreadyExistsException
);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
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
