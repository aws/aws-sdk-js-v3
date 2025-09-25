// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _h, _hQ, _jN, _LSS, _LSSR, _LSSRi, _MR, _mR, _NT, _nT, _SAL, _sAL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListScramSecretsRequest = struct(
  n0,
  _LSSR,
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
export var ListScramSecretsResponse = struct(
  n0,
  _LSSRi,
  0,
  [_NT, _SAL],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sAL,
      },
    ],
  ]
);
export var ListScramSecrets = op(
  n0,
  _LSS,
  {
    [_h]: ["GET", "/v1/clusters/{ClusterArn}/scram-secrets", 200],
  },
  () => ListScramSecretsRequest,
  () => ListScramSecretsResponse
);
