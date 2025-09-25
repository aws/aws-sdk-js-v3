// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Bu,
  _CRIT,
  _CRITR,
  _CRITRr,
  _DR,
  _eQN,
  _IIm,
  _iIma,
  _N,
  _OK,
  _TS,
  _TSa,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRestoreImageTaskRequest = struct(
  n0,
  _CRITR,
  0,
  [_Bu, _OK, _N, _TS, _DR],
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
    2,
  ]
);
export var CreateRestoreImageTaskResult = struct(
  n0,
  _CRITRr,
  0,
  [_IIm],
  [
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
  ]
);
export var CreateRestoreImageTask = op(
  n0,
  _CRIT,
  0,
  () => CreateRestoreImageTaskRequest,
  () => CreateRestoreImageTaskResult
);
