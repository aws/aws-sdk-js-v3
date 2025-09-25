// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DHIT, _DHITR, _DHITRe, _HITI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHITRequest = struct(n0, _DHITR, 0, [_HITI], [0]);
export var DeleteHITResponse = struct(n0, _DHITRe, 0, [], []);
export var DeleteHIT = op(
  n0,
  _DHIT,
  2,
  () => DeleteHITRequest,
  () => DeleteHITResponse
);
