// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ar, _L, _LPES, _LPESR, _LPESRi, _N, _NP, _NT, _PES, _PESa, _PESL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListPartnerEventSourcesRequest = struct(n0, _LPESR, 0, [_NP, _NT, _L], [0, 0, 1]);
export var ListPartnerEventSourcesResponse = struct(n0, _LPESRi, 0, [_PES, _NT], [() => PartnerEventSourceList, 0]);
export var PartnerEventSource = struct(n0, _PESa, 0, [_Ar, _N], [0, 0]);
export var PartnerEventSourceList = list(n0, _PESL, 0, () => PartnerEventSource);
export var ListPartnerEventSources = op(
  n0,
  _LPES,
  0,
  () => ListPartnerEventSourcesRequest,
  () => ListPartnerEventSourcesResponse
);
