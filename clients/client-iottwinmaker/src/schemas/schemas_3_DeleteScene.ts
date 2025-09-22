// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSR, _DSRe, _end, _h, _sI, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSceneRequest = struct(
  n0,
  _DSR,
  0,
  [_wI, _sI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSceneResponse = struct(n0, _DSRe, 0, [], []);
export var DeleteScene = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/scenes/{sceneId}", 200],
    [_end]: ["api."],
  },
  () => DeleteSceneRequest,
  () => DeleteSceneResponse
);
