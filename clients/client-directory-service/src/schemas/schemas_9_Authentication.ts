// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidClientAuthStatusException as __InvalidClientAuthStatusException } from "../models/index";
import { _c, _DCA, _DCAR, _DCARi, _DI, _e, _ECA, _ECAR, _ECARn, _ICASE, _M, _RI, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableClientAuthenticationRequest = struct(n0, _DCAR, 0, [_DI, _Ty], [0, 0]);
export var DisableClientAuthenticationResult = struct(n0, _DCARi, 0, [], []);
export var EnableClientAuthenticationRequest = struct(n0, _ECAR, 0, [_DI, _Ty], [0, 0]);
export var EnableClientAuthenticationResult = struct(n0, _ECARn, 0, [], []);
export var InvalidClientAuthStatusException = error(
  n0,
  _ICASE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __InvalidClientAuthStatusException
);
export var DisableClientAuthentication = op(
  n0,
  _DCA,
  0,
  () => DisableClientAuthenticationRequest,
  () => DisableClientAuthenticationResult
);
export var EnableClientAuthentication = op(
  n0,
  _ECA,
  0,
  () => EnableClientAuthenticationRequest,
  () => EnableClientAuthenticationResult
);
