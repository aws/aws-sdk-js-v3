// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWG, _DWGI, _DWGO, _RDO, _WG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkGroupInput = struct(n0, _DWGI, 0, [_WG, _RDO], [0, 2]);
export var DeleteWorkGroupOutput = struct(n0, _DWGO, 0, [], []);
export var DeleteWorkGroup = op(
  n0,
  _DWG,
  2,
  () => DeleteWorkGroupInput,
  () => DeleteWorkGroupOutput
);
