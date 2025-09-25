// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _De, _DRGS, _DRGSR, _DRGSRe, _Me, _Ms, _RGA, _RGN, _RSule, _RSuleu, _SID, _Su, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRuleGroupSummaryRequest = struct(n0, _DRGSR, 0, [_RGN, _RGA, _Ty], [0, 0, 0]);
export var DescribeRuleGroupSummaryResponse = struct(n0, _DRGSRe, 0, [_RGN, _De, _Su], [0, 0, () => Summary]);
export var RuleSummary = struct(n0, _RSule, 0, [_SID, _Ms, _Me], [0, 0, 0]);
export var Summary = struct(n0, _Su, 0, [_RSuleu], [() => RuleSummaries]);
export var RuleSummaries = list(n0, _RSuleu, 0, () => RuleSummary);
export var DescribeRuleGroupSummary = op(
  n0,
  _DRGS,
  0,
  () => DescribeRuleGroupSummaryRequest,
  () => DescribeRuleGroupSummaryResponse
);
