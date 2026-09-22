const _ADE = "AccessDeniedException";
const _GRS = "GetRevocationStatus";
const _GRSR = "GetRevocationStatusRequest";
const _GRSRe = "GetRevocationStatusResponse";
const _ISEE = "InternalServiceErrorException";
const _TMRE = "TooManyRequestsException";
const _VE = "ValidationException";
const _c = "client";
const _cH = "certificateHashes";
const _co = "code";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _jA = "jobArn";
const _m = "message";
const _pI = "platformId";
const _pVA = "profileVersionArn";
const _rE = "revokedEntities";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.signerdata";
const _sT = "signatureTimestamp";
const _se = "server";
const n0 = "com.amazonaws.signerdata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  InternalServiceErrorException,
  TooManyRequestsException,
  ValidationException,
} from "../models/errors";
import { SignerDataServiceException } from "../models/SignerDataServiceException";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var SignerDataServiceException$: StaticErrorSchema = [-3, _s, "SignerDataServiceException", 0, [], []];
_s_registry.registerError(SignerDataServiceException$, SignerDataServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m, _co],
  [0, 0]
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServiceErrorException$: StaticErrorSchema = [-3, n0, _ISEE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _co],
  [0, 0]
];
n0_registry.registerError(InternalServiceErrorException$, InternalServiceErrorException);
export var TooManyRequestsException$: StaticErrorSchema = [-3, n0, _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _co],
  [0, 0]
];
n0_registry.registerError(TooManyRequestsException$, TooManyRequestsException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _co],
  [0, 0]
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var GetRevocationStatusRequest$: StaticStructureSchema = [3, n0, _GRSR,
  0,
  [_sT, _pI, _pVA, _jA, _cH],
  [[4, { [_hQ]: _sT }], [0, { [_hQ]: _pI }], [0, { [_hQ]: _pVA }], [0, { [_hQ]: _jA }], [64 | 0, { [_hQ]: _cH }]], 5
];
export var GetRevocationStatusResponse$: StaticStructureSchema = [3, n0, _GRSRe,
  0,
  [_rE],
  [64 | 0]
];
var CertificateHashes = 64 | 0;
var RevokedEntities = 64 | 0;
export var GetRevocationStatus$: StaticOperationSchema = [9, n0, _GRS,
  { [_h]: ["GET", "/revocations", 200] }, () => GetRevocationStatusRequest$, () => GetRevocationStatusResponse$
];
