// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _a,
  _c,
  _ca,
  _cDT,
  _cL,
  _CSJ,
  _CSJR,
  _CSJRr,
  _CSR,
  _CSr,
  _CSRr,
  _CW,
  _CWR,
  _CWRr,
  _d,
  _e,
  _end,
  _h,
  _hE,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mR,
  _nTe,
  _r,
  _rARN,
  _sI,
  _sL,
  _sM,
  _sR,
  _sS,
  _st,
  _ta,
  _tK,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSceneRequest = struct(
  n0,
  _CSR,
  0,
  [_wI, _sI, _cL, _d, _ca, _ta, _sM],
  [[0, 1], 0, 0, 0, 64 | 0, 128 | 0, 128 | 0]
);
export var CreateSceneResponse = struct(n0, _CSRr, 0, [_a, _cDT], [0, 4]);
export var CreateSyncJobRequest = struct(n0, _CSJR, 0, [_wI, _sS, _sR, _ta], [[0, 1], [0, 1], 0, 128 | 0]);
export var CreateSyncJobResponse = struct(n0, _CSJRr, 0, [_a, _cDT, _st], [0, 4, 0]);
export var CreateWorkspaceRequest = struct(n0, _CWR, 0, [_wI, _d, _sL, _r, _ta], [[0, 1], 0, 0, 0, 128 | 0]);
export var CreateWorkspaceResponse = struct(n0, _CWRr, 0, [_a, _cDT], [0, 4]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN, _mR, _nTe], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta, _nTe], [128 | 0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _ta], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rARN, _tK],
  [
    [
      0,
      {
        [_hQ]: _rARN,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateScene = op(
  n0,
  _CSr,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/scenes", 200],
    [_end]: ["api."],
  },
  () => CreateSceneRequest,
  () => CreateSceneResponse
);
export var CreateSyncJob = op(
  n0,
  _CSJ,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/sync-jobs/{syncSource}", 200],
    [_end]: ["api."],
  },
  () => CreateSyncJobRequest,
  () => CreateSyncJobResponse
);
export var CreateWorkspace = op(
  n0,
  _CW,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}", 200],
    [_end]: ["api."],
  },
  () => CreateWorkspaceRequest,
  () => CreateWorkspaceResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/tags-list", 200],
    [_end]: ["api."],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags", 200],
    [_end]: ["api."],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags", 200],
    [_end]: ["api."],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
