// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAL, _DALR, _DPL, _DPLR, _LI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppsListRequest = struct(n0, _DALR, 0, [_LI], [0]);
export var DeleteProtocolsListRequest = struct(n0, _DPLR, 0, [_LI], [0]);
export var DeleteAppsList = op(
  n0,
  _DAL,
  0,
  () => DeleteAppsListRequest,
  () => Unit
);
export var DeleteProtocolsList = op(
  n0,
  _DPL,
  0,
  () => DeleteProtocolsListRequest,
  () => Unit
);
