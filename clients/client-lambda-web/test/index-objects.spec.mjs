import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountQuotas$,
  AccountUsage$,
  GetWebAccountSettings$,
  GetWebAccountSettingsCommand,
  GetWebAccountSettingsRequest$,
  GetWebAccountSettingsResponse$,
  InternalServerException,
  InternalServerException$,
  LambdaWeb,
  LambdaWebClient,
  LambdaWebServiceException,
  ThrottlingException,
  ThrottlingException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LambdaWebClient === "function");
assert(typeof LambdaWeb === "function");
// commands
assert(typeof GetWebAccountSettingsCommand === "function");
assert(typeof GetWebAccountSettings$ === "object");
// structural schemas
assert(typeof AccountQuotas$ === "object");
assert(typeof AccountUsage$ === "object");
assert(typeof GetWebAccountSettingsRequest$ === "object");
assert(typeof GetWebAccountSettingsResponse$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof LambdaWebServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof LambdaWebServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof LambdaWebServiceException);
assert(typeof ThrottlingException$ === "object");
assert(LambdaWebServiceException.prototype instanceof Error);
console.log(`LambdaWeb index test passed.`);
