// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CloudHsmTagException as __CloudHsmTagException } from "../models/index";
import { _c, _CHTE, _e, _Me, _RI, _TKL, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CloudHsmTagException = error(
  n0,
  _CHTE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __CloudHsmTagException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RI, _TKL], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
