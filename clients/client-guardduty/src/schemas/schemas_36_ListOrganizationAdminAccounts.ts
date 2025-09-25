// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _aA,
  _AAd,
  _AAI,
  _aAI,
  _aSd,
  _ASdm,
  _hQ,
  _ht,
  _jN,
  _LOAA,
  _LOAAR,
  _LOAARi,
  _MR,
  _mR,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdminAccount = struct(
  n0,
  _AA,
  0,
  [_AAI, _ASdm],
  [
    [
      0,
      {
        [_jN]: _aAI,
      },
    ],
    [
      0,
      {
        [_jN]: _aSd,
      },
    ],
  ]
);
export var ListOrganizationAdminAccountsRequest = struct(
  n0,
  _LOAAR,
  0,
  [_MR, _NT],
  [
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
export var ListOrganizationAdminAccountsResponse = struct(
  n0,
  _LOAARi,
  0,
  [_AAd, _NT],
  [
    [
      () => AdminAccounts,
      {
        [_jN]: _aA,
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
export var AdminAccounts = list(n0, _AAd, 0, [() => AdminAccount, 0]);
export var ListOrganizationAdminAccounts = op(
  n0,
  _LOAA,
  {
    [_ht]: ["GET", "/admin", 200],
  },
  () => ListOrganizationAdminAccountsRequest,
  () => ListOrganizationAdminAccountsResponse
);
