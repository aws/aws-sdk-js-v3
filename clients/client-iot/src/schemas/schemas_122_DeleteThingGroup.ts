// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTG, _DTGR, _DTGRe, _eV, _h, _hQ, _tGNh, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThingGroupRequest = struct(
  n0,
  _DTGR,
  0,
  [_tGNh, _eV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _eV,
      },
    ],
  ]
);
export var DeleteThingGroupResponse = struct(n0, _DTGRe, 0, [], []);
export var DeleteThingGroup = op(
  n0,
  _DTG,
  {
    [_h]: ["DELETE", "/thing-groups/{thingGroupName}", 200],
  },
  () => DeleteThingGroupRequest,
  () => DeleteThingGroupResponse
);
