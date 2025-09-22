// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _DA, _DAR, _DARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAlertRequest = struct(n0, _DAR, 0, [_AA], [0]);
export var DeleteAlertResponse = struct(n0, _DARe, 0, [], []);
export var DeleteAlert = op(
  n0,
  _DA,
  {
    [_h]: ["POST", "/DeleteAlert", 200],
  },
  () => DeleteAlertRequest,
  () => DeleteAlertResponse
);
