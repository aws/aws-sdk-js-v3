// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AN, _SARto, _SARtop, _SAt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopApplicationRequest = struct(n0, _SARto, 0, [_AN], [0]);
export var StopApplicationResponse = struct(n0, _SARtop, 0, [], []);
export var StopApplication = op(
  n0,
  _SAt,
  0,
  () => StopApplicationRequest,
  () => StopApplicationResponse
);
