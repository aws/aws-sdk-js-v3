// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _CS, _CSR, _CSRa, _DIS, _DISR, _e, _h, _hE, _ISA, _M, _SA, n0 } from "./schemas_0";
import { Unit } from "./schemas_6_List";

/* eslint no-var: 0 */

export var CancelSessionRequest = struct(n0, _CSR, 0, [_SA], [[0, 1]]);
export var CancelSessionResponse = struct(n0, _CSRa, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var DeleteIdentitySourceRequest = struct(n0, _DISR, 0, [_ISA], [[0, 1]]);
export var CancelSession = op(
  n0,
  _CS,
  {
    [_h]: ["PUT", "/sessions/{SessionArn}", 200],
  },
  () => CancelSessionRequest,
  () => CancelSessionResponse
);
export var DeleteIdentitySource = op(
  n0,
  _DIS,
  {
    [_h]: ["DELETE", "/identity-sources/{IdentitySourceArn}", 200],
  },
  () => DeleteIdentitySourceRequest,
  () => Unit
);
