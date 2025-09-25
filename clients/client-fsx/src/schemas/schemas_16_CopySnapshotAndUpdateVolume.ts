// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAd,
  _CRT,
  _CS,
  _CSAUV,
  _CSAUVR,
  _CSAUVRo,
  _L,
  _O,
  _SSARN,
  _VI,
  AdministrativeActions,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CopySnapshotAndUpdateVolumeRequest = struct(
  n0,
  _CSAUVR,
  0,
  [_CRT, _VI, _SSARN, _CS, _O],
  [[0, 4], 0, 0, 0, 64 | 0]
);
export var CopySnapshotAndUpdateVolumeResponse = struct(
  n0,
  _CSAUVRo,
  0,
  [_VI, _L, _AAd],
  [0, 0, [() => AdministrativeActions, 0]]
);
export var UpdateOpenZFSVolumeOptions = 64 | 0;

export var CopySnapshotAndUpdateVolume = op(
  n0,
  _CSAUV,
  2,
  () => CopySnapshotAndUpdateVolumeRequest,
  () => CopySnapshotAndUpdateVolumeResponse
);
