import {
  AmplifyUIBuilder,
  AmplifyUIBuilderClient,
  AmplifyUIBuilderServiceException,
  CodegenGenericDataFieldDataType,
  CodegenJobGenericDataSourceType,
  CodegenJobStatus,
  CreateComponentCommand,
  CreateFormCommand,
  CreateThemeCommand,
  DeleteComponentCommand,
  DeleteFormCommand,
  DeleteThemeCommand,
  ExchangeCodeForTokenCommand,
  ExportComponentsCommand,
  ExportFormsCommand,
  ExportThemesCommand,
  FixedPosition,
  FormActionType,
  FormButtonsPosition,
  FormDataSourceType,
  GenericDataRelationshipType,
  GetCodegenJobCommand,
  GetComponentCommand,
  GetFormCommand,
  GetMetadataCommand,
  GetThemeCommand,
  InternalServerException,
  InvalidParameterException,
  JSModule,
  JSScript,
  JSTarget,
  LabelDecorator,
  ListCodegenJobsCommand,
  ListComponentsCommand,
  ListFormsCommand,
  ListTagsForResourceCommand,
  ListThemesCommand,
  PutMetadataFlagCommand,
  RefreshTokenCommand,
  ResourceConflictException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SortDirection,
  StartCodegenJobCommand,
  StorageAccessLevel,
  TagResourceCommand,
  ThrottlingException,
  TokenProviders,
  UnauthorizedException,
  UntagResourceCommand,
  UpdateComponentCommand,
  UpdateFormCommand,
  UpdateThemeCommand,
  paginateExportComponents,
  paginateExportForms,
  paginateExportThemes,
  paginateListCodegenJobs,
  paginateListComponents,
  paginateListForms,
  paginateListThemes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AmplifyUIBuilderClient === "function");
assert(typeof AmplifyUIBuilder === "function");
// commands
assert(typeof CreateComponentCommand === "function");
assert(typeof CreateFormCommand === "function");
assert(typeof CreateThemeCommand === "function");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteFormCommand === "function");
assert(typeof DeleteThemeCommand === "function");
assert(typeof ExchangeCodeForTokenCommand === "function");
assert(typeof ExportComponentsCommand === "function");
assert(typeof ExportFormsCommand === "function");
assert(typeof ExportThemesCommand === "function");
assert(typeof GetCodegenJobCommand === "function");
assert(typeof GetComponentCommand === "function");
assert(typeof GetFormCommand === "function");
assert(typeof GetMetadataCommand === "function");
assert(typeof GetThemeCommand === "function");
assert(typeof ListCodegenJobsCommand === "function");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListFormsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListThemesCommand === "function");
assert(typeof PutMetadataFlagCommand === "function");
assert(typeof RefreshTokenCommand === "function");
assert(typeof StartCodegenJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateComponentCommand === "function");
assert(typeof UpdateFormCommand === "function");
assert(typeof UpdateThemeCommand === "function");
// enums
assert(typeof CodegenGenericDataFieldDataType === "object");
assert(typeof CodegenJobGenericDataSourceType === "object");
assert(typeof CodegenJobStatus === "object");
assert(typeof FixedPosition === "object");
assert(typeof FormActionType === "object");
assert(typeof FormButtonsPosition === "object");
assert(typeof FormDataSourceType === "object");
assert(typeof GenericDataRelationshipType === "object");
assert(typeof JSModule === "object");
assert(typeof JSScript === "object");
assert(typeof JSTarget === "object");
assert(typeof LabelDecorator === "object");
assert(typeof SortDirection === "object");
assert(typeof StorageAccessLevel === "object");
assert(typeof TokenProviders === "object");
// errors
assert(InternalServerException.prototype instanceof AmplifyUIBuilderServiceException);
assert(InvalidParameterException.prototype instanceof AmplifyUIBuilderServiceException);
assert(ResourceConflictException.prototype instanceof AmplifyUIBuilderServiceException);
assert(ResourceNotFoundException.prototype instanceof AmplifyUIBuilderServiceException);
assert(ServiceQuotaExceededException.prototype instanceof AmplifyUIBuilderServiceException);
assert(ThrottlingException.prototype instanceof AmplifyUIBuilderServiceException);
assert(UnauthorizedException.prototype instanceof AmplifyUIBuilderServiceException);
assert(AmplifyUIBuilderServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateExportComponents === "function");
assert(typeof paginateExportForms === "function");
assert(typeof paginateExportThemes === "function");
assert(typeof paginateListCodegenJobs === "function");
assert(typeof paginateListComponents === "function");
assert(typeof paginateListForms === "function");
assert(typeof paginateListThemes === "function");
console.log(`AmplifyUIBuilder index test passed.`);
