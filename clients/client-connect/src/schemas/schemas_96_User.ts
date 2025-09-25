// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _h,
  _hQ,
  _I,
  _II,
  _LMR,
  _LMT,
  _LU,
  _LUR,
  _LURi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _U,
  _US,
  _USL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListUsersRequest = struct(
  n0,
  _LUR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
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
  ]
);
export var ListUsersResponse = struct(n0, _LURi, 0, [_USL, _NT], [() => UserSummaryList, 0]);
export var UserSummary = struct(n0, _US, 0, [_I, _A, _U, _LMT, _LMR], [0, 0, 0, 4, 0]);
export var UserSummaryList = list(n0, _USL, 0, () => UserSummary);
export var ListUsers = op(
  n0,
  _LU,
  {
    [_h]: ["GET", "/users-summary/{InstanceId}", 200],
  },
  () => ListUsersRequest,
  () => ListUsersResponse
);
