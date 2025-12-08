import {
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  AssumeRootCommand,
  DecodeAuthorizationMessageCommand,
  ExpiredTokenException,
  ExpiredTradeInTokenException,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetDelegatedAccessTokenCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
  GetWebIdentityTokenCommand,
  IDPCommunicationErrorException,
  IDPRejectedClaimException,
  InvalidAuthorizationMessageException,
  InvalidIdentityTokenException,
  JWTPayloadSizeExceededException,
  MalformedPolicyDocumentException,
  OutboundWebIdentityFederationDisabledException,
  PackedPolicyTooLargeException,
  RegionDisabledException,
  STS,
  STSClient,
  STSServiceException,
  SessionDurationEscalationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof STSClient === "function");
assert(typeof STS === "function");
// commands
assert(typeof AssumeRoleCommand === "function");
assert(typeof AssumeRoleWithSAMLCommand === "function");
assert(typeof AssumeRoleWithWebIdentityCommand === "function");
assert(typeof AssumeRootCommand === "function");
assert(typeof DecodeAuthorizationMessageCommand === "function");
assert(typeof GetAccessKeyInfoCommand === "function");
assert(typeof GetCallerIdentityCommand === "function");
assert(typeof GetDelegatedAccessTokenCommand === "function");
assert(typeof GetFederationTokenCommand === "function");
assert(typeof GetSessionTokenCommand === "function");
assert(typeof GetWebIdentityTokenCommand === "function");
// errors
assert(ExpiredTokenException.prototype instanceof STSServiceException);
assert(ExpiredTradeInTokenException.prototype instanceof STSServiceException);
assert(IDPCommunicationErrorException.prototype instanceof STSServiceException);
assert(IDPRejectedClaimException.prototype instanceof STSServiceException);
assert(InvalidAuthorizationMessageException.prototype instanceof STSServiceException);
assert(InvalidIdentityTokenException.prototype instanceof STSServiceException);
assert(JWTPayloadSizeExceededException.prototype instanceof STSServiceException);
assert(MalformedPolicyDocumentException.prototype instanceof STSServiceException);
assert(OutboundWebIdentityFederationDisabledException.prototype instanceof STSServiceException);
assert(PackedPolicyTooLargeException.prototype instanceof STSServiceException);
assert(RegionDisabledException.prototype instanceof STSServiceException);
assert(SessionDurationEscalationException.prototype instanceof STSServiceException);
assert(STSServiceException.prototype instanceof Error);
console.log(`STS index test passed.`);
