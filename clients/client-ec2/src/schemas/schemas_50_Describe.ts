// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _CBap,
  _CBDH,
  _cBDH,
  _CBDM,
  _cBDM,
  _CBO,
  _CBOa,
  _CBOI,
  _cBOI,
  _CBOS,
  _cBOS,
  _cBS,
  _CC,
  _cC,
  _CDH,
  _cR,
  _CRa,
  _DCBO,
  _DCBOR,
  _DCBORe,
  _DR,
  _ED,
  _eD,
  _EDR,
  _eQN,
  _IC,
  _iC,
  _IPn,
  _IT,
  _iT,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PCBR,
  _PCBRu,
  _PCBu,
  _SD,
  _sD,
  _SDR,
  _t,
  _Te,
  _TS,
  _TSa,
  _UC,
  _uC,
  _UF,
  _uF,
  _UTl,
  _uTl,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";
import { CapacityReservation } from "./schemas_108_Capacity";
import { CapacityBlockSet } from "./schemas_139_Capacity";

/* eslint no-var: 0 */

export var CapacityBlockOffering = struct(
  n0,
  _CBO,
  0,
  [_CBOI, _IT, _AZ, _IC, _SD, _ED, _CBDH, _UF, _CC, _Te, _UTl, _UC, _CBDM],
  [
    [
      0,
      {
        [_eQN]: `CapacityBlockOfferingId`,
        [_xN]: _cBOI,
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
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
      1,
      {
        [_eQN]: `CapacityBlockDurationHours`,
        [_xN]: _cBDH,
      },
    ],
    [
      0,
      {
        [_eQN]: `UpfrontFee`,
        [_xN]: _uF,
      },
    ],
    [
      0,
      {
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
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
      0,
      {
        [_eQN]: `UltraserverType`,
        [_xN]: _uTl,
      },
    ],
    [
      1,
      {
        [_eQN]: `UltraserverCount`,
        [_xN]: _uC,
      },
    ],
    [
      1,
      {
        [_eQN]: `CapacityBlockDurationMinutes`,
        [_xN]: _cBDM,
      },
    ],
  ]
);
export var DescribeCapacityBlockOfferingsRequest = struct(
  n0,
  _DCBOR,
  0,
  [_DR, _IT, _IC, _SDR, _EDR, _CDH, _NTe, _MR, _UTl, _UC],
  [2, 0, 1, 4, 4, 1, 0, 1, 0, 1]
);
export var DescribeCapacityBlockOfferingsResult = struct(
  n0,
  _DCBORe,
  0,
  [_CBOa, _NTe],
  [
    [
      () => CapacityBlockOfferingSet,
      {
        [_eQN]: `CapacityBlockOfferingSet`,
        [_xN]: _cBOS,
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
export var PurchaseCapacityBlockRequest = struct(
  n0,
  _PCBR,
  0,
  [_DR, _TS, _CBOI, _IPn],
  [
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    0,
  ]
);
export var PurchaseCapacityBlockResult = struct(
  n0,
  _PCBRu,
  0,
  [_CRa, _CBap],
  [
    [
      () => CapacityReservation,
      {
        [_eQN]: `CapacityReservation`,
        [_xN]: _cR,
      },
    ],
    [
      () => CapacityBlockSet,
      {
        [_eQN]: `CapacityBlockSet`,
        [_xN]: _cBS,
      },
    ],
  ]
);
export var CapacityBlockOfferingSet = list(n0, _CBOS, 0, [
  () => CapacityBlockOffering,
  {
    [_xN]: _it,
  },
]);
export var DescribeCapacityBlockOfferings = op(
  n0,
  _DCBO,
  0,
  () => DescribeCapacityBlockOfferingsRequest,
  () => DescribeCapacityBlockOfferingsResult
);
export var PurchaseCapacityBlock = op(
  n0,
  _PCBu,
  0,
  () => PurchaseCapacityBlockRequest,
  () => PurchaseCapacityBlockResult
);
