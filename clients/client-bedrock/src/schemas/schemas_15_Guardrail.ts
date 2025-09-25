// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _CGV,
  _CGVR,
  _CGVRr,
  _cRD,
  _cRT,
  _d,
  _g,
  _GCRD,
  _GD,
  _gI,
  _gIu,
  _GN,
  _gPA,
  _gPIu,
  _GS,
  _GSu,
  _hQ,
  _ht,
  _i,
  _LG,
  _LGR,
  _LGRi,
  _mR,
  _n,
  _nT,
  _s,
  _uA,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GuardrailDescription = sim(n0, _GD, 0, 8);
export var GuardrailName = sim(n0, _GN, 0, 8);
export var CreateGuardrailVersionRequest = struct(
  n0,
  _CGVR,
  0,
  [_gIu, _d, _cRT],
  [
    [0, 1],
    [() => GuardrailDescription, 0],
    [0, 4],
  ]
);
export var CreateGuardrailVersionResponse = struct(n0, _CGVRr, 0, [_gI, _ve], [0, 0]);
export var GuardrailCrossRegionDetails = struct(n0, _GCRD, 0, [_gPIu, _gPA], [0, 0]);
export var GuardrailSummary = struct(
  n0,
  _GS,
  0,
  [_i, _ar, _s, _n, _d, _ve, _cA, _uA, _cRD],
  [0, 0, 0, [() => GuardrailName, 0], [() => GuardrailDescription, 0], 0, 5, 5, () => GuardrailCrossRegionDetails]
);
export var ListGuardrailsRequest = struct(
  n0,
  _LGR,
  0,
  [_gIu, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _gIu,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListGuardrailsResponse = struct(n0, _LGRi, 0, [_g, _nT], [[() => GuardrailSummaries, 0], 0]);
export var GuardrailSummaries = list(n0, _GSu, 0, [() => GuardrailSummary, 0]);
export var CreateGuardrailVersion = op(
  n0,
  _CGV,
  {
    [_ht]: ["POST", "/guardrails/{guardrailIdentifier}", 202],
  },
  () => CreateGuardrailVersionRequest,
  () => CreateGuardrailVersionResponse
);
export var ListGuardrails = op(
  n0,
  _LG,
  {
    [_ht]: ["GET", "/guardrails", 200],
  },
  () => ListGuardrailsRequest,
  () => ListGuardrailsResponse
);
