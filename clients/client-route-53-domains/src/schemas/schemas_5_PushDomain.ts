// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _PD, _PDR, _Ta, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Domain";

/* eslint no-var: 0 */

export var PushDomainRequest = struct(n0, _PDR, 0, [_DN, _Ta], [0, 0]);
export var PushDomain = op(
  n0,
  _PD,
  0,
  () => PushDomainRequest,
  () => Unit
);
