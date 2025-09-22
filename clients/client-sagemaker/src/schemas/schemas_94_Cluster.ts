// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACNV, _ACNVR, _ACNVRt, _ATt, _CAl, _DCNV, _DCNVR, _DCNVRe, _DNe, _NI, _St, _VI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AttachClusterNodeVolumeRequest = struct(n0, _ACNVR, 0, [_CAl, _NI, _VI], [0, 0, 0]);
export var AttachClusterNodeVolumeResponse = struct(
  n0,
  _ACNVRt,
  0,
  [_CAl, _NI, _VI, _ATt, _St, _DNe],
  [0, 0, 0, 4, 0, 0]
);
export var DetachClusterNodeVolumeRequest = struct(n0, _DCNVR, 0, [_CAl, _NI, _VI], [0, 0, 0]);
export var DetachClusterNodeVolumeResponse = struct(
  n0,
  _DCNVRe,
  0,
  [_CAl, _NI, _VI, _ATt, _St, _DNe],
  [0, 0, 0, 4, 0, 0]
);
export var AttachClusterNodeVolume = op(
  n0,
  _ACNV,
  0,
  () => AttachClusterNodeVolumeRequest,
  () => AttachClusterNodeVolumeResponse
);
export var DetachClusterNodeVolume = op(
  n0,
  _DCNV,
  0,
  () => DetachClusterNodeVolumeRequest,
  () => DetachClusterNodeVolumeResponse
);
