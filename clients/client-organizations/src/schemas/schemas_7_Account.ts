// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _Acc,
  _AI,
  _AN,
  _Ar,
  _CAr,
  _CARr,
  _CARre,
  _CAS,
  _CGCA,
  _CGCAR,
  _CGCARr,
  _DA,
  _DAe,
  _DAes,
  _DAR,
  _DARe,
  _DED,
  _E,
  _I,
  _IUATB,
  _JM,
  _JT,
  _LA,
  _LAFP,
  _LAFPR,
  _LAFPRi,
  _LAR,
  _LARi,
  _LAWIEP,
  _LAWIEPR,
  _LAWIEPRi,
  _LDA,
  _LDAR,
  _LDARi,
  _MR,
  _N,
  _NT,
  _PIa,
  _PT,
  _RN,
  _S,
  _SP,
  _St,
  _Ta,
  n0,
} from "./schemas_0";
import { CreateAccountName, CreateAccountStatus } from "./schemas_5_Account";
import { Tags } from "./schemas_9_Create";

/* eslint no-var: 0 */

export var AccountName = sim(n0, _AN, 0, 8);
export var Email = sim(n0, _E, 0, 8);
export var Account = struct(
  n0,
  _A,
  0,
  [_I, _Ar, _E, _N, _S, _St, _JM, _JT],
  [0, 0, [() => Email, 0], [() => AccountName, 0], 0, 0, 0, 4]
);
export var CreateAccountRequest = struct(
  n0,
  _CARr,
  0,
  [_E, _AN, _RN, _IUATB, _Ta],
  [[() => Email, 0], [() => CreateAccountName, 0], 0, 0, () => Tags]
);
export var CreateAccountResponse = struct(n0, _CARre, 0, [_CAS], [[() => CreateAccountStatus, 0]]);
export var CreateGovCloudAccountRequest = struct(
  n0,
  _CGCAR,
  0,
  [_E, _AN, _RN, _IUATB, _Ta],
  [[() => Email, 0], [() => CreateAccountName, 0], 0, 0, () => Tags]
);
export var CreateGovCloudAccountResponse = struct(n0, _CGCARr, 0, [_CAS], [[() => CreateAccountStatus, 0]]);
export var DelegatedAdministrator = struct(
  n0,
  _DA,
  0,
  [_I, _Ar, _E, _N, _S, _JM, _JT, _DED],
  [0, 0, [() => Email, 0], [() => AccountName, 0], 0, 0, 4, 4]
);
export var DescribeAccountRequest = struct(n0, _DAR, 0, [_AI], [0]);
export var DescribeAccountResponse = struct(n0, _DARe, 0, [_A], [[() => Account, 0]]);
export var ListAccountsForParentRequest = struct(n0, _LAFPR, 0, [_PIa, _NT, _MR], [0, 0, 1]);
export var ListAccountsForParentResponse = struct(n0, _LAFPRi, 0, [_Acc, _NT], [[() => Accounts, 0], 0]);
export var ListAccountsRequest = struct(n0, _LAR, 0, [_NT, _MR], [0, 1]);
export var ListAccountsResponse = struct(n0, _LARi, 0, [_Acc, _NT], [[() => Accounts, 0], 0]);
export var ListAccountsWithInvalidEffectivePolicyRequest = struct(n0, _LAWIEPR, 0, [_PT, _NT, _MR], [0, 0, 1]);
export var ListAccountsWithInvalidEffectivePolicyResponse = struct(
  n0,
  _LAWIEPRi,
  0,
  [_Acc, _PT, _NT],
  [[() => Accounts, 0], 0, 0]
);
export var ListDelegatedAdministratorsRequest = struct(n0, _LDAR, 0, [_SP, _NT, _MR], [0, 0, 1]);
export var ListDelegatedAdministratorsResponse = struct(
  n0,
  _LDARi,
  0,
  [_DAe, _NT],
  [[() => DelegatedAdministrators, 0], 0]
);
export var Accounts = list(n0, _Acc, 0, [() => Account, 0]);
export var DelegatedAdministrators = list(n0, _DAe, 0, [() => DelegatedAdministrator, 0]);
export var CreateAccount = op(
  n0,
  _CAr,
  0,
  () => CreateAccountRequest,
  () => CreateAccountResponse
);
export var CreateGovCloudAccount = op(
  n0,
  _CGCA,
  0,
  () => CreateGovCloudAccountRequest,
  () => CreateGovCloudAccountResponse
);
export var DescribeAccount = op(
  n0,
  _DAes,
  0,
  () => DescribeAccountRequest,
  () => DescribeAccountResponse
);
export var ListAccounts = op(
  n0,
  _LA,
  0,
  () => ListAccountsRequest,
  () => ListAccountsResponse
);
export var ListAccountsForParent = op(
  n0,
  _LAFP,
  0,
  () => ListAccountsForParentRequest,
  () => ListAccountsForParentResponse
);
export var ListAccountsWithInvalidEffectivePolicy = op(
  n0,
  _LAWIEP,
  0,
  () => ListAccountsWithInvalidEffectivePolicyRequest,
  () => ListAccountsWithInvalidEffectivePolicyResponse
);
export var ListDelegatedAdministrators = op(
  n0,
  _LDA,
  0,
  () => ListDelegatedAdministratorsRequest,
  () => ListDelegatedAdministratorsResponse
);
