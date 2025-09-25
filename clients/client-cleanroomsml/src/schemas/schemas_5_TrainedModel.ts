// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _d,
  _ht,
  _mem,
  _mI,
  _n,
  _oC,
  _STMEJ,
  _STMEJR,
  _tMA,
  _TMEOC,
  _TMERM,
  _TMERMr,
  _tMVI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartTrainedModelExportJobRequest = struct(
  n0,
  _STMEJR,
  0,
  [_n, _tMA, _tMVI, _mI, _oC, _d],
  [0, [0, 1], 0, [0, 1], () => TrainedModelExportOutputConfiguration, 0]
);
export var TrainedModelExportOutputConfiguration = struct(
  n0,
  _TMEOC,
  0,
  [_mem],
  [() => TrainedModelExportReceiverMembers]
);
export var TrainedModelExportReceiverMember = struct(n0, _TMERM, 0, [_aI], [0]);
export var TrainedModelExportReceiverMembers = list(n0, _TMERMr, 0, () => TrainedModelExportReceiverMember);
export var StartTrainedModelExportJob = op(
  n0,
  _STMEJ,
  {
    [_ht]: ["POST", "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/export-jobs", 200],
  },
  () => StartTrainedModelExportJobRequest,
  () => Unit
);
