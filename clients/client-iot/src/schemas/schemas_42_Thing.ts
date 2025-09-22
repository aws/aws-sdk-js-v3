// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _gA,
  _gN,
  _GNAA,
  _h,
  _hQ,
  _LTG,
  _LTGFT,
  _LTGFTR,
  _LTGFTRi,
  _LTGR,
  _LTGRi,
  _mR,
  _nPF,
  _nT,
  _pG,
  _recu,
  _tG,
  _TGNAAL,
  _tN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GroupNameAndArn = struct(n0, _GNAA, 0, [_gN, _gA], [0, 0]);
export var ListThingGroupsForThingRequest = struct(
  n0,
  _LTGFTR,
  0,
  [_tN, _nT, _mR],
  [
    [0, 1],
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
export var ListThingGroupsForThingResponse = struct(n0, _LTGFTRi, 0, [_tG, _nT], [() => ThingGroupNameAndArnList, 0]);
export var ListThingGroupsRequest = struct(
  n0,
  _LTGR,
  0,
  [_nT, _mR, _pG, _nPF, _recu],
  [
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
    [
      0,
      {
        [_hQ]: _pG,
      },
    ],
    [
      0,
      {
        [_hQ]: _nPF,
      },
    ],
    [
      2,
      {
        [_hQ]: _recu,
      },
    ],
  ]
);
export var ListThingGroupsResponse = struct(n0, _LTGRi, 0, [_tG, _nT], [() => ThingGroupNameAndArnList, 0]);
export var ThingGroupNameAndArnList = list(n0, _TGNAAL, 0, () => GroupNameAndArn);
export var ListThingGroups = op(
  n0,
  _LTG,
  {
    [_h]: ["GET", "/thing-groups", 200],
  },
  () => ListThingGroupsRequest,
  () => ListThingGroupsResponse
);
export var ListThingGroupsForThing = op(
  n0,
  _LTGFT,
  {
    [_h]: ["GET", "/things/{thingName}/thing-groups", 200],
  },
  () => ListThingGroupsForThingRequest,
  () => ListThingGroupsForThingResponse
);
