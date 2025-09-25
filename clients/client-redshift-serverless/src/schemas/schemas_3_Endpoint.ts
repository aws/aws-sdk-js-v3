// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ad,
  _aZ,
  _CEA,
  _CEAR,
  _CEARr,
  _DEA,
  _DEAR,
  _DEARe,
  _EA,
  _eA,
  _EAL,
  _eCT,
  _eN,
  _en,
  _end,
  _eS,
  _GEA,
  _GEAR,
  _GEARe,
  _hQ,
  _iA,
  _LEA,
  _LEAR,
  _LEARi,
  _mR,
  _NI,
  _nIet,
  _nII,
  _NIL,
  _nT,
  _oA,
  _pIA,
  _po,
  _sI,
  _sIu,
  _st,
  _UEA,
  _UEAR,
  _UEARp,
  _vEI,
  _VEp,
  _vEp,
  _vI,
  _vSG,
  _vSGI,
  _vSGIp,
  _VSGM,
  _VSGML,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEndpointAccessRequest = struct(n0, _CEAR, 0, [_eN, _sI, _wN, _vSGI, _oA], [0, 64 | 0, 0, 64 | 0, 0]);
export var CreateEndpointAccessResponse = struct(n0, _CEARr, 0, [_en], [() => EndpointAccess]);
export var DeleteEndpointAccessRequest = struct(n0, _DEAR, 0, [_eN], [0]);
export var DeleteEndpointAccessResponse = struct(n0, _DEARe, 0, [_en], [() => EndpointAccess]);
export var EndpointAccess = struct(
  n0,
  _EA,
  0,
  [_eN, _eS, _wN, _eCT, _po, _ad, _sI, _vSG, _vEp, _eA],
  [0, 0, 0, 5, 1, 0, 64 | 0, () => VpcSecurityGroupMembershipList, () => VpcEndpoint, 0]
);
export var GetEndpointAccessRequest = struct(n0, _GEAR, 0, [_eN], [0]);
export var GetEndpointAccessResponse = struct(n0, _GEARe, 0, [_en], [() => EndpointAccess]);
export var ListEndpointAccessRequest = struct(
  n0,
  _LEAR,
  0,
  [_nT, _mR, _wN, _vI, _oA],
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
    0,
    0,
    0,
  ]
);
export var ListEndpointAccessResponse = struct(n0, _LEARi, 0, [_nT, _end], [0, () => EndpointAccessList]);
export var NetworkInterface = struct(n0, _NI, 0, [_nII, _sIu, _pIA, _aZ, _iA], [0, 0, 0, 0, 0]);
export var UpdateEndpointAccessRequest = struct(n0, _UEAR, 0, [_eN, _vSGI], [0, 64 | 0]);
export var UpdateEndpointAccessResponse = struct(n0, _UEARp, 0, [_en], [() => EndpointAccess]);
export var VpcEndpoint = struct(n0, _VEp, 0, [_vEI, _vI, _nIet], [0, 0, () => NetworkInterfaceList]);
export var VpcSecurityGroupMembership = struct(n0, _VSGM, 0, [_vSGIp, _st], [0, 0]);
export var EndpointAccessList = list(n0, _EAL, 0, () => EndpointAccess);
export var NetworkInterfaceList = list(n0, _NIL, 0, () => NetworkInterface);
export var SubnetIdList = 64 | 0;

export var VpcSecurityGroupIdList = 64 | 0;

export var VpcSecurityGroupMembershipList = list(n0, _VSGML, 0, () => VpcSecurityGroupMembership);
export var CreateEndpointAccess = op(
  n0,
  _CEA,
  2,
  () => CreateEndpointAccessRequest,
  () => CreateEndpointAccessResponse
);
export var DeleteEndpointAccess = op(
  n0,
  _DEA,
  2,
  () => DeleteEndpointAccessRequest,
  () => DeleteEndpointAccessResponse
);
export var GetEndpointAccess = op(
  n0,
  _GEA,
  0,
  () => GetEndpointAccessRequest,
  () => GetEndpointAccessResponse
);
export var ListEndpointAccess = op(
  n0,
  _LEA,
  0,
  () => ListEndpointAccessRequest,
  () => ListEndpointAccessResponse
);
export var UpdateEndpointAccess = op(
  n0,
  _UEA,
  0,
  () => UpdateEndpointAccessRequest,
  () => UpdateEndpointAccessResponse
);
