// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DSR, _DSRR, _DSRRi, _MTN, _PUS, _SRN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateSourceResourceRequest = struct(n0, _DSRR, 0, [_PUS, _MTN, _SRN, _DR], [0, 0, 0, 2]);
export var DisassociateSourceResourceResult = struct(n0, _DSRRi, 0, [], []);
export var DisassociateSourceResource = op(
  n0,
  _DSR,
  0,
  () => DisassociateSourceResourceRequest,
  () => DisassociateSourceResourceResult
);
