// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DA, _DAR, _DARe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_aI], [[0, 1]]);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [], []);
export var DeleteApplication = op(
  n0,
  _DA,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}", 200],
  },
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
