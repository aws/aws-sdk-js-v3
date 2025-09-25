// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _bV, _DST, _DSTR, _h, _hQ, _lI, _sRIUC, _sTI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSlotTypeRequest = struct(
  n0,
  _DSTR,
  0,
  [_sTI, _bI, _bV, _lI, _sRIUC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteSlotType = op(
  n0,
  _DST,
  {
    [_h]: ["DELETE", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}", 204],
  },
  () => DeleteSlotTypeRequest,
  () => Unit
);
