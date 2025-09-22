// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _ALc,
  _ALL,
  _DAL,
  _DALR,
  _DALRe,
  _DSL,
  _DSLR,
  _DSLRe,
  _EL,
  _Ma,
  _MLa,
  _MR,
  _N,
  _NT,
  _Ov,
  _SL,
  _SLL,
  _SLp,
  _U,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountLimit = struct(n0, _AL, 0, [_N, _U, _Ma], [0, 1, 1]);
export var DescribeAccountLimitsRequest = struct(n0, _DALR, 0, [_NT, _MR], [0, 1]);
export var DescribeAccountLimitsResult = struct(n0, _DALRe, 0, [_ALc, _NT], [() => AccountLimitList, 0]);
export var DescribeSpendLimitsRequest = struct(n0, _DSLR, 0, [_NT, _MR], [0, 1]);
export var DescribeSpendLimitsResult = struct(n0, _DSLRe, 0, [_SL, _NT], [() => SpendLimitList, 0]);
export var SpendLimit = struct(n0, _SLp, 0, [_N, _EL, _MLa, _Ov], [0, 1, 1, 2]);
export var AccountLimitList = list(n0, _ALL, 0, () => AccountLimit);
export var SpendLimitList = list(n0, _SLL, 0, () => SpendLimit);
export var DescribeAccountLimits = op(
  n0,
  _DAL,
  0,
  () => DescribeAccountLimitsRequest,
  () => DescribeAccountLimitsResult
);
export var DescribeSpendLimits = op(
  n0,
  _DSL,
  0,
  () => DescribeSpendLimitsRequest,
  () => DescribeSpendLimitsResult
);
