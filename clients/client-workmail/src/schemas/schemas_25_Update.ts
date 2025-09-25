// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _En, _GI, _HFGAL, _OI, _PIDS, _PIDSR, _PIDSRu, _UG, _UGR, _UGRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutInboundDmarcSettingsRequest = struct(n0, _PIDSR, 0, [_OI, _En], [0, 2]);
export var PutInboundDmarcSettingsResponse = struct(n0, _PIDSRu, 0, [], []);
export var UpdateGroupRequest = struct(n0, _UGR, 0, [_OI, _GI, _HFGAL], [0, 0, 2]);
export var UpdateGroupResponse = struct(n0, _UGRp, 0, [], []);
export var PutInboundDmarcSettings = op(
  n0,
  _PIDS,
  2,
  () => PutInboundDmarcSettingsRequest,
  () => PutInboundDmarcSettingsResponse
);
export var UpdateGroup = op(
  n0,
  _UG,
  2,
  () => UpdateGroupRequest,
  () => UpdateGroupResponse
);
