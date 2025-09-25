// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIp, _DA, _DAR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_AIp], [[0, 1]]);
export var DeleteApplication = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/applications/{ApplicationId}", 204],
  },
  () => DeleteApplicationRequest,
  () => Unit
);
