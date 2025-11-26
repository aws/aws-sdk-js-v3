import {
  AssociateEipToVlanCommand,
  CheckResult,
  CheckType,
  CreateEnvironmentCommand,
  CreateEnvironmentHostCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentHostCommand,
  DisassociateEipFromVlanCommand,
  EnvironmentState,
  Evs,
  EvsClient,
  EvsServiceException,
  GetEnvironmentCommand,
  HostState,
  ListEnvironmentHostsCommand,
  ListEnvironmentVlansCommand,
  ListEnvironmentsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  VcfVersion,
  VlanState,
  _InstanceType,
  paginateListEnvironmentHosts,
  paginateListEnvironmentVlans,
  paginateListEnvironments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EvsClient === "function")
assert(typeof Evs === "function")
// commands
assert(typeof AssociateEipToVlanCommand === "function")
assert(typeof CreateEnvironmentCommand === "function")
assert(typeof CreateEnvironmentHostCommand === "function")
assert(typeof DeleteEnvironmentCommand === "function")
assert(typeof DeleteEnvironmentHostCommand === "function")
assert(typeof DisassociateEipFromVlanCommand === "function")
assert(typeof GetEnvironmentCommand === "function")
assert(typeof ListEnvironmentHostsCommand === "function")
assert(typeof ListEnvironmentsCommand === "function")
assert(typeof ListEnvironmentVlansCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof CheckResult === "object");
assert(typeof CheckType === "object");
assert(typeof EnvironmentState === "object");
assert(typeof HostState === "object");
assert(typeof _InstanceType === "object");
assert(typeof VcfVersion === "object");
assert(typeof VlanState === "object");
// errors
assert(EvsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListEnvironmentHosts === "function")
assert(typeof paginateListEnvironmentVlans === "function")
assert(typeof paginateListEnvironments === "function")
console.log(`Evs index test passed.`);
