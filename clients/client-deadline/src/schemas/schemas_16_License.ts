// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DLE,
  _DLER,
  _DLERe,
  _DMP,
  _DMPR,
  _DMPRe,
  _dNn,
  _end,
  _GLE,
  _GLER,
  _GLERe,
  _h,
  _hQ,
  _lE,
  _lEI,
  _LES,
  _LESi,
  _LLE,
  _LLER,
  _LLERi,
  _LMP,
  _LMPR,
  _LMPRi,
  _mP,
  _mR,
  _nT,
  _pIr,
  _PMP,
  _PMPR,
  _PMPRu,
  _sGI,
  _sIu,
  _sM,
  _st,
  _vI,
  n0,
} from "./schemas_0";
import { MeteredProductSummaryList } from "./schemas_37_Metered";

/* eslint no-var: 0 */

export var DeleteLicenseEndpointRequest = struct(n0, _DLER, 0, [_lEI], [[0, 1]]);
export var DeleteLicenseEndpointResponse = struct(n0, _DLERe, 0, [], []);
export var DeleteMeteredProductRequest = struct(
  n0,
  _DMPR,
  0,
  [_lEI, _pIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMeteredProductResponse = struct(n0, _DMPRe, 0, [], []);
export var GetLicenseEndpointRequest = struct(n0, _GLER, 0, [_lEI], [[0, 1]]);
export var GetLicenseEndpointResponse = struct(
  n0,
  _GLERe,
  0,
  [_lEI, _st, _sM, _vI, _dNn, _sIu, _sGI],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0]
);
export var LicenseEndpointSummary = struct(n0, _LES, 0, [_lEI, _st, _sM, _vI], [0, 0, 0, 0]);
export var ListLicenseEndpointsRequest = struct(
  n0,
  _LLER,
  0,
  [_nT, _mR],
  [
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
export var ListLicenseEndpointsResponse = struct(n0, _LLERi, 0, [_lE, _nT], [() => LicenseEndpointSummaries, 0]);
export var ListMeteredProductsRequest = struct(
  n0,
  _LMPR,
  0,
  [_lEI, _nT, _mR],
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
export var ListMeteredProductsResponse = struct(n0, _LMPRi, 0, [_mP, _nT], [() => MeteredProductSummaryList, 0]);
export var PutMeteredProductRequest = struct(
  n0,
  _PMPR,
  0,
  [_lEI, _pIr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var PutMeteredProductResponse = struct(n0, _PMPRu, 0, [], []);
export var LicenseEndpointSummaries = list(n0, _LESi, 0, () => LicenseEndpointSummary);
export var SecurityGroupIdList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var DeleteLicenseEndpoint = op(
  n0,
  _DLE,
  {
    [_end]: ["management."],
    [_h]: ["DELETE", "/2023-10-12/license-endpoints/{licenseEndpointId}", 200],
  },
  () => DeleteLicenseEndpointRequest,
  () => DeleteLicenseEndpointResponse
);
export var DeleteMeteredProduct = op(
  n0,
  _DMP,
  {
    [_end]: ["management."],
    [_h]: ["DELETE", "/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}", 200],
  },
  () => DeleteMeteredProductRequest,
  () => DeleteMeteredProductResponse
);
export var GetLicenseEndpoint = op(
  n0,
  _GLE,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/license-endpoints/{licenseEndpointId}", 200],
  },
  () => GetLicenseEndpointRequest,
  () => GetLicenseEndpointResponse
);
export var ListLicenseEndpoints = op(
  n0,
  _LLE,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/license-endpoints", 200],
  },
  () => ListLicenseEndpointsRequest,
  () => ListLicenseEndpointsResponse
);
export var ListMeteredProducts = op(
  n0,
  _LMP,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products", 200],
  },
  () => ListMeteredProductsRequest,
  () => ListMeteredProductsResponse
);
export var PutMeteredProduct = op(
  n0,
  _PMP,
  {
    [_end]: ["management."],
    [_h]: ["PUT", "/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}", 200],
  },
  () => PutMeteredProductRequest,
  () => PutMeteredProductResponse
);
