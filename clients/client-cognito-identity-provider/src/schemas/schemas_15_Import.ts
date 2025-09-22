// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDo,
  _CDr,
  _CMom,
  _CUIJ,
  _CUIJR,
  _CUIJRr,
  _CWLRA,
  _DUIJ,
  _DUIJR,
  _DUIJRe,
  _FU,
  _IUm,
  _JI,
  _JN,
  _LUIJ,
  _LUIJR,
  _LUIJRi,
  _MR,
  _PSUr,
  _PTa,
  _SDt,
  _St,
  _SUIJ,
  _SUIJR,
  _SUIJRt,
  _SUIJRto,
  _SUIJRtop,
  _SUIJt,
  _SUk,
  _UIJ,
  _UIJLT,
  _UIJs,
  _UIJT,
  _UPI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateUserImportJobRequest = struct(n0, _CUIJR, 0, [_JN, _UPI, _CWLRA], [0, 0, 0]);
export var CreateUserImportJobResponse = struct(n0, _CUIJRr, 0, [_UIJ], [() => UserImportJobType]);
export var DescribeUserImportJobRequest = struct(n0, _DUIJR, 0, [_UPI, _JI], [0, 0]);
export var DescribeUserImportJobResponse = struct(n0, _DUIJRe, 0, [_UIJ], [() => UserImportJobType]);
export var ListUserImportJobsRequest = struct(n0, _LUIJR, 0, [_UPI, _MR, _PTa], [0, 1, 0]);
export var ListUserImportJobsResponse = struct(n0, _LUIJRi, 0, [_UIJs, _PTa], [() => UserImportJobsListType, 0]);
export var StartUserImportJobRequest = struct(n0, _SUIJR, 0, [_UPI, _JI], [0, 0]);
export var StartUserImportJobResponse = struct(n0, _SUIJRt, 0, [_UIJ], [() => UserImportJobType]);
export var StopUserImportJobRequest = struct(n0, _SUIJRto, 0, [_UPI, _JI], [0, 0]);
export var StopUserImportJobResponse = struct(n0, _SUIJRtop, 0, [_UIJ], [() => UserImportJobType]);
export var UserImportJobType = struct(
  n0,
  _UIJT,
  0,
  [_JN, _JI, _UPI, _PSUr, _CDr, _SDt, _CDo, _St, _CWLRA, _IUm, _SUk, _FU, _CMom],
  [0, 0, 0, 0, 4, 4, 4, 0, 0, 1, 1, 1, 0]
);
export var UserImportJobsListType = list(n0, _UIJLT, 0, () => UserImportJobType);
export var CreateUserImportJob = op(
  n0,
  _CUIJ,
  0,
  () => CreateUserImportJobRequest,
  () => CreateUserImportJobResponse
);
export var DescribeUserImportJob = op(
  n0,
  _DUIJ,
  0,
  () => DescribeUserImportJobRequest,
  () => DescribeUserImportJobResponse
);
export var ListUserImportJobs = op(
  n0,
  _LUIJ,
  0,
  () => ListUserImportJobsRequest,
  () => ListUserImportJobsResponse
);
export var StartUserImportJob = op(
  n0,
  _SUIJ,
  0,
  () => StartUserImportJobRequest,
  () => StartUserImportJobResponse
);
export var StopUserImportJob = op(
  n0,
  _SUIJt,
  0,
  () => StopUserImportJobRequest,
  () => StopUserImportJobResponse
);
