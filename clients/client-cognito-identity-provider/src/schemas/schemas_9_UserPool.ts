// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  UnauthorizedException as __UnauthorizedException,
  UnsupportedTokenTypeException as __UnsupportedTokenTypeException,
} from "../models/index";
import {
  _c,
  _CI,
  _CSl,
  _CST,
  _e,
  _hE,
  _m,
  _RTev,
  _RTRe,
  _RTRev,
  _To,
  _UE,
  _UTTE,
  ClientIdType,
  n0,
  TokenModelType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientSecretType = sim(n0, _CST, 0, 8);
export var RevokeTokenRequest = struct(
  n0,
  _RTRe,
  0,
  [_To, _CI, _CSl],
  [
    [() => TokenModelType, 0],
    [() => ClientIdType, 0],
    [() => ClientSecretType, 0],
  ]
);
export var RevokeTokenResponse = struct(n0, _RTRev, 0, [], []);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],

  __UnauthorizedException
);
export var UnsupportedTokenTypeException = error(
  n0,
  _UTTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UnsupportedTokenTypeException
);
export var RevokeToken = op(
  n0,
  _RTev,
  0,
  () => RevokeTokenRequest,
  () => RevokeTokenResponse
);
