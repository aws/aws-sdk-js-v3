import {
  ApiGatewayManagementApi,
  ApiGatewayManagementApiClient,
  ApiGatewayManagementApiServiceException,
  DeleteConnectionCommand,
  GetConnectionCommand,
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
assert(ApiGatewayManagementApiServiceException.prototype instanceof Error);
console.log(`ApiGatewayManagementApi index test passed.`);
