// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  EnableSoftwareTokenMFAException as __EnableSoftwareTokenMFAException,
  SoftwareTokenMFANotFoundException as __SoftwareTokenMFANotFoundException,
} from "../models/index";
import {
  _AST,
  _ASTR,
  _ASTRs,
  _ATc,
  _c,
  _e,
  _ESTMFAE,
  _FDN,
  _hE,
  _m,
  _S,
  _SC,
  _SCT,
  _ST,
  _St,
  _STMFANFE,
  _STMFAUCT,
  _UCse,
  _VST,
  _VSTR,
  _VSTRe,
  n0,
  TokenModelType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SecretCodeType = sim(n0, _SCT, 0, 8);
export var SessionType = sim(n0, _ST, 0, 8);
export var SoftwareTokenMFAUserCodeType = sim(n0, _STMFAUCT, 0, 8);
export var AssociateSoftwareTokenRequest = struct(
  n0,
  _ASTR,
  0,
  [_ATc, _S],
  [
    [() => TokenModelType, 0],
    [() => SessionType, 0],
  ]
);
export var AssociateSoftwareTokenResponse = struct(
  n0,
  _ASTRs,
  0,
  [_SC, _S],
  [
    [() => SecretCodeType, 0],
    [() => SessionType, 0],
  ]
);
export var EnableSoftwareTokenMFAException = error(
  n0,
  _ESTMFAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __EnableSoftwareTokenMFAException
);
export var SoftwareTokenMFANotFoundException = error(
  n0,
  _STMFANFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __SoftwareTokenMFANotFoundException
);
export var VerifySoftwareTokenRequest = struct(
  n0,
  _VSTR,
  0,
  [_ATc, _S, _UCse, _FDN],
  [[() => TokenModelType, 0], [() => SessionType, 0], [() => SoftwareTokenMFAUserCodeType, 0], 0]
);
export var VerifySoftwareTokenResponse = struct(n0, _VSTRe, 0, [_St, _S], [0, [() => SessionType, 0]]);
export var AssociateSoftwareToken = op(
  n0,
  _AST,
  0,
  () => AssociateSoftwareTokenRequest,
  () => AssociateSoftwareTokenResponse
);
export var VerifySoftwareToken = op(
  n0,
  _VST,
  0,
  () => VerifySoftwareTokenRequest,
  () => VerifySoftwareTokenResponse
);
