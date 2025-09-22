// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _At, _DTGA, _DTGAI, _DTGAO, _K, _MTGA, _MTGAI, _MTGAO, _TGA, _TGAar, _TGAarg, _Va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTargetGroupAttributesInput = struct(n0, _DTGAI, 0, [_TGA], [0]);
export var DescribeTargetGroupAttributesOutput = struct(n0, _DTGAO, 0, [_At], [() => TargetGroupAttributes]);
export var ModifyTargetGroupAttributesInput = struct(n0, _MTGAI, 0, [_TGA, _At], [0, () => TargetGroupAttributes]);
export var ModifyTargetGroupAttributesOutput = struct(n0, _MTGAO, 0, [_At], [() => TargetGroupAttributes]);
export var TargetGroupAttribute = struct(n0, _TGAar, 0, [_K, _Va], [0, 0]);
export var TargetGroupAttributes = list(n0, _TGAarg, 0, () => TargetGroupAttribute);
export var DescribeTargetGroupAttributes = op(
  n0,
  _DTGA,
  0,
  () => DescribeTargetGroupAttributesInput,
  () => DescribeTargetGroupAttributesOutput
);
export var ModifyTargetGroupAttributes = op(
  n0,
  _MTGA,
  0,
  () => ModifyTargetGroupAttributesInput,
  () => ModifyTargetGroupAttributesOutput
);
