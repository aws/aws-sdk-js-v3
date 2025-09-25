// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _oDG, _tGTA, _tGTR, _tN, _UTGFT, _UTGFTR, _UTGFTRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateThingGroupsForThingRequest = struct(n0, _UTGFTR, 0, [_tN, _tGTA, _tGTR, _oDG], [0, 64 | 0, 64 | 0, 2]);
export var UpdateThingGroupsForThingResponse = struct(n0, _UTGFTRp, 0, [], []);
export var ThingGroupList = 64 | 0;

export var UpdateThingGroupsForThing = op(
  n0,
  _UTGFT,
  {
    [_h]: ["PUT", "/thing-groups/updateThingGroupsForThing", 200],
  },
  () => UpdateThingGroupsForThingRequest,
  () => UpdateThingGroupsForThingResponse
);
