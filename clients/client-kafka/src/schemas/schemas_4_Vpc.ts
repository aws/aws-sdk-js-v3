// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _Ar,
  _CA,
  _CS,
  _cS,
  _CT,
  _cT,
  _CVC,
  _cVC,
  _CVCl,
  _CVCR,
  _CVCr,
  _CVCRr,
  _DVC,
  _DVCe,
  _DVCR,
  _DVCRe,
  _DVCRes,
  _DVCResc,
  _h,
  _hQ,
  _jN,
  _LCVC,
  _LCVCR,
  _LCVCRi,
  _lOCVC,
  _lOVCi,
  _LVC,
  _LVCR,
  _LVCRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _O,
  _o,
  _SG,
  _sG,
  _St,
  _st,
  _Su,
  _su,
  _Ta,
  _ta,
  _TCA,
  _tCA,
  _VCA,
  _vCA,
  _VCpc,
  _vCpc,
  _VCpcon,
  _VI,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientVpcConnection = struct(
  n0,
  _CVC,
  0,
  [_A, _CT, _St, _VCA, _O],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var CreateVpcConnectionRequest = struct(
  n0,
  _CVCR,
  0,
  [_TCA, _A, _VI, _CS, _SG, _Ta],
  [
    [
      0,
      {
        [_jN]: _tCA,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateVpcConnectionResponse = struct(
  n0,
  _CVCRr,
  0,
  [_VCA, _St, _A, _VI, _CS, _SG, _CT, _Ta],
  [
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var DeleteVpcConnectionRequest = struct(n0, _DVCR, 0, [_Ar], [[0, 1]]);
export var DeleteVpcConnectionResponse = struct(
  n0,
  _DVCRe,
  0,
  [_VCA, _St],
  [
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DescribeVpcConnectionRequest = struct(n0, _DVCRes, 0, [_Ar], [[0, 1]]);
export var DescribeVpcConnectionResponse = struct(
  n0,
  _DVCResc,
  0,
  [_VCA, _TCA, _St, _A, _VI, _Su, _SG, _CT, _Ta],
  [
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
    [
      0,
      {
        [_jN]: _tCA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _su,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var ListClientVpcConnectionsRequest = struct(
  n0,
  _LCVCR,
  0,
  [_CA, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListClientVpcConnectionsResponse = struct(
  n0,
  _LCVCRi,
  0,
  [_CVCl, _NT],
  [
    [
      () => __listOfClientVpcConnection,
      {
        [_jN]: _cVC,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListVpcConnectionsRequest = struct(
  n0,
  _LVCR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListVpcConnectionsResponse = struct(
  n0,
  _LVCRi,
  0,
  [_VCpc, _NT],
  [
    [
      () => __listOfVpcConnection,
      {
        [_jN]: _vCpc,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var VpcConnection = struct(
  n0,
  _VCpcon,
  0,
  [_VCA, _TCA, _CT, _A, _VI, _St],
  [
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
    [
      0,
      {
        [_jN]: _tCA,
      },
    ],
    [
      5,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var __listOfClientVpcConnection = list(n0, _lOCVC, 0, [() => ClientVpcConnection, 0]);
export var __listOfVpcConnection = list(n0, _lOVCi, 0, [() => VpcConnection, 0]);
export var CreateVpcConnection = op(
  n0,
  _CVCr,
  {
    [_h]: ["POST", "/v1/vpc-connection", 200],
  },
  () => CreateVpcConnectionRequest,
  () => CreateVpcConnectionResponse
);
export var DeleteVpcConnection = op(
  n0,
  _DVC,
  {
    [_h]: ["DELETE", "/v1/vpc-connection/{Arn}", 200],
  },
  () => DeleteVpcConnectionRequest,
  () => DeleteVpcConnectionResponse
);
export var DescribeVpcConnection = op(
  n0,
  _DVCe,
  {
    [_h]: ["GET", "/v1/vpc-connection/{Arn}", 200],
  },
  () => DescribeVpcConnectionRequest,
  () => DescribeVpcConnectionResponse
);
export var ListClientVpcConnections = op(
  n0,
  _LCVC,
  {
    [_h]: ["GET", "/v1/clusters/{ClusterArn}/client-vpc-connections", 200],
  },
  () => ListClientVpcConnectionsRequest,
  () => ListClientVpcConnectionsResponse
);
export var ListVpcConnections = op(
  n0,
  _LVC,
  {
    [_h]: ["GET", "/v1/vpc-connections", 200],
  },
  () => ListVpcConnectionsRequest,
  () => ListVpcConnectionsResponse
);
