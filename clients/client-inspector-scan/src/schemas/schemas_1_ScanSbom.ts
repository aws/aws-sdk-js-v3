// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _c,
  _e,
  _f,
  _h,
  _hE,
  _hH,
  _ISE,
  _m,
  _n,
  _oF,
  _r,
  _RA,
  _rAS,
  _s,
  _sb,
  _SS,
  _SSR,
  _SSRc,
  _TE,
  _VE,
  _VEF,
  _VEFa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m, _r, _rAS],
  [
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ScanSbomRequest = struct(n0, _SSR, 0, [_sb, _oF], [15, 0]);
export var ScanSbomResponse = struct(n0, _SSRc, 0, [_sb], [15]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _f],
  [0, 0, () => ValidationExceptionFields],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var ValidationExceptionFields = list(n0, _VEFa, 0, () => ValidationExceptionField);
export var ScanSbom = op(
  n0,
  _SS,
  {
    [_h]: ["POST", "/scan/sbom", 200],
  },
  () => ScanSbomRequest,
  () => ScanSbomResponse
);
