// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidSubnetException as __InvalidSubnetException } from "../models/index";
import { _aQE, _c, _e, _hE, _IAT, _ISEn, _LBAo, _M, _SIAT, _SIATI, _SIATO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidSubnetException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSubnet`, 400],
  },
  [_M],
  [0],

  __InvalidSubnetException
);
export var SetIpAddressTypeInput = struct(n0, _SIATI, 0, [_LBAo, _IAT], [0, 0]);
export var SetIpAddressTypeOutput = struct(n0, _SIATO, 0, [_IAT], [0]);
export var SetIpAddressType = op(
  n0,
  _SIAT,
  0,
  () => SetIpAddressTypeInput,
  () => SetIpAddressTypeOutput
);
