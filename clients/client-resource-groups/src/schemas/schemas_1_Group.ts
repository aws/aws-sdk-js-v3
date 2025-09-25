// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _C, _FRa, _GC, _GCI, _GCL, _GCP, _GPL, _N, _P, _PC, _S, _Ty, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GroupConfiguration = struct(
  n0,
  _GC,
  0,
  [_C, _PC, _S, _FRa],
  [() => GroupConfigurationList, () => GroupConfigurationList, 0, 0]
);
export var GroupConfigurationItem = struct(n0, _GCI, 0, [_Ty, _P], [0, () => GroupParameterList]);
export var GroupConfigurationParameter = struct(n0, _GCP, 0, [_N, _V], [0, 64 | 0]);
export var GroupConfigurationList = list(n0, _GCL, 0, () => GroupConfigurationItem);
export var GroupConfigurationParameterValueList = 64 | 0;

export var GroupParameterList = list(n0, _GPL, 0, () => GroupConfigurationParameter);
