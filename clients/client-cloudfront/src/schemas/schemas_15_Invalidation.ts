// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  BatchTooLarge as __BatchTooLarge,
  NoSuchInvalidation as __NoSuchInvalidation,
  TooManyInvalidationsInProgress as __TooManyInvalidationsInProgress,
} from "../models/index";
import {
  _BTL,
  _c,
  _CI,
  _CIFDT,
  _CIFDTR,
  _CIFDTRr,
  _CIR,
  _CIRr,
  _CR,
  _CTre,
  _DI,
  _DTI,
  _e,
  _GI,
  _GIFDT,
  _GIFDTR,
  _GIFDTRe,
  _GIR,
  _GIRe,
  _h,
  _hE,
  _hH,
  _hP,
  _I,
  _IB,
  _Id,
  _In,
  _L,
  _M,
  _NSI,
  _Pa,
  _Pat,
  _PL,
  _Q,
  _S,
  _TMIIP,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchTooLarge = error(
  n0,
  _BTL,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M],
  [0],

  __BatchTooLarge
);
export var CreateInvalidationForDistributionTenantRequest = struct(
  n0,
  _CIFDTR,
  0,
  [_Id, _IB],
  [
    [0, 1],
    [
      () => InvalidationBatch,
      {
        [_xN]: _IB,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateInvalidationForDistributionTenantResult = struct(
  n0,
  _CIFDTRr,
  0,
  [_L, _In],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [() => Invalidation, 16],
  ]
);
export var CreateInvalidationRequest = struct(
  n0,
  _CIR,
  0,
  [_DI, _IB],
  [
    [0, 1],
    [
      () => InvalidationBatch,
      {
        [_xN]: _IB,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateInvalidationResult = struct(
  n0,
  _CIRr,
  0,
  [_L, _In],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [() => Invalidation, 16],
  ]
);
export var GetInvalidationForDistributionTenantRequest = struct(
  n0,
  _GIFDTR,
  0,
  [_DTI, _Id],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetInvalidationForDistributionTenantResult = struct(n0, _GIFDTRe, 0, [_In], [[() => Invalidation, 16]]);
export var GetInvalidationRequest = struct(
  n0,
  _GIR,
  0,
  [_DI, _Id],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetInvalidationResult = struct(n0, _GIRe, 0, [_In], [[() => Invalidation, 16]]);
export var Invalidation = struct(n0, _In, 0, [_Id, _S, _CTre, _IB], [0, 0, 4, [() => InvalidationBatch, 0]]);
export var InvalidationBatch = struct(n0, _IB, 0, [_Pa, _CR], [[() => Paths, 0], 0]);
export var NoSuchInvalidation = error(
  n0,
  _NSI,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchInvalidation
);
export var Paths = struct(n0, _Pa, 0, [_Q, _I], [1, [() => PathList, 0]]);
export var TooManyInvalidationsInProgress = error(
  n0,
  _TMIIP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyInvalidationsInProgress
);
export var PathList = list(n0, _PL, 0, [
  0,
  {
    [_xN]: _Pat,
  },
]);
export var CreateInvalidation = op(
  n0,
  _CI,
  {
    [_h]: ["POST", "/2020-05-31/distribution/{DistributionId}/invalidation", 201],
  },
  () => CreateInvalidationRequest,
  () => CreateInvalidationResult
);
export var CreateInvalidationForDistributionTenant = op(
  n0,
  _CIFDT,
  {
    [_h]: ["POST", "/2020-05-31/distribution-tenant/{Id}/invalidation", 201],
  },
  () => CreateInvalidationForDistributionTenantRequest,
  () => CreateInvalidationForDistributionTenantResult
);
export var GetInvalidation = op(
  n0,
  _GI,
  {
    [_h]: ["GET", "/2020-05-31/distribution/{DistributionId}/invalidation/{Id}", 200],
  },
  () => GetInvalidationRequest,
  () => GetInvalidationResult
);
export var GetInvalidationForDistributionTenant = op(
  n0,
  _GIFDT,
  {
    [_h]: ["GET", "/2020-05-31/distribution-tenant/{DistributionTenantId}/invalidation/{Id}", 200],
  },
  () => GetInvalidationForDistributionTenantRequest,
  () => GetInvalidationForDistributionTenantResult
);
