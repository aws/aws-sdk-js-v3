// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DER, _DERe, _EI, _Em, _N, _OI, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEntityRequest = struct(n0, _DER, 0, [_OI, _Em], [0, 0]);
export var DescribeEntityResponse = struct(n0, _DERe, 0, [_EI, _N, _Ty], [0, 0, 0]);
export var DescribeEntity = op(
  n0,
  _DE,
  2,
  () => DescribeEntityRequest,
  () => DescribeEntityResponse
);
