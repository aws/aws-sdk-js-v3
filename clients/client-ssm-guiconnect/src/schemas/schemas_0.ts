export const _ADE = "AccessDeniedException";
export const _BN = "BucketName";
export const _BO = "BucketOwner";
export const _CE = "ConflictException";
export const _CRP = "ConnectionRecordingPreferences";
export const _CT = "ClientToken";
export const _DCRP = "DeleteConnectionRecordingPreferences";
export const _DCRPR = "DeleteConnectionRecordingPreferencesRequest";
export const _DCRPRe = "DeleteConnectionRecordingPreferencesResponse";
export const _GCRP = "GetConnectionRecordingPreferences";
export const _GCRPR = "GetConnectionRecordingPreferencesResponse";
export const _ISE = "InternalServerException";
export const _KMSKA = "KMSKeyArn";
export const _RD = "RecordingDestinations";
export const _RNFE = "ResourceNotFoundException";
export const _SB = "S3Buckets";
export const _SBu = "S3Bucket";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _UCRP = "UpdateConnectionRecordingPreferences";
export const _UCRPR = "UpdateConnectionRecordingPreferencesRequest";
export const _UCRPRp = "UpdateConnectionRecordingPreferencesResponse";
export const _VE = "ValidationException";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _m = "message";
export const _s = "server";
export const n0 = "com.amazonaws.ssmguiconnect";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { SSMGuiConnectServiceException as __SSMGuiConnectServiceException } from "../models/SSMGuiConnectServiceException";

/* eslint no-var: 0 */

export var Unit = "unit" as const;

export var SSMGuiConnectServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.ssmguiconnect",
  "SSMGuiConnectServiceException",
  0,
  [],
  [],
  __SSMGuiConnectServiceException
);
