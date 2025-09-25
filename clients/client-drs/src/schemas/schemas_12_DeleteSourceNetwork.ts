// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSN, _DSNR, _DSNRe, _ht, _sNID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSourceNetworkRequest = struct(n0, _DSNR, 0, [_sNID], [0]);
export var DeleteSourceNetworkResponse = struct(n0, _DSNRe, 0, [], []);
export var DeleteSourceNetwork = op(
  n0,
  _DSN,
  {
    [_ht]: ["POST", "/DeleteSourceNetwork", 204],
  },
  () => DeleteSourceNetworkRequest,
  () => DeleteSourceNetworkResponse
);
