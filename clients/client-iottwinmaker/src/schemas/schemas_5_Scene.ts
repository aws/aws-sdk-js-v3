// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ca,
  _cDT,
  _cL,
  _cod,
  _d,
  _e,
  _end,
  _GS,
  _gSM,
  _GSR,
  _GSRe,
  _h,
  _LS,
  _LSR,
  _LSRi,
  _m,
  _mR,
  _nTe,
  _SE,
  _sI,
  _sM,
  _SS,
  _SSc,
  _sSc,
  _uDT,
  _US,
  _USR,
  _USRp,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSceneRequest = struct(
  n0,
  _GSR,
  0,
  [_wI, _sI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSceneResponse = struct(
  n0,
  _GSRe,
  0,
  [_wI, _sI, _cL, _a, _cDT, _uDT, _d, _ca, _sM, _gSM, _e],
  [0, 0, 0, 0, 4, 4, 0, 64 | 0, 128 | 0, 128 | 0, () => SceneError]
);
export var ListScenesRequest = struct(n0, _LSR, 0, [_wI, _mR, _nTe], [[0, 1], 1, 0]);
export var ListScenesResponse = struct(n0, _LSRi, 0, [_sSc, _nTe], [() => SceneSummaries, 0]);
export var SceneError = struct(n0, _SE, 0, [_cod, _m], [0, 0]);
export var SceneSummary = struct(n0, _SS, 0, [_sI, _cL, _a, _cDT, _uDT, _d], [0, 0, 0, 4, 4, 0]);
export var UpdateSceneRequest = struct(
  n0,
  _USR,
  0,
  [_wI, _sI, _cL, _d, _ca, _sM],
  [[0, 1], [0, 1], 0, 0, 64 | 0, 128 | 0]
);
export var UpdateSceneResponse = struct(n0, _USRp, 0, [_uDT], [4]);
export var SceneCapabilities = 64 | 0;

export var SceneSummaries = list(n0, _SSc, 0, () => SceneSummary);
export var GeneratedSceneMetadataMap = 128 | 0;

export var SceneMetadataMap = 128 | 0;

export var GetScene = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/scenes/{sceneId}", 200],
    [_end]: ["api."],
  },
  () => GetSceneRequest,
  () => GetSceneResponse
);
export var ListScenes = op(
  n0,
  _LS,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/scenes-list", 200],
    [_end]: ["api."],
  },
  () => ListScenesRequest,
  () => ListScenesResponse
);
export var UpdateScene = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/scenes/{sceneId}", 200],
    [_end]: ["api."],
  },
  () => UpdateSceneRequest,
  () => UpdateSceneResponse
);
