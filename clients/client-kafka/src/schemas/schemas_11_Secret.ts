// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BASS,
  _BASSR,
  _BASSRa,
  _BDSS,
  _BDSSR,
  _BDSSRa,
  _CA,
  _cA,
  _EC,
  _eC,
  _EMr,
  _eMr,
  _h,
  _jN,
  _lOUSS,
  _SA,
  _sA,
  _SAL,
  _sAL,
  _USS,
  _uSS,
  _USSn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchAssociateScramSecretRequest = struct(
  n0,
  _BASSR,
  0,
  [_CA, _SAL],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _sAL,
      },
    ],
  ]
);
export var BatchAssociateScramSecretResponse = struct(
  n0,
  _BASSRa,
  0,
  [_CA, _USS],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => __listOfUnprocessedScramSecret,
      {
        [_jN]: _uSS,
      },
    ],
  ]
);
export var BatchDisassociateScramSecretRequest = struct(
  n0,
  _BDSSR,
  0,
  [_CA, _SAL],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _sAL,
      },
    ],
  ]
);
export var BatchDisassociateScramSecretResponse = struct(
  n0,
  _BDSSRa,
  0,
  [_CA, _USS],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => __listOfUnprocessedScramSecret,
      {
        [_jN]: _uSS,
      },
    ],
  ]
);
export var UnprocessedScramSecret = struct(
  n0,
  _USSn,
  0,
  [_EC, _EMr, _SA],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _eMr,
      },
    ],
    [
      0,
      {
        [_jN]: _sA,
      },
    ],
  ]
);
export var __listOfUnprocessedScramSecret = list(n0, _lOUSS, 0, [() => UnprocessedScramSecret, 0]);
export var BatchAssociateScramSecret = op(
  n0,
  _BASS,
  {
    [_h]: ["POST", "/v1/clusters/{ClusterArn}/scram-secrets", 200],
  },
  () => BatchAssociateScramSecretRequest,
  () => BatchAssociateScramSecretResponse
);
export var BatchDisassociateScramSecret = op(
  n0,
  _BDSS,
  {
    [_h]: ["PATCH", "/v1/clusters/{ClusterArn}/scram-secrets", 200],
  },
  () => BatchDisassociateScramSecretRequest,
  () => BatchDisassociateScramSecretResponse
);
