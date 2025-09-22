// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IIPI, _IP, _LBAo, _MIP, _MIPI, _MIPO, _RIP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IpamPools = struct(n0, _IP, 0, [_IIPI], [0]);
export var ModifyIpPoolsInput = struct(n0, _MIPI, 0, [_LBAo, _IP, _RIP], [0, () => IpamPools, 64 | 0]);
export var ModifyIpPoolsOutput = struct(n0, _MIPO, 0, [_IP], [() => IpamPools]);
export var RemoveIpamPools = 64 | 0;

export var ModifyIpPools = op(
  n0,
  _MIP,
  0,
  () => ModifyIpPoolsInput,
  () => ModifyIpPoolsOutput
);
