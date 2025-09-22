// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIA,
  _CIM,
  _CIRL,
  _CIS,
  _CISo,
  _CISon,
  _DCI,
  _DCII,
  _DCIO,
  _EDx,
  _EN,
  _FE,
  _IN,
  _LCI,
  _LCII,
  _LCIO,
  _LUDT,
  _MR,
  _NT,
  _TN,
  _UCI,
  _UCII,
  _UCIO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContributorInsightsSummary = struct(n0, _CIS, 0, [_TN, _IN, _CISo, _CIM], [0, 0, 0, 0]);
export var DescribeContributorInsightsInput = struct(n0, _DCII, 0, [_TN, _IN], [0, 0]);
export var DescribeContributorInsightsOutput = struct(
  n0,
  _DCIO,
  0,
  [_TN, _IN, _CIRL, _CISo, _LUDT, _FE, _CIM],
  [0, 0, 64 | 0, 0, 4, () => FailureException, 0]
);
export var FailureException = struct(n0, _FE, 0, [_EN, _EDx], [0, 0]);
export var ListContributorInsightsInput = struct(n0, _LCII, 0, [_TN, _NT, _MR], [0, 0, 1]);
export var ListContributorInsightsOutput = struct(n0, _LCIO, 0, [_CISon, _NT], [() => ContributorInsightsSummaries, 0]);
export var UpdateContributorInsightsInput = struct(n0, _UCII, 0, [_TN, _IN, _CIA, _CIM], [0, 0, 0, 0]);
export var UpdateContributorInsightsOutput = struct(n0, _UCIO, 0, [_TN, _IN, _CISo, _CIM], [0, 0, 0, 0]);
export var ContributorInsightsRuleList = 64 | 0;

export var ContributorInsightsSummaries = list(n0, _CISon, 0, () => ContributorInsightsSummary);
export var DescribeContributorInsights = op(
  n0,
  _DCI,
  0,
  () => DescribeContributorInsightsInput,
  () => DescribeContributorInsightsOutput
);
export var ListContributorInsights = op(
  n0,
  _LCI,
  0,
  () => ListContributorInsightsInput,
  () => ListContributorInsightsOutput
);
export var UpdateContributorInsights = op(
  n0,
  _UCI,
  0,
  () => UpdateContributorInsightsInput,
  () => UpdateContributorInsightsOutput
);
