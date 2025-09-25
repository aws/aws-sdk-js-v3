// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARAs,
  _aRAs,
  _ARAss,
  _aRAss,
  _ARTI,
  _ARTId,
  _ASGI,
  _ASGId,
  _ASId,
  _ASIdd,
  _AVEC,
  _AVECR,
  _AVECRc,
  _CE,
  _CGI,
  _CNA,
  _CNAo,
  _CNo,
  _cNo,
  _CRR,
  _CRr,
  _CRRr,
  _CT,
  _cT,
  _CTMT,
  _CTMTR,
  _CTMTRr,
  _CVECN,
  _CVECNR,
  _CVECNRr,
  _DCB,
  _dCB,
  _DE,
  _De,
  _dE,
  _DICB,
  _dICB,
  _DOn,
  _DPLI,
  _DR,
  _dR,
  _DVE,
  _DVEA,
  _DVEAR,
  _DVEARe,
  _DVEe,
  _DVER,
  _DVERe,
  _DVERes,
  _DVEResc,
  _EOIGI,
  _eOIGI,
  _eQN,
  _FCa,
  _fCa,
  _Fi,
  _Fil,
  _FR,
  _fR,
  _GI,
  _gI,
  _GLBEI,
  _I,
  _i,
  _IAT,
  _II,
  _iI,
  _it,
  _LGI,
  _LToc,
  _MR,
  _MVEo,
  _MVER,
  _MVERo,
  _NGI,
  _nGI,
  _NII,
  _nII,
  _NLBA,
  _NTe,
  _nTe,
  _ONA,
  _PDE,
  _PDEr,
  _pDEr,
  _PDo,
  _R,
  _r,
  _RCGA,
  _rCGA,
  _RP,
  _RRe,
  _RRR,
  _RRTI,
  _RRTIe,
  _RSGI,
  _RSGIe,
  _RSIe,
  _RSIem,
  _RTI,
  _rTI,
  _RVEC,
  _RVECR,
  _RVECRe,
  _SC,
  _SCu,
  _SIe,
  _SNA,
  _sNA,
  _SNN,
  _sNN,
  _T,
  _TGI,
  _TMT,
  _tMT,
  _TS,
  _tS,
  _TSa,
  _U,
  _u,
  _VEA,
  _VEAp,
  _VEAS,
  _vEAS,
  _VEI,
  _vEI,
  _VEIL,
  _VEIp,
  _VEp,
  _vESp,
  _VESpcn,
  _VPCI,
  _vPCI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  Unit,
  ValueStringList,
} from "./schemas_0";
import {
  DnsOptionsSpecification,
  SubnetConfigurationsList,
  VpcEndpoint,
  VpcEndpointRouteTableIdList,
  VpcEndpointSecurityGroupIdList,
  VpcEndpointSubnetIdList,
} from "./schemas_28_Endpoint";
import { UnsuccessfulItemSet } from "./schemas_54_Vpc";
import { ConnectionNotification } from "./schemas_175_VpcEndpoint";
import { DnsEntry } from "./schemas_235_Vpc";
import { TrafficMirrorTarget } from "./schemas_274_TrafficMirror";

/* eslint no-var: 0 */

export var AcceptVpcEndpointConnectionsRequest = struct(
  n0,
  _AVECR,
  0,
  [_DR, _SIe, _VEI],
  [
    2,
    0,
    [
      () => VpcEndpointIdList,
      {
        [_xN]: _VEIp,
      },
    ],
  ]
);
export var AcceptVpcEndpointConnectionsResult = struct(
  n0,
  _AVECRc,
  0,
  [_U],
  [
    [
      () => UnsuccessfulItemSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var CreateRouteRequest = struct(
  n0,
  _CRR,
  0,
  [_DPLI, _VEIp, _TGI, _LGI, _CGI, _CNA, _ONA, _DR, _RTI, _DCB, _GI, _DICB, _EOIGI, _II, _NII, _VPCI, _NGI],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `GatewayId`,
        [_xN]: _gI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationIpv6CidrBlock`,
        [_xN]: _dICB,
      },
    ],
    [
      0,
      {
        [_eQN]: `EgressOnlyInternetGatewayId`,
        [_xN]: _eOIGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
  ]
);
export var CreateRouteResult = struct(
  n0,
  _CRRr,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var CreateTrafficMirrorTargetRequest = struct(
  n0,
  _CTMTR,
  0,
  [_NII, _NLBA, _De, _TS, _DR, _CT, _GLBEI],
  [
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
    [0, 4],
    0,
  ]
);
export var CreateTrafficMirrorTargetResult = struct(
  n0,
  _CTMTRr,
  0,
  [_TMT, _CT],
  [
    [
      () => TrafficMirrorTarget,
      {
        [_eQN]: `TrafficMirrorTarget`,
        [_xN]: _tMT,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var CreateVpcEndpointConnectionNotificationRequest = struct(
  n0,
  _CVECNR,
  0,
  [_DR, _SIe, _VEIp, _CNAo, _CE, _CT],
  [2, 0, 0, 0, [() => ValueStringList, 0], 0]
);
export var CreateVpcEndpointConnectionNotificationResult = struct(
  n0,
  _CVECNRr,
  0,
  [_CNo, _CT],
  [
    [
      () => ConnectionNotification,
      {
        [_eQN]: `ConnectionNotification`,
        [_xN]: _cNo,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var DeleteVpcEndpointsRequest = struct(
  n0,
  _DVER,
  0,
  [_DR, _VEI],
  [
    2,
    [
      () => VpcEndpointIdList,
      {
        [_xN]: _VEIp,
      },
    ],
  ]
);
export var DeleteVpcEndpointsResult = struct(
  n0,
  _DVERe,
  0,
  [_U],
  [
    [
      () => UnsuccessfulItemSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var DescribeVpcEndpointAssociationsRequest = struct(
  n0,
  _DVEAR,
  0,
  [_DR, _VEI, _Fi, _MR, _NTe],
  [
    2,
    [
      () => VpcEndpointIdList,
      {
        [_xN]: _VEIp,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeVpcEndpointAssociationsResult = struct(
  n0,
  _DVEARe,
  0,
  [_VEA, _NTe],
  [
    [
      () => VpcEndpointAssociationSet,
      {
        [_eQN]: `VpcEndpointAssociationSet`,
        [_xN]: _vEAS,
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
export var DescribeVpcEndpointsRequest = struct(
  n0,
  _DVERes,
  0,
  [_DR, _VEI, _Fi, _MR, _NTe],
  [
    2,
    [
      () => VpcEndpointIdList,
      {
        [_xN]: _VEIp,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeVpcEndpointsResult = struct(
  n0,
  _DVEResc,
  0,
  [_VEp, _NTe],
  [
    [
      () => VpcEndpointSet,
      {
        [_eQN]: `VpcEndpointSet`,
        [_xN]: _vESp,
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
export var ModifyVpcEndpointRequest = struct(
  n0,
  _MVER,
  0,
  [_DR, _VEIp, _RP, _PDo, _ARTI, _RRTI, _ASId, _RSIe, _ASGI, _RSGI, _IAT, _DOn, _PDE, _SC],
  [
    2,
    0,
    2,
    0,
    [
      () => VpcEndpointRouteTableIdList,
      {
        [_xN]: _ARTId,
      },
    ],
    [
      () => VpcEndpointRouteTableIdList,
      {
        [_xN]: _RRTIe,
      },
    ],
    [
      () => VpcEndpointSubnetIdList,
      {
        [_xN]: _ASIdd,
      },
    ],
    [
      () => VpcEndpointSubnetIdList,
      {
        [_xN]: _RSIem,
      },
    ],
    [
      () => VpcEndpointSecurityGroupIdList,
      {
        [_xN]: _ASGId,
      },
    ],
    [
      () => VpcEndpointSecurityGroupIdList,
      {
        [_xN]: _RSGIe,
      },
    ],
    0,
    () => DnsOptionsSpecification,
    2,
    [
      () => SubnetConfigurationsList,
      {
        [_xN]: _SCu,
      },
    ],
  ]
);
export var ModifyVpcEndpointResult = struct(
  n0,
  _MVERo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var RejectVpcEndpointConnectionsRequest = struct(
  n0,
  _RVECR,
  0,
  [_DR, _SIe, _VEI],
  [
    2,
    0,
    [
      () => VpcEndpointIdList,
      {
        [_xN]: _VEIp,
      },
    ],
  ]
);
export var RejectVpcEndpointConnectionsResult = struct(
  n0,
  _RVECRe,
  0,
  [_U],
  [
    [
      () => UnsuccessfulItemSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var ReplaceRouteRequest = struct(
  n0,
  _RRR,
  0,
  [_DPLI, _VEIp, _LToc, _TGI, _LGI, _CGI, _CNA, _ONA, _DR, _RTI, _DCB, _GI, _DICB, _EOIGI, _II, _NII, _VPCI, _NGI],
  [
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `GatewayId`,
        [_xN]: _gI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationIpv6CidrBlock`,
        [_xN]: _dICB,
      },
    ],
    [
      0,
      {
        [_eQN]: `EgressOnlyInternetGatewayId`,
        [_xN]: _eOIGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
  ]
);
export var VpcEndpointAssociation = struct(
  n0,
  _VEAp,
  0,
  [_I, _VEIp, _SNA, _SNN, _ARAs, _FR, _FCa, _DE, _PDEr, _ARAss, _RCGA, _T],
  [
    [
      0,
      {
        [_eQN]: `Id`,
        [_xN]: _i,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcEndpointId`,
        [_xN]: _vEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceNetworkArn`,
        [_xN]: _sNA,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceNetworkName`,
        [_xN]: _sNN,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociatedResourceAccessibility`,
        [_xN]: _aRAs,
      },
    ],
    [
      0,
      {
        [_eQN]: `FailureReason`,
        [_xN]: _fR,
      },
    ],
    [
      0,
      {
        [_eQN]: `FailureCode`,
        [_xN]: _fCa,
      },
    ],
    [
      () => DnsEntry,
      {
        [_eQN]: `DnsEntry`,
        [_xN]: _dE,
      },
    ],
    [
      () => DnsEntry,
      {
        [_eQN]: `PrivateDnsEntry`,
        [_xN]: _pDEr,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociatedResourceArn`,
        [_xN]: _aRAss,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceConfigurationGroupArn`,
        [_xN]: _rCGA,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var VpcEndpointAssociationSet = list(n0, _VEAS, 0, [
  () => VpcEndpointAssociation,
  {
    [_xN]: _it,
  },
]);
export var VpcEndpointIdList = list(n0, _VEIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VpcEndpointSet = list(n0, _VESpcn, 0, [
  () => VpcEndpoint,
  {
    [_xN]: _it,
  },
]);
export var AcceptVpcEndpointConnections = op(
  n0,
  _AVEC,
  0,
  () => AcceptVpcEndpointConnectionsRequest,
  () => AcceptVpcEndpointConnectionsResult
);
export var CreateRoute = op(
  n0,
  _CRr,
  0,
  () => CreateRouteRequest,
  () => CreateRouteResult
);
export var CreateTrafficMirrorTarget = op(
  n0,
  _CTMT,
  0,
  () => CreateTrafficMirrorTargetRequest,
  () => CreateTrafficMirrorTargetResult
);
export var CreateVpcEndpointConnectionNotification = op(
  n0,
  _CVECN,
  0,
  () => CreateVpcEndpointConnectionNotificationRequest,
  () => CreateVpcEndpointConnectionNotificationResult
);
export var DeleteVpcEndpoints = op(
  n0,
  _DVE,
  0,
  () => DeleteVpcEndpointsRequest,
  () => DeleteVpcEndpointsResult
);
export var DescribeVpcEndpointAssociations = op(
  n0,
  _DVEA,
  0,
  () => DescribeVpcEndpointAssociationsRequest,
  () => DescribeVpcEndpointAssociationsResult
);
export var DescribeVpcEndpoints = op(
  n0,
  _DVEe,
  0,
  () => DescribeVpcEndpointsRequest,
  () => DescribeVpcEndpointsResult
);
export var ModifyVpcEndpoint = op(
  n0,
  _MVEo,
  0,
  () => ModifyVpcEndpointRequest,
  () => ModifyVpcEndpointResult
);
export var RejectVpcEndpointConnections = op(
  n0,
  _RVEC,
  0,
  () => RejectVpcEndpointConnectionsRequest,
  () => RejectVpcEndpointConnectionsResult
);
export var ReplaceRoute = op(
  n0,
  _RRe,
  0,
  () => ReplaceRouteRequest,
  () => Unit
);
