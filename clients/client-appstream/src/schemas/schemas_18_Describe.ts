// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ABp, _Ar, _DABe, _DABRes, _DABResc, _MR, _NT, n0 } from "./schemas_0";
import { AppBlock } from "./schemas_7_App";

/* eslint no-var: 0 */

export var DescribeAppBlocksRequest = struct(n0, _DABRes, 0, [_Ar, _NT, _MR], [64 | 0, 0, 1]);
export var DescribeAppBlocksResult = struct(n0, _DABResc, 0, [_ABp, _NT], [() => AppBlocks, 0]);
export var AppBlocks = list(n0, _ABp, 0, () => AppBlock);
export var ArnList = 64 | 0;

export var DescribeAppBlocks = op(
  n0,
  _DABe,
  0,
  () => DescribeAppBlocksRequest,
  () => DescribeAppBlocksResult
);
