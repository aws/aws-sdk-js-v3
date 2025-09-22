// smithy-typescript generated code
import { error, list } from "@smithy/core/schema";

import {
  ClusterQuotaForCustomerExceededFault as __ClusterQuotaForCustomerExceededFault,
  InsufficientCacheClusterCapacityFault as __InsufficientCacheClusterCapacityFault,
  InvalidVPCNetworkStateFault as __InvalidVPCNetworkStateFault,
  NodeQuotaForCustomerExceededFault as __NodeQuotaForCustomerExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CQFCEF,
  _e,
  _hE,
  _ICCCF,
  _IVPCNSF,
  _m,
  _NQFCEFo,
  _PAZ,
  _PAZL,
  _POA,
  _POAL,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterQuotaForCustomerExceededFault = error(
  n0,
  _CQFCEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterQuotaForCustomerExceeded`, 400],
  },
  [_m],
  [0],

  __ClusterQuotaForCustomerExceededFault
);
export var InsufficientCacheClusterCapacityFault = error(
  n0,
  _ICCCF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientCacheClusterCapacity`, 400],
  },
  [_m],
  [0],

  __InsufficientCacheClusterCapacityFault
);
export var InvalidVPCNetworkStateFault = error(
  n0,
  _IVPCNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidVPCNetworkStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidVPCNetworkStateFault
);
export var NodeQuotaForCustomerExceededFault = error(
  n0,
  _NQFCEFo,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NodeQuotaForCustomerExceeded`, 400],
  },
  [_m],
  [0],

  __NodeQuotaForCustomerExceededFault
);
export var PreferredAvailabilityZoneList = list(n0, _PAZL, 0, [
  0,
  {
    [_xN]: _PAZ,
  },
]);
export var PreferredOutpostArnList = list(n0, _POAL, 0, [
  0,
  {
    [_xN]: _POA,
  },
]);
