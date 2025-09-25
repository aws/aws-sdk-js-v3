// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DFe, _DFRel, _DFRele, _end, _fI, _fIl, _h, _hH, _iT, _XACT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFleetRequest = struct(
  n0,
  _DFRel,
  0,
  [_cT, _fI, _fIl],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFleetResponse = struct(n0, _DFRele, 0, [], []);
export var DeleteFleet = op(
  n0,
  _DFe,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/fleets/{fleetId}", 200],
    [_end]: ["management."],
  },
  () => DeleteFleetRequest,
  () => DeleteFleetResponse
);
