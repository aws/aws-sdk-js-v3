// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidLDAPSStatusException as __InvalidLDAPSStatusException } from "../models/index";
import {
  _c,
  _DI,
  _DLDAPS,
  _DLDAPSR,
  _DLDAPSRi,
  _e,
  _ELDAPS,
  _ELDAPSR,
  _ELDAPSRn,
  _ILDAPSSE,
  _M,
  _RI,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisableLDAPSRequest = struct(n0, _DLDAPSR, 0, [_DI, _Ty], [0, 0]);
export var DisableLDAPSResult = struct(n0, _DLDAPSRi, 0, [], []);
export var EnableLDAPSRequest = struct(n0, _ELDAPSR, 0, [_DI, _Ty], [0, 0]);
export var EnableLDAPSResult = struct(n0, _ELDAPSRn, 0, [], []);
export var InvalidLDAPSStatusException = error(
  n0,
  _ILDAPSSE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __InvalidLDAPSStatusException
);
export var DisableLDAPS = op(
  n0,
  _DLDAPS,
  0,
  () => DisableLDAPSRequest,
  () => DisableLDAPSResult
);
export var EnableLDAPS = op(
  n0,
  _ELDAPS,
  0,
  () => EnableLDAPSRequest,
  () => EnableLDAPSResult
);
