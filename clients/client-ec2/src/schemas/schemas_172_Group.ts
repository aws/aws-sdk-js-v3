// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIid,
  _cIid,
  _CIidr,
  _cIidr,
  _De,
  _de,
  _DR,
  _DSGRescri,
  _DSGRRes,
  _DSGRResc,
  _eQN,
  _Fi,
  _Fil,
  _FP,
  _fP,
  _GIr,
  _gIr,
  _GOI,
  _gOI,
  _IE,
  _iEs,
  _iPp,
  _IPpr,
  _it,
  _MR,
  _MSGR,
  _MSGRR,
  _MSGRRo,
  _NTe,
  _nTe,
  _PLI,
  _pLI,
  _PSee,
  _pSee,
  _R,
  _r,
  _RGI,
  _RGIe,
  _rGIe,
  _RSG,
  _SGR,
  _SGRA,
  _sGRA,
  _SGRe,
  _SGRI,
  _sGRI,
  _SGRIe,
  _SGRIL,
  _SGRL,
  _SGRR,
  _sGRS,
  _SGRU,
  _SGRUL,
  _T,
  _TP,
  _tP,
  _tS,
  _UI,
  _uI,
  _VI,
  _vI,
  _VPCI,
  _vPCI,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSecurityGroupRulesRequest = struct(
  n0,
  _DSGRRes,
  0,
  [_Fi, _SGRI, _DR, _NTe, _MR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => SecurityGroupRuleIdList,
      {
        [_xN]: _SGRIe,
      },
    ],
    2,
    0,
    1,
  ]
);
export var DescribeSecurityGroupRulesResult = struct(
  n0,
  _DSGRResc,
  0,
  [_SGR, _NTe],
  [
    [
      () => SecurityGroupRuleList,
      {
        [_eQN]: `SecurityGroupRuleSet`,
        [_xN]: _sGRS,
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
export var ModifySecurityGroupRulesRequest = struct(
  n0,
  _MSGRR,
  0,
  [_GIr, _SGR, _DR],
  [
    0,
    [
      () => SecurityGroupRuleUpdateList,
      {
        [_xN]: _SGRe,
      },
    ],
    2,
  ]
);
export var ModifySecurityGroupRulesResult = struct(
  n0,
  _MSGRRo,
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
export var ReferencedSecurityGroup = struct(
  n0,
  _RSG,
  0,
  [_GIr, _PSee, _UI, _VI, _VPCI],
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
        [_eQN]: `PeeringStatus`,
        [_xN]: _pSee,
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
  ]
);
export var SecurityGroupRule = struct(
  n0,
  _SGRe,
  0,
  [_SGRIe, _GIr, _GOI, _IE, _IPpr, _FP, _TP, _CIidr, _CIid, _PLI, _RGIe, _De, _T, _SGRA],
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
      0,
      {
        [_eQN]: `GroupOwnerId`,
        [_xN]: _gOI,
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
      () => ReferencedSecurityGroup,
      {
        [_eQN]: `ReferencedGroupInfo`,
        [_xN]: _rGIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
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
        [_eQN]: `SecurityGroupRuleArn`,
        [_xN]: _sGRA,
      },
    ],
  ]
);
export var SecurityGroupRuleRequest = struct(
  n0,
  _SGRR,
  0,
  [_IPpr, _FP, _TP, _CIidr, _CIid, _PLI, _RGI, _De],
  [0, 1, 1, 0, 0, 0, 0, 0]
);
export var SecurityGroupRuleUpdate = struct(n0, _SGRU, 0, [_SGRIe, _SGRe], [0, () => SecurityGroupRuleRequest]);
export var SecurityGroupRuleIdList = list(n0, _SGRIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var SecurityGroupRuleList = list(n0, _SGRL, 0, [
  () => SecurityGroupRule,
  {
    [_xN]: _it,
  },
]);
export var SecurityGroupRuleUpdateList = list(n0, _SGRUL, 0, [
  () => SecurityGroupRuleUpdate,
  {
    [_xN]: _it,
  },
]);
export var DescribeSecurityGroupRules = op(
  n0,
  _DSGRescri,
  0,
  () => DescribeSecurityGroupRulesRequest,
  () => DescribeSecurityGroupRulesResult
);
export var ModifySecurityGroupRules = op(
  n0,
  _MSGR,
  0,
  () => ModifySecurityGroupRulesRequest,
  () => ModifySecurityGroupRulesResult
);
