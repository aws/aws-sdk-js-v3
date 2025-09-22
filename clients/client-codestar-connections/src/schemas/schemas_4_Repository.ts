// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _CA,
  _CC,
  _CCI,
  _CCO,
  _CL,
  _CN,
  _Co,
  _CS,
  _DC,
  _DCI,
  _DCO,
  _GC,
  _GCI,
  _GCO,
  _HA,
  _HAF,
  _LC,
  _LCI,
  _LCO,
  _MR,
  _NT,
  _OAI,
  _PT,
  _PTF,
  _T,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var Connection = struct(n0, _C, 0, [_CN, _CA, _PT, _OAI, _CS, _HA], [0, 0, 0, 0, 0, 0]);
export var CreateConnectionInput = struct(n0, _CCI, 0, [_PT, _CN, _T, _HA], [0, 0, () => TagList, 0]);
export var CreateConnectionOutput = struct(n0, _CCO, 0, [_CA, _T], [0, () => TagList]);
export var DeleteConnectionInput = struct(n0, _DCI, 0, [_CA], [0]);
export var DeleteConnectionOutput = struct(n0, _DCO, 0, [], []);
export var GetConnectionInput = struct(n0, _GCI, 0, [_CA], [0]);
export var GetConnectionOutput = struct(n0, _GCO, 0, [_C], [() => Connection]);
export var ListConnectionsInput = struct(n0, _LCI, 0, [_PTF, _HAF, _MR, _NT], [0, 0, 1, 0]);
export var ListConnectionsOutput = struct(n0, _LCO, 0, [_Co, _NT], [() => ConnectionList, 0]);
export var ConnectionList = list(n0, _CL, 0, () => Connection);
export var CreateConnection = op(
  n0,
  _CC,
  0,
  () => CreateConnectionInput,
  () => CreateConnectionOutput
);
export var DeleteConnection = op(
  n0,
  _DC,
  0,
  () => DeleteConnectionInput,
  () => DeleteConnectionOutput
);
export var GetConnection = op(
  n0,
  _GC,
  0,
  () => GetConnectionInput,
  () => GetConnectionOutput
);
export var ListConnections = op(
  n0,
  _LC,
  0,
  () => ListConnectionsInput,
  () => ListConnectionsOutput
);
