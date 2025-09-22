// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aGI,
  _aIs,
  _aSt,
  _aT,
  _bP,
  _cI,
  _Co,
  _co,
  _DCe,
  _DCGAi,
  _dCGAi,
  _dCGAir,
  _DCGAL,
  _DCGALi,
  _dCGAPi,
  _DCGAPL,
  _dCGI,
  _dCGi,
  _DCGL,
  _DCOI,
  _DCOIR,
  _DCRe,
  _DDCGAe,
  _DDCGAes,
  _DDCGAPe,
  _DDCGAPRes,
  _DDCGAPResc,
  _DDCGARes,
  _DDCGAResc,
  _DDCGARescr,
  _DDCGARescri,
  _DDCGe,
  _DDCGRes,
  _DDCGResc,
  _DHC,
  _DHCR,
  _DIe,
  _DIRes,
  _DLe,
  _DLRe,
  _iI,
  _IL,
  _In,
  _in,
  _La,
  _la,
  _lI,
  _LL,
  _LVITH,
  _LVITHR,
  _LVITHRi,
  _mR,
  _nT,
  _pI,
  _s,
  _sCE,
  _tI,
  _vGI,
  _vII,
  _vIOA,
  _vIR,
  _vITH,
  _VITHL,
  n0,
} from "./schemas_0";
import { Interconnect } from "./schemas_4_Interconnect";
import { VirtualInterfaceTestHistory } from "./schemas_5_Test";
import { DirectConnectGateway, DirectConnectGatewayAssociation } from "./schemas_8_DirectConnect";
import { ConnectionList, Lag } from "./schemas_9_Describe";
import { DirectConnectGatewayAssociationProposal } from "./schemas_14_DirectConnect";

/* eslint no-var: 0 */

export var Connections = struct(n0, _Co, 0, [_co, _nT], [() => ConnectionList, 0]);
export var DescribeConnectionsOnInterconnectRequest = struct(n0, _DCOIR, 0, [_iI], [0]);
export var DescribeConnectionsRequest = struct(n0, _DCRe, 0, [_cI, _mR, _nT], [0, 1, 0]);
export var DescribeDirectConnectGatewayAssociationProposalsRequest = struct(
  n0,
  _DDCGAPRes,
  0,
  [_dCGI, _pI, _aGI, _mR, _nT],
  [0, 0, 0, 1, 0]
);
export var DescribeDirectConnectGatewayAssociationProposalsResult = struct(
  n0,
  _DDCGAPResc,
  0,
  [_dCGAPi, _nT],
  [() => DirectConnectGatewayAssociationProposalList, 0]
);
export var DescribeDirectConnectGatewayAssociationsRequest = struct(
  n0,
  _DDCGARes,
  0,
  [_aIs, _aGI, _dCGI, _mR, _nT, _vGI],
  [0, 0, 0, 1, 0, 0]
);
export var DescribeDirectConnectGatewayAssociationsResult = struct(
  n0,
  _DDCGAResc,
  0,
  [_dCGAi, _nT],
  [() => DirectConnectGatewayAssociationList, 0]
);
export var DescribeDirectConnectGatewayAttachmentsRequest = struct(
  n0,
  _DDCGARescr,
  0,
  [_dCGI, _vII, _mR, _nT],
  [0, 0, 1, 0]
);
export var DescribeDirectConnectGatewayAttachmentsResult = struct(
  n0,
  _DDCGARescri,
  0,
  [_dCGAir, _nT],
  [() => DirectConnectGatewayAttachmentList, 0]
);
export var DescribeDirectConnectGatewaysRequest = struct(n0, _DDCGRes, 0, [_dCGI, _mR, _nT], [0, 1, 0]);
export var DescribeDirectConnectGatewaysResult = struct(
  n0,
  _DDCGResc,
  0,
  [_dCGi, _nT],
  [() => DirectConnectGatewayList, 0]
);
export var DescribeHostedConnectionsRequest = struct(n0, _DHCR, 0, [_cI, _mR, _nT], [0, 1, 0]);
export var DescribeInterconnectsRequest = struct(n0, _DIRes, 0, [_iI, _mR, _nT], [0, 1, 0]);
export var DescribeLagsRequest = struct(n0, _DLRe, 0, [_lI, _mR, _nT], [0, 1, 0]);
export var DirectConnectGatewayAttachment = struct(
  n0,
  _DCGAi,
  0,
  [_dCGI, _vII, _vIR, _vIOA, _aSt, _aT, _sCE],
  [0, 0, 0, 0, 0, 0, 0]
);
export var Interconnects = struct(n0, _In, 0, [_in, _nT], [() => InterconnectList, 0]);
export var Lags = struct(n0, _La, 0, [_la, _nT], [() => LagList, 0]);
export var ListVirtualInterfaceTestHistoryRequest = struct(
  n0,
  _LVITHR,
  0,
  [_tI, _vII, _bP, _s, _mR, _nT],
  [0, 0, 64 | 0, 0, 1, 0]
);
export var ListVirtualInterfaceTestHistoryResponse = struct(
  n0,
  _LVITHRi,
  0,
  [_vITH, _nT],
  [() => VirtualInterfaceTestHistoryList, 0]
);
export var DirectConnectGatewayAssociationList = list(n0, _DCGAL, 0, () => DirectConnectGatewayAssociation);
export var DirectConnectGatewayAssociationProposalList = list(
  n0,
  _DCGAPL,
  0,
  () => DirectConnectGatewayAssociationProposal
);
export var DirectConnectGatewayAttachmentList = list(n0, _DCGALi, 0, () => DirectConnectGatewayAttachment);
export var DirectConnectGatewayList = list(n0, _DCGL, 0, () => DirectConnectGateway);
export var InterconnectList = list(n0, _IL, 0, () => Interconnect);
export var LagList = list(n0, _LL, 0, () => Lag);
export var VirtualInterfaceTestHistoryList = list(n0, _VITHL, 0, () => VirtualInterfaceTestHistory);
export var DescribeConnections = op(
  n0,
  _DCe,
  0,
  () => DescribeConnectionsRequest,
  () => Connections
);
export var DescribeConnectionsOnInterconnect = op(
  n0,
  _DCOI,
  0,
  () => DescribeConnectionsOnInterconnectRequest,
  () => Connections
);
export var DescribeDirectConnectGatewayAssociationProposals = op(
  n0,
  _DDCGAPe,
  0,
  () => DescribeDirectConnectGatewayAssociationProposalsRequest,
  () => DescribeDirectConnectGatewayAssociationProposalsResult
);
export var DescribeDirectConnectGatewayAssociations = op(
  n0,
  _DDCGAe,
  0,
  () => DescribeDirectConnectGatewayAssociationsRequest,
  () => DescribeDirectConnectGatewayAssociationsResult
);
export var DescribeDirectConnectGatewayAttachments = op(
  n0,
  _DDCGAes,
  0,
  () => DescribeDirectConnectGatewayAttachmentsRequest,
  () => DescribeDirectConnectGatewayAttachmentsResult
);
export var DescribeDirectConnectGateways = op(
  n0,
  _DDCGe,
  0,
  () => DescribeDirectConnectGatewaysRequest,
  () => DescribeDirectConnectGatewaysResult
);
export var DescribeHostedConnections = op(
  n0,
  _DHC,
  0,
  () => DescribeHostedConnectionsRequest,
  () => Connections
);
export var DescribeInterconnects = op(
  n0,
  _DIe,
  0,
  () => DescribeInterconnectsRequest,
  () => Interconnects
);
export var DescribeLags = op(
  n0,
  _DLe,
  0,
  () => DescribeLagsRequest,
  () => Lags
);
export var ListVirtualInterfaceTestHistory = op(
  n0,
  _LVITH,
  0,
  () => ListVirtualInterfaceTestHistoryRequest,
  () => ListVirtualInterfaceTestHistoryResponse
);
