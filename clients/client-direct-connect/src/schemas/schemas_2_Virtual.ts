// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aDV,
  _aF,
  _aK,
  _aL,
  _aLDI,
  _APVI,
  _APVIl,
  _APVIR,
  _APVIRl,
  _aSA,
  _ATVI,
  _ATVIR,
  _ATVIRl,
  _AVI,
  _AVIR,
  _BGPP,
  _BGPPL,
  _bP,
  _bPI,
  _bPS,
  _bS,
  _cA,
  _CBGPP,
  _CBGPPR,
  _CBGPPRr,
  _cI,
  _CPVIr,
  _CPVIre,
  _CPVIRr,
  _CPVIRre,
  _cRC,
  _CTVIr,
  _CTVIRr,
  _CTVIRre,
  _DBGPP,
  _DBGPPR,
  _DBGPPRe,
  _dCGI,
  _DVIe,
  _DVIRes,
  _eSL,
  _jFC,
  _l,
  _mR,
  _mt,
  _NBGPP,
  _nBGPP,
  _NPVI,
  _nPVI,
  _NPVIA,
  _nPVIA,
  _NPVIAe,
  _nPVIAe,
  _NPVIe,
  _nPVIe,
  _nT,
  _NTVI,
  _nTVI,
  _NTVIA,
  _nTVIA,
  _oA,
  _r,
  _rFP,
  _sLE,
  _t,
  _UVIA,
  _UVIAR,
  _v,
  _vGI,
  _VI,
  _vI,
  _VIi,
  _vII,
  _vIi,
  _VIL,
  _vIN,
  _vIS,
  _vITi,
  n0,
  RouteFilterPrefixList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllocatePrivateVirtualInterfaceRequest = struct(
  n0,
  _APVIR,
  0,
  [_cI, _oA, _nPVIA],
  [0, 0, () => NewPrivateVirtualInterfaceAllocation]
);
export var AllocatePublicVirtualInterfaceRequest = struct(
  n0,
  _APVIRl,
  0,
  [_cI, _oA, _nPVIAe],
  [0, 0, () => NewPublicVirtualInterfaceAllocation]
);
export var AllocateTransitVirtualInterfaceRequest = struct(
  n0,
  _ATVIR,
  0,
  [_cI, _oA, _nTVIA],
  [0, 0, () => NewTransitVirtualInterfaceAllocation]
);
export var AllocateTransitVirtualInterfaceResult = struct(n0, _ATVIRl, 0, [_vI], [() => VirtualInterface]);
export var AssociateVirtualInterfaceRequest = struct(n0, _AVIR, 0, [_vII, _cI], [0, 0]);
export var BGPPeer = struct(
  n0,
  _BGPP,
  0,
  [_bPI, _a, _aL, _aK, _aF, _aA, _cA, _bPS, _bS, _aDV, _aLDI],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var CreateBGPPeerRequest = struct(n0, _CBGPPR, 0, [_vII, _nBGPP], [0, () => NewBGPPeer]);
export var CreateBGPPeerResponse = struct(n0, _CBGPPRr, 0, [_vI], [() => VirtualInterface]);
export var CreatePrivateVirtualInterfaceRequest = struct(
  n0,
  _CPVIRr,
  0,
  [_cI, _nPVI],
  [0, () => NewPrivateVirtualInterface]
);
export var CreatePublicVirtualInterfaceRequest = struct(
  n0,
  _CPVIRre,
  0,
  [_cI, _nPVIe],
  [0, () => NewPublicVirtualInterface]
);
export var CreateTransitVirtualInterfaceRequest = struct(
  n0,
  _CTVIRr,
  0,
  [_cI, _nTVI],
  [0, () => NewTransitVirtualInterface]
);
export var CreateTransitVirtualInterfaceResult = struct(n0, _CTVIRre, 0, [_vI], [() => VirtualInterface]);
export var DeleteBGPPeerRequest = struct(n0, _DBGPPR, 0, [_vII, _a, _aL, _cA, _bPI], [0, 1, 1, 0, 0]);
export var DeleteBGPPeerResponse = struct(n0, _DBGPPRe, 0, [_vI], [() => VirtualInterface]);
export var DescribeVirtualInterfacesRequest = struct(n0, _DVIRes, 0, [_cI, _vII, _mR, _nT], [0, 0, 1, 0]);
export var NewBGPPeer = struct(n0, _NBGPP, 0, [_a, _aL, _aK, _aF, _aA, _cA], [1, 1, 0, 0, 0, 0]);
export var NewPrivateVirtualInterface = struct(
  n0,
  _NPVI,
  0,
  [_vIN, _v, _a, _aL, _mt, _aK, _aA, _cA, _aF, _vGI, _dCGI, _t, _eSL],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, () => TagList, 2]
);
export var NewPrivateVirtualInterfaceAllocation = struct(
  n0,
  _NPVIA,
  0,
  [_vIN, _v, _a, _aL, _mt, _aK, _aA, _aF, _cA, _t],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, () => TagList]
);
export var NewPublicVirtualInterface = struct(
  n0,
  _NPVIe,
  0,
  [_vIN, _v, _a, _aL, _aK, _aA, _cA, _aF, _rFP, _t],
  [0, 1, 1, 1, 0, 0, 0, 0, () => RouteFilterPrefixList, () => TagList]
);
export var NewPublicVirtualInterfaceAllocation = struct(
  n0,
  _NPVIAe,
  0,
  [_vIN, _v, _a, _aL, _aK, _aA, _cA, _aF, _rFP, _t],
  [0, 1, 1, 1, 0, 0, 0, 0, () => RouteFilterPrefixList, () => TagList]
);
export var NewTransitVirtualInterface = struct(
  n0,
  _NTVI,
  0,
  [_vIN, _v, _a, _aL, _mt, _aK, _aA, _cA, _aF, _dCGI, _t, _eSL],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, () => TagList, 2]
);
export var NewTransitVirtualInterfaceAllocation = struct(
  n0,
  _NTVIA,
  0,
  [_vIN, _v, _a, _aL, _mt, _aK, _aA, _cA, _aF, _t],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, () => TagList]
);
export var UpdateVirtualInterfaceAttributesRequest = struct(n0, _UVIAR, 0, [_vII, _mt, _eSL, _vIN], [0, 1, 2, 0]);
export var VirtualInterface = struct(
  n0,
  _VI,
  0,
  [
    _oA,
    _vII,
    _l,
    _cI,
    _vITi,
    _vIN,
    _v,
    _a,
    _aL,
    _aSA,
    _aK,
    _aA,
    _cA,
    _aF,
    _vIS,
    _cRC,
    _mt,
    _jFC,
    _vGI,
    _dCGI,
    _rFP,
    _bP,
    _r,
    _aDV,
    _aLDI,
    _t,
    _sLE,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    () => RouteFilterPrefixList,
    () => BGPPeerList,
    0,
    0,
    0,
    () => TagList,
    2,
  ]
);
export var VirtualInterfaces = struct(n0, _VIi, 0, [_vIi, _nT], [() => VirtualInterfaceList, 0]);
export var BGPPeerList = list(n0, _BGPPL, 0, () => BGPPeer);
export var VirtualInterfaceList = list(n0, _VIL, 0, () => VirtualInterface);
export var AllocatePrivateVirtualInterface = op(
  n0,
  _APVI,
  0,
  () => AllocatePrivateVirtualInterfaceRequest,
  () => VirtualInterface
);
export var AllocatePublicVirtualInterface = op(
  n0,
  _APVIl,
  0,
  () => AllocatePublicVirtualInterfaceRequest,
  () => VirtualInterface
);
export var AllocateTransitVirtualInterface = op(
  n0,
  _ATVI,
  0,
  () => AllocateTransitVirtualInterfaceRequest,
  () => AllocateTransitVirtualInterfaceResult
);
export var AssociateVirtualInterface = op(
  n0,
  _AVI,
  0,
  () => AssociateVirtualInterfaceRequest,
  () => VirtualInterface
);
export var CreateBGPPeer = op(
  n0,
  _CBGPP,
  0,
  () => CreateBGPPeerRequest,
  () => CreateBGPPeerResponse
);
export var CreatePrivateVirtualInterface = op(
  n0,
  _CPVIr,
  0,
  () => CreatePrivateVirtualInterfaceRequest,
  () => VirtualInterface
);
export var CreatePublicVirtualInterface = op(
  n0,
  _CPVIre,
  0,
  () => CreatePublicVirtualInterfaceRequest,
  () => VirtualInterface
);
export var CreateTransitVirtualInterface = op(
  n0,
  _CTVIr,
  0,
  () => CreateTransitVirtualInterfaceRequest,
  () => CreateTransitVirtualInterfaceResult
);
export var DeleteBGPPeer = op(
  n0,
  _DBGPP,
  0,
  () => DeleteBGPPeerRequest,
  () => DeleteBGPPeerResponse
);
export var DescribeVirtualInterfaces = op(
  n0,
  _DVIe,
  0,
  () => DescribeVirtualInterfacesRequest,
  () => VirtualInterfaces
);
export var UpdateVirtualInterfaceAttributes = op(
  n0,
  _UVIA,
  0,
  () => UpdateVirtualInterfaceAttributesRequest,
  () => VirtualInterface
);
