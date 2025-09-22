// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AIs, _Ar, _LP, _LPi, _LPis, _LPR, _LPRi, _MRa, _NT, _PI, _Prof, _PT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListedProfile = struct(n0, _LP, 0, [_Ar, _PI, _AIs, _PT], [0, 0, 0, 0]);
export var ListProfilesRequest = struct(n0, _LPR, 0, [_MRa, _NT, _PT], [1, 0, 0]);
export var ListProfilesResponse = struct(n0, _LPRi, 0, [_NT, _Prof], [0, () => ListedProfiles]);
export var ListedProfiles = list(n0, _LPi, 0, () => ListedProfile);
export var ListProfiles = op(
  n0,
  _LPis,
  0,
  () => ListProfilesRequest,
  () => ListProfilesResponse
);
