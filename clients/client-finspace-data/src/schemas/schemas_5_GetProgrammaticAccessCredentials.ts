// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aKI, _C, _cr, _dIM, _eIn, _GPAC, _GPACR, _GPACRe, _h, _hQ, _sAK, _sT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Credentials = struct(n0, _C, 8, [_aKI, _sAK, _sT], [0, 0, 0]);
export var GetProgrammaticAccessCredentialsRequest = struct(
  n0,
  _GPACR,
  0,
  [_dIM, _eIn],
  [
    [
      1,
      {
        [_hQ]: _dIM,
      },
    ],
    [
      0,
      {
        [_hQ]: _eIn,
      },
    ],
  ]
);
export var GetProgrammaticAccessCredentialsResponse = struct(n0, _GPACRe, 0, [_cr, _dIM], [[() => Credentials, 0], 1]);
export var GetProgrammaticAccessCredentials = op(
  n0,
  _GPAC,
  {
    [_h]: ["GET", "/credentials/programmatic", 200],
  },
  () => GetProgrammaticAccessCredentialsRequest,
  () => GetProgrammaticAccessCredentialsResponse
);
