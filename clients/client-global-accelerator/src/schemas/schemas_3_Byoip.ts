// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ByoipCidrNotFoundException as __ByoipCidrNotFoundException,
  IncorrectCidrStateException as __IncorrectCidrStateException,
} from "../models/index";
import {
  _ABC,
  _ABCR,
  _ABCRd,
  _BC,
  _BCE,
  _BCEy,
  _BCNFE,
  _C,
  _c,
  _CAC,
  _DBC,
  _DBCR,
  _DBCRe,
  _e,
  _Ev,
  _hE,
  _ICSE,
  _M,
  _PBC,
  _PBCR,
  _PBCRr,
  _Si,
  _St,
  _T,
  _WBC,
  _WBCR,
  _WBCRi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdvertiseByoipCidrRequest = struct(n0, _ABCR, 0, [_C], [0]);
export var AdvertiseByoipCidrResponse = struct(n0, _ABCRd, 0, [_BC], [() => ByoipCidr]);
export var ByoipCidr = struct(n0, _BC, 0, [_C, _St, _Ev], [0, 0, () => ByoipCidrEvents]);
export var ByoipCidrEvent = struct(n0, _BCE, 0, [_M, _T], [0, 4]);
export var ByoipCidrNotFoundException = error(
  n0,
  _BCNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ByoipCidrNotFoundException
);
export var CidrAuthorizationContext = struct(n0, _CAC, 0, [_M, _Si], [0, 0]);
export var DeprovisionByoipCidrRequest = struct(n0, _DBCR, 0, [_C], [0]);
export var DeprovisionByoipCidrResponse = struct(n0, _DBCRe, 0, [_BC], [() => ByoipCidr]);
export var IncorrectCidrStateException = error(
  n0,
  _ICSE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __IncorrectCidrStateException
);
export var ProvisionByoipCidrRequest = struct(n0, _PBCR, 0, [_C, _CAC], [0, () => CidrAuthorizationContext]);
export var ProvisionByoipCidrResponse = struct(n0, _PBCRr, 0, [_BC], [() => ByoipCidr]);
export var WithdrawByoipCidrRequest = struct(n0, _WBCR, 0, [_C], [0]);
export var WithdrawByoipCidrResponse = struct(n0, _WBCRi, 0, [_BC], [() => ByoipCidr]);
export var ByoipCidrEvents = list(n0, _BCEy, 0, () => ByoipCidrEvent);
export var AdvertiseByoipCidr = op(
  n0,
  _ABC,
  0,
  () => AdvertiseByoipCidrRequest,
  () => AdvertiseByoipCidrResponse
);
export var DeprovisionByoipCidr = op(
  n0,
  _DBC,
  0,
  () => DeprovisionByoipCidrRequest,
  () => DeprovisionByoipCidrResponse
);
export var ProvisionByoipCidr = op(
  n0,
  _PBC,
  0,
  () => ProvisionByoipCidrRequest,
  () => ProvisionByoipCidrResponse
);
export var WithdrawByoipCidr = op(
  n0,
  _WBC,
  0,
  () => WithdrawByoipCidrRequest,
  () => WithdrawByoipCidrResponse
);
