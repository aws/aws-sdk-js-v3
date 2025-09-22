// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aAPTDCG,
  _AG,
  _aG,
  _CDCGAP,
  _CDCGAPR,
  _CDCGAPRr,
  _DCGAP,
  _dCGAP,
  _dCGI,
  _dCGOA,
  _DDCGAP,
  _DDCGAPR,
  _DDCGAPRe,
  _eAPTDCG,
  _gI,
  _i,
  _oA,
  _pI,
  _pS,
  _r,
  _rAPTDCG,
  _rAPTDCGe,
  _ty,
  n0,
  RouteFilterPrefixList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatedGateway = struct(n0, _AG, 0, [_i, _ty, _oA, _r], [0, 0, 0, 0]);
export var CreateDirectConnectGatewayAssociationProposalRequest = struct(
  n0,
  _CDCGAPR,
  0,
  [_dCGI, _dCGOA, _gI, _aAPTDCG, _rAPTDCG],
  [0, 0, 0, () => RouteFilterPrefixList, () => RouteFilterPrefixList]
);
export var CreateDirectConnectGatewayAssociationProposalResult = struct(
  n0,
  _CDCGAPRr,
  0,
  [_dCGAP],
  [() => DirectConnectGatewayAssociationProposal]
);
export var DeleteDirectConnectGatewayAssociationProposalRequest = struct(n0, _DDCGAPR, 0, [_pI], [0]);
export var DeleteDirectConnectGatewayAssociationProposalResult = struct(
  n0,
  _DDCGAPRe,
  0,
  [_dCGAP],
  [() => DirectConnectGatewayAssociationProposal]
);
export var DirectConnectGatewayAssociationProposal = struct(
  n0,
  _DCGAP,
  0,
  [_pI, _dCGI, _dCGOA, _pS, _aG, _eAPTDCG, _rAPTDCGe],
  [0, 0, 0, 0, () => AssociatedGateway, () => RouteFilterPrefixList, () => RouteFilterPrefixList]
);
export var CreateDirectConnectGatewayAssociationProposal = op(
  n0,
  _CDCGAP,
  0,
  () => CreateDirectConnectGatewayAssociationProposalRequest,
  () => CreateDirectConnectGatewayAssociationProposalResult
);
export var DeleteDirectConnectGatewayAssociationProposal = op(
  n0,
  _DDCGAP,
  0,
  () => DeleteDirectConnectGatewayAssociationProposalRequest,
  () => DeleteDirectConnectGatewayAssociationProposalResult
);
