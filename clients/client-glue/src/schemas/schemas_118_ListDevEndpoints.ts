// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEN, _LDE, _LDER, _LDERi, _MRax, _NTe, _Tag, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListDevEndpointsRequest = struct(n0, _LDER, 0, [_NTe, _MRax, _Tag], [0, 1, 128 | 0]);
export var ListDevEndpointsResponse = struct(n0, _LDERi, 0, [_DEN, _NTe], [64 | 0, 0]);
export var DevEndpointNameList = 64 | 0;

export var ListDevEndpoints = op(
  n0,
  _LDE,
  0,
  () => ListDevEndpointsRequest,
  () => ListDevEndpointsResponse
);
