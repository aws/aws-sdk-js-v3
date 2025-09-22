// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAS, _DDDA, _DDDAR, _DDDARe, _DI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDirectoryDataAccessRequest = struct(n0, _DDDAR, 0, [_DI], [0]);
export var DescribeDirectoryDataAccessResult = struct(n0, _DDDARe, 0, [_DAS], [0]);
export var DescribeDirectoryDataAccess = op(
  n0,
  _DDDA,
  0,
  () => DescribeDirectoryDataAccessRequest,
  () => DescribeDirectoryDataAccessResult
);
