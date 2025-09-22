// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTITG, _LTITGR, _LTITGRi, _mR, _nT, _recu, _tGNh, _th, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListThingsInThingGroupRequest = struct(
  n0,
  _LTITGR,
  0,
  [_tGNh, _recu, _nT, _mR],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _recu,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListThingsInThingGroupResponse = struct(n0, _LTITGRi, 0, [_th, _nT], [64 | 0, 0]);
export var ListThingsInThingGroup = op(
  n0,
  _LTITG,
  {
    [_h]: ["GET", "/thing-groups/{thingGroupName}/things", 200],
  },
  () => ListThingsInThingGroupRequest,
  () => ListThingsInThingGroupResponse
);
