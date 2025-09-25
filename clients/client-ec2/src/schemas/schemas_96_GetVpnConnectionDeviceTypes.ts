// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _GVCDT,
  _GVCDTR,
  _GVCDTRe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _Pl,
  _pl,
  _Sof,
  _sof,
  _VCDT,
  _VCDTI,
  _vCDTI,
  _VCDTL,
  _VCDTp,
  _vCDTS,
  _Ven,
  _ven,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetVpnConnectionDeviceTypesRequest = struct(n0, _GVCDTR, 0, [_MR, _NTe, _DR], [1, 0, 2]);
export var GetVpnConnectionDeviceTypesResult = struct(
  n0,
  _GVCDTRe,
  0,
  [_VCDT, _NTe],
  [
    [
      () => VpnConnectionDeviceTypeList,
      {
        [_eQN]: `VpnConnectionDeviceTypeSet`,
        [_xN]: _vCDTS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var VpnConnectionDeviceType = struct(
  n0,
  _VCDTp,
  0,
  [_VCDTI, _Ven, _Pl, _Sof],
  [
    [
      0,
      {
        [_eQN]: `VpnConnectionDeviceTypeId`,
        [_xN]: _vCDTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Vendor`,
        [_xN]: _ven,
      },
    ],
    [
      0,
      {
        [_eQN]: `Platform`,
        [_xN]: _pl,
      },
    ],
    [
      0,
      {
        [_eQN]: `Software`,
        [_xN]: _sof,
      },
    ],
  ]
);
export var VpnConnectionDeviceTypeList = list(n0, _VCDTL, 0, [
  () => VpnConnectionDeviceType,
  {
    [_xN]: _it,
  },
]);
export var GetVpnConnectionDeviceTypes = op(
  n0,
  _GVCDT,
  0,
  () => GetVpnConnectionDeviceTypesRequest,
  () => GetVpnConnectionDeviceTypesResult
);
