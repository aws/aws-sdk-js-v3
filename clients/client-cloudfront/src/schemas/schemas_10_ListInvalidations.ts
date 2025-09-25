// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTre,
  _DI,
  _h,
  _hQ,
  _I,
  _Id,
  _IL,
  _ISL,
  _ISn,
  _IT,
  _LI,
  _LIFDT,
  _LIFDTR,
  _LIFDTRi,
  _LIR,
  _LIRi,
  _Ma,
  _MI,
  _NM,
  _Q,
  _S,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidationList = struct(
  n0,
  _IL,
  0,
  [_Ma, _NM, _MI, _IT, _Q, _I],
  [0, 0, 1, 2, 1, [() => InvalidationSummaryList, 0]]
);
export var InvalidationSummary = struct(n0, _ISn, 0, [_Id, _CTre, _S], [0, 4, 0]);
export var ListInvalidationsForDistributionTenantRequest = struct(
  n0,
  _LIFDTR,
  0,
  [_Id, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListInvalidationsForDistributionTenantResult = struct(
  n0,
  _LIFDTRi,
  0,
  [_IL],
  [[() => InvalidationList, 16]]
);
export var ListInvalidationsRequest = struct(
  n0,
  _LIR,
  0,
  [_DI, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListInvalidationsResult = struct(n0, _LIRi, 0, [_IL], [[() => InvalidationList, 16]]);
export var InvalidationSummaryList = list(n0, _ISL, 0, [
  () => InvalidationSummary,
  {
    [_xN]: _ISn,
  },
]);
export var ListInvalidations = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/2020-05-31/distribution/{DistributionId}/invalidation", 200],
  },
  () => ListInvalidationsRequest,
  () => ListInvalidationsResult
);
export var ListInvalidationsForDistributionTenant = op(
  n0,
  _LIFDT,
  {
    [_h]: ["GET", "/2020-05-31/distribution-tenant/{Id}/invalidation", 200],
  },
  () => ListInvalidationsForDistributionTenantRequest,
  () => ListInvalidationsForDistributionTenantResult
);
