// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _bV, _DSe, _DSR, _h, _iI, _lI, _sIl, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSlotRequest = struct(
  n0,
  _DSR,
  0,
  [_sIl, _bI, _bV, _lI, _iI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSlot = op(
  n0,
  _DSe,
  {
    [_h]: [
      "DELETE",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
      204,
    ],
  },
  () => DeleteSlotRequest,
  () => Unit
);
