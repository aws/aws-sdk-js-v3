// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _De,
  _de,
  _DR,
  _eQN,
  _IIm,
  _IIma,
  _iIma,
  _IISL,
  _Im,
  _IRBI,
  _IRBIL,
  _iSmag,
  _it,
  _LIIRB,
  _LIIRBR,
  _LIIRBRi,
  _MR,
  _N,
  _n,
  _NTe,
  _nTe,
  _RBET,
  _rBET,
  _RBETe,
  _rBETe,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ImageRecycleBinInfo = struct(
  n0,
  _IRBI,
  0,
  [_IIm, _N, _De, _RBET, _RBETe],
  [
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      4,
      {
        [_eQN]: `RecycleBinEnterTime`,
        [_xN]: _rBET,
      },
    ],
    [
      4,
      {
        [_eQN]: `RecycleBinExitTime`,
        [_xN]: _rBETe,
      },
    ],
  ]
);
export var ListImagesInRecycleBinRequest = struct(
  n0,
  _LIIRBR,
  0,
  [_IIma, _NTe, _MR, _DR],
  [
    [
      () => ImageIdStringList,
      {
        [_xN]: _IIm,
      },
    ],
    0,
    1,
    2,
  ]
);
export var ListImagesInRecycleBinResult = struct(
  n0,
  _LIIRBRi,
  0,
  [_Im, _NTe],
  [
    [
      () => ImageRecycleBinInfoList,
      {
        [_eQN]: `ImageSet`,
        [_xN]: _iSmag,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var ImageIdStringList = list(n0, _IISL, 0, [
  0,
  {
    [_xN]: _IIm,
  },
]);
export var ImageRecycleBinInfoList = list(n0, _IRBIL, 0, [
  () => ImageRecycleBinInfo,
  {
    [_xN]: _it,
  },
]);
export var ListImagesInRecycleBin = op(
  n0,
  _LIIRB,
  0,
  () => ListImagesInRecycleBinRequest,
  () => ListImagesInRecycleBinResult
);
