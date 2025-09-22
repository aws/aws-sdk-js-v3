// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _IS, _ISR, _ISRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InitializeServiceRequest = struct(n0, _ISR, 0, [], []);
export var InitializeServiceResponse = struct(n0, _ISRn, 0, [], []);
export var InitializeService = op(
  n0,
  _IS,
  {
    [_ht]: ["POST", "/InitializeService", 204],
  },
  () => InitializeServiceRequest,
  () => InitializeServiceResponse
);
