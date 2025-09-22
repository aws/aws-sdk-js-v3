export const _A = "Arn";
export const _AKI = "AccessKeyId";
export const _AR = "AssumeRole";
export const _ARI = "AssumedRoleId";
export const _ARR = "AssumeRoleRequest";
export const _ARRs = "AssumeRoleResponse";
export const _ARU = "AssumedRoleUser";
export const _ARWWI = "AssumeRoleWithWebIdentity";
export const _ARWWIR = "AssumeRoleWithWebIdentityRequest";
export const _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
export const _Au = "Audience";
export const _C = "Credentials";
export const _CA = "ContextAssertion";
export const _DS = "DurationSeconds";
export const _E = "Expiration";
export const _EI = "ExternalId";
export const _ETE = "ExpiredTokenException";
export const _IDPCEE = "IDPCommunicationErrorException";
export const _IDPRCE = "IDPRejectedClaimException";
export const _IITE = "InvalidIdentityTokenException";
export const _K = "Key";
export const _MPDE = "MalformedPolicyDocumentException";
export const _P = "Policy";
export const _PA = "PolicyArns";
export const _PAr = "ProviderArn";
export const _PC = "ProvidedContexts";
export const _PCLT = "ProvidedContextsListType";
export const _PCr = "ProvidedContext";
export const _PDT = "PolicyDescriptorType";
export const _PI = "ProviderId";
export const _PPS = "PackedPolicySize";
export const _PPTLE = "PackedPolicyTooLargeException";
export const _Pr = "Provider";
export const _RA = "RoleArn";
export const _RDE = "RegionDisabledException";
export const _RSN = "RoleSessionName";
export const _SAK = "SecretAccessKey";
export const _SFWIT = "SubjectFromWebIdentityToken";
export const _SI = "SourceIdentity";
export const _SN = "SerialNumber";
export const _ST = "SessionToken";
export const _T = "Tags";
export const _TC = "TokenCode";
export const _TTK = "TransitiveTagKeys";
export const _Ta = "Tag";
export const _V = "Value";
export const _WIT = "WebIdentityToken";
export const _a = "arn";
export const _aKST = "accessKeySecretType";
export const _aQE = "awsQueryError";
export const _c = "client";
export const _cTT = "clientTokenType";
export const _e = "error";
export const _hE = "httpError";
export const _m = "message";
export const _pDLT = "policyDescriptorListType";
export const _tLT = "tagListType";
export const n0 = "com.amazonaws.sts";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { STSServiceException as __STSServiceException } from "../models/STSServiceException";

/* eslint no-var: 0 */

export var STSServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.sts",
  "STSServiceException",
  0,
  [],
  [],
  __STSServiceException
);
