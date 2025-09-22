// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIID,
  _C,
  _cor,
  _cPI,
  _CPU,
  _cT,
  _eLTID,
  _fq,
  _fS,
  _GLC,
  _GLCR,
  _h,
  _ht,
  _IH,
  _iP,
  _ip,
  _l,
  _LC,
  _lD,
  _lIECIID,
  _LIIP,
  _lIIP,
  _mA,
  _mN,
  _n,
  _NI,
  _NIe,
  _OS,
  _pLE,
  _sSID,
  _tITRSM,
  _ULC,
  _ULCR,
  _vWU,
  n0,
} from "./schemas_0";
import { Licensing } from "./schemas_11_LaunchConfiguration";

/* eslint no-var: 0 */

export var CPU = struct(n0, _CPU, 0, [_cor, _mN], [1, 0]);
export var GetLaunchConfigurationRequest = struct(n0, _GLCR, 0, [_sSID], [0]);
export var IdentificationHints = struct(n0, _IH, 0, [_fq, _h, _vWU, _aIID], [0, 0, 0, 0]);
export var LaunchConfiguration = struct(
  n0,
  _LC,
  0,
  [_sSID, _n, _eLTID, _lD, _tITRSM, _cPI, _cT, _l, _pLE, _lIIP],
  [0, 0, 0, 0, 0, 2, 2, () => Licensing, 2, () => LaunchIntoInstanceProperties]
);
export var LaunchIntoInstanceProperties = struct(n0, _LIIP, 0, [_lIECIID], [0]);
export var NetworkInterface = struct(n0, _NI, 0, [_mA, _ip, _iP], [0, 64 | 0, 2]);
export var OS = struct(n0, _OS, 0, [_fS], [0]);
export var UpdateLaunchConfigurationRequest = struct(
  n0,
  _ULCR,
  0,
  [_sSID, _n, _lD, _tITRSM, _cPI, _cT, _l, _pLE, _lIIP],
  [0, 0, 0, 0, 2, 2, () => Licensing, 2, () => LaunchIntoInstanceProperties]
);
export var Cpus = list(n0, _C, 0, () => CPU);
export var IPsList = 64 | 0;

export var NetworkInterfaces = list(n0, _NIe, 0, () => NetworkInterface);
export var GetLaunchConfiguration = op(
  n0,
  _GLC,
  {
    [_ht]: ["POST", "/GetLaunchConfiguration", 200],
  },
  () => GetLaunchConfigurationRequest,
  () => LaunchConfiguration
);
export var UpdateLaunchConfiguration = op(
  n0,
  _ULC,
  {
    [_ht]: ["POST", "/UpdateLaunchConfiguration", 200],
  },
  () => UpdateLaunchConfigurationRequest,
  () => LaunchConfiguration
);
