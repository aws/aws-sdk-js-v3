// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CILP, _CILPR, _CILPRa, _DR, _eQN, _IIm, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelImageLaunchPermissionRequest = struct(n0, _CILPR, 0, [_IIm, _DR], [0, 2]);
export var CancelImageLaunchPermissionResult = struct(
  n0,
  _CILPRa,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var CancelImageLaunchPermission = op(
  n0,
  _CILP,
  0,
  () => CancelImageLaunchPermissionRequest,
  () => CancelImageLaunchPermissionResult
);
