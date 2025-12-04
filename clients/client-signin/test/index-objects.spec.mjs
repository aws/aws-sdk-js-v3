import {
  CreateOAuth2TokenCommand,
  Signin,
  SigninClient,
  SigninServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SigninClient === "function")
assert(typeof Signin === "function")
// commands
assert(typeof CreateOAuth2TokenCommand === "function")
// errors
assert(SigninServiceException.prototype instanceof Error)
console.log(`Signin index test passed.`);
