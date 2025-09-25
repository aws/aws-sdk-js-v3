// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACRBORs,
  _ACRBORss,
  _ACRBOs,
  _AICv,
  _aICv,
  _ATl,
  _aTl,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _CAa,
  _CAap,
  _cAS,
  _CBI,
  _cBI,
  _CCRBS,
  _CCRBSR,
  _CCRBSRr,
  _CD,
  _cD,
  _CED,
  _cED,
  _CIC,
  _cIC,
  _CIom,
  _cIom,
  _Cou,
  _cou,
  _CRA,
  _CRa,
  _cRA,
  _CRap,
  _CRCI,
  _cRFI,
  _CRFIa,
  _CRI,
  _cRI,
  _CRIa,
  _cRS,
  _CRSapa,
  _CT,
  _DCR,
  _dCR,
  _DCRBO,
  _DCRBOR,
  _DCRBORi,
  _DCRe,
  _DCRI,
  _DCRR,
  _DCRRe,
  _DP,
  _dP,
  _DR,
  _ED,
  _eD,
  _EDT,
  _eDT,
  _EO,
  _eO,
  _eQN,
  _ES,
  _eS,
  _Fi,
  _Fil,
  _IC,
  _iC,
  _IMC,
  _iMC,
  _IPn,
  _iPn,
  _IT,
  _iT,
  _it,
  _MCRI,
  _MCRIR,
  _MCRIRo,
  _MR,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OI,
  _oI,
  _PGA,
  _pGA,
  _R,
  _r,
  _RT,
  _rT,
  _SCR,
  _sCR,
  _SCRI,
  _SD,
  _sD,
  _St,
  _st,
  _T,
  _t,
  _Te,
  _TIC,
  _tIC,
  _TS,
  _tS,
  _TSa,
  _URBOI,
  _uRBOI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { CapacityReservationIdSet } from "./schemas_244_Capacity";

/* eslint no-var: 0 */

export var AssociateCapacityReservationBillingOwnerRequest = struct(n0, _ACRBORs, 0, [_DR, _CRI, _URBOI], [2, 0, 0]);
export var AssociateCapacityReservationBillingOwnerResult = struct(
  n0,
  _ACRBORss,
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
export var CapacityAllocation = struct(
  n0,
  _CAa,
  0,
  [_ATl, _Cou],
  [
    [
      0,
      {
        [_eQN]: `AllocationType`,
        [_xN]: _aTl,
      },
    ],
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
  ]
);
export var CapacityReservation = struct(
  n0,
  _CRa,
  0,
  [
    _CRI,
    _OI,
    _CRA,
    _AZI,
    _IT,
    _IPn,
    _AZ,
    _Te,
    _TIC,
    _AICv,
    _EO,
    _ES,
    _St,
    _SD,
    _ED,
    _EDT,
    _IMC,
    _CD,
    _T,
    _OA,
    _CRFIa,
    _PGA,
    _CAap,
    _RT,
    _URBOI,
    _CIom,
    _DP,
    _CBI,
  ],
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
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityReservationArn`,
        [_xN]: _cRA,
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
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
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
        [_eQN]: `AvailableInstanceCount`,
        [_xN]: _aICv,
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
      2,
      {
        [_eQN]: `EphemeralStorage`,
        [_xN]: _eS,
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
      4,
      {
        [_eQN]: `StartDate`,
        [_xN]: _sD,
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
        [_eQN]: `EndDateType`,
        [_xN]: _eDT,
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
      4,
      {
        [_eQN]: `CreateDate`,
        [_xN]: _cD,
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
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
      },
    ],
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
        [_eQN]: `PlacementGroupArn`,
        [_xN]: _pGA,
      },
    ],
    [
      () => CapacityAllocations,
      {
        [_eQN]: `CapacityAllocationSet`,
        [_xN]: _cAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservationType`,
        [_xN]: _rT,
      },
    ],
    [
      0,
      {
        [_eQN]: `UnusedReservationBillingOwnerId`,
        [_xN]: _uRBOI,
      },
    ],
    [
      () => CapacityReservationCommitmentInfo,
      {
        [_eQN]: `CommitmentInfo`,
        [_xN]: _cIom,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeliveryPreference`,
        [_xN]: _dP,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityBlockId`,
        [_xN]: _cBI,
      },
    ],
  ]
);
export var CapacityReservationCommitmentInfo = struct(
  n0,
  _CRCI,
  0,
  [_CIC, _CED],
  [
    [
      1,
      {
        [_eQN]: `CommittedInstanceCount`,
        [_xN]: _cIC,
      },
    ],
    [
      4,
      {
        [_eQN]: `CommitmentEndDate`,
        [_xN]: _cED,
      },
    ],
  ]
);
export var CreateCapacityReservationBySplittingRequest = struct(
  n0,
  _CCRBSR,
  0,
  [_DR, _CT, _SCRI, _IC, _TS],
  [
    2,
    [0, 4],
    0,
    1,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateCapacityReservationBySplittingResult = struct(
  n0,
  _CCRBSRr,
  0,
  [_SCR, _DCR, _IC],
  [
    [
      () => CapacityReservation,
      {
        [_eQN]: `SourceCapacityReservation`,
        [_xN]: _sCR,
      },
    ],
    [
      () => CapacityReservation,
      {
        [_eQN]: `DestinationCapacityReservation`,
        [_xN]: _dCR,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
      },
    ],
  ]
);
export var DescribeCapacityReservationsRequest = struct(
  n0,
  _DCRR,
  0,
  [_CRIa, _NTe, _MR, _Fi, _DR],
  [
    [
      () => CapacityReservationIdSet,
      {
        [_xN]: _CRI,
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
export var DescribeCapacityReservationsResult = struct(
  n0,
  _DCRRe,
  0,
  [_NTe, _CRap],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => CapacityReservationSet,
      {
        [_eQN]: `CapacityReservationSet`,
        [_xN]: _cRS,
      },
    ],
  ]
);
export var DisassociateCapacityReservationBillingOwnerRequest = struct(n0, _DCRBOR, 0, [_DR, _CRI, _URBOI], [2, 0, 0]);
export var DisassociateCapacityReservationBillingOwnerResult = struct(
  n0,
  _DCRBORi,
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
export var MoveCapacityReservationInstancesRequest = struct(
  n0,
  _MCRIR,
  0,
  [_DR, _CT, _SCRI, _DCRI, _IC],
  [2, [0, 4], 0, 0, 1]
);
export var MoveCapacityReservationInstancesResult = struct(
  n0,
  _MCRIRo,
  0,
  [_SCR, _DCR, _IC],
  [
    [
      () => CapacityReservation,
      {
        [_eQN]: `SourceCapacityReservation`,
        [_xN]: _sCR,
      },
    ],
    [
      () => CapacityReservation,
      {
        [_eQN]: `DestinationCapacityReservation`,
        [_xN]: _dCR,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
      },
    ],
  ]
);
export var CapacityAllocations = list(n0, _CAap, 0, [
  () => CapacityAllocation,
  {
    [_xN]: _it,
  },
]);
export var CapacityReservationSet = list(n0, _CRSapa, 0, [
  () => CapacityReservation,
  {
    [_xN]: _it,
  },
]);
export var AssociateCapacityReservationBillingOwner = op(
  n0,
  _ACRBOs,
  0,
  () => AssociateCapacityReservationBillingOwnerRequest,
  () => AssociateCapacityReservationBillingOwnerResult
);
export var CreateCapacityReservationBySplitting = op(
  n0,
  _CCRBS,
  0,
  () => CreateCapacityReservationBySplittingRequest,
  () => CreateCapacityReservationBySplittingResult
);
export var DescribeCapacityReservations = op(
  n0,
  _DCRe,
  0,
  () => DescribeCapacityReservationsRequest,
  () => DescribeCapacityReservationsResult
);
export var DisassociateCapacityReservationBillingOwner = op(
  n0,
  _DCRBO,
  0,
  () => DisassociateCapacityReservationBillingOwnerRequest,
  () => DisassociateCapacityReservationBillingOwnerResult
);
export var MoveCapacityReservationInstances = op(
  n0,
  _MCRI,
  0,
  () => MoveCapacityReservationInstancesRequest,
  () => MoveCapacityReservationInstancesResult
);
