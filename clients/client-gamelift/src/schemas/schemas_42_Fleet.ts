// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _DFPS,
  _DFPSI,
  _DFPSO,
  _FA,
  _FI,
  _FP,
  _IPL,
  _IPn,
  _IPp,
  _IR,
  _L,
  _P,
  _TP,
  _US,
  n0,
  PortNumber,
} from "./schemas_0";

/* eslint no-var: 0 */

export var IpRange = sim(n0, _IR, 0, 8);
export var DescribeFleetPortSettingsInput = struct(n0, _DFPSI, 0, [_FI, _L], [0, 0]);
export var DescribeFleetPortSettingsOutput = struct(
  n0,
  _DFPSO,
  0,
  [_FI, _FA, _IPn, _US, _L],
  [0, 0, [() => IpPermissionsList, 0], 0, 0]
);
export var IpPermission = struct(
  n0,
  _IPp,
  0,
  [_FP, _TP, _IR, _P],
  [[() => PortNumber, 0], [() => PortNumber, 0], [() => IpRange, 0], 0]
);
export var IpPermissionsList = list(n0, _IPL, 0, [() => IpPermission, 0]);
export var DescribeFleetPortSettings = op(
  n0,
  _DFPS,
  0,
  () => DescribeFleetPortSettingsInput,
  () => DescribeFleetPortSettingsOutput
);
