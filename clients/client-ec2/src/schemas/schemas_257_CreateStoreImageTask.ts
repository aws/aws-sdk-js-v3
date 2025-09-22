// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Bu,
  _CSIT,
  _CSITR,
  _CSITRr,
  _DR,
  _eQN,
  _IIm,
  _it,
  _K,
  _OK,
  _oK,
  _SOT,
  _SOTb,
  _SOTL,
  _V,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateStoreImageTaskRequest = struct(
  n0,
  _CSITR,
  0,
  [_IIm, _Bu, _SOT, _DR],
  [
    0,
    0,
    [
      () => S3ObjectTagList,
      {
        [_xN]: _SOTb,
      },
    ],
    2,
  ]
);
export var CreateStoreImageTaskResult = struct(
  n0,
  _CSITRr,
  0,
  [_OK],
  [
    [
      0,
      {
        [_eQN]: `ObjectKey`,
        [_xN]: _oK,
      },
    ],
  ]
);
export var S3ObjectTag = struct(n0, _SOTb, 0, [_K, _V], [0, 0]);
export var S3ObjectTagList = list(n0, _SOTL, 0, [
  () => S3ObjectTag,
  {
    [_xN]: _it,
  },
]);
export var CreateStoreImageTask = op(
  n0,
  _CSIT,
  0,
  () => CreateStoreImageTaskRequest,
  () => CreateStoreImageTaskResult
);
