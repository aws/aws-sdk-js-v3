const _ADE = "AccessDeniedException";
const _GAC = "GetAccountCustomizations";
const _GACI = "GetAccountCustomizationsInput";
const _GACO = "GetAccountCustomizationsOutput";
const _ISE = "InternalServerException";
const _LS = "ListServices";
const _LSI = "ListServicesInput";
const _LSO = "ListServicesOutput";
const _TE = "ThrottlingException";
const _UAC = "UpdateAccountCustomizations";
const _UACI = "UpdateAccountCustomizationsInput";
const _UACO = "UpdateAccountCustomizationsOutput";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _aC = "accountColor";
const _c = "client";
const _e = "error";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "path";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.uxc";
const _se = "server";
const _ser = "services";
const _vR = "visibleRegions";
const _vS = "visibleServices";
const n0 = "com.amazonaws.uxc";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { UxcServiceException } from "../models/UxcServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var UxcServiceException$: StaticErrorSchema = [-3, _s, "UxcServiceException", 0, [], []];
_s_registry.registerError(UxcServiceException$, UxcServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList], 1
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
export var GetAccountCustomizationsInput$: StaticStructureSchema = [3, n0, _GACI,
  0,
  [],
  []
];
export var GetAccountCustomizationsOutput$: StaticStructureSchema = [3, n0, _GACO,
  0,
  [_aC, _vS, _vR],
  [0, 64 | 0, 64 | 0]
];
export var ListServicesInput$: StaticStructureSchema = [3, n0, _LSI,
  0,
  [_nT, _mR],
  [[0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]]
];
export var ListServicesOutput$: StaticStructureSchema = [3, n0, _LSO,
  0,
  [_nT, _ser],
  [0, 64 | 0]
];
export var UpdateAccountCustomizationsInput$: StaticStructureSchema = [3, n0, _UACI,
  0,
  [_aC, _vS, _vR],
  [0, 64 | 0, 64 | 0]
];
export var UpdateAccountCustomizationsOutput$: StaticStructureSchema = [3, n0, _UACO,
  0,
  [_aC, _vS, _vR],
  [0, 64 | 0, 64 | 0]
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_p, _m],
  [0, 0], 2
];
var RegionsList = 64 | 0;
var ServiceList = 64 | 0;
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
export var GetAccountCustomizations$: StaticOperationSchema = [9, n0, _GAC,
  { [_h]: ["GET", "/v1/account-customizations", 200] }, () => GetAccountCustomizationsInput$, () => GetAccountCustomizationsOutput$
];
export var ListServices$: StaticOperationSchema = [9, n0, _LS,
  { [_h]: ["GET", "/v1/services", 200] }, () => ListServicesInput$, () => ListServicesOutput$
];
export var UpdateAccountCustomizations$: StaticOperationSchema = [9, n0, _UAC,
  { [_h]: ["PATCH", "/v1/account-customizations", 200] }, () => UpdateAccountCustomizationsInput$, () => UpdateAccountCustomizationsOutput$
];
