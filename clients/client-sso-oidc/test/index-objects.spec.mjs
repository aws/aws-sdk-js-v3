import {
  CreateTokenCommand,
  CreateTokenWithIAMCommand,
  RegisterClientCommand,
  SSOOIDC,
  SSOOIDCClient,
  SSOOIDCServiceException,
  StartDeviceAuthorizationCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSOOIDCClient === "function");
assert(typeof SSOOIDC === "function");
// commands
assert(typeof CreateTokenCommand === "function");
assert(typeof CreateTokenWithIAMCommand === "function");
assert(typeof RegisterClientCommand === "function");
assert(typeof StartDeviceAuthorizationCommand === "function");
// errors
assert(SSOOIDCServiceException.prototype instanceof Error);
console.log(`SSOOIDC index test passed.`);
