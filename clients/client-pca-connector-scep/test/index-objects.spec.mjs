import {
  ConnectorStatus,
  ConnectorStatusReason,
  ConnectorType,
  CreateChallengeCommand,
  CreateConnectorCommand,
  DeleteChallengeCommand,
  DeleteConnectorCommand,
  GetChallengeMetadataCommand,
  GetChallengePasswordCommand,
  GetConnectorCommand,
  ListChallengeMetadataCommand,
  ListConnectorsCommand,
  ListTagsForResourceCommand,
  PcaConnectorScep,
  PcaConnectorScepClient,
  PcaConnectorScepServiceException,
  TagResourceCommand,
  UntagResourceCommand,
  paginateListChallengeMetadata,
  paginateListConnectors,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PcaConnectorScepClient === "function")
assert(typeof PcaConnectorScep === "function")
// commands
assert(typeof CreateChallengeCommand === "function")
assert(typeof CreateConnectorCommand === "function")
assert(typeof DeleteChallengeCommand === "function")
assert(typeof DeleteConnectorCommand === "function")
assert(typeof GetChallengeMetadataCommand === "function")
assert(typeof GetChallengePasswordCommand === "function")
assert(typeof GetConnectorCommand === "function")
assert(typeof ListChallengeMetadataCommand === "function")
assert(typeof ListConnectorsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof ConnectorStatus === "object");
assert(typeof ConnectorStatusReason === "object");
assert(typeof ConnectorType === "object");
// errors
assert(PcaConnectorScepServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListChallengeMetadata === "function")
assert(typeof paginateListConnectors === "function")
console.log(`PcaConnectorScep index test passed.`);
