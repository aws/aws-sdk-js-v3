// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _RCA, _RO, _RRT, _RRTM, _RRTR, _RTA, _RTel, _RTM, _RTR, _SNc, _TLTR, _TN, _TTR, _TTRa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ReloadReplicationTablesMessage = struct(n0, _RRTM, 0, [_RCA, _TTR, _RO], [0, () => TableListToReload, 0]);
export var ReloadReplicationTablesResponse = struct(n0, _RRTR, 0, [_RCA], [0]);
export var ReloadTablesMessage = struct(n0, _RTM, 0, [_RTA, _TTR, _RO], [0, () => TableListToReload, 0]);
export var ReloadTablesResponse = struct(n0, _RTR, 0, [_RTA], [0]);
export var TableToReload = struct(n0, _TTRa, 0, [_SNc, _TN], [0, 0]);
export var TableListToReload = list(n0, _TLTR, 0, () => TableToReload);
export var ReloadReplicationTables = op(
  n0,
  _RRT,
  0,
  () => ReloadReplicationTablesMessage,
  () => ReloadReplicationTablesResponse
);
export var ReloadTables = op(
  n0,
  _RTel,
  0,
  () => ReloadTablesMessage,
  () => ReloadTablesResponse
);
