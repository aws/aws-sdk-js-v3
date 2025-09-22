// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _eTn,
  _hQ,
  _ht,
  _IMWL,
  _IMWS,
  _j,
  _jI,
  _JL,
  _JS,
  _LIMJ,
  _LIMJI,
  _LIMJO,
  _LIMW,
  _LIMWI,
  _LIMWO,
  _LMJ,
  _LMJI,
  _LMJO,
  _LMW,
  _LMWI,
  _LMWO,
  _mRa,
  _MWL,
  _MWS,
  _nT,
  _rTe,
  _s,
  _sT,
  _uA,
  _wA,
  _wN,
  _wS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var IdMappingWorkflowSummary = struct(n0, _IMWS, 0, [_wN, _wA, _cA, _uA], [0, 0, 4, 4]);
export var JobSummary = struct(n0, _JS, 0, [_jI, _s, _sT, _eTn], [0, 0, 4, 4]);
export var ListIdMappingJobsInput = struct(
  n0,
  _LIMJI,
  0,
  [_wN, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListIdMappingJobsOutput = struct(n0, _LIMJO, 0, [_j, _nT], [() => JobList, 0]);
export var ListIdMappingWorkflowsInput = struct(
  n0,
  _LIMWI,
  0,
  [_nT, _mRa],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListIdMappingWorkflowsOutput = struct(n0, _LIMWO, 0, [_wS, _nT], [() => IdMappingWorkflowList, 0]);
export var ListMatchingJobsInput = struct(
  n0,
  _LMJI,
  0,
  [_wN, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListMatchingJobsOutput = struct(n0, _LMJO, 0, [_j, _nT], [() => JobList, 0]);
export var ListMatchingWorkflowsInput = struct(
  n0,
  _LMWI,
  0,
  [_nT, _mRa],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListMatchingWorkflowsOutput = struct(n0, _LMWO, 0, [_wS, _nT], [() => MatchingWorkflowList, 0]);
export var MatchingWorkflowSummary = struct(n0, _MWS, 0, [_wN, _wA, _cA, _uA, _rTe], [0, 0, 4, 4, 0]);
export var IdMappingWorkflowList = list(n0, _IMWL, 0, () => IdMappingWorkflowSummary);
export var JobList = list(n0, _JL, 0, () => JobSummary);
export var MatchingWorkflowList = list(n0, _MWL, 0, () => MatchingWorkflowSummary);
export var ListIdMappingJobs = op(
  n0,
  _LIMJ,
  {
    [_ht]: ["GET", "/idmappingworkflows/{workflowName}/jobs", 200],
  },
  () => ListIdMappingJobsInput,
  () => ListIdMappingJobsOutput
);
export var ListIdMappingWorkflows = op(
  n0,
  _LIMW,
  {
    [_ht]: ["GET", "/idmappingworkflows", 200],
  },
  () => ListIdMappingWorkflowsInput,
  () => ListIdMappingWorkflowsOutput
);
export var ListMatchingJobs = op(
  n0,
  _LMJ,
  {
    [_ht]: ["GET", "/matchingworkflows/{workflowName}/jobs", 200],
  },
  () => ListMatchingJobsInput,
  () => ListMatchingJobsOutput
);
export var ListMatchingWorkflows = op(
  n0,
  _LMW,
  {
    [_ht]: ["GET", "/matchingworkflows", 200],
  },
  () => ListMatchingWorkflowsInput,
  () => ListMatchingWorkflowsOutput
);
