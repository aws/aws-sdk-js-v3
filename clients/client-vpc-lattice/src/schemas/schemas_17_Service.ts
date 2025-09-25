// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aT,
  _cA,
  _DSN,
  _DSNR,
  _DSNRe,
  _GSN,
  _GSNR,
  _GSNRe,
  _h,
  _hQ,
  _i,
  _it,
  _LSNVEA,
  _LSNVEAR,
  _LSNVEARi,
  _lUA,
  _mR,
  _n,
  _nOAS,
  _nOAVPC,
  _nT,
  _sC,
  _sNA,
  _SNEA,
  _sNI,
  _SNVEAL,
  _sta,
  _USN,
  _USNR,
  _USNRp,
  _vEI,
  _vEOI,
  _vIp,
  n0,
} from "./schemas_0";
import { SharingConfig } from "./schemas_7_Service";

/* eslint no-var: 0 */

export var DeleteServiceNetworkRequest = struct(n0, _DSNR, 0, [_sNI], [[0, 1]]);
export var DeleteServiceNetworkResponse = struct(n0, _DSNRe, 0, [], []);
export var GetServiceNetworkRequest = struct(n0, _GSNR, 0, [_sNI], [[0, 1]]);
export var GetServiceNetworkResponse = struct(
  n0,
  _GSNRe,
  0,
  [_i, _n, _cA, _lUA, _a, _aT, _sC, _nOAVPC, _nOAS],
  [0, 0, 5, 5, 0, 0, () => SharingConfig, 1, 1]
);
export var ListServiceNetworkVpcEndpointAssociationsRequest = struct(
  n0,
  _LSNVEAR,
  0,
  [_sNI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sNI,
      },
    ],
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
  ]
);
export var ListServiceNetworkVpcEndpointAssociationsResponse = struct(
  n0,
  _LSNVEARi,
  0,
  [_it, _nT],
  [() => ServiceNetworkVpcEndpointAssociationList, 0]
);
export var ServiceNetworkEndpointAssociation = struct(
  n0,
  _SNEA,
  0,
  [_vEI, _vIp, _vEOI, _i, _sta, _sNA, _cA],
  [0, 0, 0, 0, 0, 0, 5]
);
export var UpdateServiceNetworkRequest = struct(n0, _USNR, 0, [_sNI, _aT], [[0, 1], 0]);
export var UpdateServiceNetworkResponse = struct(n0, _USNRp, 0, [_i, _n, _a, _aT], [0, 0, 0, 0]);
export var ServiceNetworkVpcEndpointAssociationList = list(n0, _SNVEAL, 0, () => ServiceNetworkEndpointAssociation);
export var DeleteServiceNetwork = op(
  n0,
  _DSN,
  {
    [_h]: ["DELETE", "/servicenetworks/{serviceNetworkIdentifier}", 204],
  },
  () => DeleteServiceNetworkRequest,
  () => DeleteServiceNetworkResponse
);
export var GetServiceNetwork = op(
  n0,
  _GSN,
  {
    [_h]: ["GET", "/servicenetworks/{serviceNetworkIdentifier}", 200],
  },
  () => GetServiceNetworkRequest,
  () => GetServiceNetworkResponse
);
export var ListServiceNetworkVpcEndpointAssociations = op(
  n0,
  _LSNVEA,
  {
    [_h]: ["GET", "/servicenetworkvpcendpointassociations", 200],
  },
  () => ListServiceNetworkVpcEndpointAssociationsRequest,
  () => ListServiceNetworkVpcEndpointAssociationsResponse
);
export var UpdateServiceNetwork = op(
  n0,
  _USN,
  {
    [_h]: ["PATCH", "/servicenetworks/{serviceNetworkIdentifier}", 200],
  },
  () => UpdateServiceNetworkRequest,
  () => UpdateServiceNetworkResponse
);
