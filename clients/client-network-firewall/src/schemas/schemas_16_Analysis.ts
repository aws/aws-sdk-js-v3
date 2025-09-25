// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARI, _AT, _EAT, _FAi, _FN, _SAR, _SARR, _SARRt, _UFAS, _UFASR, _UFASRp, _UT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartAnalysisReportRequest = struct(n0, _SARR, 0, [_FN, _FAi, _AT], [0, 0, 0]);
export var StartAnalysisReportResponse = struct(n0, _SARRt, 0, [_ARI], [0]);
export var UpdateFirewallAnalysisSettingsRequest = struct(n0, _UFASR, 0, [_EAT, _FAi, _FN, _UT], [64 | 0, 0, 0, 0]);
export var UpdateFirewallAnalysisSettingsResponse = struct(n0, _UFASRp, 0, [_EAT, _FAi, _FN, _UT], [64 | 0, 0, 0, 0]);
export var EnabledAnalysisTypes = 64 | 0;

export var StartAnalysisReport = op(
  n0,
  _SAR,
  0,
  () => StartAnalysisReportRequest,
  () => StartAnalysisReportResponse
);
export var UpdateFirewallAnalysisSettings = op(
  n0,
  _UFAS,
  0,
  () => UpdateFirewallAnalysisSettingsRequest,
  () => UpdateFirewallAnalysisSettingsResponse
);
