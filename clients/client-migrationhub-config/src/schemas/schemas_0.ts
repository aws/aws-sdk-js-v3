export const _ADE = "AccessDeniedException";
export const _CHRC = "CreateHomeRegionControl";
export const _CHRCR = "CreateHomeRegionControlRequest";
export const _CHRCRr = "CreateHomeRegionControlResult";
export const _CI = "ControlId";
export const _DHRC = "DeleteHomeRegionControl";
export const _DHRCR = "DeleteHomeRegionControlRequest";
export const _DHRCRe = "DeleteHomeRegionControlResult";
export const _DHRCRes = "DescribeHomeRegionControlsRequest";
export const _DHRCResc = "DescribeHomeRegionControlsResult";
export const _DHRCe = "DescribeHomeRegionControls";
export const _DR = "DryRun";
export const _DRO = "DryRunOperation";
export const _GHR = "GetHomeRegion";
export const _GHRR = "GetHomeRegionRequest";
export const _GHRRe = "GetHomeRegionResult";
export const _HR = "HomeRegion";
export const _HRC = "HomeRegionControl";
export const _HRCo = "HomeRegionControls";
export const _I = "Id";
export const _IIE = "InvalidInputException";
export const _ISE = "InternalServerError";
export const _M = "Message";
export const _MR = "MaxResults";
export const _NT = "NextToken";
export const _RA = "Retry-After";
export const _RAS = "RetryAfterSeconds";
export const _RT = "RequestedTime";
export const _SUE = "ServiceUnavailableException";
export const _T = "Target";
export const _TE = "ThrottlingException";
export const _Ty = "Type";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.migrationhubconfig";
export const n0 = "com.amazonaws.migrationhubconfig";

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
