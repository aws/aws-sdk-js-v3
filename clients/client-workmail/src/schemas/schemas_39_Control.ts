// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DACRel, _DACRR, _DACRRe, _N, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessControlRuleRequest = struct(n0, _DACRR, 0, [_OI, _N], [0, 0]);
export var DeleteAccessControlRuleResponse = struct(n0, _DACRRe, 0, [], []);
export var DeleteAccessControlRule = op(
  n0,
  _DACRel,
  0,
  () => DeleteAccessControlRuleRequest,
  () => DeleteAccessControlRuleResponse
);
