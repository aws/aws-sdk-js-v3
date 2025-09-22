// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MIF, _MIFR, _Reso, _ULI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyIdFormatRequest = struct(n0, _MIFR, 0, [_Reso, _ULI], [0, 2]);
export var ModifyIdFormat = op(
  n0,
  _MIF,
  0,
  () => ModifyIdFormatRequest,
  () => Unit
);
