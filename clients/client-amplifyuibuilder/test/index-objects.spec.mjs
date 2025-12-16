import {
  ActionParameters$,
  AmplifyUIBuilder,
  AmplifyUIBuilderClient,
  AmplifyUIBuilderServiceException,
  ApiConfiguration$,
  CodegenDependency$,
  CodegenFeatureFlags$,
  CodegenGenericDataEnum$,
  CodegenGenericDataField$,
  CodegenGenericDataFieldDataType,
  CodegenGenericDataModel$,
  CodegenGenericDataNonModel$,
  CodegenGenericDataRelationshipType$,
  CodegenJob$,
  CodegenJobAsset$,
  CodegenJobGenericDataSchema$,
  CodegenJobGenericDataSourceType,
  CodegenJobRenderConfig$,
  CodegenJobStatus,
  CodegenJobSummary$,
  Component$,
  ComponentBindingPropertiesValue$,
  ComponentBindingPropertiesValueProperties$,
  ComponentChild$,
  ComponentConditionProperty$,
  ComponentDataConfiguration$,
  ComponentEvent$,
  ComponentProperty$,
  ComponentPropertyBindingProperties$,
  ComponentSummary$,
  ComponentVariant$,
  CreateComponent$,
  CreateComponentCommand,
  CreateComponentData$,
  CreateComponentRequest$,
  CreateComponentResponse$,
  CreateForm$,
  CreateFormCommand,
  CreateFormData$,
  CreateFormRequest$,
  CreateFormResponse$,
  CreateTheme$,
  CreateThemeCommand,
  CreateThemeData$,
  CreateThemeRequest$,
  CreateThemeResponse$,
  DataStoreRenderConfig$,
  DeleteComponent$,
  DeleteComponentCommand,
  DeleteComponentRequest$,
  DeleteForm$,
  DeleteFormCommand,
  DeleteFormRequest$,
  DeleteTheme$,
  DeleteThemeCommand,
  DeleteThemeRequest$,
  ExchangeCodeForToken$,
  ExchangeCodeForTokenCommand,
  ExchangeCodeForTokenRequest$,
  ExchangeCodeForTokenRequestBody$,
  ExchangeCodeForTokenResponse$,
  ExportComponents$,
  ExportComponentsCommand,
  ExportComponentsRequest$,
  ExportComponentsResponse$,
  ExportForms$,
  ExportFormsCommand,
  ExportFormsRequest$,
  ExportFormsResponse$,
  ExportThemes$,
  ExportThemesCommand,
  ExportThemesRequest$,
  ExportThemesResponse$,
  FieldConfig$,
  FieldInputConfig$,
  FieldPosition$,
  FieldValidationConfiguration$,
  FileUploaderFieldConfig$,
  FixedPosition,
  Form$,
  FormActionType,
  FormBindingElement$,
  FormButton$,
  FormButtonsPosition,
  FormCTA$,
  FormDataSourceType,
  FormDataTypeConfig$,
  FormInputBindingPropertiesValue$,
  FormInputBindingPropertiesValueProperties$,
  FormInputValueProperty$,
  FormInputValuePropertyBindingProperties$,
  FormStyle$,
  FormStyleConfig$,
  FormSummary$,
  GenericDataRelationshipType,
  GetCodegenJob$,
  GetCodegenJobCommand,
  GetCodegenJobRequest$,
  GetCodegenJobResponse$,
  GetComponent$,
  GetComponentCommand,
  GetComponentRequest$,
  GetComponentResponse$,
  GetForm$,
  GetFormCommand,
  GetFormRequest$,
  GetFormResponse$,
  GetMetadata$,
  GetMetadataCommand,
  GetMetadataRequest$,
  GetMetadataResponse$,
  GetTheme$,
  GetThemeCommand,
  GetThemeRequest$,
  GetThemeResponse$,
  GraphQLRenderConfig$,
  InternalServerException,
  InternalServerException$,
  InvalidParameterException,
  InvalidParameterException$,
  JSModule,
  JSScript,
  JSTarget,
  LabelDecorator,
  ListCodegenJobs$,
  ListCodegenJobsCommand,
  ListCodegenJobsRequest$,
  ListCodegenJobsResponse$,
  ListComponents$,
  ListComponentsCommand,
  ListComponentsRequest$,
  ListComponentsResponse$,
  ListForms$,
  ListFormsCommand,
  ListFormsRequest$,
  ListFormsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListThemes$,
  ListThemesCommand,
  ListThemesRequest$,
  ListThemesResponse$,
  MutationActionSetStateParameter$,
  NoApiRenderConfig$,
  Predicate$,
  PutMetadataFlag$,
  PutMetadataFlagBody$,
  PutMetadataFlagCommand,
  PutMetadataFlagRequest$,
  ReactStartCodegenJobData$,
  RefreshToken$,
  RefreshTokenCommand,
  RefreshTokenRequest$,
  RefreshTokenRequestBody$,
  RefreshTokenResponse$,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SectionalElement$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortDirection,
  SortProperty$,
  StartCodegenJob$,
  StartCodegenJobCommand,
  StartCodegenJobData$,
  StartCodegenJobRequest$,
  StartCodegenJobResponse$,
  StorageAccessLevel,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Theme$,
  ThemeSummary$,
  ThemeValue$,
  ThemeValues$,
  ThrottlingException,
  ThrottlingException$,
  TokenProviders,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateComponent$,
  UpdateComponentCommand,
  UpdateComponentData$,
  UpdateComponentRequest$,
  UpdateComponentResponse$,
  UpdateForm$,
  UpdateFormCommand,
  UpdateFormData$,
  UpdateFormRequest$,
  UpdateFormResponse$,
  UpdateTheme$,
  UpdateThemeCommand,
  UpdateThemeData$,
  UpdateThemeRequest$,
  UpdateThemeResponse$,
  ValueMapping$,
  ValueMappings$,
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
assert(typeof CreateComponent$ === "object");
assert(typeof CreateFormCommand === "function");
assert(typeof CreateForm$ === "object");
assert(typeof CreateThemeCommand === "function");
assert(typeof CreateTheme$ === "object");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteComponent$ === "object");
assert(typeof DeleteFormCommand === "function");
assert(typeof DeleteForm$ === "object");
assert(typeof DeleteThemeCommand === "function");
assert(typeof DeleteTheme$ === "object");
assert(typeof ExchangeCodeForTokenCommand === "function");
assert(typeof ExchangeCodeForToken$ === "object");
assert(typeof ExportComponentsCommand === "function");
assert(typeof ExportComponents$ === "object");
assert(typeof ExportFormsCommand === "function");
assert(typeof ExportForms$ === "object");
assert(typeof ExportThemesCommand === "function");
assert(typeof ExportThemes$ === "object");
assert(typeof GetCodegenJobCommand === "function");
assert(typeof GetCodegenJob$ === "object");
assert(typeof GetComponentCommand === "function");
assert(typeof GetComponent$ === "object");
assert(typeof GetFormCommand === "function");
assert(typeof GetForm$ === "object");
assert(typeof GetMetadataCommand === "function");
assert(typeof GetMetadata$ === "object");
assert(typeof GetThemeCommand === "function");
assert(typeof GetTheme$ === "object");
assert(typeof ListCodegenJobsCommand === "function");
assert(typeof ListCodegenJobs$ === "object");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponents$ === "object");
assert(typeof ListFormsCommand === "function");
assert(typeof ListForms$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListThemesCommand === "function");
assert(typeof ListThemes$ === "object");
assert(typeof PutMetadataFlagCommand === "function");
assert(typeof PutMetadataFlag$ === "object");
assert(typeof RefreshTokenCommand === "function");
assert(typeof RefreshToken$ === "object");
assert(typeof StartCodegenJobCommand === "function");
assert(typeof StartCodegenJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateComponentCommand === "function");
assert(typeof UpdateComponent$ === "object");
assert(typeof UpdateFormCommand === "function");
assert(typeof UpdateForm$ === "object");
assert(typeof UpdateThemeCommand === "function");
assert(typeof UpdateTheme$ === "object");
// structural schemas
assert(typeof ActionParameters$ === "object");
assert(typeof ApiConfiguration$ === "object");
assert(typeof CodegenDependency$ === "object");
assert(typeof CodegenFeatureFlags$ === "object");
assert(typeof CodegenGenericDataEnum$ === "object");
assert(typeof CodegenGenericDataField$ === "object");
assert(typeof CodegenGenericDataModel$ === "object");
assert(typeof CodegenGenericDataNonModel$ === "object");
assert(typeof CodegenGenericDataRelationshipType$ === "object");
assert(typeof CodegenJob$ === "object");
assert(typeof CodegenJobAsset$ === "object");
assert(typeof CodegenJobGenericDataSchema$ === "object");
assert(typeof CodegenJobRenderConfig$ === "object");
assert(typeof CodegenJobSummary$ === "object");
assert(typeof Component$ === "object");
assert(typeof ComponentBindingPropertiesValue$ === "object");
assert(typeof ComponentBindingPropertiesValueProperties$ === "object");
assert(typeof ComponentChild$ === "object");
assert(typeof ComponentConditionProperty$ === "object");
assert(typeof ComponentDataConfiguration$ === "object");
assert(typeof ComponentEvent$ === "object");
assert(typeof ComponentProperty$ === "object");
assert(typeof ComponentPropertyBindingProperties$ === "object");
assert(typeof ComponentSummary$ === "object");
assert(typeof ComponentVariant$ === "object");
assert(typeof CreateComponentData$ === "object");
assert(typeof CreateComponentRequest$ === "object");
assert(typeof CreateComponentResponse$ === "object");
assert(typeof CreateFormData$ === "object");
assert(typeof CreateFormRequest$ === "object");
assert(typeof CreateFormResponse$ === "object");
assert(typeof CreateThemeData$ === "object");
assert(typeof CreateThemeRequest$ === "object");
assert(typeof CreateThemeResponse$ === "object");
assert(typeof DataStoreRenderConfig$ === "object");
assert(typeof DeleteComponentRequest$ === "object");
assert(typeof DeleteFormRequest$ === "object");
assert(typeof DeleteThemeRequest$ === "object");
assert(typeof ExchangeCodeForTokenRequest$ === "object");
assert(typeof ExchangeCodeForTokenRequestBody$ === "object");
assert(typeof ExchangeCodeForTokenResponse$ === "object");
assert(typeof ExportComponentsRequest$ === "object");
assert(typeof ExportComponentsResponse$ === "object");
assert(typeof ExportFormsRequest$ === "object");
assert(typeof ExportFormsResponse$ === "object");
assert(typeof ExportThemesRequest$ === "object");
assert(typeof ExportThemesResponse$ === "object");
assert(typeof FieldConfig$ === "object");
assert(typeof FieldInputConfig$ === "object");
assert(typeof FieldPosition$ === "object");
assert(typeof FieldValidationConfiguration$ === "object");
assert(typeof FileUploaderFieldConfig$ === "object");
assert(typeof Form$ === "object");
assert(typeof FormBindingElement$ === "object");
assert(typeof FormButton$ === "object");
assert(typeof FormCTA$ === "object");
assert(typeof FormDataTypeConfig$ === "object");
assert(typeof FormInputBindingPropertiesValue$ === "object");
assert(typeof FormInputBindingPropertiesValueProperties$ === "object");
assert(typeof FormInputValueProperty$ === "object");
assert(typeof FormInputValuePropertyBindingProperties$ === "object");
assert(typeof FormStyle$ === "object");
assert(typeof FormStyleConfig$ === "object");
assert(typeof FormSummary$ === "object");
assert(typeof GetCodegenJobRequest$ === "object");
assert(typeof GetCodegenJobResponse$ === "object");
assert(typeof GetComponentRequest$ === "object");
assert(typeof GetComponentResponse$ === "object");
assert(typeof GetFormRequest$ === "object");
assert(typeof GetFormResponse$ === "object");
assert(typeof GetMetadataRequest$ === "object");
assert(typeof GetMetadataResponse$ === "object");
assert(typeof GetThemeRequest$ === "object");
assert(typeof GetThemeResponse$ === "object");
assert(typeof GraphQLRenderConfig$ === "object");
assert(typeof ListCodegenJobsRequest$ === "object");
assert(typeof ListCodegenJobsResponse$ === "object");
assert(typeof ListComponentsRequest$ === "object");
assert(typeof ListComponentsResponse$ === "object");
assert(typeof ListFormsRequest$ === "object");
assert(typeof ListFormsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListThemesRequest$ === "object");
assert(typeof ListThemesResponse$ === "object");
assert(typeof MutationActionSetStateParameter$ === "object");
assert(typeof NoApiRenderConfig$ === "object");
assert(typeof Predicate$ === "object");
assert(typeof PutMetadataFlagBody$ === "object");
assert(typeof PutMetadataFlagRequest$ === "object");
assert(typeof ReactStartCodegenJobData$ === "object");
assert(typeof RefreshTokenRequest$ === "object");
assert(typeof RefreshTokenRequestBody$ === "object");
assert(typeof RefreshTokenResponse$ === "object");
assert(typeof SectionalElement$ === "object");
assert(typeof SortProperty$ === "object");
assert(typeof StartCodegenJobData$ === "object");
assert(typeof StartCodegenJobRequest$ === "object");
assert(typeof StartCodegenJobResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Theme$ === "object");
assert(typeof ThemeSummary$ === "object");
assert(typeof ThemeValue$ === "object");
assert(typeof ThemeValues$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateComponentData$ === "object");
assert(typeof UpdateComponentRequest$ === "object");
assert(typeof UpdateComponentResponse$ === "object");
assert(typeof UpdateFormData$ === "object");
assert(typeof UpdateFormRequest$ === "object");
assert(typeof UpdateFormResponse$ === "object");
assert(typeof UpdateThemeData$ === "object");
assert(typeof UpdateThemeRequest$ === "object");
assert(typeof UpdateThemeResponse$ === "object");
assert(typeof ValueMapping$ === "object");
assert(typeof ValueMappings$ === "object");
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
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterException.prototype instanceof AmplifyUIBuilderServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(ResourceConflictException.prototype instanceof AmplifyUIBuilderServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AmplifyUIBuilderServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AmplifyUIBuilderServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AmplifyUIBuilderServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof AmplifyUIBuilderServiceException);
assert(typeof UnauthorizedException$ === "object");
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
