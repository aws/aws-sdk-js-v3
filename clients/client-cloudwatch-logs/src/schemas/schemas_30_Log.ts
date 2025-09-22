// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AKK, _AKKR, _CLG, _CLGR, _kKI, _lGC, _lGN, _rI, _ta, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateKmsKeyRequest = struct(n0, _AKKR, 0, [_lGN, _kKI, _rI], [0, 0, 0]);
export var CreateLogGroupRequest = struct(n0, _CLGR, 0, [_lGN, _kKI, _ta, _lGC], [0, 0, 128 | 0, 0]);
export var AssociateKmsKey = op(
  n0,
  _AKK,
  0,
  () => AssociateKmsKeyRequest,
  () => Unit
);
export var CreateLogGroup = op(
  n0,
  _CLG,
  0,
  () => CreateLogGroupRequest,
  () => Unit
);
