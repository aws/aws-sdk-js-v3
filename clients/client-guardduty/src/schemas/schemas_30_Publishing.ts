// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _De,
  _de,
  _Des,
  _DI,
  _dI,
  _DIe,
  _dIe,
  _DT,
  _dT,
  _hL,
  _hQ,
  _ht,
  _jN,
  _LPDi,
  _LPDR,
  _LPDRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _St,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Destination = struct(
  n0,
  _De,
  0,
  [_DIe, _DT, _St],
  [
    [
      0,
      {
        [_jN]: _dIe,
      },
    ],
    [
      0,
      {
        [_jN]: _dT,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var ListPublishingDestinationsRequest = struct(
  n0,
  _LPDR,
  0,
  [_DI, _MR, _NT],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListPublishingDestinationsResponse = struct(
  n0,
  _LPDRi,
  0,
  [_Des, _NT],
  [
    [
      () => Destinations,
      {
        [_jN]: _de,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Destinations = list(n0, _Des, 0, [() => Destination, 0]);
export var ListPublishingDestinations = op(
  n0,
  _LPDi,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/publishingDestination", 200],
  },
  () => ListPublishingDestinationsRequest,
  () => ListPublishingDestinationsResponse
);
