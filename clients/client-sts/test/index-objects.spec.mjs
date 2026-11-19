import {
  AssumedRoleUser$,
  AssumeRole$,
  AssumeRoleCommand,
  AssumeRoleRequest$,
  AssumeRoleResponse$,
  AssumeRoleWithSAML$,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithSAMLRequest$,
  AssumeRoleWithSAMLResponse$,
  AssumeRoleWithWebIdentity$,
  AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequest$,
  AssumeRoleWithWebIdentityResponse$,
  AssumeRoot$,
  AssumeRootCommand,
  AssumeRootRequest$,
  AssumeRootResponse$,
  Credentials$,
  DecodeAuthorizationMessage$,
  DecodeAuthorizationMessageCommand,
  DecodeAuthorizationMessageRequest$,
  DecodeAuthorizationMessageResponse$,
  ExpiredTokenException,
  ExpiredTokenException$,
  ExpiredTradeInTokenException,
  ExpiredTradeInTokenException$,
  FederatedUser$,
  GetAccessKeyInfo$,
  GetAccessKeyInfoCommand,
  GetAccessKeyInfoRequest$,
  GetAccessKeyInfoResponse$,
  GetCallerIdentity$,
  GetCallerIdentityCommand,
  GetCallerIdentityRequest$,
  GetCallerIdentityResponse$,
  GetDelegatedAccessToken$,
  GetDelegatedAccessTokenCommand,
  GetDelegatedAccessTokenRequest$,
  GetDelegatedAccessTokenResponse$,
  GetFederationToken$,
  GetFederationTokenCommand,
  GetFederationTokenRequest$,
  GetFederationTokenResponse$,
  GetScopedCredentials$,
  GetScopedCredentialsCommand,
  GetScopedCredentialsRequest$,
  GetScopedCredentialsResponse$,
  GetSessionToken$,
  GetSessionTokenCommand,
  GetSessionTokenRequest$,
  GetSessionTokenResponse$,
  GetWebIdentityToken$,
  GetWebIdentityTokenCommand,
  GetWebIdentityTokenRequest$,
  GetWebIdentityTokenResponse$,
  IDPCommunicationErrorException,
  IDPCommunicationErrorException$,
  IDPRejectedClaimException,
  IDPRejectedClaimException$,
  InsufficientSessionLifetimeException,
  InsufficientSessionLifetimeException$,
  InvalidAuthorizationMessageException,
  InvalidAuthorizationMessageException$,
  InvalidContextAssertionException,
  InvalidContextAssertionException$,
  InvalidIdentityTokenException,
  InvalidIdentityTokenException$,
  InvalidSubjectCredentialsException,
  InvalidSubjectCredentialsException$,
  JWTPayloadSizeExceededException,
  JWTPayloadSizeExceededException$,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
  OriginIdentity$,
  OutboundWebIdentityFederationDisabledException,
  OutboundWebIdentityFederationDisabledException$,
  PackedPolicyTooLargeException,
  PackedPolicyTooLargeException$,
  PolicyDescriptorType$,
  ProvidedContext$,
  RegionDisabledException,
  RegionDisabledException$,
  ScopedSession$,
  SessionDurationEscalationException,
  SessionDurationEscalationException$,
  STS,
  STSClient,
  STSServiceException,
  Tag$,
  TransactionContext$,
  TrustedIdentityPropagationContext$,
  WebIdentityTokenSubjectModeType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof STSClient === "function");
assert(typeof STS === "function");
// commands
assert(typeof AssumeRoleCommand === "function");
assert(typeof AssumeRole$ === "object");
assert(typeof AssumeRoleWithSAMLCommand === "function");
assert(typeof AssumeRoleWithSAML$ === "object");
assert(typeof AssumeRoleWithWebIdentityCommand === "function");
assert(typeof AssumeRoleWithWebIdentity$ === "object");
assert(typeof AssumeRootCommand === "function");
assert(typeof AssumeRoot$ === "object");
assert(typeof DecodeAuthorizationMessageCommand === "function");
assert(typeof DecodeAuthorizationMessage$ === "object");
assert(typeof GetAccessKeyInfoCommand === "function");
assert(typeof GetAccessKeyInfo$ === "object");
assert(typeof GetCallerIdentityCommand === "function");
assert(typeof GetCallerIdentity$ === "object");
assert(typeof GetDelegatedAccessTokenCommand === "function");
assert(typeof GetDelegatedAccessToken$ === "object");
assert(typeof GetFederationTokenCommand === "function");
assert(typeof GetFederationToken$ === "object");
assert(typeof GetScopedCredentialsCommand === "function");
assert(typeof GetScopedCredentials$ === "object");
assert(typeof GetSessionTokenCommand === "function");
assert(typeof GetSessionToken$ === "object");
assert(typeof GetWebIdentityTokenCommand === "function");
assert(typeof GetWebIdentityToken$ === "object");
// structural schemas
assert(typeof AssumedRoleUser$ === "object");
assert(typeof AssumeRoleRequest$ === "object");
assert(typeof AssumeRoleResponse$ === "object");
assert(typeof AssumeRoleWithSAMLRequest$ === "object");
assert(typeof AssumeRoleWithSAMLResponse$ === "object");
assert(typeof AssumeRoleWithWebIdentityRequest$ === "object");
assert(typeof AssumeRoleWithWebIdentityResponse$ === "object");
assert(typeof AssumeRootRequest$ === "object");
assert(typeof AssumeRootResponse$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof DecodeAuthorizationMessageRequest$ === "object");
assert(typeof DecodeAuthorizationMessageResponse$ === "object");
assert(typeof FederatedUser$ === "object");
assert(typeof GetAccessKeyInfoRequest$ === "object");
assert(typeof GetAccessKeyInfoResponse$ === "object");
assert(typeof GetCallerIdentityRequest$ === "object");
assert(typeof GetCallerIdentityResponse$ === "object");
assert(typeof GetDelegatedAccessTokenRequest$ === "object");
assert(typeof GetDelegatedAccessTokenResponse$ === "object");
assert(typeof GetFederationTokenRequest$ === "object");
assert(typeof GetFederationTokenResponse$ === "object");
assert(typeof GetScopedCredentialsRequest$ === "object");
assert(typeof GetScopedCredentialsResponse$ === "object");
assert(typeof GetSessionTokenRequest$ === "object");
assert(typeof GetSessionTokenResponse$ === "object");
assert(typeof GetWebIdentityTokenRequest$ === "object");
assert(typeof GetWebIdentityTokenResponse$ === "object");
assert(typeof OriginIdentity$ === "object");
assert(typeof PolicyDescriptorType$ === "object");
assert(typeof ProvidedContext$ === "object");
assert(typeof ScopedSession$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TransactionContext$ === "object");
assert(typeof TrustedIdentityPropagationContext$ === "object");
// enums
assert(typeof WebIdentityTokenSubjectModeType === "object");
// errors
assert(ExpiredTokenException.prototype instanceof STSServiceException);
assert(typeof ExpiredTokenException$ === "object");
assert(ExpiredTradeInTokenException.prototype instanceof STSServiceException);
assert(typeof ExpiredTradeInTokenException$ === "object");
assert(IDPCommunicationErrorException.prototype instanceof STSServiceException);
assert(typeof IDPCommunicationErrorException$ === "object");
assert(IDPRejectedClaimException.prototype instanceof STSServiceException);
assert(typeof IDPRejectedClaimException$ === "object");
assert(InsufficientSessionLifetimeException.prototype instanceof STSServiceException);
assert(typeof InsufficientSessionLifetimeException$ === "object");
assert(InvalidAuthorizationMessageException.prototype instanceof STSServiceException);
assert(typeof InvalidAuthorizationMessageException$ === "object");
assert(InvalidContextAssertionException.prototype instanceof STSServiceException);
assert(typeof InvalidContextAssertionException$ === "object");
assert(InvalidIdentityTokenException.prototype instanceof STSServiceException);
assert(typeof InvalidIdentityTokenException$ === "object");
assert(InvalidSubjectCredentialsException.prototype instanceof STSServiceException);
assert(typeof InvalidSubjectCredentialsException$ === "object");
assert(JWTPayloadSizeExceededException.prototype instanceof STSServiceException);
assert(typeof JWTPayloadSizeExceededException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof STSServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(OutboundWebIdentityFederationDisabledException.prototype instanceof STSServiceException);
assert(typeof OutboundWebIdentityFederationDisabledException$ === "object");
assert(PackedPolicyTooLargeException.prototype instanceof STSServiceException);
assert(typeof PackedPolicyTooLargeException$ === "object");
assert(RegionDisabledException.prototype instanceof STSServiceException);
assert(typeof RegionDisabledException$ === "object");
assert(SessionDurationEscalationException.prototype instanceof STSServiceException);
assert(typeof SessionDurationEscalationException$ === "object");
assert(STSServiceException.prototype instanceof Error);
console.log(`STS index test passed.`);
