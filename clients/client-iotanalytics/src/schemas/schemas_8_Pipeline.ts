// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CM,
  _cM,
  _CPRa,
  _CPRR,
  _CPRRa,
  _DPe,
  _DPR,
  _eT,
  _h,
  _pN,
  _rI,
  _sP,
  _SPR,
  _SPRR,
  _SPRRt,
  _sTt,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelPipelineReprocessingRequest = struct(
  n0,
  _CPRR,
  0,
  [_pN, _rI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelPipelineReprocessingResponse = struct(n0, _CPRRa, 0, [], []);
export var ChannelMessages = struct(n0, _CM, 0, [_sP], [64 | 0]);
export var DeletePipelineRequest = struct(n0, _DPR, 0, [_pN], [[0, 1]]);
export var StartPipelineReprocessingRequest = struct(
  n0,
  _SPRR,
  0,
  [_pN, _sTt, _eT, _cM],
  [[0, 1], 4, 4, () => ChannelMessages]
);
export var StartPipelineReprocessingResponse = struct(n0, _SPRRt, 0, [_rI], [0]);
export var S3PathChannelMessages = 64 | 0;

export var CancelPipelineReprocessing = op(
  n0,
  _CPRa,
  {
    [_h]: ["DELETE", "/pipelines/{pipelineName}/reprocessing/{reprocessingId}", 200],
  },
  () => CancelPipelineReprocessingRequest,
  () => CancelPipelineReprocessingResponse
);
export var DeletePipeline = op(
  n0,
  _DPe,
  {
    [_h]: ["DELETE", "/pipelines/{pipelineName}", 204],
  },
  () => DeletePipelineRequest,
  () => Unit
);
export var StartPipelineReprocessing = op(
  n0,
  _SPR,
  {
    [_h]: ["POST", "/pipelines/{pipelineName}/reprocessing", 200],
  },
  () => StartPipelineReprocessingRequest,
  () => StartPipelineReprocessingResponse
);
