// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CIopy,
  _CIR,
  _CIRo,
  _CIT,
  _CT,
  _DAZ,
  _DAZI,
  _De,
  _DOA,
  _DR,
  _dR,
  _Enc,
  _enc,
  _eQN,
  _IIm,
  _iIma,
  _KKI,
  _kKI,
  _N,
  _SCCDM,
  _SII,
  _SRo,
  _TS,
  _TSa,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CopyImageRequest = struct(
  n0,
  _CIR,
  0,
  [_CT, _De, _Enc, _KKI, _N, _SII, _SRo, _DOA, _CIT, _TS, _SCCDM, _DAZ, _DAZI, _DR],
  [
    [0, 4],
    0,
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    [
      0,
      {
        [_eQN]: `KmsKeyId`,
        [_xN]: _kKI,
      },
    ],
    0,
    0,
    0,
    0,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    1,
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CopyImageResult = struct(
  n0,
  _CIRo,
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
export var CopyImage = op(
  n0,
  _CIopy,
  0,
  () => CopyImageRequest,
  () => CopyImageResult
);
