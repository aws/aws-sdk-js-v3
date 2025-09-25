// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIEW,
  _AIEWR,
  _AIEWRs,
  _ATs,
  _aTs,
  _CEr,
  _cEr,
  _CIEW,
  _CIEWR,
  _CIEWRr,
  _DHI,
  _DHIe,
  _DHIL,
  _dHIS,
  _DIEW,
  _DIEWe,
  _DIEWi,
  _DIEWR,
  _DIEWRe,
  _DIEWRes,
  _DIEWResc,
  _DIEWRi,
  _DIEWRis,
  _DR,
  _EH,
  _eH,
  _eQN,
  _EWD,
  _eWD,
  _FD,
  _Fi,
  _Fil,
  _IEW,
  _iEW,
  _IEWAR,
  _IEWAT,
  _IEWDR,
  _IEWI,
  _iEWI,
  _IEWIn,
  _IEWIS,
  _IEWn,
  _IEWS,
  _iEWS,
  _IEWSC,
  _IEWSn,
  _iEWSn,
  _IEWTR,
  _IEWTRL,
  _IEWTRR,
  _IEWTRRS,
  _II,
  _IILn,
  _IIn,
  _iIS,
  _it,
  _ITnsta,
  _ITnstan,
  _MIEW,
  _MIEWR,
  _MIEWRo,
  _MR,
  _N,
  _n,
  _NTe,
  _nTe,
  _SH,
  _sH,
  _St,
  _st,
  _SWD,
  _sWD,
  _T,
  _TRi,
  _TRim,
  _tRSi,
  _TS,
  _tS,
  _TSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateInstanceEventWindowRequest = struct(
  n0,
  _AIEWR,
  0,
  [_DR, _IEWI, _ATs],
  [2, 0, [() => InstanceEventWindowAssociationRequest, 0]]
);
export var AssociateInstanceEventWindowResult = struct(
  n0,
  _AIEWRs,
  0,
  [_IEW],
  [
    [
      () => InstanceEventWindow,
      {
        [_eQN]: `InstanceEventWindow`,
        [_xN]: _iEW,
      },
    ],
  ]
);
export var CreateInstanceEventWindowRequest = struct(
  n0,
  _CIEWR,
  0,
  [_DR, _N, _TRi, _CEr, _TS],
  [
    2,
    0,
    [
      () => InstanceEventWindowTimeRangeRequestSet,
      {
        [_xN]: _TRim,
      },
    ],
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateInstanceEventWindowResult = struct(
  n0,
  _CIEWRr,
  0,
  [_IEW],
  [
    [
      () => InstanceEventWindow,
      {
        [_eQN]: `InstanceEventWindow`,
        [_xN]: _iEW,
      },
    ],
  ]
);
export var DeleteInstanceEventWindowRequest = struct(
  n0,
  _DIEWR,
  0,
  [_DR, _FD, _IEWI],
  [
    2,
    2,
    [
      0,
      {
        [_xN]: _IEWI,
      },
    ],
  ]
);
export var DeleteInstanceEventWindowResult = struct(
  n0,
  _DIEWRe,
  0,
  [_IEWS],
  [
    [
      () => InstanceEventWindowStateChange,
      {
        [_eQN]: `InstanceEventWindowState`,
        [_xN]: _iEWS,
      },
    ],
  ]
);
export var DescribeInstanceEventWindowsRequest = struct(
  n0,
  _DIEWRes,
  0,
  [_DR, _IEWIn, _Fi, _MR, _NTe],
  [
    2,
    [
      () => InstanceEventWindowIdSet,
      {
        [_xN]: _IEWI,
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
export var DescribeInstanceEventWindowsResult = struct(
  n0,
  _DIEWResc,
  0,
  [_IEWn, _NTe],
  [
    [
      () => InstanceEventWindowSet,
      {
        [_eQN]: `InstanceEventWindowSet`,
        [_xN]: _iEWSn,
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
export var DisassociateInstanceEventWindowRequest = struct(
  n0,
  _DIEWRi,
  0,
  [_DR, _IEWI, _ATs],
  [2, 0, [() => InstanceEventWindowDisassociationRequest, 0]]
);
export var DisassociateInstanceEventWindowResult = struct(
  n0,
  _DIEWRis,
  0,
  [_IEW],
  [
    [
      () => InstanceEventWindow,
      {
        [_eQN]: `InstanceEventWindow`,
        [_xN]: _iEW,
      },
    ],
  ]
);
export var InstanceEventWindow = struct(
  n0,
  _IEW,
  0,
  [_IEWI, _TRi, _N, _CEr, _ATs, _St, _T],
  [
    [
      0,
      {
        [_eQN]: `InstanceEventWindowId`,
        [_xN]: _iEWI,
      },
    ],
    [
      () => InstanceEventWindowTimeRangeList,
      {
        [_eQN]: `TimeRangeSet`,
        [_xN]: _tRSi,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `CronExpression`,
        [_xN]: _cEr,
      },
    ],
    [
      () => InstanceEventWindowAssociationTarget,
      {
        [_eQN]: `AssociationTarget`,
        [_xN]: _aTs,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var InstanceEventWindowAssociationRequest = struct(
  n0,
  _IEWAR,
  0,
  [_IIn, _ITnsta, _DHI],
  [
    [
      () => InstanceIdList,
      {
        [_xN]: _II,
      },
    ],
    [
      () => TagList,
      {
        [_xN]: _ITnstan,
      },
    ],
    [
      () => DedicatedHostIdList,
      {
        [_xN]: _DHIe,
      },
    ],
  ]
);
export var InstanceEventWindowAssociationTarget = struct(
  n0,
  _IEWAT,
  0,
  [_IIn, _T, _DHI],
  [
    [
      () => InstanceIdList,
      {
        [_eQN]: `InstanceIdSet`,
        [_xN]: _iIS,
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
      () => DedicatedHostIdList,
      {
        [_eQN]: `DedicatedHostIdSet`,
        [_xN]: _dHIS,
      },
    ],
  ]
);
export var InstanceEventWindowDisassociationRequest = struct(
  n0,
  _IEWDR,
  0,
  [_IIn, _ITnsta, _DHI],
  [
    [
      () => InstanceIdList,
      {
        [_xN]: _II,
      },
    ],
    [
      () => TagList,
      {
        [_xN]: _ITnstan,
      },
    ],
    [
      () => DedicatedHostIdList,
      {
        [_xN]: _DHIe,
      },
    ],
  ]
);
export var InstanceEventWindowStateChange = struct(
  n0,
  _IEWSC,
  0,
  [_IEWI, _St],
  [
    [
      0,
      {
        [_eQN]: `InstanceEventWindowId`,
        [_xN]: _iEWI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var InstanceEventWindowTimeRange = struct(
  n0,
  _IEWTR,
  0,
  [_SWD, _SH, _EWD, _EH],
  [
    [
      0,
      {
        [_eQN]: `StartWeekDay`,
        [_xN]: _sWD,
      },
    ],
    [
      1,
      {
        [_eQN]: `StartHour`,
        [_xN]: _sH,
      },
    ],
    [
      0,
      {
        [_eQN]: `EndWeekDay`,
        [_xN]: _eWD,
      },
    ],
    [
      1,
      {
        [_eQN]: `EndHour`,
        [_xN]: _eH,
      },
    ],
  ]
);
export var InstanceEventWindowTimeRangeRequest = struct(n0, _IEWTRR, 0, [_SWD, _SH, _EWD, _EH], [0, 1, 0, 1]);
export var ModifyInstanceEventWindowRequest = struct(
  n0,
  _MIEWR,
  0,
  [_DR, _N, _IEWI, _TRi, _CEr],
  [
    2,
    0,
    0,
    [
      () => InstanceEventWindowTimeRangeRequestSet,
      {
        [_xN]: _TRim,
      },
    ],
    0,
  ]
);
export var ModifyInstanceEventWindowResult = struct(
  n0,
  _MIEWRo,
  0,
  [_IEW],
  [
    [
      () => InstanceEventWindow,
      {
        [_eQN]: `InstanceEventWindow`,
        [_xN]: _iEW,
      },
    ],
  ]
);
export var DedicatedHostIdList = list(n0, _DHIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var InstanceEventWindowIdSet = list(n0, _IEWIS, 0, [
  0,
  {
    [_xN]: _IEWI,
  },
]);
export var InstanceEventWindowSet = list(n0, _IEWSn, 0, [
  () => InstanceEventWindow,
  {
    [_xN]: _it,
  },
]);
export var InstanceEventWindowTimeRangeList = list(n0, _IEWTRL, 0, [
  () => InstanceEventWindowTimeRange,
  {
    [_xN]: _it,
  },
]);
export var InstanceEventWindowTimeRangeRequestSet = list(n0, _IEWTRRS, 0, () => InstanceEventWindowTimeRangeRequest);
export var InstanceIdList = list(n0, _IILn, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var AssociateInstanceEventWindow = op(
  n0,
  _AIEW,
  0,
  () => AssociateInstanceEventWindowRequest,
  () => AssociateInstanceEventWindowResult
);
export var CreateInstanceEventWindow = op(
  n0,
  _CIEW,
  0,
  () => CreateInstanceEventWindowRequest,
  () => CreateInstanceEventWindowResult
);
export var DeleteInstanceEventWindow = op(
  n0,
  _DIEW,
  0,
  () => DeleteInstanceEventWindowRequest,
  () => DeleteInstanceEventWindowResult
);
export var DescribeInstanceEventWindows = op(
  n0,
  _DIEWe,
  0,
  () => DescribeInstanceEventWindowsRequest,
  () => DescribeInstanceEventWindowsResult
);
export var DisassociateInstanceEventWindow = op(
  n0,
  _DIEWi,
  0,
  () => DisassociateInstanceEventWindowRequest,
  () => DisassociateInstanceEventWindowResult
);
export var ModifyInstanceEventWindow = op(
  n0,
  _MIEW,
  0,
  () => ModifyInstanceEventWindowRequest,
  () => ModifyInstanceEventWindowResult
);
