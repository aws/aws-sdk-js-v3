// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _GCP, _GCPR, _GCPRe, _Po, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetContactPolicyRequest = struct(n0, _GCPR, 0, [_CA], [0]);
export var GetContactPolicyResult = struct(n0, _GCPRe, 0, [_CA, _Po], [0, 0]);
export var GetContactPolicy = op(
  n0,
  _GCP,
  0,
  () => GetContactPolicyRequest,
  () => GetContactPolicyResult
);
