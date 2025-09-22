// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AEd,
  _AEdd,
  _AF,
  _aF,
  _APLE,
  _APLEd,
  _Ci,
  _CMPL,
  _CMPLR,
  _CMPLRr,
  _CT,
  _CV,
  _De,
  _DMPL,
  _DMPLe,
  _DMPLR,
  _DMPLRe,
  _DMPLRes,
  _DMPLResc,
  _DR,
  _Ent,
  _Entr,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _ME,
  _mE,
  _MMPL,
  _MMPLR,
  _MMPLRo,
  _MPLa,
  _MPLS,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _PL,
  _pL,
  _pLA,
  _PLAr,
  _PLI,
  _pLI,
  _PLIr,
  _PLN,
  _pLN,
  _PLr,
  _pLS,
  _PVr,
  _REem,
  _REemo,
  _RMPLV,
  _RMPLVR,
  _RMPLVRe,
  _RPLE,
  _RPLEe,
  _SMta,
  _sMta,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _ve,
  _Ver,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddPrefixListEntry = struct(n0, _APLE, 0, [_Ci, _De], [0, 0]);
export var CreateManagedPrefixListRequest = struct(
  n0,
  _CMPLR,
  0,
  [_DR, _PLN, _Ent, _ME, _TS, _AF, _CT],
  [
    2,
    0,
    [
      () => AddPrefixListEntries,
      {
        [_xN]: _Entr,
      },
    ],
    1,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    [0, 4],
  ]
);
export var CreateManagedPrefixListResult = struct(
  n0,
  _CMPLRr,
  0,
  [_PL],
  [
    [
      () => ManagedPrefixList,
      {
        [_eQN]: `PrefixList`,
        [_xN]: _pL,
      },
    ],
  ]
);
export var DeleteManagedPrefixListRequest = struct(n0, _DMPLR, 0, [_DR, _PLI], [2, 0]);
export var DeleteManagedPrefixListResult = struct(
  n0,
  _DMPLRe,
  0,
  [_PL],
  [
    [
      () => ManagedPrefixList,
      {
        [_eQN]: `PrefixList`,
        [_xN]: _pL,
      },
    ],
  ]
);
export var DescribeManagedPrefixListsRequest = struct(
  n0,
  _DMPLRes,
  0,
  [_DR, _Fi, _MR, _NTe, _PLIr],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _PLI,
      },
    ],
  ]
);
export var DescribeManagedPrefixListsResult = struct(
  n0,
  _DMPLResc,
  0,
  [_NTe, _PLr],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ManagedPrefixListSet,
      {
        [_eQN]: `PrefixListSet`,
        [_xN]: _pLS,
      },
    ],
  ]
);
export var ManagedPrefixList = struct(
  n0,
  _MPLa,
  0,
  [_PLI, _AF, _St, _SMta, _PLAr, _PLN, _ME, _Ver, _T, _OI],
  [
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
        [_eQN]: `AddressFamily`,
        [_xN]: _aF,
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
        [_eQN]: `StateMessage`,
        [_xN]: _sMta,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListArn`,
        [_xN]: _pLA,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListName`,
        [_xN]: _pLN,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxEntries`,
        [_xN]: _mE,
      },
    ],
    [
      1,
      {
        [_eQN]: `Version`,
        [_xN]: _ve,
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
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
  ]
);
export var ModifyManagedPrefixListRequest = struct(
  n0,
  _MMPLR,
  0,
  [_DR, _PLI, _CV, _PLN, _AEd, _REem, _ME],
  [
    2,
    0,
    1,
    0,
    [
      () => AddPrefixListEntries,
      {
        [_xN]: _AEdd,
      },
    ],
    [
      () => RemovePrefixListEntries,
      {
        [_xN]: _REemo,
      },
    ],
    1,
  ]
);
export var ModifyManagedPrefixListResult = struct(
  n0,
  _MMPLRo,
  0,
  [_PL],
  [
    [
      () => ManagedPrefixList,
      {
        [_eQN]: `PrefixList`,
        [_xN]: _pL,
      },
    ],
  ]
);
export var RemovePrefixListEntry = struct(n0, _RPLE, 0, [_Ci], [0]);
export var RestoreManagedPrefixListVersionRequest = struct(n0, _RMPLVR, 0, [_DR, _PLI, _PVr, _CV], [2, 0, 1, 1]);
export var RestoreManagedPrefixListVersionResult = struct(
  n0,
  _RMPLVRe,
  0,
  [_PL],
  [
    [
      () => ManagedPrefixList,
      {
        [_eQN]: `PrefixList`,
        [_xN]: _pL,
      },
    ],
  ]
);
export var AddPrefixListEntries = list(n0, _APLEd, 0, () => AddPrefixListEntry);
export var ManagedPrefixListSet = list(n0, _MPLS, 0, [
  () => ManagedPrefixList,
  {
    [_xN]: _it,
  },
]);
export var RemovePrefixListEntries = list(n0, _RPLEe, 0, () => RemovePrefixListEntry);
export var CreateManagedPrefixList = op(
  n0,
  _CMPL,
  0,
  () => CreateManagedPrefixListRequest,
  () => CreateManagedPrefixListResult
);
export var DeleteManagedPrefixList = op(
  n0,
  _DMPL,
  0,
  () => DeleteManagedPrefixListRequest,
  () => DeleteManagedPrefixListResult
);
export var DescribeManagedPrefixLists = op(
  n0,
  _DMPLe,
  0,
  () => DescribeManagedPrefixListsRequest,
  () => DescribeManagedPrefixListsResult
);
export var ModifyManagedPrefixList = op(
  n0,
  _MMPL,
  0,
  () => ModifyManagedPrefixListRequest,
  () => ModifyManagedPrefixListResult
);
export var RestoreManagedPrefixListVersion = op(
  n0,
  _RMPLV,
  0,
  () => RestoreManagedPrefixListVersionRequest,
  () => RestoreManagedPrefixListVersionResult
);
