// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DDKRR,
  _DDKRRI,
  _DDKRRO,
  _EDKRR,
  _EDKRRI,
  _EDKRRO,
  _ERR,
  _GDKRR,
  _GDKRRI,
  _GDKRRO,
  _RR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisableDefaultKeyReplicationRegionsInput = struct(n0, _DDKRRI, 0, [_RR], [64 | 0]);
export var DisableDefaultKeyReplicationRegionsOutput = struct(n0, _DDKRRO, 0, [_ERR], [64 | 0]);
export var EnableDefaultKeyReplicationRegionsInput = struct(n0, _EDKRRI, 0, [_RR], [64 | 0]);
export var EnableDefaultKeyReplicationRegionsOutput = struct(n0, _EDKRRO, 0, [_ERR], [64 | 0]);
export var GetDefaultKeyReplicationRegionsInput = struct(n0, _GDKRRI, 0, [], []);
export var GetDefaultKeyReplicationRegionsOutput = struct(n0, _GDKRRO, 0, [_ERR], [64 | 0]);
export var Regions = 64 | 0;

export var DisableDefaultKeyReplicationRegions = op(
  n0,
  _DDKRR,
  0,
  () => DisableDefaultKeyReplicationRegionsInput,
  () => DisableDefaultKeyReplicationRegionsOutput
);
export var EnableDefaultKeyReplicationRegions = op(
  n0,
  _EDKRR,
  0,
  () => EnableDefaultKeyReplicationRegionsInput,
  () => EnableDefaultKeyReplicationRegionsOutput
);
export var GetDefaultKeyReplicationRegions = op(
  n0,
  _GDKRR,
  0,
  () => GetDefaultKeyReplicationRegionsInput,
  () => GetDefaultKeyReplicationRegionsOutput
);
