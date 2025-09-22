// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aAPTDCG,
  _ACN,
  _aCN,
  _ADCGAP,
  _ADCGAPR,
  _ADCGAPRc,
  _aG,
  _aGOA,
  _aI,
  _aIs,
  _aPTDCG,
  _aS,
  _aSA,
  _CDCG,
  _CDCGA,
  _CDCGAR,
  _CDCGARr,
  _CDCGR,
  _CDCGRr,
  _DCG,
  _dCG,
  _DCGA,
  _dCGA,
  _dCGI,
  _dCGN,
  _dCGOA,
  _dCGS,
  _DDCG,
  _DDCGA,
  _DDCGAR,
  _DDCGARe,
  _DDCGR,
  _DDCGRe,
  _gI,
  _i,
  _nDCGN,
  _oA,
  _oAPTDCG,
  _pI,
  _rAPTDCG,
  _sCE,
  _t,
  _UDCG,
  _UDCGA,
  _UDCGAR,
  _UDCGARp,
  _UDCGR,
  _UDCGRp,
  _vGI,
  _vGOA,
  _vGR,
  n0,
  RouteFilterPrefixList,
  TagList,
} from "./schemas_0";
import { AssociatedGateway } from "./schemas_14_DirectConnect";

/* eslint no-var: 0 */

export var AcceptDirectConnectGatewayAssociationProposalRequest = struct(
  n0,
  _ADCGAPR,
  0,
  [_dCGI, _pI, _aGOA, _oAPTDCG],
  [0, 0, 0, () => RouteFilterPrefixList]
);
export var AcceptDirectConnectGatewayAssociationProposalResult = struct(
  n0,
  _ADCGAPRc,
  0,
  [_dCGA],
  [() => DirectConnectGatewayAssociation]
);
export var AssociatedCoreNetwork = struct(n0, _ACN, 0, [_i, _oA, _aI], [0, 0, 0]);
export var CreateDirectConnectGatewayAssociationRequest = struct(
  n0,
  _CDCGAR,
  0,
  [_dCGI, _gI, _aAPTDCG, _vGI],
  [0, 0, () => RouteFilterPrefixList, 0]
);
export var CreateDirectConnectGatewayAssociationResult = struct(
  n0,
  _CDCGARr,
  0,
  [_dCGA],
  [() => DirectConnectGatewayAssociation]
);
export var CreateDirectConnectGatewayRequest = struct(n0, _CDCGR, 0, [_dCGN, _t, _aSA], [0, () => TagList, 1]);
export var CreateDirectConnectGatewayResult = struct(n0, _CDCGRr, 0, [_dCG], [() => DirectConnectGateway]);
export var DeleteDirectConnectGatewayAssociationRequest = struct(n0, _DDCGAR, 0, [_aIs, _dCGI, _vGI], [0, 0, 0]);
export var DeleteDirectConnectGatewayAssociationResult = struct(
  n0,
  _DDCGARe,
  0,
  [_dCGA],
  [() => DirectConnectGatewayAssociation]
);
export var DeleteDirectConnectGatewayRequest = struct(n0, _DDCGR, 0, [_dCGI], [0]);
export var DeleteDirectConnectGatewayResult = struct(n0, _DDCGRe, 0, [_dCG], [() => DirectConnectGateway]);
export var DirectConnectGateway = struct(
  n0,
  _DCG,
  0,
  [_dCGI, _dCGN, _aSA, _oA, _dCGS, _sCE, _t],
  [0, 0, 1, 0, 0, 0, () => TagList]
);
export var DirectConnectGatewayAssociation = struct(
  n0,
  _DCGA,
  0,
  [_dCGI, _dCGOA, _aS, _sCE, _aG, _aIs, _aPTDCG, _aCN, _vGI, _vGR, _vGOA],
  [0, 0, 0, 0, () => AssociatedGateway, 0, () => RouteFilterPrefixList, () => AssociatedCoreNetwork, 0, 0, 0]
);
export var UpdateDirectConnectGatewayAssociationRequest = struct(
  n0,
  _UDCGAR,
  0,
  [_aIs, _aAPTDCG, _rAPTDCG],
  [0, () => RouteFilterPrefixList, () => RouteFilterPrefixList]
);
export var UpdateDirectConnectGatewayAssociationResult = struct(
  n0,
  _UDCGARp,
  0,
  [_dCGA],
  [() => DirectConnectGatewayAssociation]
);
export var UpdateDirectConnectGatewayRequest = struct(n0, _UDCGR, 0, [_dCGI, _nDCGN], [0, 0]);
export var UpdateDirectConnectGatewayResponse = struct(n0, _UDCGRp, 0, [_dCG], [() => DirectConnectGateway]);
export var AcceptDirectConnectGatewayAssociationProposal = op(
  n0,
  _ADCGAP,
  0,
  () => AcceptDirectConnectGatewayAssociationProposalRequest,
  () => AcceptDirectConnectGatewayAssociationProposalResult
);
export var CreateDirectConnectGateway = op(
  n0,
  _CDCG,
  0,
  () => CreateDirectConnectGatewayRequest,
  () => CreateDirectConnectGatewayResult
);
export var CreateDirectConnectGatewayAssociation = op(
  n0,
  _CDCGA,
  0,
  () => CreateDirectConnectGatewayAssociationRequest,
  () => CreateDirectConnectGatewayAssociationResult
);
export var DeleteDirectConnectGateway = op(
  n0,
  _DDCG,
  0,
  () => DeleteDirectConnectGatewayRequest,
  () => DeleteDirectConnectGatewayResult
);
export var DeleteDirectConnectGatewayAssociation = op(
  n0,
  _DDCGA,
  0,
  () => DeleteDirectConnectGatewayAssociationRequest,
  () => DeleteDirectConnectGatewayAssociationResult
);
export var UpdateDirectConnectGateway = op(
  n0,
  _UDCG,
  0,
  () => UpdateDirectConnectGatewayRequest,
  () => UpdateDirectConnectGatewayResponse
);
export var UpdateDirectConnectGatewayAssociation = op(
  n0,
  _UDCGA,
  0,
  () => UpdateDirectConnectGatewayAssociationRequest,
  () => UpdateDirectConnectGatewayAssociationResult
);
