// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _h, _hQ, _i, _jN, _lOSDI, _rAe, _sDI, _SDIu, _ty, _URPD, _URPDR, _URPDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SuppressDataIdentifier = struct(
  n0,
  _SDIu,
  0,
  [_i, _ty],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var UpdateResourceProfileDetectionsRequest = struct(
  n0,
  _URPDR,
  0,
  [_rAe, _sDI],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
    [
      () => __listOfSuppressDataIdentifier,
      {
        [_jN]: _sDI,
      },
    ],
  ]
);
export var UpdateResourceProfileDetectionsResponse = struct(n0, _URPDRp, 0, [], []);
export var __listOfSuppressDataIdentifier = list(n0, _lOSDI, 0, [() => SuppressDataIdentifier, 0]);
export var UpdateResourceProfileDetections = op(
  n0,
  _URPD,
  {
    [_h]: ["PATCH", "/resource-profiles/detections", 200],
  },
  () => UpdateResourceProfileDetectionsRequest,
  () => UpdateResourceProfileDetectionsResponse
);
