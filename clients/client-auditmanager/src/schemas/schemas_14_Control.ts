// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cCI,
  _CM,
  _CML,
  _cML,
  _cSo,
  _cTo,
  _h,
  _hQ,
  _i,
  _LC,
  _LCR,
  _LCRi,
  _lUA,
  _mR,
  _n,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ControlMetadata = struct(n0, _CM, 0, [_a, _i, _n, _cSo, _cA, _lUA], [0, 0, 0, 0, 4, 4]);
export var ListControlsRequest = struct(
  n0,
  _LCR,
  0,
  [_cTo, _nT, _mR, _cCI],
  [
    [
      0,
      {
        [_hQ]: _cTo,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _cCI,
      },
    ],
  ]
);
export var ListControlsResponse = struct(n0, _LCRi, 0, [_cML, _nT], [() => ControlMetadataList, 0]);
export var ControlMetadataList = list(n0, _CML, 0, () => ControlMetadata);
export var ListControls = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/controls", 200],
  },
  () => ListControlsRequest,
  () => ListControlsResponse
);
