// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CAre, _Ed, _I, _ICS, _ICSI, _ICSL, _LI, _LIR, _LIRi, _MR, _N, _NTe, _St, _UA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IndexConfigurationSummary = struct(n0, _ICS, 0, [_N, _I, _Ed, _CAre, _UA, _St], [0, 0, 0, 4, 4, 0]);
export var ListIndicesRequest = struct(n0, _LIR, 0, [_NTe, _MR], [0, 1]);
export var ListIndicesResponse = struct(n0, _LIRi, 0, [_ICSI, _NTe], [() => IndexConfigurationSummaryList, 0]);
export var IndexConfigurationSummaryList = list(n0, _ICSL, 0, () => IndexConfigurationSummary);
export var ListIndices = op(
  n0,
  _LI,
  0,
  () => ListIndicesRequest,
  () => ListIndicesResponse
);
