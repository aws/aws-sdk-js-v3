// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFi, _DFRi, _DFRis, _FN, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateFleetRequest = struct(n0, _DFRi, 0, [_FN, _SN], [0, 0]);
export var DisassociateFleetResult = struct(n0, _DFRis, 0, [], []);
export var DisassociateFleet = op(
  n0,
  _DFi,
  0,
  () => DisassociateFleetRequest,
  () => DisassociateFleetResult
);
