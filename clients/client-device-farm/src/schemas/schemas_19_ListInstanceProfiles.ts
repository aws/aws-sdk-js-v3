// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _IPn, _iPn, _LIP, _LIPR, _LIPRi, _mR, _nT, InstanceProfile, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListInstanceProfilesRequest = struct(n0, _LIPR, 0, [_mR, _nT], [1, 0]);
export var ListInstanceProfilesResult = struct(n0, _LIPRi, 0, [_iPn, _nT], [() => InstanceProfiles, 0]);
export var InstanceProfiles = list(n0, _IPn, 0, () => InstanceProfile);
export var ListInstanceProfiles = op(
  n0,
  _LIP,
  0,
  () => ListInstanceProfilesRequest,
  () => ListInstanceProfilesResult
);
