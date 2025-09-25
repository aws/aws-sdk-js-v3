// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _Ci,
  _ci,
  _CISG,
  _CISGR,
  _CISGRr,
  _DISGe,
  _DISGRes,
  _DISGResc,
  _hQ,
  _ht,
  _I,
  _i,
  _Inp,
  _inp,
  _ISG,
  _iSG,
  _ISGIn,
  _ISGn,
  _IWR,
  _IWRC,
  _jN,
  _LISG,
  _LISGR,
  _LISGRi,
  _lOISG,
  _lOIWR,
  _lOIWRC,
  _MR,
  _mR,
  _NT,
  _nT,
  _SG,
  _sG,
  _St,
  _st,
  _Ta,
  _ta,
  _UISG,
  _UISGR,
  _UISGRp,
  _WR,
  _wR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInputSecurityGroupRequest = struct(
  n0,
  _CISGR,
  0,
  [_Ta, _WR],
  [
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => __listOfInputWhitelistRuleCidr,
      {
        [_jN]: _wR,
      },
    ],
  ]
);
export var CreateInputSecurityGroupResponse = struct(
  n0,
  _CISGRr,
  0,
  [_SG],
  [
    [
      () => InputSecurityGroup,
      {
        [_jN]: _sG,
      },
    ],
  ]
);
export var DescribeInputSecurityGroupRequest = struct(n0, _DISGRes, 0, [_ISGIn], [[0, 1]]);
export var DescribeInputSecurityGroupResponse = struct(
  n0,
  _DISGResc,
  0,
  [_Ar, _I, _Inp, _St, _Ta, _WR],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _inp,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => __listOfInputWhitelistRule,
      {
        [_jN]: _wR,
      },
    ],
  ]
);
export var InputSecurityGroup = struct(
  n0,
  _ISGn,
  0,
  [_Ar, _I, _Inp, _St, _Ta, _WR],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _inp,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => __listOfInputWhitelistRule,
      {
        [_jN]: _wR,
      },
    ],
  ]
);
export var InputWhitelistRule = struct(
  n0,
  _IWR,
  0,
  [_Ci],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
  ]
);
export var InputWhitelistRuleCidr = struct(
  n0,
  _IWRC,
  0,
  [_Ci],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
  ]
);
export var ListInputSecurityGroupsRequest = struct(
  n0,
  _LISGR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListInputSecurityGroupsResponse = struct(
  n0,
  _LISGRi,
  0,
  [_ISG, _NT],
  [
    [
      () => __listOfInputSecurityGroup,
      {
        [_jN]: _iSG,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var UpdateInputSecurityGroupRequest = struct(
  n0,
  _UISGR,
  0,
  [_ISGIn, _Ta, _WR],
  [
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => __listOfInputWhitelistRuleCidr,
      {
        [_jN]: _wR,
      },
    ],
  ]
);
export var UpdateInputSecurityGroupResponse = struct(
  n0,
  _UISGRp,
  0,
  [_SG],
  [
    [
      () => InputSecurityGroup,
      {
        [_jN]: _sG,
      },
    ],
  ]
);
export var __listOfInputSecurityGroup = list(n0, _lOISG, 0, [() => InputSecurityGroup, 0]);
export var __listOfInputWhitelistRule = list(n0, _lOIWR, 0, [() => InputWhitelistRule, 0]);
export var __listOfInputWhitelistRuleCidr = list(n0, _lOIWRC, 0, [() => InputWhitelistRuleCidr, 0]);
export var CreateInputSecurityGroup = op(
  n0,
  _CISG,
  {
    [_ht]: ["POST", "/prod/inputSecurityGroups", 200],
  },
  () => CreateInputSecurityGroupRequest,
  () => CreateInputSecurityGroupResponse
);
export var DescribeInputSecurityGroup = op(
  n0,
  _DISGe,
  {
    [_ht]: ["GET", "/prod/inputSecurityGroups/{InputSecurityGroupId}", 200],
  },
  () => DescribeInputSecurityGroupRequest,
  () => DescribeInputSecurityGroupResponse
);
export var ListInputSecurityGroups = op(
  n0,
  _LISG,
  {
    [_ht]: ["GET", "/prod/inputSecurityGroups", 200],
  },
  () => ListInputSecurityGroupsRequest,
  () => ListInputSecurityGroupsResponse
);
export var UpdateInputSecurityGroup = op(
  n0,
  _UISG,
  {
    [_ht]: ["PUT", "/prod/inputSecurityGroups/{InputSecurityGroupId}", 200],
  },
  () => UpdateInputSecurityGroupRequest,
  () => UpdateInputSecurityGroupResponse
);
