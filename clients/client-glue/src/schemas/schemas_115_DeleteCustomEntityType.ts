// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCET, _DCETR, _DCETRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomEntityTypeRequest = struct(n0, _DCETR, 0, [_N], [0]);
export var DeleteCustomEntityTypeResponse = struct(n0, _DCETRe, 0, [_N], [0]);
export var DeleteCustomEntityType = op(
  n0,
  _DCET,
  0,
  () => DeleteCustomEntityTypeRequest,
  () => DeleteCustomEntityTypeResponse
);
