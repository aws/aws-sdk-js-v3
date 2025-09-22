// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _CDVA,
  _CDVAo,
  _CGV,
  _CGVR,
  _CGVRr,
  _CT,
  _DDVA,
  _FDVA,
  _GI,
  _h,
  _hH,
  _I,
  _LDVA,
  _RDVA,
  _SDVA,
  _V,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGroupVersionRequest = struct(
  n0,
  _CGVR,
  0,
  [_ACT, _CDVA, _CDVAo, _DDVA, _FDVA, _GI, _LDVA, _RDVA, _SDVA],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    0,
    0,
    0,
    0,
    [0, 1],
    0,
    0,
    0,
  ]
);
export var CreateGroupVersionResponse = struct(n0, _CGVRr, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var CreateGroupVersion = op(
  n0,
  _CGV,
  {
    [_h]: ["POST", "/greengrass/groups/{GroupId}/versions", 200],
  },
  () => CreateGroupVersionRequest,
  () => CreateGroupVersionResponse
);
