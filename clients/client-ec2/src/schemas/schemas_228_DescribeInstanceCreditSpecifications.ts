// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCp,
  _cCp,
  _DICS,
  _DICSR,
  _DICSRe,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _ICS,
  _ICSL,
  _ICSn,
  _iCSS,
  _II,
  _iI,
  _IIn,
  _it,
  _MR,
  _NTe,
  _nTe,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { InstanceIdStringList } from "./schemas_330_Instances";

/* eslint no-var: 0 */

export var DescribeInstanceCreditSpecificationsRequest = struct(
  n0,
  _DICSR,
  0,
  [_DR, _Fi, _IIn, _MR, _NTe],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    1,
    0,
  ]
);
export var DescribeInstanceCreditSpecificationsResult = struct(
  n0,
  _DICSRe,
  0,
  [_ICS, _NTe],
  [
    [
      () => InstanceCreditSpecificationList,
      {
        [_eQN]: `InstanceCreditSpecificationSet`,
        [_xN]: _iCSS,
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
export var InstanceCreditSpecification = struct(
  n0,
  _ICSn,
  0,
  [_II, _CCp],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CpuCredits`,
        [_xN]: _cCp,
      },
    ],
  ]
);
export var InstanceCreditSpecificationList = list(n0, _ICSL, 0, [
  () => InstanceCreditSpecification,
  {
    [_xN]: _it,
  },
]);
export var DescribeInstanceCreditSpecifications = op(
  n0,
  _DICS,
  0,
  () => DescribeInstanceCreditSpecificationsRequest,
  () => DescribeInstanceCreditSpecificationsResult
);
