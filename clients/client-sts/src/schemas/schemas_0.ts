export const _A = "Arn";
export const _AKI = "AccessKeyId";
export const _AR = "AssumeRole";
export const _ARI = "AssumedRoleId";
export const _ARR = "AssumeRoleRequest";
export const _ARRs = "AssumeRoleResponse";
export const _ARRss = "AssumeRootRequest";
export const _ARRssu = "AssumeRootResponse";
export const _ARU = "AssumedRoleUser";
export const _ARWSAML = "AssumeRoleWithSAML";
export const _ARWSAMLR = "AssumeRoleWithSAMLRequest";
export const _ARWSAMLRs = "AssumeRoleWithSAMLResponse";
export const _ARWWI = "AssumeRoleWithWebIdentity";
export const _ARWWIR = "AssumeRoleWithWebIdentityRequest";
export const _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
export const _ARs = "AssumeRoot";
export const _Ac = "Account";
export const _Au = "Audience";
export const _C = "Credentials";
export const _CA = "ContextAssertion";
export const _DAM = "DecodeAuthorizationMessage";
export const _DAMR = "DecodeAuthorizationMessageRequest";
export const _DAMRe = "DecodeAuthorizationMessageResponse";
export const _DM = "DecodedMessage";
export const _DS = "DurationSeconds";
export const _E = "Expiration";
export const _EI = "ExternalId";
export const _EM = "EncodedMessage";
export const _ETE = "ExpiredTokenException";
export const _FU = "FederatedUser";
export const _FUI = "FederatedUserId";
export const _GAKI = "GetAccessKeyInfo";
export const _GAKIR = "GetAccessKeyInfoRequest";
export const _GAKIRe = "GetAccessKeyInfoResponse";
export const _GCI = "GetCallerIdentity";
export const _GCIR = "GetCallerIdentityRequest";
export const _GCIRe = "GetCallerIdentityResponse";
export const _GFT = "GetFederationToken";
export const _GFTR = "GetFederationTokenRequest";
export const _GFTRe = "GetFederationTokenResponse";
export const _GST = "GetSessionToken";
export const _GSTR = "GetSessionTokenRequest";
export const _GSTRe = "GetSessionTokenResponse";
export const _I = "Issuer";
export const _IAME = "InvalidAuthorizationMessageException";
export const _IDPCEE = "IDPCommunicationErrorException";
export const _IDPRCE = "IDPRejectedClaimException";
export const _IITE = "InvalidIdentityTokenException";
export const _K = "Key";
export const _MPDE = "MalformedPolicyDocumentException";
export const _N = "Name";
export const _NQ = "NameQualifier";
export const _P = "Policy";
export const _PA = "PolicyArns";
export const _PAr = "PrincipalArn";
export const _PAro = "ProviderArn";
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
export const _S = "Subject";
export const _SAK = "SecretAccessKey";
export const _SAMLA = "SAMLAssertion";
export const _SAMLAT = "SAMLAssertionType";
export const _SFWIT = "SubjectFromWebIdentityToken";
export const _SI = "SourceIdentity";
export const _SN = "SerialNumber";
export const _ST = "SubjectType";
export const _STe = "SessionToken";
export const _T = "Tags";
export const _TC = "TokenCode";
export const _TP = "TargetPrincipal";
export const _TPA = "TaskPolicyArn";
export const _TTK = "TransitiveTagKeys";
export const _Ta = "Tag";
export const _UI = "UserId";
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
