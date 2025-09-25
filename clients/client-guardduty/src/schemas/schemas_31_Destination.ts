// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DA,
  _dA,
  _DI,
  _dI,
  _DIe,
  _dIe,
  _DP,
  _dP,
  _hL,
  _ht,
  _jN,
  _KKA,
  _kKA,
  _UPD,
  _UPDR,
  _UPDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DestinationProperties = struct(
  n0,
  _DP,
  0,
  [_DA, _KKA],
  [
    [
      0,
      {
        [_jN]: _dA,
      },
    ],
    [
      0,
      {
        [_jN]: _kKA,
      },
    ],
  ]
);
export var UpdatePublishingDestinationRequest = struct(
  n0,
  _UPDR,
  0,
  [_DI, _DIe, _DP],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _dIe,
        [_hL]: 1,
      },
    ],
    [
      () => DestinationProperties,
      {
        [_jN]: _dP,
      },
    ],
  ]
);
export var UpdatePublishingDestinationResponse = struct(n0, _UPDRp, 0, [], []);
export var UpdatePublishingDestination = op(
  n0,
  _UPD,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/publishingDestination/{DestinationId}", 200],
  },
  () => UpdatePublishingDestinationRequest,
  () => UpdatePublishingDestinationResponse
);
