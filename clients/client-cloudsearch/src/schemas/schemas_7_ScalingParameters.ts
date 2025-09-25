// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIT, _DN, _DPC, _DRC, _DSP, _DSPR, _DSPRe, _O, _S, _SP, _SPS, n0, OptionStatus } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeScalingParametersRequest = struct(n0, _DSPR, 0, [_DN], [0]);
export var DescribeScalingParametersResponse = struct(n0, _DSPRe, 0, [_SP], [() => ScalingParametersStatus]);
export var ScalingParameters = struct(n0, _SP, 0, [_DIT, _DRC, _DPC], [0, 1, 1]);
export var ScalingParametersStatus = struct(n0, _SPS, 0, [_O, _S], [() => ScalingParameters, () => OptionStatus]);
export var DescribeScalingParameters = op(
  n0,
  _DSP,
  0,
  () => DescribeScalingParametersRequest,
  () => DescribeScalingParametersResponse
);
