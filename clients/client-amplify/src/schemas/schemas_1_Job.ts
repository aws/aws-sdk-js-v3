// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aFN,
  _aI,
  _aIr,
  _Ar,
  _ar,
  _Art,
  _bN,
  _CD,
  _CDR,
  _CDRr,
  _cI,
  _cM,
  _cTo,
  _DJ,
  _DJR,
  _DJRe,
  _eT,
  _fM,
  _fUU,
  _h,
  _hQ,
  _jA,
  _jI,
  _jR,
  _JS,
  _jS,
  _JSo,
  _jSo,
  _jT,
  _LAi,
  _LARis,
  _LARist,
  _LJ,
  _LJR,
  _LJRi,
  _mR,
  _nT,
  _SDR,
  _SDRt,
  _SDt,
  _SJ,
  _SJR,
  _SJRt,
  _SJRto,
  _SJRtop,
  _SJt,
  _sT,
  _st,
  _sU,
  _sUT,
  _zUU,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Artifact = struct(n0, _Ar, 0, [_aFN, _aIr], [0, 0]);
export var CreateDeploymentRequest = struct(n0, _CDR, 0, [_aI, _bN, _fM], [[0, 1], [0, 1], 128 | 0]);
export var CreateDeploymentResult = struct(n0, _CDRr, 0, [_jI, _fUU, _zUU], [0, 128 | 0, 0]);
export var DeleteJobRequest = struct(
  n0,
  _DJR,
  0,
  [_aI, _bN, _jI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteJobResult = struct(n0, _DJRe, 0, [_jS], [() => JobSummary]);
export var JobSummary = struct(
  n0,
  _JS,
  0,
  [_jA, _jI, _cI, _cM, _cTo, _sT, _st, _eT, _jT, _sU, _sUT],
  [0, 0, 0, 0, 4, 4, 0, 4, 0, 0, 0]
);
export var ListArtifactsRequest = struct(
  n0,
  _LARis,
  0,
  [_aI, _bN, _jI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListArtifactsResult = struct(n0, _LARist, 0, [_ar, _nT], [() => Artifacts, 0]);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_aI, _bN, _nT, _mR],
  [
    [0, 1],
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListJobsResult = struct(n0, _LJRi, 0, [_jSo, _nT], [() => JobSummaries, 0]);
export var StartDeploymentRequest = struct(n0, _SDR, 0, [_aI, _bN, _jI, _sU, _sUT], [[0, 1], [0, 1], 0, 0, 0]);
export var StartDeploymentResult = struct(n0, _SDRt, 0, [_jS], [() => JobSummary]);
export var StartJobRequest = struct(
  n0,
  _SJR,
  0,
  [_aI, _bN, _jI, _jT, _jR, _cI, _cM, _cTo],
  [[0, 1], [0, 1], 0, 0, 0, 0, 0, 4]
);
export var StartJobResult = struct(n0, _SJRt, 0, [_jS], [() => JobSummary]);
export var StopJobRequest = struct(
  n0,
  _SJRto,
  0,
  [_aI, _bN, _jI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StopJobResult = struct(n0, _SJRtop, 0, [_jS], [() => JobSummary]);
export var Artifacts = list(n0, _Art, 0, () => Artifact);
export var JobSummaries = list(n0, _JSo, 0, () => JobSummary);
export var FileMap = 128 | 0;

export var FileUploadUrls = 128 | 0;

export var CreateDeployment = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/apps/{appId}/branches/{branchName}/deployments", 200],
  },
  () => CreateDeploymentRequest,
  () => CreateDeploymentResult
);
export var DeleteJob = op(
  n0,
  _DJ,
  {
    [_h]: ["DELETE", "/apps/{appId}/branches/{branchName}/jobs/{jobId}", 200],
  },
  () => DeleteJobRequest,
  () => DeleteJobResult
);
export var ListArtifacts = op(
  n0,
  _LAi,
  {
    [_h]: ["GET", "/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts", 200],
  },
  () => ListArtifactsRequest,
  () => ListArtifactsResult
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_h]: ["GET", "/apps/{appId}/branches/{branchName}/jobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResult
);
export var StartDeployment = op(
  n0,
  _SDt,
  {
    [_h]: ["POST", "/apps/{appId}/branches/{branchName}/deployments/start", 200],
  },
  () => StartDeploymentRequest,
  () => StartDeploymentResult
);
export var StartJob = op(
  n0,
  _SJ,
  {
    [_h]: ["POST", "/apps/{appId}/branches/{branchName}/jobs", 200],
  },
  () => StartJobRequest,
  () => StartJobResult
);
export var StopJob = op(
  n0,
  _SJt,
  {
    [_h]: ["DELETE", "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop", 200],
  },
  () => StopJobRequest,
  () => StopJobResult
);
