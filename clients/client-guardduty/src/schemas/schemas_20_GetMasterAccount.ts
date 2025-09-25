// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _aIc,
  _DI,
  _dI,
  _GMA,
  _GMAR,
  _GMARe,
  _hL,
  _ht,
  _IA,
  _iA,
  _II,
  _iI,
  _jN,
  _Ma,
  _ma,
  _RS,
  _rS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMasterAccountRequest = struct(
  n0,
  _GMAR,
  0,
  [_DI],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetMasterAccountResponse = struct(
  n0,
  _GMARe,
  0,
  [_Ma],
  [
    [
      () => Master,
      {
        [_jN]: _ma,
      },
    ],
  ]
);
export var Master = struct(
  n0,
  _Ma,
  0,
  [_AIc, _II, _RS, _IA],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      0,
      {
        [_jN]: _iI,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _iA,
      },
    ],
  ]
);
export var GetMasterAccount = op(
  n0,
  _GMA,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/master", 200],
  },
  () => GetMasterAccountRequest,
  () => GetMasterAccountResponse
);
