// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _cA,
  _CAl,
  _cAl,
  _CI,
  _cI,
  _COA,
  _cOA,
  _CV,
  _cV,
  _En,
  _ena,
  _h,
  _I,
  _i,
  _jN,
  _PA,
  _pA,
  _Sa,
  _sa,
  _Sc,
  _sc,
  _T,
  _t,
  _Ty,
  _ty,
  _UCp,
  _UCRpd,
  _UCRpda,
  _VC,
  _vC,
  _VCCA,
  _VCIp,
  _VCS,
  _VCSp,
  _VCT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectivityInfo = struct(
  n0,
  _CI,
  0,
  [_PA, _VC],
  [
    [
      () => PublicAccess,
      {
        [_jN]: _pA,
      },
    ],
    [
      () => VpcConnectivity,
      {
        [_jN]: _vC,
      },
    ],
  ]
);
export var PublicAccess = struct(
  n0,
  _PA,
  0,
  [_Ty],
  [
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var UpdateConnectivityRequest = struct(
  n0,
  _UCRpd,
  0,
  [_CA, _CI, _CV],
  [
    [0, 1],
    [
      () => ConnectivityInfo,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
  ]
);
export var UpdateConnectivityResponse = struct(
  n0,
  _UCRpda,
  0,
  [_CA, _COA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cOA,
      },
    ],
  ]
);
export var VpcConnectivity = struct(
  n0,
  _VC,
  0,
  [_CAl],
  [
    [
      () => VpcConnectivityClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
  ]
);
export var VpcConnectivityClientAuthentication = struct(
  n0,
  _VCCA,
  0,
  [_Sa, _T],
  [
    [
      () => VpcConnectivitySasl,
      {
        [_jN]: _sa,
      },
    ],
    [
      () => VpcConnectivityTls,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var VpcConnectivityIam = struct(
  n0,
  _VCIp,
  0,
  [_En],
  [
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
  ]
);
export var VpcConnectivitySasl = struct(
  n0,
  _VCS,
  0,
  [_Sc, _I],
  [
    [
      () => VpcConnectivityScram,
      {
        [_jN]: _sc,
      },
    ],
    [
      () => VpcConnectivityIam,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var VpcConnectivityScram = struct(
  n0,
  _VCSp,
  0,
  [_En],
  [
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
  ]
);
export var VpcConnectivityTls = struct(
  n0,
  _VCT,
  0,
  [_En],
  [
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
  ]
);
export var UpdateConnectivity = op(
  n0,
  _UCp,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/connectivity", 200],
  },
  () => UpdateConnectivityRequest,
  () => UpdateConnectivityResponse
);
