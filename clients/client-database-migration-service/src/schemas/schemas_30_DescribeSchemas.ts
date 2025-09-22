// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSM, _DSR, _EA, _Ma, _MR, _Sc, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSchemasMessage = struct(n0, _DSM, 0, [_EA, _MR, _Ma], [0, 1, 0]);
export var DescribeSchemasResponse = struct(n0, _DSR, 0, [_Ma, _Sc], [0, 64 | 0]);
export var SchemaList = 64 | 0;

export var DescribeSchemas = op(
  n0,
  _DS,
  0,
  () => DescribeSchemasMessage,
  () => DescribeSchemasResponse
);
