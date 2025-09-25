// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _CDVA,
  _CDVAo,
  _CG,
  _CGR,
  _CGRr,
  _CT,
  _DDVA,
  _Def,
  _FDVA,
  _GGV,
  _GGVR,
  _GGVRe,
  _GI,
  _GV,
  _GVI,
  _h,
  _hH,
  _I,
  _IV,
  _LDVA,
  _LUT,
  _LV,
  _LVA,
  _N,
  _RDVA,
  _SDVA,
  _t,
  _V,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGroupRequest = struct(
  n0,
  _CGR,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => GroupVersion,
    0,
    128 | 0,
  ]
);
export var CreateGroupResponse = struct(n0, _CGRr, 0, [_A, _CT, _I, _LUT, _LV, _LVA, _N], [0, 0, 0, 0, 0, 0, 0]);
export var GetGroupVersionRequest = struct(
  n0,
  _GGVR,
  0,
  [_GI, _GVI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGroupVersionResponse = struct(n0, _GGVRe, 0, [_A, _CT, _Def, _I, _V], [0, 0, () => GroupVersion, 0, 0]);
export var GroupVersion = struct(n0, _GV, 0, [_CDVA, _CDVAo, _DDVA, _FDVA, _LDVA, _RDVA, _SDVA], [0, 0, 0, 0, 0, 0, 0]);
export var CreateGroup = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/greengrass/groups", 200],
  },
  () => CreateGroupRequest,
  () => CreateGroupResponse
);
export var GetGroupVersion = op(
  n0,
  _GGV,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/versions/{GroupVersionId}", 200],
  },
  () => GetGroupVersionRequest,
  () => GetGroupVersionResponse
);
