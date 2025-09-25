// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aDI,
  _aI,
  _aIs,
  _AP,
  _aPc,
  _AS,
  _ASc,
  _aSc,
  _cMES,
  _cMIo,
  _CMRTRS,
  _cMRTRS,
  _CMRTRSo,
  _cT,
  _DAe,
  _DARes,
  _DAResc,
  _DCMES,
  _DCMESR,
  _DCMESRe,
  _EA,
  _EAR,
  _EARx,
  _end,
  _eTx,
  _hQ,
  _ht,
  _LA,
  _LAR,
  _LARi,
  _LCMRTR,
  _LCMRTRR,
  _LCMRTRRi,
  _mR,
  _nT,
  _RT,
  _rT,
  _rTRI,
  _rTRT,
  _sV,
  _TR,
  _tR,
  _tRI,
  _tRT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionPayload = struct(n0, _AP, 0, [_sV], [0]);
export var ActionSummary = struct(n0, _AS, 0, [_aI, _aDI, _tR, _rT], [0, 0, () => TargetResource, () => ResolveTo]);
export var ComputationModelResolveToResourceSummary = struct(n0, _CMRTRS, 0, [_rT], [() => ResolveTo]);
export var DescribeActionRequest = struct(n0, _DARes, 0, [_aI], [[0, 1]]);
export var DescribeActionResponse = struct(
  n0,
  _DAResc,
  0,
  [_aI, _tR, _aDI, _aPc, _eTx, _rT],
  [0, () => TargetResource, 0, () => ActionPayload, 4, () => ResolveTo]
);
export var DescribeComputationModelExecutionSummaryRequest = struct(
  n0,
  _DCMESR,
  0,
  [_cMIo, _rTRT, _rTRI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rTRT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTRI,
      },
    ],
  ]
);
export var DescribeComputationModelExecutionSummaryResponse = struct(
  n0,
  _DCMESRe,
  0,
  [_cMIo, _rT, _cMES],
  [0, () => ResolveTo, 128 | 0]
);
export var ExecuteActionRequest = struct(
  n0,
  _EAR,
  0,
  [_tR, _aDI, _aPc, _cT, _rT],
  [() => TargetResource, 0, () => ActionPayload, 0, () => ResolveTo]
);
export var ExecuteActionResponse = struct(n0, _EARx, 0, [_aI], [0]);
export var ListActionsRequest = struct(
  n0,
  _LAR,
  0,
  [_tRT, _tRI, _nT, _mR, _rTRT, _rTRI],
  [
    [
      0,
      {
        [_hQ]: _tRT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tRI,
      },
    ],
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
    [
      0,
      {
        [_hQ]: _rTRT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTRI,
      },
    ],
  ]
);
export var ListActionsResponse = struct(n0, _LARi, 0, [_aSc, _nT], [() => ActionSummaries, 0]);
export var ListComputationModelResolveToResourcesRequest = struct(
  n0,
  _LCMRTRR,
  0,
  [_cMIo, _nT, _mR],
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListComputationModelResolveToResourcesResponse = struct(
  n0,
  _LCMRTRRi,
  0,
  [_cMRTRS, _nT],
  [() => ComputationModelResolveToResourceSummaries, 0]
);
export var ResolveTo = struct(n0, _RT, 0, [_aIs], [0]);
export var TargetResource = struct(n0, _TR, 0, [_aIs, _cMIo], [0, 0]);
export var ActionSummaries = list(n0, _ASc, 0, () => ActionSummary);
export var ComputationModelResolveToResourceSummaries = list(
  n0,
  _CMRTRSo,
  0,
  () => ComputationModelResolveToResourceSummary
);
export var ComputationModelExecutionSummary = 128 | 0;

export var DescribeAction = op(
  n0,
  _DAe,
  {
    [_ht]: ["GET", "/actions/{actionId}", 200],
    [_end]: ["api."],
  },
  () => DescribeActionRequest,
  () => DescribeActionResponse
);
export var DescribeComputationModelExecutionSummary = op(
  n0,
  _DCMES,
  {
    [_ht]: ["GET", "/computation-models/{computationModelId}/execution-summary", 200],
    [_end]: ["api."],
  },
  () => DescribeComputationModelExecutionSummaryRequest,
  () => DescribeComputationModelExecutionSummaryResponse
);
export var ExecuteAction = op(
  n0,
  _EA,
  {
    [_ht]: ["POST", "/actions", 202],
    [_end]: ["api."],
  },
  () => ExecuteActionRequest,
  () => ExecuteActionResponse
);
export var ListActions = op(
  n0,
  _LA,
  {
    [_ht]: ["GET", "/actions", 200],
    [_end]: ["api."],
  },
  () => ListActionsRequest,
  () => ListActionsResponse
);
export var ListComputationModelResolveToResources = op(
  n0,
  _LCMRTR,
  {
    [_ht]: ["GET", "/computation-models/{computationModelId}/resolve-to-resources", 200],
    [_end]: ["api."],
  },
  () => ListComputationModelResolveToResourcesRequest,
  () => ListComputationModelResolveToResourcesResponse
);
