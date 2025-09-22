// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAL, _DALA, _MNOASG, _MNOLC, _NOASG, _NOLC, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAccountLimitsAnswer = struct(n0, _DALA, 0, [_MNOASG, _MNOLC, _NOASG, _NOLC], [1, 1, 1, 1]);
export var DescribeAccountLimits = op(
  n0,
  _DAL,
  0,
  () => Unit,
  () => DescribeAccountLimitsAnswer
);
