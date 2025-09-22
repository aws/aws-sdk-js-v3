// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aID, _aIDc, _DA, _DAR, _DARe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_aID, _aIDc], [0, 0]);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [], []);
export var DeleteApplication = op(
  n0,
  _DA,
  {
    [_ht]: ["POST", "/DeleteApplication", 204],
  },
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
