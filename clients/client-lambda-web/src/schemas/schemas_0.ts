const _ADE = "AccessDeniedException";
const _AQ = "AccountQuotas";
const _AU = "AccountUsage";
const _GWAS = "GetWebAccountSettings";
const _GWASR = "GetWebAccountSettingsRequest";
const _GWASRe = "GetWebAccountSettingsResponse";
const _ISE = "InternalServerException";
const _RA = "Retry-After";
const _TE = "ThrottlingException";
const _aQ = "accountQuotas";
const _aU = "accountUsage";
const _c = "client";
const _e = "error";
const _fC = "functionCount";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _m = "message";
const _mEPF = "maxEndpointsPerFunction";
const _mRPF = "maxRevisionsPerFunction";
const _mTAVC = "maxTotalArmVCpus";
const _mTRL = "maxTotalRateLimit";
const _qC = "quotaCode";
const _rAS = "retryAfterSeconds";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.lambdaweb";
const _sC = "serviceCode";
const _se = "server";
const n0 = "com.amazonaws.lambdaweb";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { AccessDeniedException, InternalServerException, ThrottlingException } from "../models/errors";
import { LambdaWebServiceException } from "../models/LambdaWebServiceException";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var LambdaWebServiceException$: StaticErrorSchema = [-3, _s, "LambdaWebServiceException", 0, [], []];
_s_registry.registerError(LambdaWebServiceException$, LambdaWebServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0]
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _rAS, _sC, _qC],
  [0, [1, { [_hH]: _RA }], 0, 0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var AccountQuotas$: StaticStructureSchema = [3, n0, _AQ,
  0,
  [_mTAVC, _mTRL, _mRPF, _mEPF],
  [1, 1, 1, 1], 4
];
export var AccountUsage$: StaticStructureSchema = [3, n0, _AU,
  0,
  [_fC],
  [1], 1
];
export var GetWebAccountSettingsRequest$: StaticStructureSchema = [3, n0, _GWASR,
  0,
  [],
  []
];
export var GetWebAccountSettingsResponse$: StaticStructureSchema = [3, n0, _GWASRe,
  0,
  [_aQ, _aU],
  [() => AccountQuotas$, () => AccountUsage$], 2
];
export var GetWebAccountSettings$: StaticOperationSchema = [9, n0, _GWAS,
  { [_h]: ["GET", "/2025-03-07/web-account-settings", 200] }, () => GetWebAccountSettingsRequest$, () => GetWebAccountSettingsResponse$
];
