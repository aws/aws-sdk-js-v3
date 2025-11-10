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
const _s = "server";
const _sb = "sbom";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.inspectorscan";
const n0 = "com.amazonaws.inspectorscan";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { InspectorScanServiceException as __InspectorScanServiceException } from "../models/InspectorScanServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var InternalServerException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ScanSbomRequest: StaticStructureSchema = [3, n0, _SSR, 0, [_sb, _oF], [15, 0]];
export var ScanSbomResponse: StaticStructureSchema = [3, n0, _SSRc, 0, [_sb], [15]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _f],
  [0, 0, () => ValidationExceptionFields],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;

export var InspectorScanServiceException: StaticErrorSchema = [-3, _sm, "InspectorScanServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(InspectorScanServiceException, __InspectorScanServiceException);

export var ValidationExceptionFields: StaticListSchema = [1, n0, _VEFa, 0, () => ValidationExceptionField];
export var ScanSbom: StaticOperationSchema = [
  9,
  n0,
  _SS,
  {
    [_h]: ["POST", "/scan/sbom", 200],
  },
  () => ScanSbomRequest,
  () => ScanSbomResponse,
];
