// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceUnavailableError as __ServiceUnavailableError } from "../models/index";
import {
  _CSFVRP,
  _CSFVRPI,
  _CSFVRPO,
  _CSI,
  _CSO,
  _CSr,
  _e,
  _hE,
  _m,
  _s,
  _SD,
  _SI,
  _SUE,
  _T,
  _VARN,
  _VRPT,
  n0,
  StorageGatewayError,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSnapshotFromVolumeRecoveryPointInput = struct(n0, _CSFVRPI, 0, [_VARN, _SD, _T], [0, 0, () => Tags]);
export var CreateSnapshotFromVolumeRecoveryPointOutput = struct(n0, _CSFVRPO, 0, [_SI, _VARN, _VRPT], [0, 0, 0]);
export var CreateSnapshotInput = struct(n0, _CSI, 0, [_VARN, _SD, _T], [0, 0, () => Tags]);
export var CreateSnapshotOutput = struct(n0, _CSO, 0, [_VARN, _SI], [0, 0]);
export var ServiceUnavailableError = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m, _e],
  [0, () => StorageGatewayError],

  __ServiceUnavailableError
);
export var CreateSnapshot = op(
  n0,
  _CSr,
  0,
  () => CreateSnapshotInput,
  () => CreateSnapshotOutput
);
export var CreateSnapshotFromVolumeRecoveryPoint = op(
  n0,
  _CSFVRP,
  0,
  () => CreateSnapshotFromVolumeRecoveryPointInput,
  () => CreateSnapshotFromVolumeRecoveryPointOutput
);
