// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { UserNotFoundException as __UserNotFoundException } from "../models/index";
import {
  _AMC,
  _ATc,
  _ATE,
  _c,
  _CA,
  _CFI,
  _CI,
  _Cre,
  _CT,
  _e,
  _GFT,
  _GFTR,
  _GFTRe,
  _h,
  _hE,
  _II,
  _M,
  _MCo,
  _MCR,
  _MCRo,
  _QI,
  _RTE,
  _RTef,
  _SIU,
  _STe,
  _TCra,
  _TCRr,
  _TCRra,
  _UA,
  _UI,
  _UNFE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SecurityToken = sim(n0, _STe, 0, 8);
export var Credentials = struct(
  n0,
  _Cre,
  8,
  [_ATc, _ATE, _RTef, _RTE],
  [[() => SecurityToken, 0], 4, [() => SecurityToken, 0], 4]
);
export var GetFederationTokenRequest = struct(n0, _GFTR, 0, [_II], [[0, 1]]);
export var GetFederationTokenResponse = struct(
  n0,
  _GFTRe,
  0,
  [_Cre, _SIU, _UA, _UI],
  [[() => Credentials, 0], 0, 0, 0]
);
export var MonitorContactRequest = struct(n0, _MCR, 0, [_II, _CI, _UI, _AMC, _CT], [0, 0, 0, 64 | 0, [0, 4]]);
export var MonitorContactResponse = struct(n0, _MCRo, 0, [_CI, _CA], [0, 0]);
export var TransferContactRequest = struct(n0, _TCRr, 0, [_II, _CI, _QI, _UI, _CFI, _CT], [0, 0, 0, 0, 0, [0, 4]]);
export var TransferContactResponse = struct(n0, _TCRra, 0, [_CI, _CA], [0, 0]);
export var UserNotFoundException = error(
  n0,
  _UNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __UserNotFoundException
);
export var AllowedMonitorCapabilities = 64 | 0;

export var GetFederationToken = op(
  n0,
  _GFT,
  {
    [_h]: ["GET", "/user/federate/{InstanceId}", 200],
  },
  () => GetFederationTokenRequest,
  () => GetFederationTokenResponse
);
export var MonitorContact = op(
  n0,
  _MCo,
  {
    [_h]: ["POST", "/contact/monitor", 200],
  },
  () => MonitorContactRequest,
  () => MonitorContactResponse
);
export var TransferContact = op(
  n0,
  _TCra,
  {
    [_h]: ["POST", "/contact/transfer", 200],
  },
  () => TransferContactRequest,
  () => TransferContactResponse
);
