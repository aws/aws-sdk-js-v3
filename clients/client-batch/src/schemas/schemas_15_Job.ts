// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _CRL,
  _cRL,
  _cRo,
  _CRP,
  _cRP,
  _CRR,
  _f,
  _ht,
  _j,
  _jA,
  _jDA,
  _jN,
  _jQA,
  _jS,
  _LJBCR,
  _LJBCRFL,
  _LJBCRR,
  _LJBCRRi,
  _LJBCRS,
  _LJBCRSL,
  _mR,
  _nT,
  _q,
  _sA,
  _sI,
  _sR,
  n0,
} from "./schemas_0";
import { KeyValuesPair } from "./schemas_4_List";

/* eslint no-var: 0 */

export var ConsumableResourceProperties = struct(n0, _CRP, 0, [_cRL], [() => ConsumableResourceList]);
export var ConsumableResourceRequirement = struct(n0, _CRR, 0, [_cRo, _q], [0, 1]);
export var ListJobsByConsumableResourceRequest = struct(
  n0,
  _LJBCRR,
  0,
  [_cRo, _f, _mR, _nT],
  [0, () => ListJobsByConsumableResourceFilterList, 1, 0]
);
export var ListJobsByConsumableResourceResponse = struct(
  n0,
  _LJBCRRi,
  0,
  [_j, _nT],
  [() => ListJobsByConsumableResourceSummaryList, 0]
);
export var ListJobsByConsumableResourceSummary = struct(
  n0,
  _LJBCRS,
  0,
  [_jA, _jQA, _jN, _jDA, _sI, _jS, _q, _sR, _sA, _cA, _cRP],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, () => ConsumableResourceProperties]
);
export var ConsumableResourceList = list(n0, _CRL, 0, () => ConsumableResourceRequirement);
export var ListJobsByConsumableResourceFilterList = list(n0, _LJBCRFL, 0, () => KeyValuesPair);
export var ListJobsByConsumableResourceSummaryList = list(n0, _LJBCRSL, 0, () => ListJobsByConsumableResourceSummary);
export var ListJobsByConsumableResource = op(
  n0,
  _LJBCR,
  {
    [_ht]: ["POST", "/v1/listjobsbyconsumableresource", 200],
  },
  () => ListJobsByConsumableResourceRequest,
  () => ListJobsByConsumableResourceResponse
);
