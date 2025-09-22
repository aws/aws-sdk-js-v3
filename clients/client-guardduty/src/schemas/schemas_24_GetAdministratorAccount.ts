// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _ad,
  _AIc,
  _aIc,
  _DI,
  _dI,
  _GAA,
  _GAAR,
  _GAARe,
  _hL,
  _ht,
  _IA,
  _iA,
  _II,
  _iI,
  _jN,
  _RS,
  _rS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Administrator = struct(
  n0,
  _Ad,
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
export var GetAdministratorAccountRequest = struct(
  n0,
  _GAAR,
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
export var GetAdministratorAccountResponse = struct(
  n0,
  _GAARe,
  0,
  [_Ad],
  [
    [
      () => Administrator,
      {
        [_jN]: _ad,
      },
    ],
  ]
);
export var GetAdministratorAccount = op(
  n0,
  _GAA,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/administrator", 200],
  },
  () => GetAdministratorAccountRequest,
  () => GetAdministratorAccountResponse
);
