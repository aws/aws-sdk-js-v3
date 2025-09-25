// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CMKE,
  _CT,
  _CVAG,
  _CVAGR,
  _CVAGRr,
  _De,
  _DR,
  _eQN,
  _KKA,
  _PDo,
  _SS,
  _TS,
  _TSa,
  _VAG,
  _vAG,
  _VAII,
  _VASSR,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";
import { VerifiedAccessGroup } from "./schemas_322_Verified";

/* eslint no-var: 0 */

export var CreateVerifiedAccessGroupRequest = struct(
  n0,
  _CVAGR,
  0,
  [_VAII, _De, _PDo, _TS, _CT, _DR, _SS],
  [
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    2,
    () => VerifiedAccessSseSpecificationRequest,
  ]
);
export var CreateVerifiedAccessGroupResult = struct(
  n0,
  _CVAGRr,
  0,
  [_VAG],
  [
    [
      () => VerifiedAccessGroup,
      {
        [_eQN]: `VerifiedAccessGroup`,
        [_xN]: _vAG,
      },
    ],
  ]
);
export var VerifiedAccessSseSpecificationRequest = struct(n0, _VASSR, 0, [_CMKE, _KKA], [2, 0]);
export var CreateVerifiedAccessGroup = op(
  n0,
  _CVAG,
  0,
  () => CreateVerifiedAccessGroupRequest,
  () => CreateVerifiedAccessGroupResult
);
