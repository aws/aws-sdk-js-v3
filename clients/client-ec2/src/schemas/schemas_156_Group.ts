// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASGV,
  _ASGVR,
  _ASGVRs,
  _DR,
  _DSGV,
  _DSGVA,
  _DSGVAR,
  _DSGVARe,
  _DSGVR,
  _DSGVRi,
  _eQN,
  _Fi,
  _Fil,
  _GIr,
  _gIr,
  _GOI,
  _gOI,
  _it,
  _MR,
  _NTe,
  _nTe,
  _SGVA,
  _SGVAe,
  _SGVAL,
  _sGVAS,
  _SRt,
  _sRt,
  _St,
  _st,
  _VI,
  _vI,
  _VOIp,
  _vOIp,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateSecurityGroupVpcRequest = struct(n0, _ASGVR, 0, [_GIr, _VI, _DR], [0, 0, 2]);
export var AssociateSecurityGroupVpcResult = struct(
  n0,
  _ASGVRs,
  0,
  [_St],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var DescribeSecurityGroupVpcAssociationsRequest = struct(
  n0,
  _DSGVAR,
  0,
  [_Fi, _NTe, _MR, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
    2,
  ]
);
export var DescribeSecurityGroupVpcAssociationsResult = struct(
  n0,
  _DSGVARe,
  0,
  [_SGVA, _NTe],
  [
    [
      () => SecurityGroupVpcAssociationList,
      {
        [_eQN]: `SecurityGroupVpcAssociationSet`,
        [_xN]: _sGVAS,
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
export var DisassociateSecurityGroupVpcRequest = struct(n0, _DSGVR, 0, [_GIr, _VI, _DR], [0, 0, 2]);
export var DisassociateSecurityGroupVpcResult = struct(
  n0,
  _DSGVRi,
  0,
  [_St],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var SecurityGroupVpcAssociation = struct(
  n0,
  _SGVAe,
  0,
  [_GIr, _VI, _VOIp, _St, _SRt, _GOI],
  [
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcOwnerId`,
        [_xN]: _vOIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `StateReason`,
        [_xN]: _sRt,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupOwnerId`,
        [_xN]: _gOI,
      },
    ],
  ]
);
export var SecurityGroupVpcAssociationList = list(n0, _SGVAL, 0, [
  () => SecurityGroupVpcAssociation,
  {
    [_xN]: _it,
  },
]);
export var AssociateSecurityGroupVpc = op(
  n0,
  _ASGV,
  0,
  () => AssociateSecurityGroupVpcRequest,
  () => AssociateSecurityGroupVpcResult
);
export var DescribeSecurityGroupVpcAssociations = op(
  n0,
  _DSGVA,
  0,
  () => DescribeSecurityGroupVpcAssociationsRequest,
  () => DescribeSecurityGroupVpcAssociationsResult
);
export var DisassociateSecurityGroupVpc = op(
  n0,
  _DSGV,
  0,
  () => DisassociateSecurityGroupVpcRequest,
  () => DisassociateSecurityGroupVpcResult
);
