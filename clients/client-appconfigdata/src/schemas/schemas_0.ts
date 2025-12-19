const _AI = "ApplicationIdentifier";
const _BRD = "BadRequestDetails";
const _BRE = "BadRequestException";
const _C = "Configuration";
const _CPI = "ConfigurationProfileIdentifier";
const _CT = "ConfigurationToken";
const _CT_ = "Content-Type";
const _CTo = "ContentType";
const _D = "Details";
const _EI = "EnvironmentIdentifier";
const _GLC = "GetLatestConfiguration";
const _GLCR = "GetLatestConfigurationRequest";
const _GLCRe = "GetLatestConfigurationResponse";
const _ICT = "InitialConfigurationToken";
const _IP = "InvalidParameters";
const _IPD = "InvalidParameterDetail";
const _IPM = "InvalidParameterMap";
const _ISE = "InternalServerException";
const _M = "Message";
const _NPCT = "NextPollConfigurationToken";
const _NPCT_ = "Next-Poll-Configuration-Token";
const _NPIIS = "NextPollIntervalInSeconds";
const _NPIIS_ = "Next-Poll-Interval-In-Seconds";
const _P = "Problem";
const _R = "Reason";
const _RB = "ReferencedBy";
const _RMPIIS = "RequiredMinimumPollIntervalInSeconds";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceType";
const _SB = "SensitiveBlob";
const _SCS = "StartConfigurationSession";
const _SCSR = "StartConfigurationSessionRequest";
const _SCSRt = "StartConfigurationSessionResponse";
const _TE = "ThrottlingException";
const _VL = "VersionLabel";
const _VL_ = "Version-Label";
const _c = "client";
const _ct = "configuration_token";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.appconfigdata";
const n0 = "com.amazonaws.appconfigdata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { AppConfigDataServiceException } from "../models/AppConfigDataServiceException";
import {
  BadRequestException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
} from "../models/errors";

/* eslint no-var: 0 */
var SensitiveBlob: StaticSimpleSchema = [0, n0, _SB, 8, 21];
export var BadRequestException$: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R, _D],
  [0, 0, () => BadRequestDetails$],
];
TypeRegistry.for(n0).registerError(BadRequestException$, BadRequestException);
export var GetLatestConfigurationRequest$: StaticStructureSchema = [3, n0, _GLCR, 0, [_CT], [[0, { [_hQ]: _ct }]]];
export var GetLatestConfigurationResponse$: StaticStructureSchema = [
  3,
  n0,
  _GLCRe,
  0,
  [_NPCT, _NPIIS, _CTo, _C, _VL],
  [
    [0, { [_hH]: _NPCT_ }],
    [1, { [_hH]: _NPIIS_ }],
    [0, { [_hH]: _CT_ }],
    [() => SensitiveBlob, 16],
    [0, { [_hH]: _VL_ }],
  ],
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var InvalidParameterDetail$: StaticStructureSchema = [3, n0, _IPD, 0, [_P], [0]];
export var ResourceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M, _RT, _RB],
  [0, 0, 128 | 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var StartConfigurationSessionRequest$: StaticStructureSchema = [
  3,
  n0,
  _SCSR,
  0,
  [_AI, _EI, _CPI, _RMPIIS],
  [0, 0, 0, 1],
];
export var StartConfigurationSessionResponse$: StaticStructureSchema = [3, n0, _SCSRt, 0, [_ICT], [0]];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var AppConfigDataServiceException$: StaticErrorSchema = [-3, _sm, "AppConfigDataServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(AppConfigDataServiceException$, AppConfigDataServiceException);
var InvalidParameterMap: StaticMapSchema = [2, n0, _IPM, 0, 0, () => InvalidParameterDetail$];
var StringMap = 128 | 0;
export var BadRequestDetails$: StaticUnionSchema = [4, n0, _BRD, 0, [_IP], [() => InvalidParameterMap]];
export var GetLatestConfiguration$: StaticOperationSchema = [
  9,
  n0,
  _GLC,
  { [_h]: ["GET", "/configuration", 200] },
  () => GetLatestConfigurationRequest$,
  () => GetLatestConfigurationResponse$,
];
export var StartConfigurationSession$: StaticOperationSchema = [
  9,
  n0,
  _SCS,
  { [_h]: ["POST", "/configurationsessions", 201] },
  () => StartConfigurationSessionRequest$,
  () => StartConfigurationSessionResponse$,
];
