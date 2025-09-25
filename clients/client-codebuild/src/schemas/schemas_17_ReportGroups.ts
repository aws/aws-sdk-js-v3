// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LRG, _LRGI, _LRGO, _LSRG, _LSRGI, _LSRGO, _mR, _nT, _rG, _sB, _sO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListReportGroupsInput = struct(n0, _LRGI, 0, [_sO, _sB, _nT, _mR], [0, 0, 0, 1]);
export var ListReportGroupsOutput = struct(n0, _LRGO, 0, [_nT, _rG], [0, 64 | 0]);
export var ListSharedReportGroupsInput = struct(n0, _LSRGI, 0, [_sO, _sB, _nT, _mR], [0, 0, 0, 1]);
export var ListSharedReportGroupsOutput = struct(n0, _LSRGO, 0, [_nT, _rG], [0, 64 | 0]);
export var ReportGroupArns = 64 | 0;

export var ListReportGroups = op(
  n0,
  _LRG,
  0,
  () => ListReportGroupsInput,
  () => ListReportGroupsOutput
);
export var ListSharedReportGroups = op(
  n0,
  _LSRG,
  0,
  () => ListSharedReportGroupsInput,
  () => ListSharedReportGroupsOutput
);
