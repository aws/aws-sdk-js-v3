// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ManagedRuleException as __ManagedRuleException } from "../models/index";
import { _c, _e, _m, _MRE, _RARN, _Ta, _TK, _TR, _TRR, _TRRa, _UR, _URR, _URRn, n0 } from "./schemas_0";
import { TagList } from "./schemas_12_Resource";

/* eslint no-var: 0 */

export var ManagedRuleException = error(
  n0,
  _MRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ManagedRuleException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

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
