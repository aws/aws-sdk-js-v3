// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { OverLimit as __OverLimit } from "../models/index";
import { _A, _AN, _AP, _APR, _aQE, _AWSAI, _AWSAIc, _c, _e, _hE, _L, _m, _OL, _QU, _xF, _xN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Message";

/* eslint no-var: 0 */

export var AddPermissionRequest = struct(
  n0,
  _APR,
  0,
  [_QU, _L, _AWSAI, _A],
  [
    0,
    0,
    [
      64 | 0,
      {
        [_xN]: _AWSAIc,
        [_xF]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _AN,
        [_xF]: 1,
      },
    ],
  ]
);
export var OverLimit = error(
  n0,
  _OL,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`OverLimit`, 403],
  },
  [_m],
  [0],

  __OverLimit
);
export var ActionNameList = 64 | 0;

export var AWSAccountIdList = 64 | 0;

export var AddPermission = op(
  n0,
  _AP,
  0,
  () => AddPermissionRequest,
  () => Unit
);
