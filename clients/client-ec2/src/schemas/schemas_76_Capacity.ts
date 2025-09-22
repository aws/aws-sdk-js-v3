// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASl,
  _aSl,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _CCRFr,
  _CCRFRr,
  _CCRFRre,
  _CD,
  _cD,
  _CRF,
  _CRFA,
  _CRFa,
  _cRFA,
  _CRFI,
  _cRFI,
  _CRFIa,
  _CRFS,
  _cRFS,
  _CRI,
  _cRI,
  _CT,
  _CTr,
  _cTr,
  _DCRF,
  _DCRFR,
  _DCRFRe,
  _DR,
  _ED,
  _eD,
  _EO,
  _eO,
  _eQN,
  _fC,
  _FCR,
  _FCRl,
  _FCRS,
  _fCRS,
  _FCu,
  _Fi,
  _Fil,
  _IMC,
  _iMC,
  _IPn,
  _iPn,
  _IT,
  _iT,
  _it,
  _ITS,
  _ITSn,
  _iTSS,
  _MR,
  _NTe,
  _nTe,
  _pri,
  _Prio,
  _RFIS,
  _RFISL,
  _St,
  _st,
  _T,
  _t,
  _Te,
  _TFC,
  _tFC,
  _TIC,
  _tIC,
  _TS,
  _tS,
  _TSa,
  _TTC,
  _tTC,
  _We,
  _we,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { CapacityReservationFleetIdSet } from "./schemas_140_Reservation";

/* eslint no-var: 0 */

export var CapacityReservationFleet = struct(
  n0,
  _CRF,
  0,
  [_CRFIa, _CRFA, _St, _TTC, _TFC, _Te, _ED, _CTr, _IMC, _ASl, _ITS, _T],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationFleetId`,
        [_xN]: _cRFI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityReservationFleetArn`,
        [_xN]: _cRFA,
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
      1,
      {
        [_eQN]: `TotalTargetCapacity`,
        [_xN]: _tTC,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalFulfilledCapacity`,
        [_xN]: _tFC,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndDate`,
        [_xN]: _eD,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceMatchCriteria`,
        [_xN]: _iMC,
      },
    ],
    [
      0,
      {
        [_eQN]: `AllocationStrategy`,
        [_xN]: _aSl,
      },
    ],
    [
      () => FleetCapacityReservationSet,
      {
        [_eQN]: `InstanceTypeSpecificationSet`,
        [_xN]: _iTSS,
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
export var CreateCapacityReservationFleetRequest = struct(
  n0,
  _CCRFRr,
  0,
  [_ASl, _CT, _ITS, _Te, _TTC, _ED, _IMC, _TS, _DR],
  [
    0,
    [0, 4],
    [
      () => ReservationFleetInstanceSpecificationList,
      {
        [_xN]: _ITSn,
      },
    ],
    0,
    1,
    4,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateCapacityReservationFleetResult = struct(
  n0,
  _CCRFRre,
  0,
  [_CRFIa, _St, _TTC, _TFC, _IMC, _ASl, _CTr, _ED, _Te, _FCR, _T],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationFleetId`,
        [_xN]: _cRFI,
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
      1,
      {
        [_eQN]: `TotalTargetCapacity`,
        [_xN]: _tTC,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalFulfilledCapacity`,
        [_xN]: _tFC,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceMatchCriteria`,
        [_xN]: _iMC,
      },
    ],
    [
      0,
      {
        [_eQN]: `AllocationStrategy`,
        [_xN]: _aSl,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndDate`,
        [_xN]: _eD,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
    [
      () => FleetCapacityReservationSet,
      {
        [_eQN]: `FleetCapacityReservationSet`,
        [_xN]: _fCRS,
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
export var DescribeCapacityReservationFleetsRequest = struct(
  n0,
  _DCRFR,
  0,
  [_CRFI, _NTe, _MR, _Fi, _DR],
  [
    [
      () => CapacityReservationFleetIdSet,
      {
        [_xN]: _CRFIa,
      },
    ],
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeCapacityReservationFleetsResult = struct(
  n0,
  _DCRFRe,
  0,
  [_CRFa, _NTe],
  [
    [
      () => CapacityReservationFleetSet,
      {
        [_eQN]: `CapacityReservationFleetSet`,
        [_xN]: _cRFS,
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
export var FleetCapacityReservation = struct(
  n0,
  _FCRl,
  0,
  [_CRI, _AZI, _IT, _IPn, _AZ, _TIC, _FCu, _EO, _CD, _We, _Prio],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationId`,
        [_xN]: _cRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstancePlatform`,
        [_xN]: _iPn,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalInstanceCount`,
        [_xN]: _tIC,
      },
    ],
    [
      1,
      {
        [_eQN]: `FulfilledCapacity`,
        [_xN]: _fC,
      },
    ],
    [
      2,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateDate`,
        [_xN]: _cD,
      },
    ],
    [
      1,
      {
        [_eQN]: `Weight`,
        [_xN]: _we,
      },
    ],
    [
      1,
      {
        [_eQN]: `Priority`,
        [_xN]: _pri,
      },
    ],
  ]
);
export var ReservationFleetInstanceSpecification = struct(
  n0,
  _RFIS,
  0,
  [_IT, _IPn, _We, _AZ, _AZI, _EO, _Prio],
  [0, 0, 1, 0, 0, 2, 1]
);
export var CapacityReservationFleetSet = list(n0, _CRFS, 0, [
  () => CapacityReservationFleet,
  {
    [_xN]: _it,
  },
]);
export var FleetCapacityReservationSet = list(n0, _FCRS, 0, [
  () => FleetCapacityReservation,
  {
    [_xN]: _it,
  },
]);
export var ReservationFleetInstanceSpecificationList = list(n0, _RFISL, 0, () => ReservationFleetInstanceSpecification);
export var CreateCapacityReservationFleet = op(
  n0,
  _CCRFr,
  0,
  () => CreateCapacityReservationFleetRequest,
  () => CreateCapacityReservationFleetResult
);
export var DescribeCapacityReservationFleets = op(
  n0,
  _DCRF,
  0,
  () => DescribeCapacityReservationFleetsRequest,
  () => DescribeCapacityReservationFleetsResult
);
