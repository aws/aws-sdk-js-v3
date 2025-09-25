// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADRFRV,
  _aDRFRV,
  _AEFLCLTRV,
  _aEFLCLTRV,
  _AEFLVTRCL,
  _aEFLVTRCL,
  _APCO,
  _aPCO,
  _DR,
  _dR,
  _DVPC,
  _DVPCe,
  _DVPCR,
  _DVPCRe,
  _DVPCRes,
  _DVPCResc,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _MVPCO,
  _MVPCOR,
  _MVPCORo,
  _NTe,
  _nTe,
  _PCO,
  _PCOR,
  _R,
  _r,
  _RPCO,
  _rPCO,
  _RVPC,
  _RVPCR,
  _RVPCRe,
  _VPCI,
  _vPCI,
  _VPCIL,
  _VPCIp,
  _VPCL,
  _VPCp,
  _vPCS,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { VpcPeeringConnection } from "./schemas_3_Peering";

/* eslint no-var: 0 */

export var DeleteVpcPeeringConnectionRequest = struct(
  n0,
  _DVPCR,
  0,
  [_DR, _VPCI],
  [
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
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
  ]
);
export var DeleteVpcPeeringConnectionResult = struct(
  n0,
  _DVPCRe,
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
export var DescribeVpcPeeringConnectionsRequest = struct(
  n0,
  _DVPCRes,
  0,
  [_NTe, _MR, _DR, _VPCIp, _Fi],
  [
    0,
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => VpcPeeringConnectionIdList,
      {
        [_xN]: _VPCI,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeVpcPeeringConnectionsResult = struct(
  n0,
  _DVPCResc,
  0,
  [_VPCp, _NTe],
  [
    [
      () => VpcPeeringConnectionList,
      {
        [_eQN]: `VpcPeeringConnectionSet`,
        [_xN]: _vPCS,
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
export var ModifyVpcPeeringConnectionOptionsRequest = struct(
  n0,
  _MVPCOR,
  0,
  [_APCO, _DR, _RPCO, _VPCI],
  [() => PeeringConnectionOptionsRequest, 2, () => PeeringConnectionOptionsRequest, 0]
);
export var ModifyVpcPeeringConnectionOptionsResult = struct(
  n0,
  _MVPCORo,
  0,
  [_APCO, _RPCO],
  [
    [
      () => PeeringConnectionOptions,
      {
        [_eQN]: `AccepterPeeringConnectionOptions`,
        [_xN]: _aPCO,
      },
    ],
    [
      () => PeeringConnectionOptions,
      {
        [_eQN]: `RequesterPeeringConnectionOptions`,
        [_xN]: _rPCO,
      },
    ],
  ]
);
export var PeeringConnectionOptions = struct(
  n0,
  _PCO,
  0,
  [_ADRFRV, _AEFLCLTRV, _AEFLVTRCL],
  [
    [
      2,
      {
        [_eQN]: `AllowDnsResolutionFromRemoteVpc`,
        [_xN]: _aDRFRV,
      },
    ],
    [
      2,
      {
        [_eQN]: `AllowEgressFromLocalClassicLinkToRemoteVpc`,
        [_xN]: _aEFLCLTRV,
      },
    ],
    [
      2,
      {
        [_eQN]: `AllowEgressFromLocalVpcToRemoteClassicLink`,
        [_xN]: _aEFLVTRCL,
      },
    ],
  ]
);
export var PeeringConnectionOptionsRequest = struct(n0, _PCOR, 0, [_ADRFRV, _AEFLCLTRV, _AEFLVTRCL], [2, 2, 2]);
export var RejectVpcPeeringConnectionRequest = struct(
  n0,
  _RVPCR,
  0,
  [_DR, _VPCI],
  [
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
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
  ]
);
export var RejectVpcPeeringConnectionResult = struct(
  n0,
  _RVPCRe,
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
export var VpcPeeringConnectionIdList = list(n0, _VPCIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VpcPeeringConnectionList = list(n0, _VPCL, 0, [
  () => VpcPeeringConnection,
  {
    [_xN]: _it,
  },
]);
export var DeleteVpcPeeringConnection = op(
  n0,
  _DVPC,
  0,
  () => DeleteVpcPeeringConnectionRequest,
  () => DeleteVpcPeeringConnectionResult
);
export var DescribeVpcPeeringConnections = op(
  n0,
  _DVPCe,
  0,
  () => DescribeVpcPeeringConnectionsRequest,
  () => DescribeVpcPeeringConnectionsResult
);
export var ModifyVpcPeeringConnectionOptions = op(
  n0,
  _MVPCO,
  0,
  () => ModifyVpcPeeringConnectionOptionsRequest,
  () => ModifyVpcPeeringConnectionOptionsResult
);
export var RejectVpcPeeringConnection = op(
  n0,
  _RVPC,
  0,
  () => RejectVpcPeeringConnectionRequest,
  () => RejectVpcPeeringConnectionResult
);
