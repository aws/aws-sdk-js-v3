// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _De, _DSL, _EKA, _N, _SItu, _SIu, _USI, _USp, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateStudioInput = struct(n0, _USI, 0, [_SItu, _N, _De, _SIu, _DSL, _EKA], [0, 0, 0, 64 | 0, 0, 0]);
export var SubnetIdList = 64 | 0;

export var UpdateStudio = op(
  n0,
  _USp,
  0,
  () => UpdateStudioInput,
  () => Unit
);
