// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDI,
  _cDI,
  _CI,
  _cI,
  _dRIS,
  _hQ,
  _ht,
  _hTE,
  _iI,
  _LDMNI,
  _LDMNIR,
  _LDMNIRi,
  _mR,
  _n,
  _NI,
  _NIe,
  _nIe,
  _nT,
  _OI,
  _oI,
  _oS,
  _pN,
  _pRIS,
  _pV,
  _rMI,
  _ty,
  _uEI,
  _VM,
  _vM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CanInterface = struct(n0, _CI, 0, [_n, _pN, _pV], [0, 0, 0]);
export var CustomDecodingInterface = struct(n0, _CDI, 0, [_n], [0]);
export var ListDecoderManifestNetworkInterfacesRequest = struct(
  n0,
  _LDMNIR,
  0,
  [_n, _nT, _mR],
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
export var ListDecoderManifestNetworkInterfacesResponse = struct(
  n0,
  _LDMNIRi,
  0,
  [_nIe, _nT],
  [() => NetworkInterfaces, 0]
);
export var NetworkInterface = struct(
  n0,
  _NI,
  0,
  [_iI, _ty, _cI, _oI, _vM, _cDI],
  [0, 0, () => CanInterface, () => ObdInterface, () => VehicleMiddleware, () => CustomDecodingInterface]
);
export var ObdInterface = struct(n0, _OI, 0, [_n, _rMI, _oS, _pRIS, _dRIS, _uEI, _hTE], [0, 1, 0, 1, 1, 2, 2]);
export var VehicleMiddleware = struct(n0, _VM, 0, [_n, _pN], [0, 0]);
export var NetworkInterfaces = list(n0, _NIe, 0, () => NetworkInterface);
export var ListDecoderManifestNetworkInterfaces = op(
  n0,
  _LDMNI,
  {
    [_ht]: ["GET", "/decoder-manifests/{name}/network-interfaces", 200],
  },
  () => ListDecoderManifestNetworkInterfacesRequest,
  () => ListDecoderManifestNetworkInterfacesResponse
);
