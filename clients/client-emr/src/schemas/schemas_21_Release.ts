// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AOSR, _Ap, _DRL, _DRLI, _DRLO, _L, _MR, _N, _NT, _OSR, _OSRLe, _RL, _SAi, _SAL, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReleaseLabelInput = struct(n0, _DRLI, 0, [_RL, _NT, _MR], [0, 0, 1]);
export var DescribeReleaseLabelOutput = struct(
  n0,
  _DRLO,
  0,
  [_RL, _Ap, _NT, _AOSR],
  [0, () => SimplifiedApplicationList, 0, () => OSReleaseList]
);
export var OSRelease = struct(n0, _OSR, 0, [_L], [0]);
export var SimplifiedApplication = struct(n0, _SAi, 0, [_N, _V], [0, 0]);
export var OSReleaseList = list(n0, _OSRLe, 0, () => OSRelease);
export var SimplifiedApplicationList = list(n0, _SAL, 0, () => SimplifiedApplication);
export var DescribeReleaseLabel = op(
  n0,
  _DRL,
  0,
  () => DescribeReleaseLabelInput,
  () => DescribeReleaseLabelOutput
);
