import {
  ApiGatewayManagementApi,
  ApiGatewayManagementApiClient,
  ApiGatewayManagementApiServiceException,
  DeleteConnectionCommand,
  ForbiddenException,
  GetConnectionCommand,
  GoneException,
  LimitExceededException,
  PayloadTooLargeException,
  PostToConnectionCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApiGatewayManagementApiClient === "function");
assert(typeof ApiGatewayManagementApi === "function");
// commands
assert(typeof DeleteConnectionCommand === "function");
assert(typeof GetConnectionCommand === "function");
assert(typeof PostToConnectionCommand === "function");
// errors
assert(ForbiddenException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(GoneException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(LimitExceededException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(PayloadTooLargeException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(ApiGatewayManagementApiServiceException.prototype instanceof Error);
console.log(`ApiGatewayManagementApi index test passed.`);
