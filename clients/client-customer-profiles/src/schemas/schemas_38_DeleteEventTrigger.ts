// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DET, _DETR, _DETRe, _DN, _ETN, _h, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventTriggerRequest = struct(
  n0,
  _DETR,
  0,
  [_DN, _ETN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEventTriggerResponse = struct(n0, _DETRe, 0, [_M], [0]);
export var DeleteEventTrigger = op(
  n0,
  _DET,
  {
    [_h]: ["DELETE", "/domains/{DomainName}/event-triggers/{EventTriggerName}", 200],
  },
  () => DeleteEventTriggerRequest,
  () => DeleteEventTriggerResponse
);
