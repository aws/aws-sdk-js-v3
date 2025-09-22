// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LRFWACL, _LRFWACLR, _LRFWACLRi, _RAe, _RT, _WACLA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListResourcesForWebACLRequest = struct(n0, _LRFWACLR, 0, [_WACLA, _RT], [0, 0]);
export var ListResourcesForWebACLResponse = struct(n0, _LRFWACLRi, 0, [_RAe], [64 | 0]);
export var ResourceArns = 64 | 0;

export var ListResourcesForWebACL = op(
  n0,
  _LRFWACL,
  0,
  () => ListResourcesForWebACLRequest,
  () => ListResourcesForWebACLResponse
);
