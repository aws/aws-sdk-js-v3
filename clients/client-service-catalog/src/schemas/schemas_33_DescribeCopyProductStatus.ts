// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _CPS, _CPT, _DCPS, _DCPSI, _DCPSO, _SDt, _TPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeCopyProductStatusInput = struct(n0, _DCPSI, 0, [_AL, _CPT], [0, 0]);
export var DescribeCopyProductStatusOutput = struct(n0, _DCPSO, 0, [_CPS, _TPI, _SDt], [0, 0, 0]);
export var DescribeCopyProductStatus = op(
  n0,
  _DCPS,
  0,
  () => DescribeCopyProductStatusInput,
  () => DescribeCopyProductStatusOutput
);
