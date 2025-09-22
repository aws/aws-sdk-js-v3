// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIs, _CIo, _CPK, _DSN, _h, _NIDI, _SCR, _SCRt, _SCt, _UIA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartConnectionRequest = struct(n0, _SCR, 0, [_DSN, _AIs, _CPK, _NIDI], [0, 0, 0, 1]);
export var StartConnectionResponse = struct(n0, _SCRt, 0, [_CIo, _UIA], [0, 0]);
export var StartConnection = op(
  n0,
  _SCt,
  {
    [_h]: ["POST", "/connections", 200],
  },
  () => StartConnectionRequest,
  () => StartConnectionResponse
);
