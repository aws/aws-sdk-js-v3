// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIct,
  _aIS,
  _Co,
  _co,
  _CSFR,
  _CSFRE,
  _CSFREI,
  _CSFRES,
  _CSFRR,
  _CSFRRa,
  _CSFRS,
  _cSFRS,
  _CSFRSI,
  _CSFRSS,
  _DR,
  _dR,
  _DSFI,
  _DSFIR,
  _DSFIRe,
  _DSFRH,
  _DSFRHR,
  _DSFRHRe,
  _EIv,
  _eIv,
  _eQN,
  _Er,
  _er,
  _ETv,
  _eTv,
  _HRi,
  _HRis,
  _hRS,
  _it,
  _LET,
  _lET,
  _Me,
  _me,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _PSFRS,
  _pSFRS,
  _SFR,
  _SFRI,
  _sFRI,
  _SFRIL,
  _SFRIp,
  _sFRS,
  _ST,
  _sT,
  _TI,
  _Ti,
  _tI,
  _ti,
  _UFR,
  _uFRS,
  _xN,
  n0,
} from "./schemas_0";
import { ActiveInstanceSet } from "./schemas_300_Instances";
import { EventInformation } from "./schemas_324_Describe";

/* eslint no-var: 0 */

export var CancelSpotFleetRequestsError = struct(
  n0,
  _CSFRE,
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
export var CancelSpotFleetRequestsErrorItem = struct(
  n0,
  _CSFREI,
  0,
  [_Er, _SFRI],
  [
    [
      () => CancelSpotFleetRequestsError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
  ]
);
export var CancelSpotFleetRequestsRequest = struct(
  n0,
  _CSFRR,
  0,
  [_DR, _SFRIp, _TI],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => SpotFleetRequestIdList,
      {
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
    [
      2,
      {
        [_eQN]: `TerminateInstances`,
        [_xN]: _tI,
      },
    ],
  ]
);
export var CancelSpotFleetRequestsResponse = struct(
  n0,
  _CSFRRa,
  0,
  [_SFR, _UFR],
  [
    [
      () => CancelSpotFleetRequestsSuccessSet,
      {
        [_eQN]: `SuccessfulFleetRequestSet`,
        [_xN]: _sFRS,
      },
    ],
    [
      () => CancelSpotFleetRequestsErrorSet,
      {
        [_eQN]: `UnsuccessfulFleetRequestSet`,
        [_xN]: _uFRS,
      },
    ],
  ]
);
export var CancelSpotFleetRequestsSuccessItem = struct(
  n0,
  _CSFRSI,
  0,
  [_CSFRS, _PSFRS, _SFRI],
  [
    [
      0,
      {
        [_eQN]: `CurrentSpotFleetRequestState`,
        [_xN]: _cSFRS,
      },
    ],
    [
      0,
      {
        [_eQN]: `PreviousSpotFleetRequestState`,
        [_xN]: _pSFRS,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
  ]
);
export var DescribeSpotFleetInstancesRequest = struct(
  n0,
  _DSFIR,
  0,
  [_DR, _SFRI, _NTe, _MR],
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
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
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
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeSpotFleetInstancesResponse = struct(
  n0,
  _DSFIRe,
  0,
  [_AIct, _NTe, _SFRI],
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
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
  ]
);
export var DescribeSpotFleetRequestHistoryRequest = struct(
  n0,
  _DSFRHR,
  0,
  [_DR, _SFRI, _ETv, _ST, _NTe, _MR],
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
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
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
        [_eQN]: `StartTime`,
        [_xN]: _sT,
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
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeSpotFleetRequestHistoryResponse = struct(
  n0,
  _DSFRHRe,
  0,
  [_HRi, _LET, _NTe, _SFRI, _ST],
  [
    [
      () => HistoryRecords,
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
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
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
export var HistoryRecord = struct(
  n0,
  _HRis,
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
export var CancelSpotFleetRequestsErrorSet = list(n0, _CSFRES, 0, [
  () => CancelSpotFleetRequestsErrorItem,
  {
    [_xN]: _it,
  },
]);
export var CancelSpotFleetRequestsSuccessSet = list(n0, _CSFRSS, 0, [
  () => CancelSpotFleetRequestsSuccessItem,
  {
    [_xN]: _it,
  },
]);
export var HistoryRecords = list(n0, _HRi, 0, [
  () => HistoryRecord,
  {
    [_xN]: _it,
  },
]);
export var SpotFleetRequestIdList = list(n0, _SFRIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CancelSpotFleetRequests = op(
  n0,
  _CSFR,
  0,
  () => CancelSpotFleetRequestsRequest,
  () => CancelSpotFleetRequestsResponse
);
export var DescribeSpotFleetInstances = op(
  n0,
  _DSFI,
  0,
  () => DescribeSpotFleetInstancesRequest,
  () => DescribeSpotFleetInstancesResponse
);
export var DescribeSpotFleetRequestHistory = op(
  n0,
  _DSFRH,
  0,
  () => DescribeSpotFleetRequestHistoryRequest,
  () => DescribeSpotFleetRequestHistoryResponse
);
