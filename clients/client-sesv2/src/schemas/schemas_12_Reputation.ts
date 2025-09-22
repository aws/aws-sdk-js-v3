// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _REP, _RER, _RET, _UREP, _UREPR, _UREPRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateReputationEntityPolicyRequest = struct(n0, _UREPR, 0, [_RET, _RER, _REP], [[0, 1], [0, 1], 0]);
export var UpdateReputationEntityPolicyResponse = struct(n0, _UREPRp, 0, [], []);
export var UpdateReputationEntityPolicy = op(
  n0,
  _UREP,
  {
    [_h]: ["PUT", "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/policy", 200],
  },
  () => UpdateReputationEntityPolicyRequest,
  () => UpdateReputationEntityPolicyResponse
);
