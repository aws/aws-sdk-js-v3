// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _dI, _DIe, _dIe, _DPD, _DPDR, _DPDRe, _hL, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePublishingDestinationRequest = struct(
  n0,
  _DPDR,
  0,
  [_DI, _DIe],
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
  ]
);
export var DeletePublishingDestinationResponse = struct(n0, _DPDRe, 0, [], []);
export var DeletePublishingDestination = op(
  n0,
  _DPD,
  {
    [_ht]: ["DELETE", "/detector/{DetectorId}/publishingDestination/{DestinationId}", 200],
  },
  () => DeletePublishingDestinationRequest,
  () => DeletePublishingDestinationResponse
);
