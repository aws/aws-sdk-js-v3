// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMP, _DMPR, _h, _mPI, _MPIR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMissionProfileRequest = struct(n0, _DMPR, 0, [_mPI], [[0, 1]]);
export var MissionProfileIdResponse = struct(n0, _MPIR, 0, [_mPI], [0]);
export var DeleteMissionProfile = op(
  n0,
  _DMP,
  {
    [_h]: ["DELETE", "/missionprofile/{missionProfileId}", 200],
  },
  () => DeleteMissionProfileRequest,
  () => MissionProfileIdResponse
);
