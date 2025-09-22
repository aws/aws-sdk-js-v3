// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ht,
  _o,
  _rAe,
  _rN,
  _ta,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
  OperationList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_rN, _rAe, _ta], [0, 0, () => TagList]);
export var TagResourceResult = struct(n0, _TRRa, 0, [_o], [() => OperationList]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rN, _rAe, _tK], [0, 0, 64 | 0]);
export var UntagResourceResult = struct(n0, _URRn, 0, [_o], [() => OperationList]);
export var TagKeyList = 64 | 0;

export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/TagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResult
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UntagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResult
);
