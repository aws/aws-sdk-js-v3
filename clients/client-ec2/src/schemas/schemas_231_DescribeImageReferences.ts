// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _DIRescribem,
  _DIRR,
  _DIRRe,
  _DR,
  _eQN,
  _IART,
  _IIm,
  _IIma,
  _iIma,
  _IR,
  _IRL,
  _IRm,
  _iRS,
  _it,
  _MR,
  _NTe,
  _nTe,
  _ON,
  _OV,
  _OVp,
  _RTe,
  _rTe,
  _RTes,
  _RTO,
  _RTOe,
  _RTOL,
  _RTRe,
  _RTRL,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeImageReferencesRequest = struct(
  n0,
  _DIRR,
  0,
  [_IIma, _IART, _RTes, _NTe, _DR, _MR],
  [
    [
      64 | 0,
      {
        [_xN]: _IIm,
      },
    ],
    2,
    [
      () => ResourceTypeRequestList,
      {
        [_xN]: _RTe,
      },
    ],
    0,
    2,
    1,
  ]
);
export var DescribeImageReferencesResult = struct(
  n0,
  _DIRRe,
  0,
  [_NTe, _IR],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ImageReferenceList,
      {
        [_eQN]: `ImageReferenceSet`,
        [_xN]: _iRS,
      },
    ],
  ]
);
export var ImageReference = struct(
  n0,
  _IRm,
  0,
  [_IIm, _RTe, _Ar],
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
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `Arn`,
        [_xN]: _ar,
      },
    ],
  ]
);
export var ResourceTypeOption = struct(
  n0,
  _RTOe,
  0,
  [_ON, _OV],
  [
    0,
    [
      64 | 0,
      {
        [_xN]: _OVp,
      },
    ],
  ]
);
export var ResourceTypeRequest = struct(
  n0,
  _RTRe,
  0,
  [_RTe, _RTO],
  [
    0,
    [
      () => ResourceTypeOptionList,
      {
        [_xN]: _RTOe,
      },
    ],
  ]
);
export var DescribeImageReferencesImageIdStringList = 64 | 0;

export var ImageReferenceList = list(n0, _IRL, 0, [
  () => ImageReference,
  {
    [_xN]: _it,
  },
]);
export var ResourceTypeOptionList = list(n0, _RTOL, 0, [() => ResourceTypeOption, 0]);
export var ResourceTypeOptionValuesList = 64 | 0;

export var ResourceTypeRequestList = list(n0, _RTRL, 0, [() => ResourceTypeRequest, 0]);
export var DescribeImageReferences = op(
  n0,
  _DIRescribem,
  0,
  () => DescribeImageReferencesRequest,
  () => DescribeImageReferencesResult
);
