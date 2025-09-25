// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AAAWPA,
  _AAAWPAR,
  _AAAWPARs,
  _AIm,
  _AL,
  _Ar,
  _ASPKp,
  _CRT,
  _F,
  _GPA,
  _GPAR,
  _GPARe,
  _h,
  _hQ,
  _LPA,
  _LPAR,
  _LPARi,
  _MR,
  _mR,
  _NT,
  _nT,
  _PAI,
  _PT,
  _pT,
  _S,
  _SAI,
  _SAIWF,
  _SAL,
  _Ta,
  n0,
  TagList,
} from "./schemas_0";
import { AppServerPrivateKey } from "./schemas_55_Account";

/* eslint no-var: 0 */

export var Fingerprint = sim(n0, _F, 0, 8);
export var AssociateAwsAccountWithPartnerAccountRequest = struct(
  n0,
  _AAAWPAR,
  0,
  [_S, _CRT, _Ta],
  [[() => SidewalkAccountInfo, 0], [0, 4], () => TagList]
);
export var AssociateAwsAccountWithPartnerAccountResponse = struct(
  n0,
  _AAAWPARs,
  0,
  [_S, _Ar],
  [[() => SidewalkAccountInfo, 0], 0]
);
export var GetPartnerAccountRequest = struct(
  n0,
  _GPAR,
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
export var GetPartnerAccountResponse = struct(
  n0,
  _GPARe,
  0,
  [_S, _AL],
  [[() => SidewalkAccountInfoWithFingerprint, 0], 2]
);
export var ListPartnerAccountsRequest = struct(
  n0,
  _LPAR,
  0,
  [_NT, _MR],
  [
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
export var ListPartnerAccountsResponse = struct(n0, _LPARi, 0, [_NT, _S], [0, [() => SidewalkAccountList, 0]]);
export var SidewalkAccountInfo = struct(n0, _SAI, 0, [_AIm, _ASPKp], [0, [() => AppServerPrivateKey, 0]]);
export var SidewalkAccountInfoWithFingerprint = struct(n0, _SAIWF, 0, [_AIm, _F, _Ar], [0, [() => Fingerprint, 0], 0]);
export var SidewalkAccountList = list(n0, _SAL, 0, [() => SidewalkAccountInfoWithFingerprint, 0]);
export var AssociateAwsAccountWithPartnerAccount = op(
  n0,
  _AAAWPA,
  {
    [_h]: ["POST", "/partner-accounts", 200],
  },
  () => AssociateAwsAccountWithPartnerAccountRequest,
  () => AssociateAwsAccountWithPartnerAccountResponse
);
export var GetPartnerAccount = op(
  n0,
  _GPA,
  {
    [_h]: ["GET", "/partner-accounts/{PartnerAccountId}", 200],
  },
  () => GetPartnerAccountRequest,
  () => GetPartnerAccountResponse
);
export var ListPartnerAccounts = op(
  n0,
  _LPA,
  {
    [_h]: ["GET", "/partner-accounts", 200],
  },
  () => ListPartnerAccountsRequest,
  () => ListPartnerAccountsResponse
);
