// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _d,
  _fI,
  _FS,
  _FSl,
  _fSl,
  _FVS,
  _fVS,
  _FVSl,
  _h,
  _hQ,
  _id,
  _LF,
  _LFR,
  _LFRi,
  _LFV,
  _LFVR,
  _LFVRi,
  _mR,
  _n,
  _nT,
  _PF,
  _PFR,
  _PFRr,
  _st,
  _uA,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FlowSummary = struct(n0, _FS, 0, [_n, _d, _id, _ar, _st, _cA, _uA, _v], [0, 0, 0, 0, 0, 5, 5, 0]);
export var FlowVersionSummary = struct(n0, _FVS, 0, [_id, _ar, _st, _cA, _v], [0, 0, 0, 5, 0]);
export var ListFlowsRequest = struct(
  n0,
  _LFR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListFlowsResponse = struct(n0, _LFRi, 0, [_fSl, _nT], [() => FlowSummaries, 0]);
export var ListFlowVersionsRequest = struct(
  n0,
  _LFVR,
  0,
  [_fI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListFlowVersionsResponse = struct(n0, _LFVRi, 0, [_fVS, _nT], [() => FlowVersionSummaries, 0]);
export var PrepareFlowRequest = struct(n0, _PFR, 0, [_fI], [[0, 1]]);
export var PrepareFlowResponse = struct(n0, _PFRr, 0, [_id, _st], [0, 0]);
export var FlowSummaries = list(n0, _FSl, 0, () => FlowSummary);
export var FlowVersionSummaries = list(n0, _FVSl, 0, () => FlowVersionSummary);
export var ListFlows = op(
  n0,
  _LF,
  {
    [_h]: ["GET", "/flows/", 200],
  },
  () => ListFlowsRequest,
  () => ListFlowsResponse
);
export var ListFlowVersions = op(
  n0,
  _LFV,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/versions", 200],
  },
  () => ListFlowVersionsRequest,
  () => ListFlowVersionsResponse
);
export var PrepareFlow = op(
  n0,
  _PF,
  {
    [_h]: ["POST", "/flows/{flowIdentifier}/", 202],
  },
  () => PrepareFlowRequest,
  () => PrepareFlowResponse
);
