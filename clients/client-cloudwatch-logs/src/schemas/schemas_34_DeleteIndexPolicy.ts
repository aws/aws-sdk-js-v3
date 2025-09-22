// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIP, _DIPR, _DIPRe, _lGI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIndexPolicyRequest = struct(n0, _DIPR, 0, [_lGI], [0]);
export var DeleteIndexPolicyResponse = struct(n0, _DIPRe, 0, [], []);
export var DeleteIndexPolicy = op(
  n0,
  _DIP,
  0,
  () => DeleteIndexPolicyRequest,
  () => DeleteIndexPolicyResponse
);
