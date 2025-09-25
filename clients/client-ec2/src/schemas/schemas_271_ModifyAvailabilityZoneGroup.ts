// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _GN, _MAZG, _MAZGR, _MAZGRo, _OIS, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyAvailabilityZoneGroupRequest = struct(n0, _MAZGR, 0, [_GN, _OIS, _DR], [0, 0, 2]);
export var ModifyAvailabilityZoneGroupResult = struct(
  n0,
  _MAZGRo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ModifyAvailabilityZoneGroup = op(
  n0,
  _MAZG,
  0,
  () => ModifyAvailabilityZoneGroupRequest,
  () => ModifyAvailabilityZoneGroupResult
);
