// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ED,
  _eD,
  _eM,
  _eTn,
  _GIMJ,
  _GIMJI,
  _GIMJO,
  _GMJ,
  _GMJI,
  _GMJO,
  _ht,
  _IMJM,
  _IMJOS,
  _IMJOSC,
  _iR,
  _jI,
  _JM,
  _JOS,
  _JOSC,
  _KMSA,
  _me,
  _mID,
  _oSC,
  _oSP,
  _rA,
  _rNP,
  _s,
  _SIMJ,
  _SIMJI,
  _SIMJO,
  _sT,
  _tMR,
  _tMSR,
  _tMTR,
  _tRP,
  _uRL,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ErrorDetails = struct(n0, _ED, 0, [_eM], [0]);
export var GetIdMappingJobInput = struct(
  n0,
  _GIMJI,
  0,
  [_wN, _jI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIdMappingJobOutput = struct(
  n0,
  _GIMJO,
  0,
  [_jI, _s, _sT, _eTn, _me, _eD, _oSC],
  [0, 0, 4, 4, () => IdMappingJobMetrics, () => ErrorDetails, () => IdMappingJobOutputSourceConfig]
);
export var GetMatchingJobInput = struct(
  n0,
  _GMJI,
  0,
  [_wN, _jI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetMatchingJobOutput = struct(
  n0,
  _GMJO,
  0,
  [_jI, _s, _sT, _eTn, _me, _eD, _oSC],
  [0, 0, 4, 4, () => JobMetrics, () => ErrorDetails, () => JobOutputSourceConfig]
);
export var IdMappingJobMetrics = struct(
  n0,
  _IMJM,
  0,
  [_iR, _tRP, _rNP, _tMR, _tMSR, _tMTR, _uRL],
  [1, 1, 1, 1, 1, 1, 1]
);
export var IdMappingJobOutputSource = struct(n0, _IMJOS, 0, [_rA, _oSP, _KMSA], [0, 0, 0]);
export var JobMetrics = struct(n0, _JM, 0, [_iR, _tRP, _rNP, _mID], [1, 1, 1, 1]);
export var JobOutputSource = struct(n0, _JOS, 0, [_rA, _oSP, _KMSA], [0, 0, 0]);
export var StartIdMappingJobInput = struct(n0, _SIMJI, 0, [_wN, _oSC], [[0, 1], () => IdMappingJobOutputSourceConfig]);
export var StartIdMappingJobOutput = struct(n0, _SIMJO, 0, [_jI, _oSC], [0, () => IdMappingJobOutputSourceConfig]);
export var IdMappingJobOutputSourceConfig = list(n0, _IMJOSC, 0, () => IdMappingJobOutputSource);
export var JobOutputSourceConfig = list(n0, _JOSC, 0, () => JobOutputSource);
export var GetIdMappingJob = op(
  n0,
  _GIMJ,
  {
    [_ht]: ["GET", "/idmappingworkflows/{workflowName}/jobs/{jobId}", 200],
  },
  () => GetIdMappingJobInput,
  () => GetIdMappingJobOutput
);
export var GetMatchingJob = op(
  n0,
  _GMJ,
  {
    [_ht]: ["GET", "/matchingworkflows/{workflowName}/jobs/{jobId}", 200],
  },
  () => GetMatchingJobInput,
  () => GetMatchingJobOutput
);
export var StartIdMappingJob = op(
  n0,
  _SIMJ,
  {
    [_ht]: ["POST", "/idmappingworkflows/{workflowName}/jobs", 200],
  },
  () => StartIdMappingJobInput,
  () => StartIdMappingJobOutput
);
