// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ch,
  _Con,
  _CT,
  _D,
  _DDe,
  _DDR,
  _DDRe,
  _DMe,
  _DMR,
  _DMRe,
  _DP,
  _DPR,
  _DPRe,
  _DT,
  _h,
  _hH,
  _iT,
  _JN,
  _MA,
  _MIU,
  _MIUa,
  _MV,
  _PAr,
  _PN,
  _SMPJ,
  _SMPJR,
  _SMPJRt,
  _SMR,
  _SMRt,
  _SMRto,
  _SMRtop,
  _SMt,
  _SMto,
  _St,
  _UDE,
  _UDER,
  _UDERp,
  _XACT,
  n0,
} from "./schemas_0";
import { ModelPackagingConfiguration } from "./schemas_3_Model";

/* eslint no-var: 0 */

export var DeleteDatasetRequest = struct(
  n0,
  _DDR,
  0,
  [_PN, _DT, _CT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var DeleteDatasetResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteModelRequest = struct(
  n0,
  _DMR,
  0,
  [_PN, _MV, _CT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var DeleteModelResponse = struct(n0, _DMRe, 0, [_MA], [0]);
export var DeleteProjectRequest = struct(
  n0,
  _DPR,
  0,
  [_PN, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var DeleteProjectResponse = struct(n0, _DPRe, 0, [_PAr], [0]);
export var StartModelPackagingJobRequest = struct(
  n0,
  _SMPJR,
  0,
  [_PN, _MV, _JN, _Con, _D, _CT],
  [
    [0, 1],
    0,
    0,
    () => ModelPackagingConfiguration,
    0,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var StartModelPackagingJobResponse = struct(n0, _SMPJRt, 0, [_JN], [0]);
export var StartModelRequest = struct(
  n0,
  _SMR,
  0,
  [_PN, _MV, _MIU, _CT, _MIUa],
  [
    [0, 1],
    [0, 1],
    1,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    1,
  ]
);
export var StartModelResponse = struct(n0, _SMRt, 0, [_St], [0]);
export var StopModelRequest = struct(
  n0,
  _SMRto,
  0,
  [_PN, _MV, _CT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var StopModelResponse = struct(n0, _SMRtop, 0, [_St], [0]);
export var UpdateDatasetEntriesRequest = struct(
  n0,
  _UDER,
  0,
  [_PN, _DT, _Ch, _CT],
  [
    [0, 1],
    [0, 1],
    21,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var UpdateDatasetEntriesResponse = struct(n0, _UDERp, 0, [_St], [0]);
export var DeleteDataset = op(
  n0,
  _DDe,
  {
    [_h]: ["DELETE", "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}", 202],
  },
  () => DeleteDatasetRequest,
  () => DeleteDatasetResponse
);
export var DeleteModel = op(
  n0,
  _DMe,
  {
    [_h]: ["DELETE", "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}", 202],
  },
  () => DeleteModelRequest,
  () => DeleteModelResponse
);
export var DeleteProject = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/2020-11-20/projects/{ProjectName}", 200],
  },
  () => DeleteProjectRequest,
  () => DeleteProjectResponse
);
export var StartModel = op(
  n0,
  _SMt,
  {
    [_h]: ["POST", "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/start", 202],
  },
  () => StartModelRequest,
  () => StartModelResponse
);
export var StartModelPackagingJob = op(
  n0,
  _SMPJ,
  {
    [_h]: ["POST", "/2020-11-20/projects/{ProjectName}/modelpackagingjobs", 200],
  },
  () => StartModelPackagingJobRequest,
  () => StartModelPackagingJobResponse
);
export var StopModel = op(
  n0,
  _SMto,
  {
    [_h]: ["POST", "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/stop", 202],
  },
  () => StopModelRequest,
  () => StopModelResponse
);
export var UpdateDatasetEntries = op(
  n0,
  _UDE,
  {
    [_h]: ["PATCH", "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries", 202],
  },
  () => UpdateDatasetEntriesRequest,
  () => UpdateDatasetEntriesResponse
);
