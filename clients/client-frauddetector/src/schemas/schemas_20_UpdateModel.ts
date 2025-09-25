// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _mI, _mT, _UM, _UMR, _UMRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateModelRequest = struct(n0, _UMR, 0, [_mI, _mT, _d], [0, 0, 0]);
export var UpdateModelResult = struct(n0, _UMRp, 0, [], []);
export var UpdateModel = op(
  n0,
  _UM,
  0,
  () => UpdateModelRequest,
  () => UpdateModelResult
);
