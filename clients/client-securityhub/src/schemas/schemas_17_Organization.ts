// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAdm,
  _AAId,
  _AIc,
  _DOAA,
  _DOAAR,
  _DOAARi,
  _EOAA,
  _EOAAR,
  _EOAARn,
  _Fea,
  _h,
  _hQ,
  _LOAA,
  _LOAAR,
  _LOAARi,
  _MRa,
  _NTe,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdminAccount = struct(n0, _AA, 0, [_AIc, _St], [0, 0]);
export var DisableOrganizationAdminAccountRequest = struct(n0, _DOAAR, 0, [_AAId, _Fea], [0, 0]);
export var DisableOrganizationAdminAccountResponse = struct(n0, _DOAARi, 0, [], []);
export var EnableOrganizationAdminAccountRequest = struct(n0, _EOAAR, 0, [_AAId, _Fea], [0, 0]);
export var EnableOrganizationAdminAccountResponse = struct(n0, _EOAARn, 0, [_AAId, _Fea], [0, 0]);
export var ListOrganizationAdminAccountsRequest = struct(
  n0,
  _LOAAR,
  0,
  [_MRa, _NTe, _Fea],
  [
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      0,
      {
        [_hQ]: _Fea,
      },
    ],
  ]
);
export var ListOrganizationAdminAccountsResponse = struct(
  n0,
  _LOAARi,
  0,
  [_AAdm, _NTe, _Fea],
  [() => AdminAccounts, 0, 0]
);
export var AdminAccounts = list(n0, _AAdm, 0, () => AdminAccount);
export var DisableOrganizationAdminAccount = op(
  n0,
  _DOAA,
  {
    [_h]: ["POST", "/organization/admin/disable", 200],
  },
  () => DisableOrganizationAdminAccountRequest,
  () => DisableOrganizationAdminAccountResponse
);
export var EnableOrganizationAdminAccount = op(
  n0,
  _EOAA,
  {
    [_h]: ["POST", "/organization/admin/enable", 200],
  },
  () => EnableOrganizationAdminAccountRequest,
  () => EnableOrganizationAdminAccountResponse
);
export var ListOrganizationAdminAccounts = op(
  n0,
  _LOAA,
  {
    [_h]: ["GET", "/organization/admin", 200],
  },
  () => ListOrganizationAdminAccountsRequest,
  () => ListOrganizationAdminAccountsResponse
);
