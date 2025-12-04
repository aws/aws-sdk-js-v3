import {
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  AssumeRootCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetDelegatedAccessTokenCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
  GetWebIdentityTokenCommand,
  STS,
  STSClient,
  STSServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof STSClient === "function")
assert(typeof STS === "function")
// commands
assert(typeof AssumeRoleCommand === "function")
assert(typeof AssumeRoleWithSAMLCommand === "function")
assert(typeof AssumeRoleWithWebIdentityCommand === "function")
assert(typeof AssumeRootCommand === "function")
assert(typeof DecodeAuthorizationMessageCommand === "function")
assert(typeof GetAccessKeyInfoCommand === "function")
assert(typeof GetCallerIdentityCommand === "function")
assert(typeof GetDelegatedAccessTokenCommand === "function")
assert(typeof GetFederationTokenCommand === "function")
assert(typeof GetSessionTokenCommand === "function")
assert(typeof GetWebIdentityTokenCommand === "function")
// errors
assert(STSServiceException.prototype instanceof Error)
console.log(`STS index test passed.`);
