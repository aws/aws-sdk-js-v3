// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAI,
  _AAN,
  _aAN,
  _acc,
  _AI,
  _AIL,
  _ASc,
  _aSc,
  _cA,
  _CAPH,
  _cAPH,
  _CAPI,
  _CAPO,
  _CAPr,
  _cB,
  _de,
  _dI,
  _dIo,
  _dUI,
  _GAP,
  _GAPI,
  _GAPO,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _LAIAP,
  _LAIAPI,
  _LAIAPO,
  _lERA,
  _lFA,
  _lUA,
  _mRa,
  _n,
  _nT,
  _rS,
  _sR,
  _UAP,
  _UAPI,
  _UAPO,
  _uB,
  Description,
  n0,
} from "./schemas_0";
import { AccountPoolName } from "./schemas_45_Account";

/* eslint no-var: 0 */

export var AwsAccountName = sim(n0, _AAN, 0, 8);
export var AccountInfo = struct(n0, _AI, 0, [_aAI, _sR, _aAN], [0, 64 | 0, [() => AwsAccountName, 0]]);
export var CreateAccountPoolInput = struct(
  n0,
  _CAPI,
  0,
  [_dI, _n, _de, _rS, _aSc],
  [[0, 1], [() => AccountPoolName, 0], [() => Description, 0], 0, [() => AccountSource, 0]]
);
export var CreateAccountPoolOutput = struct(
  n0,
  _CAPO,
  0,
  [_dIo, _n, _id, _de, _rS, _aSc, _cB, _cA, _lUA, _uB, _dUI],
  [0, [() => AccountPoolName, 0], 0, [() => Description, 0], 0, [() => AccountSource, 0], 0, 5, 5, 0, 0]
);
export var CustomAccountPoolHandler = struct(n0, _CAPH, 0, [_lFA, _lERA], [0, 0]);
export var GetAccountPoolInput = struct(
  n0,
  _GAPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAccountPoolOutput = struct(
  n0,
  _GAPO,
  0,
  [_dIo, _n, _id, _de, _rS, _aSc, _cB, _cA, _lUA, _uB, _dUI],
  [0, [() => AccountPoolName, 0], 0, [() => Description, 0], 0, [() => AccountSource, 0], 0, 5, 5, 0, 0]
);
export var ListAccountsInAccountPoolInput = struct(
  n0,
  _LAIAPI,
  0,
  [_dI, _i, _nT, _mRa],
  [
    [0, 1],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListAccountsInAccountPoolOutput = struct(n0, _LAIAPO, 0, [_it, _nT], [[() => AccountInfoList, 0], 0]);
export var UpdateAccountPoolInput = struct(
  n0,
  _UAPI,
  0,
  [_dI, _i, _n, _de, _rS, _aSc],
  [[0, 1], [0, 1], [() => AccountPoolName, 0], [() => Description, 0], 0, [() => AccountSource, 0]]
);
export var UpdateAccountPoolOutput = struct(
  n0,
  _UAPO,
  0,
  [_dIo, _n, _id, _de, _rS, _aSc, _cB, _cA, _lUA, _uB, _dUI],
  [0, [() => AccountPoolName, 0], 0, [() => Description, 0], 0, [() => AccountSource, 0], 0, 5, 5, 0, 0]
);
export var AccountInfoList = list(n0, _AIL, 0, [() => AccountInfo, 0]);
export var AwsRegionList = 64 | 0;

export var AccountSource = uni(
  n0,
  _ASc,
  0,
  [_acc, _cAPH],
  [[() => AccountInfoList, 0], () => CustomAccountPoolHandler]
);
export var CreateAccountPool = op(
  n0,
  _CAPr,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/account-pools", 201],
  },
  () => CreateAccountPoolInput,
  () => CreateAccountPoolOutput
);
export var GetAccountPool = op(
  n0,
  _GAP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/account-pools/{identifier}", 200],
  },
  () => GetAccountPoolInput,
  () => GetAccountPoolOutput
);
export var ListAccountsInAccountPool = op(
  n0,
  _LAIAP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/account-pools/{identifier}/accounts", 200],
  },
  () => ListAccountsInAccountPoolInput,
  () => ListAccountsInAccountPoolOutput
);
export var UpdateAccountPool = op(
  n0,
  _UAP,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/account-pools/{identifier}", 200],
  },
  () => UpdateAccountPoolInput,
  () => UpdateAccountPoolOutput
);
