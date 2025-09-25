// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLS, _DLSR, _DLSRe, _h, _LSN, _SLN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLiveSourceRequest = struct(
  n0,
  _DLSR,
  0,
  [_LSN, _SLN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteLiveSourceResponse = struct(n0, _DLSRe, 0, [], []);
export var DeleteLiveSource = op(
  n0,
  _DLS,
  {
    [_h]: ["DELETE", "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}", 200],
  },
  () => DeleteLiveSourceRequest,
  () => DeleteLiveSourceResponse
);
