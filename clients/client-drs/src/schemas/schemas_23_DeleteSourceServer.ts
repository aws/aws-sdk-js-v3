// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSS, _DSSR, _DSSRe, _ht, _sSID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSourceServerRequest = struct(n0, _DSSR, 0, [_sSID], [0]);
export var DeleteSourceServerResponse = struct(n0, _DSSRe, 0, [], []);
export var DeleteSourceServer = op(
  n0,
  _DSS,
  {
    [_ht]: ["POST", "/DeleteSourceServer", 204],
  },
  () => DeleteSourceServerRequest,
  () => DeleteSourceServerResponse
);
