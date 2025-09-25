// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFMRG, _DFMRGR, _DFMRGRe, _NWACLLT, _WACLA, _WACLLT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFirewallManagerRuleGroupsRequest = struct(n0, _DFMRGR, 0, [_WACLA, _WACLLT], [0, 0]);
export var DeleteFirewallManagerRuleGroupsResponse = struct(n0, _DFMRGRe, 0, [_NWACLLT], [0]);
export var DeleteFirewallManagerRuleGroups = op(
  n0,
  _DFMRG,
  0,
  () => DeleteFirewallManagerRuleGroupsRequest,
  () => DeleteFirewallManagerRuleGroupsResponse
);
