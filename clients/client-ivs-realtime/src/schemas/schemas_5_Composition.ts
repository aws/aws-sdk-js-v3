// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _ht, _SCRto, _SCRtop, _SCto, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopCompositionRequest = struct(n0, _SCRto, 0, [_a], [0]);
export var StopCompositionResponse = struct(n0, _SCRtop, 0, [], []);
export var StopComposition = op(
  n0,
  _SCto,
  {
    [_ht]: ["POST", "/StopComposition", 200],
  },
  () => StopCompositionRequest,
  () => StopCompositionResponse
);
