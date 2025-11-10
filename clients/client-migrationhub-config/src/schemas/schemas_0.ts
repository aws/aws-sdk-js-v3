const _ADE = "AccessDeniedException";
const _CHRC = "CreateHomeRegionControl";
const _CHRCR = "CreateHomeRegionControlRequest";
const _CHRCRr = "CreateHomeRegionControlResult";
const _CI = "ControlId";
const _DHRC = "DeleteHomeRegionControl";
const _DHRCR = "DeleteHomeRegionControlRequest";
const _DHRCRe = "DeleteHomeRegionControlResult";
const _DHRCRes = "DescribeHomeRegionControlsRequest";
const _DHRCResc = "DescribeHomeRegionControlsResult";
const _DHRCe = "DescribeHomeRegionControls";
const _DR = "DryRun";
const _DRO = "DryRunOperation";
const _GHR = "GetHomeRegion";
const _GHRR = "GetHomeRegionRequest";
const _GHRRe = "GetHomeRegionResult";
const _HR = "HomeRegion";
const _HRC = "HomeRegionControl";
const _HRCo = "HomeRegionControls";
const _I = "Id";
const _IIE = "InvalidInputException";
const _ISE = "InternalServerError";
const _M = "Message";
const _MR = "MaxResults";
const _NT = "NextToken";
const _RA = "Retry-After";
const _RAS = "RetryAfterSeconds";
const _RT = "RequestedTime";
const _SUE = "ServiceUnavailableException";
const _T = "Target";
const _TE = "ThrottlingException";
const _Ty = "Type";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.migrationhubconfig";
const n0 = "com.amazonaws.migrationhubconfig";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  DryRunOperation as __DryRunOperation,
  InternalServerError as __InternalServerError,
  InvalidInputException as __InvalidInputException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import { MigrationHubConfigServiceException as __MigrationHubConfigServiceException } from "../models/MigrationHubConfigServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var CreateHomeRegionControlRequest: StaticStructureSchema = [
  3,
  n0,
  _CHRCR,
  0,
  [_HR, _T, _DR],
  [0, () => Target, 2],
];
export var CreateHomeRegionControlResult: StaticStructureSchema = [
  3,
  n0,
  _CHRCRr,
  0,
  [_HRC],
  [() => HomeRegionControl],
];
export var DeleteHomeRegionControlRequest: StaticStructureSchema = [3, n0, _DHRCR, 0, [_CI], [0]];
export var DeleteHomeRegionControlResult: StaticStructureSchema = [3, n0, _DHRCRe, 0, [], []];
export var DescribeHomeRegionControlsRequest: StaticStructureSchema = [
  3,
  n0,
  _DHRCRes,
  0,
  [_CI, _HR, _T, _MR, _NT],
  [0, 0, () => Target, 1, 0],
];
export var DescribeHomeRegionControlsResult: StaticStructureSchema = [
  3,
  n0,
  _DHRCResc,
  0,
  [_HRCo, _NT],
  [() => HomeRegionControls, 0],
];
export var DryRunOperation: StaticErrorSchema = [
  -3,
  n0,
  _DRO,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(DryRunOperation, __DryRunOperation);

export var GetHomeRegionRequest: StaticStructureSchema = [3, n0, _GHRR, 0, [], []];
export var GetHomeRegionResult: StaticStructureSchema = [3, n0, _GHRRe, 0, [_HR], [0]];
export var HomeRegionControl: StaticStructureSchema = [3, n0, _HRC, 0, [_CI, _HR, _T, _RT], [0, 0, () => Target, 4]];
export var InternalServerError: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerError, __InternalServerError);

export var InvalidInputException: StaticErrorSchema = [
  -3,
  n0,
  _IIE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidInputException, __InvalidInputException);

export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

export var Target: StaticStructureSchema = [3, n0, _T, 0, [_Ty, _I], [0, 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _RAS],
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

export var __Unit = "unit" as const;

export var MigrationHubConfigServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "MigrationHubConfigServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(MigrationHubConfigServiceException, __MigrationHubConfigServiceException);

export var HomeRegionControls: StaticListSchema = [1, n0, _HRCo, 0, () => HomeRegionControl];
export var CreateHomeRegionControl: StaticOperationSchema = [
  9,
  n0,
  _CHRC,
  0,
  () => CreateHomeRegionControlRequest,
  () => CreateHomeRegionControlResult,
];
export var DeleteHomeRegionControl: StaticOperationSchema = [
  9,
  n0,
  _DHRC,
  0,
  () => DeleteHomeRegionControlRequest,
  () => DeleteHomeRegionControlResult,
];
export var DescribeHomeRegionControls: StaticOperationSchema = [
  9,
  n0,
  _DHRCe,
  0,
  () => DescribeHomeRegionControlsRequest,
  () => DescribeHomeRegionControlsResult,
];
export var GetHomeRegion: StaticOperationSchema = [
  9,
  n0,
  _GHR,
  0,
  () => GetHomeRegionRequest,
  () => GetHomeRegionResult,
];
