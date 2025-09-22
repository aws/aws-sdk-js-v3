// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DITO,
  _DITOR,
  _DITORe,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _IT,
  _iT,
  _it,
  _ITO,
  _ITOL,
  _ITOn,
  _iTOS,
  _lo,
  _Loc,
  _LTo,
  _lTo,
  _MR,
  _NTe,
  _nTe,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeInstanceTypeOfferingsRequest = struct(
  n0,
  _DITOR,
  0,
  [_DR, _LTo, _Fi, _MR, _NTe],
  [
    2,
    0,
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
export var DescribeInstanceTypeOfferingsResult = struct(
  n0,
  _DITORe,
  0,
  [_ITO, _NTe],
  [
    [
      () => InstanceTypeOfferingsList,
      {
        [_eQN]: `InstanceTypeOfferingSet`,
        [_xN]: _iTOS,
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
export var InstanceTypeOffering = struct(
  n0,
  _ITOn,
  0,
  [_IT, _LTo, _Loc],
  [
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
        [_eQN]: `LocationType`,
        [_xN]: _lTo,
      },
    ],
    [
      0,
      {
        [_eQN]: `Location`,
        [_xN]: _lo,
      },
    ],
  ]
);
export var InstanceTypeOfferingsList = list(n0, _ITOL, 0, [
  () => InstanceTypeOffering,
  {
    [_xN]: _it,
  },
]);
export var DescribeInstanceTypeOfferings = op(
  n0,
  _DITO,
  0,
  () => DescribeInstanceTypeOfferingsRequest,
  () => DescribeInstanceTypeOfferingsResult
);
