// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _cA,
  _CAAL,
  _cAAL,
  _CAl,
  _cAl,
  _CB,
  _cB,
  _COA,
  _cOA,
  _CV,
  _cV,
  _DVKMSKI,
  _dVKMSKI,
  _EAR,
  _eAR,
  _EI,
  _eI,
  _EIT,
  _eIT,
  _En,
  _ena,
  _h,
  _I,
  _i,
  _IC,
  _iC,
  _jN,
  _Sa,
  _sa,
  _Sc,
  _sc,
  _T,
  _t,
  _U,
  _u,
  _US,
  _USR,
  _USRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientAuthentication = struct(
  n0,
  _CAl,
  0,
  [_Sa, _T, _U],
  [
    [
      () => Sasl,
      {
        [_jN]: _sa,
      },
    ],
    [
      () => Tls,
      {
        [_jN]: _t,
      },
    ],
    [
      () => Unauthenticated,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var EncryptionAtRest = struct(
  n0,
  _EAR,
  0,
  [_DVKMSKI],
  [
    [
      0,
      {
        [_jN]: _dVKMSKI,
      },
    ],
  ]
);
export var EncryptionInfo = struct(
  n0,
  _EI,
  0,
  [_EAR, _EIT],
  [
    [
      () => EncryptionAtRest,
      {
        [_jN]: _eAR,
      },
    ],
    [
      () => EncryptionInTransit,
      {
        [_jN]: _eIT,
      },
    ],
  ]
);
export var EncryptionInTransit = struct(
  n0,
  _EIT,
  0,
  [_CB, _IC],
  [
    [
      0,
      {
        [_jN]: _cB,
      },
    ],
    [
      2,
      {
        [_jN]: _iC,
      },
    ],
  ]
);
export var Iam = struct(
  n0,
  _I,
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
export var Sasl = struct(
  n0,
  _Sa,
  0,
  [_Sc, _I],
  [
    [
      () => Scram,
      {
        [_jN]: _sc,
      },
    ],
    [
      () => Iam,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var Scram = struct(
  n0,
  _Sc,
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
export var Tls = struct(
  n0,
  _T,
  0,
  [_CAAL, _En],
  [
    [
      64 | 0,
      {
        [_jN]: _cAAL,
      },
    ],
    [
      2,
      {
        [_jN]: _ena,
      },
    ],
  ]
);
export var Unauthenticated = struct(
  n0,
  _U,
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
export var UpdateSecurityRequest = struct(
  n0,
  _USR,
  0,
  [_CAl, _CA, _CV, _EI],
  [
    [
      () => ClientAuthentication,
      {
        [_jN]: _cAl,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      () => EncryptionInfo,
      {
        [_jN]: _eI,
      },
    ],
  ]
);
export var UpdateSecurityResponse = struct(
  n0,
  _USRp,
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
export var UpdateSecurity = op(
  n0,
  _US,
  {
    [_h]: ["PATCH", "/v1/clusters/{ClusterArn}/security", 200],
  },
  () => UpdateSecurityRequest,
  () => UpdateSecurityResponse
);
