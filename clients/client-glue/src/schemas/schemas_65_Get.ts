// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DJN, _LTi, _LTR, _LTRi, _MRax, _NTe, _Tag, _TNr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTriggersRequest = struct(n0, _LTR, 0, [_NTe, _DJN, _MRax, _Tag], [0, 0, 1, 128 | 0]);
export var ListTriggersResponse = struct(n0, _LTRi, 0, [_TNr, _NTe], [64 | 0, 0]);
export var ListTriggers = op(
  n0,
  _LTi,
  0,
  () => ListTriggersRequest,
  () => ListTriggersResponse
);
