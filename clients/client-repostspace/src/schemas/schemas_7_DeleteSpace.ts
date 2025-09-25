// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSI, _h, _sI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSpaceInput = struct(n0, _DSI, 0, [_sI], [[0, 1]]);
export var DeleteSpace = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/spaces/{spaceId}", 200],
  },
  () => DeleteSpaceInput,
  () => Unit
);
