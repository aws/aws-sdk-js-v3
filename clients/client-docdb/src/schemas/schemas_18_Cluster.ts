// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InvalidVPCNetworkStateFault as __InvalidVPCNetworkStateFault,
  StorageQuotaExceededFault as __StorageQuotaExceededFault,
} from "../models/index";
import { _aQE, _c, _e, _hE, _IVPCNSF, _m, _SQEFt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

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
export var StorageQuotaExceededFault = error(
  n0,
  _SQEFt,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`StorageQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __StorageQuotaExceededFault
);
