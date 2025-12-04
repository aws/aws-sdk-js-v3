import {
  AssumeRoleForPodIdentityCommand,
  EKSAuth,
  EKSAuthClient,
  EKSAuthServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EKSAuthClient === "function")
assert(typeof EKSAuth === "function")
// commands
assert(typeof AssumeRoleForPodIdentityCommand === "function")
// errors
assert(EKSAuthServiceException.prototype instanceof Error)
console.log(`EKSAuth index test passed.`);
