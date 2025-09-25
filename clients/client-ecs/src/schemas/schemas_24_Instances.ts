// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cIAo, _cl, _fi, _LCI, _LCIR, _LCIRi, _mRa, _nT, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListContainerInstancesRequest = struct(n0, _LCIR, 0, [_cl, _fi, _nT, _mRa, _s], [0, 0, 0, 1, 0]);
export var ListContainerInstancesResponse = struct(n0, _LCIRi, 0, [_cIAo, _nT], [64 | 0, 0]);
export var ListContainerInstances = op(
  n0,
  _LCI,
  0,
  () => ListContainerInstancesRequest,
  () => ListContainerInstancesResponse
);
