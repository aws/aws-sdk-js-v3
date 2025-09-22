// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDTG, _DDTGR, _DDTGRe, _eV, _h, _hQ, _tGNh, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDynamicThingGroupRequest = struct(
  n0,
  _DDTGR,
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
export var DeleteDynamicThingGroupResponse = struct(n0, _DDTGRe, 0, [], []);
export var DeleteDynamicThingGroup = op(
  n0,
  _DDTG,
  {
    [_h]: ["DELETE", "/dynamic-thing-groups/{thingGroupName}", 200],
  },
  () => DeleteDynamicThingGroupRequest,
  () => DeleteDynamicThingGroupResponse
);
