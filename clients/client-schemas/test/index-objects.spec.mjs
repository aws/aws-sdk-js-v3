import {
  BadRequestException,
  CodeGenerationStatus,
  ConflictException,
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
  ForbiddenException,
  GetCodeBindingSourceCommand,
  GetDiscoveredSchemaCommand,
  GetResourcePolicyCommand,
  GoneException,
  InternalServerErrorException,
  ListDiscoverersCommand,
  ListRegistriesCommand,
  ListSchemaVersionsCommand,
  ListSchemasCommand,
  ListTagsForResourceCommand,
  NotFoundException,
  PreconditionFailedException,
  PutCodeBindingCommand,
  PutResourcePolicyCommand,
  Schemas,
  SchemasClient,
  SchemasServiceException,
  SearchSchemasCommand,
  ServiceUnavailableException,
  StartDiscovererCommand,
  StopDiscovererCommand,
  TagResourceCommand,
  TooManyRequestsException,
  Type,
  UnauthorizedException,
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
assert(typeof SchemasClient === "function");
assert(typeof Schemas === "function");
// commands
assert(typeof CreateDiscovererCommand === "function");
assert(typeof CreateRegistryCommand === "function");
assert(typeof CreateSchemaCommand === "function");
assert(typeof DeleteDiscovererCommand === "function");
assert(typeof DeleteRegistryCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteSchemaCommand === "function");
assert(typeof DeleteSchemaVersionCommand === "function");
assert(typeof DescribeCodeBindingCommand === "function");
assert(typeof DescribeDiscovererCommand === "function");
assert(typeof DescribeRegistryCommand === "function");
assert(typeof DescribeSchemaCommand === "function");
assert(typeof ExportSchemaCommand === "function");
assert(typeof GetCodeBindingSourceCommand === "function");
assert(typeof GetDiscoveredSchemaCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListDiscoverersCommand === "function");
assert(typeof ListRegistriesCommand === "function");
assert(typeof ListSchemasCommand === "function");
assert(typeof ListSchemaVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutCodeBindingCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof SearchSchemasCommand === "function");
assert(typeof StartDiscovererCommand === "function");
assert(typeof StopDiscovererCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDiscovererCommand === "function");
assert(typeof UpdateRegistryCommand === "function");
assert(typeof UpdateSchemaCommand === "function");
// enums
assert(typeof CodeGenerationStatus === "object");
assert(typeof DiscovererState === "object");
assert(typeof Type === "object");
// errors
assert(BadRequestException.prototype instanceof SchemasServiceException);
assert(ConflictException.prototype instanceof SchemasServiceException);
assert(ForbiddenException.prototype instanceof SchemasServiceException);
assert(GoneException.prototype instanceof SchemasServiceException);
assert(InternalServerErrorException.prototype instanceof SchemasServiceException);
assert(NotFoundException.prototype instanceof SchemasServiceException);
assert(PreconditionFailedException.prototype instanceof SchemasServiceException);
assert(ServiceUnavailableException.prototype instanceof SchemasServiceException);
assert(TooManyRequestsException.prototype instanceof SchemasServiceException);
assert(UnauthorizedException.prototype instanceof SchemasServiceException);
assert(SchemasServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCodeBindingExists === "function");
assert(typeof waitUntilCodeBindingExists === "function");
// paginators
assert(typeof paginateListDiscoverers === "function");
assert(typeof paginateListRegistries === "function");
assert(typeof paginateListSchemaVersions === "function");
assert(typeof paginateListSchemas === "function");
assert(typeof paginateSearchSchemas === "function");
console.log(`Schemas index test passed.`);
