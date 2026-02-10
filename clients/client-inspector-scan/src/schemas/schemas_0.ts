const _ADE = "AccessDeniedException";
const _ISE = "InternalServerException";
const _RA = "Retry-After";
const _SS = "ScanSbom";
const _SSR = "ScanSbomRequest";
const _SSRc = "ScanSbomResponse";
const _TE = "ThrottlingException";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFa = "ValidationExceptionFields";
const _c = "client";
const _e = "error";
const _f = "fields";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _m = "message";
const _n = "name";
const _oF = "outputFormat";
const _r = "reason";
const _rAS = "retryAfterSeconds";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.inspectorscan";
const _sb = "sbom";
const _se = "server";
const n0 = "com.amazonaws.inspectorscan";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { InspectorScanServiceException } from "../models/InspectorScanServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var InspectorScanServiceException$: StaticErrorSchema = [-3, _s, "InspectorScanServiceException", 0, [], []];
_s_registry.registerError(InspectorScanServiceException$, InspectorScanServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _r, _rAS],
  [0, 0, [1, { [_hH]: _RA }]], 2
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _f],
  [0, 0, () => ValidationExceptionFields], 2
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
export var ScanSbomRequest$: StaticStructureSchema = [3, n0, _SSR,
  0,
  [_sb, _oF],
  [15, 0], 1
];
export var ScanSbomResponse$: StaticStructureSchema = [3, n0, _SSRc,
  0,
  [_sb],
  [15]
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_n, _m],
  [0, 0], 2
];
var ValidationExceptionFields: StaticListSchema = [1, n0, _VEFa,
  0, () => ValidationExceptionField$
];
export var ScanSbom$: StaticOperationSchema = [9, n0, _SS,
  { [_h]: ["POST", "/scan/sbom", 200] }, () => ScanSbomRequest$, () => ScanSbomResponse$
];
