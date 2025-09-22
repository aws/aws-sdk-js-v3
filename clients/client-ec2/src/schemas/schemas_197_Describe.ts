// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _DAIF,
  _DAIFR,
  _DAIFRe,
  _Dea,
  _dea,
  _DIFe,
  _DIFR,
  _DIFRe,
  _DIIF,
  _DIIFR,
  _DIIFRe,
  _DPIF,
  _DPIFR,
  _DPIFRe,
  _DR,
  _eQN,
  _IFd,
  _IFL,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PAr,
  _pAr,
  _PIF,
  _PIFL,
  _Pri,
  _pSrin,
  _re,
  _Res,
  _Reso,
  _RLes,
  _sSt,
  _Statu,
  _ULI,
  _uLI,
  _ULIA,
  _uLIA,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAggregateIdFormatRequest = struct(n0, _DAIFR, 0, [_DR], [2]);
export var DescribeAggregateIdFormatResult = struct(
  n0,
  _DAIFRe,
  0,
  [_ULIA, _Statu],
  [
    [
      2,
      {
        [_eQN]: `UseLongIdsAggregated`,
        [_xN]: _uLIA,
      },
    ],
    [
      () => IdFormatList,
      {
        [_eQN]: `StatusSet`,
        [_xN]: _sSt,
      },
    ],
  ]
);
export var DescribeIdentityIdFormatRequest = struct(
  n0,
  _DIIFR,
  0,
  [_Reso, _PAr],
  [
    [
      0,
      {
        [_eQN]: `Resource`,
        [_xN]: _re,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrincipalArn`,
        [_xN]: _pAr,
      },
    ],
  ]
);
export var DescribeIdentityIdFormatResult = struct(
  n0,
  _DIIFRe,
  0,
  [_Statu],
  [
    [
      () => IdFormatList,
      {
        [_eQN]: `StatusSet`,
        [_xN]: _sSt,
      },
    ],
  ]
);
export var DescribeIdFormatRequest = struct(n0, _DIFR, 0, [_Reso], [0]);
export var DescribeIdFormatResult = struct(
  n0,
  _DIFRe,
  0,
  [_Statu],
  [
    [
      () => IdFormatList,
      {
        [_eQN]: `StatusSet`,
        [_xN]: _sSt,
      },
    ],
  ]
);
export var DescribePrincipalIdFormatRequest = struct(
  n0,
  _DPIFR,
  0,
  [_DR, _Res, _MR, _NTe],
  [
    2,
    [
      () => ResourceList,
      {
        [_xN]: _Reso,
      },
    ],
    1,
    0,
  ]
);
export var DescribePrincipalIdFormatResult = struct(
  n0,
  _DPIFRe,
  0,
  [_Pri, _NTe],
  [
    [
      () => PrincipalIdFormatList,
      {
        [_eQN]: `PrincipalSet`,
        [_xN]: _pSrin,
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
export var IdFormat = struct(
  n0,
  _IFd,
  0,
  [_Dea, _Reso, _ULI],
  [
    [
      4,
      {
        [_eQN]: `Deadline`,
        [_xN]: _dea,
      },
    ],
    [
      0,
      {
        [_eQN]: `Resource`,
        [_xN]: _re,
      },
    ],
    [
      2,
      {
        [_eQN]: `UseLongIds`,
        [_xN]: _uLI,
      },
    ],
  ]
);
export var PrincipalIdFormat = struct(
  n0,
  _PIF,
  0,
  [_Ar, _Statu],
  [
    [
      0,
      {
        [_eQN]: `Arn`,
        [_xN]: _ar,
      },
    ],
    [
      () => IdFormatList,
      {
        [_eQN]: `StatusSet`,
        [_xN]: _sSt,
      },
    ],
  ]
);
export var IdFormatList = list(n0, _IFL, 0, [
  () => IdFormat,
  {
    [_xN]: _it,
  },
]);
export var PrincipalIdFormatList = list(n0, _PIFL, 0, [
  () => PrincipalIdFormat,
  {
    [_xN]: _it,
  },
]);
export var ResourceList = list(n0, _RLes, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DescribeAggregateIdFormat = op(
  n0,
  _DAIF,
  0,
  () => DescribeAggregateIdFormatRequest,
  () => DescribeAggregateIdFormatResult
);
export var DescribeIdentityIdFormat = op(
  n0,
  _DIIF,
  0,
  () => DescribeIdentityIdFormatRequest,
  () => DescribeIdentityIdFormatResult
);
export var DescribeIdFormat = op(
  n0,
  _DIFe,
  0,
  () => DescribeIdFormatRequest,
  () => DescribeIdFormatResult
);
export var DescribePrincipalIdFormat = op(
  n0,
  _DPIF,
  0,
  () => DescribePrincipalIdFormatRequest,
  () => DescribePrincipalIdFormatResult
);
