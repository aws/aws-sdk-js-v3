// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _P, _PCP, _PCPI, _PCPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutContainerPolicyInput = struct(n0, _PCPI, 0, [_CN, _P], [0, 0]);
export var PutContainerPolicyOutput = struct(n0, _PCPO, 0, [], []);
export var PutContainerPolicy = op(
  n0,
  _PCP,
  0,
  () => PutContainerPolicyInput,
  () => PutContainerPolicyOutput
);
