// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Bu,
  _CFIr,
  _CFIRr,
  _CFIRre,
  _CT,
  _De,
  _DR,
  _eQN,
  _FIGI,
  _fIGI,
  _FII,
  _fII,
  _ISL,
  _K,
  _LSL,
  _N,
  _SLt,
  _TS,
  _TSa,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFpgaImageRequest = struct(
  n0,
  _CFIRr,
  0,
  [_DR, _ISL, _LSL, _De, _N, _CT, _TS],
  [
    2,
    () => StorageLocation,
    () => StorageLocation,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateFpgaImageResult = struct(
  n0,
  _CFIRre,
  0,
  [_FII, _FIGI],
  [
    [
      0,
      {
        [_eQN]: `FpgaImageId`,
        [_xN]: _fII,
      },
    ],
    [
      0,
      {
        [_eQN]: `FpgaImageGlobalId`,
        [_xN]: _fIGI,
      },
    ],
  ]
);
export var StorageLocation = struct(n0, _SLt, 0, [_Bu, _K], [0, 0]);
export var CreateFpgaImage = op(
  n0,
  _CFIr,
  0,
  () => CreateFpgaImageRequest,
  () => CreateFpgaImageResult
);
