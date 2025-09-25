// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAI,
  _cIo,
  _cT,
  _cTMEJ,
  _CTMEJL,
  _CTMEJS,
  _d,
  _hQ,
  _ht,
  _LCTMEJ,
  _LCTMEJR,
  _LCTMEJRi,
  _m,
  _mI,
  _mR,
  _n,
  _nT,
  _oC,
  _s,
  _sCt,
  _SD,
  _sDt,
  _tMA,
  _tMVI,
  _uT,
  n0,
} from "./schemas_0";
import { TrainedModelExportOutputConfiguration } from "./schemas_5_TrainedModel";

/* eslint no-var: 0 */

export var CollaborationTrainedModelExportJobSummary = struct(
  n0,
  _CTMEJS,
  0,
  [_cT, _uT, _n, _oC, _s, _sDt, _d, _cAI, _tMA, _tMVI, _mI, _cIo],
  [5, 5, 0, () => TrainedModelExportOutputConfiguration, 0, () => StatusDetails, 0, 0, 0, 0, 0, 0]
);
export var ListCollaborationTrainedModelExportJobsRequest = struct(
  n0,
  _LCTMEJR,
  0,
  [_nT, _mR, _cIo, _tMA, _tMVI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _tMVI,
      },
    ],
  ]
);
export var ListCollaborationTrainedModelExportJobsResponse = struct(
  n0,
  _LCTMEJRi,
  0,
  [_nT, _cTMEJ],
  [0, () => CollaborationTrainedModelExportJobList]
);
export var StatusDetails = struct(n0, _SD, 0, [_sCt, _m], [0, 0]);
export var CollaborationTrainedModelExportJobList = list(
  n0,
  _CTMEJL,
  0,
  () => CollaborationTrainedModelExportJobSummary
);
export var ListCollaborationTrainedModelExportJobs = op(
  n0,
  _LCTMEJ,
  {
    [_ht]: ["GET", "/collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}/export-jobs", 200],
  },
  () => ListCollaborationTrainedModelExportJobsRequest,
  () => ListCollaborationTrainedModelExportJobsResponse
);
