// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cAI,
  _cIo,
  _cMAAA,
  _cT,
  _d,
  _GCTM,
  _GCTMR,
  _GCTMRe,
  _hQ,
  _ht,
  _iCns,
  _iT,
  _iTDC,
  _lS,
  _lSD,
  _mI,
  _mRIS,
  _mS,
  _mSD,
  _n,
  _RC,
  _rC,
  _s,
  _SC,
  _sC,
  _sDt,
  _tCID,
  _tIM,
  _tMA,
  _uT,
  _vI,
  _vSIGB,
  n0,
} from "./schemas_0";
import { IncrementalTrainingDataChannelsOutput } from "./schemas_3_Trained";
import { StatusDetails } from "./schemas_20_Get";

/* eslint no-var: 0 */

export var GetCollaborationTrainedModelRequest = struct(
  n0,
  _GCTMR,
  0,
  [_tMA, _cIo, _vI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
  ]
);
export var GetCollaborationTrainedModelResponse = struct(
  n0,
  _GCTMRe,
  0,
  [_mI, _cIo, _tMA, _vI, _iTDC, _n, _d, _s, _sDt, _cMAAA, _rC, _tIM, _sC, _mS, _mSD, _lS, _lSD, _tCID, _cT, _uT, _cAI],
  [
    0,
    0,
    0,
    0,
    () => IncrementalTrainingDataChannelsOutput,
    0,
    0,
    0,
    () => StatusDetails,
    0,
    () => ResourceConfig,
    0,
    () => StoppingCondition,
    0,
    0,
    0,
    0,
    0,
    5,
    5,
    0,
  ]
);
export var ResourceConfig = struct(n0, _RC, 0, [_iCns, _iT, _vSIGB], [1, 0, 1]);
export var StoppingCondition = struct(n0, _SC, 0, [_mRIS], [1]);
export var GetCollaborationTrainedModel = op(
  n0,
  _GCTM,
  {
    [_ht]: ["GET", "/collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}", 200],
  },
  () => GetCollaborationTrainedModelRequest,
  () => GetCollaborationTrainedModelResponse
);
