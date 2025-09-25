// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DES, _DESR, _DESRe, _DN, _ESN, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventStreamRequest = struct(
  n0,
  _DESR,
  0,
  [_DN, _ESN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEventStreamResponse = struct(n0, _DESRe, 0, [], []);
export var DeleteEventStream = op(
  n0,
  _DES,
  {
    [_h]: ["DELETE", "/domains/{DomainName}/event-streams/{EventStreamName}", 200],
  },
  () => DeleteEventStreamRequest,
  () => DeleteEventStreamResponse
);
