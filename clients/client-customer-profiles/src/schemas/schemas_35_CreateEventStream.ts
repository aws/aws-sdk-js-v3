// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CES, _CESR, _CESRr, _DN, _ESA, _ESN, _h, _Ta, _U, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEventStreamRequest = struct(n0, _CESR, 0, [_DN, _U, _ESN, _Ta], [[0, 1], 0, [0, 1], 128 | 0]);
export var CreateEventStreamResponse = struct(n0, _CESRr, 0, [_ESA, _Ta], [0, 128 | 0]);
export var CreateEventStream = op(
  n0,
  _CES,
  {
    [_h]: ["POST", "/domains/{DomainName}/event-streams/{EventStreamName}", 200],
  },
  () => CreateEventStreamRequest,
  () => CreateEventStreamResponse
);
