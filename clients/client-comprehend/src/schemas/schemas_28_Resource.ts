// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConcurrentModificationException as __ConcurrentModificationException,
  TooManyTagKeysException as __TooManyTagKeysException,
} from "../models/index";
import {
  _c,
  _CME,
  _e,
  _hE,
  _M,
  _RA,
  _Ta,
  _TK,
  _TMTKE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagKeysException = error(
  n0,
  _TMTKE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyTagKeysException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
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
