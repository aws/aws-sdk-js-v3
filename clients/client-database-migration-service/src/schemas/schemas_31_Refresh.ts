// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRSS, _DRSSM, _DRSSR, _EA, _LFM, _LRD, _RIA, _RSef, _RSM, _RSR, _RSS, _S, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRefreshSchemasStatusMessage = struct(n0, _DRSSM, 0, [_EA], [0]);
export var DescribeRefreshSchemasStatusResponse = struct(n0, _DRSSR, 0, [_RSS], [() => RefreshSchemasStatus]);
export var RefreshSchemasMessage = struct(n0, _RSM, 0, [_EA, _RIA], [0, 0]);
export var RefreshSchemasResponse = struct(n0, _RSR, 0, [_RSS], [() => RefreshSchemasStatus]);
export var RefreshSchemasStatus = struct(n0, _RSS, 0, [_EA, _RIA, _S, _LRD, _LFM], [0, 0, 0, 4, 0]);
export var DescribeRefreshSchemasStatus = op(
  n0,
  _DRSS,
  0,
  () => DescribeRefreshSchemasStatusMessage,
  () => DescribeRefreshSchemasStatusResponse
);
export var RefreshSchemas = op(
  n0,
  _RSef,
  0,
  () => RefreshSchemasMessage,
  () => RefreshSchemasResponse
);
