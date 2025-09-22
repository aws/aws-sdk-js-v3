// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aN, _DMA, _DMAR, _DMARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMitigationActionRequest = struct(n0, _DMAR, 0, [_aN], [[0, 1]]);
export var DeleteMitigationActionResponse = struct(n0, _DMARe, 0, [], []);
export var DeleteMitigationAction = op(
  n0,
  _DMA,
  {
    [_h]: ["DELETE", "/mitigationactions/actions/{actionName}", 200],
  },
  () => DeleteMitigationActionRequest,
  () => DeleteMitigationActionResponse
);
