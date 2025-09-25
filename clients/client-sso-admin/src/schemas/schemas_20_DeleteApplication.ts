// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAp, _DA, _DAR, _DARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_AAp], [0]);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [], []);
export var DeleteApplication = op(
  n0,
  _DA,
  0,
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
