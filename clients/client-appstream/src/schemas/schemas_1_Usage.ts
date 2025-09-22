// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DURSe,
  _DURSRes,
  _DURSResc,
  _EC,
  _EM,
  _LGRD,
  _LRGEE,
  _LRGEEa,
  _MR,
  _NT,
  _SBN,
  _Sc,
  _SEu,
  _URS,
  _URSL,
  _URSs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeUsageReportSubscriptionsRequest = struct(n0, _DURSRes, 0, [_MR, _NT], [1, 0]);
export var DescribeUsageReportSubscriptionsResult = struct(
  n0,
  _DURSResc,
  0,
  [_URS, _NT],
  [() => UsageReportSubscriptionList, 0]
);
export var LastReportGenerationExecutionError = struct(n0, _LRGEE, 0, [_EC, _EM], [0, 0]);
export var UsageReportSubscription = struct(
  n0,
  _URSs,
  0,
  [_SBN, _Sc, _LGRD, _SEu],
  [0, 0, 4, () => LastReportGenerationExecutionErrors]
);
export var LastReportGenerationExecutionErrors = list(n0, _LRGEEa, 0, () => LastReportGenerationExecutionError);
export var UsageReportSubscriptionList = list(n0, _URSL, 0, () => UsageReportSubscription);
export var DescribeUsageReportSubscriptions = op(
  n0,
  _DURSe,
  0,
  () => DescribeUsageReportSubscriptionsRequest,
  () => DescribeUsageReportSubscriptionsResult
);
