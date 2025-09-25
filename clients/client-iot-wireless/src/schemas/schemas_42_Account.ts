// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ASPKp,
  _DAAFPA,
  _DAAFPAR,
  _DAAFPARi,
  _h,
  _hQ,
  _PAI,
  _PT,
  _pT,
  _S,
  _SUA,
  _UPA,
  _UPAR,
  _UPARp,
  n0,
} from "./schemas_0";
import { AppServerPrivateKey } from "./schemas_55_Account";

/* eslint no-var: 0 */

export var DisassociateAwsAccountFromPartnerAccountRequest = struct(
  n0,
  _DAAFPAR,
  0,
  [_PAI, _PT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
  ]
);
export var DisassociateAwsAccountFromPartnerAccountResponse = struct(n0, _DAAFPARi, 0, [], []);
export var SidewalkUpdateAccount = struct(n0, _SUA, 0, [_ASPKp], [[() => AppServerPrivateKey, 0]]);
export var UpdatePartnerAccountRequest = struct(
  n0,
  _UPAR,
  0,
  [_S, _PAI, _PT],
  [
    [() => SidewalkUpdateAccount, 0],
    [0, 1],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
  ]
);
export var UpdatePartnerAccountResponse = struct(n0, _UPARp, 0, [], []);
export var DisassociateAwsAccountFromPartnerAccount = op(
  n0,
  _DAAFPA,
  {
    [_h]: ["DELETE", "/partner-accounts/{PartnerAccountId}", 204],
  },
  () => DisassociateAwsAccountFromPartnerAccountRequest,
  () => DisassociateAwsAccountFromPartnerAccountResponse
);
export var UpdatePartnerAccount = op(
  n0,
  _UPA,
  {
    [_h]: ["PATCH", "/partner-accounts/{PartnerAccountId}", 204],
  },
  () => UpdatePartnerAccountRequest,
  () => UpdatePartnerAccountResponse
);
