// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyTagKeysException as __TooManyTagKeysException } from "../models/index";
import { _cl, _e, _hE, _me, _rAes, _TKa, _tKa, _TMTKE, _UR, _URR, _URRn, n0, TagKey } from "./schemas_0";

/* eslint no-var: 0 */

export var TooManyTagKeysException = error(
  n0,
  _TMTKE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __TooManyTagKeysException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rAes, _tKa], [0, [() => TagKeys, 0]]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = list(n0, _TKa, 0, [() => TagKey, 0]);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
