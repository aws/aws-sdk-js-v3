// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _bV, _DIe, _DIRel, _h, _iI, _lI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIntentRequest = struct(
  n0,
  _DIRel,
  0,
  [_iI, _bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIntent = op(
  n0,
  _DIe,
  {
    [_h]: ["DELETE", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}", 204],
  },
  () => DeleteIntentRequest,
  () => Unit
);
