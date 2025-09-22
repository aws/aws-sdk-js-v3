// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWe, _DWR, _DWRe, _WN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkforceRequest = struct(n0, _DWR, 0, [_WN], [0]);
export var DeleteWorkforceResponse = struct(n0, _DWRe, 0, [], []);
export var DeleteWorkforce = op(
  n0,
  _DWe,
  0,
  () => DeleteWorkforceRequest,
  () => DeleteWorkforceResponse
);
