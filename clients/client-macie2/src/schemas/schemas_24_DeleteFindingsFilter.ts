// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFF, _DFFR, _DFFRe, _h, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFindingsFilterRequest = struct(n0, _DFFR, 0, [_i], [[0, 1]]);
export var DeleteFindingsFilterResponse = struct(n0, _DFFRe, 0, [], []);
export var DeleteFindingsFilter = op(
  n0,
  _DFF,
  {
    [_h]: ["DELETE", "/findingsfilters/{id}", 200],
  },
  () => DeleteFindingsFilterRequest,
  () => DeleteFindingsFilterResponse
);
