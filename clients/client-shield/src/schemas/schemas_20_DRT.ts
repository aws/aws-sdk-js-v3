// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { AccessDeniedForDependencyException as __AccessDeniedForDependencyException } from "../models/index";
import { _ADFDE, _ADRTR, _ADRTRR, _ADRTRRs, _c, _e, _m, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedForDependencyException = error(
  n0,
  _ADFDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __AccessDeniedForDependencyException
);
export var AssociateDRTRoleRequest = struct(n0, _ADRTRR, 0, [_RA], [0]);
export var AssociateDRTRoleResponse = struct(n0, _ADRTRRs, 0, [], []);
export var AssociateDRTRole = op(
  n0,
  _ADRTR,
  0,
  () => AssociateDRTRoleRequest,
  () => AssociateDRTRoleResponse
);
