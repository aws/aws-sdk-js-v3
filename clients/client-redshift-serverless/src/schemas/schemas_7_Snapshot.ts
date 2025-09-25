// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _dKKI,
  _dR,
  _DSCC,
  _DSCCR,
  _DSCCRe,
  _nN,
  _SCC,
  _sCC,
  _sCCA,
  _sCCI,
  _sRP,
  _USCC,
  _USCCR,
  _USCCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSnapshotCopyConfigurationRequest = struct(n0, _DSCCR, 0, [_sCCI], [0]);
export var DeleteSnapshotCopyConfigurationResponse = struct(n0, _DSCCRe, 0, [_sCC], [() => SnapshotCopyConfiguration]);
export var SnapshotCopyConfiguration = struct(n0, _SCC, 0, [_sCCI, _sCCA, _nN, _dR, _sRP, _dKKI], [0, 0, 0, 0, 1, 0]);
export var UpdateSnapshotCopyConfigurationRequest = struct(n0, _USCCR, 0, [_sCCI, _sRP], [0, 1]);
export var UpdateSnapshotCopyConfigurationResponse = struct(n0, _USCCRp, 0, [_sCC], [() => SnapshotCopyConfiguration]);
export var DeleteSnapshotCopyConfiguration = op(
  n0,
  _DSCC,
  2,
  () => DeleteSnapshotCopyConfigurationRequest,
  () => DeleteSnapshotCopyConfigurationResponse
);
export var UpdateSnapshotCopyConfiguration = op(
  n0,
  _USCC,
  0,
  () => UpdateSnapshotCopyConfigurationRequest,
  () => UpdateSnapshotCopyConfigurationResponse
);
