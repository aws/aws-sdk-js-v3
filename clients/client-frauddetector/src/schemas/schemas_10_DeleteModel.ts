// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DM, _DMR, _DMRe, _mI, _mT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelRequest = struct(n0, _DMR, 0, [_mI, _mT], [0, 0]);
export var DeleteModelResult = struct(n0, _DMRe, 0, [], []);
export var DeleteModel = op(
  n0,
  _DM,
  0,
  () => DeleteModelRequest,
  () => DeleteModelResult
);
