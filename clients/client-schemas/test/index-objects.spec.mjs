import {
  CodeGenerationStatus,
  CreateDiscovererCommand,
  CreateRegistryCommand,
  CreateSchemaCommand,
  DeleteDiscovererCommand,
  DeleteRegistryCommand,
  DeleteResourcePolicyCommand,
  DeleteSchemaCommand,
  DeleteSchemaVersionCommand,
  DescribeCodeBindingCommand,
  DescribeDiscovererCommand,
  DescribeRegistryCommand,
  DescribeSchemaCommand,
  DiscovererState,
  ExportSchemaCommand,
  GetCodeBindingSourceCommand,
  GetDiscoveredSchemaCommand,
  GetResourcePolicyCommand,
  ListDiscoverersCommand,
  ListRegistriesCommand,
  ListSchemaVersionsCommand,
  ListSchemasCommand,
  ListTagsForResourceCommand,
  PutCodeBindingCommand,
  PutResourcePolicyCommand,
  Schemas,
  SchemasClient,
  SchemasServiceException,
  SearchSchemasCommand,
  StartDiscovererCommand,
  StopDiscovererCommand,
  TagResourceCommand,
  Type,
  UntagResourceCommand,
  UpdateDiscovererCommand,
  UpdateRegistryCommand,
  UpdateSchemaCommand,
  paginateListDiscoverers,
  paginateListRegistries,
  paginateListSchemaVersions,
  paginateListSchemas,
  paginateSearchSchemas,
  waitForCodeBindingExists,
  waitUntilCodeBindingExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SchemasClient === "function")
assert(typeof Schemas === "function")
// commands
assert(typeof CreateDiscovererCommand === "function")
assert(typeof CreateRegistryCommand === "function")
assert(typeof CreateSchemaCommand === "function")
assert(typeof DeleteDiscovererCommand === "function")
assert(typeof DeleteRegistryCommand === "function")
assert(typeof DeleteResourcePolicyCommand === "function")
assert(typeof DeleteSchemaCommand === "function")
assert(typeof DeleteSchemaVersionCommand === "function")
assert(typeof DescribeCodeBindingCommand === "function")
assert(typeof DescribeDiscovererCommand === "function")
assert(typeof DescribeRegistryCommand === "function")
assert(typeof DescribeSchemaCommand === "function")
assert(typeof ExportSchemaCommand === "function")
assert(typeof GetCodeBindingSourceCommand === "function")
assert(typeof GetDiscoveredSchemaCommand === "function")
assert(typeof GetResourcePolicyCommand === "function")
assert(typeof ListDiscoverersCommand === "function")
assert(typeof ListRegistriesCommand === "function")
assert(typeof ListSchemasCommand === "function")
assert(typeof ListSchemaVersionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutCodeBindingCommand === "function")
assert(typeof PutResourcePolicyCommand === "function")
assert(typeof SearchSchemasCommand === "function")
assert(typeof StartDiscovererCommand === "function")
assert(typeof StopDiscovererCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDiscovererCommand === "function")
assert(typeof UpdateRegistryCommand === "function")
assert(typeof UpdateSchemaCommand === "function")
// enums
assert(typeof CodeGenerationStatus === "object");
assert(typeof DiscovererState === "object");
assert(typeof Type === "object");
// errors
assert(SchemasServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForCodeBindingExists === "function")
assert(typeof waitUntilCodeBindingExists === "function")
// paginators
assert(typeof paginateListDiscoverers === "function")
assert(typeof paginateListRegistries === "function")
assert(typeof paginateListSchemaVersions === "function")
assert(typeof paginateListSchemas === "function")
assert(typeof paginateSearchSchemas === "function")
console.log(`Schemas index test passed.`);
