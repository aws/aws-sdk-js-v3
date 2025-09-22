// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aR,
  _en,
  _GQASM,
  _GQASMI,
  _GQASMO,
  _h,
  _hH,
  _hQ,
  _iI,
  _ii,
  _rCev,
  _sA,
  _sC,
  _sI,
  _sN,
  _sO,
  _SSC,
  _UQASM,
  _UQASMI,
  _UQASMO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetQAppSessionMetadataInput = struct(
  n0,
  _GQASMI,
  0,
  [_iI, _sI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
  ]
);
export var GetQAppSessionMetadataOutput = struct(
  n0,
  _GQASMO,
  0,
  [_sI, _sA, _sN, _sC, _sO],
  [0, 0, 0, () => SessionSharingConfiguration, 2]
);
export var SessionSharingConfiguration = struct(n0, _SSC, 0, [_en, _aR, _rCev], [2, 2, 2]);
export var UpdateQAppSessionMetadataInput = struct(
  n0,
  _UQASMI,
  0,
  [_iI, _sI, _sN, _sC],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    0,
    () => SessionSharingConfiguration,
  ]
);
export var UpdateQAppSessionMetadataOutput = struct(
  n0,
  _UQASMO,
  0,
  [_sI, _sA, _sN, _sC],
  [0, 0, 0, () => SessionSharingConfiguration]
);
export var GetQAppSessionMetadata = op(
  n0,
  _GQASM,
  {
    [_h]: ["GET", "/runtime.getQAppSessionMetadata", 200],
  },
  () => GetQAppSessionMetadataInput,
  () => GetQAppSessionMetadataOutput
);
export var UpdateQAppSessionMetadata = op(
  n0,
  _UQASM,
  {
    [_h]: ["POST", "/runtime.updateQAppSessionMetadata", 200],
  },
  () => UpdateQAppSessionMetadataInput,
  () => UpdateQAppSessionMetadataOutput
);
