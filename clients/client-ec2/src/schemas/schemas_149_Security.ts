// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASGE,
  _ASGER,
  _ASGERu,
  _CIi,
  _cIi,
  _CIid,
  _cIid,
  _CIidr,
  _cIidr,
  _De,
  _de,
  _DR,
  _dR,
  _DSSG,
  _DSSGR,
  _DSSGRe,
  _eQN,
  _FP,
  _fP,
  _GIr,
  _gIr,
  _GN,
  _gN,
  _gr,
  _IE,
  _iEs,
  _IPLp,
  _iPp,
  _IPpe,
  _iPpe,
  _IPper,
  _IPpr,
  _IRLp,
  _IRLpv,
  _IRpa,
  _iRpa,
  _IRpan,
  _IRpv,
  _iRpv,
  _IRpva,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PLI,
  _pLI,
  _PLIL,
  _PLIr,
  _pLIr,
  _PLIS,
  _PSee,
  _pSee,
  _R,
  _r,
  _RGI,
  _rGI,
  _RSGE,
  _RSGER,
  _RSGERe,
  _RSGR,
  _RSGRe,
  _RSGRL,
  _rSGRS,
  _SGR,
  _SGRI,
  _sGRI,
  _SGRIe,
  _sGRS,
  _sIP,
  _SIPE,
  _sIPE,
  _SIPS,
  _SIPt,
  _SIPta,
  _SSG,
  _SSGN,
  _sSGN,
  _SSGOI,
  _sSGOI,
  _SSGS,
  _sSGS,
  _TP,
  _tP,
  _TS,
  _TSa,
  _UI,
  _uI,
  _UIGP,
  _UIGPL,
  _UIGPS,
  _UIGPs,
  _UIP,
  _uIPS,
  _VI,
  _vI,
  _VPCI,
  _vPCI,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";
import { SecurityGroupRuleIdList, SecurityGroupRuleList } from "./schemas_172_Group";

/* eslint no-var: 0 */

export var AuthorizeSecurityGroupEgressRequest = struct(
  n0,
  _ASGER,
  0,
  [_TS, _DR, _GIr, _SSGN, _SSGOI, _IPpr, _FP, _TP, _CIi, _IPpe],
  [
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
        [_eQN]: `SourceSecurityGroupName`,
        [_xN]: _sSGN,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceSecurityGroupOwnerId`,
        [_xN]: _sSGOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpProtocol`,
        [_xN]: _iPp,
      },
    ],
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrIp`,
        [_xN]: _cIi,
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
export var AuthorizeSecurityGroupEgressResult = struct(
  n0,
  _ASGERu,
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
export var DescribeStaleSecurityGroupsRequest = struct(n0, _DSSGR, 0, [_DR, _MR, _NTe, _VI], [2, 1, 0, 0]);
export var DescribeStaleSecurityGroupsResult = struct(
  n0,
  _DSSGRe,
  0,
  [_NTe, _SSGS],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => StaleSecurityGroupSet,
      {
        [_eQN]: `StaleSecurityGroupSet`,
        [_xN]: _sSGS,
      },
    ],
  ]
);
export var IpPermission = struct(
  n0,
  _IPper,
  0,
  [_IPpr, _FP, _TP, _UIGP, _IRpa, _IRpv, _PLIr],
  [
    [
      0,
      {
        [_eQN]: `IpProtocol`,
        [_xN]: _iPp,
      },
    ],
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
    [
      () => UserIdGroupPairList,
      {
        [_eQN]: `Groups`,
        [_xN]: _gr,
      },
    ],
    [
      () => IpRangeList,
      {
        [_eQN]: `IpRanges`,
        [_xN]: _iRpa,
      },
    ],
    [
      () => Ipv6RangeList,
      {
        [_eQN]: `Ipv6Ranges`,
        [_xN]: _iRpv,
      },
    ],
    [
      () => PrefixListIdList,
      {
        [_eQN]: `PrefixListIds`,
        [_xN]: _pLIr,
      },
    ],
  ]
);
export var IpRange = struct(
  n0,
  _IRpan,
  0,
  [_De, _CIi],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrIp`,
        [_xN]: _cIi,
      },
    ],
  ]
);
export var Ipv6Range = struct(
  n0,
  _IRpva,
  0,
  [_De, _CIid],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrIpv6`,
        [_xN]: _cIid,
      },
    ],
  ]
);
export var PrefixListId = struct(
  n0,
  _PLI,
  0,
  [_De, _PLI],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListId`,
        [_xN]: _pLI,
      },
    ],
  ]
);
export var RevokedSecurityGroupRule = struct(
  n0,
  _RSGR,
  0,
  [_SGRIe, _GIr, _IE, _IPpr, _FP, _TP, _CIidr, _CIid, _PLI, _RGI, _De],
  [
    [
      0,
      {
        [_eQN]: `SecurityGroupRuleId`,
        [_xN]: _sGRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsEgress`,
        [_xN]: _iEs,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpProtocol`,
        [_xN]: _iPp,
      },
    ],
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrIpv4`,
        [_xN]: _cIidr,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrIpv6`,
        [_xN]: _cIid,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListId`,
        [_xN]: _pLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReferencedGroupId`,
        [_xN]: _rGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
  ]
);
export var RevokeSecurityGroupEgressRequest = struct(
  n0,
  _RSGER,
  0,
  [_SGRI, _DR, _GIr, _SSGN, _SSGOI, _IPpr, _FP, _TP, _CIi, _IPpe],
  [
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
        [_eQN]: `SourceSecurityGroupName`,
        [_xN]: _sSGN,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceSecurityGroupOwnerId`,
        [_xN]: _sSGOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpProtocol`,
        [_xN]: _iPp,
      },
    ],
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrIp`,
        [_xN]: _cIi,
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
export var RevokeSecurityGroupEgressResult = struct(
  n0,
  _RSGERe,
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
export var StaleIpPermission = struct(
  n0,
  _SIPt,
  0,
  [_FP, _IPpr, _IRpa, _PLIr, _TP, _UIGP],
  [
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpProtocol`,
        [_xN]: _iPp,
      },
    ],
    [
      () => IpRanges,
      {
        [_eQN]: `IpRanges`,
        [_xN]: _iRpa,
      },
    ],
    [
      () => PrefixListIdSet,
      {
        [_eQN]: `PrefixListIds`,
        [_xN]: _pLIr,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
    [
      () => UserIdGroupPairSet,
      {
        [_eQN]: `Groups`,
        [_xN]: _gr,
      },
    ],
  ]
);
export var StaleSecurityGroup = struct(
  n0,
  _SSG,
  0,
  [_De, _GIr, _GN, _SIPta, _SIPE, _VI],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
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
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      () => StaleIpPermissionSet,
      {
        [_eQN]: `StaleIpPermissions`,
        [_xN]: _sIP,
      },
    ],
    [
      () => StaleIpPermissionSet,
      {
        [_eQN]: `StaleIpPermissionsEgress`,
        [_xN]: _sIPE,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var UserIdGroupPair = struct(
  n0,
  _UIGPs,
  0,
  [_De, _UI, _GN, _GIr, _VI, _VPCI, _PSee],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `UserId`,
        [_xN]: _uI,
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
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeeringStatus`,
        [_xN]: _pSee,
      },
    ],
  ]
);
export var IpPermissionList = list(n0, _IPLp, 0, [
  () => IpPermission,
  {
    [_xN]: _it,
  },
]);
export var IpRangeList = list(n0, _IRLp, 0, [
  () => IpRange,
  {
    [_xN]: _it,
  },
]);
export var IpRanges = list(n0, _IRpa, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var Ipv6RangeList = list(n0, _IRLpv, 0, [
  () => Ipv6Range,
  {
    [_xN]: _it,
  },
]);
export var PrefixListIdList = list(n0, _PLIL, 0, [
  () => PrefixListId,
  {
    [_xN]: _it,
  },
]);
export var PrefixListIdSet = list(n0, _PLIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var RevokedSecurityGroupRuleList = list(n0, _RSGRL, 0, [
  () => RevokedSecurityGroupRule,
  {
    [_xN]: _it,
  },
]);
export var StaleIpPermissionSet = list(n0, _SIPS, 0, [
  () => StaleIpPermission,
  {
    [_xN]: _it,
  },
]);
export var StaleSecurityGroupSet = list(n0, _SSGS, 0, [
  () => StaleSecurityGroup,
  {
    [_xN]: _it,
  },
]);
export var UserIdGroupPairList = list(n0, _UIGPL, 0, [
  () => UserIdGroupPair,
  {
    [_xN]: _it,
  },
]);
export var UserIdGroupPairSet = list(n0, _UIGPS, 0, [
  () => UserIdGroupPair,
  {
    [_xN]: _it,
  },
]);
export var AuthorizeSecurityGroupEgress = op(
  n0,
  _ASGE,
  0,
  () => AuthorizeSecurityGroupEgressRequest,
  () => AuthorizeSecurityGroupEgressResult
);
export var DescribeStaleSecurityGroups = op(
  n0,
  _DSSG,
  0,
  () => DescribeStaleSecurityGroupsRequest,
  () => DescribeStaleSecurityGroupsResult
);
export var RevokeSecurityGroupEgress = op(
  n0,
  _RSGE,
  0,
  () => RevokeSecurityGroupEgressRequest,
  () => RevokeSecurityGroupEgressResult
);
