// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _Acc,
  _acc,
  _Bo,
  _bo,
  _CL,
  _CL_,
  _CT_,
  _CTo,
  _DIDT,
  _DIDTR,
  _DIDTRe,
  _ETa,
  _hH,
  _hP,
  _ht,
  _IDI,
  _IDT,
  _jN,
  _LM,
  _LM_,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InputDeviceThumbnail = sim(n0, _IDT, 42, {
  [_s]: 1,
});
export var DescribeInputDeviceThumbnailRequest = struct(
  n0,
  _DIDTR,
  0,
  [_IDI, _Acc],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _acc,
      },
    ],
  ]
);
export var DescribeInputDeviceThumbnailResponse = struct(
  n0,
  _DIDTRe,
  0,
  [_Bo, _CTo, _CL, _ETa, _LM],
  [
    [
      () => InputDeviceThumbnail,
      {
        [_jN]: _bo,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      1,
      {
        [_hH]: _CL_,
      },
    ],
    [
      0,
      {
        [_hH]: _ETa,
      },
    ],
    [
      4,
      {
        [_hH]: _LM_,
      },
    ],
  ]
);
export var DescribeInputDeviceThumbnail = op(
  n0,
  _DIDT,
  {
    [_ht]: ["GET", "/prod/inputDevices/{InputDeviceId}/thumbnailData", 200],
  },
  () => DescribeInputDeviceThumbnailRequest,
  () => DescribeInputDeviceThumbnailResponse
);
