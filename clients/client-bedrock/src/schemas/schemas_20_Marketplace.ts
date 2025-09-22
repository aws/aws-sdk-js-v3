// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceUnavailableException as __ServiceUnavailableException } from "../models/index";
import {
  _cA,
  _DMME,
  _DMMEe,
  _DMMER,
  _DMMERe,
  _DMMERer,
  _DMMERere,
  _e,
  _eA,
  _hE,
  _hQ,
  _ht,
  _LMME,
  _LMMER,
  _LMMERi,
  _m,
  _mMEa,
  _MMES,
  _MMESa,
  _mR,
  _mSE,
  _mSI,
  _nT,
  _s,
  _se,
  _sM,
  _SUE,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMarketplaceModelEndpointRequest = struct(n0, _DMMER, 0, [_eA], [[0, 1]]);
export var DeleteMarketplaceModelEndpointResponse = struct(n0, _DMMERe, 0, [], []);
export var DeregisterMarketplaceModelEndpointRequest = struct(n0, _DMMERer, 0, [_eA], [[0, 1]]);
export var DeregisterMarketplaceModelEndpointResponse = struct(n0, _DMMERere, 0, [], []);
export var ListMarketplaceModelEndpointsRequest = struct(
  n0,
  _LMMER,
  0,
  [_mR, _nT, _mSE],
  [
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
    [
      0,
      {
        [_hQ]: _mSI,
      },
    ],
  ]
);
export var ListMarketplaceModelEndpointsResponse = struct(
  n0,
  _LMMERi,
  0,
  [_mMEa, _nT],
  [() => MarketplaceModelEndpointSummaries, 0]
);
export var MarketplaceModelEndpointSummary = struct(n0, _MMES, 0, [_eA, _mSI, _s, _sM, _cA, _uA], [0, 0, 0, 0, 5, 5]);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var MarketplaceModelEndpointSummaries = list(n0, _MMESa, 0, () => MarketplaceModelEndpointSummary);
export var DeleteMarketplaceModelEndpoint = op(
  n0,
  _DMME,
  {
    [_ht]: ["DELETE", "/marketplace-model/endpoints/{endpointArn}", 200],
  },
  () => DeleteMarketplaceModelEndpointRequest,
  () => DeleteMarketplaceModelEndpointResponse
);
export var DeregisterMarketplaceModelEndpoint = op(
  n0,
  _DMMEe,
  {
    [_ht]: ["DELETE", "/marketplace-model/endpoints/{endpointArn}/registration", 200],
  },
  () => DeregisterMarketplaceModelEndpointRequest,
  () => DeregisterMarketplaceModelEndpointResponse
);
export var ListMarketplaceModelEndpoints = op(
  n0,
  _LMME,
  {
    [_ht]: ["GET", "/marketplace-model/endpoints", 200],
  },
  () => ListMarketplaceModelEndpointsRequest,
  () => ListMarketplaceModelEndpointsResponse
);
