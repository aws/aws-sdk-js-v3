export const _ADE = "AccessDeniedException";
export const _ARFPI = "AssumeRoleForPodIdentity";
export const _ARFPIR = "AssumeRoleForPodIdentityRequest";
export const _ARFPIRs = "AssumeRoleForPodIdentityResponse";
export const _ARU = "AssumedRoleUser";
export const _C = "Credentials";
export const _ETE = "ExpiredTokenException";
export const _IPE = "InvalidParameterException";
export const _IRE = "InvalidRequestException";
export const _ISE = "InternalServerException";
export const _ITE = "InvalidTokenException";
export const _JT = "JwtToken";
export const _PIA = "PodIdentityAssociation";
export const _RNFE = "ResourceNotFoundException";
export const _S = "Subject";
export const _SUE = "ServiceUnavailableException";
export const _TE = "ThrottlingException";
export const _a = "arn";
export const _aA = "associationArn";
export const _aI = "associationId";
export const _aKI = "accessKeyId";
export const _aRI = "assumeRoleId";
export const _aRU = "assumedRoleUser";
export const _au = "audience";
export const _c = "client";
export const _cN = "clusterName";
export const _cr = "credentials";
export const _e = "error";
export const _ex = "expiration";
export const _h = "http";
export const _hE = "httpError";
export const _m = "message";
export const _n = "namespace";
export const _pIA = "podIdentityAssociation";
export const _s = "subject";
export const _sA = "serviceAccount";
export const _sAK = "secretAccessKey";
export const _sT = "sessionToken";
export const _se = "server";
export const _t = "token";
export const n0 = "com.amazonaws.eksauth";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { EKSAuthServiceException as __EKSAuthServiceException } from "../models/EKSAuthServiceException";

/* eslint no-var: 0 */

export var EKSAuthServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.eksauth",
  "EKSAuthServiceException",
  0,
  [],
  [],
  __EKSAuthServiceException
);
