// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dI, _DR, _DRI, _DRO, _ht, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRuleInput = struct(
  n0,
  _DRI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRuleOutput = struct(n0, _DRO, 0, [], []);
export var DeleteRule = op(
  n0,
  _DR,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/rules/{identifier}", 204],
  },
  () => DeleteRuleInput,
  () => DeleteRuleOutput
);
