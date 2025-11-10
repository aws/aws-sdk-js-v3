const _ADE = "AccessDeniedException";
const _BN = "BucketName";
const _BO = "BucketOwner";
const _CE = "ConflictException";
const _CRP = "ConnectionRecordingPreferences";
const _CT = "ClientToken";
const _DCRP = "DeleteConnectionRecordingPreferences";
const _DCRPR = "DeleteConnectionRecordingPreferencesRequest";
const _DCRPRe = "DeleteConnectionRecordingPreferencesResponse";
const _GCRP = "GetConnectionRecordingPreferences";
const _GCRPR = "GetConnectionRecordingPreferencesResponse";
const _ISE = "InternalServerException";
const _KMSKA = "KMSKeyArn";
const _RD = "RecordingDestinations";
const _RNFE = "ResourceNotFoundException";
const _SB = "S3Buckets";
const _SBu = "S3Bucket";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _UCRP = "UpdateConnectionRecordingPreferences";
const _UCRPR = "UpdateConnectionRecordingPreferencesRequest";
const _UCRPRp = "UpdateConnectionRecordingPreferencesResponse";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ssmguiconnect";
const n0 = "com.amazonaws.ssmguiconnect";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { SSMGuiConnectServiceException as __SSMGuiConnectServiceException } from "../models/SSMGuiConnectServiceException";

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

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var ConnectionRecordingPreferences: StaticStructureSchema = [
  3,
  n0,
  _CRP,
  0,
  [_RD, _KMSKA],
  [() => RecordingDestinations, 0],
];
export var DeleteConnectionRecordingPreferencesRequest: StaticStructureSchema = [3, n0, _DCRPR, 0, [_CT], [[0, 4]]];
export var DeleteConnectionRecordingPreferencesResponse: StaticStructureSchema = [3, n0, _DCRPRe, 0, [_CT], [0]];
export var GetConnectionRecordingPreferencesResponse: StaticStructureSchema = [
  3,
  n0,
  _GCRPR,
  0,
  [_CT, _CRP],
  [0, () => ConnectionRecordingPreferences],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var RecordingDestinations: StaticStructureSchema = [3, n0, _RD, 0, [_SB], [() => S3Buckets]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var S3Bucket: StaticStructureSchema = [3, n0, _SBu, 0, [_BO, _BN], [0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UpdateConnectionRecordingPreferencesRequest: StaticStructureSchema = [
  3,
  n0,
  _UCRPR,
  0,
  [_CRP, _CT],
  [() => ConnectionRecordingPreferences, [0, 4]],
];
export var UpdateConnectionRecordingPreferencesResponse: StaticStructureSchema = [
  3,
  n0,
  _UCRPRp,
  0,
  [_CT, _CRP],
  [0, () => ConnectionRecordingPreferences],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var SSMGuiConnectServiceException: StaticErrorSchema = [-3, _sm, "SSMGuiConnectServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SSMGuiConnectServiceException, __SSMGuiConnectServiceException);

export var S3Buckets: StaticListSchema = [1, n0, _SB, 0, () => S3Bucket];
export var DeleteConnectionRecordingPreferences: StaticOperationSchema = [
  9,
  n0,
  _DCRP,
  {
    [_h]: ["POST", "/DeleteConnectionRecordingPreferences", 200],
  },
  () => DeleteConnectionRecordingPreferencesRequest,
  () => DeleteConnectionRecordingPreferencesResponse,
];
export var GetConnectionRecordingPreferences: StaticOperationSchema = [
  9,
  n0,
  _GCRP,
  {
    [_h]: ["POST", "/GetConnectionRecordingPreferences", 200],
  },
  () => __Unit,
  () => GetConnectionRecordingPreferencesResponse,
];
export var UpdateConnectionRecordingPreferences: StaticOperationSchema = [
  9,
  n0,
  _UCRP,
  {
    [_h]: ["POST", "/UpdateConnectionRecordingPreferences", 200],
  },
  () => UpdateConnectionRecordingPreferencesRequest,
  () => UpdateConnectionRecordingPreferencesResponse,
];
