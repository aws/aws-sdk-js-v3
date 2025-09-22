// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAL, _DALR, _DALRe, _h, _hQ, _i, _iJC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAllowListRequest = struct(
  n0,
  _DALR,
  0,
  [_i, _iJC],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _iJC,
      },
    ],
  ]
);
export var DeleteAllowListResponse = struct(n0, _DALRe, 0, [], []);
export var DeleteAllowList = op(
  n0,
  _DAL,
  {
    [_h]: ["DELETE", "/allow-lists/{id}", 200],
  },
  () => DeleteAllowListRequest,
  () => DeleteAllowListResponse
);
