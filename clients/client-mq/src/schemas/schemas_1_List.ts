// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _BIr, _hQ, _ht, _jN, _LU, _LUR, _LURi, _MR, _mR, _NT, _nT, _U, _u, n0 } from "./schemas_0";
import { __listOfUserSummary } from "./schemas_7_Describe";

/* eslint no-var: 0 */

export var ListUsersRequest = struct(
  n0,
  _LUR,
  0,
  [_BIr, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListUsersResponse = struct(
  n0,
  _LURi,
  0,
  [_BIr, _MR, _NT, _U],
  [
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfUserSummary,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var ListUsers = op(
  n0,
  _LU,
  {
    [_ht]: ["GET", "/v1/brokers/{BrokerId}/users", 200],
  },
  () => ListUsersRequest,
  () => ListUsersResponse
);
