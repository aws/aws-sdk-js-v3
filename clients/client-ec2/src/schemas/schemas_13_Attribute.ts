// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _CVP, _CVPL, _eQN, _g, _Gr, _it, _PCr, _PCSL, _UGs, _UGSL, _UI, _uI, _UISL, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVolumePermission = struct(
  n0,
  _CVP,
  0,
  [_UI, _Gr],
  [
    [
      0,
      {
        [_eQN]: `UserId`,
        [_xN]: _uI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Group`,
        [_xN]: _g,
      },
    ],
  ]
);
export var CreateVolumePermissionList = list(n0, _CVPL, 0, [
  () => CreateVolumePermission,
  {
    [_xN]: _it,
  },
]);
export var ProductCodeStringList = list(n0, _PCSL, 0, [
  0,
  {
    [_xN]: _PCr,
  },
]);
export var UserGroupStringList = list(n0, _UGSL, 0, [
  0,
  {
    [_xN]: _UGs,
  },
]);
export var UserIdStringList = list(n0, _UISL, 0, [
  0,
  {
    [_xN]: _UI,
  },
]);
