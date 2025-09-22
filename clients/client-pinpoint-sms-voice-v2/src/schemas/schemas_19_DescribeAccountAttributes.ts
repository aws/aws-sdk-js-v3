// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AA, _AAc, _AAL, _DAA, _DAAR, _DAARe, _MR, _N, _NT, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAttribute = struct(n0, _AA, 0, [_N, _V], [0, 0]);
export var DescribeAccountAttributesRequest = struct(n0, _DAAR, 0, [_NT, _MR], [0, 1]);
export var DescribeAccountAttributesResult = struct(n0, _DAARe, 0, [_AAc, _NT], [() => AccountAttributeList, 0]);
export var AccountAttributeList = list(n0, _AAL, 0, () => AccountAttribute);
export var DescribeAccountAttributes = op(
  n0,
  _DAA,
  0,
  () => DescribeAccountAttributesRequest,
  () => DescribeAccountAttributesResult
);
