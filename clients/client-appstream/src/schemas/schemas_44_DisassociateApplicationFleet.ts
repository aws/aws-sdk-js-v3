// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _DAF, _DAFR, _DAFRi, _FN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateApplicationFleetRequest = struct(n0, _DAFR, 0, [_FN, _AA], [0, 0]);
export var DisassociateApplicationFleetResult = struct(n0, _DAFRi, 0, [], []);
export var DisassociateApplicationFleet = op(
  n0,
  _DAF,
  0,
  () => DisassociateApplicationFleetRequest,
  () => DisassociateApplicationFleetResult
);
