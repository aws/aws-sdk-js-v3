// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AKI,
  _B,
  _BKE,
  _Cr,
  _CSO,
  _CSR,
  _CSr,
  _CSRr,
  _E,
  _h,
  _hH,
  _SAK,
  _SCe,
  _SCV,
  _SM,
  _SSE,
  _SSEKMSEC,
  _SSEKMSKI,
  _ST,
  _xacsm,
  _xasse,
  _xasseakki,
  _xassebke,
  _xassec,
  _xN,
  n0,
  SSEKMSKeyId,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SessionCredentialValue = sim(n0, _SCV, 0, 8);
export var SSEKMSEncryptionContext = sim(n0, _SSEKMSEC, 0, 8);
export var CreateSessionOutput = struct(
  n0,
  _CSO,
  {
    [_xN]: _CSR,
  },
  [_SSE, _SSEKMSKI, _SSEKMSEC, _BKE, _Cr],
  [
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
    [
      () => SessionCredentials,
      {
        [_xN]: _Cr,
      },
    ],
  ]
);
export var CreateSessionRequest = struct(
  n0,
  _CSRr,
  0,
  [_SM, _B, _SSE, _SSEKMSKI, _SSEKMSEC, _BKE],
  [
    [
      0,
      {
        [_hH]: _xacsm,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _xasse,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xasseakki,
      },
    ],
    [
      () => SSEKMSEncryptionContext,
      {
        [_hH]: _xassec,
      },
    ],
    [
      2,
      {
        [_hH]: _xassebke,
      },
    ],
  ]
);
export var SessionCredentials = struct(
  n0,
  _SCe,
  0,
  [_AKI, _SAK, _ST, _E],
  [
    [
      0,
      {
        [_xN]: _AKI,
      },
    ],
    [
      () => SessionCredentialValue,
      {
        [_xN]: _SAK,
      },
    ],
    [
      () => SessionCredentialValue,
      {
        [_xN]: _ST,
      },
    ],
    [
      4,
      {
        [_xN]: _E,
      },
    ],
  ]
);
export var CreateSession = op(
  n0,
  _CSr,
  {
    [_h]: ["GET", "/?session", 200],
  },
  () => CreateSessionRequest,
  () => CreateSessionOutput
);
