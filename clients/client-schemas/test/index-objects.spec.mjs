import {
  BadRequestException,
  BadRequestException$,
  CodeGenerationStatus,
  ConflictException,
  ConflictException$,
  CreateDiscoverer$,
  CreateDiscovererCommand,
  CreateDiscovererRequest$,
  CreateDiscovererResponse$,
  CreateRegistry$,
  CreateRegistryCommand,
  CreateRegistryRequest$,
  CreateRegistryResponse$,
  CreateSchema$,
  CreateSchemaCommand,
  CreateSchemaRequest$,
  CreateSchemaResponse$,
  DeleteDiscoverer$,
  DeleteDiscovererCommand,
  DeleteDiscovererRequest$,
  DeleteRegistry$,
  DeleteRegistryCommand,
  DeleteRegistryRequest$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteSchema$,
  DeleteSchemaCommand,
  DeleteSchemaRequest$,
  DeleteSchemaVersion$,
  DeleteSchemaVersionCommand,
  DeleteSchemaVersionRequest$,
  DescribeCodeBinding$,
  DescribeCodeBindingCommand,
  DescribeCodeBindingRequest$,
  DescribeCodeBindingResponse$,
  DescribeDiscoverer$,
  DescribeDiscovererCommand,
  DescribeDiscovererRequest$,
  DescribeDiscovererResponse$,
  DescribeRegistry$,
  DescribeRegistryCommand,
  DescribeRegistryRequest$,
  DescribeRegistryResponse$,
  DescribeSchema$,
  DescribeSchemaCommand,
  DescribeSchemaRequest$,
  DescribeSchemaResponse$,
  DiscovererState,
  DiscovererSummary$,
  ExportSchema$,
  ExportSchemaCommand,
  ExportSchemaRequest$,
  ExportSchemaResponse$,
  ForbiddenException,
  ForbiddenException$,
  GetCodeBindingSource$,
  GetCodeBindingSourceCommand,
  GetCodeBindingSourceRequest$,
  GetCodeBindingSourceResponse$,
  GetDiscoveredSchema$,
  GetDiscoveredSchemaCommand,
  GetDiscoveredSchemaRequest$,
  GetDiscoveredSchemaResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GoneException,
  GoneException$,
  InternalServerErrorException,
  InternalServerErrorException$,
  ListDiscoverers$,
  ListDiscoverersCommand,
  ListDiscoverersRequest$,
  ListDiscoverersResponse$,
  ListRegistries$,
  ListRegistriesCommand,
  ListRegistriesRequest$,
  ListRegistriesResponse$,
  ListSchemaVersions$,
  ListSchemaVersionsCommand,
  ListSchemaVersionsRequest$,
  ListSchemaVersionsResponse$,
  ListSchemas$,
  ListSchemasCommand,
  ListSchemasRequest$,
  ListSchemasResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotFoundException,
  NotFoundException$,
  PreconditionFailedException,
  PreconditionFailedException$,
  PutCodeBinding$,
  PutCodeBindingCommand,
  PutCodeBindingRequest$,
  PutCodeBindingResponse$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RegistrySummary$,
  SchemaSummary$,
  SchemaVersionSummary$,
  Schemas,
  SchemasClient,
  SchemasServiceException,
  SearchSchemaSummary$,
  SearchSchemaVersionSummary$,
  SearchSchemas$,
  SearchSchemasCommand,
  SearchSchemasRequest$,
  SearchSchemasResponse$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartDiscoverer$,
  StartDiscovererCommand,
  StartDiscovererRequest$,
  StartDiscovererResponse$,
  StopDiscoverer$,
  StopDiscovererCommand,
  StopDiscovererRequest$,
  StopDiscovererResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TooManyRequestsException,
  TooManyRequestsException$,
  Type,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateDiscoverer$,
  UpdateDiscovererCommand,
  UpdateDiscovererRequest$,
  UpdateDiscovererResponse$,
  UpdateRegistry$,
  UpdateRegistryCommand,
  UpdateRegistryRequest$,
  UpdateRegistryResponse$,
  UpdateSchema$,
  UpdateSchemaCommand,
  UpdateSchemaRequest$,
  UpdateSchemaResponse$,
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
assert(typeof CreateDiscoverer$ === "object");
assert(typeof CreateRegistryCommand === "function");
assert(typeof CreateRegistry$ === "object");
assert(typeof CreateSchemaCommand === "function");
assert(typeof CreateSchema$ === "object");
assert(typeof DeleteDiscovererCommand === "function");
assert(typeof DeleteDiscoverer$ === "object");
assert(typeof DeleteRegistryCommand === "function");
assert(typeof DeleteRegistry$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteSchemaCommand === "function");
assert(typeof DeleteSchema$ === "object");
assert(typeof DeleteSchemaVersionCommand === "function");
assert(typeof DeleteSchemaVersion$ === "object");
assert(typeof DescribeCodeBindingCommand === "function");
assert(typeof DescribeCodeBinding$ === "object");
assert(typeof DescribeDiscovererCommand === "function");
assert(typeof DescribeDiscoverer$ === "object");
assert(typeof DescribeRegistryCommand === "function");
assert(typeof DescribeRegistry$ === "object");
assert(typeof DescribeSchemaCommand === "function");
assert(typeof DescribeSchema$ === "object");
assert(typeof ExportSchemaCommand === "function");
assert(typeof ExportSchema$ === "object");
assert(typeof GetCodeBindingSourceCommand === "function");
assert(typeof GetCodeBindingSource$ === "object");
assert(typeof GetDiscoveredSchemaCommand === "function");
assert(typeof GetDiscoveredSchema$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListDiscoverersCommand === "function");
assert(typeof ListDiscoverers$ === "object");
assert(typeof ListRegistriesCommand === "function");
assert(typeof ListRegistries$ === "object");
assert(typeof ListSchemasCommand === "function");
assert(typeof ListSchemas$ === "object");
assert(typeof ListSchemaVersionsCommand === "function");
assert(typeof ListSchemaVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutCodeBindingCommand === "function");
assert(typeof PutCodeBinding$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof SearchSchemasCommand === "function");
assert(typeof SearchSchemas$ === "object");
assert(typeof StartDiscovererCommand === "function");
assert(typeof StartDiscoverer$ === "object");
assert(typeof StopDiscovererCommand === "function");
assert(typeof StopDiscoverer$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDiscovererCommand === "function");
assert(typeof UpdateDiscoverer$ === "object");
assert(typeof UpdateRegistryCommand === "function");
assert(typeof UpdateRegistry$ === "object");
assert(typeof UpdateSchemaCommand === "function");
assert(typeof UpdateSchema$ === "object");
// structural schemas
assert(typeof CreateDiscovererRequest$ === "object");
assert(typeof CreateDiscovererResponse$ === "object");
assert(typeof CreateRegistryRequest$ === "object");
assert(typeof CreateRegistryResponse$ === "object");
assert(typeof CreateSchemaRequest$ === "object");
assert(typeof CreateSchemaResponse$ === "object");
assert(typeof DeleteDiscovererRequest$ === "object");
assert(typeof DeleteRegistryRequest$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteSchemaRequest$ === "object");
assert(typeof DeleteSchemaVersionRequest$ === "object");
assert(typeof DescribeCodeBindingRequest$ === "object");
assert(typeof DescribeCodeBindingResponse$ === "object");
assert(typeof DescribeDiscovererRequest$ === "object");
assert(typeof DescribeDiscovererResponse$ === "object");
assert(typeof DescribeRegistryRequest$ === "object");
assert(typeof DescribeRegistryResponse$ === "object");
assert(typeof DescribeSchemaRequest$ === "object");
assert(typeof DescribeSchemaResponse$ === "object");
assert(typeof DiscovererSummary$ === "object");
assert(typeof ExportSchemaRequest$ === "object");
assert(typeof ExportSchemaResponse$ === "object");
assert(typeof GetCodeBindingSourceRequest$ === "object");
assert(typeof GetCodeBindingSourceResponse$ === "object");
assert(typeof GetDiscoveredSchemaRequest$ === "object");
assert(typeof GetDiscoveredSchemaResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof ListDiscoverersRequest$ === "object");
assert(typeof ListDiscoverersResponse$ === "object");
assert(typeof ListRegistriesRequest$ === "object");
assert(typeof ListRegistriesResponse$ === "object");
assert(typeof ListSchemasRequest$ === "object");
assert(typeof ListSchemasResponse$ === "object");
assert(typeof ListSchemaVersionsRequest$ === "object");
assert(typeof ListSchemaVersionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutCodeBindingRequest$ === "object");
assert(typeof PutCodeBindingResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RegistrySummary$ === "object");
assert(typeof SchemaSummary$ === "object");
assert(typeof SchemaVersionSummary$ === "object");
assert(typeof SearchSchemasRequest$ === "object");
assert(typeof SearchSchemasResponse$ === "object");
assert(typeof SearchSchemaSummary$ === "object");
assert(typeof SearchSchemaVersionSummary$ === "object");
assert(typeof StartDiscovererRequest$ === "object");
assert(typeof StartDiscovererResponse$ === "object");
assert(typeof StopDiscovererRequest$ === "object");
assert(typeof StopDiscovererResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateDiscovererRequest$ === "object");
assert(typeof UpdateDiscovererResponse$ === "object");
assert(typeof UpdateRegistryRequest$ === "object");
assert(typeof UpdateRegistryResponse$ === "object");
assert(typeof UpdateSchemaRequest$ === "object");
assert(typeof UpdateSchemaResponse$ === "object");
// enums
assert(typeof CodeGenerationStatus === "object");
assert(typeof DiscovererState === "object");
assert(typeof Type === "object");
// errors
assert(BadRequestException.prototype instanceof SchemasServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof SchemasServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof SchemasServiceException);
assert(typeof ForbiddenException$ === "object");
assert(GoneException.prototype instanceof SchemasServiceException);
assert(typeof GoneException$ === "object");
assert(InternalServerErrorException.prototype instanceof SchemasServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof SchemasServiceException);
assert(typeof NotFoundException$ === "object");
assert(PreconditionFailedException.prototype instanceof SchemasServiceException);
assert(typeof PreconditionFailedException$ === "object");
assert(ServiceUnavailableException.prototype instanceof SchemasServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof SchemasServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnauthorizedException.prototype instanceof SchemasServiceException);
assert(typeof UnauthorizedException$ === "object");
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
