// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _h, _hQ, _II, _LMR, _LMT, _LPA, _LPAR, _LPARi, _mR, _MRa, _N, _NT, _nT, _PAS, _PASL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListPredefinedAttributesRequest = struct(
  n0,
  _LPAR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListPredefinedAttributesResponse = struct(
  n0,
  _LPARi,
  0,
  [_NT, _PASL],
  [0, () => PredefinedAttributeSummaryList]
);
export var PredefinedAttributeSummary = struct(n0, _PAS, 0, [_N, _LMT, _LMR], [0, 4, 0]);
export var PredefinedAttributeSummaryList = list(n0, _PASL, 0, () => PredefinedAttributeSummary);
export var ListPredefinedAttributes = op(
  n0,
  _LPA,
  {
    [_h]: ["GET", "/predefined-attributes/{InstanceId}", 200],
  },
  () => ListPredefinedAttributesRequest,
  () => ListPredefinedAttributesResponse
);
