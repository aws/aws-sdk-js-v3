// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DR, _DRR, _h, _RI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRoomRequest = struct(
  n0,
  _DRR,
  0,
  [_AI, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRoom = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/accounts/{AccountId}/rooms/{RoomId}", 204],
  },
  () => DeleteRoomRequest,
  () => Unit
);
