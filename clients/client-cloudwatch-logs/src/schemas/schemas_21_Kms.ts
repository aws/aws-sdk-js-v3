// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DKK, _DKKR, _lGN, _rI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateKmsKeyRequest = struct(n0, _DKKR, 0, [_lGN, _rI], [0, 0]);
export var DisassociateKmsKey = op(
  n0,
  _DKK,
  0,
  () => DisassociateKmsKeyRequest,
  () => Unit
);
