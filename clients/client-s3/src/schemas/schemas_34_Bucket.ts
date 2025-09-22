// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _GBOC,
  _GBOCO,
  _GBOCR,
  _h,
  _hH,
  _hP,
  _OC,
  _OCR,
  _OCRw,
  _OO,
  _PBOC,
  _PBOCR,
  _R,
  _Ru,
  _xaebo,
  _xasca,
  _xF,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketOwnershipControlsOutput = struct(n0, _GBOCO, 0, [_OC], [[() => OwnershipControls, 16]]);
export var GetBucketOwnershipControlsRequest = struct(
  n0,
  _GBOCR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var OwnershipControls = struct(
  n0,
  _OC,
  0,
  [_R],
  [
    [
      () => OwnershipControlsRules,
      {
        [_xN]: _Ru,
        [_xF]: 1,
      },
    ],
  ]
);
export var OwnershipControlsRule = struct(n0, _OCR, 0, [_OO], [0]);
export var PutBucketOwnershipControlsRequest = struct(
  n0,
  _PBOCR,
  0,
  [_B, _CMD, _EBO, _OC, _CA],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      () => OwnershipControls,
      {
        [_xN]: _OC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
  ]
);
export var OwnershipControlsRules = list(n0, _OCRw, 0, () => OwnershipControlsRule);
export var GetBucketOwnershipControls = op(
  n0,
  _GBOC,
  {
    [_h]: ["GET", "/?ownershipControls", 200],
  },
  () => GetBucketOwnershipControlsRequest,
  () => GetBucketOwnershipControlsOutput
);
export var PutBucketOwnershipControls = op(
  n0,
  _PBOC,
  {
    [_h]: ["PUT", "/?ownershipControls", 200],
  },
  () => PutBucketOwnershipControlsRequest,
  () => Unit
);
