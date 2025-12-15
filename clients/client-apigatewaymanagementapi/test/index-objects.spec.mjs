import {
  ApiGatewayManagementApi,
  ApiGatewayManagementApiClient,
  ApiGatewayManagementApiServiceException,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  ForbiddenException,
  ForbiddenException$,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionRequest$,
  GetConnectionResponse$,
  GoneException,
  GoneException$,
  Identity$,
  LimitExceededException,
  LimitExceededException$,
  PayloadTooLargeException,
  PayloadTooLargeException$,
  PostToConnection$,
  PostToConnectionCommand,
  PostToConnectionRequest$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApiGatewayManagementApiClient === "function");
assert(typeof ApiGatewayManagementApi === "function");
// commands
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof PostToConnectionCommand === "function");
assert(typeof PostToConnection$ === "object");
// structural schemas
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof GetConnectionRequest$ === "object");
assert(typeof GetConnectionResponse$ === "object");
assert(typeof Identity$ === "object");
assert(typeof PostToConnectionRequest$ === "object");
// errors
assert(ForbiddenException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(typeof ForbiddenException$ === "object");
assert(GoneException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(typeof GoneException$ === "object");
assert(LimitExceededException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(typeof LimitExceededException$ === "object");
assert(PayloadTooLargeException.prototype instanceof ApiGatewayManagementApiServiceException);
assert(typeof PayloadTooLargeException$ === "object");
assert(ApiGatewayManagementApiServiceException.prototype instanceof Error);
console.log(`ApiGatewayManagementApi index test passed.`);
