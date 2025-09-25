// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DPV,
  _DPVR,
  _DPVRe,
  _MIU,
  _MIUa,
  _PVA,
  _SPV,
  _SPVR,
  _SPVRt,
  _SPVRto,
  _SPVRtop,
  _SPVt,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectVersionRequest = struct(n0, _DPVR, 0, [_PVA], [0]);
export var DeleteProjectVersionResponse = struct(n0, _DPVRe, 0, [_St], [0]);
export var StartProjectVersionRequest = struct(n0, _SPVR, 0, [_PVA, _MIU, _MIUa], [0, 1, 1]);
export var StartProjectVersionResponse = struct(n0, _SPVRt, 0, [_St], [0]);
export var StopProjectVersionRequest = struct(n0, _SPVRto, 0, [_PVA], [0]);
export var StopProjectVersionResponse = struct(n0, _SPVRtop, 0, [_St], [0]);
export var DeleteProjectVersion = op(
  n0,
  _DPV,
  0,
  () => DeleteProjectVersionRequest,
  () => DeleteProjectVersionResponse
);
export var StartProjectVersion = op(
  n0,
  _SPV,
  0,
  () => StartProjectVersionRequest,
  () => StartProjectVersionResponse
);
export var StopProjectVersion = op(
  n0,
  _SPVt,
  0,
  () => StopProjectVersionRequest,
  () => StopProjectVersionResponse
);
