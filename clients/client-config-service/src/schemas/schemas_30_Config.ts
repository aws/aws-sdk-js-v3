// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoAvailableConfigurationRecorderException as __NoAvailableConfigurationRecorderException } from "../models/index";
import { _cl, _cSIo, _dCN, _DCSel, _DCSR, _DCSRe, _e, _m, _NACRE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeliverConfigSnapshotRequest = struct(n0, _DCSR, 0, [_dCN], [0]);
export var DeliverConfigSnapshotResponse = struct(n0, _DCSRe, 0, [_cSIo], [0]);
export var NoAvailableConfigurationRecorderException = error(
  n0,
  _NACRE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoAvailableConfigurationRecorderException
);
export var DeliverConfigSnapshot = op(
  n0,
  _DCSel,
  0,
  () => DeliverConfigSnapshotRequest,
  () => DeliverConfigSnapshotResponse
);
