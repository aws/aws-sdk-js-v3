// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _CS, _CSL, _cT, _eN, _ent, _h, _hQ, _i, _LC, _LCR, _LCRi, _mR, _n, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ComponentSummary = struct(n0, _CS, 0, [_aI, _eN, _i, _n, _cT], [0, 0, 0, 0, 0]);
export var ListComponentsRequest = struct(
  n0,
  _LCR,
  0,
  [_aI, _eN, _nT, _mR],
  [
    [0, 1],
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
export var ListComponentsResponse = struct(n0, _LCRi, 0, [_ent, _nT], [() => ComponentSummaryList, 0]);
export var ComponentSummaryList = list(n0, _CSL, 0, () => ComponentSummary);
export var ListComponents = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/components", 200],
  },
  () => ListComponentsRequest,
  () => ListComponentsResponse
);
