// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIct,
  _aIS,
  _CFS,
  _cFS,
  _Co,
  _co,
  _DF,
  _DFE,
  _DFEI,
  _DFES,
  _DFH,
  _DFHR,
  _DFHRe,
  _DFIes,
  _DFIRes,
  _DFIResc,
  _DFR,
  _DFRe,
  _DFSI,
  _DFSS,
  _DR,
  _EIv,
  _eIv,
  _eQN,
  _Er,
  _er,
  _ETv,
  _eTv,
  _Fi,
  _FIl,
  _Fil,
  _fIl,
  _FIle,
  _HRE,
  _HRi,
  _hRS,
  _HRSi,
  _it,
  _LET,
  _lET,
  _Me,
  _me,
  _MR,
  _NTe,
  _nTe,
  _PFS,
  _pFS,
  _SFD,
  _sFDS,
  _ST,
  _sT,
  _TI,
  _Ti,
  _ti,
  _UFD,
  _uFDS,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { ActiveInstanceSet } from "./schemas_300_Instances";
import { EventInformation } from "./schemas_324_Describe";

/* eslint no-var: 0 */

export var DeleteFleetError = struct(
  n0,
  _DFE,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DeleteFleetErrorItem = struct(
  n0,
  _DFEI,
  0,
  [_Er, _FIl],
  [
    [
      () => DeleteFleetError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
    [
      0,
      {
        [_eQN]: `FleetId`,
        [_xN]: _fIl,
      },
    ],
  ]
);
export var DeleteFleetsRequest = struct(
  n0,
  _DFR,
  0,
  [_DR, _FIle, _TI],
  [
    2,
    [
      64 | 0,
      {
        [_xN]: _FIl,
      },
    ],
    2,
  ]
);
export var DeleteFleetsResult = struct(
  n0,
  _DFRe,
  0,
  [_SFD, _UFD],
  [
    [
      () => DeleteFleetSuccessSet,
      {
        [_eQN]: `SuccessfulFleetDeletionSet`,
        [_xN]: _sFDS,
      },
    ],
    [
      () => DeleteFleetErrorSet,
      {
        [_eQN]: `UnsuccessfulFleetDeletionSet`,
        [_xN]: _uFDS,
      },
    ],
  ]
);
export var DeleteFleetSuccessItem = struct(
  n0,
  _DFSI,
  0,
  [_CFS, _PFS, _FIl],
  [
    [
      0,
      {
        [_eQN]: `CurrentFleetState`,
        [_xN]: _cFS,
      },
    ],
    [
      0,
      {
        [_eQN]: `PreviousFleetState`,
        [_xN]: _pFS,
      },
    ],
    [
      0,
      {
        [_eQN]: `FleetId`,
        [_xN]: _fIl,
      },
    ],
  ]
);
export var DescribeFleetHistoryRequest = struct(n0, _DFHR, 0, [_DR, _ETv, _MR, _NTe, _FIl, _ST], [2, 0, 1, 0, 0, 4]);
export var DescribeFleetHistoryResult = struct(
  n0,
  _DFHRe,
  0,
  [_HRi, _LET, _NTe, _FIl, _ST],
  [
    [
      () => HistoryRecordSet,
      {
        [_eQN]: `HistoryRecordSet`,
        [_xN]: _hRS,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastEvaluatedTime`,
        [_xN]: _lET,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `FleetId`,
        [_xN]: _fIl,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartTime`,
        [_xN]: _sT,
      },
    ],
  ]
);
export var DescribeFleetInstancesRequest = struct(
  n0,
  _DFIRes,
  0,
  [_DR, _MR, _NTe, _FIl, _Fi],
  [
    2,
    1,
    0,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeFleetInstancesResult = struct(
  n0,
  _DFIResc,
  0,
  [_AIct, _NTe, _FIl],
  [
    [
      () => ActiveInstanceSet,
      {
        [_eQN]: `ActiveInstanceSet`,
        [_xN]: _aIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `FleetId`,
        [_xN]: _fIl,
      },
    ],
  ]
);
export var HistoryRecordEntry = struct(
  n0,
  _HRE,
  0,
  [_EIv, _ETv, _Ti],
  [
    [
      () => EventInformation,
      {
        [_eQN]: `EventInformation`,
        [_xN]: _eIv,
      },
    ],
    [
      0,
      {
        [_eQN]: `EventType`,
        [_xN]: _eTv,
      },
    ],
    [
      4,
      {
        [_eQN]: `Timestamp`,
        [_xN]: _ti,
      },
    ],
  ]
);
export var DeleteFleetErrorSet = list(n0, _DFES, 0, [
  () => DeleteFleetErrorItem,
  {
    [_xN]: _it,
  },
]);
export var DeleteFleetSuccessSet = list(n0, _DFSS, 0, [
  () => DeleteFleetSuccessItem,
  {
    [_xN]: _it,
  },
]);
export var FleetIdSet = 64 | 0;

export var HistoryRecordSet = list(n0, _HRSi, 0, [
  () => HistoryRecordEntry,
  {
    [_xN]: _it,
  },
]);
export var DeleteFleets = op(
  n0,
  _DF,
  0,
  () => DeleteFleetsRequest,
  () => DeleteFleetsResult
);
export var DescribeFleetHistory = op(
  n0,
  _DFH,
  0,
  () => DescribeFleetHistoryRequest,
  () => DescribeFleetHistoryResult
);
export var DescribeFleetInstances = op(
  n0,
  _DFIes,
  0,
  () => DescribeFleetInstancesRequest,
  () => DescribeFleetInstancesResult
);
