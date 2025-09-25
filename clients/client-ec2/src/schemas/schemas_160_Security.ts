// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _ASGIR,
  _ASGIRu,
  _ASGIu,
  _At,
  _CIi,
  _CVP,
  _CVPM,
  _De,
  _DR,
  _dR,
  _DSG,
  _DSGe,
  _DSGR,
  _DSGRe,
  _DSGRes,
  _DSGResc,
  _eQN,
  _Fi,
  _Fil,
  _FP,
  _gD,
  _GIr,
  _gIr,
  _GIro,
  _GN,
  _gN,
  _GNr,
  _GNSL,
  _IPE,
  _iPE,
  _IPpe,
  _iPpe,
  _IPpr,
  _it,
  _MR,
  _MSA,
  _MSAR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _OTp,
  _R,
  _r,
  _Rem,
  _RSGIev,
  _RSGIR,
  _RSGIRe,
  _RSGRe,
  _rSGRS,
  _SG,
  _SGA,
  _sGA,
  _SGe,
  _sGIec,
  _SGL,
  _SGR,
  _SGRD,
  _SGRDe,
  _SGRDL,
  _SGRI,
  _SGRIe,
  _sGRS,
  _SIn,
  _SSGN,
  _SSGOI,
  _T,
  _TP,
  _TS,
  _tS,
  _TSa,
  _UGs,
  _UI,
  _UIP,
  _uIPS,
  _UIs,
  _USGRDE,
  _USGRDER,
  _USGRDERp,
  _USGRDI,
  _USGRDIR,
  _USGRDIRp,
  _VI,
  _vI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  Unit,
} from "./schemas_0";
import { CreateVolumePermissionList, UserIdStringList } from "./schemas_13_Attribute";
import { IpPermissionList, RevokedSecurityGroupRuleList } from "./schemas_149_Security";
import { GroupIdStringList } from "./schemas_162_LaunchTemplate";
import { SecurityGroupRuleIdList, SecurityGroupRuleList } from "./schemas_172_Group";

/* eslint no-var: 0 */

export var AuthorizeSecurityGroupIngressRequest = struct(
  n0,
  _ASGIR,
  0,
  [_CIi, _FP, _GIr, _GN, _IPpe, _IPpr, _SSGN, _SSGOI, _TP, _TS, _DR],
  [
    0,
    1,
    0,
    0,
    [() => IpPermissionList, 0],
    0,
    0,
    0,
    1,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var AuthorizeSecurityGroupIngressResult = struct(
  n0,
  _ASGIRu,
  0,
  [_R, _SGR],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
    [
      () => SecurityGroupRuleList,
      {
        [_eQN]: `SecurityGroupRuleSet`,
        [_xN]: _sGRS,
      },
    ],
  ]
);
export var CreateVolumePermissionModifications = struct(
  n0,
  _CVPM,
  0,
  [_Ad, _Rem],
  [
    [() => CreateVolumePermissionList, 0],
    [() => CreateVolumePermissionList, 0],
  ]
);
export var DeleteSecurityGroupRequest = struct(
  n0,
  _DSGR,
  0,
  [_GIr, _GN, _DR],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DeleteSecurityGroupResult = struct(
  n0,
  _DSGRe,
  0,
  [_R, _GIr],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
  ]
);
export var DescribeSecurityGroupsRequest = struct(
  n0,
  _DSGRes,
  0,
  [_GIro, _GNr, _NTe, _MR, _DR, _Fi],
  [
    [
      () => GroupIdStringList,
      {
        [_xN]: _GIr,
      },
    ],
    [
      () => GroupNameStringList,
      {
        [_xN]: _GN,
      },
    ],
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
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeSecurityGroupsResult = struct(
  n0,
  _DSGResc,
  0,
  [_NTe, _SG],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => SecurityGroupList,
      {
        [_eQN]: `SecurityGroupInfo`,
        [_xN]: _sGIec,
      },
    ],
  ]
);
export var ModifySnapshotAttributeRequest = struct(
  n0,
  _MSAR,
  0,
  [_At, _CVP, _GNr, _OTp, _SIn, _UIs, _DR],
  [
    0,
    [() => CreateVolumePermissionModifications, 0],
    [
      () => GroupNameStringList,
      {
        [_xN]: _UGs,
      },
    ],
    0,
    0,
    [
      () => UserIdStringList,
      {
        [_xN]: _UI,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var RevokeSecurityGroupIngressRequest = struct(
  n0,
  _RSGIR,
  0,
  [_CIi, _FP, _GIr, _GN, _IPpe, _IPpr, _SSGN, _SSGOI, _TP, _SGRI, _DR],
  [
    0,
    1,
    0,
    0,
    [() => IpPermissionList, 0],
    0,
    0,
    0,
    1,
    [
      () => SecurityGroupRuleIdList,
      {
        [_xN]: _SGRIe,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var RevokeSecurityGroupIngressResult = struct(
  n0,
  _RSGIRe,
  0,
  [_R, _UIP, _RSGRe],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
    [
      () => IpPermissionList,
      {
        [_eQN]: `UnknownIpPermissionSet`,
        [_xN]: _uIPS,
      },
    ],
    [
      () => RevokedSecurityGroupRuleList,
      {
        [_eQN]: `RevokedSecurityGroupRuleSet`,
        [_xN]: _rSGRS,
      },
    ],
  ]
);
export var SecurityGroup = struct(
  n0,
  _SGe,
  0,
  [_GIr, _IPE, _T, _VI, _SGA, _OI, _GN, _De, _IPpe],
  [
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      () => IpPermissionList,
      {
        [_eQN]: `IpPermissionsEgress`,
        [_xN]: _iPE,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
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
        [_eQN]: `SecurityGroupArn`,
        [_xN]: _sGA,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupDescription`,
        [_xN]: _gD,
      },
    ],
    [
      () => IpPermissionList,
      {
        [_eQN]: `IpPermissions`,
        [_xN]: _iPpe,
      },
    ],
  ]
);
export var SecurityGroupRuleDescription = struct(n0, _SGRD, 0, [_SGRIe, _De], [0, 0]);
export var UpdateSecurityGroupRuleDescriptionsEgressRequest = struct(
  n0,
  _USGRDER,
  0,
  [_DR, _GIr, _GN, _IPpe, _SGRDe],
  [
    2,
    0,
    0,
    [() => IpPermissionList, 0],
    [
      () => SecurityGroupRuleDescriptionList,
      {
        [_xN]: _SGRD,
      },
    ],
  ]
);
export var UpdateSecurityGroupRuleDescriptionsEgressResult = struct(
  n0,
  _USGRDERp,
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
export var UpdateSecurityGroupRuleDescriptionsIngressRequest = struct(
  n0,
  _USGRDIR,
  0,
  [_DR, _GIr, _GN, _IPpe, _SGRDe],
  [
    2,
    0,
    0,
    [() => IpPermissionList, 0],
    [
      () => SecurityGroupRuleDescriptionList,
      {
        [_xN]: _SGRD,
      },
    ],
  ]
);
export var UpdateSecurityGroupRuleDescriptionsIngressResult = struct(
  n0,
  _USGRDIRp,
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
export var GroupNameStringList = list(n0, _GNSL, 0, [
  0,
  {
    [_xN]: _GN,
  },
]);
export var SecurityGroupList = list(n0, _SGL, 0, [
  () => SecurityGroup,
  {
    [_xN]: _it,
  },
]);
export var SecurityGroupRuleDescriptionList = list(n0, _SGRDL, 0, [
  () => SecurityGroupRuleDescription,
  {
    [_xN]: _it,
  },
]);
export var AuthorizeSecurityGroupIngress = op(
  n0,
  _ASGIu,
  0,
  () => AuthorizeSecurityGroupIngressRequest,
  () => AuthorizeSecurityGroupIngressResult
);
export var DeleteSecurityGroup = op(
  n0,
  _DSG,
  0,
  () => DeleteSecurityGroupRequest,
  () => DeleteSecurityGroupResult
);
export var DescribeSecurityGroups = op(
  n0,
  _DSGe,
  0,
  () => DescribeSecurityGroupsRequest,
  () => DescribeSecurityGroupsResult
);
export var ModifySnapshotAttribute = op(
  n0,
  _MSA,
  0,
  () => ModifySnapshotAttributeRequest,
  () => Unit
);
export var RevokeSecurityGroupIngress = op(
  n0,
  _RSGIev,
  0,
  () => RevokeSecurityGroupIngressRequest,
  () => RevokeSecurityGroupIngressResult
);
export var UpdateSecurityGroupRuleDescriptionsEgress = op(
  n0,
  _USGRDE,
  0,
  () => UpdateSecurityGroupRuleDescriptionsEgressRequest,
  () => UpdateSecurityGroupRuleDescriptionsEgressResult
);
export var UpdateSecurityGroupRuleDescriptionsIngress = op(
  n0,
  _USGRDI,
  0,
  () => UpdateSecurityGroupRuleDescriptionsIngressRequest,
  () => UpdateSecurityGroupRuleDescriptionsIngressResult
);
