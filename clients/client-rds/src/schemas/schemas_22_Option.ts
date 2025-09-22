// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  OptionGroupAlreadyExistsFault as __OptionGroupAlreadyExistsFault,
  OptionGroupQuotaExceededFault as __OptionGroupQuotaExceededFault,
} from "../models/index";
import {
  _AIp,
  _aQE,
  _AT,
  _AV,
  _AVANVIM,
  _c,
  _COG,
  _COGM,
  _COGMr,
  _COGR,
  _COGr,
  _COGRr,
  _CTop,
  _D,
  _DBSGMec,
  _DOGe,
  _DOGMe,
  _DTa,
  _DV,
  _e,
  _EN,
  _Fi,
  _hE,
  _IC,
  _IM,
  _m,
  _Ma,
  _MEV,
  _MOG,
  _MOGM,
  _MOGR,
  _MR,
  _N,
  _O,
  _OC,
  _OCL,
  _OD,
  _OG,
  _OGA,
  _OGAEF,
  _OGD,
  _OGL,
  _OGN,
  _OGp,
  _OGQEF,
  _OL,
  _ON,
  _Op,
  _OS,
  _OSCL,
  _OSL,
  _OSp,
  _OTI,
  _OTR,
  _OV,
  _P,
  _Pe,
  _Per,
  _SAI,
  _SOG,
  _SOGI,
  _T,
  _TOGD,
  _TOGI,
  _V,
  _VI,
  _VSGM,
  _xN,
  DBSecurityGroupMembershipList,
  FilterList,
  n0,
  TagList,
  VpcSecurityGroupMembershipList,
} from "./schemas_0";
import { DBSecurityGroupNameList } from "./schemas_57_BInstance";
import { VpcSecurityGroupIdList } from "./schemas_75_Instance";

/* eslint no-var: 0 */

export var CopyOptionGroupMessage = struct(n0, _COGM, 0, [_SOGI, _TOGI, _TOGD, _T], [0, 0, 0, [() => TagList, 0]]);
export var CopyOptionGroupResult = struct(n0, _COGR, 0, [_OG], [[() => OptionGroup, 0]]);
export var CreateOptionGroupMessage = struct(
  n0,
  _COGMr,
  0,
  [_OGN, _EN, _MEV, _OGD, _T],
  [0, 0, 0, 0, [() => TagList, 0]]
);
export var CreateOptionGroupResult = struct(n0, _COGRr, 0, [_OG], [[() => OptionGroup, 0]]);
export var DescribeOptionGroupsMessage = struct(
  n0,
  _DOGMe,
  0,
  [_OGN, _Fi, _Ma, _MR, _EN, _MEV],
  [0, [() => FilterList, 0], 0, 1, 0, 0]
);
export var ModifyOptionGroupMessage = struct(
  n0,
  _MOGM,
  0,
  [_OGN, _OTI, _OTR, _AIp],
  [0, [() => OptionConfigurationList, 0], 64 | 0, 2]
);
export var ModifyOptionGroupResult = struct(n0, _MOGR, 0, [_OG], [[() => OptionGroup, 0]]);
export var Option = struct(
  n0,
  _O,
  0,
  [_ON, _OD, _Pe, _Per, _P, _OV, _OS, _DBSGMec, _VSGM],
  [
    0,
    0,
    2,
    2,
    1,
    0,
    [() => OptionSettingConfigurationList, 0],
    [() => DBSecurityGroupMembershipList, 0],
    [() => VpcSecurityGroupMembershipList, 0],
  ]
);
export var OptionConfiguration = struct(
  n0,
  _OC,
  0,
  [_ON, _P, _OV, _DBSGMec, _VSGM, _OS],
  [0, 1, 0, [() => DBSecurityGroupNameList, 0], [() => VpcSecurityGroupIdList, 0], [() => OptionSettingsList, 0]]
);
export var OptionGroup = struct(
  n0,
  _OG,
  0,
  [_OGN, _OGD, _EN, _MEV, _Op, _AVANVIM, _VI, _OGA, _SOG, _SAI, _CTop],
  [0, 0, 0, 0, [() => OptionsList, 0], 2, 0, 0, 0, 0, 4]
);
export var OptionGroupAlreadyExistsFault = error(
  n0,
  _OGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OptionGroupAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __OptionGroupAlreadyExistsFault
);
export var OptionGroupQuotaExceededFault = error(
  n0,
  _OGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OptionGroupQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __OptionGroupQuotaExceededFault
);
export var OptionGroups = struct(n0, _OGp, 0, [_OGL, _Ma], [[() => OptionGroupsList, 0], 0]);
export var OptionSetting = struct(
  n0,
  _OSp,
  0,
  [_N, _V, _DV, _D, _AT, _DTa, _AV, _IM, _IC],
  [0, 0, 0, 0, 0, 0, 0, 2, 2]
);
export var OptionConfigurationList = list(n0, _OCL, 0, [
  () => OptionConfiguration,
  {
    [_xN]: _OC,
  },
]);
export var OptionGroupsList = list(n0, _OGL, 0, [
  () => OptionGroup,
  {
    [_xN]: _OG,
  },
]);
export var OptionNamesList = 64 | 0;

export var OptionSettingConfigurationList = list(n0, _OSCL, 0, [
  () => OptionSetting,
  {
    [_xN]: _OSp,
  },
]);
export var OptionSettingsList = list(n0, _OSL, 0, [
  () => OptionSetting,
  {
    [_xN]: _OSp,
  },
]);
export var OptionsList = list(n0, _OL, 0, [
  () => Option,
  {
    [_xN]: _O,
  },
]);
export var CopyOptionGroup = op(
  n0,
  _COG,
  0,
  () => CopyOptionGroupMessage,
  () => CopyOptionGroupResult
);
export var CreateOptionGroup = op(
  n0,
  _COGr,
  0,
  () => CreateOptionGroupMessage,
  () => CreateOptionGroupResult
);
export var DescribeOptionGroups = op(
  n0,
  _DOGe,
  0,
  () => DescribeOptionGroupsMessage,
  () => OptionGroups
);
export var ModifyOptionGroup = op(
  n0,
  _MOG,
  0,
  () => ModifyOptionGroupMessage,
  () => ModifyOptionGroupResult
);
