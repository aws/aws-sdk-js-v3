// smithy-typescript generated code
import { error, list } from "@smithy/core/schema";

import {
  InvalidVPCNetworkStateFault as __InvalidVPCNetworkStateFault,
  OptionGroupNotFoundFault as __OptionGroupNotFoundFault,
  StorageQuotaExceededFault as __StorageQuotaExceededFault,
  StorageTypeNotSupportedFault as __StorageTypeNotSupportedFault,
} from "../models/index";
import { _aQE, _c, _e, _hE, _IVPCNSF, _m, _OGNFF, _SQEFt, _STNSF, _VSGIL, _VSGIp, _xN, n0 } from "./schemas_0";

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
export var OptionGroupNotFoundFault = error(
  n0,
  _OGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`OptionGroupNotFoundFault`, 404],
  },
  [_m],
  [0],

  __OptionGroupNotFoundFault
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
export var StorageTypeNotSupportedFault = error(
  n0,
  _STNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`StorageTypeNotSupported`, 400],
  },
  [_m],
  [0],

  __StorageTypeNotSupportedFault
);
export var VpcSecurityGroupIdList = list(n0, _VSGIL, 0, [
  0,
  {
    [_xN]: _VSGIp,
  },
]);
